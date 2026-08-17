/* Cours : Mathématiques — Ch.18 : Calcul intégral : Théorie */
window.OSCILLO_COURSES = window.OSCILLO_COURSES || [];
window.OSCILLO_COURSES.push({
  subject: "maths",
  id: "m18",
  name: "Calcul intégral : théorie",
  cards: [
    {id:"def-fonction-en-escalier", type:"def", q:"Définir une fonction en escalier", a:"$f$ en escalier sur $[a,b]$ s'il existe une subdivision $a=x_0<x_1<\\cdots<x_n=b$ telle que $f$ est constante sur chaque $]x_{i-1},x_i[$."},
    {id:"def-integrale-escalier", type:"def", q:"Définir l'intégrale d'une fonction en escalier", a:"Pour $f$ en escalier de valeur $c_i$ sur $]x_{i-1},x_i[$ : $\\int_a^b f = \\sum_{i=1}^n c_i(x_i-x_{i-1})$ (aire algébrique des rectangles)."},
    {id:"def-integrale-fonction-continue-segment", type:"def", q:"Définir l'intégrale d'une fonction continue sur un segment", a:"Définie comme la limite commune des intégrales de fonctions en escalier encadrant $f$ d'aussi près que voulu (existence garantie par la continuité sur le segment)."},
    {id:"def-valeur-moyenne", type:"def", q:"Définir la valeur moyenne d'une fonction", a:"Pour $f$ continue sur $[a,b]$, $a\\ne b$ : $$\\mu = \\dfrac{1}{b-a}\\int_a^b f(t)\\,dt$$"},
    {id:"def-sommes-riemann", type:"def", q:"Définir une somme de Riemann", a:"Pour $f$ continue sur $[a,b]$ : $$S_n = \\dfrac{b-a}{n}\\sum_{k=0}^{n-1} f\\left(a+k\\dfrac{b-a}{n}\\right)$$ approche $\\int_a^b f$ quand $n\\to\\infty$."},
    {id:"prop-positivite-integrale", type:"propriété", q:"Positivité et croissance de l'intégrale", a:"Si $f\\ge0$ sur $[a,b]$ ($a\\le b$), alors $\\int_a^b f \\ge 0$. Croissance : $f\\le g$ sur $[a,b]$ $\\Rightarrow \\int_a^b f \\le \\int_a^b g$."},
    {id:"prop-linearite-integrale", type:"propriété", q:"Linéarité de l'intégrale", a:"$$\\int_a^b (\\lambda f+\\mu g) = \\lambda\\int_a^b f + \\mu\\int_a^b g$$"},
    {id:"prop-relation-chasles", type:"propriété", q:"Relation de Chasles", a:"$$\\int_a^b f + \\int_b^c f = \\int_a^c f$$ valable quel que soit l'ordre relatif de $a,b,c$ (avec convention $\\int_a^b=-\\int_b^a$)."},
    {id:"prop-integrale-fonction-positive-nulle", type:"propriété", q:"Intégrale nulle d'une fonction continue positive", a:"Si $f$ continue, $f\\ge0$ sur $[a,b]$, et $\\int_a^b f = 0$, alors $f=0$ sur $[a,b]$."},
    {id:"thm-fondamental-calcul-integral", type:"propriété", q:"Théorème fondamental du calcul intégral", a:"Si $f$ continue sur $I$, la fonction $x\\mapsto \\int_a^x f(t)\\,dt$ est l'unique primitive de $f$ s'annulant en $a$ ; elle est $C^1$ et sa dérivée est $f$. En particulier : $$\\int_a^b f(t)\\,dt = F(b)-F(a)$$ pour toute primitive $F$ de $f$."},
    {id:"prop-integrale-limite-sommes", type:"propriété", q:"L'intégrale comme limite de sommes de Riemann", a:"$$\\lim_{n\\to\\infty} \\dfrac{b-a}{n}\\sum_{k=0}^{n-1} f\\left(a+k\\dfrac{b-a}{n}\\right) = \\int_a^b f(t)\\,dt$$"},
    {id:"inegalite-taylor-lagrange", type:"propriété", q:"Inégalité de Taylor-Lagrange", a:"Si $f$ est $C^{n+1}$ sur $[a,b]$ avec $|f^{(n+1)}|\\le M$ : $$\\left|f(b)-\\sum_{k=0}^n \\dfrac{f^{(k)}(a)}{k!}(b-a)^k\\right| \\le M\\dfrac{|b-a|^{n+1}}{(n+1)!}$$"},
    {id:"inegalite-cauchy-schwarz-integrale", type:"propriété", q:"Inégalité de Cauchy-Schwarz intégrale", a:"Pour $f,g$ continues sur $[a,b]$ : $$\\left(\\int_a^b fg\\right)^2 \\le \\left(\\int_a^b f^2\\right)\\left(\\int_a^b g^2\\right)$$"},
    {id:"methode-calcul-integrale-sommes-riemann", type:"méthode", q:"Méthode : calculer une intégrale à l'aide de sommes de Riemann", a:"Écrire une expression comme somme de Riemann d'une fonction $f$ sur $[a,b]$ (identifier le pas $\\frac{b-a}{n}$ et les points $a+k\\frac{b-a}{n}$), puis en déduire l'intégrale $\\int_a^b f$."},
    {id:"methode-reconnaitre-somme-riemann-limite", type:"méthode", q:"Méthode : reconnaître une somme de Riemann et calculer sa limite", a:"Pour une somme du type $\\frac1n\\sum_{k=0}^{n-1} g(k/n)$, reconnaître $f=g$ sur $[0,1]$ (pas $1/n$) et conclure que la limite vaut $\\int_0^1 g(x)\\,dx$, calculable explicitement."}
  ]
});
