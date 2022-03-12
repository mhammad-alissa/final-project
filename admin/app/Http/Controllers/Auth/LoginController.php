<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Support\Facades\Auth;
class LoginController extends Controller
{


    use AuthenticatesUsers;


    public function redirectTo()
    {
        if(Auth::user()->role_as == '1') //1 = Admin Login
        {
            return '/home';
        }
        elseif(Auth::user()->role_as == '0') // Normal or Default User Login
        {
            return '/';
        }
    }

    protected function authenticated()
    {
        if(Auth::user()->role_as == '1') //1 = Admin Login
        {
            return redirect('/home')->with('status','Welcome to your dashboard');
        }
        elseif(Auth::user()->role_as == '0') // Normal or Default User Login
        {
            return redirect('/')->with('status','Logged in successfully');
        }
    }


    protected $redirectTo = RouteServiceProvider::HOME;


    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }
}
