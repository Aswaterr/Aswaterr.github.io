/* Cours : Physique — T5 : Machines thermiques */
window.OSCILLO_COURSES = window.OSCILLO_COURSES || [];
window.OSCILLO_COURSES.push({
  subject: "physique",
  id: "t5",
  name: "Machines thermiques",
  cards: [
    {id:"def-machine-thermique", type:"def", q:"Définir une machine thermique et son agent thermique", a:"Machine thermique : dispositif mettant en jeu des transferts thermiques et du travail.<br>Système thermodynamique : fluide appelé agent thermique subissant des transformations cycliques.<br>Deux catégories : moteur ($W<0$) et récepteur ($W>0$)."},
    {id:"formule-bilan-energie-cycle", type:"formule", q:"Bilan d'énergie sur un cycle : que vaut $\\Delta U$ et qu'en déduit-on avec le premier principe ?", a:"Sur un nombre entier de cycles, $\\Delta U = 0$ (fonction d'état).<br>Premier principe : $$W + \\sum_i Q_i = 0$$"},
    {id:"formule-bilan-entropie-cycle", type:"formule", q:"Bilan d'entropie sur un cycle : que vaut $\\Delta S$ et qu'en déduit-on avec le second principe ?", a:"Sur un cycle, $\\Delta S = 0$ (fonction d'état).<br>Second principe (inégalité de Clausius) : $$\\sum_i \\dfrac{Q_i}{T_i} \\leq 0$$"},
    {id:"propriete-machine-monotherme", type:"propriété", q:"Machine monotherme : bilans des deux principes et conséquence", a:"Premier principe : $W+Q=0$.<br>Second principe : $\\dfrac{Q}{T}\\leq 0 \\Rightarrow W\\geq 0$.<br>Conséquence : aucun moteur monotherme n'est possible (on ne peut pas produire de travail moteur avec une seule source de chaleur)."},
    {id:"def-machine-ditherme", type:"def", q:"Machine ditherme : bilans des deux principes (sources chaude $T_c$ et froide $T_f$)", a:"Premier principe : $$W+Q_f+Q_c=0$$ Second principe : $$\\dfrac{Q_f}{T_f}+\\dfrac{Q_c}{T_c}\\leq 0 \\quad (T_c>T_f)$$"},
    {id:"propriete-signes-moteur", type:"propriété", q:"Moteur ditherme : signes de $W$, $Q_c$ et $Q_f$", a:"$W<0$ (travail fourni par la machine), $Q_c>0$ (reçu de la source chaude), $Q_f<0$ (cédé à la source froide)."},
    {id:"formule-rendement-moteur", type:"formule", q:"Définir et exprimer le rendement $\\eta$ d'un moteur ditherme", a:"$$\\eta = \\left|\\dfrac{\\text{énergie utile}}{\\text{énergie fournie}}\\right| = -\\dfrac{W}{Q_c} = 1+\\dfrac{Q_f}{Q_c}$$"},
    {id:"formule-carnot-moteur", type:"formule", q:"Énoncer le théorème de Carnot pour un moteur ditherme", a:"$$\\eta \\leq \\eta_{rev} = 1-\\dfrac{T_f}{T_c}$$ avec $\\eta_{rev}$ atteint pour un fonctionnement réversible du moteur (cas limite, jamais atteint en pratique)."},
    {id:"methode-cycle-carnot", type:"méthode", q:"Décrire le cycle de Carnot dans le diagramme de Clapeyron et le sens de parcours selon moteur/récepteur", a:"Cycle formé de deux isothermes réversibles (aux températures $T_f$ et $T_c$) et deux adiabatiques réversibles.<br>Fonctionnement moteur $\\Rightarrow$ sens horaire.<br>Fonctionnement récepteur $\\Rightarrow$ sens trigonométrique."},
    {id:"propriete-signes-recepteur", type:"propriété", q:"Récepteur ditherme : signes de $W$, $Q_f$ et $Q_c$ (exemple ?)", a:"$W>0$ (travail reçu), $Q_f>0$ (reçu de la source froide), $Q_c<0$ (cédé à la source chaude).<br>Exemple : réfrigérateur."},
    {id:"formule-efficacite-frigorifique", type:"formule", q:"Définir et exprimer l'efficacité $e_F$ d'une machine frigorifique, et le théorème de Carnot associé", a:"$$e_F = \\left|\\dfrac{\\text{énergie utile}}{\\text{énergie fournie}}\\right| = \\dfrac{Q_f}{W}$$ Théorème de Carnot : $$e_F \\leq e_{F,rev} = \\dfrac{T_f}{T_c-T_f}$$"},
    {id:"formule-efficacite-pac", type:"formule", q:"Définir et exprimer l'efficacité $e_T$ d'une pompe à chaleur, et le théorème de Carnot associé", a:"$$e_T = \\left|\\dfrac{\\text{énergie utile}}{\\text{énergie fournie}}\\right| = -\\dfrac{Q_c}{W}$$ Théorème de Carnot : $$e_T \\leq e_{T,rev} = \\dfrac{T_c}{T_c-T_f}$$"}
  ]
});
