# Relaties

## One-to-Many

[Leer meer over hoe je de migration moet maken voor een one-to-many relatie](/laravel/laravel/databases/relations#one-to-many)

Maak ondertussen ook een model voor customers aan (zie Introductie.md)

Via de methods `belongsTo` en `hasMany` kunnen we de relatie leggen tussen beide models op onderstaande manier.

```php
class Project extends Model
{
    public function customer()
    {
        //Een project heeft 1 klant
        return $this->belongsTo(Customer::class);
    }
}
```

Deze method kan je dan in je controller of views aanroepen als property.

```php
    $project = Project::find($id);
    echo $project->customer->name;
```

Bij customers kunnen we dan de relatie leggen met projects. Dit gebeurt aan de hand van de method `hasMany`. Want een klant kan meerdere projecten hebben.

```php
namespace App\Models;
 
use Illuminate\Database\Eloquent\Model;
 
class Customer extends Model
{
    public function projects()
    {
        //Een klant heeft meerder projecten
        return $this->hasMany(Project::class);
    }
}
``` 

```php
    $customer = Customer::find($id);
    foreach($customer->projects as $project) {
        echo $project->name . ', ';
    }
```

## Many-to-many

Als we een veel op veel relatie wensen te realiseren moeten we eerst een tussentabel of pivot table aanmaken via de migrations. [Leer meer over hoe je de migration moet maken voor een tussentabel](/laravel/laravel/databases/relations#many-to-many)

In dit voorbeeld gaan we uit van de tussentabel `employee_project`. Want 1 project kan door meerdere users uitgevoerd worden en 1 user kan meerdere projecten hebben. 

Om de relatie te leggen tussen de beide tabellen gebruiken we de `belongsToMany` method

```php
namespace App\Models;
 
use Illuminate\Database\Eloquent\Model;
 
class Employee extends Model
{
    public function projects()
    {
        return $this->belongsToMany(Project::class);
    }
}
```

```php
namespace App\Models;
 
use Illuminate\Database\Eloquent\Model;
 
class Projects extends Model
{
    public function employees()
    {
        return $this->belongsToMany(Employee::class);
    }
}
```

## Relatie doorheen een andere tabel

Indien je 3 bestaande tabellen met bijhorende models hebt. Waartussen telkens een een-op-veel relatie ligt. Bijvoorbeeld: Motorcycles -> Types -> Brands.

Waarbij 1 brand meerdere types heeft en 1 type meerdere motorcycles bevat. Dan kan je een relatie leggen van Motorcycle naar Brand, doorheen de Types tabel.

```php
 
namespace App\Models;
 
use Illuminate\Database\Eloquent\Model;
 
class Motorcycle extends Model
{
    public function brand()
    {
        return $this->hasOneThrough(Brand::class, Type::class);
    }
}
```

Het omgekeerde kan je ook doen met `hasManyThrough`. Dus bijvoorbeeld van Brand naar Motorcycles.

```php 
namespace App\Models;
 
use Illuminate\Database\Eloquent\Model;
 
class Brand extends Model
{
    public function motorcycles()
    {
        return $this->hasManyThrough(Motorcycle::class, Type::class);
    }
}
```