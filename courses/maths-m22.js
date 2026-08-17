/* Cours : Mathématiques — Ch.22 : Algèbre linéaire V - retour sur les systèmes linéaires */
window.OSCILLO_COURSES = window.OSCILLO_COURSES || [];
window.OSCILLO_COURSES.push({
  subject: "maths",
  id: "m22",
  name: "Algèbre linéaire V : retour sur les systèmes linéaires",
  cards: [
    {id:"def-systeme-lineaire-matriciel", type:"def", q:"Définir un système linéaire sous forme matricielle", a:"$AX=B$, $A\\in\\mathcal M_{n,p}(K)$ (matrice du système), $X\\in K^p$ (inconnues), $B\\in K^n$ (second membre)."},
    {id:"def-systeme-cramer", type:"def", q:"Définir un système de Cramer", a:"Système carré ($n=p$) dont la matrice $A$ est inversible : admet une unique solution $X=A^{-1}B$ pour tout $B$."},
    {id:"def-rang-systeme", type:"def", q:"Définir le rang d'un système linéaire", a:"$\\mathrm{rg}(\\text{système}) = \\mathrm{rg}(A)$, la matrice du système (rang des équations = rang des colonnes)."},
    {id:"prop-caracterisation-systeme-cramer", type:"propriété", q:"Caractérisation d'un système de Cramer", a:"Système carré de Cramer $\\iff$ $A$ inversible $\\iff \\det(A)\\ne0$ $\\iff \\mathrm{rg}(A)=n$."},
    {id:"prop-lien-matrice-inversible-systeme", type:"propriété", q:"Lien matrice inversible et système", a:"$A$ inversible $\\iff$ le système homogène $AX=0$ n'a que la solution triviale $X=0$ $\\iff$ pour tout $B$, $AX=B$ a une unique solution."},
    {id:"prop-solutions-systeme-non-carre", type:"propriété", q:"Solutions d'un système $AX=B$ (cas général)", a:"Compatible ssi $B\\in\\mathrm{Im}(A)$. Si compatible : solution générale = solution particulière + solution générale du système homogène $AX=0$ (structure affine)."},
    {id:"prop-dimension-espace-solutions-homogene", type:"propriété", q:"Dimension de l'espace des solutions d'un système homogène", a:"Pour $AX=0$, $A\\in\\mathcal M_{n,p}(K)$ : l'ensemble des solutions est un sev de $K^p$ de dimension $p - \\mathrm{rg}(A)$ (théorème du rang appliqué à $u_A$)."},
    {id:"methode-cramer-formule", type:"méthode", q:"Méthode : résoudre un système de Cramer avec les formules de Cramer", a:"Pour $AX=B$ avec $A$ inversible : $$x_i = \\dfrac{\\det(A_i)}{\\det(A)}$$ où $A_i$ est $A$ avec la $i$-ième colonne remplacée par $B$. (Utile en petite dimension, sinon préférer le pivot.)"},
    {id:"methode-resolution-generale-systeme", type:"méthode", q:"Méthode générale de résolution d'un système linéaire", a:"1) Échelonner par pivot de Gauss.&lt;br&gt;2) Identifier le rang et donc les inconnues \"principales\" (pivots) et \"secondaires\" (libres/paramètres).&lt;br&gt;3) Vérifier la compatibilité (lignes de zéros = 0 dans le second membre échelonné).&lt;br&gt;4) Exprimer la solution générale en fonction des paramètres libres."}
  ]
});
