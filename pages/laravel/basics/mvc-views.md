# Views

Deze view kan je terugvinden onder `/resources/views`, als je dus `view('welcome')` aanroept zal de `welcome.blade.php` uitgevoerd worden.

Hierbij zie je dat Laravel standaard gebruikt maakt van de Blade template engine. Maar kan je ook verder PHP gebruiken want het is en blijft een PHP-pagina.

Maak een view aan voor de route hello en koppel beide reeds aangemaakte routes aan deze view.

Maak de view dynamisch zodat de naam op het scherm wordt getoond. Dit kan door de parameter mee te geven met de view functie:

```php
Route::get('/hello/{name}', function ($name) {
    return view('hello', ['name' => $name]);
});
```
In de template kan je dan de naam printen via php of nog eenvoudiger, via blade.

```html
<h1>Hello via php: <?= $name; ?></h1>
<h1>Hello via blade:  {{ $name }}</h1>
```

