# Querying data

Bij Laravel kunnen we sql queries uitvoeren via de select method. In de eerste parameter plaatsen we de SQL Query. De 2e parameter array kunnen we gebruiken om variabelen te binden om sqlInjection te voorkomen.

```php
$projects = DB::select( "SELECT * FROM projects", []);
dd($projects);
```

## Querybuilder

Bij SQL moeten we een goede kennis hebben van SQL. Daarom heeft Laravel er ook voor gezorgd dat we de querybuilder kunnen gebruiken. Hiermee bouwen we een query op aan de hand van verschillende methods. Voordeel is vooral dat we hier dynamischer mee kunnen omgaan en dat de volgorde niet zo belangrijk is.

Het voorbeeld van hierboven kunnen we ook schrijven als:

```php
$projects = DB::table('projects')->select('*')->get();
dd($projects);
```

We hebben dus nog steeds de basis kennis nodig van sql maar kunnen vertrouwen dat Laravel deze correct zal schrijven. Een uitgebreider voorbeeld zou kunnen zijn:

```php
$querybuilder = DB::table('projects')->where('customer', $customer);

if(request('search')) {
    $search = request('search');
    //if a searchquery is available in the request -> filter on projects
    $querybuilder->where('name', 'LIKE', "%$search%");
}

$projects = $querybuilder->get();

dd($projects);
```

Het resultaat van deze queries zijn steeds standaard objecten of array's van standaard objecten. 

## Eloquent ORM

Omdat we binnen een MVC willen werken met models heeft Laravel ook een ORM voorzien. Deze zorgt er dan voor dat het resultaat van een query omgevormd wordt naar de juiste model (bv `Project`);

> Laravel maakt gebruik van een *Object-relational mapper (ORM)* om eenvoudig interactie te hebben met de database. Een ORM vertaalt relationele data om naar object georiënteerde programma code. Dit om het schrijven van SQL statements te vereenvoudigen en de kans op SQL-injecties te verkleinen. ( je kan dit vergelijken met `TypeORM` or `Prisma` binnen Node.js)

## Basis
Standaard wordt ieder Model uitgerust met de methods die gebruik maken van dit ORM. Het ORM zorgt er dus voor dat database records worden omgevormd naar Objecten die we kunnen gebruiken.

Zo hebben we reeds de methods `all()` en `find()` gezien bij de introductie:

``` php
//Alle records ophalen
$projects = Project::all();
var_dump($projects);

//Het vak ophalen met primary key 1
$project = Project::find(1);
var_dump($project);
```

Uiteraard zullen applicaties gebruik maken van meer uitdagende SQL queries om data op te halen.

## Query opbouwen

Een query opbouwen kan je vergelijken met het schrijven van een sql query. Het grootste verschil is vooral dat de volgorde bij SQL altijd gerespecteerd moet worden. Maar bij het opbouwen via de Eloquent ORM is dat niet meer van belang. Hoewel het me logisch en leesbaar lijkt om dit nog steeds te behouden.

``` sql
SELECT * FROM projects 
WHERE publish = 1 AND company_id = 4
ORDER BY name ASC
LIMIT 20
```

Als we bovenstaande SQL statement in Laravel willen opbouwen via een Model `Project` dan zal dit als volgt gebeuren.

``` php
$projects = Project::where('publish', 1)
            ->where('company_id', 4)
            ->orderBy('name', 'DESC')
            ->limit(20)
            ->get();
```

Indien je queries moet uitvoeren dat ruimer zijn dan 1 model of indien er geen model is kan je ook de `DB` Model gebruiken hiervoor

``` php
$projects = DB::table('projects')
                ->where('publish', 1)
                ->where('company_id', 4)
                ->orderBy('name', 'DESC')
                ->limit(20)
                ->get();
```

[Een volledig overzicht van de mogelijkheden kan je terugvinden op de Laravel handleiding](https://laravel.com/docs/12.x/queries#limit-and-offset)

## Aanmaken van nieuwe records

Via de models kan je ook eenvoudig een nieuw record aanmaken in de database.

``` php
$project = new Project();
$project->name = 'My new project';
$project->description = 'Full description of the project...';
$project->publish = 1;
$project->customer_id = 4;
$project->save();
```

## Record aanpassen

Hetzelfde kunnen we doen voor het aanpassen van een record.

``` php
$project = Project::find(123);
$project->customer_id = 2;
$project->save();
```

## Verwijderen

Het verwijderen van 1 record komt overeen met het wijzigen, maar uiteraard met gebruik van de delete method.

``` php
$project = Project::find(123);
$project->delete();

// Of korter geschreven
Project::find(123)->delete();
```

Je kan ook meerdere records dat voldoen aan een zoekopdracht in 1 actie verwijderen.

``` php
//Alle projecten van klant met id 4 uit de database verwijderen
Project::where('customer_id', 4)->delete();
```

**Let op!** Bij het verwijderen van records zijn die ook meteen verdwenen. Een soort prullenmand bestaat niet echt binnen MySQL.


