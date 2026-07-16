/* Cours : Physique — S3 Ondes stationnaires mécaniques */
window.OSCILLO_COURSES = window.OSCILLO_COURSES || [];
window.OSCILLO_COURSES.push({
  subject: "physique",
  id: "s3",
  name: "Ondes stationnaires mécaniques",
  cards: [
    {id:"def-onde-stat", type:"def", q:"Définition d'une onde stationnaire", a:"Onde dont les variables d'espace et de temps sont découplées : $s(x,t) = f(x)g(t)$. Elle ne se propage pas, elle vibre sur place."},
    {id:"formule-onde-stat-sin", type:"formule", q:"Forme générale d'une onde stationnaire sinusoïdale", a:"$$s(x,t) = A\\cos(\\omega t+\\varphi)\\sin(kx+\\psi)$$"},
    {id:"def-noeud", type:"def", q:"Définition d'un nœud de vibration + espacement entre deux nœuds consécutifs", a:"Point où l'amplitude de l'onde stationnaire est nulle. Deux nœuds consécutifs sont espacés de $\\dfrac{\\lambda}{2}$."},
    {id:"def-ventre", type:"def", q:"Définition d'un ventre de vibration + espacement entre deux ventres consécutifs", a:"Point où l'amplitude est maximale. Deux ventres consécutifs sont espacés de $\\dfrac{\\lambda}{2}$."},
    {id:"def-noeud-ventre", type:"def", q:"Distance entre un nœud et le ventre le plus proche", a:"$$\\dfrac{\\lambda}{4}$$"},
    {id:"def-modes-propres", type:"def", q:"Modes propres d'une corde fixée aux deux extrémités : principe ?", a:"Les pulsations temporelle et spatiale sont quantifiées. Chaque pulsation $\\omega_n$ ($n\\in\\mathbb{N}^*$) définit un mode de vibration sélectionné par le dispositif : c'est la résonance."},
    {id:"formule-melde", type:"formule", q:"Célérité des ondes sur une corde de Melde (tension $T$, masse linéique $\\mu$)", a:"$$c = \\sqrt{\\dfrac{T}{\\mu}}$$"},
    {id:"methode-modes", type:"méthode", q:"Méthode pour retrouver les fréquences des modes propres d'une corde fixée : les étapes ?", a:"1. Repérer les nœuds imposés par les points d'attache.<br>2. Relier $\\lambda_n$ à la longueur $L$ pour chaque mode.<br>3. En déduire $f_n$ à partir de $\\lambda_n$ et $c$.<br>4. La fréquence fondamentale est $f_1$ ($n=1$)."},
    {id:"def-cl-acoustique", type:"def", q:"Conditions aux limites acoustiques : extrémité fermée / ouverte d'un tuyau ?", a:"Extrémité fermée = ventre de vibration (de surpression).<br>Extrémité ouverte = nœud de vibration (surpression nulle)."}
  ]
});
