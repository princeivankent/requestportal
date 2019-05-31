<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Services\Approvers;
use DB;

class ApproversController extends Controller
{
    public function get_approvers($employee_id, Approvers $approver)
    {
        $approver_ids = $approver->get_approver_ids($employee_id);

        $query = DB::connection('ipc_central')
            ->table('personal_information_tab')
            ->select(
                'employee_id',
                DB::raw('CONCAT(last_name, ", ", first_name) AS name')
            )
            ->whereIn('employee_id', $approver_ids)
            ->get();

        return response()->json($query);
    }
}
