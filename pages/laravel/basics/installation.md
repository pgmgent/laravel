# Installatie via ddev

Je kan via ddev en docker op een eenvoudige manier een server starten. Via deze ddev kan je ook een laravel project starten. [Installatie instructies...](https://ddev.readthedocs.io/en/latest/users/quickstart/#laravel)

``` shell
mkdir my-laravel-app
cd my-laravel-app
ddev config --project-type=laravel --docroot=public
ddev start
ddev composer create "laravel/laravel:^11"
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

Zoals je kan zien in de .env is er geen `APP_KEY` ingevuld. Genereer deze met onderstaande code.

``` shell
ddev artisan key:generate
```

Als laatste stap heeft Laravel reeds enkele standaard tabellen nodig om te kunnen opstarten. Voor onderstaande commando uit om deze tabellen te installeren.

``` shell
ddev artisan migrate
```

Nu kan je de site bekijken via de voorziene url en poort.

``` shell
ddev describe
ddev launch
```

> ### Tip: Zet de poorten vast om bij het opstarten telkens dezelfde poorten te krijgen
> Voeg onderstaande regels toe aan de `.ddev/config.yaml`. Kies poorten die je nog niet gebruikt voor een andere website.
> ```
> host_webserver_port: "8000"
> host_https_port: "8001"
> host_db_port: "8002"
> ```

