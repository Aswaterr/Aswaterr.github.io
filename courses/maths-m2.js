/* Cours : Maths — Chapitre 2 : Les ensembles et les applications */
window.OSCILLO_COURSES = window.OSCILLO_COURSES || [];
window.OSCILLO_COURSES.push({
  subject: "maths",
  id: "m2",
  name: "Les ensembles et les applications",
  cards: [
    {id:"def-ensemble-vide", type:"def", q:"Définition de l'ensemble vide", a:"L'unique ensemble ne contenant aucun élément, noté $\\varnothing$ ou $\\{\\}$."},
    {id:"def-inclusion", type:"def", q:"Définition de l'inclusion $A\\subset B$", a:"$$A\\subset B \\iff \\forall x,\\ (x\\in A \\Rightarrow x\\in B)$$ On dit que $A$ est un sous-ensemble (ou une partie) de $B$."},
    {id:"methode-preuve-inclusion", type:"méthode", q:"Méthode pour prouver $A\\subset B$", a:"Soit $x\\in A$ quelconque. Montrer que $x\\in B$. Conclure $A\\subset B$."},
    {id:"def-egalite-double-inclusion", type:"méthode", q:"Comment prouver l'égalité de deux ensembles $A=B$ ?", a:"Par double inclusion : montrer $A\\subset B$ ET $B\\subset A$.<br>$(A=B \\iff A\\subset B \\text{ et } B\\subset A)$"},
    {id:"def-reunion", type:"def", q:"Définition de la réunion $A\\cup B$", a:"$$A\\cup B = \\{x\\in E \\mid x\\in A \\text{ ou } x\\in B\\}$$ (ou inclusif)"},
    {id:"propriete-reunion", type:"propriété", q:"Propriétés de la réunion", a:"$A\\cup A=A$, $A\\cup\\varnothing=A$, $A\\subset A\\cup B$, $B\\subset A\\cup B$.<br>Commutative et associative."},
    {id:"def-intersection", type:"def", q:"Définition de l'intersection $A\\cap B$", a:"$$A\\cap B = \\{x\\in E \\mid x\\in A \\text{ et } x\\in B\\}$$"},
    {id:"propriete-intersection", type:"propriété", q:"Propriétés de l'intersection", a:"$A\\cap A=A$, $A\\cap\\varnothing=\\varnothing$, $A\\cap E=A$, $A\\cap B\\subset A$, $A\\cap B\\subset B$.<br>Commutative et associative."},
    {id:"propriete-distributivite", type:"propriété", q:"Distributivités entre réunion et intersection", a:"$A\\cup(B\\cap C)=(A\\cup B)\\cap(A\\cup C)$<br>$A\\cap(B\\cup C)=(A\\cap B)\\cup(A\\cap C)$"},
    {id:"def-complementaire", type:"def", q:"Définition du complémentaire de $A$ dans $E$", a:"$$E\\setminus A = \\{x\\in E \\mid x\\notin A\\}$$ (noté aussi $\\bar{A}$ ou $A^c$)"},
    {id:"propriete-de-morgan", type:"propriété", q:"Lois de De Morgan", a:"$E\\setminus(A\\cup B) = (E\\setminus A)\\cap(E\\setminus B)$<br>$E\\setminus(A\\cap B) = (E\\setminus A)\\cup(E\\setminus B)$"},
    {id:"def-difference", type:"def", q:"Définition de la différence $A\\setminus B$", a:"$$A\\setminus B = \\{x\\in E \\mid x\\in A \\text{ et } x\\notin B\\}$$"},
    {id:"def-ensemble-parties", type:"def", q:"Définition de l'ensemble des parties $\\mathcal{P}(E)$", a:"L'ensemble de toutes les parties (sous-ensembles) de $E$.<br>$X\\in\\mathcal{P}(E) \\iff X\\subset E$."},
    {id:"propriete-cardinal-parties", type:"propriété", q:"Cardinal de $\\mathcal{P}(E)$ pour $E$ fini à $n$ éléments", a:"$$\\mathcal{P}(E) \\text{ contient } 2^n \\text{ éléments}$$"},
    {id:"def-produit-cartesien", type:"def", q:"Définition du produit cartésien $A\\times B$", a:"$$A\\times B = \\{(a,b) \\mid a\\in A,\\ b\\in B\\}$$ ensemble des couples ordonnés"},
    {id:"def-application", type:"def", q:"Définition d'une application $f:E\\to F$", a:"Association à tout élément de $E$ d'un unique élément de $F$.<br>Le graphe de $f$ est $G=\\{(x,f(x)) \\mid x\\in E\\} \\subset E\\times F$."},
    {id:"def-image-antecedent", type:"def", q:"Définir image et antécédent", a:"Si $y=f(x)$, $y$ est l'image de $x$ par $f$, et $x$ est un antécédent de $y$ par $f$ (il peut y en avoir plusieurs)."},
    {id:"def-image-directe", type:"def", q:"Définition de l'image directe $f(A)$ d'une partie $A$ de $E$", a:"$$f(A) = \\{f(x) \\mid x\\in A\\} = \\{y\\in F \\mid \\exists x\\in A,\\ y=f(x)\\}$$ C'est une partie de $F$."},
    {id:"def-image-reciproque", type:"def", q:"Définition de l'image réciproque $f^{-1}(B)$ d'une partie $B$ de $F$", a:"$$f^{-1}(B) = \\{x\\in E \\mid f(x)\\in B\\}$$ C'est une partie de $E$, qui existe même si $f$ n'est pas bijective."},
    {id:"def-injection", type:"def", q:"Définition d'une application injective", a:"$f$ est injective $\\iff \\forall x,x'\\in E,\\ f(x)=f(x') \\Rightarrow x=x'$ (deux éléments distincts ont des images distinctes)."},
    {id:"def-surjection", type:"def", q:"Définition d'une application surjective", a:"$f$ est surjective $\\iff \\forall y\\in F,\\ \\exists x\\in E,\\ y=f(x)$ (tout élément de $F$ a au moins un antécédent)."},
    {id:"def-bijection", type:"def", q:"Définition d'une application bijective", a:"$f$ est bijective $\\iff$ elle est injective ET surjective $\\iff \\forall y\\in F,\\ \\exists! x\\in E,\\ y=f(x)$ (tout élément de $F$ a exactement un antécédent)."},
    {id:"propriete-composition", type:"propriété", q:"Composition d'injections, surjections, bijections", a:"La composée de deux injections est une injection.<br>La composée de deux surjections est une surjection.<br>La composée de deux bijections est une bijection."},
    {id:"def-application-reciproque", type:"def", q:"Définition de l'application réciproque $f^{-1}$ d'une bijection $f$", a:"$f^{-1}: F\\to E$, $y\\mapsto x$ où $x$ est l'unique antécédent de $y$ par $f$.<br>On a $f^{-1}\\circ f=\\text{id}_E$ et $f\\circ f^{-1}=\\text{id}_F$."},
    {id:"propriete-caracterisation-bijection", type:"méthode", q:"Méthode rapide pour montrer que $f$ est bijective et trouver $f^{-1}$", a:"S'il existe $g:F\\to E$ telle que $f\\circ g=\\text{id}_F$ et $g\\circ f=\\text{id}_E$, alors $f$ est bijective et $f^{-1}=g$."},
    {id:"propriete-derivee-reciproque", type:"formule", q:"Formule de la dérivée de la fonction réciproque $f^{-1}$", a:"Si $f'$ ne s'annule pas sur $J$, alors $f^{-1}$ est dérivable sur $J$ et $$(f^{-1})'(x) = \\dfrac{1}{f'(f^{-1}(x))}$$"},
    {id:"propriete-socks-shoes", type:"propriété", q:"Réciproque d'une composée $(g\\circ f)^{-1}$ — « Socks and Shoes Principle »", a:"$$(g\\circ f)^{-1} = f^{-1}\\circ g^{-1}$$ On défait dans l'ordre inverse, comme retirer ses chaussures avant ses chaussettes."}
  ]
});
