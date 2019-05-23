<?php

namespace App\Services;

use App\Models\Request;

class CodeGenerator
{
    public function generate()
    {
        $code = mt_rand(10000, 99999);

        if ($this->code_checker($code)) 
            return generate();

        return $code;
    }

    private function code_checker($code)
    {
        return Request::whereRequestCode($code)->exists();
    }
}