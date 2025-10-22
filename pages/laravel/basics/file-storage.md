# File Storage

In een applicatie zullen we ook meerder bestanden willen hosten. Dit kunnen afbeeldingen, video's of andere documenten zijn.

In kleinere applicaties en websites zullen deze op dezelfde hosting staan als de website zelf. Maar bij grotere applicaties waarbij veel afbeeldingen of video's geüpload worden door een gebruiker. Dan kan het interessant zijn om deze te hosten op een aparte hosting waarbij je bijvoorbeeld niet betaald voor diskspace maar wel voor bandbreedte. Een voorbeeld hiervan is Amazon S3.

## Link folder

Laravel geeft ons de mogelijkheid om eenvoudig te switchen tussen deze technieken aan de hand van de `config/storage.php`. Hierin staat reeds standaard gedefinieerd dat onze `storage/app/public` gekoppeld zal worden met de folder `public/storage`.

Hiervoor moet een link gemaakt worden in de public folder naar de storage folder. Een link is een soort virtuele folder die doorverwijst naar de bron folder. Maak de link aan via onderstaande commando.

```
ddev artisan storage:link
```

Je zal nu merken dat er een folderlink is toegevoegd aan je public folder.

## Asset ophalen

Vanaf nu kan je in de `storage/app/public` bestanden plaatsen. Bijvoorbeeld `images/afbeelding.jpg`.

In je views kan je deze dan oproepen op onderstaande manier.

```
<img src="{{ asset('storage/images/afbeelding.jpg') }}">
```

## Afbeeldingen opladen via Filament Backoffice

Wanneer je gebruik maakt van Filament kan je ook eenvoudig bestanden opladen via hun FileUpload component. Hieronder een voorbeeld van hoe je dit kan gebruiken in een Resource.

```php

FileUpload::make('image')
    ->label('Afbeelding')
    ->directory('projects') 
    ->disk('public') 
    ->image(),
```

Hierbij zal het bestand opgeladen worden in de folder `storage/app/public/projects`. Omdat we eerder een link hebben gemaakt naar de public folder zal het bestand ook beschikbaar zijn via `public/storage/projects`.

Om het bestand daarna op te halen in je view kan je onderstaande code gebruiken.

```html
<img src="{{ asset('storage/' . $project->image) }}">
```

> Meer mogelijkheden kan je bekijken in de [Filament documentatie](https://filamentphp.com/docs/4.x/forms/file-upload).

## Assets opladen

Indien je zelf bestanden wenst op te laden via een formulier in de frontend dan moet je onderstaande code gebruiken in je controller.

Om assets op te laden moet je uiteraard eerst een `<input type="file" name="image">` toevoegen aan je formulier. 

>Het is belangrijk dat je ook het `enctype` aanpast van je formulier.
>`<form method="POST" enctype="multipart/form-data">`

Van zodra je een POST doen van dit formulier zal de client het bestand doorsturen naar de PHP server. Deze server zal het bestand in een temp folder opslaan. Via onze code moeten we dus enkel het bestand nog verplaatsen naar de juiste map.

In vanilla php gebruikten we hiervoor de functie `move_uploaded_file`. Laravel heeft een method ter beschikking die dat meteen voor ons doen. Hierbij zal hij ook telkens een unieke id gebruiken als bestandsnaam. Het voordeel hiervan is dat gebruikers of administrators eenzelfde bestandsnaam kunnen opladen zonder dat ze elkaars bestand zouden overschrijven. 

Na het verplaatsen moeten we de database nog aanpassen en de bestandsnaam opslaan. Persoonlijk ga ik steeds enkel de bestandsnaam opslaan en niet het pad. Dit heeft als voordeel dat je dan eenvoudig kan veranderen van folderstructuur zonder dat je database aangepast moet worden.

Hieronder zie je de aangepaste code van de edit method. Waarbij eerst het bestand wordt verplaatst naar de Storage en daarna meegegeven wordt om op te slaan in de database. Let wel dat je dit enkel doet als er ook effectief een file wordt opgeladen. Anders maak je het veld het editeren bij iedere aanpassing leeg.

```php
public function save(Request $request, $id = null) {
    $project = ($id) ? Project::findOrFail($id) : new Project();

    //Controleer of er een file is opgeladen
    if( $request->file('image') ) {
        $uploaded_path = $request->file('image')->store('projects', 'public');
        //haal enkel de filename op van het pad
        $filename = basename($uploaded_path);
    }

    $project->name = $request->input('name');
    $project->description = $request->input('description');
    $project->customer_id = $request->input('customer_id') ?? 0;
    $project->publish = 1;
    //Enkel opslaan indien er een filename is.
    if( isset($filename) ) {
        $project->image = 'projects/' . $filename;
    }
    $success = $project->save();

    return redirect('/project/' . $project->id);   
}
```

Wil je zelf kiezen welke bestandsnaam de file moet krijgen dan kan dit via de method `storeAs`. 

[Meer mogelijkheden kan je bekijken via de Laravel documentatie](https://laravel.com/docs/12.x/filesystem#file-uploads)

