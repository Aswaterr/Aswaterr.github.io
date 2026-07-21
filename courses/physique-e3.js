/* Cours : Physique — E3 : Oscillateur harmonique */
window.OSCILLO_COURSES = window.OSCILLO_COURSES || [];
window.OSCILLO_COURSES.push({
  subject: "physique",
  id: "e3",
  name: "Oscillateur harmonique",
  cards: [
    {id:"formule-lc-libre", type:"formule", q:"Équation vérifiée par la charge $q$ dans un circuit LC en régime libre", a:"$$\\dfrac{d^2q}{dt^2}+\\dfrac{q}{LC}=0$$ Homogénéité : $\\left[\\dfrac{1}{LC}\\right]=T^{-2}$"},
    {id:"methode-masse-ressort", type:"méthode", q:"Établir l'équation du mouvement d'une masse accrochée à un ressort horizontal (méthode)", a:"Bilan des forces : poids $\\vec{P}$, réaction $\\vec{R}$, rappel du ressort $\\vec{F}=-k(l-l_0)\\vec{u_x}$.<br>Théorème de la quantité de mouvement, projeté sur $\\vec{u_x}$ : $$\\dfrac{d^2x}{dt^2}+\\dfrac{k}{m}x=\\dfrac{k}{m}l_0$$ Homogénéité : $\\left[\\dfrac{k}{m}\\right]=T^{-2}$"},
    {id:"def-oscillateur-harmonique", type:"def", q:"Définir un oscillateur harmonique", a:"Système physique décrit par une grandeur $s(t)$ vérifiant : $$\\dfrac{d^2s}{dt^2}+\\omega_0^2 s=a$$ $\\omega_0$ : pulsation propre, en $\\text{rad}\\cdot\\text{s}^{-1}$."},
    {id:"methode-resolution-oscillateur-harmonique", type:"méthode", q:"Résoudre l'équation différentielle d'un oscillateur harmonique $\\ddot{s}+\\omega_0^2 s=a$", a:"Solution de l'équation homogène : $s_h=A\\cos(\\omega_0 t)+B\\sin(\\omega_0 t)$.<br>Solution particulière : $s_p=\\dfrac{a}{\\omega_0^2}$.<br>Solution générale : $$s(t)=A\\cos(\\omega_0 t)+B\\sin(\\omega_0 t)+\\dfrac{a}{\\omega_0^2}$$"},
    {id:"propriete-analogie-lc-mecanique", type:"propriété", q:"Établir l'analogie entre circuit LC et oscillateur masse-ressort non amorti", a:"Charge $q_A$ ↔ élongation $u=x-l_0$ ; intensité $i=\\dot{q_A}$ ↔ vitesse $v=\\dot{u}$.<br>Pulsation propre $\\omega_0=\\dfrac{1}{\\sqrt{LC}}$ ↔ $\\omega_0=\\sqrt{\\dfrac{k}{m}}$.<br>Énergie cinétique $\\dfrac{1}{2}Li^2$ ↔ $\\dfrac{1}{2}mv^2$ ; énergie potentielle $\\dfrac{1}{2}\\dfrac{q_A^2}{C}$ ↔ $\\dfrac{1}{2}ku^2$."},
    {id:"propriete-energie-mecanique-conservee", type:"propriété", q:"Que dire de l'énergie mécanique (totale) d'un oscillateur harmonique non amorti ?", a:"L'énergie mécanique totale (cinétique + potentielle) se conserve : l'énergie oscille entre forme cinétique et forme potentielle, mais leur somme reste constante au cours du temps."}
  ]
});
