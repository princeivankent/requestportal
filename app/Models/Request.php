<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Request extends Model
{
    protected $fillable = [
        'request_code', 'created_by', 'approver_id', 'justification'
    ];
}
