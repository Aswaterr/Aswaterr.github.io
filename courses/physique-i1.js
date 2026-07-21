/* Cours : Physique — I1 : Champ magnétique */
window.OSCILLO_COURSES = window.OSCILLO_COURSES || [];
window.OSCILLO_COURSES.push({
  subject: "physique",
  id: "i1",
  name: "Champ magnétique",
  cards: [
    {id:"def-champ-magnetique", type:"def", q:"Qu'est-ce qu'une ligne de champ magnétique ? Donner ses propriétés générales", a:"Courbe le long de laquelle le champ magnétique $\\vec{B}$ est tangent en tout point.<br>Les lignes de champ magnétostatique sont fermées ; resserrées dans les zones de champ intense ; parallèles dans les zones de champ uniforme."},
    {id:"def-invariance", type:"def", q:"Que signifie l'invariance d'une distribution de courant par rapport à une coordonnée d'espace ?", a:"La distribution de courant vue en un point de l'espace est la même en tout autre point atteint en faisant varier cette coordonnée."},
    {id:"def-plan-symetrie-antisymetrie", type:"def", q:"Définir un plan de symétrie et un plan d'antisymétrie pour une distribution de courant", a:"Plan de symétrie : deux points symétriques par rapport au plan sont parcourus par un courant de même intensité et de sens symétriques.<br>Plan d'antisymétrie : même intensité, mais sens antisymétriques (opposés)."},
    {id:"propriete-b-invariance", type:"propriété", q:"Comment l'invariance de la distribution de courant se traduit-elle sur $\\vec{B}$ ?", a:"$\\vec{B}$ est indépendant des coordonnées d'espace vis-à-vis desquelles la distribution de courant est invariante."},
    {id:"propriete-symetrie-champ", type:"propriété", q:"Lien entre plans de symétrie/antisymétrie du courant et du champ magnétique", a:"Tout plan de symétrie de la distribution de courant est un plan d'antisymétrie du champ magnétique, et inversement."},
    {id:"propriete-direction-champ-plans", type:"propriété", q:"Direction de $\\vec{B}$ sur un plan de symétrie et sur un plan d'antisymétrie de la distribution de courant", a:"Plan de symétrie du courant : $\\vec{B}$ est orthogonal au plan en tout point de celui-ci.<br>Plan d'antisymétrie du courant : $\\vec{B}$ est contenu dans le plan en tout point de celui-ci."},
    {id:"def-moment-magnetique", type:"def", q:"Définir le moment magnétique d'une boucle plane de courant", a:"$$\\vec{m}=i\\vec{S}=iS\\vec{n}$$ avec $\\vec{n}$ orienté selon la règle de la main droite (sens du courant → sens de $\\vec{n}$)."},
    {id:"propriete-dipole-loin", type:"propriété", q:"Que peut-on dire des lignes de champ créées par différentes distributions de courant, observées de loin ?", a:"Elles deviennent similaires : à grande distance, toute distribution de courant produit un champ de dipôle magnétique, caractérisé uniquement par son moment magnétique $\\vec{m}$."}
  ]
});
