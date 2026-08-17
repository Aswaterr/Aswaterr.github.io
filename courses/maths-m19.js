/* Cours : Mathématiques — Ch.19 : Algèbre linéaire III - Algèbre matricielle */
window.OSCILLO_COURSES = window.OSCILLO_COURSES || [];
window.OSCILLO_COURSES.push({
  subject: "maths",
  id: "m19",
  name: "Algèbre linéaire III : algèbre matricielle",
  cards: [
    {id:"def-matrice-vecteur", type:"def", q:"Définir la matrice d'un vecteur dans une base", a:"Colonne des coordonnées de $x$ dans la base $(e_1,\\dots,e_n)$ : si $x=\\sum x_ie_i$, sa matrice est $\\begin{pmatrix}x_1\\\\\\vdots\\\\x_n\\end{pmatrix}$."},
    {id:"def-matrice-famille-vecteurs", type:"def", q:"Définir la matrice d'une famille de vecteurs", a:"Matrice dont les colonnes sont les coordonnées de chaque vecteur de la famille dans une base fixée de l'espace d'arrivée."},
    {id:"def-matrice-application-lineaire", type:"def", q:"Définir la matrice d'une application linéaire dans des bases $\\mathcal B,\\mathcal B'$", a:"$\\mathrm{Mat}_{\\mathcal B,\\mathcal B'}(u)$ : matrice dont la $j$-ième colonne contient les coordonnées de $u(e_j)$ dans la base $\\mathcal B'$ de l'espace d'arrivée, où $(e_j)$ est la base $\\mathcal B$ de départ."},
    {id:"def-application-lineaire-associee-matrice", type:"def", q:"Définir l'application linéaire canoniquement associée à une matrice", a:"À $A\\in\\mathcal M_{n,p}(K)$, on associe $u_A: K^p\\to K^n$, $X\\mapsto AX$, application linéaire dans les bases canoniques."},
    {id:"def-noyau-image-matrice", type:"def", q:"Définir noyau et image d'une matrice", a:"$\\ker A = \\{X\\in K^p \\mid AX=0\\}$. $\\mathrm{Im}\\,A = \\{AX \\mid X\\in K^p\\}$ (= sev engendré par les colonnes de $A$)."},
    {id:"def-rang-famille-vecteurs-matrice", type:"def", q:"Rang d'une famille de vecteurs via matrice", a:"Le rang d'une famille de vecteurs = rang de la matrice formée par leurs colonnes de coordonnées."},
    {id:"def-rang-matrice", type:"def", q:"Définir le rang d'une matrice", a:"$\\mathrm{rg}(A)$ = dimension du sev engendré par les colonnes de $A$ (= rang de $u_A$)."},
    {id:"def-matrice-echelonnee", type:"def", q:"Définir une matrice échelonnée (par lignes)", a:"Chaque ligne non nulle commence (à gauche) par un pivot situé strictement à droite du pivot de la ligne précédente ; les lignes nulles sont en bas."},
    {id:"def-matrice-passage", type:"def", q:"Définir une matrice de passage", a:"$P_{\\mathcal B\\to\\mathcal B'}$ : matrice dont les colonnes sont les coordonnées des vecteurs de la nouvelle base $\\mathcal B'$ exprimées dans l'ancienne base $\\mathcal B$."},
    {id:"def-matrices-semblables", type:"def", q:"Définir des matrices semblables", a:"$A,B$ semblables s'il existe $P$ inversible telle que $B=P^{-1}AP$ (représentent le même endomorphisme dans des bases différentes)."},
    {id:"prop-isomorphisme-Kn-espace-vectoriel", type:"propriété", q:"Isomorphisme $\\mathcal L(E,F) \\cong \\mathcal M_{n,p}(K)$", a:"L'application qui à $u$ associe sa matrice (bases fixées) est un isomorphisme d'espaces vectoriels : linéarité et bijectivité de $u \\mapsto \\mathrm{Mat}(u)$."},
    {id:"prop-matrice-image-vecteur", type:"propriété", q:"Matrice de l'image d'un vecteur par une application linéaire", a:"Si $Y=\\mathrm{Mat}(u(x))$ et $X=\\mathrm{Mat}(x)$, alors $Y = AX$ où $A=\\mathrm{Mat}(u)$ (multiplication matricielle traduit l'application de $u$)."},
    {id:"prop-matrice-composee", type:"propriété", q:"Matrice d'une composée d'applications linéaires", a:"$\\mathrm{Mat}(v\\circ u) = \\mathrm{Mat}(v)\\times\\mathrm{Mat}(u)$ (dans des bases cohérentes) : le produit matriciel traduit la composition."},
    {id:"prop-matrice-inversible-isomorphisme", type:"propriété", q:"Lien matrice inversible et isomorphisme", a:"$u$ isomorphisme $\\iff \\mathrm{Mat}(u)$ inversible, et alors $\\mathrm{Mat}(u^{-1}) = \\mathrm{Mat}(u)^{-1}$."},
    {id:"prop-noyau-application-lineaire-matrice", type:"propriété", q:"Lien noyau d'une application linéaire et noyau matriciel", a:"$\\ker u$ correspond (via les coordonnées) à $\\ker A$ où $A=\\mathrm{Mat}(u)$ ; résoudre $AX=0$ donne le noyau."},
    {id:"prop-image-application-lineaire-matrice", type:"propriété", q:"Lien image d'une application linéaire et image matricielle", a:"$\\mathrm{Im}\\,u$ correspond à $\\mathrm{Im}\\,A$ (sev engendré par les colonnes de $A$)."},
    {id:"prop-rang-application-lineaire-matrice", type:"propriété", q:"Rang d'une application linéaire = rang de sa matrice", a:"$\\mathrm{rg}(u) = \\mathrm{rg}(\\mathrm{Mat}(u))$, quelle que soit la base choisie (le rang ne dépend pas des bases)."},
    {id:"prop-rang-transposee", type:"propriété", q:"Rang de la transposée", a:"$\\mathrm{rg}(^tA) = \\mathrm{rg}(A)$ (rang lignes = rang colonnes)."},
    {id:"prop-inversibilite-noyau-image-rang", type:"propriété", q:"Caractérisation de l'inversibilité par noyau, image, rang (matrice carrée $n\\times n$)", a:"$A$ inversible $\\iff \\ker A=\\{0\\} \\iff \\mathrm{Im}\\,A=K^n \\iff \\mathrm{rg}(A)=n$"},
    {id:"prop-inverse-produit-matrices", type:"propriété", q:"Inverse d'un produit de matrices (rappel)", a:"$(AB)^{-1}=B^{-1}A^{-1}$ si $A,B$ inversibles."},
    {id:"prop-changement-base-vecteur", type:"propriété", q:"Formule de changement de base pour un vecteur", a:"Si $X$ (coord. dans $\\mathcal B$) et $X'$ (coord. dans $\\mathcal B'$) représentent le même vecteur, avec $P$ matrice de passage $\\mathcal B\\to\\mathcal B'$ : $$X = PX'$$"},
    {id:"prop-changement-base-endomorphisme", type:"propriété", q:"Formule de changement de base pour un endomorphisme", a:"Si $A=\\mathrm{Mat}_{\\mathcal B}(u)$ et $A'=\\mathrm{Mat}_{\\mathcal B'}(u)$, avec $P$ matrice de passage $\\mathcal B\\to\\mathcal B'$ : $$A' = P^{-1}AP$$"},
    {id:"prop-changement-base-application-lineaire", type:"propriété", q:"Formule de changement de base pour une application linéaire (bases de départ et d'arrivée)", a:"Si $A=\\mathrm{Mat}_{\\mathcal B_1,\\mathcal B_2}(u)$, $P$ passage sur l'espace de départ, $Q$ passage sur l'espace d'arrivée : $$A' = Q^{-1}AP$$"},
    {id:"methode-calcul-noyau-matrice", type:"méthode", q:"Méthode : calculer le noyau d'une matrice", a:"Résoudre le système $AX=0$ (méthode du pivot), exprimer l'ensemble des solutions en fonction de paramètres libres, en déduire une base du noyau."},
    {id:"methode-calcul-image-matrice", type:"méthode", q:"Méthode : calculer l'image d'une matrice", a:"$\\mathrm{Im}\\,A$ = Vect des colonnes de $A$ ; extraire une base de cette famille de vecteurs (colonnes indépendantes, via échelonnement)."},
    {id:"methode-calcul-rang-matrice", type:"méthode", q:"Méthode : calculer le rang d'une matrice", a:"Échelonner la matrice par opérations élémentaires sur les lignes (ou colonnes) ; le rang est le nombre de lignes (ou pivots) non nulles obtenues."},
    {id:"methode-changement-base", type:"méthode", q:"Méthode : effectuer un changement de base", a:"1) Écrire la matrice de passage $P$ (colonnes = nouveaux vecteurs de base exprimés dans l'ancienne base).&lt;br&gt;2) Calculer $P^{-1}$ (souvent par inversion de matrice augmentée).&lt;br&gt;3) Appliquer la formule adaptée ($X=PX'$ pour un vecteur, $A'=P^{-1}AP$ pour un endomorphisme)."}
  ]
});
