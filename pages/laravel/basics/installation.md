# Installatie
## Installatie via ddev

Je kan via ddev en docker op een eenvoudige manier een server starten. Via deze ddev kan je ook een laravel project starten. [Installatie instructies...](https://ddev.readthedocs.io/en/latest/users/quickstart/#laravel)

``` shell
mkdir my-laravel-app
cd my-laravel-app
ddev config --project-type=laravel --docroot=public --create-docroot --php-version=8.1
ddev composer create --prefer-dist --no-install --no-scripts laravel/laravel -y
ddev composer install
ddev exec "php artisan key:generate"
ddev launch
```

## Installatie via Composer

Om Laravel te installeren hebben we eerst en vooral [Composer](https://getcomposer.org/download/) nodig.
Zie: [Basis^rincipes > Composer](/laravel/principles/composer.html)

Voer daarna volgende commando's uit in je CLI:

``` shell
composer create-project laravel/laravel my-first-project 
cd my-first-project
php artisan serve
```

Hierna kan je surfen naar de url die de Artisan CLI interface heeft gestart.
