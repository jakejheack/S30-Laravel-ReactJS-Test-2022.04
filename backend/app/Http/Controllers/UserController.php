<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class UserController extends Controller
{
    /**
     * Store a newly created user in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // Define validation rules
        $request->validate([
            'full_name' => 'required|string|max:255',
            'email' => [
                'required',
                'string',
                'email',
                'max:255',
                'unique:users,email'
            ],
            'roles' => 'required|array',
            'roles.*' => Rule::in(['Author', 'Editor', 'Subscriber', 'Administrator']),
        ]);

        // Create the user
        $user = User::create([
            'full_name' => $request->full_name,
            'email' => $request->email,
            'roles' => $request->roles,
        ]);

        return response()->json($user, 201);
    }

    /**
     * Display a listing of the users by role.
     *
     * @param  string  $role
     * @return \Illuminate\Http\Response
     */
    public function indexByRole($role)
    {
        $users = User::whereJsonContains('roles', $role)->get();
        return response()->json($users);
    }
    
    /**
     * Display a listing of all users.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $users = User::all();
        return response()->json($users);
    }
}
