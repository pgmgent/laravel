# Components

In het onderdeel van layouts hebben we reeds een component aangemaakt voor een layout. Hierdoor konden we de `<x-layout></x-layout>` gebruiken om een volledige layout in te laden.

We kunnen deze techniek ook gebruiken om kleinere componenten te maken. In onderstaande voorbeeld maken we een zoek formulier die we kunnen hergebruiken.

Maak een component aan `searchform.blade.php` aan in `resources/views/components`. Met onderstaande code:

```
<form>
    <input type="text" name="search">
    <button type="submit">Zoeken</button>
</form>
```

Deze code kunnen we nu inladen in een view of andere component zoals de layout met onderstaande code

```
<x-searchform></x-searchform>
```

Als we gegevens willen doorgeven naar het component dan kan dit op 2 manieren. Je maakt een attribuut aan en stuurt zo een waarde mee, of je plaatst de waarde tussen de open en sluit tag zelf.

```
<x-searchform >
    Dit is de zoekopdracht
</x-searchform>
```

In het component kan je de attributen aanroepen als (php) variabele. De inhoud van de component zelf kan je ophalen via de variabele `$slot`. Let ook op dat je, vooral bij attributen, ook een default waarde geeft. Anders krijg je een foutmelding als het attribuut niet werd meegegeven met het component. 

```
<form>
    <input type="text" name="{{ $slot }}">
    <button type="submit">{{ $buttonText ?? 'Zoeken'}}</button>
</form>
```

### Groeperen in folders

Als je heel veel componenten hebt dan kan je folders maken om deze componenten logisch te groeperen. Ons aangemaakt component zouden we ook kunnen plaatsen in de folder forms `resources/views/components/forms/searchform.blade.php`.

Bij het aanroepen moet je dan ook de folderstructuur meegeven.

```
<x-forms.searchform buttonText="Filteren">
    Dit is de zoekopdracht
</x-forms.searchform>
```