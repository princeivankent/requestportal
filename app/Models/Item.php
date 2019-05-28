<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Item extends Model
{
    protected $hidden = ['created_at','updated_at'];
    
    protected $fillable = [
        'description', 'item_approver_type_id'
    ];

    public function item_approver_type()
    {
        return $this->belongsTo('App\Models\ItemApproverType');
    }
}
