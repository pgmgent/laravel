# Soft delete

Laravel heeft wel een ingebouwde manier om records niet meteen te wissen.

Hierbij wordt een extra kolom toegevoegd `deleted_at`. Indien een record verwijderd is zal hier de datum ingevuld worden. Het records zal dus blijven bestaan in de database maar zal niet meer opgehaald worden bij een gewone `get()` of `find()`.

In je model moet je aangeven dat deze werkt via zo een soft delete:

``` php
namespace App\Models;
 
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
 
class Project extends Model
{
    use SoftDeletes;
}
```

Uiteraard moet ook eerst de `deleted_at` kolom aangemaakt worden. Dit kan via een migration.

``` php
Schema::table('projects', function (Blueprint $table) {
    $table->softDeletes();
});
```
