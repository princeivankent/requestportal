<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class RequestItem extends Model
{
    protected $fillable = [
        'request_id', 'item_id', 'target_date', 'remarks', 'item_approver_id'
    ];
}
