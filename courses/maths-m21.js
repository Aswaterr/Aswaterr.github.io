/* Cours : Mathématiques — Ch.21 : Algèbre linéaire IV - les déterminants */
window.OSCILLO_COURSES = window.OSCILLO_COURSES || [];
window.OSCILLO_COURSES.push({
  subject: "maths",
  id: "m21",
  name: "Algèbre linéaire IV : les déterminants",
  cards: [
    {id:"def-forme-multilineaire", type:"def", q:"Définir une forme $n$-linéaire", a:"Application $\\varphi: E^n\\to K$ linéaire par rapport à chacune de ses $n$ variables (les autres étant fixées)."},
    {id:"def-forme-alternee", type:"def", q:"Définir une forme alternée", a:"$\\varphi$ alternée si $\\varphi(u_1,\\dots,u_n)=0$ dès que deux vecteurs $u_i$ sont égaux."},
    {id:"def-forme-antisymetrique", type:"def", q:"Définir une forme antisymétrique", a:"$\\varphi$ antisymétrique si l'échange de deux variables change le signe : $\\varphi(\\dots,u_i,\\dots,u_j,\\dots) = -\\varphi(\\dots,u_j,\\dots,u_i,\\dots)$."},
    {id:"def-determinant-matrice-carree", type:"def", q:"Définir le déterminant d'une matrice carrée", a:"$\\det(A)$ : unique forme $n$-linéaire alternée des colonnes de $A$ telle que $\\det(I_n)=1$."},
    {id:"prop-multilineaire-alternee-antisymetrique", type:"propriété", q:"Multilinéaire + alternée $\\iff$ antisymétrique", a:"Pour une forme multilinéaire, être alternée équivaut à être antisymétrique (en caractéristique $\\ne 2$, cas de $\\mathbb R,\\mathbb C$)."},
    {id:"formule-determinant-2-3", type:"formule", q:"Déterminant pour $n=2$ et $n=3$", a:"$n=2$ : $\\det\\begin{pmatrix}a&b\\\\c&d\\end{pmatrix} = ad-bc$&lt;br&gt;$n=3$ (règle de Sarrus) : $\\det = aei+bfg+cdh-ceg-bdi-afh$ pour $\\begin{pmatrix}a&b&c\\\\d&e&f\\\\g&h&i\\end{pmatrix}$"},
    {id:"prop-interpretation-geometrique-determinant", type:"propriété", q:"Interprétation géométrique du déterminant ($n=2,3$)", a:"$n=2$ : $|\\det(u,v)|$ = aire du parallélogramme formé par $u,v$. $n=3$ : $|\\det(u,v,w)|$ = volume du parallélépipède formé par $u,v,w$. Le signe indique l'orientation."},
    {id:"def-determinant-base", type:"def", q:"Définir le déterminant dans une base", a:"$\\det_{\\mathcal B}(u_1,\\dots,u_n)$ : déterminant de la matrice des coordonnées des $u_i$ dans la base $\\mathcal B$."},
    {id:"prop-determinant-image-base", type:"propriété", q:"Déterminant de l'image d'une base par un endomorphisme", a:"Si $u$ endomorphisme et $\\mathcal B$ base : $\\det_{\\mathcal B}(u(e_1),\\dots,u(e_n)) = \\det(\\mathrm{Mat}_{\\mathcal B}(u))$."},
    {id:"def-determinant-endomorphisme", type:"def", q:"Définir le déterminant d'un endomorphisme", a:"$\\det(u) = \\det(\\mathrm{Mat}_{\\mathcal B}(u))$, indépendant du choix de la base $\\mathcal B$ (invariant par changement de base)."},
    {id:"prop-determinant-composee", type:"propriété", q:"Déterminant d'une composée d'endomorphismes", a:"$\\det(v\\circ u) = \\det(v)\\times\\det(u)$"},
    {id:"prop-caracterisation-base-determinant", type:"propriété", q:"Caractérisation d'une base via le déterminant", a:"$(u_1,\\dots,u_n)$ est une base de $E$ (dim $n$) ssi $\\det_{\\mathcal B}(u_1,\\dots,u_n) \\ne 0$."},
    {id:"formule-determinant-produit-matrices", type:"formule", q:"Déterminant d'un produit de matrices", a:"$$\\det(AB) = \\det(A)\\times\\det(B)$$"},
    {id:"prop-caracterisation-inversibilite-determinant", type:"propriété", q:"Caractérisation de l'inversibilité par le déterminant", a:"$A$ inversible $\\iff \\det(A) \\ne 0$, et alors $\\det(A^{-1}) = \\dfrac{1}{\\det(A)}$."},
    {id:"prop-determinant-transposee", type:"propriété", q:"Déterminant d'une transposée", a:"$\\det(^tA) = \\det(A)$"},
    {id:"prop-determinant-triangulaire", type:"propriété", q:"Déterminant d'une matrice triangulaire (ou diagonale)", a:"Le déterminant d'une matrice triangulaire (sup. ou inf.) est le produit des coefficients diagonaux : $\\det(A) = \\prod a_{ii}$."},
    {id:"methode-developpement-ligne-colonne", type:"méthode", q:"Développement d'un déterminant selon une ligne ou une colonne", a:"$$\\det(A) = \\sum_{i=1}^n (-1)^{i+j} a_{ij} \\Delta_{ij}$$ où $\\Delta_{ij}$ est le mineur (déterminant de la matrice privée de la ligne $i$ et colonne $j$). Choisir la ligne/colonne avec le plus de zéros pour simplifier."},
    {id:"methode-calcul-determinant-operations", type:"méthode", q:"Méthode : calculer un déterminant par opérations sur les lignes/colonnes", a:"Utiliser la multilinéarité et le caractère alterné : $L_i \\leftarrow L_i+\\alpha L_j$ ne change pas le déterminant ; échanger deux lignes multiplie par $-1$ ; multiplier une ligne par $\\lambda$ multiplie le déterminant par $\\lambda$. Objectif : triangulariser pour lire directement le déterminant."}
  ]
});
