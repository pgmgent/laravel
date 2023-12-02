# Verbinden met een database

In deze sectie gaan we kijken hoe we een database kunnen verbinden met Laravel. 

## Configuratie via .env

Een `.env`-file is een bestand waarin je de configuratie van je applicatie kan opslaan. Het voordeel hiervan is dat je deze configuratie niet in je code hoeft te zetten.
**Commit een `.env`-file nooit naar je repository.** 

Je kan een `.env`-file aanmaken door een kopie te maken van het bestand `.env.example` en deze te hernoemen naar `.env`.

Laravel maakt gebruik van de `.env` bestand om de database configuratie op te slaan. 
In dit bestand kan je de database configuratie aanpassen. De standaard configuratie ziet er als volgt uit:

``` env
DB_CONNECTION=mysql
DB_HOST=
DB_PORT=
DB_DATABASE=
DB_USERNAME=
DB_PASSWORD=
```

Verander deze naar jouw eigen configuratie van je sql server.

Bij een ddev is dit standaard:

``` env
DB_CONNECTION=mysql
DB_HOST=db
DB_PORT=3306
DB_DATABASE=db
DB_USERNAME=db
DB_PASSWORD=db
```
