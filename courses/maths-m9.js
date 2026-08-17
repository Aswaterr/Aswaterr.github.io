/* Cours : Mathématiques — Ch.9 : Calcul matriciel et systèmes linéaires */
window.OSCILLO_COURSES = window.OSCILLO_COURSES || [];
window.OSCILLO_COURSES.push({
  subject: "maths",
  id: "m9",
  name: "Calcul matriciel et systèmes linéaires",
  cards: [
    {id:"def-matrice", type:"def", q:"Définir une matrice et la matrice identité", a:"$M\\in\\mathcal M_{n,p}(K)$ : tableau de $n$ lignes et $p$ colonnes de scalaires. $I_n$ : matrice carrée avec des 1 sur la diagonale, 0 ailleurs."},
    {id:"def-matrice-ligne-colonne", type:"def", q:"Définir matrice ligne et matrice colonne", a:"Matrice ligne : $n=1$ (une seule ligne). Matrice colonne : $p=1$ (une seule colonne). Une colonne représente souvent un vecteur dans une base."},
    {id:"def-operations-matrices", type:"def", q:"Définir somme, produit par un scalaire, combinaison linéaire, produit matriciel", a:"Somme et produit scalaire terme à terme. Produit $AB$ ($A$ de taille $n\\times p$, $B$ de taille $p\\times q$) : $(AB)_{ij} = \\sum_{k=1}^p a_{ik}b_{kj}$."},
    {id:"def-diagonale-principale", type:"def", q:"Définir la diagonale principale d'une matrice carrée", a:"Ensemble des coefficients $a_{ii}$ (mêmes indices de ligne et colonne)."},
    {id:"def-transposee", type:"def", q:"Définir la transposée d'une matrice", a:"$^tA$ (ou $A^T$) : matrice obtenue en échangeant lignes et colonnes de $A$. $(^tA)_{ij} = a_{ji}$."},
    {id:"def-matrices-particulieres", type:"def", q:"Définir matrice diagonale, triangulaire, symétrique, antisymétrique", a:"Diagonale : nulle hors diagonale. Triangulaire sup/inf : nulle sous/sur la diagonale. Symétrique : $^tA=A$. Antisymétrique : $^tA=-A$."},
    {id:"def-systeme-lineaire", type:"def", q:"Définir un système linéaire, système homogène", a:"Ensemble d'équations linéaires en les inconnues $x_1,\\dots,x_p$. Système homogène : second membre nul (admet toujours la solution triviale)."},
    {id:"def-equation-cartesienne", type:"def", q:"Définir équation cartésienne d'une droite/d'un plan", a:"Équation de la forme $ax+by=c$ (droite du plan) ou $ax+by+cz=d$ (plan de l'espace) définissant l'ensemble des points vérifiés."},
    {id:"def-matrice-carree-puissance", type:"def", q:"Définir matrice carrée, puissance de matrice", a:"Matrice carrée : $n=p$. $A^k = A\\times A \\times \\cdots \\times A$ ($k$ fois), $A^0=I_n$."},
    {id:"def-matrice-nilpotente", type:"def", q:"Définir une matrice nilpotente", a:"$A$ est nilpotente s'il existe $k\\in\\mathbb N^*$ tel que $A^k=0$. Le plus petit tel $k$ est l'indice de nilpotence."},
    {id:"def-matrice-inversible", type:"def", q:"Définir une matrice inversible", a:"$A$ carrée est inversible s'il existe $B$ telle que $AB=BA=I_n$. On note alors $B=A^{-1}$."},
    {id:"prop-non-commutativite", type:"propriété", q:"Non-commutativité, associativité, bilinéarité du produit matriciel", a:"En général $AB\\ne BA$. Le produit est associatif : $(AB)C=A(BC)$. Bilinéaire : $A(B+C)=AB+AC$, $(\\lambda A)B=\\lambda(AB)$."},
    {id:"prop-produit-colonne", type:"propriété", q:"Sens du produit $AX$ (matrice × colonne)", a:"$AX$ est une combinaison linéaire des colonnes de $A$, pondérée par les coefficients de $X$."},
    {id:"prop-transposee-somme-produit", type:"propriété", q:"Transposée d'une somme, d'un produit, linéarité", a:"$^t(A+B)=\\,^tA+\\,^tB$&lt;br&gt;$^t(AB)=\\,^tB\\,^tA$ (ordre inversé)&lt;br&gt;$^t(\\lambda A)=\\lambda\\,^tA$"},
    {id:"prop-solutions-systeme", type:"propriété", q:"Structure des solutions d'un système linéaire $AX=B$", a:"Solution générale = solution particulière + solution générale du système homogène associé $AX=0$."},
    {id:"prop-intersection-droites-plans", type:"propriété", q:"Intersection de droites/plans via systèmes", a:"L'intersection de plusieurs droites ou plans se traduit par un système d'équations cartésiennes ; résoudre le système donne les points d'intersection (ou montre l'incompatibilité)."},
    {id:"formule-binome-matrices", type:"formule", q:"Formule du binôme de Newton pour les matrices", a:"Si $A$ et $B$ commutent ($AB=BA$) : $$(A+B)^n = \\sum_{k=0}^n \\binom{n}{k} A^k B^{n-k}$$ Ne s'applique pas si $A,B$ ne commutent pas."},
    {id:"prop-caracterisation-inversibilite", type:"propriété", q:"Caractérisation de l'inversibilité (unicité de l'inverse à droite/gauche)", a:"$A$ carrée est inversible ssi il existe $B$ tel que $AB=I_n$ (il suffit d'un seul côté pour une matrice carrée ; alors $BA=I_n$ aussi automatiquement)."},
    {id:"prop-inversibilite-produit", type:"propriété", q:"Inversibilité d'un produit de matrices", a:"Si $A,B$ inversibles de même taille, $AB$ est inversible et $(AB)^{-1}=B^{-1}A^{-1}$ (ordre inversé)."},
    {id:"prop-inverse-diagonale", type:"propriété", q:"Inverse d'une matrice diagonale", a:"Si $D=\\mathrm{diag}(d_1,\\dots,d_n)$ avec tous $d_i\\ne0$, alors $D^{-1}=\\mathrm{diag}(1/d_1,\\dots,1/d_n)$."},
    {id:"prop-lien-matrice-inversible-systeme", type:"propriété", q:"Lien matrice inversible ↔ système de Cramer", a:"$A$ inversible $\\iff$ le système $AX=B$ a une unique solution pour tout $B$ $\\iff$ le système homogène $AX=0$ n'a que la solution nulle."},
    {id:"methode-resolution-systeme-lineaire", type:"méthode", q:"Méthode générale de résolution d'un système linéaire", a:"Écrire le système sous forme matricielle ou par équations, utiliser des combinaisons de lignes pour éliminer des inconnues, remonter pour exprimer toutes les solutions (avec paramètres si besoin)."},
    {id:"methode-pivot-gauss", type:"méthode", q:"Méthode du pivot de Gauss-Jordan", a:"Échelonner le système par opérations élémentaires sur les lignes ($L_i \\leftarrow L_i + \\alpha L_j$, échanges, multiplications par un scalaire non nul) jusqu'à obtenir une forme triangulaire/échelonnée, puis résoudre par remontée."},
    {id:"methode-inversion-matrice-augmentee", type:"méthode", q:"Méthode de la matrice augmentée pour inverser une matrice", a:"Écrire $(A | I_n)$, appliquer le pivot de Gauss-Jordan sur les lignes jusqu'à obtenir $(I_n | A^{-1})$. Si impossible d'obtenir $I_n$ à gauche, $A$ n'est pas inversible."},
    {id:"methode-puissance-ADN", type:"méthode", q:"Méthode ADN pour calculer $A^n$ (via diagonalisation ou relation de récurrence)", a:"Décomposer $A=D+N$ avec $D$ diagonale et $N$ nilpotente commutant avec $D$ ($DN=ND$), puis utiliser le binôme de Newton : $A^n=\\sum_k \\binom{n}{k}D^{n-k}N^k$, la somme étant finie car $N$ nilpotente."}
  ]
});
