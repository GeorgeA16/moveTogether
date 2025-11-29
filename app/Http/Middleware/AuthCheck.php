<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Middleware;

class AuthCheck extends Middleware
{
    public function handle(Request $request, Closure $next)
    {
        if (!Auth::check()) {
            return Inertia::render('Errors/Error403', [
                'message' => 'Access denied'
            ])->toResponse($request)
                ->setStatusCode(403);
        }

        return $next($request);
    }
}
