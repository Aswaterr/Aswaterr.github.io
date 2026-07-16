/* Cours : Physique — S1 Propagation de signaux physiques */
window.OSCILLO_COURSES = window.OSCILLO_COURSES || [];
window.OSCILLO_COURSES.push({
  subject: "physique",
  id: "s1",
  name: "Propagation de signaux physiques",
  cards: [
    {id:"def-signal", type:"def", q:"Qu'est-ce qu'un signal physique ?", a:"Une grandeur physique qui dépend du temps. Exemples : signaux mécaniques, électriques, électromagnétiques, quantiques, thermiques."},
    {id:"def-periodique", type:"def", q:"Définition d'un signal périodique", a:"Les variations de son amplitude se reproduisent régulièrement au bout d'une période $T$ constante, appelée période."},
    {id:"def-sinusoidal", type:"formule", q:"Écrire un signal sinusoïdal $s(t)$ et les relations pulsation / fréquence / période", a:"$$s(t) = A\\cos(\\omega t + \\varphi)$$ avec $\\omega = \\dfrac{2\\pi}{T} = 2\\pi f$ et $f = \\dfrac{1}{T} = \\dfrac{\\omega}{2\\pi}$"},
    {id:"formule-battements", type:"formule", q:"Formule de la période de battement $T_{batt}$ entre deux signaux de fréquences $f_1$ et $f_2$ proches", a:"$$T_{batt} = \\left|\\dfrac{1}{f_1-f_2}\\right|$$"},
    {id:"methode-battements", type:"méthode", q:"Superposition de deux signaux sinusoïdaux de fréquences proches : les 4 étapes de la méthode ?", a:"1. Sommer $s = s_1 + s_2$.<br>2. Utiliser $\\cos p+\\cos q = 2\\cos\\frac{p+q}{2}\\cos\\frac{p-q}{2}$.<br>3. Identifier le terme rapide (fréquence $\\frac{f_1+f_2}{2}$) et le terme lent = enveloppe (fréquence $\\left|\\frac{f_1-f_2}{2}\\right|$).<br>4. La période de l'enveloppe = demi-période du terme lent."},
    {id:"def-onde", type:"def", q:"Définition d'une onde", a:"Phénomène de propagation de proche en proche d'une perturbation (vibration ou grandeur vibrante), sans transport de matière."},
    {id:"def-onde-1d", type:"def", q:"Onde unidimensionnelle : définition et notation", a:"Propagation dans une seule direction de l'espace ; la grandeur vibrante s'écrit $s(x,t)$."},
    {id:"formule-onde-prog", type:"formule", q:"Onde progressive unidimensionnelle à célérité $c$ : formes possibles de $s(x,t)$ ?", a:"Sens $+\\vec{u}_x$ : $s(x,t) = f\\left(t-\\dfrac{x}{c}\\right) = F(x-ct)$<br>Sens $-\\vec{u}_x$ : $s(x,t) = g\\left(t+\\dfrac{x}{c}\\right) = G(x+ct)$"},
    {id:"formule-onde-sin", type:"formule", q:"Onde progressive sinusoïdale : expression et vecteur d'onde $k$", a:"$$s(x,t) = A\\cos(\\omega t \\pm kx + \\varphi)$$ avec $k = \\dfrac{\\omega}{c}$, le vecteur d'onde (ou pulsation spatiale)"},
    {id:"table-periode", type:"formule", q:"Relations période / fréquence / pulsation : temporelles vs spatiales ?", a:"Temporelle : $T=\\lambda/c$, $f=1/T$, $\\omega=2\\pi f$<br>Spatiale : $\\lambda=cT$, $\\sigma=1/\\lambda$, $k=2\\pi/\\lambda$"},
    {id:"def-milieu-dispersif", type:"def", q:"Définition d'un milieu dispersif", a:"Milieu dans lequel la vitesse de propagation d'une onde progressive sinusoïdale dépend de sa fréquence."}
  ]
});
