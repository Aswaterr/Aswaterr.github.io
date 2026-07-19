/* Cours : Physique — M4 : Mouvement de particules chargées dans des champs E et B statiques et uniformes */
window.OSCILLO_COURSES = window.OSCILLO_COURSES || [];
window.OSCILLO_COURSES.push({
  subject: "physique",
  id: "m4",
  name: "Mouvement de particules chargées (champs E et B)",
  cards: [
    {id:"formule-force-lorentz", type:"formule", q:"Force de Lorentz sur une charge ponctuelle $q$", a:"$$\\vec{F}=q\\left(\\vec{E}+\\vec{v}\\wedge\\vec{B}\\right)$$ $\\|\\vec{E}\\|$ en V/m, $\\|\\vec{B}\\|$ en tesla (T)."},
    {id:"propriete-puissance-lorentz", type:"propriété", q:"Puissance de la force de Lorentz : quelle composante travaille ?", a:"$$\\vec{F}\\cdot\\vec{v}=q\\vec{E}\\cdot\\vec{v}$$ Seule la composante électrique travaille. Le champ magnétique ne modifie pas l'énergie cinétique, seulement la direction de la vitesse."},
    {id:"formule-mouvement-champ-E", type:"formule", q:"Accélération et type de trajectoire dans un champ électrostatique uniforme", a:"$$\\vec{a}=\\dfrac{q}{m}\\vec{E}=\\text{cste}$$ ⇒ trajectoire rectiligne (vitesse initiale colinéaire à $\\vec{E}$) ou parabolique (vitesse initiale non colinéaire à $\\vec{E}$)."},
    {id:"formule-energie-potentielle-champE", type:"formule", q:"Énergie potentielle associée à la partie électrique de la force de Lorentz", a:"On définit le potentiel électrostatique $V$ tel que $\\vec{E}=-\\overrightarrow{\\text{grad}}\\,V$. La force électrique dérive de : $$E_p=qV+\\text{cste}$$"},
    {id:"propriete-mouvement-champ-B", type:"propriété", q:"Aspect énergétique du mouvement dans un champ magnétostatique uniforme", a:"La partie magnétique de la force de Lorentz ne travaille pas ⇒ le mouvement est uniforme (norme de la vitesse constante)."},
    {id:"formule-equations-champ-B", type:"formule", q:"Équations différentielles du mouvement dans $\\vec{B}=B\\vec{u_z}$ (PFD)", a:"$$\\dot v_x=\\dfrac{qB}{m}v_y, \\qquad \\dot v_y=-\\dfrac{qB}{m}v_x, \\qquad \\dot v_z=0$$"},
    {id:"formule-pulsation-cyclotron", type:"formule", q:"Pulsation cyclotron et rayon de la trajectoire circulaire dans $\\vec{B}$", a:"$$\\omega_c=\\dfrac{qB}{m}$$ Mouvement circulaire de vitesse angulaire $|\\omega_c|$ et de rayon $$R=\\dfrac{mv}{qB}$$"},
    {id:"methode-mouvement-champs-croises", type:"méthode", q:"Méthode : étudier un mouvement dans des champs E et B combinés (ex. cyclotron, spectromètre de masse)", a:"1. Écrire la force de Lorentz complète $q(\\vec{E}+\\vec{v}\\wedge\\vec{B})$.<br>2. Appliquer le PFD et projeter dans une base adaptée (cartésienne si $\\vec{E}$ et $\\vec{B}$ perpendiculaires, ou utiliser la variable complexe $u=x+jy$ si $\\vec{B}$ seul et mouvement plan).<br>3. Identifier les zones où seul $\\vec{E}$ agit (accélération) et où seul $\\vec{B}$ agit (déviation circulaire à vitesse constante).<br>4. Utiliser la conservation de l'énergie cinétique dans les zones sans champ magnétique pour relier vitesse et tension accélératrice : $\\frac12 mv^2=qU$."}
  ]
});
