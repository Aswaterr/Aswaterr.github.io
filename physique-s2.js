/* Cours : Physique — S2 Phénomène d'interférences */
window.OSCILLO_COURSES = window.OSCILLO_COURSES || [];
window.OSCILLO_COURSES.push({
  subject: "physique",
  id: "s2",
  name: "Phénomène d'interférences",
  cards: [
    {id:"formule-somme", type:"formule", q:"Amplitude résultante $A$ de la superposition de deux signaux sinusoïdaux de même fréquence (amplitudes $A_1,A_2$, phases $\\varphi_1,\\varphi_2$)", a:"$$A = \\sqrt{A_1^2+A_2^2+2A_1A_2\\cos(\\varphi_2-\\varphi_1)}$$"},
    {id:"def-constructives", type:"def", q:"Condition d'interférences constructives (déphasage et différence de marche)", a:"$\\Delta\\varphi = 2k\\pi$, $k\\in\\mathbb{Z}$, soit $\\delta = p\\lambda$, $p\\in\\mathbb{Z}$"},
    {id:"def-destructives", type:"def", q:"Condition d'interférences destructives", a:"$\\Delta\\varphi = (2k+1)\\pi$, soit $\\delta = (2p+1)\\dfrac{\\lambda}{2}$"},
    {id:"def-diff-marche", type:"def", q:"Définition de la différence de marche $\\delta$ et sa relation avec le déphasage", a:"Différence des distances parcourues par les deux ondes depuis leur source jusqu'au point d'interférence.<br>$$\\Delta\\varphi = k\\delta = \\dfrac{2\\pi}{\\lambda}\\delta$$"},
    {id:"def-chemin-optique", type:"def", q:"Définition du chemin optique entre $S$ et $M$", a:"Dans un milieu homogène et isotrope d'indice $n$ : $$(SM) = n\\,SM$$"},
    {id:"formule-fresnel", type:"formule", q:"Formule de Fresnel : intensité résultant de l'interférence de deux ondes $I_1,I_2$", a:"$$I = I_1+I_2+2\\sqrt{I_1I_2}\\cos(\\Delta\\varphi) = I_1+I_2+2\\sqrt{I_1I_2}\\cos\\left(\\dfrac{2\\pi\\delta}{\\lambda}\\right)$$"},
    {id:"formule-interfrange", type:"formule", q:"Formule de l'interfrange $i$ (trous d'Young, distance $a$, écran à distance $D$)", a:"$$i = \\dfrac{\\lambda D}{a}$$"},
    {id:"methode-interferences", type:"méthode", q:"Méthode générale pour résoudre un exercice d'interférences : les 5 étapes ?", a:"1. Faire un schéma.<br>2. Identifier les deux ondes, écrire leur phase.<br>3. Exprimer la différence de marche en un point donné.<br>4. Appliquer les conditions constructives / destructives.<br>5. Répondre aux questions posées."}
  ]
});
