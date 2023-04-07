<!DOCTYPE html>
<html lang="id">

<head>
    <meta charset="utf-8">
    <meta name='robots' content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    {{-- <title inertia>{{ config('app.name', 'Laravel') }}</title> --}}

    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3755518164222853"
        crossorigin="anonymous"></script>
    <link rel="stylesheet" href="/css/offcanvas.css">

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
