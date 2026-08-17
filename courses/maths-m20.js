/* Cours : Mathématiques — Ch.20 : Probabilités sur un univers fini */
window.OSCILLO_COURSES = window.OSCILLO_COURSES || [];
window.OSCILLO_COURSES.push({
  subject: "maths",
  id: "m20",
  name: "Probabilités sur un univers fini",
  cards: [
    {id:"def-cardinal", type:"def", q:"Rappel : cardinal d'un ensemble fini", a:"$|E|$ (ou $\\mathrm{card}(E)$) : nombre d'éléments de l'ensemble fini $E$."},
    {id:"def-permutation", type:"def", q:"Définir une permutation", a:"Bijection d'un ensemble fini de $n$ éléments sur lui-même. Nombre de permutations : $n!$."},
    {id:"def-arrangement", type:"def", q:"Définir un arrangement", a:"Choix ordonné (sans répétition) de $k$ éléments parmi $n$ : liste ordonnée de $k$ éléments distincts pris dans un ensemble à $n$ éléments."},
    {id:"def-combinaison", type:"def", q:"Définir une combinaison", a:"Choix non ordonné de $k$ éléments parmi $n$ (sous-ensemble à $k$ éléments d'un ensemble à $n$ éléments)."},
    {id:"def-experience-aleatoire-univers", type:"def", q:"Définir expérience aléatoire, univers", a:"Expérience aléatoire : expérience dont l'issue n'est pas prévisible avec certitude. Univers $\\Omega$ : ensemble de toutes les issues possibles."},
    {id:"def-evenement", type:"def", q:"Définir événement, événement élémentaire", a:"Événement : sous-ensemble de $\\Omega$ (souvent $A\\subset\\Omega$). Événement élémentaire : singleton $\\{\\omega\\}$, $\\omega\\in\\Omega$."},
    {id:"def-probabilite-esperance", type:"def", q:"Définir une probabilité sur $\\Omega$ fini", a:"Application $P:\\mathcal P(\\Omega)\\to[0,1]$ telle que $P(\\Omega)=1$ et $P$ est additive sur les événements disjoints : $P(A\\cup B)=P(A)+P(B)$ si $A\\cap B=\\emptyset$."},
    {id:"def-probabilite-uniforme", type:"def", q:"Définir la probabilité uniforme (équiprobabilité)", a:"$P(A) = \\dfrac{|A|}{|\\Omega|}$ pour tout $A\\subset\\Omega$ (cas d'équiprobabilité des issues élémentaires)."},
    {id:"def-probabilite-conditionnelle", type:"def", q:"Définir la probabilité conditionnelle", a:"Pour $P(B)>0$ : $$P_B(A) = P(A|B) = \\dfrac{P(A\\cap B)}{P(B)}$$"},
    {id:"def-systeme-complet-evenements", type:"def", q:"Définir un système complet d'événements (SCE)", a:"Famille $(B_i)$ d'événements deux à deux disjoints dont la réunion est $\\Omega$ (partition de l'univers), avec chaque $P(B_i)>0$."},
    {id:"def-evenements-independants", type:"def", q:"Définir deux événements indépendants", a:"$A,B$ indépendants si $P(A\\cap B) = P(A)P(B)$."},
    {id:"def-famille-evenements-independants", type:"def", q:"Définir une famille d'événements mutuellement indépendants", a:"$(A_i)_{i\\in I}$ mutuellement indépendants si pour toute sous-famille finie $J\\subset I$ : $P\\left(\\bigcap_{i\\in J} A_i\\right) = \\prod_{i\\in J} P(A_i)$."},
    {id:"prop-formule-poincare", type:"propriété", q:"Formule du crible / de Poincaré (union de 2 et 3 événements)", a:"$P(A\\cup B) = P(A)+P(B)-P(A\\cap B)$&lt;br&gt;$P(A\\cup B\\cup C) = P(A)+P(B)+P(C)-P(A\\cap B)-P(A\\cap C)-P(B\\cap C)+P(A\\cap B\\cap C)$"},
    {id:"prop-probabilite-complementaire", type:"propriété", q:"Probabilité de l'événement complémentaire", a:"$P(\\overline A) = 1-P(A)$"},
    {id:"prop-cardinal-reunion-disjointe", type:"propriété", q:"Cardinal de la réunion (ensembles disjoints, quelconque)", a:"Disjoints : $|A\\cup B|=|A|+|B|$. Général : $|A\\cup B|=|A|+|B|-|A\\cap B|$."},
    {id:"prop-cardinal-produit-cartesien-rappel", type:"propriété", q:"Cardinal d'un produit cartésien (rappel)", a:"$|A\\times B| = |A|\\times|B|$, se généralise à $|A_1\\times\\cdots\\times A_n| = \\prod |A_i|$."},
    {id:"formule-nombre-permutations", type:"formule", q:"Nombre de permutations d'un ensemble à $n$ éléments", a:"$n!$"},
    {id:"formule-nombre-arrangements", type:"formule", q:"Nombre d'arrangements de $k$ éléments parmi $n$", a:"$$A_n^k = \\dfrac{n!}{(n-k)!} = n(n-1)\\cdots(n-k+1)$$"},
    {id:"prop-nombre-injections", type:"propriété", q:"Nombre d'applications injectives entre deux ensembles finis", a:"Pour $|E|=k \\le |F|=n$ : nombre d'injections $E\\to F$ = $A_n^k = \\dfrac{n!}{(n-k)!}$."},
    {id:"formule-nombre-combinaisons", type:"formule", q:"Nombre de combinaisons de $k$ éléments parmi $n$", a:"$$\\binom{n}{k} = \\dfrac{n!}{k!(n-k)!}$$"},
    {id:"formule-binome-newton-rappel", type:"formule", q:"Formule du binôme de Newton (rappel)", a:"$$(a+b)^n = \\sum_{k=0}^n \\binom{n}{k}a^kb^{n-k}$$"},
    {id:"formule-pascal-rappel", type:"formule", q:"Formule de Pascal (rappel)", a:"$$\\binom{n}{k}+\\binom{n}{k+1} = \\binom{n+1}{k+1}$$"},
    {id:"prop-probabilite-conditionnelle-est-probabilite", type:"propriété", q:"$P_B$ est une probabilité sur $\\Omega$", a:"Pour $B$ fixé avec $P(B)>0$, l'application $A\\mapsto P_B(A)$ vérifie tous les axiomes d'une probabilité sur $\\Omega$."},
    {id:"formule-composee-probabilites", type:"formule", q:"Formule des probabilités composées", a:"$$P(A_1\\cap A_2\\cap\\cdots\\cap A_n) = P(A_1)\\,P_{A_1}(A_2)\\,P_{A_1\\cap A_2}(A_3)\\cdots P_{A_1\\cap\\cdots\\cap A_{n-1}}(A_n)$$"},
    {id:"formule-probabilites-totales", type:"formule", q:"Formule des probabilités totales", a:"Pour $(B_i)$ SCE : $$P(A) = \\sum_i P(B_i)\\,P_{B_i}(A)$$"},
    {id:"formule-bayes", type:"formule", q:"Formule de Bayes", a:"$$P_A(B) = \\dfrac{P_B(A)\\,P(B)}{P(A)} = \\dfrac{P_B(A)\\,P(B)}{\\sum_i P_{B_i}(A)P(B_i)}$$ (dénominateur via probabilités totales, $(B_i)$ SCE contenant $B$)"},
    {id:"prop-independance-implique-independance-complementaires", type:"propriété", q:"Indépendance et passage au complémentaire", a:"Si $A,B$ indépendants, alors $A,\\overline B$ sont indépendants (et $\\overline A,\\overline B$ aussi)."},
    {id:"prop-independance-deux-a-deux-vs-mutuelle", type:"propriété", q:"Indépendance deux à deux vs mutuelle indépendance", a:"L'indépendance mutuelle implique l'indépendance deux à deux, mais la réciproque est FAUSSE en général (contre-exemples classiques à connaître)."},
    {id:"prop-famille-complementaires-independants", type:"propriété", q:"Famille d'événements et complémentaires (indépendance)", a:"Si $(A_i)$ mutuellement indépendants, on peut remplacer certains $A_i$ par leur complémentaire $\\overline{A_i}$ : la famille obtenue reste mutuellement indépendante."},
    {id:"methode-calcul-probabilite-denombrement", type:"méthode", q:"Méthode : calculer une probabilité par dénombrement", a:"Identifier l'univers $\\Omega$ et vérifier l'équiprobabilité, dénombrer $|\\Omega|$ puis $|A|$ (via permutations/arrangements/combinaisons selon si ordre et répétition comptent), puis $P(A)=|A|/|\\Omega|$."}
  ]
});
