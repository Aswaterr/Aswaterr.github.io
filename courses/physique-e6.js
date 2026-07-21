/* Cours : Physique — E6 : Filtrage linéaire passif */
window.OSCILLO_COURSES = window.OSCILLO_COURSES || [];
window.OSCILLO_COURSES.push({
  subject: "physique",
  id: "e6",
  name: "Filtrage linéaire passif",
  cards: [
    {id:"def-quadripole-fonction-transfert", type:"def", q:"Définir la fonction de transfert d'un quadripôle linéaire", a:"En régime sinusoïdal forcé ($e(t)$, $s(t)$ de même pulsation) : $$\\underline{H}(j\\omega)=\\dfrac{\\underline{s}}{\\underline{e}}=\\dfrac{N(j\\omega)}{D(j\\omega)}$$ Le degré de $D(j\\omega)$ est l'ordre de la fonction de transfert."},
    {id:"formule-gain-phase", type:"formule", q:"Définir le gain et la phase d'une fonction de transfert", a:"$$G(\\omega)=|\\underline{H}(j\\omega)|=\\dfrac{S_m}{E_m} \\qquad \\varphi(\\omega)=\\arg(\\underline{H}(j\\omega))=\\varphi_s-\\varphi_e$$"},
    {id:"formule-gain-decibel", type:"formule", q:"Définir le gain en décibel", a:"$$G_{dB}=20\\log(G(\\omega))$$"},
    {id:"def-diagramme-bode", type:"def", q:"Qu'est-ce que le diagramme de Bode ?", a:"Ensemble des courbes représentatives du gain en décibel et de la phase de la fonction de transfert, en fonction de $\\log(\\omega/\\omega_0)$ ou de $\\omega$ en échelle logarithmique (diagramme réel et diagramme asymptotique)."},
    {id:"def-bande-passante", type:"def", q:"Définir la pulsation de coupure et la bande passante d'un filtre", a:"Pulsation de coupure $\\omega_c$ telle que $G(\\omega_c)=\\dfrac{G_{max}}{\\sqrt{2}}$.<br>Bande passante : intervalle de pulsations où $G(\\omega)\\geq G(\\omega_c)$, soit $G_{dB}\\geq G_{dB,max}-3\\,\\text{dB}$."},
    {id:"propriete-integrateur-derivateur", type:"propriété", q:"Caractériser un filtre intégrateur et un filtre dérivateur", a:"Intégrateur : $H(j\\omega)\\propto\\dfrac{1}{j\\omega}$, pente $-20\\,\\text{dB/décade}$, $\\varphi=-\\dfrac{\\pi}{2}$.<br>Dérivateur : $H(j\\omega)\\propto j\\omega$, pente $+20\\,\\text{dB/décade}$, $\\varphi=\\dfrac{\\pi}{2}$."},
    {id:"formule-passe-haut-ordre1", type:"formule", q:"Fonction de transfert et comportement d'un filtre passe-haut d'ordre 1", a:"$$H(j\\omega)=\\dfrac{H_0\\,j\\frac{\\omega}{\\omega_0}}{1+j\\frac{\\omega}{\\omega_0}}$$ BF : $\\varphi=\\pi/2$, $G_{dB}$ pente $+20\\,\\text{dB/déc}$. HF : $\\varphi=0$, $G_{dB}\\approx 20\\log H_0$. Bande passante : $[\\omega_c;+\\infty[$."},
    {id:"formule-passe-bas-ordre1", type:"formule", q:"Fonction de transfert et comportement d'un filtre passe-bas d'ordre 1", a:"$$H(j\\omega)=\\dfrac{H_0}{1+j\\frac{\\omega}{\\omega_0}}$$ BF : $\\varphi=0$, $G_{dB}\\approx 20\\log H_0$. HF : $\\varphi=-\\pi/2$, pente $-20\\,\\text{dB/déc}$. Bande passante : $]0;\\omega_c]$."},
    {id:"formule-passe-bas-ordre2", type:"formule", q:"Fonction de transfert d'un filtre passe-bas d'ordre 2 et comportement HF", a:"$$H(j\\omega)=\\dfrac{H_0}{1+j\\frac{x}{Q}-x^2} \\quad (x=\\omega/\\omega_0)$$ HF : $\\varphi\\to-\\pi$, $G_{dB}\\approx 20\\log H_0-40\\log(x)$ (pente $-40\\,\\text{dB/déc}$). Peut présenter une résonance selon $Q$."},
    {id:"formule-passe-bande-ordre2", type:"formule", q:"Fonction de transfert et bande passante d'un filtre passe-bande d'ordre 2", a:"$$H(j\\omega)=\\dfrac{H_0}{1+jQ\\left(x-\\frac{1}{x}\\right)}$$ BF : $\\varphi=\\pi/2$ ; HF : $\\varphi=-\\pi/2$. Bande passante $[\\omega_{c1};\\omega_{c2}]$ avec $\\Delta\\omega=\\dfrac{\\omega_0}{Q}$."},
    {id:"methode-association-cascade", type:"méthode", q:"À quelle condition peut-on écrire $H=H_1\\times H_2$ pour deux filtres en cascade ?", a:"Si le second filtre a une impédance d'entrée $Z_e=+\\infty$ et le premier une impédance de sortie $Z_s=0$ : alors le second n'influence pas le premier et $$\\underline{H}(j\\omega)=\\underline{H_1}\\times\\underline{H_2}$$"}
  ]
});
