# Migrations

Via de ddev artisan van Laravel kan je migrations aanmaken en uitvoeren op je database.

Maak een eerste migrations file aan via het commando

``` shell
ddev artisan make:migration create_projects_table
```

Je zal merken dat eer een nieuwe php migration file is aangemaakt on `data/migrations/` met de timestamp.

Als je deze zou uitvoeren dan zal deze een tabel projects aanmaken met een id en de timestamps created_at en updated_at.

Om al eens op voorhand te kijken wat een migration zal uitvoeren van SQL queries kan je de migration starten met de extra parameter `pretend`.

``` shell
ddev artisan migrate --pretend
```

We moeten dus eerst nog enkele extra kolommen toevoegen vooraleer we de migration gaan uitvoeren. Bij iedere kolom moeten we het data type meegeven. (Bekijk hier het overzicht van datatypes)[https://laravel.com/docs/9.x/migrations#available-column-types].

Dit gebeurd telkens in de up method.

``` php
Schema::create('projects', function (Blueprint $table) {
    $table->id();
    $table->string('name', 150);
    $table->text('description');
    $table->boolean('publish');
    $table->timestamps();
});
```

In de down method moeten we ervoor zorgen dat de update ongedaan gemaakt wordt. In dit geval de tabel verwijderen.
``` php
Schema::dropIfExists('projects');
```

Als de migration in orde is kunnen we deze testen via de pretend, dan krijg je de sql te zien die zal uitgevoerd worden, of je kan die meteen uitvoeren:

``` shell
ddev artisan migrate --pretend
ddev artisan migrate
```

Je kan nu meerdere migrations aanmaken per tabel. Maar je kan uiteraard ook aanpassingen doen aan een bestaande tabel. Bijvoorbeeld het toevoegen van een extra kolom.

``` php 
Schema::table('projects', function (Blueprint $table) {
    $table->integer('year');
});
```

(Meer info in de handleiding van Laravel)[https://laravel.com/docs/9.x/migrations]

## Roll-back (keer ne ke were)

Heb je een migration uitgevoerd en wil je deze migration ongedaan maken. Dan kan je een rollback doen. Hierbij kan je ook een parameter meegeven met het aantal migration die ongedaan gemaakt moeten worden. Door dit te doen zullen de 'down' methods uitgevoerd worden.

```
ddev artisan migrate:rollback --step=1
```

> Ook hier kan je voor de veiligheid eerst eens een `--prentend` bijplaatsen
