# CSRF 

*Cross-Site Request Forgery (CSRF) is een aanval die geverifieerde gebruikers dwingt een verzoek in te dienen bij een webtoepassing waartegen ze momenteel zijn geverifieerd. CSRF-aanvallen maken gebruik van het vertrouwen dat een webtoepassing heeft in een geverifieerde gebruiker. (Omgekeerd misbruiken cross-site scripting (XSS)-aanvallen het vertrouwen dat een gebruiker heeft in een bepaalde webtoepassing). Een CSRF-aanval maakt gebruik van een kwetsbaarheid in een webtoepassing als er geen onderscheid kan worden gemaakt tussen een verzoek dat door een individuele gebruiker wordt gegenereerd en een verzoek dat door een gebruiker wordt gegenereerd zonder diens toestemming.*

## Hoe werkt Cross-Site Request Forgery?

Het doel van een aanvaller voor het uitvoeren van een CSRF-aanval is om de gebruiker te dwingen een statuswijzigingsverzoek in te dienen. Voorbeelden zijn onder meer:

- Een record indienen of verwijderen.
- Een transactie indienen.
- Een product kopen.
- Een wachtwoord wijzigen.
- Een bericht sturen.

Social engineering-platforms worden vaak door aanvallers gebruikt om een ​​CSRF-aanval uit te voeren. Dit verleidt het slachtoffer om op een URL te klikken die een kwaadwillig vervaardigd, ongeautoriseerd verzoek voor een bepaalde webtoepassing bevat. De browser van de gebruiker stuurt dit kwaadwillig vervaardigde verzoek vervolgens naar een gerichte webtoepassing. Het verzoek bevat ook eventuele inloggegevens met betrekking tot de specifieke website (bijv. gebruikerssessiecookies). Als de gebruiker zich in een actieve sessie bevindt met een gerichte webtoepassing, behandelt de toepassing dit nieuwe verzoek als een geautoriseerd verzoek dat door de gebruiker is ingediend. Zo slaagt de aanvaller erin misbruik te maken van de CSRF-kwetsbaarheid van de webtoepassing.

Een CSRF-aanval richt zich op webapplicaties die geen onderscheid kunnen maken tussen geldige verzoeken en vervalste verzoeken die door de aanvaller worden beheerd. Er zijn veel manieren waarop een aanvaller kan proberen de CSRF-kwetsbaarheid te misbruiken.

## Realistisch voorbeeld

Om een voorbeeld te geven, laten we zeggen dat Giovanni een online bankrekening heeft op pgmbank.com. Hij bezoekt deze site regelmatig om transacties uit te voeren met zijn vriendin Chantal. Giovanni weet niet dat pgmbank.com kwetsbaar is voor CSRF-aanvallen. Ondertussen probeert een aanvaller $ 5.000 van de rekening van Giovanni over te maken door misbruik te maken van dit beveiligingslek. Om deze aanval succesvol te lanceren:

- De aanvaller moet een exploit-URL bouwen.
- De aanvaller moet Giovanni ook misleiden om op de exploit-URL te klikken.
- Giovanni moet een actieve sessie hebben met pgmbank.com.

Laten we zeggen dat de applicatie voor online bankieren is gebouwd met behulp van de GET-methode om een ​​overdrachtsverzoek in te dienen. Als zodanig kan het verzoek van Giovanni om $ 500 over te maken naar Chantal (met rekeningnummer 213367) er als volgt uitzien:

``` http
GET https://pgmbank.com/onlinebanking/transfer?amount=500&accountNumber=213367 HTTP/1.1
```

In overeenstemming met de eerste vereiste om een ​​CSRF-aanval met succes te starten, moet een aanvaller een kwaadaardige URL maken om $ 5.000 over te maken naar rekening 425654:

`https://pgmbank.com/onlinebankieren/transfer?amount=5000&accountNumber=425654`

Met behulp van verschillende social engineering-aanvalsmethoden kan een aanvaller Giovanni misleiden om de schadelijke URL te laden. Dit kan op verschillende manieren worden bereikt. Bijvoorbeeld door schadelijke HTML-afbeeldingselementen toe te voegen aan formulieren, door een schadelijke URL te plaatsen op pagina's die vaak worden geopend door gebruikers terwijl ze zijn aangemeld bij de applicatie, of door een schadelijke URL via e-mail te verzenden.

Het volgende is een voorbeeld van een vermomde URL:

<img src = “https://pgmbank.com/onlinebanking/transfer?amount=5000&accountNumber=425654” width=“0” height= “0”>

Overweeg het scenario met een afbeeldingstag in een door een aanvaller opgestelde e-mail aan Giovanni. Na ontvangst opent de browsertoepassing van Giovanni deze URL automatisch, zonder menselijke tussenkomst. Als gevolg hiervan wordt er zonder toestemming van Giovanni een kwaadwillig verzoek naar de toepassing voor internetbankieren gestuurd. Als Giovanni een actieve sessie heeft met pgmbank.com, zal de toepassing dit behandelen als een geautoriseerd verzoek om een ​​bedrag over te maken van Giovanni. Het zou vervolgens het bedrag overmaken naar de rekening die door een aanvaller is opgegeven.

## Hoe beveiligen ?

- Het succes van een CSRF-aanval hangt af van de sessie van een gebruiker met een kwetsbare applicatie. De aanval zal alleen succesvol zijn als de gebruiker in een actieve sessie is met de kwetsbare applicatie.
- Een aanvaller moet een geldige URL vinden om kwaadwillig te kunnen knutselen. - De URL moet een statusveranderend effect hebben op de doeltoepassing.
- Een aanvaller moet ook de juiste waarden voor de URL-parameters vinden. Anders kan de doeltoepassing het kwaadaardige verzoek afwijzen.
Hoe kan een applicatie een Cross-Site Request Forgery-aanval voorkomen?
- Om een ​​CSRF-aanval af te slaan, hebben applicaties een manier nodig om te bepalen of het HTTP-verzoek legitiem is gegenereerd via de gebruikersinterface van de applicatie. De beste manier om dit te bereiken is via een CSRF-token. Een CSRF-token is een veilig willekeurig token (bijv. synchronisatietoken of challenge-token) dat wordt gebruikt om CSRF-aanvallen te voorkomen. Het token moet uniek zijn per gebruikerssessie en moet een grote willekeurige waarde hebben om het moeilijk te raden te maken.

::: icon-tip Tip
Een beveiligde CSRF-toepassing wijst een uniek CSRF-token toe voor elke gebruikerssessie. Deze tokens worden ingevoegd in verborgen parameters van HTML-formulieren die betrekking hebben op kritieke bewerkingen aan de serverzijde. Ze worden vervolgens naar clientbrowsers verzonden.
::: 

## Conclusie

Het is de verantwoordelijkheid van de developers om vast te stellen welke bewerkingen aan de serverzijde gevoelig van aard zijn. **De CSRF-tokens moeten deel uitmaken van het HTML-formulier en mogen niet worden opgeslagen in sessiecookies**. De eenvoudigste manier om een ​​niet-voorspelbare parameter toe te voegen, is door een veilige hashfunctie (bijv. SHA-2) te gebruiken om de sessie-ID van de gebruiker te hashen. Om willekeur te garanderen, moeten de tokens worden gegenereerd door een cryptografisch beveiligde random number generator.

Telkens wanneer een gebruiker deze kritieke bewerkingen uitvoert, moet een door de browser gegenereerd verzoek het bijbehorende CSRF-token bevatten. Dit wordt door de applicatieserver gebruikt om de legitimiteit van het verzoek van de eindgebruiker te verifiëren. De applicatieserver wijst het verzoek af als het CSRF-token niet overeenkomt met de test.