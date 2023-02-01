# Composer

*Composer is een afhankelijkheidsmanager gemaakt voor de programmeertaal PHP . Hiermee kunnen gebruikers eenvoudig externe afhankelijkheden en bibliotheken voor PHP-softwareontwikkeling beheren en integreren.*

*Dit maakt het softwareontwikkelingsproces veel gestroomlijnder en efficiënter. Met reeds vooraf ingestelde afhankelijkheden en bibliotheken hoeven gebruikers hun projecten niet langer helemaal opnieuw te beginnen.*

## Installeren op macOs of Linux (hosting)

De commando's om Composer te installeren op een shared hosting account, Linux (PC of server-based systeem) en macOS zijn hetzelfde.

Volg deze stappen om Composer op je systeem te installeren:

Download Composer van de officiële website met de volgende commando:

``` shell
php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
```

Indien je een macOS of Linux systeem gebruikt, zorg ervoor dat je PHP vooraf geïnstalleerd hebt. 


Verifieer de handtekening van de installer (SHA-384) om te controleren of het installatiebestand niet corrupt is:

``` shell
php -r "if (hash_file('sha384', 'composer-setup.php') === '55ce33d7678c5a611085589f1f3ddf8b3c52d662cd01d4ba75c0ee0459970c2200a51f492d557530c71c15d8dba01eae') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
``` 

De handtekening van de installer is de lange reeks karakters zoals weergegeven in het voorbeeldcommando hierboven (’55ce33d…’). Deze verandert elke keer dat er een nieuwe versie van Composer uitkomt. Haal daarom het laatste SHA-384-commando van de Composer downloadpagina.

Van zodra de handtekening is geverifieerd, kan je Composer lokaal of globaal installeren. Een lokale installatie betekent dat de afhankelijkheidsmanager in je huidige map wordt opgeslagen, en je moet het pad opgeven voordat je de bijbehorende commando’s uitvoert.
Tegelijkertijd laat de globale installatie je toe om Composer van overal op je systeem uit te voeren door het op te slaan in de `/usr/local/bin` map. Echter, de globale installatiemethode werkt niet op shared en cloud hosting.


### Lokale installatie

``` shell
php composer-setup.php
```

### Globale installatie

``` shell
php composer-setup.php --install-dir=/usr/local/bin --filename=composer
```

Je zou nu de volgende resultaten moeten krijgen:

``` shell
All settings correct for using Composer
Downloading…

Composer (version 2.4.2) successfully installed to: /usr/local/bin/composer
Use it: php /usr/local/bin/composer
```

Nu de installatie is voltooid, verwijder je de installer:

``` shell
php -r "unlink('composer-setup.php');"
``` 

Tot slot, test je de Composer installatie:

``` shell
composer
```

De CLI zal de volgende output teruggeven:

``` shell
   ______
  / ____/___ ____ ___ ____ ____ ________ _____
 / / / __ / __ __ / __ / __ / ___/ _ / ___/
/ /___/ /_/ / / / / / / /_/ / /_/ (__ ) __/ /
____/____/_/ /_/ /_/ .___/____/____/___/_/
                  /_/
Composer version 2.4.2 2022-09-14 16:11:15
```

## Installeren op Windows

De gemakkelijkste manier om Composer op Windows te installeren is door de Composer-Setup.exe uit te voeren. Deze installer zal automatisch de juiste PHP-versie voor je systeem downloaden en installeren.

Download de Composer-Setup.exe van de officiële website en voer het uit. De installer zal je vragen om de PHP-versie te selecteren die je wilt gebruiken. Kies de PHP-versie die je op je systeem hebt geïnstalleerd. Als je niet zeker bent welke PHP-versie je hebt, kies dan de laatste versie.

Link naar de Composer-Setup.exe: <https://getcomposer.org/Composer-Setup.exe>