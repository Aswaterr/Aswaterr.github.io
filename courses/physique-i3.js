/* Cours : Physique — I3 : Circuit mobile dans un champ magnétique stationnaire */
window.OSCILLO_COURSES = window.OSCILLO_COURSES || [];
window.OSCILLO_COURSES.push({
  subject: "physique",
  id: "i3",
  name: "Circuit mobile dans un champ magnétique stationnaire",
  cards: [
    {id:"methode-etude-rails-laplace", type:"méthode", q:"Décrire la méthode générale pour étudier des rails de Laplace (générateur ou moteur)", a:"1. Analyse physique de la situation.<br>2. Représenter le circuit équivalent avec la f.é.m. de Faraday.<br>3. Établir l'équation électrique (lois de Kirchhoff).<br>4. Établir l'équation mécanique (lois de Newton, avec la résultante des forces de Laplace).<br>5. Combiner les deux équations pour obtenir vitesse et/ou intensité.<br>6. Réaliser un bilan de puissance (× $i$ pour l'équation électrique, × $v$ pour l'équation mécanique)."},
    {id:"formule-rails-laplace-generateur", type:"formule", q:"Rails de Laplace générateur (tige soumise à une force extérieure $f$, champ $B$) : équations électrique et mécanique", a:"Électrique (loi de Faraday, $e=-aBv_x$) : $$aBv_x+Ri=0$$ Mécanique (résultante de Laplace $F_L=iaB$) : $$m\\dfrac{dv_x}{dt}=f+iaB$$"},
    {id:"formule-rails-laplace-generateur-puissance", type:"formule", q:"Rails de Laplace générateur : bilan de puissance", a:"$$Ri^2+iaBv_x=0 \\qquad \\dfrac{dE_c}{dt}=fv_x+iaBv_x \\qquad \\mathcal{P}(\\vec{f})=Ri^2+\\dfrac{dE_c}{dt}$$"},
    {id:"formule-alternateur-equations", type:"formule", q:"Alternateur (spire en rotation uniforme dans un champ $B$) : équations électrique et mécanique", a:"Électrique (loi de Faraday, $e=BS\\omega\\sin(\\omega t)$) : $$BS\\omega\\sin(\\omega t)=Ri+L\\dfrac{di}{dt}$$ Mécanique (couple de Laplace) : $$\\Gamma_{ext}-iSB\\sin(\\omega t)=0$$"},
    {id:"formule-alternateur-puissance", type:"formule", q:"Alternateur : bilan de puissance", a:"$$iBS\\omega\\sin(\\omega t)=Ri^2+\\dfrac{d}{dt}\\left(\\dfrac{1}{2}Li^2\\right) \\qquad \\Gamma_{ext}\\omega=iSB\\omega\\sin(\\omega t)$$"},
    {id:"formule-rails-laplace-moteur", type:"formule", q:"Rails de Laplace moteur (source idéale de tension $E$) : équations électrique et mécanique", a:"Électrique : $$E=Ri+aBv_x$$ Mécanique (résultante de Laplace $F_L=iaB$) : $$m\\dfrac{dv_x}{dt}=iaB$$"},
    {id:"formule-rails-laplace-moteur-puissance", type:"formule", q:"Rails de Laplace moteur : bilan de puissance", a:"$$Ri^2+iaBv_x=Ei \\qquad \\dfrac{dE_c}{dt}=iaBv_x \\qquad Ei=Ri^2+\\dfrac{dE_c}{dt}$$"},
    {id:"def-machine-courant-continu", type:"def", q:"Décrire la structure d'une machine à courant continu (stator, rotor)", a:"Stator : carcasse + supports fixes portant des aimants permanents créant un champ magnétique stationnaire.<br>Rotor : axe de rotation + disque solidaire portant de nombreux circuits électriques radiaux."},
    {id:"propriete-mcc-generateur", type:"propriété", q:"Machine à courant continu en fonctionnement générateur : décrire la chaîne de phénomènes", a:"La roue est entraînée en rotation (action extérieure) $\\Rightarrow$ f.é.m. induite dans chaque rayon $\\Rightarrow$ courant induit $\\Rightarrow$ $i$ et $\\vec{B}$ créent un moment de forces $\\vec{\\Gamma_L}$ qui s'oppose à la rotation (loi de Lenz)."},
    {id:"propriete-mcc-moteur", type:"propriété", q:"Machine à courant continu en fonctionnement moteur : décrire la chaîne de phénomènes", a:"Un générateur extérieur impose un courant $i$ le long des rayons $\\Rightarrow$ $i$ et $\\vec{B}$ créent un moment de Laplace $\\vec{\\Gamma_L}$ qui met la roue en rotation $\\Rightarrow$ le mouvement induit une f.é.m. qui s'oppose à la tension du générateur (loi de Lenz)."}
  ]
});
