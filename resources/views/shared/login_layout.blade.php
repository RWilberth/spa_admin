<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="{{asset('css/libraries.css', env('APP_SECURE', false))}}">  
        <!--<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" >-->
        @yield('styles') 
        
    </head>
    <body>
        @yield('content')  
        
        <script src="{{asset('js/libraries.js', env('APP_SECURE', false))}}" type="text/javascript"></script>
        <script src="{{asset('js/bootstrap.js', env('APP_SECURE', false))}}" type="text/javascript"></script>
        @yield('scripts')
    </body>
</html>
