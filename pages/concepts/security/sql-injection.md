# SQL-injectie

*SQL Injectie is een type cyberaanval dat gebruik maakt van kwetsbaarheden in een database om informatie te stelen, te wijzigen of te verwijderen. Het is een techniek waarmee een aanvaller ongeautoriseerde toegang krijgt tot een database door gebruik te maken van SQL-code in een webformulier, URL of andere invoermethode. De aanvaller kan zo informatie verkrijgen, wijzigen of verwijderen, zoals gebruikersnamen en wachtwoorden, waardoor de beveiliging van de website ernstig kan worden verzwakt.*

Een aanvaller kan een SQL-injectie gebruiken om een database te wijzigen met behulp van een malafide SQL-statement. De aanvaller kan dan de informatie veranderen, zoals het veranderen van een accountnaam in een administratieve accountnaam, waardoor de aanvaller toegang krijgt tot gevoelige informatie op de website.

## Voorbeeld

Laten we eens een voorbeeld van een SQL injectie aanvoel. Stel je voor dat je een e-commerce website hebt. Je hebt een categorie gewijd aan de verkoop van stressballen. Een gebruiker is geïnteresseerd in het kopen van stressballen, dus bezoekt hij die categorie op je website. Wanneer de gebruiker op de categorie klikt, zal zijn browser vragen:

`https://fake-website.com/products?categorie=stressballen`

Je webapplicatie zal een SQL-query uitvoeren om relevante informatie over die categorie uit de database te halen. De SQL-query zal waarschijnlijk als volgt luiden:

```sql
select * FROM products WHERE category = ‘stressballen’ AND released = 1
```

In dit geval vraagt de SQL query de database om details van de producten categorie die je hebt, specifiek, je stressballen categorie.

Released = 1 is een restrictie. De nummer 1 zit in de link om producten te verbergen die nog niet gelanceerd zijn. Bijvoorbeeld, je hebt andere variaties van stressballen die je later wilt uitbrengen. De 1 zal ervoor zorgen dat ze niet beschikbaar zijn voor het publiek. 

Het kan zijn dat jouw webapplicatie geen enkele manier om zich tegen een SQL injectie aanval te beschermen. Een aanvaller kan dus, helaas, op een manier als deze aanvallen:

`https://fake-website.com/products?category=stressballen’–`

Dit zal resulteren in een SQL query die er als volgt uitziet: 

```sql
select * FROM products WHERE category = ‘stressballen’–‘ AND released = 1
```

De dubbele streepjes reeks is een indicator die aangeeft dat de query een reactie is. Als het systeem gelooft dat de query een commentaar is, kan het niet weten dat het om een aanval gaat. Vervolgens verwijdert het dubbele streepje de rest van de query (AND released = 1), waardoor informatie over al je producten in je categorie wordt vrijgegeven. Ook informatie die nog niet aan het publiek zijn vrijgegeven. Verder kan de aanvaller een SQL aanval sturen om alles te zien wat je nog meer op je website verkoopt. 

De aanvaller zal op deze manier aanvallen:

https://fake-website.com/products?catgory=stressballen’+OR+1=1–.

Dit zal resulteren in een SQL query die er als volgt uitziet: 

```sql
select * FROM products WHERE category = ‘stressballen’ OR 1=1–‘ AND released = 1
```

Het versturen van deze query geeft informatie over alle artikelen op je website. Er zijn nog veel meer manieren waarop een aanvaller een SQL injectie aanval kan uitvoeren.

Meer info vind je hier:
- [https://www.owasp.org/index.php/SQL_Injection](https://www.owasp.org/index.php/SQL_Injection)
- [https://www.acunetix.com/websitesecurity/sql-injection/](https://www.acunetix.com/websitesecurity/sql-injection/)
- [https://www.netsparker.com/blog/web-security/sql-injection-cheat-sheet/](https://www.netsparker.com/blog/web-security/sql-injection-cheat-sheet/)
- [https://www.owasp.org/index.php/SQL_Injection_Prevention_Cheat_Sheet](https://www.owasp.org/index.php/SQL_Injection_Prevention_Cheat_Sheet)
