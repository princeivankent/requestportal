<?php

namespace App\Http\Controllers\Api;

use App\Models\Employee;

use DB;
use Illuminate\Http\Request;
use App\Services\CodeGenerator;
use App\Http\Controllers\Controller;
use App\Services\ApiValidator;
use App\Models\Request as RequestModel;
use App\Models\RequestItem;

class RequestController extends Controller
{
    public function get_requests($request_code = null)
    {
        $query = DB::table('requests AS rs');

        $query->select(
            'rs.id',
            'rs.request_code',
            'rs.created_by',
            'rs.approver_id',
            'rs.justification',
            'ri.item_id',
            'ri.target_date',
            'ri.remarks',
            'ri.item_approver_id',
            'i.description as item_description',
            'ipt.id',
            'ipt.type AS approver_type'
        )
        ->leftJoin('request_items AS ri', 'ri.request_id', '=', 'rs.id')
        ->leftJoin('items AS i', 'i.id', '=', 'ri.item_id')
        ->leftJoin('item_approver_types AS ipt', 'ipt.id', '=', 'i.item_approver_type_id');

        if ($request_code)
            return response()->json($query->where([
                'request_code' => $request_code
            ])->first());

        return response()->json($query->get());
    }

    public function send_request(
        Request $request,
        CodeGenerator $code_generator,
        Employee $employee,
        ApiValidator $validator
    )
    {
        try {
            DB::beginTransaction();

            $req_status = $validator->validate($request->all(), [
                'created_by'    => 'required',
                'approver_id'   => 'required',
                'justification' => 'string|nullable|max:255',
                'item_id'       => 'required|exists:items,id',
                'target_date'   => 'required|date'
            ]);

            if ($req_status)
                return response()->json($req_status, 422);

            // Save requests table
            $query1 = RequestModel::create([
                'request_code' => $code_generator->generate(),
                'created_by' => $request->created_by,
                'approver_id' => $request->approver_id, // Check if requestor is lower than the approver
                'justification' => $request->justification,
            ]);

            $query2 = RequestItem::create([
                'request_id' => $query1->id,
                'item_id' => $request->item_id,
                'target_date' => $request->target_date
            ]);

            DB::commit();

            return response()->json([
                'message' => 'Request has been submitted!'
            ], 200);
        } 
        catch (Exception $ex) {
            //throw $th;
            DB::rollBack();

            return response()->json([
                'message' => $ex
            ], 500);
        }
    }
}
