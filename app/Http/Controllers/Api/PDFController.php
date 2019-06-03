<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Models\Request as RequestModel;
use PDF;

class PDFController extends Controller
{
    public function generate()
    {
        $item = json_decode($_GET['formData']);

        $hasCss = false;
        $hasAcct = false;

        foreach ($item->items as $value) {
            if ($value->approver_type == 'accounting') $hasAcct = true;
            if ($value->approver_type == 'corporate_service') $hasCss = true;
        }

        $pdf = PDF::loadView('pdfs.request_form', [
            'data' => $item,
            'hasCss' => $hasCss,
            'hasAcct' => $hasAcct
        ]);
        return $pdf->stream('request-form.pdf');
    }
}
