<?php

namespace App\Models;

use DB;

class Approver
{
    public function approvers($employee_id)
    {
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
            ->where('emt.id', $employee_id)
            ->first();

        return $approvers;
    }
}
