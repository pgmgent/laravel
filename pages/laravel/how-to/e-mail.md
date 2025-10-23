# Het versturen van e-mail

Er zijn 2 soorten e-mails die je kan versturen vanuit je applicatie. Transactionele e-mails en marketing e-mails. Transactionele e-mails zijn e-mails die verstuurd worden naar aanleiding van een actie van de gebruiker. Bijvoorbeeld een registratie bevestiging of een wachtwoord reset. Marketing e-mails zijn e-mails die verstuurd worden naar een groep gebruikers met als doel hen te informeren over nieuwe producten of diensten.

## Configuratie

Om e-mails te kunnen versturen moet je eerst de mailer configureren. Dit doe je in het `.env` bestand van je Laravel applicatie. 

### Lokaal testen met Mailpit
``` env
MAIL_MAILER=smtp
MAIL_HOST='127.0.0.1'
MAIL_PORT=1025
MAIL_USERNAME=null
MAIL_PASSWORD=null
MAIL_ENCRYPTION=null
MAIL_FROM_ADDRESS="info@mywebsite.be"
MAIL_FROM_NAME="${APP_NAME}"
```
### Productie omgeving

In productie zal dit afhankelijk zijn van de mailer die je gebruikt. Vaak zal je een SMTP server gebruiken van een derde partij zoals Sendinblue, Mailgun, Amazon SES, etc. Hieronder een voorbeeld van een SMTP configuratie.

## Transactionele e-mails versturen

Om een transactionele e-mail te versturen moeten we eerst een Mailable class aanmaken. Dit doen we met het volgende artisan commando.

``` shell
ddev artisan make:mail WelcomeMail
```

Dit zal een nieuwe class aanmaken in de `app/Mail` folder. Open deze class en pas deze aan naar jouw wensen. Hieronder een voorbeeld van een eenvoudige e-mail. Hierin kan je alvast de subject en de view instellen die gebruikt zal worden voor de e-mail.

``` php 
namespace App\Mail;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class WelcomeMail extends Mailable
{
    use Queueable, SerializesModels;

    public function build()
    {
        return $this->subject('Welcome to our website')
                    ->view('emails.welcome');
    }
}
```

Vervolgens moet je de view aanmaken die gebruikt zal worden voor de e-mail. Maak een nieuwe blade file aan in de `resources/views/emails` folder met de naam `welcome.blade.php`. Hieronder een eenvoudig voorbeeld van een e-mail template.

```html
<!DOCTYPE html>
<html></html>
<head>
    <title>Welcome to our website</title>
</head>
<body>
    <h1>Welcome to our website</h1>
    <p>Thank you for registering on our website.</p>
</body>
</html>
```

Om de e-mail nu te versturen kan je de volgende code gebruiken in je controller of waar je de e-mail wil versturen.

```php
use App\Mail\WelcomeMail;
use Illuminate\Support\Facades\Mail;    

Mail::to($newUser->email)->send(new WelcomeMail());
```     
Dit zal de e-mail versturen naar het e-mailadres van de nieuwe gebruiker.
Lokaal kan je de e-mail bekijken in de Mailpit interface. In productie zal de e-mail verstuurd worden via de geconfigureerde mailer.

Wil je ook data in deze e-mail gebruiken? Dan kan je die ook meegeven via de Constructor van de Mailable class.

``` php 
class WelcomeMail extends Mailable
{
    use Queueable, SerializesModels;
    public $user;
    public function __construct($user)
    {
        $this->user = $user;
    }   
    public function build()
    {
        return $this->subject('Welcome to our website')
                    ->view('emails.welcome');
    }
}
```

Vervolgens kan je deze data gebruiken in de view.

```html
...
<body>
    <h1>Welcome to our website, {{ $user->name }}</h1>
    <p>Thank you for registering on our website.</p>
</body>
...
```

En bij het versturen van de e-mail geef je de user mee.

```php
Mail::to($newUser->email)->send(new WelcomeMail($newUser));
```

## Marketing e-mails versturen

Voor het versturen van marketing e-mails is het aan te raden om een derde partij te gebruiken zoals Mailchimp, Sendinblue, etc. Deze partijen bieden vaak een API aan waarmee je e-mails kan versturen naar een grote groep gebruikers. Daarnaast bieden ze ook vaak tools aan om nieuwsbrieven te maken en te beheren.

Indien je toch wil versturen vanuit je Laravel applicatie naar een grote groep gebruikers, kan je gebruik maken van queues om het versturen van e-mails te verwerken op de achtergrond. Dit voorkomt dat je applicatie traag wordt bij het versturen van een grote hoeveelheid e-mails.

``` php
use App\Mail\NewsletterMail;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Queue;
use App\Models\User;
$users = User::all();
foreach ($users as $user) {
    Mail::to($user->email)->queue(new NewsletterMail($user));
}
```

### Cron job instellen

Een cron job kan je gebruiken om periodiek taken uit te voeren in je Laravel applicatie. Bijvoorbeeld het versturen van marketing e-mails op vaste tijdstippen (Elke week op donderdag om 13u).

Om een cron job in te stellen, moet je eerst een command aanmaken met het volgende artisan commando.

``` shell
ddev artisan make:command SendNewsletter
```

Dit zal een nieuwe class aanmaken in de `app/Console/Commands` folder. Open deze class en pas deze aan naar jouw wensen. Hieronder een voorbeeld van een command die marketing e-mails verstuurt.

``` php
namespace App\Console\Commands;
use Illuminate\Console\Command;
use App\Mail\NewsletterMail;
use Illuminate\Support\Facades\Mail;
use App\Models\User;

class SendNewsletter extends Command
{
    protected $signature = 'newsletter:send';
    protected $description = 'Send marketing newsletter to all users';

    public function handle()
    {
        $users = User::all();
        foreach ($users as $user) {
            Mail::to($user->email)->queue(new NewsletterMail($user));
        }
        $this->info('Newsletter sent to all users!');
    }
}
```

Vervolgens moet je deze command registreren in de `app/Console/Kernel.php` file. Voeg de volgende code toe aan de `schedule` methode.

``` php
protected function schedule(Schedule $schedule)
{
    $schedule->command('newsletter:send')->weeklyOn(4, '13:00');
}
```

Dit zal ervoor zorgen dat de `SendNewsletter` command elke week op donderdag om 13u uitgevoerd wordt.
Tot slot moet je ervoor zorgen dat de Laravel scheduler elke minuut uitgevoerd wordt. Dit kan je doen door een cron job toe te voegen aan je server met het volgende commando.

Lokaal kan je dit simuleren door het volgende artisan commando uit te voeren.

``` shell
ddev artisan schedule:run
```

Of door een cron job toe te voegen aan je server met het volgende commando.

``` shell
* * * * * cd /path-to-your-project && php artisan schedule:run >> /dev/null 2>&1
``` 

Wil je lokaal een cron instellen dan kan je een eigen shell script maak dan een bestand `run-scheduler.sh` met volgende inhoud.

``` shell
#!/bin/sh
while [ true ]
do
    echo "$(date) Running Laravel scheduler..." >> storage/logs/cron.log 2>&1
    ddev artisan schedule:run >> storage/logs/cron.log 2>&1
    sleep 60
done
```

Zoals je kan zien wordt de scheduler hier elke minuut uitgevoerd en worden de logs weggeschreven naar `storage/logs/cron.log`. Maak het script uitvoerbaar met `chmod +x run-scheduler.sh` en voer het uit met `./run-scheduler.sh`.    

