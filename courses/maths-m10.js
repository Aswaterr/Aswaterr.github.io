/* Cours : Mathématiques — Ch.10 : Ensembles de nombres usuels */
window.OSCILLO_COURSES = window.OSCILLO_COURSES || [];
window.OSCILLO_COURSES.push({
  subject: "maths",
  id: "m10",
  name: "Ensembles de nombres usuels",
  cards: [
    {id:"def-divisibilite", type:"def", q:"Définir divisibilité, diviseur, multiple", a:"$a$ divise $b$ (noté $a|b$) s'il existe $k\\in\\mathbb Z$ tel que $b=ka$. $a$ est un diviseur de $b$, $b$ un multiple de $a$."},
    {id:"def-pgcd-ppcm", type:"def", q:"Définir PGCD et PPCM", a:"PGCD$(a,b)$ : plus grand diviseur commun à $a$ et $b$. PPCM$(a,b)$ : plus petit multiple commun positif à $a$ et $b$."},
    {id:"def-algo-euclide", type:"def", q:"Décrire l'algorithme d'Euclide (calcul du PGCD)", a:"Divisions euclidiennes successives : $\\mathrm{pgcd}(a,b)=\\mathrm{pgcd}(b, a \\mod b)$, jusqu'à reste nul. Le dernier reste non nul est le PGCD."},
    {id:"def-nombre-premier", type:"def", q:"Définir un nombre premier", a:"Entier $p\\ge2$ dont les seuls diviseurs positifs sont $1$ et $p$."},
    {id:"def-valuation-p-adique", type:"def", q:"Définir la valuation $p$-adique", a:"Pour $p$ premier et $n\\in\\mathbb Z^*$, $v_p(n)$ est l'exposant de $p$ dans la décomposition en facteurs premiers de $n$ (le plus grand $k$ tel que $p^k | n$)."},
    {id:"def-N-Z", type:"def", q:"Définir $\\mathbb N$ et $\\mathbb Z$", a:"$\\mathbb N$ : entiers naturels $\\{0,1,2,\\dots\\}$. $\\mathbb Z$ : entiers relatifs $\\{\\dots,-1,0,1,\\dots\\}$."},
    {id:"def-Q-intervalle-reel", type:"def", q:"Définir $\\mathbb Q$ et intervalle réel", a:"$\\mathbb Q$ : nombres rationnels $\\{p/q, p\\in\\mathbb Z, q\\in\\mathbb N^*\\}$. Intervalle réel : partie convexe de $\\mathbb R$ (voir Ch.3)."},
    {id:"def-relation-ordre", type:"def", q:"Définir une relation d'ordre", a:"Relation réflexive, antisymétrique et transitive. Ordre total si deux éléments quelconques sont toujours comparables (cas de $\\le$ sur $\\mathbb R$)."},
    {id:"def-valeur-absolue", type:"def", q:"Définir la valeur absolue", a:"$|x| = x$ si $x\\ge0$, $-x$ si $x<0$. Représente la distance de $x$ à $0$."},
    {id:"def-distance-points", type:"def", q:"Définir la distance entre deux réels", a:"$d(x,y) = |x-y|$"},
    {id:"def-partie-entiere", type:"def", q:"Définir la partie entière", a:"$\\lfloor x \\rfloor$ (ou $E(x)$) : unique entier tel que $\\lfloor x\\rfloor \\le x < \\lfloor x\\rfloor+1$."},
    {id:"def-approximation-defaut-exces", type:"def", q:"Définir approximation par défaut et par excès à $10^{-n}$ près", a:"Approximation décimale par défaut : $\\lfloor 10^n x\\rfloor / 10^n$. Par excès : approximation par défaut $+\\,10^{-n}$."},
    {id:"def-majorant-minorant-borne", type:"def", q:"Définir majorant, minorant, borne d'un ensemble", a:"$M$ majore $A$ si $\\forall a\\in A, a\\le M$. $m$ minore $A$ si $\\forall a\\in A, m\\le a$. Bornée : majorée et minorée."},
    {id:"def-maximum-minimum-extremum", type:"def", q:"Définir maximum, minimum, extremum", a:"Maximum de $A$ : majorant qui appartient à $A$. Minimum : minorant qui appartient à $A$. Extremum : maximum ou minimum."},
    {id:"def-borne-sup-inf", type:"def", q:"Définir borne supérieure et borne inférieure", a:"Borne sup de $A$ : plus petit des majorants de $A$ (noté $\\sup A$). Borne inf : plus grand des minorants (noté $\\inf A$). Existent dans $\\mathbb R$ dès que $A$ non vide et majorée/minorée (propriété de la borne supérieure)."},
    {id:"thm-division-euclidienne", type:"propriété", q:"Théorème de la division euclidienne", a:"Pour $a\\in\\mathbb Z$, $b\\in\\mathbb N^*$, il existe un unique couple $(q,r)\\in\\mathbb Z\\times\\mathbb N$ tel que $a=bq+r$ et $0\\le r<b$."},
    {id:"lemme-euclide", type:"propriété", q:"Lemme d'Euclide", a:"Si $p$ premier et $p | ab$, alors $p|a$ ou $p|b$."},
    {id:"thm-infinite-nombres-premiers", type:"propriété", q:"Théorème : infinité de nombres premiers", a:"L'ensemble des nombres premiers est infini (démonstration classique d'Euclide par l'absurde : supposer une liste finie $p_1,\\dots,p_n$ et considérer $N=p_1\\cdots p_n+1$)."},
    {id:"thm-decomposition-facteurs-premiers", type:"propriété", q:"Théorème de décomposition en facteurs premiers", a:"Tout entier $n\\ge2$ (ou $n\\ne0$ dans $\\mathbb Z$) s'écrit de manière unique (à l'ordre près) comme produit de nombres premiers : $n=\\prod p_i^{\\alpha_i}$."},
    {id:"prop-pgcd-ppcm-decomposition", type:"propriété", q:"PGCD, PPCM et décomposition en facteurs premiers", a:"$\\mathrm{pgcd}(a,b)=\\prod p^{\\min(v_p(a),v_p(b))}$&lt;br&gt;$\\mathrm{ppcm}(a,b)=\\prod p^{\\max(v_p(a),v_p(b))}$&lt;br&gt;$\\mathrm{pgcd}(a,b)\\times\\mathrm{ppcm}(a,b) = |ab|$"},
    {id:"prop-addition-multiplication-inegalites", type:"propriété", q:"Addition et multiplication d'inégalités", a:"$a\\le b, c\\le d \\Rightarrow a+c\\le b+d$. $a\\le b, c\\ge0 \\Rightarrow ac\\le bc$ (le sens s'inverse si $c<0$)."},
    {id:"prop-inegalite-valeur-absolue", type:"propriété", q:"Propriétés de la valeur absolue (inégalité triangulaire)", a:"$|x+y|\\le|x|+|y|$ (inégalité triangulaire), et $||x|-|y||\\le|x-y|$"},
    {id:"prop-entiers-minorants-majorants", type:"propriété", q:"Toute partie non vide de $\\mathbb N$ minorée admet un minimum ; majorée de $\\mathbb N$ admet un maximum", a:"Propriété fondamentale de $\\mathbb N$ (bon ordre) : toute partie non vide de $\\mathbb N$ admet un plus petit élément."},
    {id:"prop-encadrement-partie-entiere", type:"propriété", q:"Encadrement caractérisant la partie entière", a:"$\\lfloor x \\rfloor$ est l'unique entier $n$ tel que $n \\le x < n+1$."},
    {id:"prop-croissance-partie-entiere", type:"propriété", q:"Croissance de la partie entière", a:"$x \\le y \\Rightarrow \\lfloor x\\rfloor \\le \\lfloor y\\rfloor$ (fonction croissante, mais pas strictement)."},
    {id:"prop-densite-Q-R", type:"propriété", q:"Densité de $\\mathbb Q$ et $\\mathbb R\\setminus\\mathbb Q$ dans $\\mathbb R$", a:"Entre deux réels distincts quelconques, il existe toujours un rationnel et un irrationnel : $\\mathbb Q$ et $\\mathbb R\\setminus\\mathbb Q$ sont denses dans $\\mathbb R$."},
    {id:"prop-caracterisation-bornes-suite", type:"propriété", q:"Caractérisation séquentielle des bornes sup/inf", a:"$M=\\sup A \\iff M$ majore $A$ et il existe une suite $(a_n)$ d'éléments de $A$ convergeant vers $M$ (approximation aussi près que voulu)."},
    {id:"methode-crible-eratosthene", type:"méthode", q:"Méthode : crible d'Ératosthène", a:"Pour trouver les nombres premiers jusqu'à $N$ : barrer successivement tous les multiples de $2$, puis de $3$, puis du prochain nombre non barré, jusqu'à $\\sqrt N$. Les nombres restants sont premiers."},
    {id:"methode-inegalite-triangulaire-preuve", type:"méthode", q:"Méthode : prouver l'inégalité triangulaire", a:"Élever au carré : $(x+y)^2 = x^2+2xy+y^2 \\le x^2+2|x||y|+y^2 = (|x|+|y|)^2$ car $xy\\le|xy|=|x||y|$, puis passer à la racine (croissante sur $\\mathbb R_+$)."}
  ]
});
