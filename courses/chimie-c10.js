/* Cours : Chimie — Ch.10 : Oxydo-réduction */
window.OSCILLO_COURSES = window.OSCILLO_COURSES || [];
window.OSCILLO_COURSES.push({
  subject: "chimie",
  id: "c10",
  name: "Oxydo-réduction",
  cards: [
    {id:"def-oxydant-reducteur", type:"def", q:"Définir oxydant et réducteur", a:"Oxydant : espèce capable de capter un ou plusieurs électrons. Réducteur : espèce capable de céder un ou plusieurs électrons."},
    {id:"def-couple-redox", type:"def", q:"Définir un couple oxydant/réducteur (redox)", a:"$Ox/Red$ tel que $Ox + n e^- \\rightleftharpoons Red$ (demi-équation électronique)."},
    {id:"def-nombre-oxydation", type:"def", q:"Définir le nombre d'oxydation (n.o.)", a:"Charge fictive portée par un atome si tous les électrons de liaison étaient attribués à l'atome le plus électronégatif. Règles : n.o.=0 pour un corps simple ; n.o.(O)=-II en général (-I dans peroxydes) ; n.o.(H)=+I (sauf hydrures : -I) ; somme des n.o. = charge globale."},
    {id:"prop-oxydation-reduction-no", type:"propriété", q:"Oxydation et réduction en termes de nombre d'oxydation", a:"Oxydation : augmentation du n.o. (perte d'électrons). Réduction : diminution du n.o. (gain d'électrons)."},
    {id:"methode-equilibrer-demi-equation", type:"méthode", q:"Méthode : équilibrer une demi-équation redox en milieu acide", a:"1) Équilibrer l'élément principal.&lt;br&gt;2) Équilibrer O avec $H_2O$.&lt;br&gt;3) Équilibrer H avec $H^+$.&lt;br&gt;4) Équilibrer les charges avec des électrons $e^-$."},
    {id:"methode-equilibrer-milieu-basique", type:"méthode", q:"Méthode : adapter une demi-équation au milieu basique", a:"Équilibrer d'abord en milieu acide, puis ajouter $OH^-$ des deux côtés pour neutraliser tous les $H^+$ (qui se combinent en $H_2O$), et simplifier."},
    {id:"methode-equilibrer-bilan-redox", type:"méthode", q:"Méthode : équilibrer une réaction redox globale", a:"1) Écrire les deux demi-équations (oxydation, réduction).&lt;br&gt;2) Multiplier chacune pour égaliser le nombre d'électrons échangés.&lt;br&gt;3) Additionner et simplifier (électrons doivent disparaître du bilan global)."},
    {id:"def-potentiel-standard", type:"def", q:"Définir le potentiel standard $E^\\circ$ d'un couple", a:"Potentiel d'électrode du couple $Ox/Red$ mesuré dans les conditions standard (activités unitaires), par rapport à l'électrode standard à hydrogène (ESH, $E^\\circ=0$ par convention)."},
    {id:"formule-nernst", type:"formule", q:"Formule de Nernst", a:"Pour $Ox + n e^- \\rightleftharpoons Red$ : $$E = E^\\circ + \\dfrac{RT}{nF}\\ln\\dfrac{a_{Ox}}{a_{Red}} \\approx E^\\circ + \\dfrac{0{,}06}{n}\\log\\dfrac{a_{Ox}}{a_{Red}} \\text{ à } 25°C$$"},
    {id:"prop-force-oxydant-reducteur", type:"propriété", q:"Force d'un oxydant/réducteur via $E^\\circ$", a:"Plus $E^\\circ$ est élevé, plus l'oxydant $Ox$ correspondant est fort (forte tendance à être réduit). Plus $E^\\circ$ est faible, plus le réducteur $Red$ correspondant est fort."},
    {id:"prop-regle-gamma", type:"propriété", q:"Règle du gamma (prévision du sens spontané d'une réaction redox)", a:"Entre deux couples $Ox_1/Red_1$ ($E_1^\\circ$) et $Ox_2/Red_2$ ($E_2^\\circ$) avec $E_1^\\circ>E_2^\\circ$ : réaction spontanée entre $Ox_1$ (le plus haut) et $Red_2$ (le plus bas) — \"l'oxydant du couple de plus haut potentiel réagit avec le réducteur du couple de plus bas potentiel\"."},
    {id:"def-pile-electrochimique", type:"def", q:"Définir une pile électrochimique", a:"Dispositif convertissant l'énergie chimique d'une réaction redox spontanée en énergie électrique, constitué de deux demi-piles (électrode + électrolyte) reliées par un pont salin (ou une paroi poreuse) et un circuit électrique externe."},
    {id:"def-anode-cathode", type:"def", q:"Définir anode et cathode (pile en fonctionnement)", a:"Anode : électrode où a lieu l'oxydation (pôle négatif de la pile). Cathode : électrode où a lieu la réduction (pôle positif de la pile)."},
    {id:"formule-fem-pile", type:"formule", q:"Force électromotrice (f.é.m.) d'une pile", a:"$$e = E_{cathode} - E_{anode} > 0 \\text{ (pile qui fonctionne spontanément)}$$"},
    {id:"formule-lien-K-deltaE", type:"formule", q:"Lien entre $K^\\circ$ d'une réaction redox et $\\Delta E^\\circ$", a:"Pour une réaction faisant intervenir $n$ électrons échangés : $$\\log K^\\circ = \\dfrac{n(E_1^\\circ-E_2^\\circ)}{0{,}06} \\text{ à } 25°C$$"},
    {id:"def-dismutation-mediamutation", type:"def", q:"Définir dismutation et médiamutation (rétrodismutation)", a:"Dismutation : une espèce à degré d'oxydation intermédiaire réagit avec elle-même pour donner un degré supérieur et un degré inférieur. Médiamutation : réaction inverse, deux espèces de degrés extrêmes donnent l'espèce intermédiaire."},
    {id:"prop-condition-dismutation", type:"propriété", q:"Condition de dismutation spontanée (via diagramme E-n.o.)", a:"Une espèce à n.o. intermédiaire se dismute spontanément si, sur un diagramme $E^\\circ$ en fonction du n.o., son point est situé au-dessus du segment reliant les points de degrés inférieur et supérieur (position concave)."}
  ]
});
