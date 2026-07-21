/* Cours : Physique — E1 : Circuits linéaires dans l'ARQS */
window.OSCILLO_COURSES = window.OSCILLO_COURSES || [];
window.OSCILLO_COURSES.push({
  subject: "physique",
  id: "e1",
  name: "Circuits linéaires dans l'ARQS",
  cards: [
    {id:"def-charge-intensite", type:"def", q:"Définir la charge électrique et l'intensité du courant", a:"Charge électrique : grandeur algébrique, additive et quantifiée, $q=ne$ ($n\\in\\mathbb{N}$).<br>Intensité traversant une section $S$ d'un circuit : $$i=\\dfrac{dq}{dt}$$"},
    {id:"def-potentiel-tension", type:"def", q:"Définir le potentiel électrique et la tension entre deux points", a:"Potentiel électrique : propriété d'un point de l'espace reliée à l'énergie à fournir à une charge pour l'amener à ce point.<br>Tension entre deux points : $$U_{AB}=V_A-V_B$$"},
    {id:"def-arqs", type:"def", q:"Qu'est-ce que l'ARQS ? Condition de validité et conséquence", a:"Approximation des régimes quasi-stationnaires : on néglige la propagation des signaux électriques dans les conducteurs.<br>Condition : $Lf \\ll c$ ($L$ taille du circuit).<br>Conséquence : dans l'ARQS, le potentiel électrique est le même en tout point d'un fil."},
    {id:"formule-loi-noeuds", type:"formule", q:"Énoncer la loi des nœuds", a:"$$\\sum_k \\varepsilon_k i_k = 0 \\quad \\text{avec}\\ \\varepsilon_k = \\begin{cases}+1 & \\text{si } i_k \\text{ dirigé vers le nœud}\\\\ -1 & \\text{sinon}\\end{cases}$$"},
    {id:"formule-loi-mailles", type:"formule", q:"Énoncer la loi des mailles", a:"$$\\sum_k \\varepsilon_k u_k = 0 \\quad \\text{avec}\\ \\varepsilon_k = \\begin{cases}+1 & \\text{si } u_k \\text{ orienté dans le sens de la maille}\\\\ -1 & \\text{sinon}\\end{cases}$$"},
    {id:"propriete-convention-recepteur-generateur", type:"propriété", q:"Différencier convention récepteur et convention générateur", a:"Convention récepteur : le courant descend les potentiels dans son sens de passage réel ($u>0$, $i>0$), le dipôle convertit de l'énergie électrique en une autre forme.<br>Convention générateur : le courant remonte les potentiels ($u>0$, $i>0$), le dipôle convertit une énergie donnée en énergie électrique."},
    {id:"formule-puissance-electrostatique", type:"formule", q:"Exprimer la puissance reçue par un dipôle selon la convention utilisée", a:"$$p = \\begin{cases} ui & \\text{en convention récepteur}\\\\ -ui & \\text{en convention générateur}\\end{cases}$$"},
    {id:"def-resistor-loi-ohm", type:"def", q:"Définir le résistor idéal et donner la loi d'Ohm", a:"Composant pour lequel $u$ et $i$ sont proportionnels.<br>Loi d'Ohm en convention récepteur : $$u=Ri$$ avec $R$ la résistance, en ohm ($\\Omega$)."},
    {id:"formule-puissance-resistor", type:"formule", q:"Exprimer la puissance reçue par un résistor et le phénomène associé", a:"$$p=Ri^2=\\dfrac{u^2}{R} \\quad (p>0 : \\text{récepteur})$$ Conversion d'énergie électrique en énergie thermique : effet Joule."},
    {id:"formule-resistors-association", type:"formule", q:"Résistances équivalentes pour des résistors en série et en parallèle", a:"Série : $$R_{eq}=R_1+R_2$$ Parallèle : $$\\dfrac{1}{R_{eq}}=\\dfrac{1}{R_1}+\\dfrac{1}{R_2}$$"},
    {id:"formule-pont-diviseur-tension", type:"formule", q:"Donner les formules du pont diviseur de tension (deux résistances $R_1$, $R_2$ en série, tension totale $u$)", a:"$$u_1=\\dfrac{R_1}{R_1+R_2}u \\quad ; \\quad u_2=\\dfrac{R_2}{R_1+R_2}u$$"},
    {id:"formule-pont-diviseur-courant", type:"formule", q:"Donner les formules du pont diviseur de courant (deux résistances $R_1$, $R_2$ en parallèle, courant total $i$, conductances $G_i=1/R_i$)", a:"$$i_1=\\dfrac{G_1}{G_1+G_2}i=\\dfrac{1/R_1}{1/R_1+1/R_2}i \\quad ; \\quad i_2=\\dfrac{G_2}{G_1+G_2}i=\\dfrac{1/R_2}{1/R_1+1/R_2}i$$"},
    {id:"def-sources-ideales", type:"def", q:"Décrire une source idéale de tension et une source idéale de courant", a:"Source idéale de tension : impose $u=E$ quel que soit le courant débité.<br>Source idéale de courant : impose $i=\\eta$ quelle que soit la tension à ses bornes."},
    {id:"def-thevenin", type:"def", q:"Modèle de Thévenin : loi caractéristique et point de fonctionnement", a:"Source réelle de tension (f.é.m. $E$, résistance interne $R$) : $$u=E-Ri$$ Point de fonctionnement : intersection de la caractéristique du générateur et de celle du récepteur."},
    {id:"def-resistance-entree-sortie", type:"def", q:"Définir résistance d'entrée et résistance de sortie d'un appareil", a:"Résistance d'entrée $R_e=\\dfrac{u_e}{i_e}$ : caractérise un appareil se comportant comme un dipôle passif (recueille un signal).<br>Résistance de sortie $R_s$ : résistance interne d'un appareil se comportant comme un générateur de Thévenin (dipôle actif)."}
  ]
});
