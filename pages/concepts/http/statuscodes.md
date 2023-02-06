# Statuscodes

*Alleen al door het internet te gebruiken, bent u waarschijnlijk een aantal HTTP-statuscodes tegengekomen, zoals de 404-statuscode, maar dat is slechts het één van de vele. Er zijn **meer dan 50 unieke HTTP-statuscodes** in **vijf verschillende categorieën**. Gelukkig hoef je deze niet allemaal of zelfs de meeste te kennen. Hieronder wordt uitgelegd wat elk van de vijf secties is, evenals de belangrijkste statuscodes van elk van die secties. Met deze informatie kunt u vol vertrouwen robuuste API's bouwen die de juiste HTTP-statuscode retourneren, waardoor de API gebruiksvriendelijker wordt.*

::: icon-tip Tip
Als je een volledige lijst wilt van alle HTTP-statuscodes met uitleg (ook degene die niet in dit artikel staan), raad ik je ten zeerste aan om [de pagina met HTTP-statuscodes van MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) te bekijken.
::: 

## Statuscode 100
*Het eerste niveau van statuscodes is het 100-niveau en gelukkig is geen van deze codes echt zo algemeen of belangrijk om te begrijpen. Er zijn slechts een handvol codes in deze sectie en geen ervan is van toepassing op normale webontwikkeling/API-ontwikkeling, dus we kunnen deze hele sectie overslaan.*

## Statuscode 200
*Statuscodes van 200 niveaus daarentegen zijn **de meest gebruikte statuscodes**, maar gelukkig zijn er maar een paar die u moet weten. Deze statuscodes worden gebruikt om succesvolle reacties weer te geven en moeten worden geretourneerd wanneer een aanvraag succesvol was.*

### 200 - Oké
De eerste statuscode is 200 en is slechts een generieke successtatus. Dit zegt alleen dat wat het verzoek ook probeerde te doen, succesvol was, maar het geeft niet meer informatie dan dat. Daarom is de 200-status de terugvalstatus die u moet gebruiken voor elke succesvolle aanvraag wanneer er geen specifiekere code meer is om in plaats daarvan te gebruiken.

### 201 - Created / Gemaakt
Over meer specifieke codes gesproken, we hebben de 201-code. Dit is een succescode die aangeeft dat een resource met succes is gemaakt. Meestal zul je dit zien als het resultaat van een POST-verzoek, aangezien de meeste POST-verzoeken worden gebruikt om dingen te maken. Als u bijvoorbeeld een API-route hebt voor het maken van een nieuw item in uw database, moet u een 201 retourneren als dat item met succes is gemaakt.

### 202 - Accepted / Geaccepteerd
In wezen betekent deze code alleen dat het antwoord met succes is ontvangen, maar dat de daadwerkelijke actie van het verzoek (een bron maken, gegevens bijwerken, enz.) nog niet is voltooid. Dit wordt vaak gebruikt wanneer het uitvoeren van een bepaalde taak erg traag is, zodat deze in de wachtrij komt te staan ​​om later te doen. Als u bijvoorbeeld een groot rapport moet genereren dat u later naar een gebruiker e-mailt, kunt u een 202 retourneren om de klant te laten weten dat u het verzoek aan het verwerken bent, maar nog niet hebt voltooid.

### 204 - No Content / Inhoud niet gevonden
Een andere specifieke code is de 204-code, wat betekent dat het verzoek is gelukt, maar dat er geen gegevens zijn om terug te sturen. Dit is heel gebruikelijk bij **DELETE**-verzoeken, omdat er meestal geen gegevens zijn om terug te sturen als reactie op het verwijderen van iets. De grootste sleutel tot deze statuscode is dat deze geen gegevens in de body kan bevatten.

## Statuscode 300
*Statuscodes op 300 niveaus hebben alles te maken met **omleiden**. Als een pagina bijvoorbeeld is verplaatst naar een nieuwe locatie of als u de gebruiker wilt omleiden naar gegevens in de cache, gebruikt u een van de vele statuscodes met 300 niveaus.*

### 301 - Permanent Redirect / Permanente omleiding
Waarschijnlijk het meest voorkomende type statuscode op 300-niveau is de 301. Dit zegt alleen dat de pagina op een bepaalde URL permanent is verplaatst naar een nieuwe URL. Deze nieuwe URL moet in het antwoord met de 301-code naar beneden worden gestuurd. Als dit gebeurt, zal de browser gebruikers automatisch omleiden naar de nieuwe URL. Dit zal zoekmachines er ook toe aanzetten om alle gegevens van de oude URL te associëren met de nieuwe URL, zodat u hierdoor geen rankings in een zoekmachine verliest.

### 302 - Found / Gevonden
Vergelijkbaar met de 301-status wordt deze status gebruikt om de klant te vertellen dat de pagina een nieuwe URL heeft, maar dit is een tijdelijke wijziging. Dit betekent dat zoekmachines de oude URL niet zullen vervangen door deze nieuwe URL. Dit is handig als u een gebruiker naar een andere versie van dezelfde pagina moet sturen, maar niet wilt dat die versie van de pagina uw hoofdversie in zoekmachines vervangt. Als u bijvoorbeeld A/B-tests uitvoert, zou u de helft van uw gebruikers 302 omleiden naar de alternatieve versie van de site. Dit is ook handig voor zaken als lokalisatie, waarbij u gebruikers wilt omleiden naar gelokaliseerde versies van uw site op basis van waar ze vandaan komen.

### 304 - Not Modified / Niet gewijzigd
De laatste belangrijke statuscode op het 300-niveau is de 304. Deze wordt gebruikt voor caching en zegt in feite alleen dat de aangevraagde bron niet is gewijzigd. Dit moet worden gebruikt in combinatie met een eerder 200 statusverzoek dat caching-headers bevatte, zoals de Cache-Control, en Expires-header. Wanneer een client toegang probeert te krijgen tot een bron voordat de in de cache opgeslagen tijdsperiode is verstreken, retourneert de server een 304 om te voorkomen dat alle gegevens opnieuw naar de client moeten worden verzonden.

## Statuscode 400 
*Nu komen we eindelijk bij **het grootste deel van statuscodes**. Statuscodes op 400-niveau vertegenwoordigen elke **fout** die is opgetreden als gevolg van **invoer van de klant**. Bijvoorbeeld als de client slechte of onvolledige gegevens naar de server stuurt.*

### 400 - Bad Request / Slecht verzoek
Net als bij de 200-statuscode vertegenwoordigt de 400-statuscode een generiek slecht verzoek. Dit betekent alleen dat gegevens die naar het verzoek worden verzonden (URL-parameters, JSON, enz.) onjuist, verkeerd opgemaakt, ontbreken of op een of andere manier onbruikbaar zijn voor de server. Dit is het standaard statusbericht dat u terugstuurt als u een verzoek heeft dat niet kan worden afgehandeld vanwege de klant. Als u bijvoorbeeld een verzoek probeert te verzenden om een ​​nieuwe gebruiker aan te maken, maar geen naam doorgeeft, stuurt de server een 400-statuscode om u te laten weten dat het naamveld vereist is.

### 401 - Unauthorized / Niet geautoriseerd
De 401-statuscode is een beetje verwarrend, want hoewel het woord ongeautoriseerd wordt gebruikt (wat betekent dat u geen toestemming hebt), betekent deze statuscode eigenlijk dat u **niet-geverifieerd** bent. Het belangrijkste verschil hier is dat niet-geverifieerd zijn betekent dat u niet bent ingelogd of hebt geprobeerd in te loggen met ongeldige inloggegevens. Dit kan gebeuren als u een ongeldige API-sleutel of helemaal geen API-sleutel doorgeeft bij het omgaan met API's.

### 403 - Forbidden / Verboden
Bij het omgaan met machtigingen moet u de 403-statuscode gebruiken. Deze status informeert de klant dat hij **geen toestemming** heeft om dit verzoek uit te voeren. Dit moet alleen worden geretourneerd als de client **geldige inloggegevens** (zoals een geldige API-sleutel) meestuurt, **maar niet over de machtigingen** beschikt om de actie uit te voeren. Als een basisgebruiker bijvoorbeeld toegang probeert te krijgen tot beheerdersgegevens, retourneert u een 403.

### 404 - Not Found / Niet gevonden
Dit is de meest voorkomende HTTP-statuscode die mensen kennen en het betekent alleen dat de bron niet kon worden gevonden. Dit kan bijvoorbeeld worden gebruikt als u toegang probeert te krijgen tot een URL die niet bestaat of als u probeert toegang te krijgen tot iets uit de database dat niet bestaat.

### 429 - Too Many Requests / Te veel verzoeken
De laatste belangrijke statuscode op het 400-niveau is 429. Deze code wordt gebruikt bij het omgaan met snelheidsbeperking. Als u gebruikers bijvoorbeeld slechts 30 keer per minuut toegang geeft tot uw API en iemand probeert er 31 keer toegang toe te krijgen, retourneert u een 429-statuscode om hen te laten weten dat ze moeten wachten met het verzenden van hun volgende verzoek. Dit moet ook een `Retry-After`-HTTP-header hebben met de hoeveelheid tijd die moet worden gewacht voordat verzoeken door de API worden geaccepteerd.

## Statuscode 500 
*Het laatste niveau van statuscodes is het 500-niveau en dit lijkt erg op het 400-niveau, maar 500-niveaucodes behandelen fouten op de server en niet op de client.*

### 500 - Internal Server Error / Interne serverfout
*Verreweg de meest voorkomende code op 500-niveau is 500. Deze code informeert de client alleen dat er een vorm van fout op de server was. Deze fout kan te wijten zijn aan van alles, van een fout in de code die leidt tot het crashen van het programma (zelfs als deze fout wordt veroorzaakt door slechte clientgegevens), tot problemen met de toegang tot de database. Dit moet worden gebruikt in elke situatie waarin de server een fout heeft en er geen specifieke code meer van toepassing is.*

### 503 - Service Unavailable / Service niet beschikbaar
*Er zijn niet veel andere statuscodes op 500-niveau die u zult gebruiken, maar 503 is enigszins gebruikelijk. Deze statuscode betekent alleen dat de server het verzoek niet kan verwerken. Dit wordt vaak gebruikt bij het uitvoeren van een vorm van gepland serveronderhoud waarbij de server niet werkt terwijl deze wordt bijgewerkt. Dit moet ook een `Retry-After`-HTTP-header bevatten met de geschatte tijd totdat de server weer up-to-date is.*