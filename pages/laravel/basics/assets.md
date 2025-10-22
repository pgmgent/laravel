# Assets 

*Met assets bedoelen we hier de css en javascript files die je wenst te gebruiken in je project. De scripts en styles die je wenst te gebruiken moeten steeds in de `public` folder staan.*

Je kan dit doen door je files rechtstreeks in de `public/css/` te plaatsen. Of je kan gebruik maken via Laravel Mix. Dit is een wrapper rond webpack (een bundler die je kan gebruiken om je assets te bundelen en te compileren.)

Je linkt naar die bestanden in je html bestanden via de `asset()` helper. Deze helper zal de juiste url teruggeven naar je bestand. 

``` html
<link rel="stylesheet" href="{{ asset('css/style.css'); }} ">
```

## Vite gebruiken

Vite is een bundler die je kan gebruiken om je assets te bundelen en te compileren. Het is een alternatief voor webpack. Vite is sneller dan webpack en heeft een kleinere footprint.

``` shell
npm install
```

Pas nadien de `vite.config.js` aan in de root van je project. Om nadien de build uit te voeren.

``` shell
npm run build
```

Je zal zien dat vite ook een versienummer geeft aan de css. Om te linken vanuit je html moet je onderstaande code gebruiken. 

``` html
<head>
    ...
    @if (file_exists(public_path('build/manifest.json')) || file_exists(public_path('hot')))
        @vite(['resources/css/app.css', 'resources/js/app.js'])
    @endif
</head>
```

Tijdens development is het vervelend om telkens een build te moeten doen, dus maken we gebruik van een vite server die je kan opstarten via onderstaande code.

``` shell
npm run dev
```

## Build voor productie

Om de applicatie online te plaatsen moet je steeds een build doen. Dit kan je doen via `npm run build`. Daarna zorg je ervoor dat de `public/build` folder mee geüpload wordt naar de server.
