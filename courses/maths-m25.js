/* Cours : Mathématiques — Ch.25 : Fonctions de deux variables */
window.OSCILLO_COURSES = window.OSCILLO_COURSES || [];
window.OSCILLO_COURSES.push({
  subject: "maths",
  id: "m25",
  name: "Fonctions de deux variables",
  cards: [
    {id:"def-boule", type:"def", q:"Définir une boule (ouverte) dans $\\mathbb R^2$", a:"$B(a,r) = \\{x\\in\\mathbb R^2 \\mid \\|x-a\\| < r\\}$, disque ouvert de centre $a$ et rayon $r$."},
    {id:"def-ouvert-ferme", type:"def", q:"Définir ouvert et fermé de $\\mathbb R^2$", a:"$U$ ouvert si tout point de $U$ admet une boule ouverte incluse dans $U$. $F$ fermé si son complémentaire est ouvert."},
    {id:"def-voisinage-r2", type:"def", q:"Définir un voisinage dans $\\mathbb R^2$", a:"$V$ voisinage de $a$ s'il existe $r>0$ tel que $B(a,r)\\subset V$."},
    {id:"def-surface-representative", type:"def", q:"Définir la surface représentative d'une fonction de deux variables", a:"$\\{(x,y,f(x,y)) \\mid (x,y)\\in D_f\\} \\subset \\mathbb R^3$."},
    {id:"def-continuite-point-r2", type:"def", q:"Définir la continuité en un point de $\\mathbb R^2$", a:"$f$ continue en $a$ si $f(x)\\to f(a)$ quand $x\\to a$ (pour toute façon d'approcher $a$ dans $\\mathbb R^2$)."},
    {id:"def-continuite-ouvert", type:"def", q:"Définir la continuité sur un ouvert", a:"$f$ continue sur $U$ ouvert si $f$ est continue en tout point de $U$."},
    {id:"def-derivee-partielle", type:"def", q:"Définir une dérivée partielle", a:"$\\dfrac{\\partial f}{\\partial x}(a,b) = \\lim_{h\\to0} \\dfrac{f(a+h,b)-f(a,b)}{h}$ (dérivée en fixant $y=b$). Idem pour $\\partial f/\\partial y$."},
    {id:"def-fonctions-derivees-partielles", type:"def", q:"Définir les fonctions dérivées partielles", a:"$\\partial_x f, \\partial_y f$ : fonctions qui à $(x,y)$ associent les dérivées partielles de $f$ en ce point (si elles existent en tout point)."},
    {id:"def-classe-c1-r2", type:"def", q:"Définir une fonction de classe $C^1$ sur un ouvert", a:"$f$ admet des dérivées partielles $\\partial_xf,\\partial_yf$ sur $U$, et celles-ci sont continues sur $U$."},
    {id:"def-gradient", type:"def", q:"Définir le gradient", a:"$$\\nabla f(a,b) = \\begin{pmatrix}\\partial_xf(a,b)\\\\\\partial_yf(a,b)\\end{pmatrix}$$"},
    {id:"def-derivee-selon-vecteur", type:"def", q:"Définir la dérivée selon un vecteur", a:"$$D_vf(a) = \\lim_{t\\to0} \\dfrac{f(a+tv)-f(a)}{t} = \\langle \\nabla f(a), v\\rangle \\text{ (si } f \\text{ de classe } C^1\\text{)}$$"},
    {id:"def-ligne-niveau", type:"def", q:"Définir une ligne de niveau", a:"$\\{(x,y) \\mid f(x,y)=k\\}$ pour $k$ fixé (courbe sur laquelle $f$ prend une valeur constante)."},
    {id:"def-extremum-r2", type:"def", q:"Définir extremum local, extremum global (fonction 2 variables)", a:"Maximum local en $a$ : $f(x) \\le f(a)$ pour $x$ dans un voisinage de $a$. Global : pour tout $x$ du domaine. Idem minimum avec $\\ge$."},
    {id:"def-point-critique-r2", type:"def", q:"Définir un point critique (fonction 2 variables)", a:"$a$ tel que $\\nabla f(a) = 0$ (les deux dérivées partielles s'annulent)."},
    {id:"prop-continuite-operations", type:"propriété", q:"Continuité et opérations (somme, produit, quotient)", a:"Comme en une variable : combinaisons linéaires, produits, quotients (dénominateur non nul) de fonctions continues sont continues."},
    {id:"prop-continuite-applications-partielles", type:"propriété", q:"Continuité et applications partielles", a:"Si $f$ continue en $(a,b)$, les applications partielles $x\\mapsto f(x,b)$ et $y\\mapsto f(a,y)$ sont continues respectivement en $a$ et $b$. ATTENTION : la réciproque est FAUSSE (continuité séparée n'implique pas continuité globale)."},
    {id:"prop-derivee-partielle-fonctions-usuelles", type:"propriété", q:"Dérivées partielles des fonctions usuelles (rappel méthode)", a:"On dérive par rapport à une variable en traitant l'autre comme une constante — mêmes règles de dérivation usuelles (produit, quotient, composée) qu'en une variable."},
    {id:"prop-derivee-partielle-somme-produit", type:"propriété", q:"Dérivée partielle d'une somme, d'un produit", a:"$\\partial_x(f+g) = \\partial_xf+\\partial_xg$ ; $\\partial_x(fg) = (\\partial_xf)g+f(\\partial_xg)$ (Leibniz, par rapport à chaque variable séparément)."},
    {id:"prop-classe-c1-continuite", type:"propriété", q:"Classe $C^1$ $\\Rightarrow$ continuité", a:"Si $f$ est $C^1$ sur $U$, alors $f$ est continue sur $U$ (les dérivées partielles continues garantissent la continuité globale, contrairement au simple fait d'avoir des dérivées partielles)."},
    {id:"formule-developpement-limite-ordre1-r2", type:"formule", q:"Développement limité à l'ordre 1 (fonction 2 variables, $C^1$)", a:"$$f(a+h,b+k) = f(a,b) + h\\,\\partial_xf(a,b) + k\\,\\partial_yf(a,b) + o(\\|(h,k)\\|)$$"},
    {id:"prop-dl1-plan-tangent", type:"propriété", q:"DL1 et plan tangent à la surface représentative", a:"Le plan tangent en $(a,b,f(a,b))$ a pour équation : $$z = f(a,b) + \\partial_xf(a,b)(x-a) + \\partial_yf(a,b)(y-b)$$"},
    {id:"prop-interpretation-geometrique-gradient", type:"propriété", q:"Interprétation géométrique du gradient", a:"$\\nabla f(a)$ pointe dans la direction de plus forte croissance de $f$ en $a$, et $\\|\\nabla f(a)\\|$ donne le taux de croissance maximal dans cette direction."},
    {id:"prop-dl1-gradient", type:"propriété", q:"DL1 exprimé avec le gradient", a:"$$f(a+h) = f(a) + \\langle \\nabla f(a), h\\rangle + o(\\|h\\|)$$"},
    {id:"prop-regle-chaine-2-variables", type:"propriété", q:"Règle de la chaîne pour une fonction à deux variables", a:"Si $x(t),y(t)$ dérivables et $f$ de classe $C^1$ : $$\\dfrac{d}{dt}f(x(t),y(t)) = \\partial_xf(x(t),y(t))\\,x'(t) + \\partial_yf(x(t),y(t))\\,y'(t)$$"},
    {id:"prop-interpretation-regle-chaine-arc", type:"propriété", q:"Interprétation de la règle de la chaîne comme dérivée le long d'un arc", a:"$\\frac{d}{dt}f(\\gamma(t))$ mesure la variation de $f$ le long de la trajectoire $\\gamma(t)=(x(t),y(t))$, égale à $\\langle \\nabla f(\\gamma(t)), \\gamma'(t)\\rangle$."},
    {id:"prop-derivee-partielle-composee", type:"propriété", q:"Dérivée partielle d'une composée (changement de variables)", a:"Pour $g(u,v)=f(x(u,v),y(u,v))$ : $$\\partial_ug = \\partial_xf\\cdot\\partial_ux + \\partial_yf\\cdot\\partial_uy$$ (et de même pour $\\partial_vg$)."},
    {id:"prop-gradient-orthogonal-lignes-niveau", type:"propriété", q:"Gradient orthogonal aux lignes de niveau", a:"$\\nabla f(a)$ est orthogonal à la ligne de niveau passant par $a$ (en un point où $\\nabla f(a)\\ne0$)."},
    {id:"prop-extremum-local-point-critique-r2", type:"propriété", q:"Extremum local sur un ouvert $\\Rightarrow$ point critique", a:"Si $f$ de classe $C^1$ sur $U$ ouvert et présente un extremum local en $a\\in U$, alors $\\nabla f(a)=0$ (condition nécessaire, pas suffisante)."},
    {id:"methode-recherche-extrema", type:"méthode", q:"Méthode : recherche d'extrema d'une fonction de deux variables", a:"1) Chercher les points critiques : résoudre $\\nabla f=0$.&lt;br&gt;2) Étudier chaque point critique (signe de $f(a+h)-f(a)$ localement, ou étude via dérivées secondes / forme quadratique si le critère est connu).&lt;br&gt;3) Ne pas oublier d'étudier le bord du domaine si celui-ci n'est pas ouvert."},
    {id:"methode-application-dl1", type:"méthode", q:"Méthode : appliquer le DL1 pour approximer / étudier une variation", a:"Utiliser $f(a+h,b+k) \\approx f(a,b) + h\\partial_xf(a,b)+k\\partial_yf(a,b)$ pour approcher une valeur proche d'un point connu, ou pour étudier le signe local via le terme dominant."}
  ]
});
