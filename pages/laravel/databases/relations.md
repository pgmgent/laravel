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

> **Let op!**  
> Soms willen we dit niet. Als we bijvoorbeeld in een webshop een product wissen dan willen we niet dat in alle vorige bestellingen dit product wordt verwijderd. Het nadeel dan is dat onze boekhouding niet meer zal kloppen. Een oplossing is om gebruik te maken van een soft delete.

## Many-to-many

Om een veel-op-veel relatie te realiseren, is het noodzakelijk om een tussentabel (ook wel pivot table genoemd) aan te maken via migrations. Deze tabel bevat minimaal twee foreign keys (FK) die verwijzen naar de gekoppelde tabellen. Het kan handig zijn om ook timestamps toe te voegen, zodat je kunt bijhouden wanneer de relatie is aangemaakt.

Een voorbeeld van een tussentabel is `employee_project`. Dit komt van pas in een scenario waarin één project door meerdere werknemers uitgevoerd kan worden en één werknemer betrokken kan zijn bij meerdere projecten.

> **Let op**: De naam van de tussentabel wordt in het enkelvoud geschreven, in tegenstelling tot de andere tabellen. Voor de naamgeving gebruik je de namen van beide tabellen in het enkelvoud, gescheiden door een underscore en in alfabetische volgorde.

``` php
Schema::create('employee_project', function (Blueprint $table) {
    $table->id();
    $table->foreignId('employee_id');
    $table->foreignId('project_id');
    $table->timestamps(); //optioneel
});
```
### Combined primary key

Je kunt ervoor kiezen om een samengestelde primaire sleutel te gebruiken in plaats van een afzonderlijke `id`-kolom voor elke relatie. Dit doe je door bij het aanmaken van de tussentabel aan te geven dat de primary key bestaat uit de twee foreign keys. Hierdoor kan dezelfde relatie slechts één keer worden toegevoegd, wat dubbele invoer voorkomt.

``` php
Schema::create('employee_project', function (Blueprint $table) {
    $table->foreignId('employee_id');
    $table->foreignId('project_id');
    $table->timestamps(); //optioneel
    $table->primary(['employee_id', 'project_id']);
});
```
