# (development) web servers

## PHP development server

De PHP development server is een simpele webserver die je kan gebruiken om je applicatie te testen. Deze server is niet geschikt voor productie. De PHP development server kan je starten door volgende commando uit te voeren in je CLI.

``` shell
php -S localhost:8000
```

De PHP development server zal altijd de `index.php` file in de root folder van je project gebruiken, tenzij je de server start vanuit de public folder. Je kan de server starten vanuit de **`public` / `web`** folder door volgende commando uit te voeren in je CLI.

``` shell
php -S localhost:8000 -t public
```

## PHP Artisan server (Laravel)

De PHP Artisan server is een simpele webserver die je kan gebruiken om je applicatie te testen. Die is heel vergelijkbaar met de ingebouwde php development server, maar ondersteunt ook pretty urls dankzij een extra configuratie. Deze server is niet geschikt voor productie. De PHP Artisan server kan je starten door volgende commando uit te voeren in je CLI.

``` shell
php artisan serve
```


## Apache

*Deze type server heb je **lokaal** normaal gesproken niet nodig voor het vak Web Development 2*

Een apache server is een webserver die je kan gebruiken om je applicatie te hosten. Je kan een apache server installeren op je computer of op een server. Om een apache server te installeren op je computer kan je volgende commando uitvoeren in je CLI.

### Installatie op een windows

Om een apache server te installeren op een windows computer kan je volgende commando uitvoeren in je CLI.
(we gebruiken de (chocolatey)[https://chocolatey.org/] package manager om apache te installeren))
Meer info: (GH Repo)[https://github.com/chocolatey/choco]


``` shell
choco install apache
```

Om de apache server te starten kan je volgende commando uitvoeren in je CLI.

``` shell
net start apache
```

Om de apache server te stoppen kan je volgende commando uitvoeren in je CLI.

``` shell
net stop apache
```

Om de apache server te herstarten kan je volgende commando uitvoeren in je CLI.

``` shell
net stop apache
net start apache
```

### Installatie op een mac

Om een apache server te installeren op een mac kan je volgende commando uitvoeren in je CLI.

``` shell
brew install httpd
```

Om de apache server te starten kan je volgende commando uitvoeren in je CLI.

``` shell
brew services start httpd
```

Om de apache server te stoppen kan je volgende commando uitvoeren in je CLI.

``` shell
brew services stop httpd
```

Om de apache server te herstarten kan je volgende commando uitvoeren in je CLI.
``` shell
brew services restart httpd
```

## Nginx

*Deze type server heb je **lokaal** normaal gesproken niet nodig voor het vak Web Development 2*

Een nginx server is een webserver die je kan gebruiken om je applicatie te hosten. Je kan een nginx server installeren op je computer of op een server. Om een nginx server te installeren op je computer kan je volgende commando uitvoeren in je CLI.

### Installatie op een windows

Om een nginx server te installeren op een windows computer kan je volgende commando uitvoeren in je CLI.

``` shell
choco install nginx
```

Om de nginx server te starten kan je volgende commando uitvoeren in je CLI.

``` shell
net start nginx
```

Om de nginx server te stoppen kan je volgende commando uitvoeren in je CLI.

``` shell
net stop nginx
```

Om de nginx server te herstarten kan je volgende commando uitvoeren in je CLI.

``` shell
net stop nginx
net start nginx
```

### Installatie op een linux / macOS

Om een nginx server te installeren op een mac kan je volgende commando uitvoeren in je CLI.

``` shell
brew install nginx
```

Om de nginx server te starten kan je volgende commando uitvoeren in je CLI.

``` shell
brew services start nginx
```

Om de nginx server te stoppen kan je volgende commando uitvoeren in je CLI.

``` shell
brew services stop nginx
```

#### Nginx configuratie

Om de nginx server te configureren kan je de configuratie file aanpassen. De configuratie file kan je vinden in de volgende folder.

``` shell
/etc/nginx/nginx.conf
```

Om de configuratie file te openen kan je volgende commando uitvoeren in je CLI.

``` shell
sudo nano /etc/nginx/nginx.conf
```

Om de configuratie file te bewaren kan je volgende commando uitvoeren in je CLI.

``` shell
CTRL + X
Y
ENTER
```


