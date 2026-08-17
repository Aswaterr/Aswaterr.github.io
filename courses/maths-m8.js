/* Cours : Mathématiques — Ch.8 : Équations différentielles du second ordre */
window.OSCILLO_COURSES = window.OSCILLO_COURSES || [];
window.OSCILLO_COURSES.push({
  subject: "maths",
  id: "m8",
  name: "Équations différentielles du second ordre",
  cards: [
    {id:"def-equation-caracteristique", type:"def", q:"Définir l'équation caractéristique d'une EDL2 à coefficients constants", a:"Pour $ay''+by'+cy=0$ ($a\\ne0$), l'équation caractéristique est $ar^2+br+c=0$, d'inconnue $r\\in\\mathbb C$."},
    {id:"thm-fondamental-homogene-edl2", type:"propriété", q:"Théorème fondamental homogène (EDL2 à coefficients constants)", a:"Selon le discriminant $\\Delta$ de l'équation caractéristique :&lt;br&gt;• $\\Delta>0$ : $y=\\lambda e^{r_1x}+\\mu e^{r_2x}$&lt;br&gt;• $\\Delta=0$ (racine double $r_0$) : $y=(\\lambda+\\mu x)e^{r_0x}$&lt;br&gt;• $\\Delta<0$ (racines $\\alpha\\pm i\\beta$) : $y=e^{\\alpha x}(\\lambda\\cos(\\beta x)+\\mu\\sin(\\beta x))$"},
    {id:"prop-combinaison-lineaire-solutions", type:"propriété", q:"Combinaison linéaire de solutions (EDL2 homogène)", a:"Si $y_1,y_2$ sont solutions de l'équation homogène, alors $\\lambda y_1+\\mu y_2$ est encore solution pour tous $\\lambda,\\mu\\in\\mathbb R$ (structure d'espace vectoriel de dimension 2)."},
    {id:"prop-solution-generale-edl2", type:"propriété", q:"Structure de la solution générale (EDL2 avec second membre)", a:"$y = y_p + y_h$, où $y_p$ est une solution particulière de l'équation complète et $y_h$ la solution générale de l'équation homogène."},
    {id:"thm-superposition-edl2", type:"propriété", q:"Théorème de superposition (EDL2)", a:"Si $y_1$ solution de $ay''+by'+cy=f_1$ et $y_2$ solution de $ay''+by'+cy=f_2$, alors $y_1+y_2$ est solution pour le second membre $f_1+f_2$."},
    {id:"thm-cauchy-edl2", type:"propriété", q:"Théorème d'existence et d'unicité de Cauchy (EDL2)", a:"Pour $a,b,c$ constants (ou continus, $a$ ne s'annulant pas), et $(x_0,y_0,y_0')$ donnés, il existe une unique solution vérifiant $y(x_0)=y_0$ et $y'(x_0)=y_0'$."},
    {id:"methode-solution-particuliere-polynome", type:"méthode", q:"Recherche de solution particulière : second membre polynôme", a:"Chercher $y_p$ polynôme de même degré que le second membre (degré+1 ou +2 si $0$ ou racine double de l'équation caractéristique)."},
    {id:"methode-solution-particuliere-poly-exp", type:"méthode", q:"Recherche de solution particulière : second membre polynôme × exponentielle $e^{\\lambda x}$", a:"Chercher $y_p = Q(x)e^{\\lambda x}$ avec $Q$ polynôme de même degré que le second membre, multiplié par $x$ (si $\\lambda$ racine simple) ou $x^2$ (si racine double) de l'équation caractéristique."},
    {id:"methode-solution-particuliere-trigo", type:"méthode", q:"Recherche de solution particulière : second membre trigonométrique", a:"Passer en complexe : résoudre pour $e^{i\\omega x}$ (ou $e^{-i\\omega x}$), chercher $y_p$ sous forme complexe adaptée, puis prendre la partie réelle ou imaginaire selon le second membre (cos ou sin)."}
  ]
});
