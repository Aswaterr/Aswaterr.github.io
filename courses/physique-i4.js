/* Cours : Physique — I4 : Circuit fixe dans un champ magnétique variable */
window.OSCILLO_COURSES = window.OSCILLO_COURSES || [];
window.OSCILLO_COURSES.push({
  subject: "physique",
  id: "i4",
  name: "Circuit fixe dans un champ magnétique variable",
  cards: [
    {id:"def-inductance-propre", type:"def", q:"Définir le flux propre et l'inductance propre d'un circuit filiforme, et la f.é.m. induite associée", a:"Flux propre : $$\\Phi_p=Li$$ ($L$ : inductance propre, en henry H).<br>Loi de Faraday : $$e=-\\dfrac{d\\Phi_p}{dt}=-L\\dfrac{di}{dt}$$ En convention récepteur, on retrouve la tension aux bornes d'une bobine."},
    {id:"def-inductance-mutuelle", type:"def", q:"Définir l'inductance mutuelle entre deux circuits couplés", a:"Pour deux circuits parcourus par $i_1$ et $i_2$ : $$\\Phi_1=L_1i_1+Mi_2 \\qquad \\Phi_2=L_2i_2+Mi_1$$ $M$ : coefficient d'inductance mutuelle, en henry H."},
    {id:"formule-tension-couplage", type:"formule", q:"Exprimer les tensions aux bornes de deux bobines couplées par mutuelle inductance", a:"$$u_{L1}=L_1\\dfrac{di_1}{dt}+M\\dfrac{di_2}{dt} \\qquad u_{L2}=L_2\\dfrac{di_2}{dt}+M\\dfrac{di_1}{dt}$$"},
    {id:"def-transformateur", type:"def", q:"Décrire le principe d'un transformateur et donner son rapport de transformation", a:"Un noyau ferromagnétique (fer doux) confine les lignes de champ entre bobinage primaire ($N_p$ spires) et secondaire ($N_s$ spires).<br>Rapport de transformation : $$m=\\dfrac{v_s}{v_p}=\\dfrac{N_s}{N_p}$$"},
    {id:"def-courants-foucault", type:"def", q:"Qu'appelle-t-on courants de Foucault ? Donner deux applications", a:"Courants induits dans tout le volume d'un matériau conducteur soumis à un champ magnétique variable.<br>Applications : chauffage par induction (effet Joule) ; freinage par induction (force de Laplace)."}
  ]
});
