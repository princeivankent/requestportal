<?php

use Illuminate\Database\Seeder;

class ItemApproverTypesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = [
            ['type' => 'accounting'],
            ['type' => 'corporate_service']
        ];

        DB::table('item_approver_types')->insert($data);
    }
}
