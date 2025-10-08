# Laravel backoffice met Filament

[Filament](https://filamentphp.com/) is een gratis en open-source admin panel voor Laravel. Het is eenvoudig te installeren en te gebruiken. Filament biedt een mooie interface om je database tabellen te beheren.

## Installatie

Om Filament te installeren, voer je het volgende commando uit in de terminal:

``` shell
ddev composer require filament/filament:"~4.0"
```

Vervolgens kan je Filament installeren met het artisan commando:

``` shell
ddev artisan filament:install --panels
```
Dit zal de nodige bestanden en tabellen aanmaken in je database.

## Toegang tot het admin panel

Standaard is het admin panel bereikbaar via `/admin`. Je kan inloggen met een gebruiker die je aanmaakt met het volgende commando:

``` shell
ddev artisan make:filament-user
``` 
Volg de instructies om een nieuwe gebruiker aan te maken.
Je kan nu inloggen op het admin panel met de aangemaakte gebruiker.

## Beheren van database tabellen

Filament maakt gebruik van "Resources" om database tabellen te beheren. Een resource is een klasse die de weergave en bewerking van een specifieke tabel in de database definieert.

Je kan een nieuwe resource aanmaken voor het model `Project` met het volgende commando:

``` shell
ddev artisan make:filament-resource Project
```
Dit zal een nieuwe resource aanmaken in de map `app/Filament/Resources`. Je kan deze resource aanpassen om de velden en acties te definiëren die beschikbaar zijn in het admin panel.


## Aanpassen van de resource
Open de aangemaakte resource in `app/Filament/Resources/ProjectResource.php`.
Daar zie je een verwijzing naar de `form` en `table` methoden.
Hierin worden 2 aparte files aangeroepen die de formulieren en tabellen definiëren.

### Table
Onder `app/Filament/Resources/Projects/Tables/ProjectsTable.php` vind je de tabel definitie.

Je kan de kolommen aanpassen die getoond worden in de lijstweergave van de records.

``` php
return $table
        ->columns([
            Tables\Columns\TextColumn::make('id')->sortable(),
            Tables\Columns\TextColumn::make('name')->searchable()->sortable(),
            Tables\Columns\TextColumn::make('customer.name')->label('Customer')->searchable()->sortable(),
            Tables\Columns\BooleanColumn::make('publish')->label('Published')->sortable(),
            Tables\Columns\TextColumn::make('created_at')->dateTime()->sortable(),
        ])
        ->filters([
            //
        ])
        ->actions([
            Tables\Actions\EditAction::make(),
            Tables\Actions\DeleteAction::make(),
        ])
        ->bulkActions([
            Tables\Actions\BulkActionGroup::make([
                Tables\Actions\DeleteBulkAction::make(),
            ]),
        ]);
```
### Form

Onder `app/Filament/Resources/Projects/Forms/ProjectsForm.php` vind je de formulier definitie.

Hierin kan je de velden aanpassen die getoond worden in het formulier voor het aanmaken of bewerken van een record.

``` php
return $form
    ->schema([
        Forms\Components\TextInput::make('name')
            ->required()
            ->maxLength(255),
        Forms\Components\Textarea::make('description')
            ->rows(5)
            ->maxLength(65535),
        Forms\Components\Toggle::make('publish')
            ->required(),
        Forms\Components\Select::make('customer_id')
            ->relationship('customer', 'name')
            ->required(),
    ]);
```

Let op: je moet er nu ook voor zorgen dat de verschillende velden ingevuld worden in je model `app/Models/Project.php`. Voeg hiervoor de velden toe aan de `$fillable` property.

``` php
protected $fillable = [
    'name',
    'description',
    'publish',
    'customer_id',
];
```


Voor meer informatie over het aanpassen van resources, kan je de [Filament documentatie](https://filamentphp.com/docs/4.x/admin/resources) raadplegen.



