/* ============================================================
   MANIFESTE — liste des matières et des fichiers de cours
   ============================================================
   Pour ajouter un nouveau cours :
   1. Dépose le fichier courses/xxx.js à côté de celui-ci
   2. Ajoute son chemin dans OSCILLO_MANIFEST ci-dessous
   C'est tout — index.html n'a JAMAIS besoin d'être modifié.
   ============================================================ */

window.OSCILLO_SUBJECTS = [
  { id: "maths",     code: "CH1", name: "Mathématiques" },
  { id: "physique",  code: "CH2", name: "Physique" },
  { id: "chimie",    code: "CH3", name: "Chimie" },
  { id: "si",        code: "CH4", name: "Sciences de l'ingénieur" },
  { id: "anglais",   code: "CH5", name: "Anglais" },
  { id: "francais",  code: "CH6", name: "Français" }
];

window.OSCILLO_MANIFEST = [
  "courses/physique-s1.js",
  "courses/physique-s2.js",
  "courses/physique-s3.js"
];
