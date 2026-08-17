/* Cours : Mathématiques — Ch.6 : Équations différentielles du premier ordre */
window.OSCILLO_COURSES = window.OSCILLO_COURSES || [];
window.OSCILLO_COURSES.push({
  subject: "maths",
  id: "m6",
  name: "Équations différentielles du premier ordre",
  cards: [
    {id:"def-edl1", type:"def", q:"Définir une EDL1 (équation différentielle linéaire d'ordre 1)", a:"Équation de la forme $a(x)y'+b(x)y=c(x)$ avec $a,b,c$ continues sur $I$. Solution : fonction $y$ dérivable sur $I$ vérifiant l'équation. EDL1 homogène associée : $a(x)y'+b(x)y=0$."},
    {id:"def-probleme-cauchy", type:"def", q:"Définir un problème de Cauchy", a:"EDL1 munie d'une condition initiale $y(x_0)=y_0$. Le résoudre = trouver LA solution de l'équation vérifiant cette condition."},
    {id:"thm-fondamental-homogene", type:"propriété", q:"Théorème fondamental (EDL1 homogène) : solutions de $y'+a(x)y=0$", a:"Sur un intervalle où $a$ est continue, les solutions sont $y(x) = Ce^{-A(x)}$, $C\\in\\mathbb R$, où $A$ est une primitive de $a$."},
    {id:"thm-fondamental-edl1", type:"propriété", q:"Théorème fondamental (EDL1 avec second membre)", a:"La solution générale de $y'+a(x)y=b(x)$ est $y = y_p + y_h$ où $y_p$ est une solution particulière et $y_h$ la solution générale de l'équation homogène associée."},
    {id:"prop-principe-superposition", type:"propriété", q:"Principe de superposition", a:"Si $y_1$ est solution de $y'+ay=b_1$ et $y_2$ solution de $y'+ay=b_2$, alors $y_1+y_2$ est solution de $y'+ay=b_1+b_2$."},
    {id:"thm-cauchy-existence-unicite", type:"propriété", q:"Théorème d'existence et d'unicité de Cauchy (linéaire, ordre 1)", a:"Si $a,b$ continues sur $I$, alors pour tout $(x_0,y_0)\\in I\\times\\mathbb R$, il existe une unique solution sur $I$ au problème de Cauchy $y'+a(x)y=b(x)$, $y(x_0)=y_0$."},
    {id:"methode-mimetisme", type:"méthode", q:"Principe du mimétisme (recherche de solution particulière)", a:"Si le second membre $b(x)$ est d'une forme usuelle (polynôme, exponentielle, combinaison), chercher $y_p$ sous une forme similaire (mêmes type de fonctions), à coefficients indéterminés, puis identifier."},
    {id:"methode-variation-constante", type:"méthode", q:"Méthode de variation de la constante", a:"1) Résoudre l'équation homogène : $y_h=Ce^{-A(x)}$.&lt;br&gt;2) Chercher une solution particulière sous la forme $y_p(x)=C(x)e^{-A(x)}$ (C devient une fonction).&lt;br&gt;3) Injecter dans l'équation complète pour déterminer $C'(x)$, puis $C(x)$ par intégration."}
  ]
});
