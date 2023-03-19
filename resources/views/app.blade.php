<!DOCTYPE html>
<html lang="id">

<head>
    <meta charset="utf-8">
    <meta name='robots' content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    {{-- <title inertia>{{ config('app.name', 'Laravel') }}</title> --}}

    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-185896191-3"></script>
    <script>
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }
        gtag('js', new Date());

        gtag('config', 'UA-185896191-3');
    </script>


    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3755518164222853"
        crossorigin="anonymous"></script>


    <!-- Fonts -->
    <link rel="stylesheet" href="https://fonts.bunny.net/css2?family=Nunito:wght@400;600;700&display=swap">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

    {{-- <link href="https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@300&display=swap" rel="stylesheet"> --}}

    <!-- our project just needs Font Awesome Solid + Brands -->
    <link href="/fontawesome/css/fontawesome.css" rel="stylesheet">
    <link href="/fontawesome/css/brands.css" rel="stylesheet">
    <link href="/fontawesome/css/solid.css" rel="stylesheet">
    <link rel="stylesheet" href="/css/offcanvas.css">


    <link rel='dns-prefetch' href='//www.lokersubang.com' />
    <link rel='dns-prefetch' href='//lokersubang.com' />
    <link rel='dns-prefetch' href='//fonts.gstatic.com' />
    <link rel='dns-prefetch' href='//s.w.org' />
    <link rel='dns-prefetch' href='//fonts.googleapis.com' />
    <link rel='dns-prefetch' href='//ajax.googleapis.com' />
    <link rel='dns-prefetch' href='//google-analytics.com' />
    <link rel='dns-prefetch' href='//googletagmanager.com' />
    <link rel='dns-prefetch' href='//cdnjs.cloudflare.com' />
    <link rel='dns-prefetch' href='//googletagservices.com' />
    <link rel='dns-prefetch' href='//use.fontawesome.com' />
    <link rel='dns-prefetch' href='//www.google-analytics.com' />
    <link rel='dns-prefetch' href='//ssl.google-analytics.com' />
    <link rel='dns-prefetch' href='//www.googletagmanager.com' />
    <link rel='dns-prefetch' href='//www.googletagservices.com' />
    <link rel='dns-prefetch' href='//googleads.g.doubleclick.net' />
    <link rel='dns-prefetch' href='//code.jquery.com' />
    <link rel='dns-prefetch' href='//stackpath.bootstrapcdn.com' />

    <script type='text/javascript'>
        $(document).ready(function() {
                    $( & #39;img# closed & #39;).click(function(){$(&# 39; #btm_banner & #39;).hide(90);});}); 
    </script>

    <!--start: floating ads-->
    <div id='floatads'
        style='width:100%;margin:auto; text-align:center;float:none;overflow:hidden; display:scroll;position:fixed; bottom:0;z-index:9999'>
        <div><a id='close-floatads'
                onclick='document.getElementById(&apos;floatads&apos;).style.display = &apos;none&apos;;'
                style='cursor:pointer;'><img alt='close'
                    src='https://3.bp.blogspot.com/-ZZSacDHLWlM/VhvlKTMjbLI/AAAAAAAAF2M/UDzU4rrvcaI/s1600/btn_close.gif'
                    title='close button' /></a></div>
        <div style='text-align:center;display:block;max-width:728px;height:auto;overflow:hidden;margin:auto'>

            <!--Script iklan-->
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3755518164222853"
                crossorigin="anonymous"></script>
            <!-- ads resp -->
            <ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3755518164222853"
                data-ad-slot="7521179607" data-ad-format="auto" data-full-width-responsive="true"></ins>
            <script>
                (adsbygoogle = window.adsbygoogle || []).push({});
            </script>
            <!--Akhir script iklan-->

        </div>
    </div>
    <!--end: floating ads-->


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
