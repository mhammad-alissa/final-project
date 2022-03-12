<?php

namespace App\Http\Middleware;
use Illuminate\Support\Facades\Auth;
use Closure;
use Illuminate\Http\Request;

class AdminMiddleware
{

    public function handle(Request $request, Closure $next)
    {
        if(Auth::check())
        {
            if(Auth::user()->role_as == 'admin')
            {
                return $next($request);
            }
            else
            {
                return redirect('/')->with('status','Access Denied! as you are not as admin');
            }
        }
        else
        {
            return redirect('/')->with('status','Please Login First');
        }
    }
}
