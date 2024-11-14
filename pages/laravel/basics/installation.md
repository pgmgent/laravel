# Installatie

## Installatie via ddev

Je kan via ddev en docker op een eenvoudige manier een server starten. Via deze ddev kan je ook een laravel project starten. [Installatie instructies...](https://ddev.readthedocs.io/en/latest/users/quickstart/#laravel)

``` shell
mkdir my-laravel-app
cd my-laravel-app
ddev config --project-type=laravel --docroot=public --create-docroot
ddev start
ddev composer create --prefer-dist --no-install --no-scripts laravel/laravel -y
ddev composer install
```
Maak een duplicaat van de `.env.example` en hiernoem deze naar `.env`
Vul de correcte databasegegevens in :

``` .env
DB_CONNECTION=mysql
DB_HOST=db
DB_PORT=3306
DB_DATABASE=db
DB_USERNAME=db
DB_PASSWORD=db
```

Zoals je kan zien in de .env is er geen `APP_KEY` ingevuld. Genereer deze met onderstaande code. Daarna kan je de website testen.

``` shell
ddev artisan key:generate
ddev launch
```

## Installatie via PHP en Composer

Om Laravel te installeren hebben we eerst en vooral [Composer](https://getcomposer.org/download/) nodig.
Zie: [Basis^rincipes > Composer](/laravel/principles/composer.html)

Voer daarna volgende commando's uit in je CLI:

``` shell
composer create-project laravel/laravel my-first-project 
cd my-first-project
php artisan serve
```

Hierna kan je surfen naar de url die de Artisan CLI interface heeft gestart.
