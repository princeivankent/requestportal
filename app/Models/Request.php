<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Request extends Model
{
    protected $fillable = [
        'request_code', 'created_by', 'approver_id', 'justification'
    ];

    public function requested_items()
    {
        return $this->hasMany('App\Models\RequestItem');
    }
}
