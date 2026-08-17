/* Cours : Mathématiques — Ch.1 : Trigonométrie circulaire */
window.OSCILLO_COURSES = window.OSCILLO_COURSES || [];
window.OSCILLO_COURSES.push({
  subject: "maths",
  id: "m1",
  name: "Trigonométrie circulaire",
  cards: [
    {id:"def-congruence", type:"def", q:"Définir : $a \\equiv b \\, [n]$ (congruence)", a:"$a \\equiv b \\,[n] \\iff \\exists k \\in \\mathbb{Z}, \\; a - b = kn$. Pour les angles, on travaille en général modulo $2\\pi$ (un tour complet)."},
    {id:"prop-cos-domaine", type:"propriété", q:"cos : domaine de définition, arrivée, périodicité, parité", a:"$D_{cos} = \\mathbb{R}$, valeurs dans $[-1,1]$. Périodique de période $2\\pi$. Paire : $\\cos(-x)=\\cos(x)$."},
    {id:"prop-sin-domaine", type:"propriété", q:"sin : domaine de définition, arrivée, périodicité, parité", a:"$D_{sin} = \\mathbb{R}$, valeurs dans $[-1,1]$. Périodique de période $2\\pi$. Impaire : $\\sin(-x)=-\\sin(x)$."},
    {id:"prop-tan-domaine", type:"propriété", q:"tan : domaine de définition, arrivée, périodicité, parité", a:"$D_{tan} = \\mathbb{R} \\setminus \\{\\frac{\\pi}{2}+k\\pi, k\\in\\mathbb{Z}\\}$, valeurs dans $\\mathbb{R}$. Périodique de période $\\pi$. Impaire."},
    {id:"prop-derivees-trigo", type:"propriété", q:"Dérivées de cos, sin, tan", a:"$\\cos'(x) = -\\sin(x)$&lt;br&gt;$\\sin'(x) = \\cos(x)$&lt;br&gt;$\\tan'(x) = 1+\\tan^2(x) = \\dfrac{1}{\\cos^2(x)}$, sur $D_{tan}$."},
    {id:"prop-primitives-trigo", type:"propriété", q:"Primitives de cos et sin", a:"$\\int \\cos(x)\\,dx = \\sin(x)+C$&lt;br&gt;$\\int \\sin(x)\\,dx = -\\cos(x)+C$"},
    {id:"prop-points-remarquables", type:"propriété", q:"Valeurs remarquables de cos, sin, tan (0, π/6, π/4, π/3, π/2)", a:"$\\cos$: $1, \\frac{\\sqrt3}{2}, \\frac{\\sqrt2}{2}, \\frac12, 0$&lt;br&gt;$\\sin$: $0, \\frac12, \\frac{\\sqrt2}{2}, \\frac{\\sqrt3}{2}, 1$&lt;br&gt;$\\tan$: $0, \\frac{\\sqrt3}{3}, 1, \\sqrt3$, non défini en $\\pi/2$."},
    {id:"prop-symetries-cercle", type:"propriété", q:"Relations trigonométriques : $\\cos(\\pi - x)$, $\\cos(\\pi + x)$, $\\cos(\\frac{\\pi}{2}-x)$, $\\sin(\\frac{\\pi}{2}-x)$", a:"$\\cos(\\pi-x)=-\\cos x$, $\\sin(\\pi-x)=\\sin x$&lt;br&gt;$\\cos(\\pi+x)=-\\cos x$, $\\sin(\\pi+x)=-\\sin x$&lt;br&gt;$\\cos(\\frac\\pi2-x)=\\sin x$, $\\sin(\\frac\\pi2-x)=\\cos x$"},
    {id:"prop-inegalites-trigo", type:"propriété", q:"Inégalités classiques avec sin et tan sur $[0,\\pi/2[$", a:"Pour $x \\in [0,\\frac\\pi2[$ : $\\sin x \\le x \\le \\tan x$. Pour tout $x$ : $|\\sin x| \\le |x|$."},
    {id:"prop-limite-sinx-x", type:"propriété", q:"Limite usuelle de $\\dfrac{\\sin x}{x}$ en 0", a:"$\\displaystyle\\lim_{x\\to 0} \\dfrac{\\sin x}{x} = 1$, et $\\displaystyle\\lim_{x\\to0}\\dfrac{1-\\cos x}{x^2}=\\dfrac12$."},
    {id:"formule-addition", type:"formule", q:"Formules d'addition (cos, sin)", a:"$\\cos(a+b)=\\cos a\\cos b - \\sin a\\sin b$&lt;br&gt;$\\cos(a-b)=\\cos a\\cos b + \\sin a\\sin b$&lt;br&gt;$\\sin(a+b)=\\sin a\\cos b+\\cos a\\sin b$&lt;br&gt;$\\sin(a-b)=\\sin a\\cos b-\\cos a\\sin b$"},
    {id:"formule-duplication", type:"formule", q:"Formules de duplication (angle double)", a:"$\\cos(2a) = \\cos^2a - \\sin^2a = 2\\cos^2a - 1 = 1-2\\sin^2a$&lt;br&gt;$\\sin(2a) = 2\\sin a\\cos a$&lt;br&gt;$\\tan(2a) = \\dfrac{2\\tan a}{1-\\tan^2a}$"},
    {id:"formule-tan-addition", type:"formule", q:"Formule d'addition pour tan", a:"$\\tan(a+b) = \\dfrac{\\tan a+\\tan b}{1-\\tan a\\tan b}$"},
    {id:"formule-linearisation", type:"formule", q:"Formules de linéarisation (produit → somme, via angle double)", a:"$\\cos^2a = \\dfrac{1+\\cos(2a)}{2}$&lt;br&gt;$\\sin^2a = \\dfrac{1-\\cos(2a)}{2}$&lt;br&gt;Utilisées pour linéariser des puissances de cos/sin (ex. intégrales)."},
    {id:"formule-produit-somme", type:"formule", q:"Transformation de produit en somme", a:"$\\cos a\\cos b = \\frac12[\\cos(a-b)+\\cos(a+b)]$&lt;br&gt;$\\sin a\\sin b = \\frac12[\\cos(a-b)-\\cos(a+b)]$&lt;br&gt;$\\sin a\\cos b = \\frac12[\\sin(a+b)+\\sin(a-b)]$"},
    {id:"formule-somme-produit", type:"formule", q:"Transformation de somme en produit", a:"$\\cos p+\\cos q = 2\\cos\\frac{p+q}{2}\\cos\\frac{p-q}{2}$&lt;br&gt;$\\cos p-\\cos q = -2\\sin\\frac{p+q}{2}\\sin\\frac{p-q}{2}$&lt;br&gt;$\\sin p+\\sin q = 2\\sin\\frac{p+q}{2}\\cos\\frac{p-q}{2}$&lt;br&gt;$\\sin p-\\sin q = 2\\cos\\frac{p+q}{2}\\sin\\frac{p-q}{2}$"},
    {id:"formule-tan-demi-angle", type:"formule", q:"cos θ, sin θ, tan θ en fonction de $t=\\tan(\\theta/2)$", a:"Avec $t=\\tan(\\theta/2)$ ($\\theta \\ne \\pi + 2k\\pi$) :&lt;br&gt;$\\cos\\theta = \\dfrac{1-t^2}{1+t^2}$, $\\sin\\theta = \\dfrac{2t}{1+t^2}$, $\\tan\\theta = \\dfrac{2t}{1-t^2}$"},
    {id:"methode-acost-bsint", type:"méthode", q:"Méthode : transformer $a\\cos t + b\\sin t$ en $A\\cos(t-\\varphi)$", a:"Avec $(a,b)\\ne(0,0)$, poser $A=\\sqrt{a^2+b^2}$ puis chercher $\\varphi$ tel que $\\cos\\varphi=\\dfrac{a}{A}$ et $\\sin\\varphi=\\dfrac{b}{A}$ (point sur le cercle trigo). On a alors $a\\cos t+b\\sin t = A\\cos(t-\\varphi)$."}
  ]
});
