# htaccess

*htaccess staat voor **Hypertext Access**. Het is een configuratiebestand dat **enkel** wordt gebruikt op **APACHE** servers.*

*Door middel van **configuratiebestanden**, kunt u de basisinstellingen van de server configureren. Oftewel, een `.htaccess`-bestand kan gebruikt worden om de applicatie op een bepaalde manier te laten werken. Elke functie is eigenlijk gewoon een regel tekst, of code, die de server vertelt wat te doen. U kunt een functionaliteit toevoegen of wijzigen door de code toe te voegen in een .htaccess bestand.*

## Waar kan ik .htaccess voor gebruiken?

Er zijn veel toepassingsmogelijkheden met `.htaccess`, bijvoorbeeld:

- Bescherm uw website door middel van een wachtwoord.
- Maak een eigengemaakte foutmeldingspagina
- Redirect bezoekers naar een andere pagina.


## Het formaat van een .htaccess bestand
Het `.htaccess` bestand is speciaal, omdat het begint met een punt. Hierdoor is het niet altijd zichtbaar in de verkenner of Finder. Als u het bestand niet kunt vinden, kunt u de optie "Verborgen bestanden weergeven" aanzetten. In Visual Studio Code zie je het meestal wel staan in de bestandsverkenner.

## Opvangen van alle requests

Je moet weten dat iedere request, dat geen bestaande file of folder is in de public folder, binnenkomt op de index.php in de public folder. Dit staat immers zo beschreven in de `.htaccess`.

Bij de meeste php-frameworks wordt gebruik gemaakt van een `.htaccess`-file die je bij Laravel kan terugvinden onder de `/public` folder. Deze htaccess zorgt ervoor dat elke url (dat al dan niet bestaat) wordt opgevangen door de `index.php` binnen de public die folder.

Er dient dus een andere manier te zijn dan het filesystem om de correcte pagina in te laden. Hiervoor maken de meeste frameworks gebruik van een router. De configuratie van de routing voor de website kan je terugvinden onder `routes/web.php`.

## Voorbeeld (laravel)

Een voorbeeld van een standaard .htaccess bestand voor een Laravel-project.
Dit bestand kan je terugvinden onder `/public/.htaccess`.

``` 
<IfModule mod_rewrite.c>
    <IfModule mod_negotiation.c>
        Options -MultiViews -Indexes
    </IfModule>

    RewriteEngine On

    # Handle Authorization Header
    RewriteCond %{HTTP:Authorization} .
    RewriteRule .* - [E=HTTP_AUTHORIZATION:%{HTTP:Authorization}]

    # Redirect Trailing Slashes If Not A Folder...
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteCond %{REQUEST_URI} (.+)/$
    RewriteRule ^ %1 [L,R=301]

    # Handle Front Controller...
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteRule ^ index.php [L]
</IfModule>
```