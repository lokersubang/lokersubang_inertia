<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class LokerController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        return inertia('Blog/Index');
    }

    public function show()
    {
        return inertia('Blog/Show');
    }
}
