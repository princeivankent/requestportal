<?php

namespace App\Http\Controllers\Api\Auth;

use Carbon\Carbon;
use App\Services\Jwt;
use App\Models\ApiToken;
use App\Models\Employee;
use App\Services\UserRole;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function login(Request $request, UserRole $user_role)
    {
        $employee_number = $request->employee_number;
        $password = $request->password;
        $user = [];

        if (!$employee_number || !$password )
            return response()->json(['message' => 'Please complete the required fields!'], 422);

        // Perform like a monster here...
        if (Hash::needsRehash($password)) {
            $user = Employee::getUserUsingEmployeeNumberAndPassword($employee_number, $password);
        } else {
            $user = Employee::getUserUsingEmployeeNumber($employee_number);
            if (!Hash::check($user->password, $password)) $user = '';
        }

        if (!$user) 
            return response()->json([
                'message' => 'Your credentials are incorrect!'
            ], 401);

        if (!$user) 
            return response()->json([
                'message' => 'Your credentials are incorrect!'
            ], 401);

        // Make strings standardized
        $user->name = ucwords(strtolower($user->name));
        $user->position_title = ucwords(strtolower($user->position_title));
        $user->department = ucwords(strtolower($user->department));
        $user->division = ucwords(strtolower($user->division));
        $user->section = ucwords(strtolower($user->section));
        
        $role = $user_role->role($user->user_type_id);

        // Create token for the user
        $token = ApiToken::create([
            'employee_id' => $user->id,
            'token'       => Jwt::encode([
                'role'           => $role,
                'employee_id'    => $user->id,
                'employee_no'    => $user->employee_no,
                'name'           => $user->name,
                'position_title' => $user->position_title,
                'department'     => $user->department,
                'division'       => $user->division,
                'section'        => $user->section,
                'created_at'     => Carbon::now()->toDateTimeString()
            ]),
            'revoked'    => 0,
            'expires_at' => Carbon::now()->addMinutes(config('auth.token_expiration'))
        ]);

        return response()->json([
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
            ], 200);

        if (!$query->update(['revoked' => 1]))
            return response()->json([
                'message' => 'Something went wrong on the server'
            ], 500);

        return response('', 200);
    }
}
