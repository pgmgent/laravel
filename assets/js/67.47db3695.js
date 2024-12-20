(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{407:function(e,a,n){"use strict";n.r(a);var t=n(25),s=Object(t.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"localization"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#localization"}},[e._v("#")]),e._v(" Localization")]),e._v(" "),a("p",[a("em",[e._v("Meertaligheid")])]),e._v(" "),a("p",[e._v("Bij Laravel kan je ervoor zorgen de volledige interface vertaald wordt. Dit gebeurt aan de hand van de "),a("code",[e._v("Localisation")]),e._v(" feature.")]),e._v(" "),a("p",[e._v("Indien je niet meteen de bedoeling hebt om te werken met lokalisatie is het toch aangeraden om labels meteen mee te geven op de correcte manier. Zodanig dat je in de toekomst, wanneer je toch de interface wil vertalen je dit niet overal moet doen. Dit bespaart je veel werk nadien.")]),e._v(" "),a("p",[e._v("De lokalisatie van labels gebeurt aan de hand van de dubbele underscore "),a("code",[e._v("__")]),e._v(" helper. Hierin geef je dan de parameter mee die opgezocht moet worden in de localisation-file (JSON). Indien er geen lokalisatie beschikbaar is, dan zal standaard de tekst geplaatst worden die werd meegegeven als parameter.")]),e._v(" "),a("p",[e._v("De labels op onze edit course pagina passen we dus best als volgt.")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("<h1>{{ ($course->id) ? __('Edit course') : __('Create course') }}</h1>\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("Indien je dan een lokalisatie bestand "),a("code",[e._v("lang/nl.json")]),e._v(" aanmaakt met hierin:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('{\n    "Edit course": "Vak aanpassen",\n    "Create course": "Vak aanmaken"\n}\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br")])]),a("p",[e._v("Dan kan je eenvoudig je interface vertalen:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("use Illuminate\\Support\\Facades\\App;\n \nApp::setLocale('nl');\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("p",[a("a",{attrs:{href:"https://laravel.com/docs/11.x/localization",target:"_blank",rel:"noopener noreferrer"}},[e._v("Lees meer over Lokalisatie"),a("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=s.exports}}]);