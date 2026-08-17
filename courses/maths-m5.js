/* Cours : Mathématiques — Ch.5 : Calcul intégral */
window.OSCILLO_COURSES = window.OSCILLO_COURSES || [];
window.OSCILLO_COURSES.push({
  subject: "maths",
  id: "m5",
  name: "Calcul intégral",
  cards: [
    {id:"def-primitive", type:"def", q:"Définir une primitive de $f$ sur un intervalle $I$", a:"$F$ est une primitive de $f$ sur $I$ si $F$ est dérivable sur $I$ et $F'=f$ sur $I$. Deux primitives de $f$ diffèrent d'une constante."},
    {id:"def-primitive-complexe", type:"def", q:"Définir la primitive d'une fonction à valeurs complexes", a:"Pour $f=g+ih$ ($g,h$ réelles), une primitive de $f$ est $F=G+iH$ où $G$ (resp. $H$) est une primitive de $g$ (resp. $h$)."},
    {id:"def-integrale-sans-borne", type:"def", q:"Définir une intégrale sans borne (indéfinie)", a:"Notation $\\int f(x)\\,dx$ désignant l'ensemble des primitives de $f$ (défini à une constante additive près)."},
    {id:"def-classe-c1", type:"def", q:"Définir une fonction de classe $C^1$", a:"$f$ est $C^1$ sur $I$ si $f$ est dérivable sur $I$ et $f'$ est continue sur $I$."},
    {id:"prop-ipp", type:"propriété", q:"Formule d'intégration par parties (IPP)", a:"Pour $u,v$ de classe $C^1$ sur $[a,b]$ :&lt;br&gt;$$\\int_a^b u'(x)v(x)\\,dx = [u(x)v(x)]_a^b - \\int_a^b u(x)v'(x)\\,dx$$"},
    {id:"prop-changement-variable", type:"propriété", q:"Théorème du changement de variable", a:"Pour $\\varphi$ de classe $C^1$ sur $[\\alpha,\\beta]$ et $f$ continue sur $\\varphi([\\alpha,\\beta])$ :&lt;br&gt;$$\\int_{\\varphi(\\alpha)}^{\\varphi(\\beta)} f(x)\\,dx = \\int_\\alpha^\\beta f(\\varphi(t))\\varphi'(t)\\,dt$$"},
    {id:"prop-intervalle-centre-parite", type:"propriété", q:"Intégrale sur un intervalle centré en 0 et parité", a:"Pour $f$ continue sur $[-a,a]$ :&lt;br&gt;Si $f$ paire : $\\int_{-a}^a f = 2\\int_0^a f$&lt;br&gt;Si $f$ impaire : $\\int_{-a}^a f = 0$"},
    {id:"methode-ipp-generale", type:"méthode", q:"Méthode : intégrer par parties", a:"Choisir $u$ à dériver (se simplifie) et $v'$ à intégrer (garde une primitive simple). Répéter si nécessaire jusqu'à obtenir une intégrale calculable directement."},
    {id:"methode-ipp-polynome-autre", type:"méthode", q:"Méthode IPP : polynôme × (ln, exp, trigo...)", a:"Poser $u=$ polynôme (se dérive en degré décroissant jusqu'à 0), $v'=$ l'autre facteur. Répéter l'IPP autant de fois que le degré du polynôme."},
    {id:"methode-ipp-exp-trigo", type:"méthode", q:"Méthode IPP : $e^{\\alpha x}\\times$ trigonométrique", a:"Faire deux IPP successives (en gardant toujours le même facteur à dériver), on retombe sur l'intégrale de départ $I$ : résoudre l'équation en $I$ obtenue."},
    {id:"methode-primitive-c-sur-a-bx2", type:"méthode", q:"Primitive de $x\\mapsto \\dfrac{C}{A+Bx^2}$", a:"Factoriser pour se ramener à la forme $\\dfrac{1}{1+u^2}$ : primitive en $\\mathrm{Arctan}$, du type $\\dfrac{C}{\\sqrt{AB}}\\mathrm{Arctan}\\left(x\\sqrt{B/A}\\right)$ (à adapter aux signes de $A,B$)."},
    {id:"methode-forme-canonique", type:"méthode", q:"Méthode : mise sous forme canonique de $ax^2+bx+c$", a:"$$ax^2+bx+c = a\\left[\\left(x+\\dfrac{b}{2a}\\right)^2 - \\dfrac{b^2-4ac}{4a^2}\\right]$$ Permet de ramener à une forme $A(u^2\\pm k^2)$ pour intégrer (Arctan ou logarithme)."},
    {id:"methode-primitive-fraction-rationnelle-degre2", type:"méthode", q:"Primitive de $x\\mapsto \\dfrac{P(x)}{Ax^2+Bx+C}$", a:"1) Si $\\deg P \\ge \\deg$ dénominateur : effectuer la division euclidienne.&lt;br&gt;2) Décomposer en une partie polynomiale + partie $\\dfrac{u'}{u}$ (logarithme) + partie $\\dfrac{1}{\\text{carré}+1}$ (Arctan) via mise sous forme canonique."}
  ]
});
