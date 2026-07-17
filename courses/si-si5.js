/* Cours : Sciences de l'ingénieur — Chapitre 5 : Réponses temporelles */
window.OSCILLO_COURSES = window.OSCILLO_COURSES || [];
window.OSCILLO_COURSES.push({
  subject: "si",
  id: "si5",
  name: "Réponses temporelles",
  cards: [
    {id:"def-syst-prop", type:"def", q:"Système à action proportionnelle : forme de H(p) et propriété", a:"$$H(p) = \\dfrac{S(p)}{E(p)} = K \\quad (K \\in \\mathbb{R}^+)$$ La sortie est proportionnelle à l'entrée à chaque instant : $s(t) = K.e(t)$."},
    {id:"def-syst-integrateur", type:"def", q:"Système intégrateur : équation temporelle et fonction de transfert", a:"$$\\dfrac{ds(t)}{dt} = K.e(t) \\quad\\Rightarrow\\quad H(p) = \\dfrac{S(p)}{E(p)} = \\dfrac{K}{p}$$ (sous conditions de Heaviside)."},
    {id:"exemples-integrateurs", type:"def", q:"Citer 4 exemples physiques de systèmes intégrateurs", a:"Volume d'un réservoir = intégrale du débit entrant ; charge d'un condensateur = intégrale du courant de charge ; vitesse d'un mobile = intégrale de son accélération ; position d'un axe = intégrale de sa vitesse."},
    {id:"formule-reponse-impulsionnelle-1er-ordre", type:"formule", q:"Réponse impulsionnelle d'un système du 1er ordre $H(p)=\\frac{K}{1+\\tau p}$", a:"Pour $e(t)=\\delta(t)$, $E(p)=1$ donc $S(p) = \\dfrac{K}{1+\\tau p}$, soit : $$s(t) = \\dfrac{K}{\\tau}e^{-t/\\tau}u(t)$$"},
    {id:"formule-reponse-indicielle-1er-ordre", type:"formule", q:"Réponse indicielle d'un système du 1er ordre $H(p)=\\frac{K}{1+\\tau p}$ à un échelon $e_0.u(t)$", a:"$$S(p) = \\dfrac{K}{1+\\tau p}\\cdot\\dfrac{e_0}{p} \\quad\\Rightarrow\\quad s(t) = Ke_0\\left(1-e^{-t/\\tau}\\right)u(t)$$"},
    {id:"proprietes-courbe-reponse-indicielle-1er-ordre", type:"def", q:"4 propriétés remarquables de la réponse indicielle d'un 1er ordre", a:"Pas de dépassement ; pente à l'origine non nulle ($\\frac{Ke_0}{\\tau}$) ; écart statique $\\varepsilon_s = e_0(1-K)$ (système précis si K=1) ; pour $t=\\tau$, $s(t)=63\\%s_\\infty$, pour $t=3\\tau$, $s(t)\\simeq s(t_{5\\%})$."},
    {id:"influence-tau-K-1er-ordre", type:"def", q:"Influence de τ et K sur la réponse d'un système du 1er ordre", a:"Plus τ est faible, plus le système est rapide. Plus K est proche de 1, plus le système est précis."},
    {id:"methode-identification-temporelle-1er-ordre", type:"méthode", q:"Méthode d'identification temporelle d'un système du 1er ordre (déterminer K et τ à partir d'une courbe expérimentale)", a:"1. La valeur asymptotique de la courbe vaut $Ke_0$ → permet de déterminer K.&lt;br&gt;2. Pour trouver τ, trois méthodes possibles : &lt;br&gt;— τ = temps pour lequel la sortie vaut 63% de sa valeur asymptotique&lt;br&gt;— la sortie atteint 95% de sa valeur asymptotique pour $t=3\\tau$&lt;br&gt;— la tangente à l'origine coupe l'asymptote à l'instant $t=\\tau$."},
    {id:"formule-reponse-rampe-1er-ordre", type:"formule", q:"Réponse à une rampe $e(t)=at.u(t)$ d'un système du 1er ordre $H(p)=\\frac{K}{1+\\tau p}$", a:"$$S(p) = \\dfrac{K}{1+\\tau p}\\cdot\\dfrac{a}{p^2} \\quad\\text{et}\\quad s(t) = aK\\left(t-\\tau+\\tau e^{-t/\\tau}\\right)u(t)$$"},
    {id:"def-erreur-trainage-rampe", type:"def", q:"Erreur de traînage (écart de poursuite) pour une réponse à une rampe, cas K=1", a:"Si $K=1$ : écart constant en régime permanent, appelé erreur de traînage : $$\\varepsilon_\\nu = a\\tau$$ La sortie suit l'entrée avec un retard τ."},
    {id:"def-erreur-trainage-K-diff-1", type:"def", q:"Comportement de l'écart de traînage si K ≠ 1 (réponse à une rampe)", a:"La réponse tend vers la droite $y=K.a.(t-\\tau)$, de coefficient directeur différent de celui de l'entrée. Si $K&lt;1$ : l'écart augmente indéfiniment. Si $K&gt;1$ : l'écart s'annule pour une valeur particulière de t, puis croît indéfiniment."},
  ]
});
