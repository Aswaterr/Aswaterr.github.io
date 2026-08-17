/* Cours : Mathématiques — Ch.2 : Les ensembles et les applications */
window.OSCILLO_COURSES = window.OSCILLO_COURSES || [];
window.OSCILLO_COURSES.push({
  subject: "maths",
  id: "m2",
  name: "Ensembles et applications",
  cards: [
    {id:"def-ensembles-base", type:"def", q:"Définir : ensemble vide, singleton, paire", a:"$\\emptyset$ : ensemble sans élément. Singleton : ensemble à un seul élément $\\{a\\}$. Paire : ensemble à deux éléments distincts $\\{a,b\\}$."},
    {id:"def-inclusion", type:"def", q:"Définir inclusion et sous-ensemble", a:"$A\\subset B \\iff \\forall x, (x\\in A \\Rightarrow x\\in B)$. On dit alors que $A$ est un sous-ensemble (ou partie) de $B$."},
    {id:"def-egalite-ensembles", type:"def", q:"Définir l'égalité de deux ensembles", a:"$A=B \\iff A\\subset B \\text{ et } B\\subset A$ (double inclusion)."},
    {id:"def-reunion-intersection-famille", type:"def", q:"Définir réunion et intersection d'une famille d'ensembles $(A_i)_{i\\in I}$", a:"$\\bigcup_{i\\in I} A_i = \\{x \\mid \\exists i\\in I, x\\in A_i\\}$&lt;br&gt;$\\bigcap_{i\\in I} A_i = \\{x \\mid \\forall i\\in I, x\\in A_i\\}$"},
    {id:"def-complementaire", type:"def", q:"Définir le complémentaire d'une partie", a:"Pour $A\\subset E$, $\\complement_E A = \\{x\\in E \\mid x\\notin A\\}$, aussi noté $\\overline{A}$ ou $A^c$."},
    {id:"def-difference-ensembles", type:"def", q:"Définir la différence de deux ensembles", a:"$A\\setminus B = \\{x\\in A \\mid x\\notin B\\} = A\\cap\\complement B$"},
    {id:"def-ensemble-parties", type:"def", q:"Définir l'ensemble des parties $\\mathcal{P}(E)$", a:"$\\mathcal{P}(E)$ est l'ensemble de toutes les parties (sous-ensembles) de $E$, y compris $\\emptyset$ et $E$ lui-même. Si $|E|=n$, $|\\mathcal{P}(E)|=2^n$."},
    {id:"def-couple-produit-cartesien", type:"def", q:"Définir couple et produit cartésien", a:"Couple $(a,b)$ : paire ordonnée. $A\\times B = \\{(a,b) \\mid a\\in A, b\\in B\\}$."},
    {id:"def-partition", type:"def", q:"Définir recouvrement, recouvrement disjoint, partition", a:"$(A_i)$ est un recouvrement de $E$ si $\\bigcup A_i = E$. Disjoint si $A_i\\cap A_j=\\emptyset$ pour $i\\ne j$. Partition = recouvrement disjoint où aucun $A_i$ n'est vide."},
    {id:"def-application", type:"def", q:"Définir une application $f:E\\to F$", a:"Une application associe à chaque élément de $E$ (ensemble de départ) un unique élément de $F$ (ensemble d'arrivée)."},
    {id:"def-image-antecedent", type:"def", q:"Définir image et antécédent", a:"Pour $x\\in E$, $f(x)$ est l'image de $x$. Pour $y\\in F$, tout $x$ tel que $f(x)=y$ est un antécédent de $y$."},
    {id:"def-fonction-indicatrice", type:"def", q:"Définir la fonction indicatrice d'une partie $A\\subset E$", a:"$\\mathbb{1}_A : E\\to\\{0,1\\}$, $\\mathbb{1}_A(x)=1$ si $x\\in A$, $0$ sinon."},
    {id:"def-image-directe-reciproque", type:"def", q:"Définir image directe et image réciproque", a:"Image directe : $f(A) = \\{f(x) \\mid x\\in A\\}$ pour $A\\subset E$.&lt;br&gt;Image réciproque : $f^{-1}(B) = \\{x\\in E \\mid f(x)\\in B\\}$ pour $B\\subset F$ (existe même si $f$ non bijective)."},
    {id:"def-injection-surjection-bijection", type:"def", q:"Définir injection, surjection, bijection", a:"Injective : $\\forall x,x', f(x)=f(x')\\Rightarrow x=x'$ (au plus un antécédent).&lt;br&gt;Surjective : $\\forall y\\in F, \\exists x\\in E, f(x)=y$ (au moins un antécédent).&lt;br&gt;Bijective : injective et surjective (exactement un antécédent)."},
    {id:"def-bijection-induite", type:"def", q:"Définir la bijection induite par une application", a:"Toute application $f:E\\to F$ induit une bijection $\\tilde f : E \\to f(E)$, $x\\mapsto f(x)$, en restreignant l'ensemble d'arrivée à l'image."},
    {id:"def-composition", type:"def", q:"Définir la composition $g\\circ f$", a:"Pour $f:E\\to F$ et $g:F\\to G$, $(g\\circ f)(x) = g(f(x))$, définie de $E$ vers $G$."},
    {id:"def-application-reciproque", type:"def", q:"Définir l'application réciproque d'une bijection", a:"Si $f:E\\to F$ est bijective, $f^{-1}:F\\to E$ est l'unique application telle que $f^{-1}\\circ f = id_E$ et $f\\circ f^{-1}=id_F$."},
    {id:"prop-complementaire-double", type:"propriété", q:"Propriété du double complémentaire et lois de De Morgan", a:"$\\overline{\\overline{A}}=A$&lt;br&gt;$\\overline{A\\cup B} = \\overline A \\cap \\overline B$&lt;br&gt;$\\overline{A\\cap B} = \\overline A \\cup \\overline B$"},
    {id:"prop-distributivite-ensembles", type:"propriété", q:"Distributivité de $\\cup$ et $\\cap$", a:"$A\\cap(B\\cup C) = (A\\cap B)\\cup(A\\cap C)$&lt;br&gt;$A\\cup(B\\cap C) = (A\\cup B)\\cap(A\\cup C)$"},
    {id:"prop-cardinal-produit-puissance", type:"propriété", q:"Cardinal d'un produit cartésien et de $\\mathcal P(E)$", a:"$|A\\times B| = |A|\\times|B|$&lt;br&gt;$|\\mathcal P(E)| = 2^{|E|}$"},
    {id:"prop-composition-bijections", type:"propriété", q:"Composée de deux bijections", a:"Si $f:E\\to F$ et $g:F\\to G$ sont bijectives, alors $g\\circ f:E\\to G$ est bijective et $(g\\circ f)^{-1} = f^{-1}\\circ g^{-1}$ (ordre inversé)."},
    {id:"prop-reciproque-composee", type:"propriété", q:"Que vaut $f\\circ f^{-1}$ et $f^{-1}\\circ f$ ?", a:"$f\\circ f^{-1} = id_F$ et $f^{-1}\\circ f = id_E$."},
    {id:"prop-caracterisation-bijection-reciproque", type:"propriété", q:"Caractérisation de la bijection réciproque", a:"$g$ est la réciproque de $f$ ssi $g\\circ f = id_E$ et $f\\circ g = id_F$ (il suffit de vérifier les deux compositions)."},
    {id:"prop-derivee-reciproque", type:"propriété", q:"Dérivée de la fonction réciproque", a:"Si $f$ bijective dérivable en $x_0$ avec $f'(x_0)\\ne0$, alors $f^{-1}$ est dérivable en $y_0=f(x_0)$ et $(f^{-1})'(y_0) = \\dfrac{1}{f'(f^{-1}(y_0))}$."},
    {id:"methode-montrer-inclusion", type:"méthode", q:"Méthode : montrer une inclusion d'ensembles $A\\subset B$", a:"Prendre $x\\in A$ quelconque (\"soit $x\\in A$\"), et montrer que $x\\in B$ en utilisant la définition de $A$."},
    {id:"methode-montrer-egalite", type:"méthode", q:"Méthode : montrer une égalité d'ensembles $A=B$", a:"Montrer la double inclusion $A\\subset B$ et $B\\subset A$, ou montrer l'équivalence $x\\in A \\iff x\\in B$ directement."},
    {id:"methode-appartenance-image-directe", type:"méthode", q:"Méthode : montrer $y \\in f(A)$", a:"Exhiber (ou montrer l'existence d') un $x\\in A$ tel que $f(x)=y$."},
    {id:"methode-appartenance-image-reciproque", type:"méthode", q:"Méthode : montrer $x \\in f^{-1}(B)$", a:"Montrer que $f(x)\\in B$."},
    {id:"methode-bijectivite", type:"méthode", q:"Méthode : montrer qu'une fonction est bijective", a:"Soit montrer injectivité + surjectivité séparément ; soit résoudre l'équation $f(x)=y$ d'inconnue $x$ pour $y$ fixé quelconque et montrer qu'elle a une unique solution."}
  ]
});
