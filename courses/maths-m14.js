/* Cours : Mathématiques — Ch.14 : Continuité et dérivabilité : théorèmes globaux */
window.OSCILLO_COURSES = window.OSCILLO_COURSES || [];
window.OSCILLO_COURSES.push({
  subject: "maths",
  id: "m14",
  name: "Continuité et dérivabilité : théorèmes globaux",
  cards: [
    {id:"def-segment", type:"def", q:"Définir un segment", a:"Intervalle fermé borné $[a,b]$, $a\\le b$ réels."},
    {id:"def-extremum-local", type:"def", q:"Définir un extremum local", a:"$f$ admet un maximum local en $x_0$ si $\\exists \\alpha>0, \\forall x \\in ]x_0-\\alpha,x_0+\\alpha[, f(x)\\le f(x_0)$. Idem minimum local avec $\\ge$."},
    {id:"def-point-critique", type:"def", q:"Définir un point critique", a:"$x_0$ tel que $f$ est dérivable en $x_0$ et $f'(x_0)=0$."},
    {id:"def-point-interieur", type:"def", q:"Définir un point intérieur (à un intervalle)", a:"$x_0$ est intérieur à $I$ s'il existe $\\alpha>0$ tel que $]x_0-\\alpha,x_0+\\alpha[ \\subset I$ (pas une borne de l'intervalle)."},
    {id:"def-fonction-lipschitzienne", type:"def", q:"Définir une fonction lipschitzienne", a:"$f$ est $k$-lipschitzienne sur $I$ si $\\exists k\\ge0, \\forall x,y\\in I, |f(x)-f(y)| \\le k|x-y|$."},
    {id:"def-fonction-convexe", type:"def", q:"Définir une fonction (strictement) convexe", a:"$f$ convexe sur $I$ si $\\forall x,y\\in I, \\forall t\\in[0,1]$ : $f(tx+(1-t)y) \\le tf(x)+(1-t)f(y)$. Stricte si inégalité stricte pour $x\\ne y$, $t\\in]0,1[$."},
    {id:"lemme-annulation", type:"propriété", q:"Lemme d'annulation (des valeurs intermédiaires simplifié)", a:"Si $f$ continue sur $[a,b]$ avec $f(a)$ et $f(b)$ de signes opposés, alors $f$ s'annule au moins une fois sur $]a,b[$."},
    {id:"thm-valeurs-intermediaires", type:"propriété", q:"Théorème des valeurs intermédiaires (TVI)", a:"Si $f$ continue sur $[a,b]$, alors $f$ prend toute valeur comprise entre $f(a)$ et $f(b)$ (existence de $c$ tel que $f(c)=k$ pour tout $k$ entre $f(a)$ et $f(b)$)."},
    {id:"prop-image-intervalle-continue", type:"propriété", q:"Image d'un intervalle/segment par une fonction continue", a:"L'image d'un intervalle par une fonction continue est un intervalle. L'image d'un segment par une fonction continue est un segment (donc $f$ est bornée et atteint ses bornes sur $[a,b]$)."},
    {id:"thm-bolzano-weierstrass-continuite", type:"propriété", q:"Théorème des bornes atteintes", a:"Toute fonction continue sur un segment $[a,b]$ est bornée et atteint ses bornes (admet un maximum et un minimum globaux)."},
    {id:"thm-bijection", type:"propriété", q:"Théorème de la bijection", a:"Si $f$ continue et strictement monotone sur $I$, alors $f$ réalise une bijection de $I$ vers $f(I)$, et $f^{-1}$ est continue, de même sens de variation que $f$."},
    {id:"prop-extremum-point-critique", type:"propriété", q:"Extremum local en un point intérieur $\\Rightarrow$ point critique", a:"Si $f$ dérivable en $x_0$ intérieur à $I$ et présente un extremum local en $x_0$, alors $f'(x_0)=0$ (réciproque fausse, ex. $x^3$ en 0)."},
    {id:"thm-rolle", type:"propriété", q:"Théorème de Rolle", a:"Si $f$ continue sur $[a,b]$, dérivable sur $]a,b[$, et $f(a)=f(b)$, alors il existe $c\\in]a,b[$ tel que $f'(c)=0$."},
    {id:"thm-egalite-accroissements-finis", type:"propriété", q:"Égalité des accroissements finis (EAF)", a:"Si $f$ continue sur $[a,b]$, dérivable sur $]a,b[$, il existe $c\\in]a,b[$ tel que $f(b)-f(a) = f'(c)(b-a)$."},
    {id:"thm-inegalite-accroissements-finis", type:"propriété", q:"Inégalité des accroissements finis (IAF)", a:"Si $f$ dérivable sur $I$ avec $|f'|\\le M$ sur $I$, alors $f$ est $M$-lipschitzienne sur $I$ : $|f(x)-f(y)| \\le M|x-y|$."},
    {id:"prop-derivee-bornee-lipschitzienne", type:"propriété", q:"Dérivée bornée $\\Rightarrow$ lipschitzienne", a:"Conséquence directe de l'IAF : si $|f'|$ est majorée par $M$ sur $I$, $f$ est $M$-lipschitzienne."},
    {id:"thm-limite-derivee", type:"propriété", q:"Théorème de la limite de la dérivée (prolongement C¹)", a:"Si $f$ continue sur $I$, dérivable sur $I\\setminus\\{x_0\\}$, et $f'(x)\\to\\ell$ (finie) quand $x\\to x_0$, alors $f$ est dérivable en $x_0$ avec $f'(x_0)=\\ell$, et $f'$ est continue en $x_0$."},
    {id:"prop-graphe-convexe-secante", type:"propriété", q:"Position du graphe d'une fonction convexe par rapport à une sécante", a:"Le graphe d'une fonction convexe est situé en dessous de toute sécante (corde) reliant deux points du graphe, sur l'intervalle entre ces points."},
    {id:"prop-graphe-convexe-tangente", type:"propriété", q:"Position du graphe d'une fonction convexe dérivable par rapport à sa tangente", a:"Le graphe d'une fonction convexe dérivable est situé au-dessus de chacune de ses tangentes."},
    {id:"prop-caracterisation-convexite-derivee-seconde", type:"propriété", q:"Caractérisation de la convexité par $f''$", a:"Si $f$ est $C^2$ sur $I$ : $f$ convexe sur $I$ $\\iff$ $f'' \\ge 0$ sur $I$ (stricte si $f''>0$, sauf en des points isolés)."},
    {id:"methode-dichotomie", type:"méthode", q:"Principe de démonstration par dichotomie", a:"Pour montrer l'existence d'un zéro (ou approcher une solution) : partir d'un intervalle $[a,b]$ où $f$ change de signe, couper en deux, garder la moitié où $f$ change encore de signe, répéter — les intervalles emboîtés convergent vers une racine (suites adjacentes)."}
  ]
});
