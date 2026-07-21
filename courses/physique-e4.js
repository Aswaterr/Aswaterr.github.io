/* Cours : Physique — E4 : Oscillateurs amortis */
window.OSCILLO_COURSES = window.OSCILLO_COURSES || [];
window.OSCILLO_COURSES.push({
  subject: "physique",
  id: "e4",
  name: "Oscillateurs amortis",
  cards: [
    {id:"def-oscillateur-mecanique-amorti", type:"def", q:"Équation du mouvement d'un oscillateur mécanique amorti (masse-ressort + frottement fluide $\\vec{f}=-\\alpha\\vec{v}$)", a:"$$\\dfrac{d^2x}{dt^2}+\\dfrac{\\alpha}{m}\\dfrac{dx}{dt}+\\dfrac{k}{m}x=\\dfrac{k}{m}l_0$$ avec $\\alpha>0$ la constante de frottement fluide, $[\\alpha]=M\\cdot T^{-1}$."},
    {id:"def-oscillateur-electrique-amorti", type:"def", q:"Équation vérifiée par $u_C$ dans un circuit RLC série (régime libre)", a:"Loi des mailles $u_C+u_R+u_L=0$ conduit à : $$\\dfrac{d^2u_C}{dt^2}+\\dfrac{R}{L}\\dfrac{du_C}{dt}+\\dfrac{1}{LC}u_C=0$$"},
    {id:"formule-equation-canonique-amorti", type:"formule", q:"Forme canonique de l'équation d'un oscillateur amorti", a:"$$\\dfrac{d^2s}{dt^2}+\\dfrac{\\omega_0}{Q}\\dfrac{ds}{dt}+\\omega_0^2 s=a$$ $\\omega_0$ : pulsation propre (rad/s) ; $Q$ : facteur de qualité (sans unité)."},
    {id:"propriete-analogie-rlc-mecanique-amorti", type:"propriété", q:"Établir l'analogie complète entre RLC série et oscillateur mécanique amorti", a:"$\\omega_0=\\dfrac{1}{\\sqrt{LC}}$ ↔ $\\omega_0=\\sqrt{\\dfrac{k}{m}}$ ; $Q=\\dfrac{1}{R}\\sqrt{\\dfrac{L}{C}}$ ↔ $Q=\\dfrac{\\sqrt{km}}{\\alpha}$.<br>Inductance $L$ ↔ masse $m$ ; $1/C$ ↔ raideur $k$ ; résistance $R$ ↔ constante de frottement $\\alpha$ (coefficients d'amortissement)."},
    {id:"propriete-limite-q-infini", type:"propriété", q:"Que se passe-t-il quand $R\\to 0$ (ou $\\alpha\\to 0$) ?", a:"$Q\\to+\\infty$ : on retrouve l'oscillateur harmonique (non amorti)."},
    {id:"methode-discriminant-regimes", type:"méthode", q:"Décrire la méthode pour identifier le régime d'un oscillateur amorti à partir de l'équation caractéristique", a:"Équation caractéristique : $r^2+\\dfrac{\\omega_0}{Q}r+\\omega_0^2=0$.<br>Discriminant : $\\Delta=\\omega_0^2\\left(\\dfrac{1}{Q^2}-4\\right)$.<br>$\\Delta>0 \\Leftrightarrow Q<\\frac{1}{2}$ : apériodique ; $\\Delta<0 \\Leftrightarrow Q>\\frac{1}{2}$ : pseudo-périodique ; $\\Delta=0 \\Leftrightarrow Q=\\frac{1}{2}$ : critique."},
    {id:"formule-regime-aperiodique", type:"formule", q:"Régime apériodique : racines et solution", a:"Deux racines réelles $$r_\\pm=-\\dfrac{\\omega_0}{2Q}\\pm\\dfrac{\\omega_0\\sqrt{\\frac{1}{Q^2}-4}}{2}$$ Solution : $s_h(t)=S_+\\exp(r_+t)+S_-\\exp(r_-t)$. Durée du régime transitoire : $\\tau_a\\approx\\dfrac{5}{Q\\omega_0}$ (si $Q\\to 0$)."},
    {id:"formule-regime-pseudoperiodique", type:"formule", q:"Régime pseudo-périodique : racines et solution", a:"Racines complexes $r_\\pm=-\\dfrac{1}{\\tau}\\pm i\\Omega$. Solution : $$s_h(t)=(S_1\\cos(\\Omega t)+S_2\\sin(\\Omega t))\\exp\\left(-\\dfrac{t}{\\tau}\\right)$$ Pseudo-période $T=\\dfrac{2\\pi}{\\Omega}$. Durée du régime transitoire : $\\tau_{pp}=5\\tau=\\dfrac{10Q}{\\omega_0}$."},
    {id:"formule-regime-critique", type:"formule", q:"Régime critique : racine et solution", a:"Racine double $r=-\\omega_0$. Solution : $$s_h(t)=(S_1t+S_2)\\exp(-\\omega_0 t)$$ Durée du régime transitoire : $\\tau_c=\\dfrac{5}{\\omega_0}$."},
    {id:"formule-bilan-puissance-rlc-libre", type:"formule", q:"Bilan de puissance d'un RLC série en régime libre", a:"$$\\dfrac{d}{dt}\\left(\\dfrac{q^2}{2C}\\right)+\\dfrac{d}{dt}\\left(\\dfrac{Li^2}{2}\\right)+Ri^2=0 \\quad\\Rightarrow\\quad \\dfrac{dE_{tot}}{dt}=-Ri^2$$ Par analogie mécanique : $\\dfrac{dE_m}{dt}=-\\alpha v^2$."},
    {id:"propriete-decroissance-energie", type:"propriété", q:"Que dire de l'énergie totale d'un oscillateur amorti au cours du temps ?", a:"Elle décroît au cours du temps sous l'effet des effets dissipatifs (effet Joule ou frottement), jusqu'à s'annuler (régime libre)."}
  ]
});
