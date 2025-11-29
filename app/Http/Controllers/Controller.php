<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use Inertia\Response;

final class Controller
{
    public function list(): Response
    {
        $users = User::all();

        return Inertia::render('welcome', [
            'users' => $users
        ]);
    }
}
