<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Helpers\Password;

class PasswordController extends Controller
{
    protected $password;

    public function __construct(Password $password)
    {
        $this->password = $password;    
    }

    public function encrypt(Request $request)
    {
        return response()->json($this->password->encrypt($request->password));
    }

    public function decrypt(Request $request)
    {
        return response()->json($this->password->decrypt($request->password));
    }
}
