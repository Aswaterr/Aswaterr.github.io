/* Cours : Mathématiques — Ch.3 : Fonctions usuelles */
window.OSCILLO_COURSES = window.OSCILLO_COURSES || [];
window.OSCILLO_COURSES.push({
  subject: "maths",
  id: "m3",
  name: "Fonctions usuelles",
  cards: [
    {id:"def-intervalle", type:"def", q:"Définir un intervalle de $\\mathbb R$", a:"$I\\subset\\mathbb R$ est un intervalle si $\\forall a,b\\in I, \\forall x\\in\\mathbb R, (a\\le x\\le b \\Rightarrow x\\in I)$ (I est \"convexe\")."},
    {id:"prop-ln-fiche", type:"propriété", q:"Fiche complète de $\\ln$ : domaine, arrivée, dérivée, tableau, limites", a:"$D=]0,+\\infty[$, arrivée $\\mathbb R$. Dérivable, $\\ln'(x)=1/x$. Strictement croissante. $\\ln(1)=0$. Limites : $\\lim_{0^+}\\ln=-\\infty$, $\\lim_{+\\infty}\\ln=+\\infty$. Formulaire : $\\ln(ab)=\\ln a+\\ln b$, $\\ln(a/b)=\\ln a-\\ln b$, $\\ln(a^n)=n\\ln a$."},
    {id:"prop-exp-fiche", type:"propriété", q:"Fiche complète de $\\exp$ : domaine, arrivée, dérivée, tableau, limites", a:"$D=\\mathbb R$, arrivée $]0,+\\infty[$. $\\exp'=\\exp$. Strictement croissante. $\\exp(0)=1$. Limites : $\\lim_{-\\infty}\\exp=0$, $\\lim_{+\\infty}\\exp=+\\infty$. Formulaire : $e^{a+b}=e^ae^b$, $e^{-a}=1/e^a$, $(e^a)^n=e^{na}$."},
    {id:"prop-ch-fiche", type:"propriété", q:"Fiche complète de $\\mathrm{ch}$ (cosinus hyperbolique)", a:"$\\mathrm{ch}(x)=\\dfrac{e^x+e^{-x}}{2}$. $D=\\mathbb R$, arrivée $[1,+\\infty[$. Paire. $\\mathrm{ch}'=\\mathrm{sh}$. $\\mathrm{ch}(0)=1$."},
    {id:"prop-sh-fiche", type:"propriété", q:"Fiche complète de $\\mathrm{sh}$ (sinus hyperbolique)", a:"$\\mathrm{sh}(x)=\\dfrac{e^x-e^{-x}}{2}$. $D=\\mathbb R$, arrivée $\\mathbb R$. Impaire, strictement croissante. $\\mathrm{sh}'=\\mathrm{ch}$. $\\mathrm{sh}(0)=0$."},
    {id:"prop-puissance-fiche", type:"propriété", q:"Fonction puissance $x\\mapsto x^\\alpha$ ($\\alpha\\in\\mathbb R$) : définition et dérivée", a:"Pour $x>0$ : $x^\\alpha = e^{\\alpha\\ln x}$. Dérivée : $(x^\\alpha)' = \\alpha x^{\\alpha-1}$. Croissante si $\\alpha>0$, décroissante si $\\alpha<0$."},
    {id:"prop-arcsin-fiche", type:"propriété", q:"Fiche complète de Arcsin", a:"$D=[-1,1]$, arrivée $[-\\frac\\pi2,\\frac\\pi2]$. Dérivable sur $]-1,1[$ : $\\mathrm{Arcsin}'(x)=\\dfrac{1}{\\sqrt{1-x^2}}$. Impaire, strictement croissante. Réciproque de $\\sin_{|[-\\pi/2,\\pi/2]}$."},
    {id:"prop-arccos-fiche", type:"propriété", q:"Fiche complète de Arccos", a:"$D=[-1,1]$, arrivée $[0,\\pi]$. Dérivable sur $]-1,1[$ : $\\mathrm{Arccos}'(x)=\\dfrac{-1}{\\sqrt{1-x^2}}$. Strictement décroissante. Réciproque de $\\cos_{|[0,\\pi]}$."},
    {id:"prop-arctan-fiche", type:"propriété", q:"Fiche complète de Arctan", a:"$D=\\mathbb R$, arrivée $]-\\frac\\pi2,\\frac\\pi2[$. $\\mathrm{Arctan}'(x)=\\dfrac{1}{1+x^2}$. Impaire, strictement croissante. Limites : $\\pm\\frac\\pi2$ en $\\pm\\infty$."},
    {id:"prop-arcsin-arccos-somme", type:"propriété", q:"Relation entre Arcsin et Arccos", a:"$\\forall x\\in[-1,1], \\; \\mathrm{Arcsin}(x)+\\mathrm{Arccos}(x) = \\dfrac{\\pi}{2}$"},
    {id:"prop-arctan-inverse", type:"propriété", q:"Relation entre $\\mathrm{Arctan}(x)$ et $\\mathrm{Arctan}(1/x)$", a:"Pour $x>0$ : $\\mathrm{Arctan}(x)+\\mathrm{Arctan}(1/x)=\\dfrac\\pi2$&lt;br&gt;Pour $x<0$ : $\\mathrm{Arctan}(x)+\\mathrm{Arctan}(1/x)=-\\dfrac\\pi2$"}
  ]
});
