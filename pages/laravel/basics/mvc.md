# Model View Controller

Het MVC pattern wordt vaak gebruikt bij webdevelopment frameworks. Dit bestaat uit een aantal onderdelen.

| Functionaliteit | Omschrijving | Locatie |
| ----------- | ----------- | ----------- |
| Routing | Beslist wat er moet gebeuren met een URL en stuurt door naar Controller | /routes/web.php |
| Controller | Krijgt een request binnen op een method, haalt data op uit de model en stuurt dit door naar de juiste view | /app/Http/Controllers/ |
| Models | Staat in contact met de database, voert sql opdrachten uit en stuurt resultaat terug | /app/Models |
| Views | Bevat de inhoud of een deel van de inhoud van een pagina | /resources/views/... |
| Components & Layout | Bevat meerdere componenten of layouts die wil hergebruiken | /resources/views/components/... |

<iframe width="768" height="432" src="https://miro.com/app/live-embed/uXjVPAtft5w=/?moveToViewport=-1093,1062,3246,1790&embedId=391505196459" frameborder="0" scrolling="no" allow="fullscreen; clipboard-read; clipboard-write" allowfullscreen></iframe>

### Meer info

- [Routing](https://laravel.com/docs/12.x/routing)
- [Eloquent ORM](https://laravel.com/docs/12.x/eloquent)
- [Blade templates](https://laravel.com/docs/12.x/blade)
