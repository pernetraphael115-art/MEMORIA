export const grammarB2 = [
  {
    id: "b2-01", level: "b2", number: 33,
    title: "Le subjonctif imparfait",
    desc: "Hablara/hablase, comiera/comiese...",
    content: `
      <h2>Le subjonctif imparfait (imperfecto de subjuntivo)</h2>
      <p>Utilisé dans les mêmes contextes que le subjonctif présent, mais quand le verbe principal est au passé ou au conditionnel.</p>
      <h3>Formation</h3>
      <p>À partir de la 3e personne du pluriel du passé simple → enlever <strong>-ron</strong> → ajouter les terminaisons :</p>
      <table class="grammar-table">
        <tr><th>Pronom</th><th>Forme en -RA</th><th>Forme en -SE</th></tr>
        <tr><td>Yo</td><td>hablara</td><td>hablase</td></tr>
        <tr><td>Tú</td><td>hablaras</td><td>hablases</td></tr>
        <tr><td>Él</td><td>hablara</td><td>hablase</td></tr>
        <tr><td>Nosotros</td><td>habláramos</td><td>hablásemos</td></tr>
        <tr><td>Vosotros</td><td>hablarais</td><td>hablaseis</td></tr>
        <tr><td>Ellos</td><td>hablaran</td><td>hablasen</td></tr>
      </table>
      <div class="tip-box">
        <strong>💡</strong> Les deux formes (-RA et -SE) sont interchangeables. La forme en <strong>-RA est plus courante</strong> à l'oral.
      </div>
      <h3>Exemples avec des irréguliers</h3>
      <p>Tener → tuvieron → tuviera | Hacer → hicieron → hiciera | Ir/Ser → fueron → fuera</p>
      <div class="example-box">
        <div class="example-es">Quería que vinieras a mi fiesta. Si pudiera, te ayudaría.</div>
        <div class="example-fr">Je voulais que tu viennes à ma fête. Si je pouvais, je t'aiderais.</div>
      </div>
    `,
    exercises: [
      { type: "fill", question: "Formez le subj. imparfait : tener (yo) → ___", answer: "tuviera", hint: "Tuvieron → tuviera" },
      { type: "fill", question: "Complétez : Quería que ella ___ (venir).", answer: "viniera", hint: "Vinieron → viniera" },
      { type: "qcm", question: "Les formes en -RA et -SE sont :", options: ["Différentes en sens", "Interchangeables", "Utilisées dans des régions différentes"], correct: 1 }
    ]
  },
  {
    id: "b2-02", level: "b2", number: 34,
    title: "Les phrases conditionnelles",
    desc: "Si + subjonctif = conditionnel",
    content: `
      <h2>Les phrases conditionnelles (oraciones condicionales)</h2>
      <h3>Type 1 : Réel / Probable (présent)</h3>
      <p><strong>Si + indicatif présent, indicatif présent/futur</strong></p>
      <div class="example-box">
        <div class="example-es">Si estudias, aprobarás el examen.</div>
        <div class="example-fr">Si tu étudies, tu réussiras l'examen.</div>
      </div>
      <h3>Type 2 : Irréel / Hypothétique (présent)</h3>
      <p><strong>Si + subjonctif imparfait, conditionnel</strong></p>
      <div class="example-box">
        <div class="example-es">Si tuviera más dinero, viajaría por el mundo.</div>
        <div class="example-fr">Si j'avais plus d'argent, je voyagerais à travers le monde.</div>
      </div>
      <h3>Type 3 : Irréel / Passé (impossible)</h3>
      <p><strong>Si + subjonctif plus-que-parfait, conditionnel passé</strong></p>
      <div class="example-box">
        <div class="example-es">Si hubiera estudiado más, habría aprobado.</div>
        <div class="example-fr">Si j'avais étudié davantage, j'aurais réussi.</div>
      </div>
      <div class="tip-box">
        <strong>💡 JAMAIS de subjonctif ou de conditionnel après "si" en phrase conditionnelle standard !</strong> Contrairement au français, on ne dit JAMAIS "si tendría" ou "si tendré".
      </div>
    `,
    exercises: [
      { type: "fill", question: "Complétez : Si yo ___ (ser) rico, compraría una casa en la playa.", answer: "fuera", hint: "Hypothétique → subjonctif imparfait" },
      { type: "qcm", question: "'Si tengo tiempo, ___ al cine.' — Quel temps pour le verbe ?", options: ["Conditionnel (iría)", "Futur (iré)", "Subjonctif (vaya)"], correct: 1 },
      { type: "fill", question: "Complétez : Si ___ (haber) estudiado, habría aprobado.", answer: "hubiera", hint: "Type 3 : subjonctif plus-que-parfait" }
    ]
  },
  {
    id: "b2-03", level: "b2", number: 35,
    title: "La voix passive et le 'se' impersonnel",
    desc: "Fue construido, se dice, se vende...",
    content: `
      <h2>La voix passive</h2>
      <h3>Passive avec SER (formelle, peu courante à l'oral)</h3>
      <p><strong>SER + participe passé (accordé) + por + agent</strong></p>
      <div class="example-box">
        <div class="example-es">El libro fue escrito por Cervantes.</div>
        <div class="example-fr">Le livre a été écrit par Cervantès.</div>
      </div>
      <h3>Passive pronominale avec SE (beaucoup plus courante !)</h3>
      <p>On préfère largement cette construction en espagnol :</p>
      <div class="example-box">
        <div class="example-es">Se habla español aquí. / Se venden pisos.</div>
        <div class="example-fr">On parle espagnol ici. / Des appartements sont vendus.</div>
      </div>
      <h3>SE impersonnel</h3>
      <p>Pour les phrases sans sujet défini (comme "on" en français) :</p>
      <ul>
        <li><em>Se dice que...</em> → On dit que...</li>
        <li><em>Se puede...</em> → On peut...</li>
        <li><em>Se necesita...</em> → On a besoin de...</li>
        <li><em>¿Cómo se dice...?</em> → Comment dit-on... ?</li>
      </ul>
      <div class="tip-box">
        <strong>💡 En espagnol oral, la voix passive avec SER est rare.</strong> On préfère toujours la construction avec SE ou simplement la voix active.
      </div>
    `,
    exercises: [
      { type: "fill", question: "Traduisez : On parle espagnol ici → ___ habla español aquí.", answer: "Se", hint: "SE impersonnel" },
      { type: "qcm", question: "Quelle construction passive est la plus courante à l'oral ?", options: ["SER + participe", "SE + verbe", "Les deux sont aussi courantes"], correct: 1 },
      { type: "fill", question: "Traduisez : Comment dit-on 'merci' ? → ¿Cómo ___ dice 'merci'?", answer: "se", hint: "SE impersonnel" }
    ]
  },
  {
    id: "b2-04", level: "b2", number: 36,
    title: "Le futur antérieur et le conditionnel passé",
    desc: "Habré hablado, habría comido...",
    content: `
      <h2>Temps composés avancés</h2>
      <h3>Futur antérieur (futuro perfecto)</h3>
      <p><strong>HABER au futur + participe passé</strong></p>
      <table class="grammar-table">
        <tr><td>Yo habré hablado</td><td>Nosotros habremos hablado</td></tr>
        <tr><td>Tú habrás hablado</td><td>Vosotros habréis hablado</td></tr>
        <tr><td>Él habrá hablado</td><td>Ellos habrán hablado</td></tr>
      </table>
      <p>Usage : action future achevée avant un moment donné, ou <strong>supposition sur le passé</strong>.</p>
      <div class="example-box">
        <div class="example-es">Para las 8, ya habré terminado. / ¿Habrá salido ya? (Il sera déjà parti ?)</div>
      </div>
      <h3>Conditionnel passé (condicional perfecto)</h3>
      <p><strong>HABER au conditionnel + participe passé</strong></p>
      <table class="grammar-table">
        <tr><td>Yo habría hablado</td><td>Nosotros habríamos hablado</td></tr>
        <tr><td>Tú habrías hablado</td><td>Vosotros habríais hablado</td></tr>
        <tr><td>Él habría hablado</td><td>Ellos habrían hablado</td></tr>
      </table>
      <p>Usage : action qui <strong>aurait eu lieu</strong> dans d'autres conditions.</p>
      <div class="example-box">
        <div class="example-es">Habría ido contigo, pero estaba enfermo.</div>
        <div class="example-fr">Je serais allé avec toi, mais j'étais malade.</div>
      </div>
    `,
    exercises: [
      { type: "fill", question: "Conjuguez : Para mañana yo ya ___ (terminar) el proyecto.", answer: "habré terminado", hint: "Futur antérieur" },
      { type: "fill", question: "Conjuguez : Yo ___ (ir) contigo si hubiera sabido.", answer: "habría ido", hint: "Conditionnel passé" }
    ]
  },
  {
    id: "b2-05", level: "b2", number: 37,
    title: "Indicatif vs subjonctif en contexte",
    desc: "Les nuances et les cas ambigus",
    content: `
      <h2>Quand l'indicatif et le subjonctif changent le sens</h2>
      <p>Certaines constructions peuvent utiliser les deux modes, mais le sens change :</p>
      <h3>Aunque (bien que / même si)</h3>
      <ul>
        <li><em>Aunque <strong>llueve</strong>, salgo</em> → Même s'il <strong>pleut</strong> (c'est un fait), je sors.</li>
        <li><em>Aunque <strong>llueva</strong>, saldré</em> → Même s'il <strong>pleut</strong> (hypothèse), je sortirai.</li>
      </ul>
      <h3>Buscar / Necesitar</h3>
      <ul>
        <li><em>Busco una casa que <strong>tiene</strong> jardín</em> → (je sais qu'elle existe)</li>
        <li><em>Busco una casa que <strong>tenga</strong> jardín</em> → (n'importe laquelle qui ait un jardin)</li>
      </ul>
      <h3>Cuando (quand)</h3>
      <ul>
        <li><em>Cuando <strong>llego</strong> a casa...</em> → Quand j'arrive (habitude)</li>
        <li><em>Cuando <strong>llegue</strong> a casa...</em> → Quand j'arriverai (futur)</li>
      </ul>
      <div class="tip-box">
        <strong>💡 Règle du futur :</strong> Après <em>cuando, en cuanto, tan pronto como</em> + action future → <strong>subjonctif</strong> (pas de futur !).
        <br><em>Cuando <strong>llegues</strong>, llámame.</em> (Quand tu arriveras, appelle-moi.)
      </div>
    `,
    exercises: [
      { type: "qcm", question: "'Cuando ___ (llegar) a casa, te llamaré.' — Quel mode ?", options: ["llego (indicatif)", "llegue (subjonctif)"], correct: 1 },
      { type: "qcm", question: "'Aunque llueve, salgo' vs 'Aunque llueva, saldré' :", options: ["Le premier est un fait, le second une hypothèse", "Les deux sont identiques", "Le premier est au futur"], correct: 0 }
    ]
  },
  {
    id: "b2-06", level: "b2", number: 38,
    title: "Les registres de langue",
    desc: "Formel vs familier, tú vs usted",
    content: `
      <h2>Registres de langue</h2>
      <h3>Registre familier (coloquial)</h3>
      <ul>
        <li>Utilise <em>tú</em> et <em>vosotros</em></li>
        <li>Contractions et expressions → <em>¿Qué tal? Pa' qué, tío/tía</em></li>
        <li>Vocabulaire informel → <em>mola (c'est cool), currar (bosser), pasta (fric)</em></li>
        <li>Diminutifs fréquents → <em>momentito, cerquita, poquito</em></li>
      </ul>
      <h3>Registre formel</h3>
      <ul>
        <li>Utilise <em>usted</em> et <em>ustedes</em></li>
        <li>Formules de politesse → <em>Le agradecería que..., Disculpe, Tenga la amabilidad de...</em></li>
        <li>Vocabulaire soutenu → <em>efectuar (effectuer), solicitar (demander), remitir (envoyer)</em></li>
        <li>Subjonctif fréquent → <em>Espero que no le importe...</em></li>
      </ul>
      <h3>Correspondance écrite</h3>
      <table class="grammar-table">
        <tr><th>Informel</th><th>Formel</th></tr>
        <tr><td>¡Hola!</td><td>Estimado/a señor/a:</td></tr>
        <tr><td>¿Qué tal?</td><td>Espero que se encuentre bien.</td></tr>
        <tr><td>Un abrazo / Besos</td><td>Atentamente / Le saluda cordialmente</td></tr>
      </table>
      <div class="example-box">
        <div class="example-es">Informel : ¡Oye, tío! ¿Quedamos mañana?<br>Formel : Disculpe, ¿sería posible concertar una cita?</div>
      </div>
    `,
    exercises: [
      { type: "qcm", question: "'Mola' est du registre :", options: ["Formel", "Familier", "Littéraire"], correct: 1 },
      { type: "qcm", question: "Comment finir un email formel ?", options: ["Un abrazo", "Besos", "Atentamente", "Hasta luego"], correct: 2 }
    ]
  },
  {
    id: "b2-07", level: "b2", number: 39,
    title: "Verbes pronominaux avancés",
    desc: "Expressions idiomatiques avec SE",
    content: `
      <h2>Verbes pronominaux : usages avancés</h2>
      <p>Au-delà du simple réfléchi, les verbes pronominaux espagnols ont des usages plus nuancés :</p>
      <h3>SE accidentel / involontaire</h3>
      <p>Pour exprimer que quelque chose arrive de manière non intentionnelle :</p>
      <ul>
        <li><em>Se me cayó el vaso</em> → Le verre m'est tombé (des mains)</li>
        <li><em>Se me olvidó</em> → J'ai oublié (ça m'a échappé)</li>
        <li><em>Se nos rompió el coche</em> → Notre voiture est tombée en panne</li>
        <li><em>Se te escapó un detalle</em> → Un détail t'a échappé</li>
      </ul>
      <h3>Verbes qui changent de sens avec SE</h3>
      <table class="grammar-table">
        <tr><th>Sans SE</th><th>Avec SE</th></tr>
        <tr><td>ir (aller)</td><td>irse (s'en aller, partir)</td></tr>
        <tr><td>dormir (dormir)</td><td>dormirse (s'endormir)</td></tr>
        <tr><td>poner (mettre)</td><td>ponerse (se mettre à / devenir)</td></tr>
        <tr><td>quedar (rester, avoir rdv)</td><td>quedarse (rester sur place)</td></tr>
        <tr><td>llevar (porter/emporter)</td><td>llevarse (bien/mal) (s'entendre)</td></tr>
      </table>
      <div class="example-box">
        <div class="example-es">Se me cayó el móvil y se me rompió la pantalla. ¡Me puse muy triste!</div>
        <div class="example-fr">Mon téléphone m'est tombé et l'écran s'est cassé. Je suis devenu très triste !</div>
      </div>
    `,
    exercises: [
      { type: "fill", question: "Traduisez : Le verre m'est tombé → ___ me ___ el vaso.", answer: "Se...cayó", hint: "SE accidentel" },
      { type: "qcm", question: "'Ponerse' peut signifier :", options: ["Se mettre à / devenir", "Poser quelque chose", "Se battre"], correct: 0 }
    ]
  },
  {
    id: "b2-08", level: "b2", number: 40,
    title: "Récapitulatif et pièges courants",
    desc: "Les erreurs les plus fréquentes des francophones",
    content: `
      <h2>Les pièges classiques des francophones</h2>
      <h3>1. Ser vs Estar — les cas piégeux</h3>
      <ul>
        <li><em>Ser aburrido</em> = Être ennuyeux ≠ <em>Estar aburrido</em> = S'ennuyer</li>
        <li><em>Ser listo</em> = Être intelligent ≠ <em>Estar listo</em> = Être prêt</li>
        <li><em>Ser malo</em> = Être méchant ≠ <em>Estar malo</em> = Être malade</li>
        <li><em>Ser rico</em> = Être riche ≠ <em>Estar rico</em> = Être délicieux</li>
      </ul>
      <h3>2. Faux amis français-espagnol</h3>
      <table class="grammar-table">
        <tr><th>Espagnol</th><th>≠ Français</th><th>= Signifie</th></tr>
        <tr><td>constipado</td><td>constipé</td><td>enrhumé</td></tr>
        <tr><td>embarazada</td><td>embarrassée</td><td>enceinte</td></tr>
        <tr><td>éxito</td><td>exit</td><td>succès</td></tr>
        <tr><td>largo</td><td>large</td><td>long</td></tr>
        <tr><td>molestar</td><td>molester</td><td>déranger</td></tr>
        <tr><td>recordar</td><td>recorder</td><td>se souvenir</td></tr>
        <tr><td>soportar</td><td>supporter</td><td>supporter (endurer)</td></tr>
        <tr><td>subir</td><td>subir</td><td>monter</td></tr>
      </table>
      <h3>3. Erreurs de structure</h3>
      <ul>
        <li>❌ <em>Yo soy 25 años</em> → ✅ <em>Tengo 25 años</em> (avoir + âge)</li>
        <li>❌ <em>Es lloviendo</em> → ✅ <em>Está lloviendo</em> (estar + gérondif)</li>
        <li>❌ <em>Me gusta los gatos</em> → ✅ <em>Me <strong>gustan</strong> los gatos</em></li>
        <li>❌ <em>Si tendría dinero</em> → ✅ <em>Si <strong>tuviera</strong> dinero</em></li>
      </ul>
      <div class="tip-box">
        <strong>💡 Conseil final :</strong> Ne traduis jamais mot à mot du français ! L'espagnol a sa propre logique. Pense en espagnol, pas en français traduit.
      </div>
    `,
    exercises: [
      { type: "qcm", question: "'Estoy aburrido' signifie :", options: ["Je suis ennuyeux", "Je m'ennuie", "Je suis fatigué"], correct: 1 },
      { type: "qcm", question: "'Embarazada' signifie :", options: ["Embarrassée", "Enceinte", "En colère"], correct: 1 },
      { type: "qcm", question: "La bonne phrase est :", options: ["Si tendría dinero, viajaría", "Si tuviera dinero, viajaría", "Si tenía dinero, viajo"], correct: 1 },
      { type: "qcm", question: "'Me gustan los gatos' est correct car :", options: ["Gustar s'accorde avec 'me'", "Gustar s'accorde avec 'los gatos' (pluriel)", "C'est une exception"], correct: 1 }
    ]
  }
];
