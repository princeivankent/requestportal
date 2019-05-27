<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class ItemController extends Controller
{
    public function get_items()
    {
        return response()->json(\App\Models\Item::with('item_approver_type')->get());
    }
}
