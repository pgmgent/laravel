# Migrations

Via [Artisan van Laravel](/laravel/laravel/how-to/artisan) kan je migrations aanmaken en uitvoeren op je database.

Maak een eerste migrations file aan via het commando

``` shell
ddev artisan make:migration create_projects_table
```

Je zal merken dat er een nieuwe php migration file is aangemaakt on `data/migrations/` met de timestamp.

Als je deze zou uitvoeren dan zal deze een tabel projects aanmaken met een id en de timestamps created_at en updated_at.

Om al eens op voorhand te kijken wat een migration zal uitvoeren van SQL queries kan je de migration starten met de extra parameter `pretend`.

``` shell
ddev artisan migrate --pretend
```

We moeten dus eerst nog enkele extra kolommen toevoegen vooraleer we de migration gaan uitvoeren. Bij iedere kolom moeten we het data type meegeven. (Bekijk hier het overzicht van datatypes)[https://laravel.com/docs/12.x/migrations#available-column-types].

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

## Een bestaande tabel updaten

Je kunt meerdere migrations aanmaken per tabel, maar het is ook mogelijk om aanpassingen te maken aan een bestaande tabel. Dit is handig voor het toevoegen van nieuwe kolommen, het wijzigen van kolomtypes of het verwijderen van kolommen.

Stel dat je een extra kolom year wilt toevoegen aan de projects-tabel. Dit kun je doen door een nieuwe migration aan te maken:

``` shell
ddev artisan make:migration add_year_column_to_projects_table --table=projects
```

In het aangemaakte bestand voeg je de gewenste wijzigingen toe in de up-methode:

``` php 
Schema::table('projects', function (Blueprint $table) {
    $table->integer('year')->after('description'); // De kolom komt na 'description'
});
```

In de down-methode specificeer je hoe de wijziging ongedaan moet worden gemaakt:

``` php
Schema::table('projects', function (Blueprint $table) {
    $table->dropColumn('year');
});
```

(Meer info in de handleiding van Laravel)[https://laravel.com/docs/12.x/migrations]

## Veel-op-veel relatie

Een Many-to-many relatie verwacht een tussentabel. De naamgeving van deze tussen tabellen in Laravel is tabelnamen in enkelvoud, alfabetisch met een underscore tussen.

Dus als we medewerkers willen koppelen aan een project dan zullen we een employees tabel hebben. We weten dan medewerkers aan meerdere projecten gekoppeld kunnen worden en een project kan meerdere medewerks hebben (many-to-many). De tussentabel zal in dit geval de naam `employee_project` krijgen.



``` php
Schema::create('employee_project', function (Blueprint $table) {
    $table->id();
    $table->foreignId('employee_id');
    $table->foreignId('project_id');
    $table->timestamps(); //optioneel
});
```
### Combined primary key

Het is ook mogelijk om een combined primary key te maken in plaats van een nieuw id per relatie. Hiervoor moet je in de creatie meegeven dat de primary key bestaat uit de 2 foreign keys. Dit wil dan wel zeggen dat je de relatie maar 1 keer kan aanmaken.

``` php
Schema::create('employee_project', function (Blueprint $table) {
    $table->foreignId('employee_id');
    $table->foreignId('project_id');
    $table->primary(['employee_id', 'project_id']);
});
```

## Roll-back (keer ne ke were)

Heb je een migration uitgevoerd en wil je deze migration ongedaan maken. Dan kan je een rollback doen. Hierbij kan je ook een parameter meegeven met het aantal migration die ongedaan gemaakt moeten worden. Door dit te doen zullen de 'down' methods uitgevoerd worden.

```
ddev artisan migrate:rollback --step=1
```

> Ook hier kan je voor de veiligheid eerst eens een `--prentend` bijplaatsen
