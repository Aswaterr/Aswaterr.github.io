/* Cours : Physique — T3 : Entropie et second principe */
window.OSCILLO_COURSES = window.OSCILLO_COURSES || [];
window.OSCILLO_COURSES.push({
  subject: "physique",
  id: "t3",
  name: "Entropie et second principe",
  cards: [
    {id:"def-entropie-second-principe", type:"def", q:"Énoncer le second principe de la thermodynamique (entropie, échangée, créée)", a:"À tout système est associée une fonction d'état extensive $S$ (entropie, en J.K$^{-1}$). $$\\Delta S=S_{ech}+S_{cr}$$ avec $$S_{ech}=\\sum_i \\dfrac{Q_i}{T_i}$$ ($Q_i$ : échange thermique avec la source $i$ de température $T_i$ à l'interface), et $S_{cr}\\ge0$, avec $S_{cr}=0$ pour une transformation réversible et $S_{cr}>0$ sinon."},
    {id:"formule-variation-entropie-phase-condensee", type:"formule", q:"Variation d'entropie d'une phase condensée indilatable incompressible", a:"$$\\Delta S=C\\ln\\left(\\dfrac{T_F}{T_I}\\right)$$"},
    {id:"formule-variation-entropie-gp", type:"formule", q:"Variation d'entropie d'un gaz parfait (deux expressions)", a:"$$\\Delta S=C_v\\ln\\left(\\dfrac{T_F}{T_I}\\right)+nR\\ln\\left(\\dfrac{V_F}{V_I}\\right)$$ $$\\Delta S=C_P\\ln\\left(\\dfrac{T_F}{T_I}\\right)-nR\\ln\\left(\\dfrac{P_F}{P_I}\\right)$$"},
    {id:"formule-lois-laplace", type:"formule", q:"Énoncer les lois de Laplace (GP, transformation adiabatique réversible)", a:"Pour un gaz parfait d'exposant adiabatique $\\gamma$, subissant une transformation adiabatique réversible avec seuls les travaux des forces de pression : $$PV^\\gamma=\\text{cste}_1, \\qquad TV^{\\gamma-1}=\\text{cste}_2, \\qquad T^\\gamma P^{1-\\gamma}=\\text{cste}_3$$"},
    {id:"formule-entropie-statistique", type:"formule", q:"Formule de l'entropie statistique de Boltzmann", a:"$$S=k_B\\ln\\Omega$$ $\\Omega$ : nombre de complexions = nombre de micro-états possibles dans le macro-état atteint."},
    {id:"propriete-causes-irreversibilite", type:"propriété", q:"Citer les causes usuelles de création d'entropie (irréversibilité)", a:"Transfert thermique entre deux corps à des températures différentes (écart de température fini à l'interface).<br>Frottements (mécaniques, fluides).<br>Détente ou mélange irréversible (ex. détente de Joule-Gay-Lussac, mélange de gaz).<br>Réaction chimique hors équilibre."},
    {id:"methode-calcul-entropie-creee", type:"méthode", q:"Méthode : calculer l'entropie créée au cours d'une transformation", a:"1. Calculer $\\Delta S$ du système entre l'état initial et l'état final à l'aide des formules d'état (fonction d'état : indépendant du chemin suivi), en général via $C_v\\ln(T_F/T_I)+nR\\ln(V_F/V_I)$ ou l'équivalent phase condensée.<br>2. Calculer $S_{ech}=\\sum Q_i/T_i$ à partir du bilan énergétique réel de la transformation (premier principe), en utilisant la ou les températures des sources externes à l'interface.<br>3. En déduire $S_{cr}=\\Delta S-S_{ech}$.<br>4. Vérifier la cohérence du signe : $S_{cr}\\ge0$ (sinon, erreur de calcul), et interpréter la cause physique de l'irréversibilité si $S_{cr}>0$."}
  ]
});
