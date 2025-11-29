<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\EventController;
use App\Http\Middleware\AuthCheck;
use Illuminate\Support\Facades\Route;

Route::middleware([AuthCheck::class])->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');

    Route::post('/logout', [AuthController::class, 'logout'])->name('logout');

    Route::get('/events', [EventController::class, 'list'])->name('events.list');
    Route::get('/events/show/{event}', [EventController::class, 'show'])->name('events.show');
    Route::get('/events/create', [EventController::class, 'create'])->name('events.create');
    Route::get('/events/edit/{event}', [EventController::class, 'edit'])->name('events.edit');
    Route::post('/events/store', [EventController::class, 'store'])->name('events.store');
});

Route::post('/register', [AuthController::class, 'register'])->name('register');
Route::post('/login', [AuthController::class, 'login'])->name('login');

Route::inertia('/', 'Home')->name('home');
