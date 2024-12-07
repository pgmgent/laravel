# Afbeeldingen manipuleren

Omdat we niet steeds de hoge resolutie afbeelding willen gebruiken omdat dit onze applicatie te zwaar maakt moeten we ervoor zorgen dat afbeeldingen geschaald worden naar een kleinere versie, eventueel ook met een betere compressie, zonder al te veel kwaliteitsverlies. De beste compressie kunnen we hedendaags bereiken met het webp formaat.

De maximale breedte/hoogte is natuurlijk verschillend per website en kan ook nog eens verschillend zijn per pagina. En dan moeten we misschien ook nog rekening houden met retina schermen. Je zal dus meerdere versies nodig hebben per afbeelding.


## Spatie/image

Om afbeeldingen te manipuleren gebruiken we de composer package van Spatie/image.

```
ddev composer require spatie/image
```

Daarna kan je verschillende manipulaties uitvoeren zoals schalen, versnijden, verscherpen, roteren, kleur veranderen en nog veel meer. Alle mogelijkheden kan je terugvinden op [https://spatie.be/docs/image/v3/introduction]

## Voorbeeld

```php
use Spatie\Image\Image;

Image::load('voorbeeld.jpg')
    ->resize(800, 0);
    ->greyscale()
    ->save('voorbeeld_gray_w800.webp');
```

## Automatische resizer

Hieronder zie je een voorbeeld code van een controller die afbeeldingen kan schalen en deze als response terug stuurt. Om het geheel performant te maken wordt de gegenereerde afbeelding opgeslagen in een cache folder.

```php
<?php 
namespace App\Http\Controllers;

use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Request;

use Spatie\Image\Image;

class ImageController extends Controller
{
    public function resize($file, $width, $height = 0, $defaultExtention = 'webp') 
    {
        $storage_path = '../storage/app/public/';
        
        //Getting filename and extention
        $name = pathinfo($file, PATHINFO_FILENAME);
        $extention = $defaultExtention ?? pathinfo($file, PATHINFO_EXTENSION);

        //Path to the resized image
        $resized_filename = $name . '-' . $width . 'x' . $height . '.' . $extention;
        $resized_path = public_path($storage_path . 'cache/' . $resized_filename);

        //If the resized image does not exist, create it
        if( ! Storage::disk('public')->exists($resized_filename)) {
            $filepath = public_path($storage_path . $file);

            $image = Image::load($filepath)->resize($width, $height);
            $image->save($resized_path);

            return response()->file($resized_path);
        }

        //return the file as an image in the response
        return response()->file($resized_path);

    }
}

```
Maak een route aan om deze method te kunnen aanpspreken.

```php
Route::get('/image_resize/{file}/{width}/{height?}', [ImageController::class, 'resize']);
```

Je kan deze route nu gebruiken om jouw afbeelding op te halen en weer te geven in een image element.

```html
<!--Hier wordt dan de image van een post geplaatst met een breedte van 400px -->
<img src="/image_resize/{{ $post->image }}/400">
```



