/* Cours : Physique — M5 : Moment cinétique d'un point matériel */
window.OSCILLO_COURSES = window.OSCILLO_COURSES || [];
window.OSCILLO_COURSES.push({
  subject: "physique",
  id: "m5",
  name: "Moment cinétique d'un point matériel",
  cards: [
    {id:"formule-moment-cinetique-point", type:"formule", q:"Moment cinétique d'un point matériel par rapport à un point fixe A", a:"$$\\vec{L_A}(M)=\\overrightarrow{AM}\\wedge\\vec{p}(M)=\\overrightarrow{AM}\\wedge m\\vec{v}(M)$$ $\\|\\vec{L_A}(M)\\|$ en J.s. Indique si $M$ tourne vite et/ou à grande distance de $A$."},
    {id:"formule-moment-cinetique-axe", type:"formule", q:"Moment cinétique par rapport à un axe fixe ∆, et signification du signe", a:"Pour $\\Delta$ dirigé par $\\vec{u_\\Delta}$ et $A\\in\\Delta$ : $$L_\\Delta(M)=\\vec{L_A}(M)\\cdot\\vec{u_\\Delta}$$ $L_\\Delta>0$ : rotation directe autour de $\\Delta$.<br>$L_\\Delta<0$ : rotation indirecte.<br>$L_\\Delta=0$ : $M$ ne tourne pas autour de $\\Delta$.<br>Expression indépendante du choix de $A$ sur $\\Delta$."},
    {id:"formule-moment-cinetique-systeme", type:"formule", q:"Moment cinétique d'un système discret de points matériels", a:"Par rapport à un point A : $$\\vec{L_A}=\\sum_i \\vec{L_A}(M_i)=\\sum_i \\overrightarrow{AM_i}\\wedge m_i\\vec{v_i}$$ Par rapport à un axe ∆ : $$L_\\Delta=\\vec{L_A}\\cdot\\vec{u_\\Delta}=\\sum_i L_\\Delta(M_i)$$"},
    {id:"formule-moment-force-point", type:"formule", q:"Moment d'une force par rapport à un point fixe A", a:"$$\\vec{\\mathcal{M}_A}(\\vec{F})=\\overrightarrow{AM}\\wedge\\vec{F}$$ Caractérise la tendance de $\\vec{F}$ à faire tourner $M$ autour de $A$."},
    {id:"formule-moment-force-axe", type:"formule", q:"Moment d'une force par rapport à un axe fixe ∆ (bras de levier)", a:"$$\\mathcal{M}_\\Delta(\\vec{F})=\\vec{\\mathcal{M}_A}(\\vec{F})\\cdot\\vec{u_\\Delta}=\\pm F\\,d$$ $d$ : bras de levier = distance entre la droite d'action de la force et l'axe."},
    {id:"formule-theoreme-moment-cinetique", type:"formule", q:"Énoncer le théorème du moment cinétique (point fixe et axe fixe), référentiel galiléen", a:"Par rapport à un point fixe A : $$\\dfrac{d\\vec{L_A}(M)}{dt}=\\sum \\vec{\\mathcal{M}_A}(\\vec{F}_{ext})$$ Par rapport à un axe fixe ∆ : $$\\dfrac{dL_\\Delta(M)}{dt}=\\sum \\mathcal{M}_\\Delta(\\vec{F}_{ext})$$"},
    {id:"methode-appliquer-tmc", type:"méthode", q:"Méthode : appliquer le théorème du moment cinétique pour établir une équation du mouvement", a:"1. Choisir le point fixe A ou l'axe fixe ∆ le plus pertinent (souvent le centre de la trajectoire circulaire, ou l'axe de rotation).<br>2. Exprimer $\\vec{L_A}(M)$ (ou $L_\\Delta$) en fonction des coordonnées choisies (souvent polaires : $L_\\Delta=mr^2\\dot\\theta$ si $r$ fixe).<br>3. Calculer le moment de chaque force appliquée par rapport au même point/axe (les forces centrales ou passant par l'axe ont un moment nul).<br>4. Appliquer le TMC et simplifier pour obtenir l'équation différentielle en $\\theta$."}
  ]
});
