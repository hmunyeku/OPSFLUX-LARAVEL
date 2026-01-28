<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/status', function () {
    return response()->json([
        'status' => 'ok',
        'app' => config('app.name'),
        'version' => '1.0.0',
        'timestamp' => now()->toIso8601String(),
    ]);
});
