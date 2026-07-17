/* Cours : Physique — O2 Conditions de l'approximation de Gauss */
window.OSCILLO_COURSES = window.OSCILLO_COURSES || [];
window.OSCILLO_COURSES.push({
  subject: "physique",
  id: "o2",
  name: "Conditions de l'approximation de Gauss",
  cards: [
    {id:"def-objet-image", type:"def", q:"Définir point objet réel et point objet virtuel", a:"Objet réel : point d'où partent réellement les rayons lumineux arrivant sur le système.<br>Objet virtuel : point vers lequel semblent converger les rayons (leur prolongement au-delà du système passe par ce point)."},
    {id:"def-image-reelle-virtuelle", type:"def", q:"Définir point image réel et point image virtuel", a:"Image réelle : point par lequel passent réellement les rayons sortant du système.<br>Image virtuelle : point d'où semblent provenir les rayons sortants (prolongement des rayons au-delà du système)."},
    {id:"def-miroir-plan", type:"def", q:"Propriétés d'un miroir plan (3 points clés)", a:"Image symétrique de l'objet par rapport au plan du miroir.<br>Objet réel → image virtuelle.<br>Objet virtuel → image réelle."},
    {id:"methode-mesures-algebriques", type:"formule", q:"Relation de Chasles pour les mesures algébriques sur un axe orienté", a:"Pour $A, B, C$ sur $(\\Delta, \\vec{u})$ :<br>$$\\overline{AC} = \\overline{AB} + \\overline{BC}$$"},
    {id:"def-approx-gauss", type:"def", q:"Définir l'approximation de Gauss", a:"On ne considère que des rayons paraxiaux : proches de l'axe optique et peu inclinés par rapport à celui-ci."},
    {id:"def-stigmatisme-aplanetisme", type:"def", q:"Définir stigmatisme approché et aplanétisme approché", a:"Stigmatisme approché : le système donne une image ponctuelle approchée de tout point objet.<br>Aplanétisme approché : le système forme une image plane orthogonale à l'axe optique de tout objet plan orthogonal à l'axe optique."},
    {id:"def-foyers", type:"def", q:"Définir foyer principal objet $F$ et foyer principal image $F'$", a:"Foyer principal objet $F$ : son image par le système est à l'infini sur l'axe optique (les rayons issus de $F$ émergent parallèles à l'axe).<br>Foyer principal image $F'$ : image d'un point à l'infini sur l'axe (les rayons incidents parallèles à l'axe émergent en passant par $F'$)."},
    {id:"def-plans-focaux", type:"def", q:"Définir plan focal objet, plan focal image et système afocal", a:"Plan focal objet : plan passant par $F$, contient les foyers secondaires objets (images à l'infini).<br>Plan focal image : plan passant par $F'$, contient les foyers secondaires images (images de points à l'infini).<br>Système afocal : transforme un faisceau parallèle incident en faisceau parallèle émergent — n'a pas de foyer."},
    {id:"formule-vergence", type:"formule", q:"Vergence d'une lentille mince : définition et formule", a:"$$V = \\dfrac{1}{f'}$$ avec $f'$ la distance focale image"},
    {id:"methode-construire-image", type:"méthode", q:"Méthode pour construire l'image d'un point B par une lentille mince : les 3 rayons particuliers", a:"1. Rayon incident parallèle à l'axe optique → émerge en passant par $F'$.<br>2. Rayon incident passant par $F$ → émerge parallèle à l'axe optique.<br>3. Rayon incident passant par le centre optique $O$ → non dévié."},
    {id:"formule-grandissement", type:"formule", q:"Formule du grandissement transversal $\\gamma$ d'une lentille mince", a:"$$\\gamma = \\dfrac{\\overline{A'B'}}{\\overline{AB}} = \\dfrac{\\overline{OA'}}{\\overline{OA}} = -\\dfrac{f}{\\overline{FA}} = -\\dfrac{\\overline{F'A'}}{f'}$$"},
    {id:"formule-newton", type:"formule", q:"Formule de Newton pour une lentille mince", a:"$$\\overline{FA}\\cdot\\overline{F'A'} = -f'^2$$"},
    {id:"formule-descartes", type:"formule", q:"Formule de conjugaison de Descartes pour une lentille mince", a:"$$\\dfrac{1}{\\overline{OA'}} - \\dfrac{1}{\\overline{OA}} = \\dfrac{1}{f'} = V$$"}
  ]
});
