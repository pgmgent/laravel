# Mailhog

Mailhog is een tool die je kan gebruiken om mails te testen. Je kan mails versturen vanuit je applicatie en deze mails kan je bekijken in de Mailhog interface. Je kan ook mails versturen vanuit de Mailhog interface en deze mails kan je bekijken in je applicatie.

## Installatie

Om Mailhog te installeren kan je volgende commando uitvoeren in je CLI.

``` shell
brew install mailhog
```

## Configuratie (laravel)

Om Mailhog te configureren moet je de `config/mail.php` aanpassen. Pas de `mailers` array aan naar volgende code.

``` php
'mailers' => [
    'smtp' => [
        'transport' => 'smtp',
    ],
    'mailhog' => [
        'transport' => 'smtp',
        'host' => 'localhost',
        'port' => 1025,
    ],
],
```

Vervolgens moet je de `default` mailer aanpassen naar `mailhog`.

``` php
'default' => env('MAIL_MAILER', 'mailhog'),
```
