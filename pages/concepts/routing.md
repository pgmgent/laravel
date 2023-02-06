# Routing

*In front-end-apps is routing een technologie om te schakelen tussen verschillende UI-weergaven,  gebaseerd op de wijzigingen van de huidige URL (met de route). In back-end-apps is routing een technologie om te schakelen tussen verschillende eindpunten aan de serverzijde,  op basis van de wijzigingen van de gevraagde URL (de route vasthouden).*

*Veel front-end- en back-end-frameworks implementeren intern routing en roepen verschillende functionaliteiten aan op basis van de URL en zijn componenten.*


Routing is met andere woorden dus een mechanisme waarbij HTTP-verzoeken worden gerouteerd naar de code die ze afhandelt. Simpel gezegd bepaal je in de **Router** wat er moet gebeuren als een gebruiker een bepaalde pagina bezoekt.

Hier is een eenvoudig routeringsvoorbeeld van Laravel. Wanneer iemand de subpagina /test/ van de website opent , zal deze een Hello World- tekst weergeven.

```php
Route::get('/test', function () { 
    return 'Hello World';
});
```

Een ander voorbeeld. Hier vertellen we de applicatie om onze verifyFields()methode in de  ContactFormControllerklas uit te voeren, wanneer iemand het formulier op de /contact/ pagina indient via de POST-methode.

```php
Route::post('/contact', 'ContactFormController@verifyFields');
 ```

Er zijn veel kant-en-klare routeringsbibliotheken die het gemakkelijk maken om nieuwe routes aan uw applicatie toe te voegen, zonder ze één voor één handmatig aan te maken.

<https://packagist.org/?query=route>

