# .htaccess

Je moet weten dat iedere request, dat geen bestaande file of folder is in de public folder, binnenkomt op de index.php in de public folder. Dit staat zo beschreven in de `.htaccess`.

Bij elk van deze frameworks wordt gebruik gemaakt van een `.htaccess` file die je bij Laravel kan terugvinden onder de `/public` folder. Deze htaccess zorgt ervoor dat elke url (dat niet bestaat) wordt opgevangen door de `index.php` van die folder.

Er dient dus een andere manier te zijn dan het filesystem om de correcte pagina in te laden. 

Hiervoor maakt Laravel gebruik van een Routing Class. De configuratie van de routing voor de website kan je terugvinden onder `routes/web.php`.
