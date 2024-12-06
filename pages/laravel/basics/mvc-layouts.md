# Layouts

We hebben nu al enkele views aangemaakt, telkens met hun eigen HTML, head en body. Qua onderhoud niet zo handig als we een aanpassing moeten doen of een extra CSS of JS bestand moeten linken.

De oplossing hiervoor zijn Laravel componenten. Je kan een component aanmaken voor zowel kleine onderdelen van je website zoals een zoekbalk als voor een volledige layout.

Om een layout component aan te maken, creëer dan volgende bestand: `resources/views/components/layout.blade.php` met een basis HTML en 1 of meerdere placeholders.

```html
 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ $title ?? 'Laravel site' }}</title>
</head>
<body>
    <header>
        <div class="brand">Laravel site</div>
    </header>
    <main>
    {{ $slot }}
    </main>
    <footer>
        &copy; {{ date('Y') }} - Arteveldehogeschool
    </footer>
</body>
</html>
```

De `$slot` variabele wordt gebruikt om de inhoud, die in de pagina staat, weer te geven.

## Layout component aanroepen

In je view definieer je welke layout je wenst te gebruiken en vul je de inhoud in.

```html
<x-layout>
    <h1>Detailpagina van het vak met id: {{ $course_id }}</h1>
    <p>Hier zal de inhoud komen</p>
</x-layout>
```

[Blade Layout components](https://laravel.com/docs/11.x/blade#building-layouts)
