/* Cours : Physique — T1 : Descriptions microscopique et macroscopique d'un système à l'équilibre thermodynamique */
window.OSCILLO_COURSES = window.OSCILLO_COURSES || [];
window.OSCILLO_COURSES.push({
  subject: "physique",
  id: "t1",
  name: "Descriptions d'un système à l'équilibre",
  cards: [
    {id:"def-equilibre-thermodynamique", type:"def", q:"Définir les trois aspects de l'équilibre thermodynamique", a:"Équilibre mécanique : la résultante des forces sur la paroi est nulle, la pression est définie en tout point et égale à la pression extérieure.<br>Équilibre thermique : la température est définie en tout point et égale à la température extérieure.<br>Équilibre chimique : la composition du système n'évolue pas."},
    {id:"formule-grandeurs-usuelles", type:"formule", q:"Définir volume molaire, masse volumique et densité particulaire", a:"Volume molaire : $$V_m=\\dfrac{V}{n} \\ (\\text{m}^3\\,\\text{mol}^{-1})$$ Masse volumique : $$\\rho=\\dfrac{m}{V} \\ (\\text{kg}\\,\\text{m}^{-3})$$ Densité particulaire : $$n^*=\\dfrac{N}{V} \\ (\\text{m}^{-3})$$"},
    {id:"formule-equation-etat-gp", type:"formule", q:"Équation d'état du gaz parfait", a:"$$PV=nRT$$ $P$ en Pa, $V$ en m$^3$, $n$ en mol, $T$ en K, $R=8{,}314\\,\\text{J.K}^{-1}\\text{.mol}^{-1}$ (constante des gaz parfaits)."},
    {id:"formule-pression-cinetique", type:"formule", q:"Expression de la pression cinétique d'un gaz parfait monoatomique", a:"$$P=\\dfrac13 n^*m^*u^2$$ $n^*$ : densité particulaire, $m^*$ : masse d'une particule, $u$ : vitesse quadratique moyenne."},
    {id:"formule-temperature-cinetique", type:"formule", q:"Lien entre température cinétique et vitesse quadratique moyenne (GP monoatomique)", a:"$$T=\\dfrac{n^*m^*u^2}{3k_B}$$ avec $k_B=\\dfrac{R}{N_A}=1{,}38\\times10^{-23}\\,\\text{J.K}^{-1}$ (constante de Boltzmann)."},
    {id:"formule-energie-cinetique-moyenne", type:"formule", q:"Énergie cinétique moyenne d'une particule d'un gaz parfait", a:"Pour une particule (quelle que soit l'atomicité du gaz) : $$\\langle E_c^*\\rangle=\\dfrac32 k_BT$$"},
    {id:"formule-energie-interne-gp-monoatomique", type:"formule", q:"Énergie interne et $C_v$ d'un gaz parfait monoatomique", a:"$$U=\\dfrac32 Nk_BT=\\dfrac32 nRT$$ $$C_v=\\left(\\dfrac{\\partial U}{\\partial T}\\right)_V=\\dfrac32 nR$$"},
    {id:"formule-gp-polyatomique", type:"formule", q:"Énergie interne d'un gaz parfait polyatomique et première loi de Joule", a:"$$U=\\dfrac32 nRT+U_{propre}(T)$$ Première loi de Joule : pour tout gaz parfait, quelle que soit son atomicité, l'énergie interne molaire ne dépend que de la température."},
    {id:"formule-Cv-diatomique", type:"formule", q:"Capacité thermique à volume constant d'un gaz parfait diatomique à température ambiante", a:"$$C_v=\\dfrac52 nR$$"},
    {id:"propriete-phase-condensee", type:"propriété", q:"Modèle de la phase condensée indilatable et incompressible", a:"Équation d'état : $$V_m(T,P)=V_{m,0} \\ (\\text{constant})$$ Énergie interne molaire : $U_m=U_m(T)$, et en général $$\\Delta U=C_v\\Delta T$$"},
    {id:"def-types-transformation", type:"def", q:"Définir les principaux types de transformations thermodynamiques", a:"Isochore : volume du système constant.<br>Isobare : pression du système définie tout au long de la transformation et constante.<br>Monobare : pression extérieure constante.<br>Isotherme : température du système définie tout au long de la transformation et constante.<br>Monotherme : température extérieure constante.<br>Quasi-statique : les contraintes extérieures varient assez lentement pour que le système soit toujours à l'équilibre.<br>Réversible : quasi-statique et dont on peut inverser le sens par une variation infinitésimale des contraintes extérieures."}
  ]
});
