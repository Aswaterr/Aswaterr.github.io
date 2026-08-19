/* Cours : Chimie — Ch.12 : Diagrammes E-pH */
window.OSCILLO_COURSES = window.OSCILLO_COURSES || [];
window.OSCILLO_COURSES.push({
  subject: "chimie",
  id: "c12",
  name: "Diagrammes potentiel-pH (E-pH)",
  cards: [
    {id:"def-diagramme-e-ph", type:"def", q:"Définir un diagramme E-pH (diagramme de Pourbaix)", a:"Représentation graphique des domaines de prédominance (espèces dissoutes) ou d'existence (espèces solides) des différentes formes d'un élément, en fonction du potentiel $E$ et du pH, à une concentration totale fixée."},
    {id:"prop-convention-tracage", type:"propriété", q:"Convention de tracé d'un diagramme E-pH", a:"En un point frontière entre deux espèces dissoutes de même élément, on prend par convention les concentrations totales tracées égales (convention des concentrations égales) pour fixer la position des frontières."},
    {id:"methode-etablir-frontiere-verticale", type:"méthode", q:"Méthode : établir une frontière verticale (acide-base pure, pas de transfert d'électron)", a:"Frontière entre deux formes d'un même degré d'oxydation (ex. $AH/A^-$) : pas de dépendance en $E$, uniquement en pH ; utiliser $pH=pK_a$ à la frontière (avec la convention de concentration égales si polyacide)."},
    {id:"methode-etablir-frontiere-horizontale", type:"méthode", q:"Méthode : établir une frontière horizontale (redox pur, pas d'échange de H⁺)", a:"Frontière entre deux degrés d'oxydation sans échange de proton : utiliser Nernst à la frontière ($a_{Ox}=a_{Red}$ par convention), $E=E^\\circ$ (indépendant du pH)."},
    {id:"methode-etablir-frontiere-oblique", type:"méthode", q:"Méthode : établir une frontière oblique (couplage redox + acido-basique)", a:"Écrire la demi-équation faisant intervenir à la fois $e^-$ et $H^+$, appliquer Nernst en exprimant $a_{H^+}$ via le pH : $E$ dépend alors linéairement du pH (pente négative en général, car $H^+$ apparaît côté oxydant)."},
    {id:"prop-lecture-domaines", type:"propriété", q:"Lecture d'un diagramme E-pH : identifier oxydant/réducteur", a:"Sur un diagramme, la forme oxydée (n.o. le plus élevé) se situe toujours dans la zone de $E$ le plus haut (domaine supérieur), la forme réduite dans la zone de $E$ le plus bas, à pH fixé."},
    {id:"def-domaine-stabilite-eau", type:"def", q:"Définir le domaine de stabilité thermodynamique de l'eau", a:"Zone du diagramme E-pH délimitée par les frontières d'oxydation de l'eau ($O_2/H_2O$) en haut et de réduction de l'eau ($H_2O/H_2$ ou $H^+/H_2$) en bas ; hors de ce domaine, l'eau est oxydée ou réduite par l'espèce considérée."},
    {id:"formule-frontiere-o2-h2o", type:"formule", q:"Frontière $O_2/H_2O$ (limite supérieure du domaine de l'eau)", a:"$O_2 + 4H^+ + 4e^- \\rightleftharpoons 2H_2O$, $E^\\circ=1{,}23$ V : $$E = 1{,}23 - 0{,}06\\,pH \\quad (\\text{à } P_{O_2}=1\\text{ bar})$$"},
    {id:"formule-frontiere-h-h2", type:"formule", q:"Frontière $H^+/H_2$ (limite inférieure du domaine de l'eau)", a:"$2H^+ + 2e^- \\rightleftharpoons H_2$, $E^\\circ=0$ V : $$E = -0{,}06\\,pH \\quad (\\text{à } P_{H_2}=1\\text{ bar})$$"},
    {id:"prop-application-corrosion", type:"propriété", q:"Application : lecture de la corrosion via diagramme E-pH", a:"Si le domaine du métal (forme réduite, ex. $Fe$) est situé sous le domaine de stabilité de l'eau, le métal est thermodynamiquement oxydé par l'eau/O₂ dissous : corrosion possible (cinétiquement, elle peut être lente si passivation par formation d'un oxyde protecteur)."},
    {id:"prop-diagramme-dismutation-lecture", type:"propriété", q:"Lecture d'une dismutation sur un diagramme E-pH", a:"Si le domaine d'une espèce à n.o. intermédiaire n'apparaît sur aucune zone du diagramme (ou est très restreint et \"coincé\"), c'est le signe qu'elle se dismute spontanément en les espèces de n.o. supérieur et inférieur."}
  ]
});
