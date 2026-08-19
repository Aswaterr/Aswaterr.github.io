/* Cours : Chimie — Ch.6 : Évolution temporelle d'un système en réaction chimique */
window.OSCILLO_COURSES = window.OSCILLO_COURSES || [];
window.OSCILLO_COURSES.push({
  subject: "chimie",
  id: "c6",
  name: "Évolution temporelle d'un système chimique (cinétique)",
  cards: [
    {id:"def-vitesse-reaction", type:"def", q:"Définir la vitesse de réaction", a:"$$v = \\dfrac{1}{\\nu_i}\\dfrac{d[A_i]}{dt}$$ (avec $\\nu_i$ nombre stœchiométrique algébrique, positif pour un produit, négatif pour un réactif) — vitesse commune à toutes les espèces d'une même réaction."},
    {id:"def-vitesse-volumique", type:"def", q:"Définir la vitesse volumique de réaction", a:"$v_{vol} = v/V$ (volume constant en général) : $$v_{vol} = \\dfrac{1}{\\nu_i}\\dfrac{d[A_i]}{dt}$$ souvent confondue avec $v$ à volume constant."},
    {id:"def-loi-vitesse-ordre", type:"def", q:"Définir loi de vitesse et ordre de réaction", a:"Loi de vitesse : $v = k[A]^\\alpha[B]^\\beta\\dots$ Ordre partiel par rapport à A : $\\alpha$. Ordre global : $\\alpha+\\beta+\\dots$ ($k$ = constante de vitesse, dépend de $T$)."},
    {id:"def-temps-demi-reaction", type:"def", q:"Définir le temps de demi-réaction $t_{1/2}$", a:"Temps au bout duquel l'avancement (ou la concentration du réactif limitant) a atteint la moitié de sa valeur finale."},
    {id:"formule-ordre-0", type:"formule", q:"Loi intégrée et $t_{1/2}$ pour un ordre 0", a:"$$[A] = [A]_0 - kt \\qquad t_{1/2} = \\dfrac{[A]_0}{2k}$$"},
    {id:"formule-ordre-1", type:"formule", q:"Loi intégrée et $t_{1/2}$ pour un ordre 1", a:"$$[A] = [A]_0 e^{-kt} \\qquad t_{1/2} = \\dfrac{\\ln 2}{k}$$ ($t_{1/2}$ indépendant de $[A]_0$, signature caractéristique de l'ordre 1)"},
    {id:"formule-ordre-2", type:"formule", q:"Loi intégrée et $t_{1/2}$ pour un ordre 2 (un seul réactif)", a:"$$\\dfrac{1}{[A]} = \\dfrac{1}{[A]_0} + kt \\qquad t_{1/2} = \\dfrac{1}{k[A]_0}$$"},
    {id:"methode-determination-ordre", type:"méthode", q:"Méthode : déterminer l'ordre d'une réaction (méthode intégrale)", a:"Tracer $[A]$, $\\ln[A]$, et $1/[A]$ en fonction de $t$ ; la courbe qui donne une droite indique l'ordre (0, 1, ou 2 respectivement). Le coefficient directeur donne $k$ (ou $-k$)."},
    {id:"methode-determination-ordre-differentielle", type:"méthode", q:"Méthode : déterminer l'ordre d'une réaction (méthode différentielle)", a:"Mesurer la vitesse initiale $v_0$ pour différentes concentrations initiales $[A]_0$ ; tracer $\\ln(v_0)$ en fonction de $\\ln([A]_0)$ : la pente donne l'ordre partiel $\\alpha$."},
    {id:"def-facteurs-cinetiques-rappel", type:"def", q:"Rappel : facteurs cinétiques", a:"Température (loi d'Arrhenius), concentration des réactifs (via la loi de vitesse), catalyseur (abaisse l'énergie d'activation), et parfois solvant, lumière, force ionique."},
    {id:"formule-arrhenius", type:"formule", q:"Loi d'Arrhenius", a:"$$k(T) = A\\, e^{-E_a/(RT)}$$ $E_a$ : énergie d'activation (J/mol), $A$ : facteur pré-exponentiel, $R$ : constante des gaz parfaits."},
    {id:"prop-linearisation-arrhenius", type:"propriété", q:"Linéarisation de la loi d'Arrhenius", a:"$$\\ln k = \\ln A - \\dfrac{E_a}{R}\\cdot\\dfrac{1}{T}$$ Tracer $\\ln k$ en fonction de $1/T$ donne une droite de pente $-E_a/R$."},
    {id:"def-acte-elementaire-molecularite", type:"def", q:"Définir acte élémentaire et molécularité", a:"Acte élémentaire : étape microscopique se déroulant en une seule fois, sans intermédiaire isolable. Molécularité : nombre d'entités qui réagissent simultanément dans l'acte élémentaire (mono-, bi-, tri-moléculaire)."},
    {id:"prop-loi-vitesse-acte-elementaire", type:"propriété", q:"Loi de vitesse d'un acte élémentaire", a:"Pour un acte élémentaire, l'ordre partiel de chaque espèce égale son coefficient stœchiométrique (contrairement à une réaction globale où l'ordre est déterminé expérimentalement)."},
    {id:"def-mecanisme-reactionnel", type:"def", q:"Définir un mécanisme réactionnel", a:"Succession d'actes élémentaires (via des intermédiaires réactionnels) qui, mis bout à bout, redonnent le bilan de la réaction globale."},
    {id:"def-intermediaire-reactionnel", type:"def", q:"Définir un intermédiaire réactionnel", a:"Espèce formée puis consommée au cours du mécanisme, non présente dans le bilan global, généralement très réactive et en faible concentration (radical, carbocation...)."},
    {id:"def-aeqs", type:"def", q:"Définir l'approximation des états quasi-stationnaires (AEQS)", a:"Pour un intermédiaire réactionnel très réactif : $\\dfrac{d[\\text{intermédiaire}]}{dt} \\approx 0$ après une brève période d'induction — sa vitesse de formation égale sa vitesse de disparition."},
    {id:"methode-application-aeqs", type:"méthode", q:"Méthode : appliquer l'AEQS pour établir une loi de vitesse", a:"1) Écrire les vitesses de formation/disparition de chaque intermédiaire.&lt;br&gt;2) Appliquer l'AEQS (somme nulle) pour exprimer la concentration de l'intermédiaire en fonction des réactifs.&lt;br&gt;3) Réinjecter dans la loi de vitesse de la réaction globale."},
    {id:"def-etape-cinetiquement-determinante", type:"def", q:"Définir l'étape cinétiquement déterminante (limitante)", a:"L'étape la plus lente d'un mécanisme, qui impose sa vitesse à la réaction globale (les autres étapes rapides n'influencent pas la cinétique globale)."},
    {id:"def-catalyse", type:"def", q:"Définir un catalyseur et les types de catalyse", a:"Catalyseur : espèce qui accélère une réaction sans être consommée (régénérée en fin de cycle), en offrant un mécanisme alternatif d'énergie d'activation plus faible. Homogène : même phase que les réactifs. Hétérogène : phase différente (souvent solide). Enzymatique : catalyseur biologique (protéine)."},
    {id:"prop-catalyseur-equilibre", type:"propriété", q:"Effet d'un catalyseur sur l'équilibre thermodynamique", a:"Un catalyseur accélère l'atteinte de l'équilibre mais ne modifie ni $K^\\circ$ ni la composition finale à l'équilibre (contrôle cinétique, pas thermodynamique)."}
  ]
});
