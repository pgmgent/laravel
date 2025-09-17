# Database seeding

Laravel maakt gebruik van seeding om de database van test- of ontwikkelingsgegevens te voorzien. Seeding is het proces van invoegen van initiële gegevens in de database, zodat je een consistente dataset hebt tijdens het ontwikkelen of testen van je applicatie. 

## Voordelen van Seeding in Laravel:
*Consistente Testgegevens*: Seeding zorgt ervoor dat je altijd met dezelfde testgegevens kunt werken, wat handig is voor het testen van functionaliteit.

*Efficiënt Ontwikkelen*: Ontwikkelaars kunnen meteen beginnen met het testen van functionaliteit zonder zich zorgen te maken over het handmatig invoeren van testgegevens.

*Realistische Dataset*: Door dummygegevens in te voegen met seeding, kun je een realistische dataset creëren, wat nuttig is voor het evalueren van de prestaties en functionaliteit van je applicatie.

## Database Factories Aanmaken
Database factories zijn verantwoordelijk voor het genereren van dummygegevens. Je kunt deze factories aanmaken met het Artisan-commando:

``` bash
ddev artisan make:factory ProjectFactory
```
In de gegenereerde `./database/factories/ProjectFactory.php` kun je dan de eigenschappen en waarden van de dummygegevens definiëren.

``` php
public function definition(): array
{
    return [
        'name' => fake()->name(),
        'description' => fake()->text(),
        'publish' => fake()->boolean(),
        'created_at' => fake()->dateTimeInInterval('-50 week', '+50 week'),
    ];
}
```

[Bekijk alle mogelijkheden van de faker ](https://fakerphp.github.io/formatters/)

## Link de factory aan de Model

We moeten nu het model linken aan de factory. Dit kan door de `HasFactory` toe te voegen aan het model.

``` php
<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model  {

    use HasFactory;

    
}
```

## Database Seeder Vullen:
Ga naar `./database/seeders/DatabaseSeeder.php` en voeg in de run method onderstaande code toe:

``` php
public function run()
{
    //remove all data from table
    Project::truncate();
    //add 500 new records
    Project::factory()
        ->count(500)
        ->create();
}
```

## Seeder runnen
Voer het volgende Artisan-commando uit om de database te seeden:

``` bash
ddev artisan db:seed
```

Als je een verse database wilt migreren en direct wilt vullen met dummygegevens, kun je het volgende commando gebruiken:

``` bash
ddev artisan migrate --seed
```

## Database Seeder Aanmaken

Laravel voorziet ook de mogelijkheid om aparte database seeders aan te maken, bijvoorbeeld per Model. je kan een Seeder class aan via onderstaande artisan code.

``` bash
ddev artisan make:seeder ProjectSeeder
```

Hierin kan je dan de code opsplitsen per model.

``` php
<?php

namespace Database\Seeders;

use App\Models\Project;
use Illuminate\Database\Seeder;

class ProjectSeeder extends Seeder
{
    public function run(): void
    {
        //remove all data from table
        Project::truncate();
        //add 500 new records
        Project::factory()
            ->count(500)
            ->create();
    }
}
```

In je default DatabaseSeeder kan je deze dan aanroepen via de call method.

``` php
class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        //run project seeder
        $this->call(ProjectSeeder::class);
    }
}
```

Uitvoeren kan nog steeds met `ddev artisan db:seed`. Maar je kan ook een specifieke class meegeven als je enkel die wil uitvoeren. 

``` bash
ddev artisan db:seed --class=ProjectSeeder
```

## Tussentabel vullen

Hieronder zien jullie een voorbeeld van het opvullen van een tussentabel waarbij er reeds projecten waren aangemaakt en gevuld via een seed.

``` php
//tussentabel leeg maken
DB::table('employee_project')->truncate();
Employee::truncate();

//Medewerkers vullen
Employee::factory()->count(50)->create();

//koppel 1-3 random projecten aan elke medewerker
foreach (Employee::all() as $employee) {
    $projects = Project::inRandomOrder()->take(rand(1, 3))->pluck('id');
    foreach ($projects as $projectId) {
        DB::table('employee_project')->insert([
            'employee_id' => $employee->id,
            'project_id' => $projectId,
            'created_at' => now(),
            'updated_at' => now(),
        ]);
    }
}
```

### Meer info

- [Factories handleiding](https://laravel.com/docs/12.x/eloquent-factories)
- [Seeding handleiding](https://laravel.com/docs/12.x/seeding)
- [FakerPHP mogelijkheden](https://fakerphp.github.io/formatters/)