/* Cours : Chimie — Ch.8 : Modification de groupes caractéristiques, exemple des halogénoalcanes */
window.OSCILLO_COURSES = window.OSCILLO_COURSES || [];
window.OSCILLO_COURSES.push({
  subject: "chimie",
  id: "c8",
  name: "Halogénoalcanes : substitution et élimination",
  cards: [
    {id:"def-halogenoalcane", type:"def", q:"Définir un halogénoalcane et sa nomenclature", a:"Composé $R-X$ ($X$ = F, Cl, Br, I). Nomenclature : préfixe halogéno- (fluoro-, chloro-, bromo-, iodo-) avec indice de position devant le nom de l'alcane."},
    {id:"prop-classification-halogenoalcane", type:"propriété", q:"Classification primaire, secondaire, tertiaire d'un halogénoalcane", a:"Selon le nombre de carbones liés au carbone porteur de l'halogène : primaire (1 C), secondaire (2 C), tertiaire (3 C)."},
    {id:"prop-halogenoalcane-bon-groupe-partant", type:"propriété", q:"Halogénure : pourquoi un bon groupe partant ?", a:"La liaison C-X est polarisée ($C^{\\delta+}-X^{\\delta-}$), et l'halogénure $X^-$ formé est une base faible stabilisée (surtout I⁻, Br⁻), ce qui en fait un bon groupe partant. Aptitude au départ : $I^- > Br^- > Cl^- \\gg F^-$."},
    {id:"prop-reactivite-halogenoalcanes-sn", type:"propriété", q:"Réactivité des halogénoalcanes en substitution nucléophile selon la classe", a:"Primaire : $S_N2$ favorisée (peu d'encombrement stérique au site d'attaque). Tertiaire : $S_N1$ favorisée (carbocation stable, encombrement défavorable à $S_N2$). Secondaire : mécanisme mixte selon les conditions (nucléophile, solvant)."},
    {id:"methode-choisir-mecanisme-halogenoalcane", type:"méthode", q:"Méthode : prévoir le mécanisme dominant pour un halogénoalcane donné", a:"Examiner : 1) classe du substrat (1°/2°/3°), 2) force et encombrement du nucléophile/base, 3) polarité et caractère protique du solvant, 4) température — puis croiser avec les critères $S_N1/S_N2/E1/E2$ vus au Ch.7."},
    {id:"prop-application-synthese-organomagnesien", type:"propriété", q:"Application : formation d'un organomagnésien (réactif de Grignard)", a:"$R-X + Mg \\xrightarrow{\\text{éther anhydre}} R-MgX$ : le carbone devient nucléophile (porteur $\\delta^-$), utilisé ensuite pour créer des liaisons C-C (addition sur carbonyles notamment)."},
    {id:"prop-application-synthese-williamson", type:"propriété", q:"Application : synthèse de Williamson (formation d'éthers)", a:"$R-O^- + R'-X \\xrightarrow{S_N2} R-O-R' + X^-$ : réaction d'un alcoolate (nucléophile fort) sur un halogénoalcane primaire (peu encombré, favorise $S_N2$)."},
    {id:"prop-hydrolyse-halogenoalcane", type:"propriété", q:"Hydrolyse d'un halogénoalcane", a:"$R-X + H_2O \\to R-OH + HX$ : substitution par l'eau (nucléophile faible), généralement lente, favorisée pour les substrats tertiaires ($S_N1$, solvant polaire protique)."}
  ]
});
