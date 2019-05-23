<?php

Route::post('login', 'Auth\AuthController@login');
// Route::post('register', 'Auth\AuthController@register');
Route::post('logout', 'Auth\AuthController@logout');

Route::group(['middleware' => ['api_token']], function () {
    // Guarded by api_token middleware
    Route::get('get_requests/{request_code?}', 'RequestController@get_requests');
    Route::post('send_request', 'RequestController@send_request');
});