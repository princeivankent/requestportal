<?php

namespace App\Models;

use DB;

class Employee
{
    public static function getUserUsingEmployeeNumberAndPassword($employee_number, $password)
    {
        $query = '';

        // For Accounting & Corporate Service query
        $query = DB::connection('ipc_central')
            ->table('personal_information_tab as pit')
            ->select(
                'emt.id',
                'emt.employee_no',
                DB::raw('CONCAT(pit.last_name,", ",pit.first_name) as name'),
                'emt.position_title',
                'st.section',
                'dprtmnt.department',
                'dvsnt.division',
                'ast.user_type_id'
            )
            ->leftJoin('employee_masterfile_tab as emt', 'emt.id', '=', 'pit.employee_id')
            ->leftJoin('password_tab as pwt', 'pwt.employee_id', '=', 'emt.id')
            ->leftJoin('section_tab as st', 'st.id', '=', 'emt.section_id')
            ->leftJoin('department_tab as dprtmnt', 'dprtmnt.id', '=', 'emt.department_id')
            ->leftJoin('division_tab as dvsnt', 'dvsnt.id', '=', 'emt.division_id')
            ->leftJoin('user_access_tab as ast', 'ast.employee_id', '=', 'emt.id')
            ->leftJoin('system_tab as syst', 'syst.id', '=', 'ast.system_id')
            ->where([
                'emt.employee_no' => $employee_number,
                'pwt.password'    => $password,
                'syst.id'         => config('app.sys_id')
            ])
            ->first();

        if (!$query) {
            // For requestor query
            $query = DB::connection('ipc_central')
                ->table('personal_information_tab as pit')
                ->select(
                    'emt.id',
                    'emt.employee_no',
                    DB::raw('CONCAT(pit.last_name,", ",pit.first_name) as name'),
                    'emt.position_title',
                    'st.section',
                    'dprtmnt.department',
                    'dvsnt.division',
                    'ast.user_type_id'
                )
                ->leftJoin('employee_masterfile_tab as emt', 'emt.id', '=', 'pit.employee_id')
                ->leftJoin('password_tab as pwt', 'pwt.employee_id', '=', 'emt.id')
                ->leftJoin('section_tab as st', 'st.id', '=', 'emt.section_id')
                ->leftJoin('department_tab as dprtmnt', 'dprtmnt.id', '=', 'emt.department_id')
                ->leftJoin('division_tab as dvsnt', 'dvsnt.id', '=', 'emt.division_id')
                ->leftJoin('user_access_tab as ast', 'ast.employee_id', '=', 'emt.id')
                ->where([
                    'emt.employee_no' => $employee_number,
                    'pwt.password'    => $password
                ])
                ->first();

            $query->user_type_id = null;
        }

            
        return $query;
    }

    public static function getUserUsingEmployeeNumber ($employee_number)
    {
        $query = DB::connection('ipc_central')
            ->table('personal_information_tab as pit')
            ->select(
                'emt.id',
                'emt.employee_no',
                'emt.cost_center',
                DB::raw('CONCAT(pit.last_name,", ",pit.first_name) as name'),
                'emt.position_title',
                'st.section',
                'dprtmnt.department',
                'dvsnt.division',
                'ast.user_type_id',
                'pwt.password'
            )
            ->leftJoin('employee_masterfile_tab as emt', 'emt.id', '=', 'pit.employee_id')
            ->leftJoin('password_tab as pwt', 'pwt.employee_id', '=', 'emt.id')
            ->leftJoin('section_tab as st', 'st.id', '=', 'emt.section_id')
            ->leftJoin('department_tab as dprtmnt', 'dprtmnt.id', '=', 'emt.department_id')
            ->leftJoin('division_tab as dvsnt', 'dvsnt.id', '=', 'emt.division_id')
            ->leftJoin('user_access_tab as ast', 'ast.employee_id', '=', 'emt.id')
            ->where('emt.employee_no', $employee_number)
            ->first();
            
        return $query;
    }
}
