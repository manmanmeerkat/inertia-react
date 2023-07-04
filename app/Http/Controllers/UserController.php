<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;

class UserController extends Controller
{
    public function index()
    {
        return Inertia::render('User/Index',[
            'users' => User::all()
        ]);
    }

    public function create()
    {
        return Inertia::render('User/Create');
    }

    public function store()
    {
            User::create(request()->all());

        return redirect()->route('user.index');
    }
}
