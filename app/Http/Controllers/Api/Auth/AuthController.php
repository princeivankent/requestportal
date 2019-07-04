<?php

namespace App\Http\Controllers\Api\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\ApiToken;
use App\Models\Employee;
use App\Services\Jwt;
use App\Services\UserRole;
use Carbon\Carbon;
use App\Helpers\Password;

class AuthController extends Controller
{
    protected $password;

    public function __construct(Password $password)
    {
        $this->password = $password;    
    }

    public function login(
        Request $request, 
        Jwt $jwt, 
        Employee $employee,
        UserRole $user_role
    )
    {
        if (!$request->employee_number || !$request->password) {
            return response()->json([
                'message' => 'Please complete the required fields!'
            ], 422);
        }

        // $query = $employee->get_user($request->employee_number, $this->password->decrypt($request->password));
        $query = $employee->get_user($request->employee_number, $request->password);

        if (!$query) 
            return response()->json([
                'message' => 'Your credentials are incorrect!'
            ], 401);

        // Make strings standardized
        $query->name = ucwords(strtolower($query->name));
        $query->position_title = ucwords(strtolower($query->position_title));
        $query->department = ucwords(strtolower($query->department));
        $query->division = ucwords(strtolower($query->division));
        $query->section = ucwords(strtolower($query->section));

        // Create token for the user
        $token = ApiToken::create([
            'employee_id' => $query->id,
            'token'       => $jwt->encrypt([
                'role'           => $user_role->role($query->user_type_id),
                'employee_id'    => $query->id,
                'employee_no'    => $query->employee_no,
                'name'           => $query->name,
                'position_title' => $query->position_title,
                'department'     => $query->department,
                'division'       => $query->division,
                'section'        => $query->section,
                'created_at'     => Carbon::now()->toDateTimeString()
            ]),
            'revoked'    => 0,
            'expires_at' => Carbon::now()->addMinutes(config('auth.token_expiration'))
        ]);

        return response()->json([
            // 'user'         => $query,
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
