<?php

namespace App\Services;

use Carbon\Carbon;

class CodeGenerator
{
    public function generate()
    {
        return Carbon::now()->format('ymdi');
    }
}