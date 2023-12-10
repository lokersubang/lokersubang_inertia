<!DOCTYPE html>
<html lang="id">

<head>
    <meta charset="utf-8">
    <meta name='robots' content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="author" content="Loker Subang">
    {{-- <title inertia>{{ $title ?? config('app.name', 'Laravel') }}</title> --}}
    <meta property="og:locale" content="id_ID" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="{{ URL::full() }}" />
    <meta property="og:site_name" content="LOKER SUBANG" />
    <meta property="og:image:width" content="1080" />
    <meta property="og:image:height" content="1080" />
    <meta property="og:image:type" content="image/jpeg" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:label1" content="Ditulis oleh" />
    <meta name="twitter:data1" content="Loker Subang" />
    <meta name="twitter:label2" content="Estimasi waktu membaca" />
    <meta name="twitter:data2" content="2 menit" />
    <link rel="stylesheet" href="/css/offcanvas.css">
    <link rel="canonical" href="{{ URL::full() }}">

    <!--Floating ADS Magelang1337.com-->
    <script type='text/javascript'>
        (document).ready(function() {
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
            <!--Awal Script iklan-->
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3755518164222853"
                crossorigin="anonymous"></script>
            <!-- ads 336x280 -->
            <ins class="adsbygoogle" style="display:inline-block;width:336px;height:280px"
                data-ad-client="ca-pub-3755518164222853" data-ad-slot="3275920363"></ins>
            <script>
                (adsbygoogle = window.adsbygoogle || []).push({});
            </script>
            <!--Akhir script iklan-->
        </div>
    </div><!--end: floating ads-->

    <script>
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }
        gtag('js', new Date());

        gtag('config', 'UA-185896191-3');
    </script>


    {{-- Google Adsense --}}
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3755518164222853"
        crossorigin="anonymous"></script>
    <!-- Scripts -->
    @routes
    @viteReactRefresh
    @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
    @inertiaHead
</head>

{{-- <body class="font-sans antialiased bg-light" style="font-family: 'Lexend Deca', sans-serif;"> --}}

<body class="bg-light">
    @inertia
</body>

</html>
