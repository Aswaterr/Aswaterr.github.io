/* Cours : Physique — I2 : Actions d'un champ magnétique et induction */
window.OSCILLO_COURSES = window.OSCILLO_COURSES || [];
window.OSCILLO_COURSES.push({
  subject: "physique",
  id: "i2",
  name: "Actions d'un champ magnétique et induction",
  cards: [
    {id:"formule-force-laplace-elementaire", type:"formule", q:"Exprimer la force de Laplace élémentaire subie par un élément de circuit", a:"$$d\\vec{F_L}=i\\,\\vec{dl}\\wedge\\vec{B}$$ avec $\\vec{dl}$ orienté dans le sens du courant $i$."},
    {id:"formule-rails-laplace-resultante-puissance", type:"formule", q:"Rails de Laplace : résultante des forces de Laplace sur la tige et puissance associée", a:"$$\\vec{F}=\\int_M^N i\\,\\vec{dl}\\wedge\\vec{B}=i\\overrightarrow{MN}\\wedge\\vec{B}$$ Puissance : $\\mathcal{P}=\\vec{F}\\cdot\\vec{v}=iBLv_x$ (nature motrice ou résistante selon les signes de $v_x$, $B$ et $i$)."},
    {id:"formule-spire-rotation-couple", type:"formule", q:"Spire rectangulaire en rotation dans un champ uniforme : résultante et couple des forces de Laplace", a:"Résultante : $\\vec{F}=\\vec{0}$ (les forces se compensent).<br>Couple non nul : $$\\vec{\\Gamma_L}=iS\\vec{n}\\wedge\\vec{B}=\\vec{m}\\wedge\\vec{B}$$ Puissance : $\\mathcal{P}=\\vec{\\Gamma_L}\\cdot\\vec{\\omega}$."},
    {id:"propriete-action-dipole-magnetique", type:"propriété", q:"Action d'un champ magnétique uniforme sur un dipôle magnétique : résultante, couple, positions d'équilibre", a:"Résultante : $\\vec{F_L}=\\vec{0}$.<br>Couple : $\\vec{\\Gamma_L}=\\vec{m}\\wedge\\vec{B}$.<br>Positions d'équilibre : alignement de $\\vec{B}$ et $\\vec{m}$ ; même sens $\\Rightarrow$ stable, sens opposés $\\Rightarrow$ instable."},
    {id:"def-flux-champ-magnetique", type:"def", q:"Définir le flux du champ magnétique à travers une surface orientée", a:"$$\\Phi=\\iint_{M\\in S}\\vec{B}(M)\\cdot d^2\\vec{S_M}$$ Pour un champ uniforme sur $S$ : $\\Phi=\\vec{B}\\cdot\\vec{S}$."},
    {id:"formule-loi-faraday", type:"formule", q:"Énoncer la loi de Faraday", a:"Un circuit orienté de surface $S$, traversé par un flux $\\Phi$ variable, est le siège d'une force électromotrice induite : $$e=-\\dfrac{d\\Phi}{dt}$$"},
    {id:"propriete-loi-lenz", type:"propriété", q:"Énoncer la loi de modération de Lenz", a:"Le courant induit apparaissant dans un circuit sous l'effet des variations de flux d'un champ magnétique extérieur tend à s'opposer à la cause qui lui a donné naissance."}
  ]
});
