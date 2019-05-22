<?php

namespace App\Services;

class UserRole
{
    public function role($user_type_id)
    {
        if (isset($user_type_id)) {
            if ($user_type_id === 1)
                return 'accounting';
            else
                return 'corporate_service';
        }
        else
            return 'requestor';
    }
}