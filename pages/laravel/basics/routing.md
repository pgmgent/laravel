
# Routing

Stel, willen deze url opvangen:  
[http://127.0.0.1:8000/hello](http://127.0.0.1:8000/hello)

Dan moeten we in de routes file een nieuwe route aanmaken. Deze route kan je terugvinden onder `/routes/web.php`. (laravel)

```php
Route::get('/hello', function () {
    echo 'Hello World';
});
```

We kunnen ook dynamische parameters toevoegen aan onze url. Maak onderstaande nieuwe routing aan en surf naar bijvoorbeeld [http://127.0.0.1:8000/hello/PGM](http://127.0.0.1:8000/hello/PGM). 

```
Route::get('/hello/{name}', function ($name) {
    echo 'Hello ' . $name;
});
```

Je kan ook een redirect doen van de ene naar een andere URL.

```
Route::redirect('/hello/world', '/hello', 301);
```

> **Let wel op dat deze route boven de route /hello/{name} staat!**

Zoals je kon zien stond er in het project reeds een route op de '/' van je website. Hierbij zie je dat Laravel de view functie aanroept en een waarde meegeeft.