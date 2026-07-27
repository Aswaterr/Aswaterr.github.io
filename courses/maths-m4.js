/* Cours : Maths — Chapitre 4 : Calcul différentiel (révisions) */
window.OSCILLO_COURSES = window.OSCILLO_COURSES || [];
window.OSCILLO_COURSES.push({
  subject: "maths",
  id: "m4",
  name: "Calcul différentiel",
  cards: [
    {id:"formule-derivee-linearite", type:"formule", q:"Dérivée de $\\lambda u+\\mu v$ (linéarité)", a:"$$(\\lambda u+\\mu v)'=\\lambda u'+\\mu v'$$"},
    {id:"formule-derivee-produit", type:"formule", q:"Dérivée d'un produit $u\\cdot v$", a:"$$(u\\cdot v)'=u'\\cdot v+u\\cdot v'$$"},
    {id:"formule-derivee-quotient", type:"formule", q:"Dérivée d'un quotient $u/v$ (lorsque $0\\notin v(E)$)", a:"$$\\left(\\dfrac{u}{v}\\right)'=\\dfrac{u'\\cdot v-u\\cdot v'}{v^2}$$"},
    {id:"formule-derivee-composee", type:"formule", q:"Dérivée d'une composée $h\\circ u$", a:"$$(h\\circ u)'=u'\\cdot(h'\\circ u)$$ Autrement dit, pour $x\\mapsto (f\\circ u)(x)=f(u(x))$ : $$x\\mapsto u'(x)f'(u(x))$$"},
    {id:"formule-derivee-puissance", type:"formule", q:"Dérivée de $x\\mapsto x^\\alpha$ et de $x\\mapsto u(x)^\\alpha$", a:"$$x\\mapsto x^\\alpha,\\ x'\\mapsto \\alpha x^{\\alpha-1} \\quad \\text{sur } \\mathbb{R}_+^*,\\ \\alpha\\in\\mathbb{R}$$ $$x\\mapsto u(x)^\\alpha,\\ x'\\mapsto \\alpha u'(x)u(x)^{\\alpha-1}$$"},
    {id:"formule-derivee-exp-ln", type:"formule", q:"Dérivées de $e^x$, $e^{u(x)}$, $\\ln|x|$ et $\\ln|u(x)|$", a:"$$e^x{}'=e^x \\ \\text{sur } \\mathbb{R}, \\qquad (e^{u(x)})'=u'(x)e^{u(x)}$$ $$(\\ln|x|)'=\\dfrac{1}{x} \\ \\text{sur } \\mathbb{R}^*, \\qquad (\\ln|u(x)|)'=\\dfrac{u'(x)}{u(x)}$$"},
    {id:"formule-derivee-trigonometrique", type:"formule", q:"Dérivées de $\\sin$, $\\cos$, $\\tan$ (et de leurs composées $\\sin u(x)$, $\\cos u(x)$, $\\tan u(x)$)", a:"$$\\sin'=\\cos,\\quad \\cos'=-\\sin \\quad \\text{sur } \\mathbb{R}$$ $$(\\sin u(x))'=u'(x)\\cos u(x), \\quad (\\cos u(x))'=-u'(x)\\sin u(x)$$ $$\\tan'=\\dfrac{1}{\\cos^2}=1+\\tan^2 \\quad \\text{sur } \\mathbb{R}-\\left\\{\\dfrac{\\pi}{2}+k\\pi,\\ k\\in\\mathbb{Z}\\right\\}$$ $$(\\tan u(x))'=\\dfrac{u'(x)}{\\cos^2 u(x)}=u'(x)(1+\\tan^2 u(x))$$"},
    {id:"formule-derivee-arc-trigonometrique", type:"formule", q:"Dérivées de $\\text{Arcsin}$, $\\text{Arccos}$, $\\text{Arctan}$ (et de leurs composées)", a:"$$\\text{Arcsin}'(x)=\\dfrac{1}{\\sqrt{1-x^2}}, \\quad \\text{Arccos}'(x)=\\dfrac{-1}{\\sqrt{1-x^2}} \\quad \\text{sur } ]{-1};1[$$ $$(\\text{Arcsin}\\,u(x))'=\\dfrac{u'(x)}{\\sqrt{1-u(x)^2}}, \\quad (\\text{Arccos}\\,u(x))'=\\dfrac{-u'(x)}{\\sqrt{1-u(x)^2}}$$ $$\\text{Arctan}'(x)=\\dfrac{1}{1+x^2} \\ \\text{sur } \\mathbb{R}, \\qquad (\\text{Arctan}\\,u(x))'=\\dfrac{u'(x)}{1+u(x)^2}$$"},
    {id:"formule-derivee-hyperbolique", type:"formule", q:"Dérivées de $\\text{sh}$, $\\text{ch}$ (et de leurs composées)", a:"$$\\text{sh}'=\\text{ch}, \\quad \\text{ch}'=\\text{sh} \\quad \\text{sur } \\mathbb{R}$$ $$(\\text{sh}\\,u(x))'=u'(x)\\text{ch}\\,u(x), \\quad (\\text{ch}\\,u(x))'=u'(x)\\text{sh}\\,u(x)$$"},
  ]
});
