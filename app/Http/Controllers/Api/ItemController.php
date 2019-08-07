<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Models\Item;

class ItemController extends Controller
{
    public function get_items()
    {
        $item = Item::with('item_approver_type')->get();

        $items = [
            'id'              => '',
            'created_by'      => '',
            'approver_id'     => '',
            'justification'   => '',
            'created_at'      => '',
            'updated_at'      => '',
            'requested_items' => []
        ];
        
        foreach ($item as $value) {
            $items['requested_items'][] = [
                'id'               => '',
                'request_id'       => '',
                'item_id'          => '',
                'target_date'      => '',
                'remarks'          => '',
                'item_approver_id' => '',
                'item'             => $value
            ];
        }

        return response()->json($items);
    }
}
