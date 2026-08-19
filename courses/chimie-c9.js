/* Cours : Chimie — Ch.9 : Acido-basicité */
window.OSCILLO_COURSES = window.OSCILLO_COURSES || [];
window.OSCILLO_COURSES.push({
  subject: "chimie",
  id: "c9",
  name: "Acido-basicité",
  cards: [
    {id:"def-acide-base-bronsted", type:"def", q:"Définir acide et base selon Brønsted", a:"Acide : espèce capable de céder un proton H⁺. Base : espèce capable de capter un proton H⁺."},
    {id:"def-couple-acide-base", type:"def", q:"Définir un couple acide/base conjugué", a:"$AH/A^-$ tel que $AH \\rightleftharpoons A^- + H^+$ ; $AH$ est l'acide conjugué de $A^-$, $A^-$ la base conjuguée de $AH$."},
    {id:"def-ka-pka", type:"def", q:"Définir $K_a$ et $pK_a$", a:"$$K_a = \\dfrac{[A^-][H_3O^+]}{[AH]} \\qquad pK_a = -\\log K_a$$ (constante d'acidité du couple $AH/A^-$)."},
    {id:"def-autoprotolyse-eau", type:"def", q:"Définir l'autoprotolyse de l'eau et le produit ionique $K_e$", a:"$2H_2O \\rightleftharpoons H_3O^+ + OH^-$, $$K_e = [H_3O^+][OH^-] = 10^{-14} \\text{ à } 25°C, \\quad pK_e = 14$$"},
    {id:"def-pH", type:"def", q:"Définir le pH", a:"$$pH = -\\log[H_3O^+]$$ (activité de $H_3O^+$ en toute rigueur)"},
    {id:"prop-relation-pka-couple-eau", type:"propriété", q:"Relation entre $pK_a$ des couples de l'eau", a:"Pour un couple $AH/A^-$ : $pK_a(AH/A^-) + pK_a(H_3O^+/H_2O) $ n'a pas de relation directe, mais on retient $pK_a(H_3O^+/H_2O)=0$ et $pK_a(H_2O/OH^-)=14$ : ce sont les bornes du domaine de prédominance en solution aqueuse."},
    {id:"def-diagramme-predominance", type:"def", q:"Définir le diagramme de prédominance", a:"Représentation sur un axe de pH montrant la zone où $AH$ prédomine ($pH<pK_a$) et où $A^-$ prédomine ($pH>pK_a$), séparées par $pH=pK_a$ (où $[AH]=[A^-]$)."},
    {id:"prop-force-acide-base", type:"propriété", q:"Acide fort / faible, base forte / faible", a:"Acide fort : réaction totale avec l'eau ($K_a \\gg 1$, $pK_a<0$, dissociation complète). Acide faible : réaction partielle, équilibre ($K_a$ modéré). Idem pour base forte/faible avec $OH^-$."},
    {id:"methode-calcul-ph-acide-fort", type:"méthode", q:"Méthode : calculer le pH d'un acide fort de concentration $C$", a:"Dissociation totale : $[H_3O^+] \\approx C$ (si $C \\gg 10^{-7}$ mol/L), donc $$pH = -\\log(C)$$"},
    {id:"methode-calcul-ph-acide-faible", type:"méthode", q:"Méthode : calculer le pH d'un acide faible de concentration $C$ (approximation)", a:"Si $C/K_a$ suffisamment grand et dissociation faible : $$pH \\approx \\dfrac{1}{2}(pK_a - \\log C)$$ (à vérifier a posteriori que l'approximation de la réaction prépondérante est valide)."},
    {id:"def-solution-tampon", type:"def", q:"Définir une solution tampon", a:"Mélange d'un acide faible et de sa base conjuguée en quantités comparables ; son pH varie peu par ajout modéré d'acide/base ou par dilution, et $pH \\approx pK_a$ quand $[AH]=[A^-]$."},
    {id:"formule-henderson-hasselbalch", type:"formule", q:"Formule d'Henderson-Hasselbalch", a:"$$pH = pK_a + \\log\\dfrac{[A^-]}{[AH]}$$"},
    {id:"def-titrage-acido-basique", type:"def", q:"Définir un titrage acido-basique et l'équivalence", a:"Dosage where l'on ajoute progressivement un réactif titrant de concentration connue à une solution à doser, jusqu'à l'équivalence : les réactifs ont été introduits en proportions stœchiométriques."},
    {id:"prop-repérage-equivalence", type:"propriété", q:"Méthodes de repérage de l'équivalence d'un titrage", a:"Saut de pH (méthode des tangentes ou dérivée maximale sur la courbe pH=f(V)), indicateur coloré de zone de virage adaptée, méthode de Gran (linéarisation)."},
    {id:"prop-pH-equivalence-titrage", type:"propriété", q:"pH à l'équivalence selon le type de titrage", a:"Acide fort / base forte : pH=7 à l'équivalence. Acide faible / base forte : pH>7 (solution basique, base conjuguée présente). Base faible / acide fort : pH<7 (solution acide)."},
    {id:"def-indicateur-colore", type:"def", q:"Définir un indicateur coloré acido-basique", a:"Couple acide/base faible dont les deux formes ont des couleurs différentes ; sa zone de virage est $[pK_a-1, pK_a+1]$ ; à choisir pour que la zone de virage contienne le pH d'équivalence du titrage."},
    {id:"prop-especes-amphotere", type:"propriété", q:"Définir une espèce amphotère (ampholyte)", a:"Espèce pouvant se comporter à la fois comme un acide et comme une base selon le couple considéré (ex. $HCO_3^-$, $H_2O$)."},
    {id:"prop-diagramme-predominance-polyacide", type:"propriété", q:"Diagramme de prédominance d'un polyacide (plusieurs $pK_a$)", a:"Pour un diacide $AH_2/AH^-/A^{2-}$ avec $pK_{a1}<pK_{a2}$ : trois zones de prédominance séparées par $pH=pK_{a1}$ et $pH=pK_{a2}$."}
  ]
});
