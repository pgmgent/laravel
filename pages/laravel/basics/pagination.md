# Paginatie

Laravel heeft het heel eenvoudig gemaakt om paginatie toe te passen.

Eerst moet je de plaats waar de data wordt opgehaald aanpassen, dus in de controller. Een voorbeeld hieronder zou de projectController.php kunnen zijn.

```php
public function index() {
    $projects = Project::paginate(15);
    //of je kan dit ook combineren met andere methods van het Eloquent ORM
    $projects = Project::where('client_id', 1)->paginate(15)

    return view('projects.list', [
        'projects' = $projects
    ]);
}
```

In de view /projects/list.blade.php moeten we nu onder de lus die de projecten gaat tonen de paginatie-links toevoegen.

```php
<ul>
@foreach($projects as $project)
    <li>{{ $project->name }}</li>
@endforeach
</ul>

{{ $projects->links() }}
```