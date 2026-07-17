/* Cours : Physique — O1 Approximation de l'optique géométrique */
window.OSCILLO_COURSES = window.OSCILLO_COURSES || [];
window.OSCILLO_COURSES.push({
  subject: "physique",
  id: "o1",
  name: "Approximation de l'optique géométrique",
  cards: [
    {id:"def-modeles-lumiere", type:"def", q:"Quels sont les 3 modèles de description de la lumière ?", a:"Optique géométrique (rayons lumineux) ; optique ondulatoire (lumière = onde, célérité dans le vide $c=3{,}00\\times10^8\\ \\text{m·s}^{-1}$) ; optique quantique (description corpusculaire, énergie d'un photon $E=h\\nu$ avec $h=6{,}63\\times10^{-34}\\ \\text{J·s}$)."},
    {id:"formule-vitesse-mhti", type:"formule", q:"Vitesse de propagation de la lumière dans un MHTI d'indice optique $n$", a:"$$v = \\dfrac{c}{n}$$"},
    {id:"def-mhti", type:"def", q:"Que signifie MHTI et que caractérise chaque lettre ?", a:"Milieu Homogène (propriétés identiques en tout point), Transparent (pas d'absorption de lumière), Isotrope (propriétés indépendantes de la direction de propagation)."},
    {id:"def-approx-optique-geo", type:"def", q:"Condition de validité de l'approximation de l'optique géométrique", a:"Les effets ondulatoires sont négligeables lorsque la dimension $a$ des obstacles/ouvertures est très grande devant la longueur d'onde : critère $a > 1000\\lambda$. La lumière se propage alors rectilignement dans un MHTI."},
    {id:"formule-lois-snell-descartes", type:"formule", q:"Énoncer les 3 lois de Snell-Descartes", a:"1. Rayons réfléchi et réfracté dans le plan d'incidence.<br>2. $i_1 = -r$ (angles de réflexion opposés).<br>3. $n_1\\sin i_1 = n_2\\sin i_2$ (réfraction)."},
    {id:"methode-reflexion-totale", type:"méthode", q:"Méthode pour établir la condition de réflexion totale", a:"1. La réflexion totale n'existe que si $n_1 > n_2$ (milieu plus réfringent → moins réfringent).<br>2. Écrire le cas limite $i_2=\\pi/2$ (le rayon réfracté rase le dioptre).<br>3. Appliquer Snell-Descartes pour obtenir l'angle limite."},
    {id:"formule-angle-limite", type:"formule", q:"Formule de l'angle d'incidence limite de réflexion totale", a:"$$i_{1,lim} = \\arcsin\\dfrac{n_2}{n_1}$$"},
    {id:"def-sources-lumiere", type:"def", q:"Quels sont les 3 types de sources de lumière ?", a:"Sources thermiques, sources spectrales, laser."}
  ]
});
