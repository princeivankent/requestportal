<?php

namespace App\Http\Controllers\Api\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\ApiToken;
use App\Models\Employee;
use App\Services\Jwt;
use Carbon\Carbon;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        if (!$request->name || !$request->username || !$request->password) {
            return response()->json([
                'message' => '** All fields are required **'
            ], 422);
        }

        $user = new OraUser([
            'name'     => $request->name,
            'username' => $request->username,
            'password' => $request->password
        ]);
        
        $user->save();

        return response()->json([
            'message' => 'Successfully created user!'
        ], 201);
    }

    public function login(Request $request, Jwt $jwt, Employee $employee)
    {
        if (!$request->employee_number || !$request->password) {
            return response()->json([
                'message' => 'Please complete the required fields!'
            ], 422);
        }

        $query = $employee->get_user($request->employee_number, $request->password);

        if (!$query) 
            return response()->json([
                'message' => 'Your credentials are incorrect!'
            ], 401);

        // Create token for the user
        $token = ApiToken::create([
            'employee_id' => $query->id,
            'token'       => $jwt->encrypt([
                'employee_no' => $query->employee_no,
                'name'        => $query->name,
                'created_at'  => Carbon::now()->toDateTimeString()
            ]),
            'revoked'    => 0,
            'expires_at' => Carbon::now()->addMinutes(config('auth.token_expiration'))
        ]);

        // Make strings standardized
        $query->name = ucwords(strtolower($query->name));
        $query->position_title = ucwords(strtolower($query->position_title));
        $query->section = ucwords(strtolower($query->section));

        return response()->json([
            'user'         => $query,
            'access_token' => $token->token,
            'expires_at'   => Carbon::parse($token->expires_at)->toDateTimeString()
        ]);
    }

    public function logout(Request $request)
    {
        $query = ApiToken::query();
        $sql = $query->whereToken($request->access_token)->first();

        if (!$sql)
            return response()->json([
                'message' => 'Token doesn\'t exists!'
            ], 404);

        if (!$query->update(['revoked' => 1]))
            return response()->json([
                'message' => 'Something went wrong on the server'
            ], 500);

        return response('', 200);
    }
}
