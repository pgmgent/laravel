## Mailtrap

Mailtrap is een tool die je kan gebruiken om mails te testen. Je kan mails versturen vanuit je applicatie en deze mails kan je bekijken in de Mailtrap interface. Je kan ook mails versturen vanuit de Mailtrap interface en deze mails kan je bekijken in je applicatie.

### Installatie

Om Mailtrap te installeren kan je volgende commando uitvoeren in je CLI.

``` shell
brew install mailtrap
```

### Configuratie (laravel)

Om Mailtrap te configureren moet je de `config/mail.php` aanpassen. Pas de `mailers` array aan naar volgende code.

``` php
'mailers' => [
    'smtp' => [
        'transport' => 'smtp',
    ],
    'mailtrap' => [
        'transport' => 'smtp',
        'host' => 'smtp.mailtrap.io',
        'port' => 2525,
        'username' => env('MAIL_USERNAME'),
        'password' => env('MAIL_PASSWORD'),
        'encryption' => 'tls',
    ],
],
```

Vervolgens moet je de `default` mailer aanpassen naar `mailtrap`.

``` php
'default' => env('MAIL_MAILER', 'mailtrap'),
```

Vervolgens moet je de `MAIL_USERNAME` en `MAIL_PASSWORD` variabelen toevoegen aan je `.env` file.

``` shell
MAIL_USERNAME=your_mailtrap_username
MAIL_PASSWORD=your_mailtrap_password
```