# Hoe werkt het

Om Composer in uw project te gaan gebruiken, hebt u alleen een `composer.json` bestand nodig. Dit bestand beschrijft de dependencies (**dependencies**) van uw project en kan ook andere metadata bevatten. Het zou normaal gesproken in de bovenste map (**root folder**) van uw project moeten staan.

## Introductie

### Require-key

Het eerste dat u opgeeft, is `require`. U vertelt Composer welke dependencies jouw project nodig heeft. Dit is een lijst van pakketten en hun versies. U kunt versies specifiëren met behulp van een versieconstraint, zoals `1.0` of `^2.1`. Voor meer informatie over het schrijven van versieconstraints, zie [Versies en constraints](https://getcomposer.org/doc/articles/versions.md).

``` json
{
    "require": {
        "monolog/monolog": "2.0.*"
    }
}
```

Je ziet hierboven dat het `require`-object een lijst van pakketten bevat (zoals monolog/monolog) en hun versiebeperkingen (**version constraints**) (zoals 2.0.*.)

Composer gebruikt deze informatie om te zoeken naar de juiste set bestanden in pakket "repositories" die u registreert met behulp van de repositories sleutel, of in Packagist.org , de standaard pakketrepository. Aangezien er in het bovenstaande voorbeeld geen andere repository in het `composer.json`-bestand is geregistreerd, wordt aangenomen dat het `monolog/monolog` pakket is geregistreerd op Packagist.org. (Lees meer over Packagist en over repositories ).


### Pakket namen

Pakketnamen zijn altijd in het formaat `vendor/package` . De vendornaam is de naam van de persoon of organisatie die het pakket beheert. De naam van het pakket is de naam van het pakket zelf. De vendornaam en de naam van het pakket zijn hoofdlettergevoelig.

Pakketnamen moeten uniek zijn. Dit betekent dat er geen twee pakketten mogen zijn met dezelfde vendornaam en naam van het pakket. Dit is nodig om te voorkomen dat twee pakketten dezelfde bestanden overschrijven, bijvoorbeeld `igorw/json` en `seldaek/json`.

Het is echter toegestaan om twee pakketten te hebben met dezelfde vendornaam en naam van het pakket, maar met verschillende versies, bijvoorbeeld `vendor/package:1.0` en `vendor/package:2.0`.

In ons voorbeeld vragen we het Monolog-pakket aan met de versiebeperking `2.0.*`. Dit betekent **elke versie in de `2.0`-ontwikkelingstak**, of elke versie die groter is dan of gelijk is aan 2.0 en kleiner dan 2.1 **( >=2.0 <2.1)**.

## Dependencies installeren

Om de gedefinieerde dependencies voor uw project in eerste instantie te installeren, moet u de `update`-opdracht uitvoeren.

``` shell
composer update
```

Dit zorgt ervoor dat Composer twee dingen doet:

1. Het lost alle dependencies op die in uw `composer.json`-bestand worden vermeld en schrijft alle pakketten en hun exacte versies naar het `composer.lock`-bestand, waardoor het project wordt vergrendeld voor die specifieke versies. U moet het bestand `composer.lock` ook mee comitten, zodat alle mensen die aan het project werken, vastzitten aan dezelfde versies van dependencies (meer hieronder). Dit is de belangrijkste rol van het update-commando.
2. Vervolgens voert het impliciet de `install`-opdracht uit. Hiermee worden de bestanden van de dependencies gedownload naar de vendormap in uw project. (De vendor directory is de conventionele locatie voor alle code van derden in een project). In ons voorbeeld van hierboven zou u eindigen met de Monolog-bronbestanden in `vendor/monolog/monolog/`. Omdat Monolog afhankelijk is van `psr/log`, kunnen de bestanden van dat pakket ook in vendor/.

::: icon-tip Tip
Tip: Als je git voor je project gebruikt, wil je waarschijnlijk `vendor` in de `.gitignore`. U wilt echt niet al die code van derden toevoegen aan uw repository met versies.
::: 

### composer.lock in versiebeheer leggen
Het vastleggen van dit bestand voor versiebeheer is belangrijk omdat het ervoor zorgt dat iedereen die het project opzet exact dezelfde versies van de dependencies gebruikt die u gebruikt. Uw CI-server, productiemachines, andere ontwikkelaars in uw team, alles en iedereen draait op dezelfde dependencies, wat de kans op bugs beperkt die slechts enkele delen van de implementaties beïnvloeden. Zelfs als u alleen ontwikkelt, kunt u er na zes maanden bij het opnieuw installeren van het project op vertrouwen dat de geïnstalleerde dependencies nog steeds werken, zelfs als uw dependencies sindsdien veel nieuwe versies hebben uitgebracht. (Zie opmerking hieronder over het gebruik van de updateopdracht.)

### Installeren vanaf composer.lock
Als er al een `composer.lock`-bestand in de projectmap staat, betekent dit dat u de updateopdracht eerder hebt uitgevoerd, of dat iemand anders in het project de update opdracht heeft uitgevoerd en het `composer.lock`-bestand heeft vastgelegd in het project (wat goed is).

Hoe dan ook, het uitvoeren van `composer install` wanneer een `composer.lock`-bestand aanwezig is, lost en installeert alle dependencies die u hebt vermeld in `composer.json`, maar Composer gebruikt de exacte versies die worden vermeld in `composer.lock`-om ervoor te zorgen dat de pakketversies consistent zijn voor iedereen die aan uw project werkt. Het resultaat is dat u beschikt over alle dependencies die door uw `composer.json`-bestand worden gevraagd, maar dat zijn mogelijk niet allemaal de allerlaatste beschikbare versies (sommige dependencies die in het `composer.lock`-bestand worden vermeld, hebben mogelijk nieuwere versies uitgebracht sinds het bestand is gemaakt). Dit is inherent aan het ontwerp, het zorgt ervoor dat uw project niet kapot gaat vanwege onverwachte veranderingen in dependencies.

Dus na het ophalen van nieuwe wijzigingen uit uw VCS-repository, wordt het aanbevolen om een `composer install` uit te voeren installom ervoor te zorgen dat de leveranciersdirectory synchroon loopt met uw `composer.lock`-bestand.

## Dependencies updaten

Als u wilt upgraden naar de nieuwste versies van uw dependencies, kunt u de `update`-opdracht uitvoeren. Dit zal alle dependencies upgraden naar de nieuwste versies die voldoen aan de versiebeperkingen die u hebt opgegeven in `composer.json`.

``` shell
composer update
```

::: icon-tip Tip
Tip: Als u wilt upgraden naar de nieuwste versies van alle dependencies, inclusief de dependencies van uw dependencies, voert u `composer update` uit met de `--with-all-dependencies`-optie.
:::

Als u slechts één afhankelijkheid wilt installeren, upgraden of verwijderen, kunt u deze expliciet als argument vermelden:

``` shell
php composer.phar update monolog/monolog
``` 

## Packagist

Packagist.org is de belangrijkste Composer-repository. Een Composer-repository is in feite een pakketbron: een plaats waar u pakketten kunt ophalen. Packagist wil de centrale repository zijn die iedereen gebruikt. Dit betekent dat u elk pakket kunt vinden via `require` dat daar beschikbaar is, zonder verder te specificeren waar Composer het pakket moet zoeken.

Als u naar de website Packagist.org gaat, kunt u zoeken naar pakketten.

Elk open source-project dat Composer gebruikt, wordt aanbevolen om hun pakketten op Packagist te publiceren. Een bibliotheek hoeft niet op Packagist te staan ​​om door Composer te worden gebruikt, maar maakt ontdekking en acceptatie door andere ontwikkelaars sneller mogelijk.


## Platform packages

Composer heeft platformpakketten, dit zijn virtuele pakketten voor dingen die op het systeem zijn geïnstalleerd, maar die eigenlijk niet door Composer kunnen worden geïnstalleerd. Dit omvat PHP zelf, PHP-extensies en enkele systeembibliotheken.

- **php**: vertegenwoordigt de PHP-versie van de gebruiker, waardoor u beperkingen kunt toepassen, bijvoorbeeld ^8.1. 
- **hhvm**: vertegenwoordigt de versie van de HHVM-runtime en stelt u in staat een beperking toe te passen, bijvoorbeeld ^2.3.
- **ext-`<name>`**: vertegenwoordigt een PHP-extensie, bijvoorbeeld ext-gd.
- **lib-`<name>`**: vertegenwoordigt een systeembib, bijvoorbeeld lib-curl. De volgende zijn beschikbaar: curl, iconv, icu, libxml, openssl, pcre, uuid, xsl.


U kunt `show --platform` aanspreken om een ​​lijst te krijgen van uw lokaal beschikbare platformpakketten.

## Autoloading

Voor bibliotheken die `autoload`-informatie specificeren, genereert Composer een `vendor/autoload.php`-bestand. U kunt dit bestand opnemen en zonder extra werk de klassen gaan gebruiken die deze bibliotheken bieden:

``` php
require __DIR__ . '/vendor/autoload.php';

$log = new Monolog\Logger('name');
$log->pushHandler(new Monolog\Handler\StreamHandler('app.log', Monolog\Logger::WARNING));
$log->warning('Foo');
```

### Eigen code

U kunt zelfs uw eigen code toevoegen aan de autoloader door een `autoload`-veld toe te voegen aan composer.json.

``` json
{
    "autoload": {
        "psr-4": {"Acme\\": "src/"}
    }
}
```

Composer registreert een PSR-4 autoloader voor de `Acme`-namespace.

U definieert een toewijzing van namespaces naar mappen. De `src`-map bevindt zich in de hoofdmap van uw project, op hetzelfde niveau als de vendormap. 

Een voorbeeld: Het bestand `src/Foo.php` zou de klasse `Acme\Foo` definiëren.

**Nadat u het autoloadveld hebt toegevoegd, moet u deze opdracht opnieuw uitvoeren:**

``` shell
composer dump-autoload
```
Met deze opdracht wordt het `vendor/autoload.php`-bestand opnieuw gegenereerd.

Als u dat bestand opneemt, wordt ook de autoloader-instantie geretourneerd, dus u kunt de geretourneerde waarde van de include-aanroep in een variabele opslaan en meer namespaces toevoegen. Dit kan bijvoorbeeld handig zijn voor het automatisch laden van klassen in een testsuite.

``` php
$loader = require __DIR__ . '/vendor/autoload.php';
$loader->addPsr4('Acme\\Test\\', __DIR__);
```
