export const grammarB1 = [
  {
    id: "b1-01", level: "b1", number: 23,
    title: "Le futur simple",
    desc: "Hablaré, comeré, viviré...",
    content: `
      <h2>Le futur simple (futuro simple)</h2>
      <p>Bonne nouvelle : le futur simple est très régulier ! On ajoute les terminaisons directement à <strong>l'infinitif entier</strong>.</p>
      <h3>Terminaisons (identiques pour -AR, -ER, -IR)</h3>
      <table class="grammar-table">
        <tr><th>Pronom</th><th>Terminaison</th><th>Hablar</th><th>Comer</th><th>Vivir</th></tr>
        <tr><td>Yo</td><td>-é</td><td>hablaré</td><td>comeré</td><td>viviré</td></tr>
        <tr><td>Tú</td><td>-ás</td><td>hablarás</td><td>comerás</td><td>vivirás</td></tr>
        <tr><td>Él</td><td>-á</td><td>hablará</td><td>comerá</td><td>vivirá</td></tr>
        <tr><td>Nosotros</td><td>-emos</td><td>hablaremos</td><td>comeremos</td><td>viviremos</td></tr>
        <tr><td>Vosotros</td><td>-éis</td><td>hablaréis</td><td>comeréis</td><td>viviréis</td></tr>
        <tr><td>Ellos</td><td>-án</td><td>hablarán</td><td>comerán</td><td>vivirán</td></tr>
      </table>
      <h3>Irréguliers (radical modifié)</h3>
      <table class="grammar-table">
        <tr><th>Verbe</th><th>Radical</th><th>Yo</th></tr>
        <tr><td>tener</td><td>tendr-</td><td>tendré</td></tr>
        <tr><td>poder</td><td>podr-</td><td>podré</td></tr>
        <tr><td>saber</td><td>sabr-</td><td>sabré</td></tr>
        <tr><td>hacer</td><td>har-</td><td>haré</td></tr>
        <tr><td>decir</td><td>dir-</td><td>diré</td></tr>
        <tr><td>salir</td><td>saldr-</td><td>saldré</td></tr>
        <tr><td>venir</td><td>vendr-</td><td>vendré</td></tr>
        <tr><td>poner</td><td>pondr-</td><td>pondré</td></tr>
        <tr><td>querer</td><td>querr-</td><td>querré</td></tr>
      </table>
      <div class="example-box">
        <div class="example-es">Mañana hablaré con mi jefe y le diré que necesito vacaciones.</div>
        <div class="example-fr">Demain je parlerai avec mon chef et je lui dirai que j'ai besoin de vacances.</div>
      </div>
    `,
    exercises: [
      { type: "fill", question: "Conjuguez : Mañana yo ___ (salir) temprano.", answer: "saldré", hint: "Salir → saldr- + é" },
      { type: "fill", question: "Conjuguez : ¿Tú ___ (poder) venir mañana?", answer: "podrás", hint: "Poder → podr- + ás" },
      { type: "qcm", question: "Au futur, les terminaisons s'ajoutent :", options: ["Au radical du verbe", "À l'infinitif entier", "Au participe passé"], correct: 1 }
    ]
  },
  {
    id: "b1-02", level: "b1", number: 24,
    title: "Le conditionnel",
    desc: "Hablaría, comería, viviría...",
    content: `
      <h2>Le conditionnel (condicional simple)</h2>
      <p>Même logique que le futur : terminaisons ajoutées à l'infinitif. Les <strong>mêmes verbes irréguliers</strong> que le futur !</p>
      <h3>Terminaisons</h3>
      <table class="grammar-table">
        <tr><th>Pronom</th><th>Terminaison</th><th>Hablar</th></tr>
        <tr><td>Yo</td><td>-ía</td><td>hablaría</td></tr>
        <tr><td>Tú</td><td>-ías</td><td>hablarías</td></tr>
        <tr><td>Él</td><td>-ía</td><td>hablaría</td></tr>
        <tr><td>Nosotros</td><td>-íamos</td><td>hablaríamos</td></tr>
        <tr><td>Vosotros</td><td>-íais</td><td>hablaríais</td></tr>
        <tr><td>Ellos</td><td>-ían</td><td>hablarían</td></tr>
      </table>
      <h3>Usages</h3>
      <ul>
        <li><strong>Politesse</strong> → <em>¿Podrías ayudarme?</em> (Pourrais-tu m'aider ?)</li>
        <li><strong>Souhait</strong> → <em>Me gustaría viajar</em> (J'aimerais voyager)</li>
        <li><strong>Conseil</strong> → <em>Yo que tú, estudiaría más</em> (À ta place, j'étudierais plus)</li>
        <li><strong>Hypothèse</strong> → <em>Si tuviera dinero, viajaría</em> (Si j'avais de l'argent, je voyagerais)</li>
      </ul>
      <div class="example-box">
        <div class="example-es">Me gustaría vivir en España, pero tendría que aprender bien el idioma.</div>
        <div class="example-fr">J'aimerais vivre en Espagne, mais je devrais bien apprendre la langue.</div>
      </div>
    `,
    exercises: [
      { type: "fill", question: "Conjuguez : ¿___ (poder, tú) pasarme la sal?", answer: "Podrías", hint: "Conditionnel de politesse" },
      { type: "fill", question: "Conjuguez : Me ___ (gustar) viajar a Japón.", answer: "gustaría", hint: "Gustar au conditionnel" },
      { type: "qcm", question: "Le conditionnel et le futur partagent :", options: ["Les mêmes terminaisons", "Les mêmes radicaux irréguliers", "La même conjugaison"], correct: 1 }
    ]
  },
  {
    id: "b1-03", level: "b1", number: 25,
    title: "L'impératif",
    desc: "Affirmatif et négatif : ¡Habla! / ¡No hables!",
    content: `
      <h2>L'impératif</h2>
      <p>Donner des ordres, des instructions ou des conseils. L'impératif affirmatif et négatif ont des formes <strong>différentes</strong>.</p>
      <h3>Impératif affirmatif</h3>
      <table class="grammar-table">
        <tr><th>Pronom</th><th>-AR</th><th>-ER</th><th>-IR</th></tr>
        <tr><td>Tú</td><td>habla</td><td>come</td><td>vive</td></tr>
        <tr><td>Usted</td><td>hable</td><td>coma</td><td>viva</td></tr>
        <tr><td>Nosotros</td><td>hablemos</td><td>comamos</td><td>vivamos</td></tr>
        <tr><td>Vosotros</td><td>hablad</td><td>comed</td><td>vivid</td></tr>
        <tr><td>Ustedes</td><td>hablen</td><td>coman</td><td>vivan</td></tr>
      </table>
      <h3>Irréguliers courants (tú)</h3>
      <p>ven (venir), ten (tener), pon (poner), sal (salir), haz (hacer), di (decir), sé (ser), ve (ir)</p>
      <h3>Impératif négatif</h3>
      <p>On utilise le <strong>subjonctif présent</strong> précédé de <strong>no</strong> :</p>
      <div class="example-box">
        <div class="example-es">¡Habla más despacio! / ¡No hables tan rápido!</div>
        <div class="example-fr">Parle plus lentement ! / Ne parle pas si vite !</div>
      </div>
      <div class="tip-box">
        <strong>💡 Pronoms avec l'impératif :</strong> À l'affirmatif, le pronom se colle <strong>à la fin</strong> : <em>¡Dime!</em> (Dis-moi !). Au négatif, il reste <strong>devant</strong> : <em>¡No me digas!</em>
      </div>
    `,
    exercises: [
      { type: "qcm", question: "Quel est l'impératif (tú) de 'venir' ?", options: ["viene", "ven", "vienes", "vine"], correct: 1 },
      { type: "fill", question: "Mettez au négatif : '¡Come!' → ¡No ___!", answer: "comas", hint: "Impératif négatif = subjonctif présent" },
      { type: "qcm", question: "'Dime' signifie :", options: ["Dis-moi", "Je te dis", "Ne me dis pas", "Il m'a dit"], correct: 0 }
    ]
  },
  {
    id: "b1-04", level: "b1", number: 26,
    title: "Introduction au subjonctif présent",
    desc: "Formation et premiers usages",
    content: `
      <h2>Le subjonctif présent (presente de subjuntivo)</h2>
      <p>Le subjonctif est LE mode qui différencie un hispanophone intermédiaire d'un avancé. Il exprime la subjectivité : désirs, doutes, émotions, nécessités.</p>
      <h3>Formation</h3>
      <p>Prenez la 1re personne du présent de l'indicatif, enlevez le -o, et ajoutez les terminaisons "inversées" :</p>
      <table class="grammar-table">
        <tr><th>Pronom</th><th>-AR → -e</th><th>-ER/-IR → -a</th></tr>
        <tr><td>Yo</td><td>hable</td><td>coma / viva</td></tr>
        <tr><td>Tú</td><td>hables</td><td>comas / vivas</td></tr>
        <tr><td>Él</td><td>hable</td><td>coma / viva</td></tr>
        <tr><td>Nosotros</td><td>hablemos</td><td>comamos / vivamos</td></tr>
        <tr><td>Vosotros</td><td>habléis</td><td>comáis / viváis</td></tr>
        <tr><td>Ellos</td><td>hablen</td><td>coman / vivan</td></tr>
      </table>
      <div class="tip-box">
        <strong>💡 Mnémotechnique :</strong> Les verbes en -AR prennent les terminaisons en -E, et les verbes en -ER/-IR prennent les terminaisons en -A. C'est "l'inversion" !
      </div>
      <h3>Irréguliers au subjonctif</h3>
      <table class="grammar-table">
        <tr><th>Verbe</th><th>Subjonctif (yo)</th></tr>
        <tr><td>ser</td><td>sea</td></tr>
        <tr><td>estar</td><td>esté</td></tr>
        <tr><td>ir</td><td>vaya</td></tr>
        <tr><td>haber</td><td>haya</td></tr>
        <tr><td>saber</td><td>sepa</td></tr>
        <tr><td>dar</td><td>dé</td></tr>
      </table>
      <div class="example-box">
        <div class="example-es">Quiero que hables español. / Espero que estés bien.</div>
        <div class="example-fr">Je veux que tu parles espagnol. / J'espère que tu vas bien.</div>
      </div>
    `,
    exercises: [
      { type: "fill", question: "Subjonctif de 'hablar' (yo) : ___", answer: "hable", hint: "-AR → terminaison en -e" },
      { type: "fill", question: "Complétez : Quiero que tú ___ (venir) a mi fiesta.", answer: "vengas", hint: "Venir → yo vengo → veng- + -as" },
      { type: "qcm", question: "Le subjonctif 'inverse' les voyelles des terminaisons. Vrai ou faux ?", options: ["Vrai (-AR → -e, -ER/-IR → -a)", "Faux"], correct: 0 }
    ]
  },
  {
    id: "b1-05", level: "b1", number: 27,
    title: "Le subjonctif — souhait et émotion",
    desc: "Querer que, esperar que, alegrarse de que...",
    content: `
      <h2>Subjonctif après les expressions de souhait et d'émotion</h2>
      <p>Règle clé : quand le verbe principal exprime un <strong>souhait, une émotion ou une volonté</strong> ET que le sujet du deuxième verbe est <strong>différent</strong>, on utilise le subjonctif.</p>
      <h3>Expressions de souhait / volonté</h3>
      <ul>
        <li><em>Quiero que</em> + subj. → Je veux que...</li>
        <li><em>Espero que</em> + subj. → J'espère que...</li>
        <li><em>Deseo que</em> + subj. → Je souhaite que...</li>
        <li><em>Necesito que</em> + subj. → J'ai besoin que...</li>
        <li><em>Prefiero que</em> + subj. → Je préfère que...</li>
        <li><em>Ojalá (que)</em> + subj. → Pourvu que / Si seulement...</li>
      </ul>
      <h3>Expressions d'émotion</h3>
      <ul>
        <li><em>Me alegra que</em> → Je suis content que...</li>
        <li><em>Me sorprende que</em> → Ça me surprend que...</li>
        <li><em>Tengo miedo de que</em> → J'ai peur que...</li>
        <li><em>Es una pena que</em> → C'est dommage que...</li>
        <li><em>Me molesta que</em> → Ça me dérange que...</li>
      </ul>
      <div class="example-box">
        <div class="example-es">Espero que tengas un buen viaje. ¡Ojalá haga buen tiempo!</div>
        <div class="example-fr">J'espère que tu auras un bon voyage. Pourvu qu'il fasse beau !</div>
      </div>
      <div class="tip-box">
        <strong>💡 Même sujet = infinitif !</strong><br>
        <em>Quiero <strong>comer</strong></em> (Je veux manger — même sujet, pas de subjonctif)<br>
        <em>Quiero <strong>que comas</strong></em> (Je veux que tu manges — sujets différents, subjonctif)
      </div>
    `,
    exercises: [
      { type: "fill", question: "Complétez : Espero que tú ___ (estar) bien.", answer: "estés", hint: "Estar → subjonctif : esté, estés..." },
      { type: "qcm", question: "'Quiero dormir' ou 'Quiero que duermas' ?", options: ["Le premier : même sujet → infinitif", "Le deuxième : même sujet → subjonctif", "Les deux sont identiques"], correct: 0 },
      { type: "fill", question: "Complétez : Ojalá ___ (hacer) buen tiempo mañana.", answer: "haga", hint: "Hacer au subjonctif : haga" }
    ]
  },
  {
    id: "b1-06", level: "b1", number: 28,
    title: "Le subjonctif — doute et probabilité",
    desc: "Quizás, no creo que, es posible que...",
    content: `
      <h2>Subjonctif pour le doute et l'incertitude</h2>
      <h3>Expressions de doute → subjonctif</h3>
      <ul>
        <li><em>No creo que</em> → Je ne crois pas que...</li>
        <li><em>Dudo que</em> → Je doute que...</li>
        <li><em>Es posible que</em> → Il est possible que...</li>
        <li><em>Es probable que</em> → Il est probable que...</li>
        <li><em>Quizás / Tal vez</em> + subj. → Peut-être que...</li>
        <li><em>No es seguro que</em> → Il n'est pas sûr que...</li>
      </ul>
      <h3>Certitude → indicatif</h3>
      <ul>
        <li><em>Creo que</em> → Je crois que... (indicatif)</li>
        <li><em>Es verdad que</em> → Il est vrai que... (indicatif)</li>
        <li><em>Estoy seguro de que</em> → Je suis sûr que... (indicatif)</li>
      </ul>
      <div class="example-box">
        <div class="example-es">No creo que sea difícil, pero es posible que necesite más tiempo.</div>
        <div class="example-fr">Je ne crois pas que ce soit difficile, mais il est possible que j'aie besoin de plus de temps.</div>
      </div>
      <div class="tip-box">
        <strong>💡 La règle :</strong> Affirmation (certitude) → indicatif. Négation de la certitude / doute → subjonctif.
        <br><em>Creo que <strong>viene</strong></em> (Je crois qu'il vient — indicatif)
        <br><em>No creo que <strong>venga</strong></em> (Je ne crois pas qu'il vienne — subjonctif)
      </div>
    `,
    exercises: [
      { type: "fill", question: "Complétez : No creo que él ___ (saber) la respuesta.", answer: "sepa", hint: "Doute → subjonctif. Saber → sepa" },
      { type: "qcm", question: "'Creo que ella ___.' — Indicatif ou subjonctif ?", options: ["Indicatif (viene)", "Subjonctif (venga)"], correct: 0 },
      { type: "fill", question: "Complétez : Es posible que ___ (llover) mañana.", answer: "llueva", hint: "Llover → llueva au subjonctif" }
    ]
  },
  {
    id: "b1-07", level: "b1", number: 29,
    title: "Le plus-que-parfait",
    desc: "Había hablado, había comido...",
    content: `
      <h2>Le plus-que-parfait (pluscuamperfecto)</h2>
      <p>Exprime une action passée <strong>antérieure à une autre action passée</strong>. Formation : <strong>HABER à l'imparfait + participe passé</strong>.</p>
      <table class="grammar-table">
        <tr><th>Pronom</th><th>Haber (imperfecto)</th><th>+ Participe</th></tr>
        <tr><td>Yo</td><td>había</td><td rowspan="6">hablado<br>comido<br>vivido</td></tr>
        <tr><td>Tú</td><td>habías</td></tr>
        <tr><td>Él</td><td>había</td></tr>
        <tr><td>Nosotros</td><td>habíamos</td></tr>
        <tr><td>Vosotros</td><td>habíais</td></tr>
        <tr><td>Ellos</td><td>habían</td></tr>
      </table>
      <div class="example-box">
        <div class="example-es">Cuando llegué a la estación, el tren ya había salido.</div>
        <div class="example-fr">Quand je suis arrivé à la gare, le train était déjà parti.</div>
      </div>
    `,
    exercises: [
      { type: "fill", question: "Conjuguez : Cuando llamé, ella ya ___ (salir).", answer: "había salido", hint: "Había + participe passé" },
      { type: "qcm", question: "Le plus-que-parfait utilise HABER à :", options: ["L'imparfait", "Au passé simple", "Au présent"], correct: 0 }
    ]
  },
  {
    id: "b1-08", level: "b1", number: 30,
    title: "Les connecteurs logiques",
    desc: "Además, sin embargo, por lo tanto...",
    content: `
      <h2>Les connecteurs logiques et discursifs</h2>
      <p>Pour construire un discours structuré et fluide, ces connecteurs sont essentiels :</p>
      <h3>Addition</h3>
      <ul>
        <li><em>además</em> — de plus, en plus</li>
        <li><em>también</em> — aussi</li>
        <li><em>incluso</em> — même, y compris</li>
        <li><em>aparte de</em> — en dehors de</li>
      </ul>
      <h3>Opposition / Concession</h3>
      <ul>
        <li><em>pero</em> — mais</li>
        <li><em>sin embargo</em> — cependant</li>
        <li><em>no obstante</em> — néanmoins</li>
        <li><em>aunque</em> — bien que / même si</li>
        <li><em>en cambio</em> — en revanche</li>
      </ul>
      <h3>Cause et conséquence</h3>
      <ul>
        <li><em>porque</em> — parce que</li>
        <li><em>como</em> — comme (cause)</li>
        <li><em>por eso</em> — c'est pourquoi</li>
        <li><em>por lo tanto</em> — par conséquent</li>
        <li><em>así que</em> — donc</li>
      </ul>
      <h3>Organiser le discours</h3>
      <ul>
        <li><em>en primer lugar / primero</em> — premièrement</li>
        <li><em>por un lado... por otro lado</em> — d'un côté... de l'autre</li>
        <li><em>en resumen</em> — en résumé</li>
        <li><em>en conclusión</em> — en conclusion</li>
        <li><em>es decir</em> — c'est-à-dire</li>
      </ul>
      <div class="example-box">
        <div class="example-es">Me gusta mucho Madrid; sin embargo, prefiero vivir en Barcelona porque el clima es mejor.</div>
        <div class="example-fr">J'aime beaucoup Madrid ; cependant, je préfère vivre à Barcelone parce que le climat est meilleur.</div>
      </div>
    `,
    exercises: [
      { type: "qcm", question: "'___, el español es fácil de pronunciar.' (De plus)", options: ["Sin embargo", "Además", "Porque", "En cambio"], correct: 1 },
      { type: "fill", question: "Complétez : Llueve mucho, ___ ___ me quedo en casa. (c'est pourquoi)", answer: "por eso", hint: "Conséquence" },
      { type: "qcm", question: "'Aunque' signifie :", options: ["Parce que", "Cependant", "Bien que / Même si", "Par conséquent"], correct: 2 }
    ]
  },
  {
    id: "b1-09", level: "b1", number: 31,
    title: "Le style indirect",
    desc: "Dice que..., Dijo que..., Me preguntó si...",
    content: `
      <h2>Le style indirect (estilo indirecto)</h2>
      <p>Rapporter les paroles de quelqu'un. Comme en français, les temps changent si le verbe introducteur est au passé.</p>
      <h3>Verbe introducteur au présent</h3>
      <p>Pas de changement de temps :</p>
      <div class="example-box">
        <div class="example-es">"Estoy cansado" → Dice que está cansado.</div>
        <div class="example-fr">"Je suis fatigué" → Il dit qu'il est fatigué.</div>
      </div>
      <h3>Verbe introducteur au passé</h3>
      <table class="grammar-table">
        <tr><th>Style direct</th><th>Style indirect</th></tr>
        <tr><td>Presente</td><td>→ Imperfecto</td></tr>
        <tr><td>Pretérito perfecto</td><td>→ Pluscuamperfecto</td></tr>
        <tr><td>Futuro</td><td>→ Condicional</td></tr>
        <tr><td>Imperativo</td><td>→ Subjuntivo imperfecto</td></tr>
      </table>
      <div class="example-box">
        <div class="example-es">"Iré mañana" → Dijo que iría al día siguiente.</div>
        <div class="example-fr">"J'irai demain" → Il a dit qu'il irait le lendemain.</div>
      </div>
      <h3>Questions indirectes</h3>
      <ul>
        <li>Oui/Non → <em>si</em> : <em>Me preguntó <strong>si</strong> hablaba español.</em></li>
        <li>Avec mot interrogatif → on le garde : <em>Me preguntó <strong>dónde</strong> vivía.</em></li>
      </ul>
    `,
    exercises: [
      { type: "fill", question: "'Estoy bien' → Dijo que ___ bien.", answer: "estaba", hint: "Presente → Imperfecto" },
      { type: "qcm", question: "'¿Hablas español?' → Me preguntó ___ hablaba español.", options: ["que", "si", "qué", "como"], correct: 1 },
      { type: "fill", question: "'Vendré mañana' → Dijo que ___ al día siguiente.", answer: "vendría", hint: "Futuro → Condicional" }
    ]
  },
  {
    id: "b1-10", level: "b1", number: 32,
    title: "Les pronoms relatifs",
    desc: "Que, quien, donde, el cual, lo que",
    content: `
      <h2>Les pronoms relatifs</h2>
      <h3>Les plus courants</h3>
      <table class="grammar-table">
        <tr><th>Relatif</th><th>Usage</th><th>Exemple</th></tr>
        <tr><td><strong>que</strong></td><td>Le plus courant (personnes et choses)</td><td><em>El libro <strong>que</strong> leo</em></td></tr>
        <tr><td><strong>quien(es)</strong></td><td>Personnes (après préposition)</td><td><em>La chica con <strong>quien</strong> hablo</em></td></tr>
        <tr><td><strong>donde</strong></td><td>Lieu</td><td><em>La ciudad <strong>donde</strong> vivo</em></td></tr>
        <tr><td><strong>el/la que</strong></td><td>Celui/celle qui (spécifier)</td><td><em><strong>La que</strong> prefiero</em></td></tr>
        <tr><td><strong>lo que</strong></td><td>Ce qui / ce que</td><td><em><strong>Lo que</strong> dices es verdad</em></td></tr>
        <tr><td><strong>cuyo/a/os/as</strong></td><td>Dont (possession)</td><td><em>El hombre <strong>cuyo</strong> hijo es médico</em></td></tr>
      </table>
      <div class="example-box">
        <div class="example-es">La ciudad donde nací es pequeña, pero lo que más me gusta de ella es su tranquilidad.</div>
        <div class="example-fr">La ville où je suis né est petite, mais ce que j'aime le plus, c'est sa tranquillité.</div>
      </div>
      <div class="tip-box">
        <strong>💡 "Lo que" vs "Que" :</strong> <em>Lo que</em> = "ce qui/ce que" (concept abstrait). <em>Que</em> = "qui/que" (se réfère à un antécédent précis).
      </div>
    `,
    exercises: [
      { type: "fill", question: "Complétez : La casa ___ vivo es grande.", answer: "donde", hint: "Lieu" },
      { type: "fill", question: "Complétez : No entiendo ___ ___ dices.", answer: "lo que", hint: "Ce que" },
      { type: "qcm", question: "'Cuyo' exprime :", options: ["Le lieu", "La possession (dont)", "Le temps", "La cause"], correct: 1 }
    ]
  }
];
