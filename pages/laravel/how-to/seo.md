# SEO of Zoekmachine optimalisatie in Laravel

SEO (Search Engine Optimization) is een belangrijk aspect van webontwikkeling, inclusief bij het bouwen van applicaties met Laravel. Hier zijn enkele tips en best practices om de SEO van je Laravel-applicatie te verbeteren.

## robots.txt bestand en sitemap.xml
Zorg ervoor dat je een `robots.txt` bestand hebt in de root van je Laravel applicatie. Dit bestand geeft zoekmachines instructies over welke pagina's ze wel of niet mogen indexeren.

``` txt
User-agent: *
Disallow: /admin/
Disallow: /login
Disallow: /register
Allow: /
Sitemap: https://www.jouwdomein.be/sitemap
``` 


Daarnaast is het ook belangrijk om een `sitemap.xml` bestand te hebben dat alle belangrijke pagina's van je website bevat. Dit helpt zoekmachines om je site beter te crawlen en te indexeren.

Je kunt een sitemap genereren met behulp van pakketten zoals [spatie/laravel-sitemap](https://github.com/spatie/laravel-sitemap
).

```shell
ddev composer require spatie/laravel-sitemap
```

We zullen een route aanmaken om de sitemap te genereren en te tonen:

``` php
use Spatie\Sitemap\Sitemap;
use Spatie\Sitemap\Tags\Url;


Route::get('/sitemap', function () {
    Sitemap::create(config('app.url'))
        ->add(Url::create('/')
                ->setLastModificationDate(now())
                ->setChangeFrequency(Url::CHANGE_FREQUENCY_DAILY)
                ->setPriority(1.0)
            )
        ->writeToFile(public_path('sitemap.xml'));

    return response()->file(public_path('sitemap.xml'));
});
```

### Handmatig items toevoegen aan de sitemap

Je kunt dus meerdere URL's handmatig toevoegen aan de sitemap.

``` php
    ->add(Url::create('/about-us')
            ->setLastModificationDate(now())
            ->setChangeFrequency(Url::CHANGE_FREQUENCY_MONTHLY)
            ->setPriority(1.0)
        )
```

### Items vanuit een model toevoegen

Om alle items binnen een model in 1 keer toe te voegen aan de sitemap kan je die sitemapable maken.

``` php
use Spatie\Sitemap\Sitemapable;

class Post extends Model implements Sitemapable
{
    public function toSitemapTag(): Url
    {
        return Url::create("/posts/{$this->slug}")
            ->setLastModificationDate($this->updated_at)
            ->setChangeFrequency(Url::CHANGE_FREQUENCY_WEEKLY)
            ->setPriority(1.0);
    }
}

```

Voeg vervolgens in je sitemap generator toe aan de sitemap route `routes/web.php`:

``` php
Sitemap::create()
    ->addModel(Post::class)
    ->writeToFile(public_path('sitemap.xml'));
```

## Gebruik schone URL's
Zorg ervoor dat je URL's schoon en beschrijvend zijn. Vermijd het gebruik van onnodige parameters en zorg ervoor dat de URL's gemakkelijk te lezen zijn voor zowel gebruikers als zoekmachines. Voeg ook een slug toe aan je routes om dit te bereiken.

### Optie 1: Een slug kolom gebruiken

Je kunt dit doen door een `slug` veld toe te voegen aan je database tabel en deze te genereren op basis van de titel van het bericht of de pagina.

Let wel dat deze slug uniek moet zijn.

``` php
Route::get('/post/{slug}', [PostController::class, 'show'])->name('posts.show');
```

### Optie 2: Slug genereren op basis van 

Een andere optie is om toch nog de id te gebruiken maar ook een slug te genereren op basis van de titel:

``` php
Route::get('/post/{id}/{slug}', [PostController::class, 'show'])->name('posts.show');
``` 

In je model maak je dan een methode om de slug te genereren:

``` php
public function getSlugAttribute()
{
    return Str::slug($this->title);
}
```

## Meta Tags, og:tags en structured data

Gebruik meta tags om zoekmachines te voorzien van informatie over de inhoud van je pagina's. Dit omvat de titel, beschrijving en keywords. Je kunt ook Open Graph (og:) tags gebruiken om de weergave van je pagina's op sociale media te verbeteren.

Schema.org gestructureerde data kan ook worden toegevoegd om zoekmachines te helpen de inhoud van je pagina's beter te begrijpen.

Hiervoor zullen we de package [artesaos/seotools]() gebruiken.

Installeer de package via composer:

``` shell
ddev composer require artesaos/seotools
```

In /bootstrap/providers.php add: 
Artesaos\SEOTools\Providers\SEOToolsServiceProvider::class

```shell
ddev artisan vendor:publish --provider="Artesaos\SEOTools\Providers\SEOToolsServiceProvider"
```

Pas nu de aangemaakte /config/seotools.php aan zoals je wil.

Bovenaan je controller: `use Artesaos\SEOTools\Facades\SEOTools`

In een (elke) method van je controllers: 
```php
SEOTools::setTitle('Home');
SEOTools::setDescription('This is my page description');
SEOTools::opengraph()->setUrl('http://current.url.com');
SEOTools::opengraph()->addProperty('type', 'articles');
SEOTools::jsonLd()->addImage('https://codecasts.com.br/img/logo.jpg');
...
```

In de `<head>` van je layout 
```blade
{!! SEO::generate() !!}
```

Tip: Vergeet `<title>` en andere dubbele meta tags niet weg te doen