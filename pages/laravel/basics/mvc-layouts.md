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

## Model

Nu moeten we nog de correcte inhoud uit onze database kunnen ophalen. Dit gebeurt in de model.

Maar daarvoor moeten we eerst een database hebben. Hiervoor moet je eerst [de juiste connectie maken in de `.env` file](/laravel/laravel/databases/connecting.html).

Daarna moeten we de migration scripts runnen van Laravel. Bekijk alvast eens de bestaande migrations `database/migrations/`.

Voor daarna onderstaande commando uit in je CLI.

```
ddev artisan migrate
```

Indien de database die je hebt gedefinieerd in je `.env` nog niet bestaat, zal je de vraag krijgen om deze aan te maken.

We kunnen nu zelf migrations schrijven ofwel bestaande tabellen importeren of aanmaken rechtstreeks in de database of via een DBMS.

Voor de eerste oefening importeren we de pgm courses sql van vorige les.

### Model aanmaken

Daarna kunnen we ons eerste model aanmaken en afleiden van een basis Model. Hierdoor erven we meteen alle methods over van dit basis Model.

Maak de model `Course.php` aan in de folder `/app/Models/` met onderstaande code.

```php
namespace App\Models;
 
use Illuminate\Database\Eloquent\Model;
 
class Course extends Model
{

}
```

Het basis model gaat uit van de tabel `courses` (Class name in onderkast + 's') en de primary key `id`.

> Indien je dit anders wenst dan moet je dit definiëren aan het begin van je model.
> ```
>    protected $table = 'my_courses';
>    protected $primaryKey = 'course_id';
>```


Via de Eloquent ORM kan je nu data ophalen via static functies van je model. (Meer info over de mogelijkheden)[https://laravel.com/docs/9.x/eloquent] of hieronder enkele die je kan testen binnen de courses tabel en Course model.

```php
//Alle records ophalen
$courses = Course::all();
var_dump($courses);

//Het vak ophalen met primary key 1
$course = Course::find(1);
var_dump($course);

//Zoek vakken van Dieter De Weirdt
$courses = Course::where('teacher_short', '=', 'DDW')->get();
var_dump($courses);
```

Pas nu de Controller aan zodat je de inhoud kan doorgeven aan de View. In de view moet je de inhoud ook ophalen.

## Round-up

| Functionaliteit | Omschrijving | Locatie |
| ----------- | ----------- | ----------- |
| Routing | Beslist wat er moet gebeuren met een URL en stuurt door naar Controller | /routes/web.php |
| Controller | Krijgt een request binnen op een method, haalt data op uit de model en stuurt dit door naar de juiste view | /app/Http/Controllers/ |
| Models | Staat in contact met de database, voert sql opdrachten uit en stuurt resultaat terug | /app/Models |
| Views | Bevat de inhoud of een deel van de inhoud van een pagina | /resources/views/... |
| Layout | Bevat de volledige layout van de pagina | /resources/views/layouts/... |

## Meer info

- [Routing](https://laravel.com/docs/9.x/routing)
- [Eloquent ORM](https://laravel.com/docs/9.x/eloquent)
- [Blade templates](https://laravel.com/docs/9.x/blade)
