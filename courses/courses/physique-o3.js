/* Cours : Physique — O3 Modèles de dispositifs optiques */
window.OSCILLO_COURSES = window.OSCILLO_COURSES || [];
window.OSCILLO_COURSES.push({
  subject: "physique",
  id: "o3",
  name: "Modèles de dispositifs optiques",
  cards: [
    {id:"def-modele-oeil", type:"def", q:"Modélisation optique de l'œil", a:"Lentille convergente (cristallin) de focale variable + écran (rétine) à distance fixe."},
    {id:"def-accommodation", type:"def", q:"Définir l'accommodation, le PR et le PP (œil emmétrope)", a:"Accommodation : modification de la focale du cristallin pour voir net à toute distance.<br>Ponctum remotum (PR) : distance de vision nette sans accommoder — pour un œil emmétrope, $d_{PR}=\\infty$.<br>Ponctum proximum (PP) : distance de vision nette à l'accommodation maximale — pour un œil emmétrope, $d_{PP}=25\\,\\text{cm}$."},
    {id:"formule-pouvoir-separateur", type:"formule", q:"Pouvoir séparateur de l'œil (angle minimum de résolution)", a:"$$\\approx 1' = 3\\times10^{-4}\\ \\text{rad}$$"},
    {id:"def-modele-appareil-photo", type:"def", q:"Modélisation optique de l'appareil photo", a:"Diaphragme + lentille convergente (objectif) + écran (capteur) à distance variable."},
    {id:"def-mise-au-point-pdc", type:"def", q:"Définir mise au point et profondeur de champ", a:"Mise au point : ajustement de la distance objectif-capteur pour obtenir une image nette.<br>Profondeur de champ : intervalle de distances objet pour lesquelles l'image reste nette."},
    {id:"def-lunette-astro", type:"def", q:"Lunette astronomique : modélisation et grossissement", a:"Deux lentilles convergentes (objectif + oculaire), système afocal ($F'_1$ et $F_2$ confondus).<br>Encombrement $e=f'_1+f'_2$.<br>Grossissement $G=\\dfrac{\\alpha'}{\\alpha}=-\\dfrac{f'_1}{f'_2}$."},
    {id:"def-lunette-galilee", type:"def", q:"Lunette de Galilée : différence avec la lunette astronomique", a:"Objectif convergent + oculaire divergent (au lieu de convergent). Système afocal, mêmes formules d'encombrement $e=f'_1+f'_2$ et de grossissement $G=-\\dfrac{f'_1}{f'_2}$."},
    {id:"def-microscope", type:"def", q:"Microscope : modélisation et grossissement", a:"Deux lentilles convergentes (objectif + oculaire), objet à distance finie, image à l'infini. Intervalle optique $\\Delta=\\overline{F'_1F_2}$.<br>Grossissement $G=\\dfrac{\\alpha'}{\\alpha}=-\\dfrac{d_{pp}\\,\\Delta}{f'_1f'_2}$."},
    {id:"formule-nombre-ouverture", type:"formule", q:"Nombre d'ouverture $N$ d'un objectif photographique", a:"$$N = \\dfrac{f}{D}$$ ($f$ = focale, $D$ = diamètre du diaphragme)"},
    {id:"formule-exposition", type:"formule", q:"Exposition $H$ d'une photo en fonction de l'éclairement $E$ et du temps de pose $T$", a:"$$H = ET = \\dfrac{kT}{N^2}$$"},
    {id:"formule-distance-hyperfocale", type:"formule", q:"Distance hyperfocale $L_0$", a:"$$L_0 = \\dfrac{f'^2}{gN}$$ ($g$ = taille d'une cellule photosensible)"},
    {id:"formule-profondeur-champ", type:"formule", q:"Formule de la profondeur de champ (PDC)", a:"$$A_1A_2 = 2gL^2\\dfrac{N}{f'^2}$$"}
  ]
});
