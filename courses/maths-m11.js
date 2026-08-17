/* Cours : Mathématiques — Ch.11 : Les suites réelles ou complexes */
window.OSCILLO_COURSES = window.OSCILLO_COURSES || [];
window.OSCILLO_COURSES.push({
  subject: "maths",
  id: "m11",
  name: "Les suites réelles ou complexes",
  cards: [
    {id:"def-suite-reelle", type:"def", q:"Définir une suite réelle", a:"Application $u:\\mathbb N\\to\\mathbb R$ (ou d'une partie de $\\mathbb N$), notée $(u_n)_{n\\in\\mathbb N}$."},
    {id:"def-monotonie-suite", type:"def", q:"Définir suite croissante, décroissante", a:"$(u_n)$ croissante si $\\forall n, u_{n+1}\\ge u_n$. Décroissante si $\\forall n, u_{n+1}\\le u_n$. Strictement si inégalités strictes."},
    {id:"def-suite-bornee", type:"def", q:"Définir suite majorée, minorée, bornée", a:"Majorée : $\\exists M, \\forall n, u_n\\le M$. Minorée : $\\exists m, \\forall n, u_n\\ge m$. Bornée : majorée et minorée, équivaut à $\\exists K, \\forall n, |u_n|\\le K$."},
    {id:"def-limite-suite", type:"def", q:"Définir la limite (finie ou infinie) d'une suite", a:"$u_n \\to \\ell$ (fini) : $\\forall \\varepsilon>0, \\exists N, \\forall n\\ge N, |u_n-\\ell|<\\varepsilon$.&lt;br&gt;$u_n\\to+\\infty$ : $\\forall A, \\exists N, \\forall n\\ge N, u_n>A$."},
    {id:"def-convergence-divergence", type:"def", q:"Définir convergence et divergence d'une suite", a:"Convergente : admet une limite finie. Divergente : n'admet pas de limite finie (limite infinie ou pas de limite du tout)."},
    {id:"def-suite-extraite", type:"def", q:"Définir une suite extraite (sous-suite)", a:"$(u_{\\varphi(n)})$ où $\\varphi:\\mathbb N\\to\\mathbb N$ est strictement croissante."},
    {id:"def-suites-adjacentes", type:"def", q:"Définir des suites adjacentes", a:"$(u_n)$ et $(v_n)$ adjacentes si l'une est croissante, l'autre décroissante, et $u_n-v_n\\to0$."},
    {id:"def-borne-sup-inf-suite", type:"def", q:"Définir borne sup et borne inf d'une suite", a:"$\\sup_n u_n$ (resp. $\\inf_n u_n$) : borne supérieure (resp. inférieure) de l'ensemble $\\{u_n, n\\in\\mathbb N\\}$."},
    {id:"def-suite-recurrente", type:"def", q:"Définir une suite récurrente (simple, linéaire d'ordre 2)", a:"Suite définie par $u_{n+1}=f(u_n)$ (récurrence simple), ou $u_{n+2}=au_{n+1}+bu_n$ (récurrence linéaire d'ordre 2 à coefficients constants $a,b$)."},
    {id:"def-convergence-suite-complexe", type:"def", q:"Définir la convergence d'une suite complexe", a:"$(z_n)$ converge vers $\\ell\\in\\mathbb C$ si $|z_n-\\ell|\\to0$. Équivaut à convergence simultanée de $\\mathrm{Re}(z_n)$ vers $\\mathrm{Re}(\\ell)$ et $\\mathrm{Im}(z_n)$ vers $\\mathrm{Im}(\\ell)$."},
    {id:"def-suite-arithmetique", type:"def", q:"Définir une suite arithmétique", a:"$u_{n+1}=u_n+r$ ($r$ raison). Terme général : $u_n=u_0+nr$."},
    {id:"def-suite-geometrique", type:"def", q:"Définir une suite géométrique", a:"$u_{n+1}=q\\,u_n$ ($q$ raison). Terme général : $u_n=u_0 q^n$."},
    {id:"def-suite-arithmetico-geometrique", type:"def", q:"Définir une suite arithmético-géométrique", a:"$u_{n+1}=au_n+b$. Si $a\\ne1$, point fixe $\\ell=\\dfrac{b}{1-a}$, alors $(u_n-\\ell)$ est géométrique de raison $a$."},
    {id:"def-recurrence-lineaire-ordre2", type:"def", q:"Équation caractéristique d'une suite récurrente linéaire d'ordre 2", a:"Pour $u_{n+2}=au_{n+1}+bu_n$, équation caractéristique $r^2=ar+b$. Solutions selon le discriminant (comme pour EDL2, en discret)."},
    {id:"def-partie-stable-point-fixe", type:"def", q:"Définir partie stable et point fixe (pour $u_{n+1}=f(u_n)$)", a:"$I$ stable par $f$ si $f(I)\\subset I$ (garantit que la suite reste dans $I$). Point fixe : $\\ell$ tel que $f(\\ell)=\\ell$ (limite potentielle si $f$ continue)."},
    {id:"prop-monotonie-signe-difference", type:"propriété", q:"Monotonie via le signe de $u_{n+1}-u_n$", a:"Étudier le signe de $u_{n+1}-u_n$ pour déterminer la monotonie ; alternative : comparer $u_{n+1}/u_n$ à 1 si $u_n>0$."},
    {id:"prop-convergente-bornee", type:"propriété", q:"Convergente $\\Rightarrow$ bornée", a:"Toute suite convergente est bornée (réciproque fausse, ex. $(-1)^n$)."},
    {id:"prop-suite-extraite-limite", type:"propriété", q:"Suite extraite d'une suite convergente", a:"Si $u_n\\to\\ell$, alors toute suite extraite $u_{\\varphi(n)}\\to\\ell$. Contraposée : si deux extraites ont des limites différentes, $(u_n)$ diverge."},
    {id:"prop-bornee-converge-zero", type:"propriété", q:"Produit borné × convergente vers 0", a:"Si $(u_n)$ bornée et $v_n\\to0$, alors $u_nv_n\\to0$."},
    {id:"prop-operations-limites", type:"propriété", q:"Opérations sur les limites (somme, produit, quotient)", a:"Si $u_n\\to\\ell$, $v_n\\to\\ell'$ (finies) : $u_n+v_n\\to\\ell+\\ell'$, $u_nv_n\\to\\ell\\ell'$, $u_n/v_n\\to\\ell/\\ell'$ si $\\ell'\\ne0$. Formes indéterminées à traiter à part : $\\infty-\\infty$, $0\\times\\infty$, $\\infty/\\infty$, $0/0$."},
    {id:"prop-signe-limite", type:"propriété", q:"Signe de la limite implique signe de la suite (à partir d'un rang)", a:"Si $u_n\\to\\ell>0$, alors $u_n>0$ à partir d'un certain rang (idem pour $\\ell<0$)."},
    {id:"prop-comparaison-limites", type:"propriété", q:"Comparaison de limites (passage à la limite dans une inégalité)", a:"Si $u_n\\le v_n$ à partir d'un rang et $u_n\\to\\ell$, $v_n\\to\\ell'$, alors $\\ell\\le\\ell'$ (inégalité large conservée, pas stricte)."},
    {id:"thm-encadrement", type:"propriété", q:"Théorème d'encadrement (gendarmes)", a:"Si $u_n\\le v_n\\le w_n$ à partir d'un rang, et $u_n\\to\\ell$, $w_n\\to\\ell$, alors $v_n\\to\\ell$."},
    {id:"prop-limite-infinie-minoration", type:"propriété", q:"Limite infinie par minoration/majoration", a:"Si $u_n\\ge v_n$ à partir d'un rang et $v_n\\to+\\infty$, alors $u_n\\to+\\infty$ (symétrique pour $-\\infty$)."},
    {id:"thm-limite-monotone", type:"propriété", q:"Théorème de la limite monotone", a:"Toute suite croissante majorée converge (vers $\\sup u_n$). Toute suite croissante non majorée tend vers $+\\infty$ (symétrique pour décroissante)."},
    {id:"prop-convergence-adjacentes", type:"propriété", q:"Convergence des suites adjacentes", a:"Deux suites adjacentes convergent vers la même limite $\\ell$, avec $u_n\\le\\ell\\le v_n$ (si $u$ croissante, $v$ décroissante)."},
    {id:"methode-differentes-methodes-convergence", type:"méthode", q:"Panorama : différentes méthodes pour montrer la convergence d'une suite", a:"Définition (epsilon-N), encadrement, monotone+bornée, suites adjacentes, suite extraite + point fixe (récurrence $u_{n+1}=f(u_n)$), comparaison à une suite de référence, critère de Cauchy."},
    {id:"methode-etude-suite-recurrente", type:"méthode", q:"Méthode : étudier une suite $u_{n+1}=f(u_n)$", a:"1) Chercher un intervalle stable par $f$ contenant $u_0$.&lt;br&gt;2) Étudier la monotonie de $f$ sur cet intervalle pour en déduire celle de $(u_n)$ (comparer $u_1$ et $u_0$ si $f$ croissante).&lt;br&gt;3) Chercher les points fixes de $f$ (candidats limites).&lt;br&gt;4) Montrer la convergence (monotone bornée) puis identifier la limite parmi les points fixes (par continuité de $f$)."},
    {id:"methode-convergence-arithmetico-geometrique", type:"méthode", q:"Méthode : convergence d'une suite arithmético-géométrique $u_{n+1}=au_n+b$", a:"Trouver le point fixe $\\ell=b/(1-a)$ (si $a\\ne1$), poser $v_n=u_n-\\ell$ : $(v_n)$ est géométrique de raison $a$, donc $v_n\\to0$ si $|a|<1$, d'où $u_n\\to\\ell$."}
  ]
});
