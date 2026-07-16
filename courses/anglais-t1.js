/* Cours : Anglais — Les temps : traduction du français vers l'anglais (thème) */
window.OSCILLO_COURSES = window.OSCILLO_COURSES || [];
window.OSCILLO_COURSES.push({
  subject: "anglais",
  id: "t1",
  name: "Les temps : traduction français → anglais",
  cards: [
    {id:"present-general", type:"règle", q:"Présent français = fait général, vérité, habitude — quel temps anglais ?", a:"Present simple.<br>« Elle travaille à Paris. » → She works in Paris."},
    {id:"present-encours", type:"règle", q:"Présent français = action en train de se dérouler maintenant — quel temps anglais ?", a:"Present continuous.<br>« Il pleut en ce moment. » → It is raining at the moment."},
    {id:"present-depuis", type:"piège", q:"Présent français + « depuis + durée/date » — piège classique, quel temps anglais ?", a:"Present perfect (simple ou continuous) + for/since — jamais present simple.<br>« J'habite ici depuis 10 ans. » → I have lived here for 10 years."},
    {id:"present-futur-proche", type:"règle", q:"Présent français à valeur de futur proche programmé — quel temps anglais ?", a:"Present continuous ou will.<br>« Je le retrouve demain. » → I'm meeting him tomorrow."},
    {id:"pc-date", type:"règle", q:"Passé composé avec date précise ou action ponctuelle datée — quel temps anglais ?", a:"Preterit (simple past).<br>« Il a ouvert la porte hier. » → He opened the door yesterday."},
    {id:"pc-resultat", type:"piège", q:"Passé composé sans date, avec résultat/lien visible dans le présent (déjà, jamais, encore) — quel temps anglais ?", a:"Present perfect.<br>« J'ai déjà vu ce film. » → I have already seen this film."},
    {id:"pc-vs-preterit", type:"méthode", q:"Comment trancher entre preterit et present perfect pour un passé composé français ?", a:"Date/moment précis → preterit.<br>Pas de date + résultat présent (déjà/jamais/encore) → present perfect.<br>Depuis + durée/date → present perfect.<br>Succession d'actions dans un récit → preterit."},
    {id:"passe-simple", type:"règle", q:"Passé simple français (registre littéraire) — quel temps anglais ?", a:"Preterit (simple past). L'anglais ne distingue pas passé simple / passé composé : un seul temps couvre les deux.<br>« Il ouvrit la porte et sortit. » → He opened the door and went out."},
    {id:"imparfait-description", type:"règle", q:"Imparfait = description, état, décor — quel temps anglais ?", a:"Preterit (souvent avec verbes d'état : was/were, had, seemed...).<br>« Le ciel était gris. » → The sky was grey."},
    {id:"imparfait-interrompu", type:"règle", q:"Imparfait = action en cours interrompue par une autre action — quel temps anglais ?", a:"Past continuous (+ preterit pour l'action qui interrompt).<br>« Il lisait quand le téléphone sonna. » → He was reading when the phone rang."},
    {id:"imparfait-habitude", type:"piège", q:"Imparfait = habitude répétée dans le passé — piège, quel temps anglais ?", a:"used to + BV ou would + BV (registre plus littéraire) — pas un simple preterit isolé.<br>« Chaque été, ils allaient à la plage. » → Every summer, they used to go to the beach."},
    {id:"would-etat", type:"piège", q:"Peut-on utiliser « would » pour un verbe d'état (be, have, know, like) à valeur d'habitude passée ?", a:"Non — would ne s'utilise pas pour les verbes d'état. Préférer used to.<br>« Il avait une voiture rouge » → He used to have a red car (pas would have)."},
    {id:"pqp", type:"règle", q:"Plus-que-parfait français = action antérieure à une autre action déjà au passé — quel temps anglais ?", a:"Past perfect.<br>« Elle était partie quand je suis arrivé. » → She had left when I arrived."},
    {id:"pqp-depuis", type:"piège", q:"Plus-que-parfait avec « depuis » (durée qui continuait dans le passé) — quel temps anglais ?", a:"Past perfect (simple ou continuous) + for/since.<br>« Il habitait là depuis 10 ans quand il est mort. » → He had lived there for 10 years when he died."},
    {id:"futur-simple", type:"règle", q:"Futur simple = prédiction, décision, promesse — quel temps anglais ?", a:"will + BV.<br>« Il pleuvra demain. » → It will rain tomorrow."},
    {id:"futur-proche-visible", type:"règle", q:"Futur proche avec intention déjà décidée / indice visible — quel temps anglais ?", a:"be going to + BV.<br>« Il va pleuvoir » (en regardant les nuages) → It's going to rain."},
    {id:"futur-programme", type:"règle", q:"Futur programmé personnellement (rendez-vous, projet arrangé) — quel temps anglais ?", a:"Present continuous.<br>« Je pars demain. » → I'm leaving tomorrow."},
    {id:"futur-anterieur", type:"règle", q:"Futur antérieur (action future achevée avant une autre) — quel temps anglais ?", a:"will have + V-en.<br>« Il aura fini avant midi. » → He will have finished by noon."},
    {id:"futur-subordonnee", type:"piège", q:"Futur dans une subordonnée de temps (quand, dès que, après que...) — piège fréquent, quel temps anglais ?", a:"Present simple, jamais le futur — contrairement au français qui met le futur des deux côtés.<br>« Quand il arrivera, nous partirons. » → When he arrives, we will leave (pas will arrive)."},
    {id:"cond-present", type:"règle", q:"Conditionnel présent = hypothèse irréelle du présent/futur (si + imparfait) — structure anglaise ?", a:"would + BV (principale) / if + preterit (subordonnée).<br>« Si j'avais de l'argent, je voyagerais. » → If I had money, I would travel."},
    {id:"cond-passe", type:"règle", q:"Conditionnel passé = hypothèse irréelle du passé, regret (si + plus-que-parfait) — structure anglaise ?", a:"would have + V-en (principale) / if + past perfect (subordonnée).<br>« Si elle avait su, elle serait venue. » → If she had known, she would have come."},
    {id:"preterit-irreel", type:"piège", q:"Dans « if + preterit », le preterit anglais est-il un vrai passé ?", a:"Non — c'est une marque grammaticale de l'irréel, pas un temps passé à proprement parler. Ne pas le traduire comme un passé."},
    {id:"futur-du-passe", type:"règle", q:"Futur du passé (discours indirect : « il a dit qu'il viendrait ») — quel temps anglais ?", a:"would + BV.<br>« Il a dit qu'il viendrait. » → He said he would come."}
  ]
});
