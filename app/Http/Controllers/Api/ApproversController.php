<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Models\Approver;

class ApproversController extends Controller
{
    public function get_approvers($employee_id, Approver $approver)
    {
        $id = (int) $employee_id;

        $query = $approver->approvers($id);

        $arr_container = [
            $query->ash,
            $query->sh,
            $query->adh,
            $query->dh,
            $query->advh,
            $query->dvh
        ];

        $approvers = [];
        foreach ($arr_container as $value) {
            // REMOVE IN ARRAY IF same as requestor and 0
            if ($value === $id || $value === 0) 
                continue;

            $approvers[] = $value;
        }

        return response()->json($approvers);
    }
}
