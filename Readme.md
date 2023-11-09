Med denna uppgift inleds utbildningens andra projekt, som kommer att fortgå under nio veckor och bestå av flera delinlämningar.
Projektet bygger på en brief från ett fiktivt företag som ni kan läsa här: https://docs.google.com/document/d/1f-rogD-2GgbH3XdCCkNp3vFKK0Gizj3SoMAAcHSdN1k

Uppgiften
Denna uppgift är den första delinlämningen i projektet, och utgör exmainering av kursen “Webbutveckling – HTML & CSS”.
Uppgiften är att implementera responsiv layout och utseende på startsidan, på ett sätt som ser exakt ut som specificeras av UX-designer / formgivare.
Uppgiften innefattar även en skriftlig inlämning samt muntlig avstämning där studenten ska motivera val av verktyg och hur man valt att strukturera sin kod.

Moment
Producera en responsiv webbsida enligt designspecifikation – välj själv tekniker (exempelvis SASS, Tailwind, Bootstrap eller bara vanlig CSS)
Motivera skriftligt val av tekniker och verktyg
Beskriv skriftligt hur du strukturerat din kod
Delta i muntlig gruppdiskussion (bokas onsdag 2/11 eller torsdag 3/11) om tekniker, verktyg och struktur
Moment 1-3 sker individuellt.

Material
Exakt designspecifikation
Se bifogade bilder
Se även Figma (registrera konto för detaljer, valfritt): https://www.figma.com/file/0CWDexKE9i3I3yZFiFeDCE
Inlämning
Uppgiften lämnas in genom att publicera sidan med GitHub Pages och följande skickas in via ItsLearning:

Länk till den publika sidan (Github Pages)
Länk till repot där källkoden finns
Text där man motiverar val av tekniker och hur man strukturerat sin kod, minst ca 200 ord
Betygskriterier
Betyg Godkänd
Enligt kursplanen: För att få betyget Godkänt (G) ska den studerande ha genomfört kursen och nått alla kursens läranderesultat.

Det betyder för denna uppgift:

Källkod redovisad via GitHub
Sidan publicerad via Github Pages
Skriftlig inlämning genomförd
Strukturerad HTML och CSS (eller motsvarande)
God likhet avseende färger, typsnitt, avstånd m.m. mellan inlämnad produkt och designspecifikation
Deltagande i muntlig gruppdiskussion om uppgiften
Betyg Väl Godkänd
Enligt kursplanen: För att få betyget Väl godkänt (VG) ska den studerande med hög kvalitet genomfört kursen och nått alla kursens läranderesultat.

Det betyder för denna uppgift, utöver kraven för godkänt:

Väl strukturerad, semantiskt korrekt HTML och CSS
Mycket god likhet avseende färger, typsnitt, avstånd m.m. mellan inlämnad produkt och designspecifikation
Väl underbyggda val av teknik och struktur

---

231025:
Start på uppgift A2 inlämning 2 Startsida för [ESC] Hacker Escape Rooms

- Skapar arbetsmapp och de filer samt undermappar jag troligtvis kommer använda
- Skapar repo på Github
- Bekantar mig med underlaget som finns på Figma och Itslearning

Jag tänker använda vanlig CSS. Har inte testat Bootstrap eller Tailwind och känner att det ev.
kan komma senare när jag blivit mer van vid grunderna.

Jag satsar på betyget VG och börjar med att bygga en HTML som är väl strukturerad och semantiskt korrekt.
Jag tänker att jag ska testa BEM-metoden.

- Skapa grund HTML. Lite CSS. La till några bilder.

---

231026:

- Skapat en header med logga, text och ett första försök till responsiv layout.

---

231027:

- Fortsätta bygga min HTML för mobile first. Tanken är att bygga den i princip helt klar, sedan
  CSS efteråt. Anledning till att jag la till lite CSS från start var för att få en något klarare visuell
  bild från start.

- Uppmärksammar på Figma att vissa element kommer behöva t.ex flex för att fungera bra mellan mobile/desktop
  så planerar min HTML utifrån det.

- HTML grund klar. Fortfarande fix kvar när det gäller namngivning av tags.

---

231030:

- Påbörjade buttons partiet och review, samt lite annat.

---

231031:

- Gjorde klart reviewdelen och fortsatt med challengesdelen. Både jobb i HTML och CSS.
  Challengedelen saknar "sidoscroll" om det var ett krav?

---

231101:

- Fixat problem när sidan "minskas". Fixat problem med container, avslutades innan footer.
  Gjort klart maindelen. Nu vidare till footer. Sen behöver även meny läggas till i header.

- Footer grund klar.

---

231102:

- Gjort klart footer. Lagt till sidoscroll i challenges-sektionen.
  Nu ska "mobilefirst" vara klart rent visuellt.

- Påbörjat desktop-delen. Navbar klar (hoover saknas).
- Bilden under, hur ska den skalas? ser bra ut till 900px, sen för stor?
- Fixat buttons-delen. Fick lägga till nytt namn på buttons omgång två (buttons2).
- Fixat reviews-delen.
- Fixat buttons2-delen.
- Fixat story-delen.
- Påbörjat booking-delen...

---

231103:

- Booking1 klar.
- Booking2 klar.
- Footer klar.
- Hover på meny klar.
- "Generell" hover med pointer på buttons.
- Ändrat breakpoint till 1024px.

Småsaker kvarstår.
Ev. justera sidoscroll.
Ev. justera menyknappar vid större skärm

---

231104:

Justera namngivning på alla element och klasser i HTML och CSS.

---

231108:

- Fortsättning på denna sida. Uppgift:
  A3, inlämning 1: Mobil-meny i på ESC-sidan

- Lagt till en meny direkt i body utanför min "maincontainer".
  Lagt till knapp i header som ska användas för att öppna menyn. Ska inte synas över breakpoint.
  Lagt till lite CSS. Test.
  Lagt till en div för "bakgrund" till menyn.
  Lagt till två funktioner i JS, en för öppna meny och en för stänga meny.
  (fick även lägga till bakgrunden i samma funktion)

  Lägger till lite margin på menyn för att "se" bakgrunden. Centrera?

  Det jag vet behöver fixas:
  Animationer, se video.
  Nu går det att scrolla, inte ok?

---

231109:

- Ändra mobilmenyns bakgrund till opacity 0.5 och la till fade in keyframe.
- Ändrade position och storlek på mobilmenyn så man ser bakgrunden runt om.
- La till i JS så y-scroll försvinner när menyn är öppen.
- La till boxshadow och och justerade fontsize, button med bild mm.
- Flyttade closebutton CSS och justerade margin på barn nummer 5.
- Justerade hackermanbilden vid breakpoint.
