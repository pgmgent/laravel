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
    @vite(['resources/css/app.css'])
</head>
```

Het is natuurlijk wel vervelend om, na ieder aanpassing in CSS of JavaScript, dit commando te moeten uitvoeren. Vandaar dat je ook een watch kan starten. Voeg hiervoor een watch script toe aan `package.json`

``` json
"scripts": {
    "dev": "vite",
    "build": "vite build",
    "watch": "vite build --watch"
},
```

Nadien kan je de watch starten.

``` shell
npm run watch
```

## Webpack gebruiken

Installeer de package `laravel-mix` via `npm`. Indien er nog geen npm aanwezig is in het project moet je eerst `npm init` doen.

``` shell
npm install laravel-mix --save-dev
```

Maak nu het bestand `webpack.mix.js` aan in de root van je project.

Om een build te doen van je css kan je onderstaande script toevoegen aan het javascript bestand.

``` javascript
let mix = require('laravel-mix');

mix.postCss('resources/css/app.css', 'public/css');
mix.minify('public/css/app.css');
```

Run het script met onderstaande commando in je CLI. Je zal zien dat in de public folder nu 2 bestanden zijn toegevoegd aan je css folder `app.css` en `app.min.css`. 

``` shell
npx mix
```

Je merkt wellicht op dat de minified versie dezelfde is. Dit komt doordat hij in development de minify niet uitvoert. Dit kan je forceren door `--production` mee te geven met het commando.

``` shell
npx mix --production
```

Het is natuurlijk wel vervelend om, na ieder aanpassing in CSS of JavaScript, dit commando te moeten uitvoeren. Vandaar dat je ook een watch kan starten. Deze zal bij iedere aanpassing het script uitvoeren.

``` shell
npx mix watch
```

### Sass / Scss en mix

Wens je gebruik te maken van Sass of Scss dan zal mix ook deze bestanden compileren naar een css bestand.

Hiervoor hebben we de sass compiler package nodig:

``` shell
npm install sass-loader@^12.1.0 sass resolve-url-loader@^5.0.0 --save-dev --legacy-peer-deps
```

En moeten we onderstaande regel toevoegen aan `webpack.mix.js`.
**Let wel:** je moet de watch opnieuw starten bij aanpassingen aan `webpack.mix.js` 

``` javascript
mix.sass('resources/scss/style.scss', 'public/css');
```