<?php

Route::post('login', 'Auth\AuthController@login');
// Route::post('register', 'Auth\AuthController@register');
Route::post('logout', 'Auth\AuthController@logout');

Route::group(['middleware' => ['api_token']], function () {
    // Guarded by api_token middleware
    Route::get('requests/{request_code?}', 'RequestController@get_requests');
    Route::post('requests', 'RequestController@send_request');

    Route::get('items', 'ItemController@get_items');
});