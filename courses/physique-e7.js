/* Cours : Physique — E7 : Filtrage d'un signal périodique */
window.OSCILLO_COURSES = window.OSCILLO_COURSES || [];
window.OSCILLO_COURSES.push({
  subject: "physique",
  id: "e7",
  name: "Filtrage d'un signal périodique",
  cards: [
    {id:"def-valeur-moyenne", type:"def", q:"Définir la valeur moyenne d'un signal périodique", a:"$$\\langle s\\rangle=\\dfrac{1}{T}\\int_t^{t+T}s(t')\\,dt'$$ C'est la valeur de la composante continue du signal."},
    {id:"def-decomposition-fourier", type:"def", q:"Énoncer la décomposition en série de Fourier d'un signal périodique", a:"Tout signal périodique (fréquence $f$, période $T$, pulsation $\\omega$) est la superposition de sinusoïdes de pulsations $\\omega_k=k\\omega$ : $$s(t)=S_0+\\sum_{k=1}^{+\\infty}S_k\\cos(\\omega_k t+\\varphi_k)$$ $S_k$ et $\\varphi_k$ sont les coefficients de Fourier."},
    {id:"def-valeur-efficace", type:"def", q:"Définir la valeur efficace d'un signal périodique et son expression pour une sinusoïde", a:"$$s_{eff}=\\sqrt{\\langle s^2(t)\\rangle}=\\sqrt{\\dfrac{1}{T}\\int_0^T s^2(t)\\,dt}$$ Pour $s(t)=S_m\\cos(\\omega t+\\varphi)$ : $S_{eff}=\\dfrac{S_m}{\\sqrt{2}}$."},
    {id:"formule-parseval", type:"formule", q:"Énoncer le théorème de Parseval", a:"Pour $s(t)=S_0+\\sum_{k=1}^{+\\infty}S_k\\cos(\\omega_k t+\\varphi_k)$ : $$S_{eff}^2=\\sum_{k=0}^{+\\infty}S_{k,eff}^2$$"},
    {id:"methode-reponse-filtre-signal-periodique", type:"méthode", q:"Comment un filtre agit-il sur un signal d'entrée périodique ?", a:"Le signal de sortie est la superposition des réponses du filtre à chaque harmonique de l'entrée $e(t)=E_0+\\sum_k E_k\\cos(k\\omega t+\\varphi_k)$ : $$s(t)=G(0)E_0+\\sum_{k=1}^{+\\infty}G(k\\omega)E_k\\cos(k\\omega t+\\varphi_k+\\varphi(k\\omega))$$"},
    {id:"propriete-enrichissement-spectre", type:"propriété", q:"Comment un système non linéaire modifie-t-il le spectre d'un signal ? Exemple du multiplieur", a:"Un système non linéaire enrichit le spectre de fréquences absentes du signal d'entrée.<br>Exemple (multiplieur) : $s(t)=k\\,e(t)^2=kE_0^2\\dfrac{1+\\cos(2\\omega t)}{2}$ : un terme en $\\omega$ génère un terme constant et un terme en $2\\omega$."}
  ]
});
