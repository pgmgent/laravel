# MVC - Blade layouts

We hebben nu al enkele views aangemaakt, telkens met hun eigen HTML, head en body. Qua onderhoud niet zo handig als we een aanpassing moeten doen of een extra CSS of JS bestand moeten linken.

De oplossing hiervoor zijn blade templates. Je maakt 1 of meerdere basis template waarin placeholders zitten voor de inhoud van je pagina's (views).

Maak volgend bestand aan: `resources/views/layouts/app.blade.php` met een basis HTML en 1 of meerdere placeholders.

```html
<!DOCTYPE html>
<html lang='nl'>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>@yield('title') - App Name</title>
    </head>
    <body>
        @section('header')
        <header>
            <!-- Dit is de standaard header, indien niets gedefineerd in de view zal deze verschijnen. -->
            <div class="brand">App Name</div>
        </header>
        @show

        <div class="container">
            @yield('content')
        </div>
    </body>
</html>
```

In je view definieer je welke layout je wenst te gebruiken en vul je de inhoud in.

```html
<!-- resources/views/course/detail.blade.php -->
 
@extends('layouts.app')
 
@section('title', 'Course Detail')
 
@section('content')
    <h1>Detailpagina van het vak met id: {{ $course_id }}</h1>
    <p>Hier zal de inhoud komen</p>
@endsection
```

[Blade templates](https://laravel.com/docs/10.x/blade)
