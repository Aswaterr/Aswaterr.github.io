/* Cours : Physique — M7 : Éléments de dynamique du solide */
window.OSCILLO_COURSES = window.OSCILLO_COURSES || [];
window.OSCILLO_COURSES.push({
  subject: "physique",
  id: "m7",
  name: "Éléments de dynamique du solide",
  cards: [
    {id:"formule-centre-masse", type:"formule", q:"Définir le centre de masse d'un solide (discret et continu)", a:"Discret : $$m_{tot}\\overrightarrow{OG}=\\sum_i m_i\\overrightarrow{OM_i}$$ Continu (masse volumique $\\rho$) : $$m_{tot}\\overrightarrow{OG}=\\iiint_{M\\in V} \\rho(M)\\,dV\\,\\overrightarrow{OM}$$"},
    {id:"def-translation-rotation", type:"def", q:"Définir un mouvement de translation et un mouvement de rotation autour d'un axe", a:"Translation : tous les points du solide ont le même vecteur vitesse à tout instant.<br>Rotation autour d'un axe : tous les points décrivent un cercle centré sur l'axe, avec la même vitesse angulaire $\\omega$."},
    {id:"formule-quantite-mouvement-solide", type:"formule", q:"Quantité de mouvement d'un solide et théorème associé", a:"$$\\vec{p}=\\sum_i m_i\\vec{v}(M_i)=m_{tot}\\vec{v}(G)$$ Théorème de la quantité de mouvement (référentiel galiléen, système fermé) : $$m\\vec{a}(G)=\\sum \\vec{F}_{ext}$$"},
    {id:"def-moment-inertie", type:"def", q:"Définir le moment d'inertie d'un solide par rapport à un axe ∆", a:"$$J_\\Delta=\\sum_i m_i r_i^2 \\qquad\\text{(généralisation continue)}\\qquad J_\\Delta=\\iiint_{M\\in V} dm\\,r_\\Delta^2$$ $r_i$ (ou $r_\\Delta$) : distance du point à l'axe ∆."},
    {id:"formule-moment-cinetique-solide-axe", type:"formule", q:"Moment cinétique d'un solide en rotation autour d'un axe fixe ∆ à la vitesse angulaire ω", a:"$$L_\\Delta=\\sum_i m_i r_i^2\\,\\omega=J_\\Delta\\,\\omega$$"},
    {id:"def-couple-liaison-pivot", type:"def", q:"Définir un couple de forces et une liaison pivot idéale", a:"Couple : moment d'un ensemble de forces de résultante nulle.<br>Liaison pivot : restreint le mouvement du solide à une rotation autour de l'axe de la liaison. Si la liaison est idéale (parfaite) autour de ∆, alors $\\mathcal{M}_\\Delta(\\text{liaison})=0$."},
    {id:"formule-theoreme-moment-cinetique-solide", type:"formule", q:"Théorème du moment cinétique pour un solide (cas général et rotation autour d'un axe fixe)", a:"Cas général (référentiel galiléen, système fermé, point A fixe) : $$\\dfrac{d\\vec{L_A}}{dt}=\\sum \\vec{\\mathcal{M}_A}(\\vec{F}_{ext}), \\qquad \\dfrac{dL_\\Delta}{dt}=\\sum \\mathcal{M}_\\Delta(\\vec{F}_{ext})$$ Solide en rotation autour d'un axe fixe ∆ : $$J_\\Delta\\dfrac{d\\omega}{dt}=\\sum \\mathcal{M}_\\Delta(\\vec{F}_{ext})$$"},
    {id:"formule-energie-cinetique-solide", type:"formule", q:"Énergie cinétique d'un solide en translation et en rotation autour d'un axe fixe", a:"Translation : $$E_c=\\dfrac12 m_{tot}v(G)^2$$ Rotation autour d'un axe fixe : $$E_c=\\dfrac12 J_\\Delta\\omega^2$$"},
    {id:"formule-theoreme-energie-cinetique-solide", type:"formule", q:"Théorème de l'énergie cinétique pour un système fermé (en puissance et en énergie)", a:"En puissance : $$\\dfrac{dE_c}{dt}=\\mathcal{P}_{ext}+\\mathcal{P}_{int}$$ En énergie : $$\\Delta E_c=W_{ext}+W_{int}$$ Pour un solide en rotation autour d'un axe fixe : $$\\mathcal{P}(\\vec{F}_{ext})=\\mathcal{M}_\\Delta(\\vec{F}_{ext})\\,\\omega$$"}
  ]
});
