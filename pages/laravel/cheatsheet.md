# Cheat Sheet

*Hieronder vind je een overzicht van prominente concepten die je moet kennen om een Laravel applicatie te kunnen bouwen.*

## Request en .htaccess 
*vb `/public/`*  
Je moet weten dat iedere request, dat geen bestaande file of folder is in de public folder, binnenkomt op de index.php in de public folder. Dit staat zo beschreven in de `.htaccess`. 

Eerst zal er gekeken worden naar welke routing controller dit moet doorgestuurd worden. `/api` gaat naar `/routes/web.php`. Maar de meeste gevallen gaat dit dus eerst naar de `/routes/web.php`

## Routing 
*vb `/routes/web.php`*

De routing gaat beslissen wat er moet gebeuren met de request. Er wordt gekeken naar de URL om dan een actie uit te voeren. In de meeste gevallen is dit het aanroepen van een bepaalde method in een controller. Maar je kan ook meteen in route een return doen van inhoud of van een view.

``` php
Route::get('/', function () { return view('home'); }); 
Route::get('/courses', [CourseController::class, 'index']); 
Route::get('/course/{id}', [CourseController::class, 'detail']); 
```

## Controller 
*vb `/app/Http/Controllers`*  
De Controller krijgt een request binnen op een bepaalde method. Afhankelijk van het doel van de controller (CRUD) zal deze de actie juist uitvoeren.

### Read
De kan dan data ophalen uit een of meerdere models (zie 4. Models). En indien nodig een view aanroepen om de data om te zetten naar HTML dat kan teruggestuurd worden naar de client.

```php
namespace App\Http\Controllers;

class CourseController extends Controller
{
    public function index() {
        return view('course.list', [
                        'courses' => Course::all() 
                    ]);
    }
}
```

### Create / Update 
Hiervoor zal je een view maken met een formulier en een bijhorende post route (`Route::post`).

## Models 
*vb `/app/Models`*  
Een model is de vertaling van je databasemodel naar objecten in PHP. Laravel gebruikt hiervoor de Eloquent ORM. Hieronder nog eens het voorbeeld van een project met een 1-op-veel relatie naar klant. En een veel-op-veel relatie naar users.

``` php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;
 
class Project extends Model
{
    public function customer()
    {
        return $this->belongsTo(Customer::class);
    }
    
    public function users()
    {
        return $this->belongsToMany(User::class);
    }
}
```

## Views
*vb `/resources/views/`*  
De views zorgen ervoor dat je data omgezet wordt naar een stukje HTML. Aangevuld met de layout vormt dit dan de volledige HTML response van de server naar de client.

``` html
<x-layout>
    <h1>Projecten van PGM</h1>

    @foreach ($projects as $project)
    <li><a href="/project/{{ $project->id }}">{{ $project->name }}</a></li>
    @endforeach
</x-layout>
```

### Layout 
*vb `/resources/views/components/layout.blade.php`*

Bevat de volledige layout van de pagina, met placeholders die al dan niet reeds een standaard waarde hebben.

``` html
<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ title }} - {{ config('app.name', 'PGM') }}</title>

    <!-- Style -->
    @vite(['resources/sass/app.scss'])
</head>
<body>
    <header>
        <div class="brand">{{ config('app.name', 'PGM') }}</div>
    </header>

    <main class="container">
        {{ $slot }}
    </main>
</body>
</html>
```