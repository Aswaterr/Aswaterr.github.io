/* Cours : Sciences de l'ingénieur — Ch2 : Analyse structurelle d'un système, chaînes fonctionnelles */
window.OSCILLO_COURSES = window.OSCILLO_COURSES || [];
window.OSCILLO_COURSES.push({
  subject: "si",
  id: "si2",
  name: "Analyse structurelle : chaînes fonctionnelles",
  cards: [
    {id:"def-partie-operative", type:"def", q:"Définition de la partie opérative (PO)", a:"Entité fonctionnelle qui agit sur la matière d'œuvre afin d'élaborer la valeur ajoutée désirée."},
    {id:"def-partie-commande", type:"def", q:"Définition de la partie commande (PC)", a:"Entité fonctionnelle qui élabore les ordres vers les préactionneurs, à partir des informations issues de la PO (via capteurs) et des informations provenant de l'extérieur (homme ou autres PC)."},
    {id:"def-chaines-fonctionnelles", type:"def", q:"Les deux chaînes fonctionnelles d'un système automatisé", a:"Chaîne d'énergie (ou de puissance) : agit sur la matière d'œuvre.<br>Chaîne d'information : acquiert, traite et communique les informations qui pilotent la chaîne d'énergie."},
    {id:"formulaire-fonctions-chaine-energie", type:"formule", q:"Les fonctions techniques de la chaîne d'énergie et leurs composants associés", a:"ALIMENTER (unité d'alimentation) → DISTRIBUER/MODULER-DÉLIVRER (préactionneur) → CONVERTIR (actionneur) → TRANSMETTRE (transmetteur/adaptateur) → AGIR (effecteur)."},
    {id:"formulaire-fonctions-chaine-info", type:"formule", q:"Les fonctions techniques de la chaîne d'information et leurs composants associés", a:"ACQUÉRIR (capteur) → CODER/TRAITER/MÉMORISER (unité de commande : microcontrôleur, automate...) → COMMUNIQUER (interface de communication)."},
    {id:"propriete-double-signification-bloc", type:"propriété", q:"Pourquoi dit-on que chaque bloc d'une chaîne fonctionnelle a une double signification ?", a:"Une signification généraliste en termes de fonction d'automatisme (Acquérir, Traiter, Communiquer, Alimenter, Convertir, Transmettre, Agir) : les fonctions techniques.<br>Une signification particulière en termes de constituant (Capteur, Préactionneur, Actionneur, Transmetteur, Effecteur) : les groupes de composants."},
    {id:"exemple-composants-actionneur", type:"def", q:"Exemples de composants pour la fonction CONVERTIR (actionneur)", a:"Moteur électrique, moteur thermique, vérins hydraulique ou pneumatique."},
    {id:"exemple-composants-transmetteur", type:"def", q:"Rôle d'un transmetteur/adaptateur — 2 possibilités", a:"Transformer la nature du mouvement (poulies-courroies, vis-écrou, bielle-manivelle...) OU adapter l'énergie sans changer sa nature (engrenages, embrayages, variateurs de vitesse...)."},
    {id:"methode-schema-architecture-topo", type:"méthode", q:"Comment construire un schéma d'architecture topo-fonctionnelle ?", a:"Chaque bloc représente un composant de la chaîne (nom + fonction). Chaque liaison entre deux blocs représente le lien entre eux, avec la nature de l'information/énergie échangée précisée."},
    {id:"def-description-ibd-chaine", type:"def", q:"Comment représenter la chaîne d'information et la chaîne d'énergie en SysML ?", a:"Via un diagramme de bloc interne (IBD), qui permet de représenter les flux de puissance et d'information entre les fonctions génériques (Acquérir, Traiter, Communiquer, Alimenter, Distribuer, Convertir, Adapter, Agir)."}
  ]
});
