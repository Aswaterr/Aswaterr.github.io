/* Cours : Chimie — Ch.11 : Dissolution-précipitation */
window.OSCILLO_COURSES = window.OSCILLO_COURSES || [];
window.OSCILLO_COURSES.push({
  subject: "chimie",
  id: "c11",
  name: "Dissolution-précipitation",
  cards: [
    {id:"def-produit-solubilite", type:"def", q:"Définir le produit de solubilité $K_s$", a:"Constante d'équilibre de la réaction de dissolution d'un solide ionique : pour $A_xB_y(s) \\rightleftharpoons xA^{n+} + yB^{m-}$, $$K_s = [A^{n+}]^x[B^{m-}]^y \\text{ (à l'équilibre, en présence de solide)}$$ Ne dépend que de la température. $pK_s=-\\log K_s$."},
    {id:"def-solubilite", type:"def", q:"Définir la solubilité $s$", a:"Quantité maximale de solide qui peut être dissoute par litre de solution (mol/L), à l'équilibre avec le solide restant."},
    {id:"methode-lien-s-ks", type:"méthode", q:"Méthode : relier solubilité $s$ et $K_s$ (sans ion commun)", a:"Exprimer $[A^{n+}]$ et $[B^{m-}]$ en fonction de $s$ via la stœchiométrie ($[A^{n+}]=xs$, $[B^{m-}]=ys$), injecter dans $K_s=[A^{n+}]^x[B^{m-}]^y$, résoudre pour $s$."},
    {id:"prop-condition-precipitation", type:"propriété", q:"Condition de précipitation (comparaison $Q_r$ et $K_s$)", a:"Si $Q_r = [A^{n+}]^x[B^{m-}]^y < K_s$ : pas de précipité, solution non saturée. Si $Q_r = K_s$ : solution saturée, à la limite de précipitation. Si $Q_r > K_s$ : précipitation (le système évolue pour revenir à $Q_r=K_s$)."},
    {id:"prop-effet-ion-commun", type:"propriété", q:"Effet d'ion commun sur la solubilité", a:"L'ajout d'un ion déjà présent dans l'équilibre de dissolution (commun) diminue la solubilité du solide (déplacement de l'équilibre vers la précipitation, loi de modération)."},
    {id:"methode-solubilite-ion-commun", type:"méthode", q:"Méthode : calculer la solubilité en présence d'un ion commun de concentration $C_0$ imposée", a:"Si $[B^{m-}] \\approx C_0$ (concentration imposée dominante) : $K_s \\approx [A^{n+}]\\cdot C_0^y$ (adapter selon stœchiométrie), résoudre pour $[A^{n+}]=xs$ ou directement pour $s$."},
    {id:"def-domaine-existence-precipite", type:"def", q:"Définir le domaine d'existence d'un précipité", a:"Ensemble des conditions (concentrations, pH...) pour lesquelles le solide est présent (à l'équilibre avec la solution saturée), c'est-à-dire $Q_r \\ge K_s$."},
    {id:"prop-diagramme-predominance-existence-concentration", type:"propriété", q:"Diagramme de prédominance/existence en fonction de la concentration d'un réactif", a:"Pour une espèce pouvant précipiter selon la concentration d'un ion ajouté, on détermine la concentration seuil $C_{seuil}$ (à partir de $K_s$) séparant la zone \"pas de précipité\" (existence de l'espèce dissoute seule) de la zone \"précipité présent\"."},
    {id:"methode-precipitation-selective", type:"méthode", q:"Méthode : précipitation sélective de deux cations par un même anion", a:"Comparer les concentrations d'anion nécessaires pour faire précipiter chaque cation (via leurs $K_s$ respectifs) : le solide dont le $K_s$ est le plus petit (le moins soluble) précipite en premier lorsqu'on ajoute progressivement l'anion commun."},
    {id:"prop-solubilite-ph", type:"propriété", q:"Influence du pH sur la solubilité (cas d'un anion basique, ex. hydroxyde ou carbonate)", a:"Si l'anion du précipité est une base faible (conjuguée d'un acide faible), une diminution du pH consomme cet anion (protonation), déplaçant l'équilibre de dissolution vers plus de solubilité : le précipité se dissout davantage en milieu acide."}
  ]
});
