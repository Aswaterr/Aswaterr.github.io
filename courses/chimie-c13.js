/* Cours : Chimie — Ch.13 : Structures microscopiques et propriétés physiques des solides */
window.OSCILLO_COURSES = window.OSCILLO_COURSES || [];
window.OSCILLO_COURSES.push({
  subject: "chimie",
  id: "c13",
  name: "Structures microscopiques et propriétés physiques des solides",
  cards: [
    {id:"def-cristal-maille-reseau", type:"def", q:"Définir cristal, maille, réseau cristallin", a:"Cristal : solide dont les constituants sont organisés périodiquement dans les 3 directions de l'espace. Maille : plus petit motif géométrique (parallélépipède) qui, répété par translation, reconstitue tout le cristal. Réseau : ensemble des nœuds obtenus par translation de la maille."},
    {id:"def-types-solides", type:"def", q:"Distinguer solide ionique, métallique, covalent, moléculaire", a:"Ionique : empilement d'ions maintenus par interaction électrostatique (ex. NaCl). Métallique : cations dans un \"gaz d'électrons\" délocalisés. Covalent : réseau de liaisons covalentes fortes (ex. diamant). Moléculaire : molécules maintenues par interactions de van der Waals/liaisons H (ex. glace)."},
    {id:"def-coordinence", type:"def", q:"Définir la coordinence (indice de coordination)", a:"Nombre de plus proches voisins d'un atome/ion donné dans le cristal."},
    {id:"def-compacite", type:"def", q:"Définir la compacité", a:"$$C = \\dfrac{\\text{volume occupé par les sphères (atomes/ions)}}{\\text{volume total de la maille}}$$ (sans dimension, $0<C<1$)"},
    {id:"prop-structure-cfc", type:"propriété", q:"Structure cubique à faces centrées (CFC) : caractéristiques", a:"Maille cubique avec atomes aux 8 sommets + centre des 6 faces. Coordinence 12. Compacité $\\approx 0{,}74$ (empilement compact). Relation entre paramètre de maille $a$ et rayon atomique $R$ : $a\\sqrt2 = 4R$."},
    {id:"prop-structure-hc", type:"propriété", q:"Structure hexagonale compacte (HC) : caractéristiques", a:"Empilement compact ABAB... Coordinence 12. Compacité $\\approx 0{,}74$ (identique au CFC, autre empilement compact). Rapport idéal $c/a = \\sqrt{8/3} \\approx 1{,}633$."},
    {id:"prop-structure-cc", type:"propriété", q:"Structure cubique centrée (CC) : caractéristiques", a:"Maille cubique avec atomes aux 8 sommets + 1 atome au centre. Coordinence 8. Compacité $\\approx 0{,}68$ (moins compact que CFC/HC). Relation : $a\\sqrt3 = 4R$."},
    {id:"def-site-octaedrique-tetraedrique", type:"def", q:"Définir site interstitiel octaédrique et tétraédrique", a:"Sites (espaces vides) entre les atomes d'un empilement compact, pouvant accueillir un atome/ion plus petit. Octaédrique : entouré de 6 atomes voisins (géométrie octaédrique). Tétraédrique : entouré de 4 atomes voisins (géométrie tétraédrique)."},
    {id:"prop-nombre-sites-cfc", type:"propriété", q:"Nombre de sites interstitiels par maille CFC", a:"Pour $n$ atomes par maille CFC ($n=4$) : $n$ sites octaédriques et $2n$ sites tétraédriques (soit 4 sites O et 8 sites T pour la maille CFC)."},
    {id:"formule-masse-volumique-cristal", type:"formule", q:"Masse volumique d'un cristal à partir des données de maille", a:"$$\\rho = \\dfrac{Z\\cdot M}{\\mathcal{N}_A \\cdot V_{maille}}$$ ($Z$ = nombre de motifs par maille, $M$ = masse molaire du motif, $\\mathcal N_A$ = nombre d'Avogadro, $V_{maille}$ = volume de la maille)"},
    {id:"methode-calcul-nombre-atomes-maille", type:"méthode", q:"Méthode : compter le nombre d'atomes par maille (règles de comptage)", a:"Atome au sommet : compte pour $1/8$. Sur une arête : $1/4$. Sur une face : $1/2$. À l'intérieur : $1$ (compte entier). Sommer les contributions de tous les atomes de la maille."},
    {id:"prop-solide-ionique-occupation-sites", type:"propriété", q:"Structure d'un solide ionique type NaCl (occupation des sites)", a:"Les anions (souvent plus gros) forment un réseau CFC ; les cations (plus petits) occupent tous les sites octaédriques : coordinence (6,6), compacité modérée."},
    {id:"prop-facteurs-choix-structure-ionique", type:"propriété", q:"Facteurs déterminant la structure d'un solide ionique (rapport de rayons)", a:"Le rapport $r_+/r_-$ (cation/anion) détermine quel type de site (tétraédrique ou octaédrique, voire cubique) le cation peut occuper sans que les anions ne se touchent ni ne laissent trop d'espace vide."}
  ]
});
