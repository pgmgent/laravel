# MVC - Controller

Je zou, in theorie, alle functionaliteit kunnen schrijven in de Routing config maar dat is niet de bedoeling. Dat is het werk van een Controller binnen een MVC framework.

Maak een nieuwe controller aan `CourseController.php` in de folder `/app/Http/Controllers`. Hierin hebben we ook methods nodig die aangeroepen kunnen worden vanuit de Routing. Plaats onderstaande code in de `CourseController.php`.

```php
<?php
namespace App\Http\Controllers;

class CourseController extends Controller
{
    public function index() {
        return view('course.list');
    }

    public function detail($id) {
        return view('course.detail', [
            'course_id' => $id
        ]);
    }
}
```

In de **routing** moeten we nu de CourseController en bijhorende method aanroepen in plaats van rechtstreeks de view. 

```php
Route::get('/courses', [CourseController::class, 'index']);
Route::get('/course/{id}', [CourseController::class, 'detail']); 
```

**Let wel op dat je ook de namespace gaat toevoegen bovenaan de routing config.**

```php
use App\Http\Controllers\CourseController;
```

## Views aanmaken

Als laatste moeten we nog de 2 views aanmaken. Zoals je kan zien roepen we deze via de CourseController op via `view('course.list')`. We moeten dus een nieuwe folder `course` aanmaken in de views folder met daarin 2 views: `list.blade.php` en `detail.blade.php`. Op die manier kunnen we onze views mooi structureren.

Maak gebruik van de layout en zet plaats al een titel in de pagina om deze te kunnen testen.

Suft nu naar de correcte url bv `http://127.0.0.1:8000/courses`.