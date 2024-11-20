# Components

In het onderdeel over layouts hebben we eerder een component aangemaakt om een layout te gebruiken met `<x-layout></x-layout>`. Op dezelfde manier kun je kleinere componenten maken om herbruikbare stukjes code te creëren. In het volgende voorbeeld maken we een zoekformulier dat eenvoudig opnieuw kan worden gebruikt.

## Een component aanmaken

Maak een componentbestand genaamd `searchform.blade.php` in de map `resources/views/components` met de volgende code:

``` html
<form>
    <input type="text" name="search">
    <button type="submit">Zoeken</button>
</form>
```

Deze code kunnen we nu inladen in een view of andere component zoals de layout met onderstaande code:

``` html
<x-searchform></x-searchform>
```

## Gegevens doorsturen naar een component
Je kunt op twee manieren gegevens doorgeven aan een component:

1. Door attributen te gebruiken en waarden mee te geven.
1. Door de inhoud tussen de open en sluit tag te plaatsen.
   
``` html
<x-searchform buttonText="Filter">
    Dit is de zoekopdracht
</x-searchform>
```

In het component kun je attributen als PHP-variabelen aanroepen. De inhoud tussen de tags wordt opgehaald met de variabele `$slot`. Zorg ervoor dat je, vooral bij attributen, een standaardwaarde instelt om fouten te voorkomen als een attribuut niet wordt meegegeven.


``` html
<form>
    <input type="text" name="{{ $slot }}">
    <button type="submit">{{ $buttonText ?? 'Zoeken'}}</button>
</form>
```

### PHP variabelen doorsturen

Er zijn 2 manieren om bijvoorbeeld een array door te sturen naar een component

1. Direct een array meegeven:

``` html
<x-itemlist :items="['Item 1', 'Item 2', 'Item 3']"></x-itemlist>
```

2. Vanuit de controller:
Stel dat je in je controller een array hebt gedefinieerd en deze doorgeeft aan je Blade-template:

``` php
public function show()
{
    $items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
    return view('your-view', compact('items'));
}
```

De blade ziet er dan zo uit:

``` html
<x-itemlist :items="$items"></x-itemlist>
```

Binnen je component kan je deze dan gebruiken als array:

``` html
<ul>
@foreach $items as $key => $item
    <li>{{ $item }}</li>
@endforeach
</ul>
```

Het dubbele punt voor de attributenaam geeft aan dat de waarde als een PHP-expressie moet worden geïnterpreteerd. Dit is nodig om ervoor te zorgen dat de array correct wordt doorgegeven in plaats van als een string.

## Componenten groeperen in mappen

Als je veel componenten hebt, kun je ze in mappen groeperen. Door componenten te groeperen en herbruikbare elementen te creëren, houd je je codebase georganiseerd en onderhoudbaar.

Je kunt bijvoorbeeld het zoekformuliercomponent plaatsen in een map forms met de naam `resources/views/components/forms/searchform.blade.php`.

Bij het aanroepen van dit component moet je de mapstructuur aangeven:

``` html
<x-forms.searchform buttonText="Filteren">
    Dit is de zoekopdracht
</x-forms.searchform>
```