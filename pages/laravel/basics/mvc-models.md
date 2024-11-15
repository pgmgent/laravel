# MVC - Model

In een MVC zijn de models verantwoordelijk voor de CRUD. Het toevoegen, lezen, aanpassen en verwijderen van data. Deze data zal meestal opgehaald worden uit een database. In combinatie met Laravel is dit meestal MySQL. Maar dat kan ook een andere vorm van database zijn of zelf een connectie met een externe API of een gewoon JSON bestand.

[De connectie met de database hebben we bij de installatie gedefinieerd in de `.env` file.](/laravel/laravel/databases/connecting.html).

Daarna hebben we de migration scripts uitgevoerd via `ddev artisan migrate`. Bekijk alvast eens de bestaande migrations `database/migrations/`.

We kunnen nu zelf migrations schrijven ofwel bestaande tabellen importeren of aanmaken rechtstreeks in de database.

Voor we migrations zelf gaan schrijven zullen we eerst eens een eigen tabel maken via een DBMS zoals MySQLWorkbench. (Voer de SQL statements uit die je onderaan deze pagina kan vinden)[#courses-sql].

## Model aanmaken

Daarna kunnen we ons eerste model aanmaken en afleiden van een basis Model. Hierdoor erven we meteen alle methods over van dit basis Model.

Maak de model `Course.php` aan in de folder `/app/Models/` met onderstaande code.

```php
namespace App\Models;
 
use Illuminate\Database\Eloquent\Model;
 
class Course extends Model
{

}
```

Het basis model gaat uit van de tabel `courses` (Class name in onderkast + 's') en de primary key `id`.

> Indien je dit anders wenst dan moet je dit definiëren aan het begin van je model.
> ```
>    protected $table = 'my_courses';
>    protected $primaryKey = 'course_id';
>```


Via de Eloquent ORM kan je nu data ophalen via static functies van je model. (Meer info over de mogelijkheden)[https://laravel.com/docs/11.x/eloquent] of hieronder enkele die je kan testen binnen de courses tabel en Course model.

```php
//Alle records ophalen
$courses = Course::all();
var_dump($courses);

//Het vak ophalen met primary key 1
$course = Course::find(1);
var_dump($course);

//Zoek vakken van Dieter De Weirdt
$courses = Course::where('teacher_short', '=', 'DDW')->get();
var_dump($courses);
```

Pas nu de Controller aan zodat je de inhoud kan doorgeven aan de View. In de view moet je de inhoud ook ophalen.

## Courses SQL

``` SQL
CREATE TABLE `courses` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(128) DEFAULT NULL,
  `name_short` varchar(64) DEFAULT NULL,
  `description` text,
  `image` varchar(128) DEFAULT NULL,
  `course_group_id` int DEFAULT NULL,
  `period` int DEFAULT NULL,
  `year` int DEFAULT NULL,
  `teacher_short` varchar(5) DEFAULT NULL,
  `credits` int DEFAULT NULL,
  `website` varchar(128) DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

INSERT INTO `courses` (`id`, `name`, `name_short`, `description`, `image`, `course_group_id`, `period`, `year`, `teacher_short`, `credits`, `website`, `updated_at`, `created_at`)
VALUES
	(1,'Programming 1: Essentials','Programmeren 1','In het opleidingsonderdeel Programming 1: Essentials leren we de basis van de programmeertaal JavaScript. Ter voorbereiding van het volgende college doorloop je een aantal LinkenIn Learning video tutorials op eigen tempo. Op deze manier kan je het college goed volgen, antwoorden op gestelde vragen en taken succesvol realiseren.\n\nJe leert eerst programmeren met als output het console venster, vervolgens leren we programmeren door visuals in de browser te genereren (via de Canvas API) en tenslotte zullen we webpagina’s manipuleren en interactief maken via JavaScript.\n\nDe Computer Programming leerlijn is de fundamentele leerlijn binnen Graduaat Programmeren. We leiden je op als een echte goede JavaScript programmeur en Front-End Developer.\n\n#','pgm1.jpg',4,1,1,'PDP',6,'https://www.pgm.gent/pgm-1/',NULL,'2022-09-28 18:40:20'),
	(2,'Programming 2: Intermediate','Programmeren 2','De kennis verworven bij de vakken Programming 1: Essentials en Web Design wordt uitgebreid met o.a. externe data inladen en vervolgens consumeren, formulieren valideren, werken met template systemen, objectgeoriënteerd programmeren, project automatiseren …','pgm2.jpg',4,2,1,'MDP',6,'https://www.pgm.gent/pgm-2/',NULL,'2022-09-28 18:40:20'),
	(3,'@work 1','@work 1','De kennis verworven bij de vakken Programming 1: Essentials, Web Design en Computer Systems wordt toegepast tijdens de realisatie van één of meerdere concrete cases.','at-work1.jpg',5,2,1,'PDP',6,'https://www.pgm.gent/at-work-1',NULL,'2022-09-28 18:40:20'),
	(4,'User Interface Design','UI Design','<div class=\"theme-default-content content__default\"><h1 id=\"ui-versus-ux\"><a href=\"#ui-versus-ux\" class=\"header-anchor\">#</a> <abbr title=\"User Interface\">UI</abbr> versus <abbr title=\"User Experience\">UX</abbr></h1> <h2 id=\"wat-is-ui\"><a href=\"#wat-is-ui\" class=\"header-anchor\">#</a> Wat is <abbr title=\"User Interface\">UI</abbr>?</h2> <p><abbr title=\"User Interface\">UI</abbr> staat voor <em>User Interface</em> (Ned. gebruikersinterface). En gaat over de mogelijke interactie die een gebruiker kan hebben met een computer (<abbr title=\"Human-Computer Interaction\">HCI</abbr>).</p> <p>Een goede interactie ontstaat wanneer:</p> <ol><li>de gebruiker (human) iets aan de computer doorgeeft (<strong>input</strong>);</li> <li>de computer deze input begrijpt en aan de slag gaat en met deze input;</li> <li>de computer een resultaat formuleert en terug geeft aan de gebruiker (<strong>output</strong>);</li> <li>de gebruiker (human) dit resultaat begrijpt.</li></ol> <p>Er zijn heel wat soorten en vormen van gebruikersinterfaces, met daarbij nog eens verschillende input- en output mogelijkheden.</p> <p>De eerste interactie die de gebruiker kon hebben met een computer was aan de hand van ponskaarten. Hierop stond data die begrepen kon worden door een computer. Later kon men rechtstreeks op de computer instructies ingeven in een commandoprompt (cmd / terminal) via een toetsenbord. Het resultaat wordt in de meeste gevallen op een scherm getoond.</p> <p><img src=\"/ui-design/images/content/punchcard.jpg\" alt=\"ponskaart\" title=\"Ponskaart input\"></p> <h3 id=\"gui\"><a href=\"#gui\" class=\"header-anchor\">#</a> <abbr title=\"Graphical User Interface\">GUI</abbr></h3> <p><abbr title=\"Graphical User Interface\">GUI</abbr> staat dan weer voor <em>Graphical User Interface</em> en gaat specifiek over de grafische weergave van een gebruikersinterface. De eerste computer met <abbr title=\"Graphical User Interface\">GUI</abbr> kwam in 1980 op de markt door Xerox. Een gebruiker kon nu interactie hebben met een computer aan de hand van knoppen, iconen, links, menu’s …</p> <iframe src=\"https://www.youtube.com/embed/6o5I20WcNUM\" width=\"560\" height=\"315\" allowfullscreen=\"allowfullscreen\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"></iframe> <h3 id=\"andere-vormen-van-ui\"><a href=\"#andere-vormen-van-ui\" class=\"header-anchor\">#</a> Andere vormen van <abbr title=\"User Interface\">UI</abbr></h3> <p>Momenteel hebben we als gebruikers ook reeds interactie met een computer via een <abbr title=\"Voice User Interface\">VUI</abbr>. Denk maar aan de komst van Siri in Apple HomePod, Alexa en de Google Home speakers.</p> <p>Ook kunnen we via Gestural <abbr title=\"User Interface\">UI</abbr> interactie hebben (Gesture = gebaar). Voorbeelden hiervan zijn de Xbox kinect.</p> <iframe src=\"https://www.youtube.com/embed/QjjkqBLRALo\" width=\"560\" height=\"315\" allowfullscreen=\"allowfullscreen\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"></iframe> <h3 id=\"toekomst\"><a href=\"#toekomst\" class=\"header-anchor\">#</a> Toekomst</h3> <p>In de (nabije) toekomst zullen er nog meer manieren van interactie bijkomen. Dan denken we bijvoorbeeld aan interactie via …</p> <ul><li>het samentrekken van spieren (bionische arm);</li> <li>het interpreteren van de emotie van een gebruiker (aan de hand van gezicht en emotie herkenning);</li> <li>hersenactiviteit (Brain-computer interface of <abbr title=\"Brain-Computer Interface\">BCI</abbr>);</li> <li>…</li></ul> <h2 id=\"wat-is-ux\"><a href=\"#wat-is-ux\" class=\"header-anchor\">#</a> Wat is <abbr title=\"User Experience\">UX</abbr>?</h2> <p>Er zijn heel wat delen binnen het <abbr title=\"Human-Computer Interaction\">HCI</abbr>-process waar een foute interpretatie kan zijn van input, output … die dan frustratie opwekken bij de gebruiker. Wat dus een slechte <abbr title=\"User Experience\">UX</abbr> is.</p> <p>De <strong>User Experience</strong> (<abbr title=\"User Experience\">UX</abbr>) gaan dus over de gebruikersbeleving. Hoe ervaart de gebruiker de interactie met een product of dienst. Op zich staat dit los van de <abbr title=\"Human-Computer Interaction\">HCI</abbr>. Je kan bijvoorbeeld ook een goede gebruikersbeleving hebben met de infobalie van een gemeente.</p> <h2 id=\"ux-designer-vs-ui-designer\"><a href=\"#ux-designer-vs-ui-designer\" class=\"header-anchor\">#</a> <abbr title=\"User Experience\">UX</abbr> designer vs <abbr title=\"User Interface\">UI</abbr> designer</h2> <p>Een <abbr title=\"User Experience\">UX</abbr> designer is dus vooral bezit met het onderzoek naar wat de gebruiker wil bereiken en hoe dit op een zo efficiënt mogelijke manier kan.</p> <p>Een <abbr title=\"User Interface\">UI</abbr> designer ontwerp dus de interface. Bij een webdesigner gaat het dus over het grafisch ontwerp van de website</p> <p>In dit vak gaan we leren om een gebruiksvriendelijke <abbr title=\"User Interface\">UI</abbr> te maken met een goede <abbr title=\"User Experience\">UX</abbr>. Indien deze <abbr title=\"User Interface\">UI</abbr> dan ook nog eens mooi is qua design. Dan kan dit de <abbr title=\"User Experience\">UX</abbr> alleen maar verhogen.</p></div>','uidesign.jpg',3,2,1,'DDW',6,NULL,NULL,'2022-09-28 18:40:20'),
	(5,'Programming 3: Front-End Expert ','Programmeren 3',NULL,'pgm3.jpg',4,3,1,'FRG',6,NULL,NULL,'2022-09-28 18:40:20'),
	(6,'Datamanagement met PHP en MySQL','Datamangement','In deze cursus leren jullie back-end development aan de hand van PHP en MySQL. Nog steeds een veel gebruikte technologie in webdevelopment.','datamangement.jpg',2,1,2,'DDW',6,'https://github.com/pgmgent/datamanagment_2022_23',NULL,'2022-09-28 18:40:20'),
	(7,'Computer Systems','Computer Systems',NULL,NULL,2,1,1,'AGB',6,NULL,NULL,'2022-09-28 18:40:20'),
	(8,'Web Design','Web Design',NULL,NULL,3,1,1,'EVR',6,NULL,NULL,'2022-09-28 18:40:20'),
	(9,'IT Communication','IT Communication',NULL,NULL,1,3,1,'CGR',3,NULL,NULL,'2022-09-28 18:40:20'),
	(10,'IT Business','IT Business',NULL,NULL,1,4,1,'CGR',3,NULL,NULL,'2022-09-28 18:40:20'),
	(11,'User Interface Prototyping','User Interface Prototyping',NULL,NULL,3,3,1,'MVP',6,NULL,NULL,'2022-09-28 18:40:20'),
	(12,'Programming 4','Programming 4',NULL,NULL,4,4,1,'AGB',6,NULL,NULL,'2022-09-28 18:40:20'),
	(13,'@Work 2','@work 2',NULL,NULL,5,4,1,'EVR',6,NULL,NULL,'2022-09-28 18:40:20'),
	(14,'Digital Marketing','Digital Marketing',NULL,NULL,1,1,2,NULL,3,NULL,NULL,'2022-09-28 18:40:20'),
	(15,'Programming 5','Programming 5',NULL,NULL,4,1,2,'TDP',6,NULL,NULL,'2022-09-28 18:40:20'),
	(16,'Content Management','Content Management',NULL,NULL,2,2,2,'AGB',6,NULL,NULL,'2022-09-28 18:40:20'),
	(17,'Programming 6','Programming 6',NULL,NULL,4,2,2,NULL,6,NULL,NULL,'2022-09-28 18:40:20'),
	(18,'@Work 3','@Work 3',NULL,NULL,5,2,2,'TDP',6,NULL,NULL,'2022-09-28 18:40:20'),
	(19,'IT Exploration','IT Exploration',NULL,NULL,2,3,2,'EVR',3,NULL,NULL,'2022-09-28 18:40:20'),
	(20,'@Work 4','@Work 4',NULL,NULL,5,3,2,'PDP',15,NULL,NULL,'2022-09-28 18:40:20'),
	(21,'IT Entrepreneurship','IT Entrepreneurship',NULL,NULL,1,4,2,NULL,3,NULL,NULL,'2022-09-28 18:40:20'),
	(22,'@Work 5','@Work 5',NULL,NULL,5,4,2,'MVP',9,NULL,NULL,'2022-09-28 18:40:20');

```