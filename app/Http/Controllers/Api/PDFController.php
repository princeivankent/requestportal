<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;

use DB;
use PDF;
use Carbon\Carbon;
use App\Http\Controllers\Controller;
use App\Models\Request as RequestModel;

class PDFController extends Controller
{
    public function generate()
    {
        $item = json_decode($_GET['formData']);

        $query = RequestModel::from('requests AS req')
            ->select(
                'req.id',
                DB::raw("
                    CONCAT(UCASE(LEFT(requestor.last_name, 1)),LCASE(SUBSTRING(requestor.last_name, 2))
                    ,', ',
                    UCASE(LEFT(requestor.first_name, 1)),LCASE(SUBSTRING(requestor.first_name, 2))) AS prepared_by"
                ),
                DB::raw("
                    CONCAT(UCASE(LEFT(approver.last_name, 1)),LCASE(SUBSTRING(approver.last_name, 2))
                    ,', ',
                    UCASE(LEFT(approver.first_name, 1)),LCASE(SUBSTRING(approver.first_name, 2))) AS approved_by"
                ),
                'req.justification',
                'dept.department as requesting_department'
            )
            ->with('requested_items.item.item_approver_type')
            ->leftJoin('ipc_central.personal_information_tab as requestor', 'requestor.employee_id', '=', 'req.created_by')
            ->leftJoin('ipc_central.personal_information_tab as approver', 'approver.employee_id', '=', 'req.approver_id')
            ->leftJoin('ipc_central.employee_masterfile_tab as emt', 'emt.id', '=', 'requestor.employee_id')
            ->leftJoin('ipc_central.department_tab as dept', 'dept.id', '=', 'emt.department_id')
            ->where('req.id', $item->id)
            ->first();

        $items = $query['requested_items'];
        $new_items = [];
        foreach ($items as $key => $value) {
            $new_items[$key] = [
                'request_item'  => $value['item']['description'],
                'target_date'   => Carbon::parse($value['target_date'])->toFormattedDateString(),
                'approver_type' => $value['item']['item_approver_type']['type']
            ];
        }

        $query['items'] = $new_items;
        $query['control_number'] = substr("00000{$query['id']}", -5);
        $query['submission_date'] = Carbon::parse($query['created_at'])->toFormattedDateString();
        unset($query['requested_items']);
        
        $hasCss = false;
        $hasAcct = false;

        foreach ($query->items as $value) {
            if ($value['approver_type'] == 'accounting') $hasAcct = true;
            if ($value['approver_type'] == 'corporate_service') $hasCss = true;
        }

        $pdf = PDF::loadView('pdfs.request_form', [
            'data'    => $query,
            'hasCss'  => $hasCss,
            'hasAcct' => $hasAcct
        ]);

        return $pdf->stream('request-form.pdf');
    }
}
