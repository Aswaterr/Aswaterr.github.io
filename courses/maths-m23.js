/* Cours : Mathématiques — Ch.23 : Les séries numériques */
window.OSCILLO_COURSES = window.OSCILLO_COURSES || [];
window.OSCILLO_COURSES.push({
  subject: "maths",
  id: "m23",
  name: "Les séries numériques",
  cards: [
    {id:"def-somme-partielle", type:"def", q:"Définir une somme partielle", a:"Pour une suite $(u_n)$ : $S_n = \\sum_{k=0}^n u_k$, la $n$-ième somme partielle."},
    {id:"def-serie-numerique", type:"def", q:"Définir une série numérique", a:"Couple formé d'une suite $(u_n)$ et de la suite des sommes partielles $(S_n)$, notée $\\sum u_n$."},
    {id:"def-terme-general", type:"def", q:"Définir le terme général d'une série", a:"$u_n$ : le terme d'indice $n$ dont on somme les valeurs pour former la série $\\sum u_n$."},
    {id:"def-serie-convergente", type:"def", q:"Définir série convergente, somme, reste", a:"$\\sum u_n$ converge si $(S_n)$ converge, vers une limite $S=\\sum_{n=0}^\\infty u_n$ (somme). Reste : $R_n = S-S_n = \\sum_{k=n+1}^\\infty u_k$."},
    {id:"def-divergence-grossiere", type:"def", q:"Définir la divergence grossière", a:"$\\sum u_n$ diverge grossièrement si $u_n \\not\\to 0$ (le terme général ne tend pas vers 0)."},
    {id:"def-integrale-generalisee-convergente", type:"def", q:"Définir une intégrale généralisée convergente", a:"$\\int_a^{+\\infty} f(t)\\,dt$ converge si $\\lim_{X\\to+\\infty} \\int_a^X f(t)\\,dt$ existe et est finie."},
    {id:"def-serie-reference", type:"def", q:"Définir les séries de référence (géométrique, Riemann)", a:"Géométrique $\\sum q^n$ : converge ssi $|q|<1$. Riemann $\\sum \\frac{1}{n^\\alpha}$ : converge ssi $\\alpha>1$."},
    {id:"def-convergence-absolue", type:"def", q:"Définir la convergence absolue", a:"$\\sum u_n$ converge absolument si $\\sum |u_n|$ converge."},
    {id:"def-serie-alternee", type:"def", q:"Définir une série alternée", a:"Série de la forme $\\sum (-1)^n a_n$ (ou $\\sum(-1)^{n+1}a_n$) avec $(a_n)$ suite de signe constant (souvent positive)."},
    {id:"prop-condition-necessaire-cv", type:"propriété", q:"Condition nécessaire de convergence", a:"Si $\\sum u_n$ converge, alors $u_n \\to 0$ (nécessaire mais pas suffisant, cf. série harmonique)."},
    {id:"prop-lien-suite-serie", type:"propriété", q:"Lien suite-série (télescopage)", a:"$(u_n)$ converge $\\iff$ la série télescopique $\\sum (u_{n+1}-u_n)$ converge ; utile pour ramener l'étude d'une suite à celle d'une série."},
    {id:"prop-serie-geometrique-somme", type:"propriété", q:"Convergence et somme de la série géométrique", a:"Pour $|q|<1$ : $$\\sum_{n=0}^\\infty q^n = \\dfrac{1}{1-q}$$"},
    {id:"prop-exponentielle-serie", type:"propriété", q:"Série exponentielle", a:"Pour tout $x\\in\\mathbb R$ (ou $\\mathbb C$) : $$\\sum_{n=0}^\\infty \\dfrac{x^n}{n!} = e^x$$"},
    {id:"prop-comparaison-series-positives", type:"propriété", q:"Théorème de comparaison (séries à termes positifs)", a:"Si $0\\le u_n \\le v_n$ à partir d'un rang : $\\sum v_n$ converge $\\Rightarrow \\sum u_n$ converge ; $\\sum u_n$ diverge $\\Rightarrow \\sum v_n$ diverge."},
    {id:"prop-comparaison-serie-integrale", type:"propriété", q:"Comparaison série-intégrale", a:"Pour $f$ continue positive décroissante sur $[n_0,+\\infty[$ : $\\sum f(n)$ converge $\\iff \\int_{n_0}^{+\\infty} f(t)\\,dt$ converge (encadrement $f(n+1) \\le \\int_n^{n+1}f \\le f(n)$)."},
    {id:"prop-convergence-equivalent", type:"propriété", q:"Convergence via équivalent (séries à termes positifs)", a:"Si $u_n \\sim v_n$ avec $u_n,v_n \\ge 0$ (à partir d'un rang), alors $\\sum u_n$ et $\\sum v_n$ sont de même nature (convergent ou divergent simultanément)."},
    {id:"prop-comparaison-serie-serie", type:"propriété", q:"Comparaison série-série (règle de comparaison générale)", a:"Combine le théorème de comparaison et l'utilisation d'équivalents ou de $O/o$ pour ramener l'étude d'une série à une série de référence connue (géométrique, Riemann)."},
    {id:"prop-critere-riemann", type:"propriété", q:"Critère de Riemann (règle $n^\\alpha u_n$)", a:"S'il existe $\\alpha>1$ tel que $n^\\alpha u_n \\to 0$ (ou est bornée), alors $\\sum u_n$ converge (absolument). Si $n u_n \\to \\ell \\ne 0$ (ou $+\\infty$), $\\sum u_n$ diverge."},
    {id:"prop-convergence-absolue-implique-cv", type:"propriété", q:"Convergence absolue $\\Rightarrow$ convergence", a:"Si $\\sum |u_n|$ converge, alors $\\sum u_n$ converge (réciproque fausse : cf. série harmonique alternée, semi-convergente)."},
    {id:"prop-condition-suffisante-cv-absolue", type:"propriété", q:"Conditions suffisantes de convergence absolue", a:"Comparaison à une série de référence convergente ($u_n = O(v_n)$ avec $\\sum v_n$ absolument convergente), ou règle de d'Alembert ($|u_{n+1}/u_n| \\to \\ell < 1$)."},
    {id:"prop-critere-special-series-alternees", type:"propriété", q:"Critère spécial des séries alternées (CSSA)", a:"Si $(a_n)$ décroît vers $0$, alors $\\sum (-1)^n a_n$ converge, et le reste $R_n$ vérifie $|R_n| \\le a_{n+1}$ avec le signe de $(-1)^{n+1}$ (majoration du reste par le premier terme négligé)."},
    {id:"methode-encadrement-reste-somme-partielle", type:"méthode", q:"Méthode : encadrer le reste ou une somme partielle d'une série", a:"Pour des termes positifs décroissants, utiliser la comparaison série-intégrale : $\\int_{n+1}^{+\\infty} f \\le R_n \\le \\int_n^{+\\infty} f$. Pour une série alternée (CSSA), utiliser $|R_n|\\le a_{n+1}$."}
  ]
});
