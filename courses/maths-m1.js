/* Cours : Maths — Chapitre 1 : Trigonométrie circulaire */
window.OSCILLO_COURSES = window.OSCILLO_COURSES || [];
window.OSCILLO_COURSES.push({
  subject: "maths",
  id: "m1",
  name: "Trigonométrie circulaire",
  cards: [
    {id:"def-congruence", type:"def", q:"Définition de la congruence $a\\equiv b\\ [c]$", a:"$$a\\equiv b\\ [c] \\iff \\exists k\\in\\mathbb{Z},\\ a=b+k\\cdot c$$ (pour $a,b\\in\\mathbb{C}$, $c\\in\\mathbb{C}^*$)"},
    {id:"propriete-congruence-op", type:"propriété", q:"Opérations autorisées sur les congruences", a:"On peut ajouter un même terme des deux côtés : $a\\equiv b\\,[c] \\Rightarrow a+d\\equiv b+d\\,[c]$.<br>On peut multiplier les deux membres ET le module par un même facteur : $a\\equiv b\\,[c] \\Rightarrow a\\times e\\equiv b\\times e\\,[c\\times e]$."},
    {id:"propriete-cos-sin", type:"propriété", q:"Périodicité et parité de cos et sin", a:"cos et sin sont définies sur $\\mathbb{R}$, $2\\pi$-périodiques.<br>cos est paire : $\\cos(-\\theta)=\\cos(\\theta)$.<br>sin est impaire : $\\sin(-\\theta)=-\\sin(\\theta)$."},
    {id:"propriete-derivees-cos-sin", type:"formule", q:"Dérivées de cos et sin (simples et composées)", a:"$\\cos' = -\\sin$, $\\sin' = \\cos$.<br>$(\\cos u)' = -u'\\sin(u)$, $(\\sin u)' = u'\\cos(u)$."},
    {id:"propriete-annulation", type:"propriété", q:"Points d'annulation de cos et sin", a:"$\\cos\\theta=0 \\iff \\theta=\\dfrac{\\pi}{2}+k\\pi\\ (k\\in\\mathbb{Z})$.<br>$\\sin\\theta=0 \\iff \\theta=k\\pi\\ (k\\in\\mathbb{Z})$."},
    {id:"propriete-resolution-eq", type:"méthode", q:"Résoudre $\\cos\\theta=\\cos\\theta'$ et $\\sin\\theta=\\sin\\theta'$", a:"$\\cos\\theta=\\cos\\theta' \\iff \\theta=\\theta'\\,[2\\pi]$ ou $\\theta=-\\theta'\\,[2\\pi]$.<br>$\\sin\\theta=\\sin\\theta' \\iff \\theta=\\theta'\\,[2\\pi]$ ou $\\theta=\\pi-\\theta'\\,[2\\pi]$."},
    {id:"propriete-tan", type:"propriété", q:"Domaine, périodicité, parité et dérivée de tan", a:"tan définie sur $\\mathbb{R}\\setminus\\{\\frac{\\pi}{2}+k\\pi\\}$, $\\pi$-périodique, impaire.<br>$\\tan' = 1+\\tan^2 = \\dfrac{1}{\\cos^2}$."},
    {id:"formulaire-fondamental", type:"formule", q:"Formule fondamentale de trigonométrie", a:"$$\\cos^2 x+\\sin^2 x=1 \\quad\\text{et}\\quad 1+\\tan^2 x=\\dfrac{1}{\\cos^2 x}$$ (là où tan est définie)"},
    {id:"formulaire-changement-angle", type:"formule", q:"Formules de cofonction : $\\cos(\\frac{\\pi}{2}-x)$, $\\sin(\\frac{\\pi}{2}-x)$, $\\cos(\\pi-x)$, $\\sin(\\pi-x)$", a:"$\\cos(\\frac{\\pi}{2}-x)=\\sin(x)$, $\\sin(\\frac{\\pi}{2}-x)=\\cos(x)$.<br>$\\cos(\\pi-x)=-\\cos(x)$, $\\sin(\\pi-x)=\\sin(x)$.<br>$\\cos(-x)=\\cos(x)$, $\\sin(-x)=-\\sin(x)$."},
    {id:"formulaire-addition", type:"formule", q:"Formules d'addition pour $\\cos(a+b)$, $\\sin(a+b)$, $\\tan(a+b)$", a:"$\\cos(a+b)=\\cos a\\cos b-\\sin a\\sin b$<br>$\\sin(a+b)=\\sin a\\cos b+\\sin b\\cos a$<br>$\\tan(a+b)=\\dfrac{\\tan a+\\tan b}{1-\\tan a\\tan b}$"},
    {id:"formulaire-duplication", type:"formule", q:"Formules de duplication : $\\cos(2x)$ (3 formes), $\\sin(2x)$, $\\tan(2x)$", a:"$\\cos(2x)=\\cos^2x-\\sin^2x=2\\cos^2x-1=1-2\\sin^2x$<br>$\\sin(2x)=2\\sin x\\cos x$<br>$\\tan(2x)=\\dfrac{2\\tan x}{1-\\tan^2x}$"},
    {id:"corollaire-linearisation", type:"formule", q:"Linéarisation de $\\cos^2x$ et $\\sin^2x$", a:"$$\\cos^2x=\\dfrac{1+\\cos 2x}{2} \\qquad \\sin^2x=\\dfrac{1-\\cos 2x}{2}$$"},
    {id:"formulaire-somme-produit", type:"formule", q:"Transformation de sommes en produits : $\\cos p+\\cos q$ et $\\sin p+\\sin q$", a:"$$\\cos p+\\cos q=2\\cos\\left(\\dfrac{p+q}{2}\\right)\\cos\\left(\\dfrac{p-q}{2}\\right)$$$$\\sin p+\\sin q=2\\sin\\left(\\dfrac{p+q}{2}\\right)\\cos\\left(\\dfrac{p-q}{2}\\right)$$"},
    {id:"formulaire-produit-somme", type:"formule", q:"Transformation de produits en sommes : $\\cos a\\cos b$, $\\sin a\\sin b$, $\\sin a\\cos b$", a:"$\\cos a\\cos b=\\frac{1}{2}(\\cos(a-b)+\\cos(a+b))$<br>$\\sin a\\sin b=\\frac{1}{2}(\\cos(a-b)-\\cos(a+b))$<br>$\\sin a\\cos b=\\frac{1}{2}(\\sin(a-b)+\\sin(a+b))$"},
    {id:"formulaire-arc-moitie", type:"formule", q:"Formules de l'arc moitié : $\\cos\\theta$, $\\sin\\theta$, $\\tan\\theta$ en fonction de $t=\\tan(\\theta/2)$", a:"$$\\cos\\theta=\\dfrac{1-t^2}{1+t^2} \\quad \\sin\\theta=\\dfrac{2t}{1+t^2} \\quad \\tan\\theta=\\dfrac{2t}{1-t^2}$$"},
    {id:"propriete-inegalites", type:"propriété", q:"Inégalités classiques liant $\\sin x$, $x$ et $\\tan x$", a:"$\\forall x\\in\\mathbb{R}, |\\sin x|\\leq |x|$.<br>$\\forall x\\in\\,]-\\frac{\\pi}{2};\\frac{\\pi}{2}[,\\ |x|\\leq |\\tan x|$."},
    {id:"propriete-limites", type:"propriété", q:"Limites classiques de $\\sin x/x$ et $(\\cos x-1)/x$ en 0", a:"$$\\lim_{x\\to 0}\\dfrac{\\sin x}{x} = 1 \\qquad \\lim_{x\\to 0}\\dfrac{\\cos x-1}{x} = 0$$"},
    {id:"methode-acost-bsint", type:"méthode", q:"Comment transformer $a\\cos t+b\\sin t$ (avec $(a,b)\\neq(0,0)$) en une seule sinusoïde ?", a:"$$a\\cos t+b\\sin t = \\sqrt{a^2+b^2}\\cos(t-\\varphi)$$ avec $\\varphi$ tel que $\\cos\\varphi=\\dfrac{a}{\\sqrt{a^2+b^2}}$ et $\\sin\\varphi=\\dfrac{b}{\\sqrt{a^2+b^2}}$. Très utile en physique et SI."}
  ]
});
