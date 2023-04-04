<!DOCTYPE html>
<html lang="id">

<head>
    <meta charset="utf-8">
    <meta name='robots' content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    {{-- <title inertia>{{ config('app.name', 'Laravel') }}</title> --}}

    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3755518164222853"
        crossorigin="anonymous"></script>

    <!-- Fonts -->
    <link rel="stylesheet" href="https://fonts.bunny.net/css2?family=Nunito:wght@400;600;700&display=swap">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

    {{-- <link href="https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@300&display=swap" rel="stylesheet"> --}}

    <!-- our project just needs Font Awesome Solid + Brands -->
    <link rel="stylesheet" href="/css/offcanvas.css">

    <link rel='dns-prefetch' href='https://www.lokersubang.com' />
    <link rel='dns-prefetch' href='https://lokersubang.com' />
    <link rel='dns-prefetch' href='https://fonts.gstatic.com' />
    <link rel='dns-prefetch' href='https://s.w.org' />
    <link rel='dns-prefetch' href='https://fonts.googleapis.com' />

    <!-- Scripts -->
    @routes
    @viteReactRefresh
    @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
    @inertiaHead
</head>

{{-- <body class="font-sans antialiased bg-light" style="font-family: 'Lexend Deca', sans-serif;"> --}}

<body class="font-sans antialiased bg-light">
    @inertia
</body>

</html>
