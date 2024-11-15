# Relaties

## Een-op-veel 

Laten we de bestaande `projects`-tabel uitbreiden en een nieuwe `customers`-tabel toevoegen om een een-op-veel relatie te definiëren. In dit voorbeeld zal één klant (`Customer`) meerdere projecten (`Projects`) kunnen hebben, maar elk project behoort tot slechts één klant.

Zorg ervoor dat de database de juiste structuur heeft. We maken een migratie voor de `customers`-tabel en passen de `projects`-tabel aan om een `customer_id`-kolom toe te voegen.

**Migratie voor `customers`-tabel:**

```php
Schema::create('customers', function (Blueprint $table) {
    $table->id();
    $table->string('name');
    $table->string('email')->unique();
    $table->string('phone_number')->nullable();
    $table->timestamps();
});
```
Aanpassing aan projects-tabel om een customer_id-kolom toe te voegen:

```php
Schema::table('projects', function (Blueprint $table) {
    $table->foreignId('customer_id')->constrained()->onDelete('cascade');
});
```

Hier zorgt constrained() ervoor dat de customer_id-kolom wordt gekoppeld aan de id-kolom van de customers-tabel en onDelete('cascade') zorgt ervoor dat gerelateerde projecten worden verwijderd als een klant wordt verwijderd. 

> Let hier wel mee op!
> ---
> Soms willen we dit niet. Als we bijvoorbeeld in een webshop een product wissen dan willen we niet dat in alle vorige bestellingen dit product wordt verwijderd. Het nadeel dan is dat onze boekhouding niet meer zal kloppen. Een oplossing is om gebruik te maken van een soft delete.

## Many-to-many

Als we een veel op veel relatie wensen te realiseren moeten we eerst een tussentabel of pivot table aanmaken via de migrations.

Bijvoorbeeld de tussentabel `project_user`. Want 1 project kan door meerdere users uitgevoerd worden en 1 user kan meerdere projecten hebben.

``` php
Schema::create('project_user', function (Blueprint $table) {
    $table->foreignId('user_id');
    $table->foreignId('project_id');
    $table->primary(['user_id', 'project_id']);
});
```
