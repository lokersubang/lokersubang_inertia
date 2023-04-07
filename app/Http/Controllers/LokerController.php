<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;

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
        $title = null;
        $category = Cache::remember('category', 10 * 60, function () {
            return Category::firstWhere('slug', request('kategori'));
        });
        if (request('kategori')) {
            $cat = $category;
            // $cat = Category::firstWhere('slug', request('kategori'));
            $title = $cat->name;
        };


        $lokers = Cache::remember('lokers', 10 * 60, function () {
            return Post::latest()->filter(request(['search', 'kategori']))->with(['category', 'user'])->fastPaginate(10)->withQueryString();
        });
        return inertia('Blog/Index', [
            'title' => $title,
            'lokers' => $lokers
            // 'lokers' => Post::latest()->filter(request(['search', 'kategori']))->with(['category', 'user'])->fastPaginate(10)->withQueryString()
        ]);
    }

    public function show(Post $post)
    {
        return inertia('Blog/Show', ['article' => $post->load('category', 'user')]);
    }
}
