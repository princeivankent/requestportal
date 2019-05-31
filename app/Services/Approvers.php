<?php

namespace App\Services;

use DB;

class Approvers
{
    /**
     * -------------------------------------
     * GET APPROVER IDS using employee id
     * -------------------------------------
     * 
     * @param int employee_id
     * @return array approver ids
     */
    public function get_approver_ids($employee_id)
    {
        $id = (int) $employee_id;

        $approvers = DB::connection('ipc_central')
            ->table('signatories_matrix_tab AS smt')
            ->select(
                'smt.ash',
                'smt.sh',
                'smt.adh',
                'smt.dh',
                'smt.advh',
                'smt.dvh'
            )
            ->leftJoin('employee_masterfile_tab AS emt', 'emt.section_id', '=', 'smt.section_id')
            ->where('emt.id', $id)
            ->first();
        
        $arr_container = [
            $approvers->ash,
            $approvers->sh,
            $approvers->adh,
            $approvers->dh,
            $approvers->advh,
            $approvers->dvh
        ];

        $new_approvers = [];
        foreach ($arr_container as $value) {
            // REMOVE IN ARRAY IF same as requestor and 0
            if ($value === $id || $value === 0) continue;

            $new_approvers[] = $value;
        }

        return $new_approvers;
    }
}