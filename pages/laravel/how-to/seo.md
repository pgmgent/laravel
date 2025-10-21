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

### Handmatig pagina's toevoegen aan de sitemap

Je kunt dus meerdere URL's handmatig toevoegen aan de sitemap.

``` php
    ->add(Url::create('/about-us')
            ->setLastModificationDate(now())
            ->setChangeFrequency(Url::CHANGE_FREQUENCY_MONTHLY)
            ->setPriority(1.0)
        )
```

### Alle items van een model toevoegen aan de sitemap

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
    ->add(Post::all())
    ->writeToFile(public_path('sitemap.xml'));
```

### Tip voor het dynamisch genereren van de URL's

In plaats van de url handmatig (`Url::create("/posts/{$this->slug}")`) op te bouwen kunnen we ook gebruik maken van de route helper.

``` php
    return Url::create(route('posts.show', $this->slug))
```
Let wel op dat je de route ook echt zo hebt gedefinieerd in je `routes/web.php`.

```php
Route::get('/posts/{slug}', [PostController::class, 'show'])->name('posts.show');
```

## Gebruik leesbare URL's
Zorg ervoor dat je URL's leesbaar en beschrijvend zijn. Vermijd het gebruik van onnodige parameters en zorg ervoor dat de URL's gemakkelijk te lezen zijn voor zowel gebruikers als zoekmachines. Voeg een slug toe aan je routes om dit te bereiken.

### Optie 1: Een slug kolom gebruiken

Je kunt dit doen door een extra `slug` veld toe te voegen aan je database tabel en deze te genereren op basis van de titel van het bericht of de pagina. (Maak hiervoor een database migratie aan om de slug kolom toe te voegen).

Let wel op dat de slug uniek moet zijn binnen alle items van een model. Je kan namelijk niet twee keer de slug "mijn-eerste-post" hebben.

``` php
Route::get('/post/{slug}', [PostController::class, 'show'])->name('posts.show');
```

### Optie 2: Slug genereren op basis van 

Een andere optie is om toch nog de id te gebruiken maar ook een slug te genereren op basis van de titel. Het voordeel is dat je dan geen extra unieke slug kolom nodig hebt in je database.

``` php
Route::get('/post/{id}/{slug}', [PostController::class, 'show'])->name('posts.show');
``` 

In je model maak je dan een extra methode aan om de slug te genereren op basis van je title (of een ander veld).

``` php
public function getSlugAttribute()
{
    return Str::slug($this->title);
}
```

## Meta Tags, og:tags en structured data

Gebruik meta tags om zoekmachines te voorzien van informatie over de inhoud van je pagina's. Dit omvat de titel, beschrijving en keywords. Je kunt ook Open Graph (og:) tags gebruiken om de weergave van je pagina's op sociale media te verbeteren.

Schema.org gestructureerde data kan ook worden toegevoegd om zoekmachines te helpen de inhoud van je pagina's beter te begrijpen.

Hiervoor zullen we de package [artesaos/seotools](https://github.com/artesaos/seotools) gebruiken.

Installeer de package via composer:

``` shell
ddev composer require artesaos/seotools
```

In `/bootstrap/providers.php` voeg je de service provider toe `Artesaos\SEOTools\Providers\SEOToolsServiceProvider::class` via artisan:

```shell
ddev artisan vendor:publish --provider="Artesaos\SEOTools\Providers\SEOToolsServiceProvider"
```

Pas nu de aangemaakte `/config/seotools.php` aan zoals je wil.

Om SEO tags toe te voegen aan je pagina's, gebruik je de SEOTools facade. Deze moet je toevoegen per method in je controllers.
Bovenaan je controller voeg je alvast de facade toe: `use Artesaos\SEOTools\Facades\SEOTools`

Om dan de SEO tags in te stellen per method. Hieronder zie je voorbeeldcode die toegevoegd moet worden aan de `index` method van een `HomeController`.

```php
SEOTools::setTitle('Home');
SEOTools::setDescription('This is my page description');
SEOTools::opengraph()->setUrl('http://current.url.com');
SEOTools::opengraph()->addProperty('type', 'articles');
SEOTools::jsonLd()->addImage('https://codecasts.com.br/img/logo.jpg');
...
```
Bekijk de [documentatie](https://github.com/artesaos/seotools) voor alle mogelijkheden.

Om de uiteindelijke SEO tags in je HTML te tonen, voeg je de volgende code toe aan je layout bestand.

Hierin plaats je onderstaande code in de `<head>` van de layout.

```blade
{!! SEO::generate() !!}
```

Je kan ze eventueel ook per type genereren indien je de volgorde zelf wil bepalen:

```blade
{!! SEO::generateTitle() !!}
{!! SEO::generateMeta() !!}
{!! SEO::generateOpenGraph() !!}
{!! SEO::generateJsonLd() !!}
```

> Tip: Vergeet `<title>` en andere dubbele meta tags niet weg te doen