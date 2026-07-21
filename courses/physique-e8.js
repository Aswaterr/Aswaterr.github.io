/* Cours : Physique — E8 : Amplificateur linéaire intégré */
window.OSCILLO_COURSES = window.OSCILLO_COURSES || [];
window.OSCILLO_COURSES.push({
  subject: "physique",
  id: "e8",
  name: "Amplificateur linéaire intégré",
  cards: [
    {id:"def-ali", type:"def", q:"Qu'est-ce qu'un amplificateur linéaire intégré (ALI) ? Décrire ses bornes", a:"Multipôle actif (nécessite une alimentation).<br>Entrée non-inverseuse ($+$), entrée inverseuse ($-$), courants de polarisation $i_+$, $i_-$, tension différentielle $\\varepsilon=v_+-v_-$."},
    {id:"propriete-ali-ideal", type:"propriété", q:"Caractéristiques du modèle de l'ALI idéal", a:"Impédance d'entrée infinie $\\Rightarrow i_+=i_-=0$.<br>Impédance de sortie nulle.<br>Gain $\\left|\\dfrac{v_s}{\\varepsilon}\\right|$ infini et indépendant de la fréquence.<br>Tension de sortie nulle en l'absence de signal d'entrée."},
    {id:"propriete-regimes-ali", type:"propriété", q:"Décrire les deux régimes de fonctionnement d'un ALI", a:"Régime linéaire : $\\varepsilon=0$ (nécessite une rétroaction négative, c'est-à-dire un bouclage sur l'entrée $-$).<br>Régime saturé : $$v_s=\\begin{cases}V_{sat}^+ & \\text{si } \\varepsilon>0\\\\ V_{sat}^- & \\text{si } \\varepsilon<0\\end{cases}$$"},
    {id:"formule-montage-suiveur", type:"formule", q:"Relation entrée/sortie du montage suiveur", a:"$$s(t)=e(t)$$"},
    {id:"formule-montage-non-inverseur", type:"formule", q:"Relation entrée/sortie du montage non inverseur (résistances $R_1$, $R_2$)", a:"$$s(t)=\\left(1+\\dfrac{R_2}{R_1}\\right)e(t)$$"},
    {id:"formule-montage-inverseur", type:"formule", q:"Relation entrée/sortie du montage inverseur (résistances $R_1$, $R_2$)", a:"$$s(t)=-\\dfrac{R_2}{R_1}e(t)$$"},
    {id:"formule-montage-integrateur", type:"formule", q:"Relation entrée/sortie du montage intégrateur (résistance $R$, capacité $C$)", a:"$$\\underline{s}(t)=-\\dfrac{1}{jRC\\omega}\\underline{e}(t) \\quad\\Longleftrightarrow\\quad s(t)=-\\dfrac{1}{RC}\\int e(t)\\,dt$$"}
  ]
});
