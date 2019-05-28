<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class RequestItem extends Model
{
    protected $hidden = ['created_at','updated_at'];

    protected $fillable = [
        'request_id', 'item_id', 'target_date', 'remarks', 'item_approver_id'
    ];

    public function item()
    {
        return $this->belongsTo('App\Models\Item');
    }
}
