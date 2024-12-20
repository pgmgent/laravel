(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{401:function(e,a,t){"use strict";t.r(a);var s=t(25),n=Object(s.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"file-storage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#file-storage"}},[e._v("#")]),e._v(" File Storage")]),e._v(" "),a("p",[e._v("In een applicatie zullen we ook meerder bestanden willen hosten. Dit kunnen afbeeldingen, video’s of andere documenten zijn.")]),e._v(" "),a("p",[e._v("In kleinere applicaties en websites zullen deze op dezelfde hosting staan als de website zelf. Maar bij grotere applicaties waarbij veel afbeeldingen of video’s geüpload worden door een gebruiker. Dan kan het interessant zijn om deze te hosten op een aparte hosting waarbij je bijvoorbeeld niet betaald voor diskspace maar wel voor bandbreedte. Een voorbeeld hiervan is Amazon S3.")]),e._v(" "),a("h2",{attrs:{id:"link-folder"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#link-folder"}},[e._v("#")]),e._v(" Link folder")]),e._v(" "),a("p",[e._v("Laravel geeft ons de mogelijkheid om eenvoudig te switchen tussen deze technieken aan de hand van de "),a("code",[e._v("config/storage.php")]),e._v(". Hierin staat reeds standaard gedefinieerd dat onze "),a("code",[e._v("storage/app/public")]),e._v(" gekoppeld zal worden met de folder "),a("code",[e._v("public/storage")]),e._v(".")]),e._v(" "),a("p",[e._v("Hiervoor moet een link gemaakt worden in de public folder naar de storage folder. Een link is een soort virtuele folder die doorverwijst naar de bron folder. Maak de link aan via onderstaande commando.")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("ddev artisan storage:link\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("Je zal nu merken dat er een folderlink is toegevoegd aan je public folder.")]),e._v(" "),a("h2",{attrs:{id:"asset-ophalen"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#asset-ophalen"}},[e._v("#")]),e._v(" Asset ophalen")]),e._v(" "),a("p",[e._v("Vanaf nu kan je in de "),a("code",[e._v("storage/app/public")]),e._v(" bestanden plaatsen. Bijvoorbeeld "),a("code",[e._v("images/afbeelding.jpg")]),e._v(".")]),e._v(" "),a("p",[e._v("In je views kan je deze dan oproepen op onderstaande manier.")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("<img src=\"{{ asset('storage/images/afbeelding.jpg') }}\">\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h2",{attrs:{id:"assets-opladen"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#assets-opladen"}},[e._v("#")]),e._v(" Assets opladen")]),e._v(" "),a("p",[e._v("Om assets op te laden moet je uiteraard eerst een "),a("code",[e._v('<input type="file" name="image">')]),e._v(" toevoegen aan je formulier.")]),e._v(" "),a("blockquote",[a("p",[e._v("Het is belangrijk dat je ook het "),a("code",[e._v("enctype")]),e._v(" aanpast van je formulier.\n"),a("code",[e._v('<form method="POST" enctype="multipart/form-data">')])])]),e._v(" "),a("p",[e._v("Van zodra je een POST doen van dit formulier zal de client het bestand doorsturen naar de PHP server. Deze server zal het bestand in een temp folder opslaan. Via onze code moeten we dus enkel het bestand nog verplaatsen naar de juiste map.")]),e._v(" "),a("p",[e._v("In vanilla php gebruikten we hiervoor de functie "),a("code",[e._v("move_uploaded_file")]),e._v(". Laravel heeft een method ter beschikking die dat meteen voor ons doen. Hierbij zal hij ook telkens een unieke id gebruiken als bestandsnaam. Het voordeel hiervan is dat gebruikers of administrators eenzelfde bestandsnaam kunnen opladen zonder dat ze elkaars bestand zouden overschrijven.")]),e._v(" "),a("p",[e._v("Na het verplaatsen moeten we de database nog aanpassen en de bestandsnaam opslaan. Persoonlijk ga ik steeds enkel de bestandsnaam opslaan en niet het pad. Dit heeft als voordeel dat je dan eenvoudig kan veranderen van folderstructuur zonder dat je database aangepast moet worden.")]),e._v(" "),a("p",[e._v("Hieronder zie je de aangepaste code van de edit method. Waarbij eerst het bestand wordt verplaatst naar de Storage en daarna meegegeven wordt om op te slaan in de database. Let wel dat je dit enkel doet als er ook effectief een file wordt opgeladen. Anders maak je het veld het editeren bij iedere aanpassing leeg.")]),e._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("public")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("function")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function-definition function"}},[e._v("save")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name type-declaration"}},[e._v("Request")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$request")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$id")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[e._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$project")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("?")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name static-context"}},[e._v("Project")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("findOrFail")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("new")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Project")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("//Controleer of er een file is opgeladen")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$request")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("file")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[e._v("'photo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$uploaded_path")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$request")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("file")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[e._v("'photo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("store")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[e._v("'projects'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[e._v("'public'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("//haal enkel de filename op van het pad")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$filename")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("basename")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$uploaded_path")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$project")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("->")]),a("span",{pre:!0,attrs:{class:"token property"}},[e._v("name")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$request")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("input")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[e._v("'name'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$project")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("->")]),a("span",{pre:!0,attrs:{class:"token property"}},[e._v("description")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$request")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("input")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[e._v("'description'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$project")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("->")]),a("span",{pre:!0,attrs:{class:"token property"}},[e._v("customer_id")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$request")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("input")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[e._v("'customer_id'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("??")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$project")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("->")]),a("span",{pre:!0,attrs:{class:"token property"}},[e._v("publish")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("//Enkel opslaan indien er een filename is.")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("isset")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$filename")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$project")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("->")]),a("span",{pre:!0,attrs:{class:"token property"}},[e._v("image")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$filename")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$success")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$project")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("save")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("return")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("redirect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[e._v("'/project/'")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(".")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$project")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("->")]),a("span",{pre:!0,attrs:{class:"token property"}},[e._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("   \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br"),a("span",{staticClass:"line-number"},[e._v("18")]),a("br"),a("span",{staticClass:"line-number"},[e._v("19")]),a("br"),a("span",{staticClass:"line-number"},[e._v("20")]),a("br"),a("span",{staticClass:"line-number"},[e._v("21")]),a("br"),a("span",{staticClass:"line-number"},[e._v("22")]),a("br")])]),a("p",[e._v("Wil je zelf kiezen welke bestandsnaam de file moet krijgen dan kan dit via de method "),a("code",[e._v("storeAs")]),e._v(".")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://laravel.com/docs/11.x/filesystem#file-uploads",target:"_blank",rel:"noopener noreferrer"}},[e._v("Meer mogelijkheden kan je bekijken via de Laravel documentatie"),a("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=n.exports}}]);