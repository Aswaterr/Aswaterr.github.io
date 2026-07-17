/* Cours : Maths — Chapitre 3 : Fonctions usuelles */
window.OSCILLO_COURSES = window.OSCILLO_COURSES || [];
window.OSCILLO_COURSES.push({
  subject: "maths",
  id: "m3",
  name: "Fonctions usuelles",
  cards: [
    {id:"propriete-fondamentale-derivee-nulle", type:"propriété", q:"Que peut-on dire d'une fonction dérivable à dérivée nulle sur un intervalle ?", a:"Si $f$ est dérivable sur un intervalle $I$ et $f'=0$ sur $I$, alors $f$ est constante sur $I$.<br>Attention : ceci nécessite que le domaine soit un intervalle — faux sinon."},
    {id:"def-ln", type:"def", q:"Définition de la fonction ln", a:"La primitive de la fonction inverse $x\\mapsto\\frac{1}{x}$ sur $\\mathbb{R}_+^*$ qui s'annule en 1 : $\\ln:\\mathbb{R}_+^*\\to\\mathbb{R}$."},
    {id:"propriete-ln-derivee", type:"formule", q:"Dérivée de ln", a:"$$\\ln'(x)=\\dfrac{1}{x}\\ \\text{sur}\\ \\mathbb{R}_+^*$$ ln est croissante."},
    {id:"propriete-ln-formulaire", type:"formule", q:"Formulaire de ln : $\\ln(xy)$, $\\ln(x/y)$, $\\ln(1/x)$", a:"$\\ln(xy)=\\ln(x)+\\ln(y)$<br>$\\ln(x/y)=\\ln(x)-\\ln(y)$<br>$\\ln(1/x)=-\\ln(x)$"},
    {id:"propriete-ln-puissance", type:"formule", q:"$\\ln(x^n)$ pour $x>0$, $n\\in\\mathbb{Z}$", a:"$$\\ln(x^n) = n\\cdot\\ln(x)$$"},
    {id:"propriete-ln-inegalite", type:"propriété", q:"Inégalité utile : $\\ln(1+x)$", a:"$$\\forall x\\in\\,]-1;+\\infty[,\\quad \\ln(1+x) \\leq x$$"},
    {id:"propriete-ln-limites", type:"propriété", q:"Limites classiques de ln en 1", a:"$$\\lim_{x\\to 1}\\dfrac{\\ln(x)}{x-1} = 1 \\qquad \\lim_{h\\to 0}\\dfrac{\\ln(1+h)}{h} = 1$$"},
    {id:"def-exp", type:"def", q:"Définition de exp", a:"La fonction réciproque de $\\ln:\\mathbb{R}_+^*\\to\\mathbb{R}$, notée $\\exp:\\mathbb{R}\\to\\mathbb{R}_+^*$.<br>$\\exp(\\ln x)=x$ et $\\ln(\\exp x)=x$."},
    {id:"propriete-exp-derivee", type:"formule", q:"Dérivée de exp", a:"$$\\exp'(x)=\\exp(x)$$ Composée : $(\\exp u)' = u'\\cdot\\exp(u)$."},
    {id:"propriete-exp-formulaire", type:"formule", q:"Formulaire de exp : $\\exp(0)$, $\\exp(x+y)$, $\\exp(-y)$", a:"$\\exp(0)=1$<br>$\\exp(x+y)=\\exp(x)\\cdot\\exp(y)$<br>$\\exp(-y)=\\dfrac{1}{\\exp(y)}$"},
    {id:"def-e", type:"def", q:"Définition du nombre $e$", a:"$e = \\exp(1) \\approx 2{,}7$. On note $e^x=\\exp(x)$."},
    {id:"propriete-exp-inegalite", type:"propriété", q:"Inégalité utile : $\\exp(x)$", a:"$$\\forall x\\in\\mathbb{R},\\quad \\exp(x) \\geq 1+x$$"},
    {id:"propriete-exp-limite", type:"propriété", q:"Limite classique de $(e^x-1)/x$ en 0", a:"$$\\lim_{x\\to 0}\\dfrac{e^x-1}{x} = 1$$"},
    {id:"def-sh-ch", type:"def", q:"Définitions de $\\text{sh}(x)$ et $\\text{ch}(x)$", a:"$$\\text{sh}(x)=\\dfrac{e^x-e^{-x}}{2}\\ \\text{(sinus hyperbolique)} \\qquad \\text{ch}(x)=\\dfrac{e^x+e^{-x}}{2}\\ \\text{(cosinus hyperbolique)}$$"},
    {id:"propriete-sh-ch-derivee-parite", type:"propriété", q:"Dérivées et parité de sh et ch", a:"$\\text{sh}'=\\text{ch}$, $\\text{ch}'=\\text{sh}$.<br>sh est impaire, ch est paire."},
    {id:"propriete-sh-ch-formulaire", type:"formule", q:"Formulaire de sh/ch : $\\text{ch}+\\text{sh}$, $\\text{ch}-\\text{sh}$, $\\text{ch}^2-\\text{sh}^2$", a:"$\\text{ch}(x)+\\text{sh}(x)=e^x$<br>$\\text{ch}(x)-\\text{sh}(x)=e^{-x}$<br>$\\text{ch}^2(x)-\\text{sh}^2(x)=1$"},
    {id:"def-fonction-puissance", type:"def", q:"Définition de la fonction puissance $x^\\alpha$ pour $x>0$", a:"$$x^\\alpha = \\exp(\\alpha\\cdot\\ln x)$$ définie sur $\\mathbb{R}_+^*$ pour $\\alpha\\in\\mathbb{R}$"},
    {id:"propriete-puissance-formulaire", type:"formule", q:"Formulaire des puissances : $x^ax^b$, $x^a/x^b$, $(x^a)^b$, $\\ln(x^a)$", a:"$x^{a+b}=x^ax^b$<br>$x^{a-b}=x^a/x^b$<br>$(x^a)^b=x^{ab}$<br>$\\ln(x^a)=a\\cdot\\ln(x)$"},
    {id:"propriete-puissance-derivee", type:"formule", q:"Dérivée de $x\\mapsto x^\\alpha$", a:"$$(x^\\alpha)' = \\alpha\\cdot x^{\\alpha-1}\\ \\text{sur}\\ \\mathbb{R}_+^*$$"},
    {id:"propriete-croissances-comparees", type:"propriété", q:"Croissances comparées : hiérarchie exponentielle / puissance / logarithme", a:"L'exponentielle l'emporte sur les puissances, qui l'emportent sur le logarithme.<br>Ex : $\\lim_{x\\to+\\infty}\\frac{e^x}{x^a}=+\\infty$, $\\lim_{x\\to 0^+}x^\\alpha|\\ln x|=0$."},
    {id:"def-log-decimal", type:"def", q:"Définition du logarithme décimal log", a:"$$\\log(x) = \\dfrac{\\ln(x)}{\\ln(10)}$$ Vérifie $\\log(10^x)=x$."},
    {id:"def-log-base-b", type:"def", q:"Définition du logarithme en base $B$", a:"$$\\log_B(x) = \\dfrac{\\ln(x)}{\\ln(B)}$$ pour $B\\in\\mathbb{R}_+^*\\setminus\\{1\\}$. Vérifie $\\log_B(B^x)=x$."},
    {id:"def-arcsin", type:"def", q:"Définition de Arcsin", a:"Réciproque de la restriction bijective $\\sin:[-\\frac{\\pi}{2};\\frac{\\pi}{2}]\\to[-1;1]$.<br>$\\text{Arcsin}:[-1;1]\\to[-\\frac{\\pi}{2};\\frac{\\pi}{2}]$."},
    {id:"propriete-arcsin-derivee", type:"formule", q:"Dérivée de Arcsin", a:"$$\\text{Arcsin}'(x) = \\dfrac{1}{\\sqrt{1-x^2}}\\ \\text{sur}\\ ]-1;1[$$ Arcsin est impaire."},
    {id:"def-arccos", type:"def", q:"Définition de Arccos", a:"Réciproque de la restriction bijective $\\cos:[0;\\pi]\\to[-1;1]$.<br>$\\text{Arccos}:[-1;1]\\to[0;\\pi]$."},
    {id:"propriete-arccos-derivee", type:"formule", q:"Dérivée de Arccos", a:"$$\\text{Arccos}'(x) = -\\dfrac{1}{\\sqrt{1-x^2}}\\ \\text{sur}\\ ]-1;1[$$"},
    {id:"propriete-arcsin-arccos-somme", type:"propriété", q:"Relation entre Arcsin et Arccos", a:"$$\\forall x\\in[-1;1],\\quad \\text{Arcsin}(x)+\\text{Arccos}(x) = \\dfrac{\\pi}{2}$$"},
    {id:"def-arctan", type:"def", q:"Définition de Arctan", a:"Réciproque de la restriction bijective $\\tan:]-\\frac{\\pi}{2};\\frac{\\pi}{2}[\\to\\mathbb{R}$.<br>$\\text{Arctan}:\\mathbb{R}\\to]-\\frac{\\pi}{2};\\frac{\\pi}{2}[$."},
    {id:"propriete-arctan-derivee", type:"formule", q:"Dérivée de Arctan", a:"$$\\text{Arctan}'(x) = \\dfrac{1}{1+x^2}\\ \\text{sur}\\ \\mathbb{R}$$ Arctan est impaire."},
    {id:"propriete-arctan-somme", type:"propriété", q:"Formule liant Arctan$(x)$ et Arctan$(1/x)$ pour $x\\neq 0$", a:"$$\\forall x\\in\\mathbb{R}^*,\\quad \\text{Arctan}(x)+\\text{Arctan}\\left(\\dfrac{1}{x}\\right) = \\dfrac{\\pi}{2}\\ \\text{si}\\ x>0,\\ -\\dfrac{\\pi}{2}\\ \\text{si}\\ x<0$$"}
  ]
});
