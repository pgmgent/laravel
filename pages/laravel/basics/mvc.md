# Model View Controller

Het MVC pattern wordt vaak gebruikt bij webdevelopment frameworks. Dit bestaat uit een aantal onderdelen.

| Functionaliteit | Omschrijving | Locatie |
| ----------- | ----------- | ----------- |
| Routing | Beslist wat er moet gebeuren met een URL en stuurt door naar Controller | /routes/web.php |
| Controller | Krijgt een request binnen op een method, haalt data op uit de model en stuurt dit door naar de juiste view | /app/Http/Controllers/ |
| Models | Staat in contact met de database, voert sql opdrachten uit en stuurt resultaat terug | /app/Models |
| Views | Bevat de inhoud of een deel van de inhoud van een pagina | /resources/views/... |
| Layout | Bevat de volledige layout van de pagina | /resources/views/layouts/... |

## Meer info

- [Routing](https://laravel.com/docs/9.x/routing)
- [Eloquent ORM](https://laravel.com/docs/9.x/eloquent)
- [Blade templates](https://laravel.com/docs/9.x/blade)
