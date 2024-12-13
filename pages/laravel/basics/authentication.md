# Authenticatie

*Authenticatie is een belangrijk onderdeel van elke applicatie. Het is belangrijk dat gebruikers kunnen inloggen en uitloggen. En dat ze hun wachtwoord kunnen resetten indien ze deze vergeten zijn.*

## Mogelijkheden

Laravel biedt verschillende mogelijkheden om authenticatie te implementeren. Je kan kiezen voor een volledig zelfgeschreven authenticatie systeem. Of je kan gebruik maken van een package die dit voor jou doet. Laravel zelf biedt 2 packages aan om dit te doen. `laravel/ui` en `laravel/breeze`. Beide packages bieden een auth systeem aan. Maar `laravel/breeze` is meer recent en biedt meer mogelijkheden. Hieronder leg ik laravel Breeze uit. Wil je een iets eenvoudigere authenticatie dan kan je opteren om [Laravel UI](/laravel/laravel/how-to/laravel-ui) te installeren

>*Opgelet!* Heb je reeds routes en layouts aangemaakt dan neem je hier best een backup (Bv. commit en push je aanpassingen zodat ze op GitHub staan). Je kan er ook voor zorgen dat je jouw `layouts/app.blade.php` hernoemt naar `my_layout.php`

## Laravel Breeze

Voor Laravel Breeze moet je gelijkaardige stappen doorlopen. Installeer de package:

``` php
ddev composer require laravel/breeze --dev
```

Om daarna de scripts te runnen en de javascript en css te builden.

``` php
ddev artisan breeze:install
 
ddev artisan migrate
npm install
npm run dev
```

Je kan nu zelf een gebruiker aanmaken via `/register` en daarna inloggen via `/login`.

## Authenticatie toepassen

De bedoeling is dat je vanaf nu delen van je website kan afschermen.

Dit kan op verschillende manieren. Je kan een volledige Controller beveiligen. Hiervoor gebruik je de constructor van die class en de middleware van auth. Hieronder een voorbeeld van de `AdminController.php`.

``` php
class AdminController extends Controller {
    public function __construct() {
        $this->middleware('auth');
    }
}
```

Je kan uiteraard ook 1 bepaalde method beveiligen van een Controller. Bv de edit method.

``` php
class ProjectController extends Controller {
    public function edit() {
        $this->middleware('auth');
    }
}
```

Of meteen in de routing:

``` php
Route::get('/admin', [AdminController::class, 'index'])->middleware('auth');
```

## Huidige user ophalen

``` php
use Illuminate\Support\Facades\Auth;
 
// Retrieve the currently authenticated user...
$user = Auth::user();
echo $user->email;
```

## Middleware zelf aanmaken

We hebben al gezien dat de middleware er kan voor zorgen dat er gekeken wordt of een bezoeker al dan niet is ingelogd.

Maar je kan ook je eigen middleware maken, hieronder een (misschien wat absurd) voorbeeld waarbij we gaan controleren via middleware of een gebruiker George heet.

Maak in eerste instantie de middleware class aan `app/Http/Middleware/George.php` met onderstaande voorbeeldcode. Hierbij zal een bezoeker gecontroleerd worden of die is ingelogd en de naam 'George' heeft.

``` php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class George
{
    public function handle(Request $request, Closure $next) : Response
    {
        // Controleer of de gebruiker ingelogd is en of de naam 'George' is
        if (! $request->user() || $request->user()->name !== 'George') {
            abort(403, 'You are not authorized to access this resource.');
        }

        return $next($request);
    }
}
```



Vanaf nu kunnen we deze middleware gaan gebruiken. De meest eenvoudige manier is om dit rechtstreeks in onze route te doen. Hieronder een voorbeeld van een pagina die dus enkel bereikbaar is voor ingelogde personen met de naam 'George'.

``` php
use App\Http\Middleware\George;


Route::get('/george', function () {
    return 'Enkel voor ingelogde gebruikers met de naam George';
})->middleware(George::class);
```

## Middleware globaal definiëren 

Willen we de middleware toepassen voor iedere request?Dan kan dit ook door het toe te voegen in het bootstrap/app.php bestand:

Let wel op dat je dit niet doet om te controleren of je al dan niet bent ingelogd want ook de login en register route zal dan gecontroleerd worden hierop.

```php
use App\Http\Middleware\EnsureTokenIsValid;
 
->withMiddleware(function (Middleware $middleware) {
     $middleware->append(EnsureTokenIsValid::class);
})
```

[Alle info over middleware...](https://laravel.com/docs/11.x/middleware#main-content)