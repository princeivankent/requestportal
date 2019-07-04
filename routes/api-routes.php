<?php

Route::post('login', 'Auth\AuthController@login');
// Route::post('register', 'Auth\AuthController@register');
Route::post('logout', 'Auth\AuthController@logout');

Route::group(['middleware' => ['api_token']], function () {
    // Guarded by api_token middleware
    Route::get('requests/{request_code?}', 'RequestController@get_requests');
    Route::post('requests', 'RequestController@send_request');
    Route::get('employee-requests/{employee_id}', 'RequestController@getRequestsByEmployeeId');
    Route::get('employee-requests/{employee_id}/{id}', 'RequestController@getRequestsByEmployeeIdandId');
    Route::get('items', 'ItemController@get_items');
    Route::get('approvers/{employee_id}', 'ApproversController@get_approvers');
});

// 
Route::get('generate-pdf', 'PDFController@generate');
Route::post('encrypt-password', 'PasswordController@encrypt');
Route::post('decrypt-password', 'PasswordController@decrypt');