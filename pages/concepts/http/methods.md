# Methods

## GET
De GET-methode is een van de meest gebruikte HTTP-requestmethoden en wordt ingezet om data op te vragen van een server. Het verzoek vraagt om een specifieke bron of gegevens en stuurt deze op een veilige manier terug naar de client. De parameters van het verzoek worden meegegeven in de URL, wat betekent dat de data zichtbaar is in de adresbalk. Dit maakt de methode geschikt voor het ophalen van niet-gevoelige informatie, zoals webpagina's of API-gegevens.

** Kenmerken van GET: **

- De data wordt in de URL opgenomen als queryparameters, zoals ?key1=value1&key2=value2.
- Het verzoek is 'idempotent', wat betekent dat het herhaaldelijk versturen van dezelfde GET-aanvraag dezelfde respons oplevert zonder ongewenste effecten.
- Beperkt in hoeveelheid data die kan worden verzonden, afhankelijk van de maximale URL-lengte van de browser en server.

## POST
De POST-methode wordt gebruikt om data naar de server te verzenden voor verwerking. In tegenstelling tot GET wordt de data bij een POST-verzoek niet in de URL meegegeven, maar in de body van het verzoek. Dit maakt het geschikt voor het verzenden van gevoelige informatie, zoals inloggegevens of gegevens van formulieren.

** Kenmerken van POST: **

- De data wordt verzonden in de body van het verzoek, wat zorgt voor meer privacy en flexibiliteit dan de GET-methode.
- Het is niet idempotent; meerdere keren dezelfde POST-aanvraag verzenden kan leiden tot meerdere nieuwe records of veranderingen.
- Geschikt voor grotere hoeveelheden data en het versturen van complexe objecten.
- POST-aanvragen worden vaak gebruikt bij het indienen van formulieren, het uploaden van bestanden, of het creëren van nieuwe resources in een RESTful API.

