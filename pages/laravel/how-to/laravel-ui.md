# Laravel UI

*`laravel ui` de minst overladen package om authenticatie toe te voegen en dus het eenvoudigst aan te passen. Deze maakt gebruik van Bootstrap maar is eenvoudig weg te halen. Maar zelf verwijzen ze in hun documentatie naar de meer recentere Laravel Breeze starter kit. Bij Laravel Breeze worden er heel wat meer routes, views en components geïnstalleerd die allemaal gestijld zijn met Tailwind. Waardoor deze minder flexibel is om aan te passen. Maar indien je voor je backoffice toch Tailwind wenst te gebruiken misschien een goede keuze.*

Installeer de `laravel/ui` package

``` php
ddev composer require laravel/ui
```

En voer daarna een van onderstaande installatie script uit. 

> **Let wel op** dat indien je zelf reeds een `layout/app.blaze.php` bestand hebt. Je deze eventueel hernoemt of dupliceert als backup. Want het installatie script zal een nieuwe layout installeren met dezelfde naam (hij vraagt wel eerst bevestiging)

``` php
// Kies een van onderstaande
ddev artisan ui bootstrap --auth
ddev artisan ui vue --auth
ddev artisan ui react --auth
```

Je zal zien dat er nu Routes, Controllers en Views zijn aangemaakt om in te loggen, te registeren en naar het dashboard te gaan.

Wat betreft het dashboard zit er een fout in deze package. Pas de route home aan naar dashboard:

``` php
// Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
// Aanpassen naar
Route::get('/dashboard', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
```

Je kan nu zelf een gebruiker aanmaken via `/register` en daarna inloggen via `/login`.