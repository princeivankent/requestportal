<?php

use Illuminate\Database\Seeder;

class ItemsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = [
            [
                'description'           => 'Request for urgent release of cash advance',
                'item_approver_type_id' => 1
            ],
            [
                'description'           => 'Request for urgent release of payment',
                'item_approver_type_id' => 1
            ],
            [
                'description'           => 'Request for urgent airline booking',
                'item_approver_type_id' => 2
            ],
            [
                'description'           => 'Request for urgent vehicle reservation',
                'item_approver_type_id' => 2
            ],
            [
                'description'           => 'Request for urgent hotel booking',
                'item_approver_type_id' => 2
            ]
        ];

        DB::table('items')->insert($data);
    }
}
