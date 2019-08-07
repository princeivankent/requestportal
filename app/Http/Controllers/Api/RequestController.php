<?php

namespace App\Http\Controllers\Api;

use DB;
use Illuminate\Http\Request;
use App\Services\CodeGenerator;
use App\Http\Controllers\Controller;
use App\Models\Request as RequestModel;
use App\Models\RequestItem;
use Validator;

class RequestController extends Controller
{
    public function get_requests($id = null)
    {
        $query = RequestModel::with('requested_items.item.item_approver_type');

        if ($id) {
            $query_id = $query->whereId($id)->first();

            return response()->json($query_id);
        }

        return response()->json($query->get());
    }

    public function getRequestsByEmployeeId($employee_id, $id = null)
    {
        $query = RequestModel::with('requested_items.item.item_approver_type');

        if ($id)
            $sub_query = $query->where(['id' => $id, 'created_by' => $employee_id]);
        else
            $sub_query = $query->whereCreatedBy($employee_id)->orderBy('created_at', 'desc');
            
        return response()->json($sub_query->get());
    }

    public function send_request(
        Request $request,
        CodeGenerator $code_generator
    )
    {
        $validate = Validator::make($request->all(), [
            'created_by'    => 'required',
            'approver_id'   => 'required',
            'justification' => 'required',
            'items'         => 'required|array'
        ]);

        if ($validate->fails()) return response()->json([
            'form_errors' => $validate->errors()
        ], 422);

        try {
            DB::beginTransaction();

            // Save requests table
            $query1 = RequestModel::create([
                'created_by' => $request->created_by,
                'approver_id' => $request->approver_id, // Check if requestor is lower than the approver
                'justification' => $request->justification,
            ]);

            $items = $request->items;

            foreach ($items as $value) {
                RequestItem::create([
                    'request_id'  => $query1->id,
                    'item_id'     => $value['item_id'],
                    'target_date' => $value['target_date']
                ]);
            }

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
