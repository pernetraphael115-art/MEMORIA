export const grammarA2 = [
  {
    id: "a2-01", level: "a2", number: 13,
    title: "Le passé composé (pretérito perfecto)",
    desc: "He hablado, has comido, ha vivido...",
    content: `
      <h2>Le pretérito perfecto compuesto</h2>
      <p>Equivalent du passé composé français. On l'utilise pour des actions passées <strong>en lien avec le présent</strong> ou dans une période de temps non terminée (aujourd'hui, cette semaine, ce mois-ci).</p>

      <h3>Formation : HABER (au présent) + participe passé</h3>
      <table class="grammar-table">
        <tr><th>Pronom</th><th>Haber</th><th>+ Participe</th></tr>
        <tr><td>Yo</td><td>he</td><td rowspan="6">hablado (parlé)<br>comido (mangé)<br>vivido (vécu)</td></tr>
        <tr><td>Tú</td><td>has</td></tr>
        <tr><td>Él/Ella</td><td>ha</td></tr>
        <tr><td>Nosotros</td><td>hemos</td></tr>
        <tr><td>Vosotros</td><td>habéis</td></tr>
        <tr><td>Ellos</td><td>han</td></tr>
      </table>

      <h3>Le participe passé</h3>
      <ul>
        <li>-AR → <strong>-ado</strong> : hablar → hablado</li>
        <li>-ER / -IR → <strong>-ido</strong> : comer → comido, vivir → vivido</li>
      </ul>

      <h3>Participes irréguliers courants</h3>
      <table class="grammar-table">
        <tr><th>Verbe</th><th>Participe</th></tr>
        <tr><td>hacer</td><td>hecho</td></tr>
        <tr><td>decir</td><td>dicho</td></tr>
        <tr><td>ver</td><td>visto</td></tr>
        <tr><td>escribir</td><td>escrito</td></tr>
        <tr><td>abrir</td><td>abierto</td></tr>
        <tr><td>volver</td><td>vuelto</td></tr>
        <tr><td>poner</td><td>puesto</td></tr>
        <tr><td>romper</td><td>roto</td></tr>
      </table>

      <div class="tip-box">
        <strong>💡 Différence avec le français :</strong> En espagnol, <strong>rien ne s'intercale</strong> entre haber et le participe. On ne dit JAMAIS "he no comido" mais "no he comido".
      </div>

      <div class="example-box">
        <div class="example-es">Hoy he desayunado temprano y he ido al gimnasio.</div>
        <div class="example-fr">Aujourd'hui j'ai petit-déjeuné tôt et je suis allé à la salle de sport.</div>
      </div>
    `,
    exercises: [
      { type: "fill", question: "Conjuguez : Yo ___ (comer) demasiado hoy.", answer: "he comido", hint: "Haber + participe passé en -ido" },
      { type: "qcm", question: "Quel est le participe passé de 'hacer' ?", options: ["hacido", "hecho", "hacado", "hico"], correct: 1 },
      { type: "fill", question: "Conjuguez : ¿Tú ___ (ver) esta película?", answer: "has visto", hint: "Participe irrégulier de 'ver'" }
    ]
  },
  {
    id: "a2-02", level: "a2", number: 14,
    title: "Le passé simple — verbes réguliers",
    desc: "Pretérito indefinido : hablé, comí, viví",
    content: `
      <h2>Le pretérito indefinido (passé simple)</h2>
      <p>Le temps le plus important pour raconter des événements passés <strong>terminés</strong>. C'est l'équivalent du passé simple français, mais il est <strong>beaucoup plus utilisé</strong> qu'en français (même à l'oral).</p>

      <h3>Verbes en -AR (hablar)</h3>
      <table class="grammar-table">
        <tr><th>Pronom</th><th>Terminaison</th><th>Exemple</th></tr>
        <tr><td>Yo</td><td>-é</td><td>habl<strong>é</strong></td></tr>
        <tr><td>Tú</td><td>-aste</td><td>habl<strong>aste</strong></td></tr>
        <tr><td>Él/Ella</td><td>-ó</td><td>habl<strong>ó</strong></td></tr>
        <tr><td>Nosotros</td><td>-amos</td><td>habl<strong>amos</strong></td></tr>
        <tr><td>Vosotros</td><td>-asteis</td><td>habl<strong>asteis</strong></td></tr>
        <tr><td>Ellos</td><td>-aron</td><td>habl<strong>aron</strong></td></tr>
      </table>

      <h3>Verbes en -ER/-IR (comer, vivir)</h3>
      <table class="grammar-table">
        <tr><th>Pronom</th><th>Terminaison</th><th>Exemple</th></tr>
        <tr><td>Yo</td><td>-í</td><td>com<strong>í</strong> / viv<strong>í</strong></td></tr>
        <tr><td>Tú</td><td>-iste</td><td>com<strong>iste</strong></td></tr>
        <tr><td>Él/Ella</td><td>-ió</td><td>com<strong>ió</strong></td></tr>
        <tr><td>Nosotros</td><td>-imos</td><td>com<strong>imos</strong></td></tr>
        <tr><td>Vosotros</td><td>-isteis</td><td>com<strong>isteis</strong></td></tr>
        <tr><td>Ellos</td><td>-ieron</td><td>com<strong>ieron</strong></td></tr>
      </table>

      <h3>Marqueurs temporels</h3>
      <p>Ayer (hier), anoche (hier soir), la semana pasada (la semaine dernière), el año pasado (l'an dernier), en 2020, hace dos días (il y a deux jours).</p>

      <div class="example-box">
        <div class="example-es">Ayer hablé con mi madre y comimos juntos en un restaurante.</div>
        <div class="example-fr">Hier j'ai parlé avec ma mère et nous avons mangé ensemble au restaurant.</div>
      </div>
    `,
    exercises: [
      { type: "fill", question: "Conjuguez : Ayer yo ___ (hablar) con Juan.", answer: "hablé", hint: "-AR, 1re personne → -é" },
      { type: "fill", question: "Conjuguez : Ellos ___ (comer) paella anoche.", answer: "comieron", hint: "-ER, 3e personne pluriel → -ieron" },
      { type: "qcm", question: "Quelle est la terminaison de 'tú' au passé simple pour les verbes en -ER ?", options: ["-aste", "-iste", "-ió", "-í"], correct: 1 }
    ]
  },
  {
    id: "a2-03", level: "a2", number: 15,
    title: "Le passé simple — verbes irréguliers",
    desc: "Fui, tuve, hice, dije, pude...",
    content: `
      <h2>Passé simple irrégulier</h2>
      <p>Malheureusement, beaucoup de verbes très courants sont irréguliers au passé simple. La bonne nouvelle : ils partagent les <strong>mêmes terminaisons</strong> entre eux !</p>

      <h3>Terminaisons communes des irréguliers</h3>
      <table class="grammar-table">
        <tr><th>Pronom</th><th>Terminaison</th></tr>
        <tr><td>Yo</td><td>-e (sans accent !)</td></tr>
        <tr><td>Tú</td><td>-iste</td></tr>
        <tr><td>Él/Ella</td><td>-o (sans accent !)</td></tr>
        <tr><td>Nosotros</td><td>-imos</td></tr>
        <tr><td>Vosotros</td><td>-isteis</td></tr>
        <tr><td>Ellos</td><td>-ieron</td></tr>
      </table>

      <h3>Les irréguliers les plus importants</h3>
      <table class="grammar-table">
        <tr><th>Infinitif</th><th>Radical</th><th>Yo</th><th>Él</th></tr>
        <tr><td>tener</td><td>tuv-</td><td>tuve</td><td>tuvo</td></tr>
        <tr><td>estar</td><td>estuv-</td><td>estuve</td><td>estuvo</td></tr>
        <tr><td>poder</td><td>pud-</td><td>pude</td><td>pudo</td></tr>
        <tr><td>poner</td><td>pus-</td><td>puse</td><td>puso</td></tr>
        <tr><td>saber</td><td>sup-</td><td>supe</td><td>supo</td></tr>
        <tr><td>hacer</td><td>hic-/hiz-</td><td>hice</td><td>hizo</td></tr>
        <tr><td>venir</td><td>vin-</td><td>vine</td><td>vino</td></tr>
        <tr><td>querer</td><td>quis-</td><td>quise</td><td>quiso</td></tr>
        <tr><td>decir</td><td>dij-</td><td>dije</td><td>dijo</td></tr>
        <tr><td>traer</td><td>traj-</td><td>traje</td><td>trajo</td></tr>
      </table>

      <h3>Cas spéciaux : SER et IR</h3>
      <p><strong>Ser et Ir ont la même conjugaison au passé simple !</strong> (Le contexte clarifie le sens.)</p>
      <table class="grammar-table">
        <tr><td>fui, fuiste, fue, fuimos, fuisteis, fueron</td></tr>
      </table>

      <div class="example-box">
        <div class="example-es">Ayer hice la compra, tuve que ir al supermercado y puse todo en la nevera.</div>
        <div class="example-fr">Hier j'ai fait les courses, j'ai dû aller au supermarché et j'ai tout mis au frigo.</div>
      </div>
    `,
    exercises: [
      { type: "fill", question: "Conjuguez : Yo ___ (tener) un problema ayer.", answer: "tuve", hint: "Tener → radical 'tuv-'" },
      { type: "qcm", question: "'Él fue al cine.' — Le verbe 'fue' est le passé simple de :", options: ["Ser uniquement", "Ir uniquement", "Ser ou Ir (selon le contexte)"], correct: 2 },
      { type: "fill", question: "Conjuguez : Ella ___ (hacer) la cena.", answer: "hizo", hint: "Hacer → hic-/hiz- (3e pers. = hizo)" }
    ]
  },
  {
    id: "a2-04", level: "a2", number: 16,
    title: "L'imparfait",
    desc: "Pretérito imperfecto : hablaba, comía, vivía",
    content: `
      <h2>L'imparfait (pretérito imperfecto)</h2>
      <p>Utilisé pour décrire des actions habituelles dans le passé, des descriptions, et des situations de fond. Bonne nouvelle : il a <strong>très peu d'irréguliers</strong> !</p>

      <h3>Verbes en -AR (hablar)</h3>
      <table class="grammar-table">
        <tr><th>Pronom</th><th>Conjugaison</th></tr>
        <tr><td>Yo</td><td>hablaba</td></tr>
        <tr><td>Tú</td><td>hablabas</td></tr>
        <tr><td>Él/Ella</td><td>hablaba</td></tr>
        <tr><td>Nosotros</td><td>hablábamos</td></tr>
        <tr><td>Vosotros</td><td>hablabais</td></tr>
        <tr><td>Ellos</td><td>hablaban</td></tr>
      </table>

      <h3>Verbes en -ER/-IR (comer, vivir)</h3>
      <table class="grammar-table">
        <tr><th>Pronom</th><th>Conjugaison</th></tr>
        <tr><td>Yo</td><td>comía / vivía</td></tr>
        <tr><td>Tú</td><td>comías</td></tr>
        <tr><td>Él/Ella</td><td>comía</td></tr>
        <tr><td>Nosotros</td><td>comíamos</td></tr>
        <tr><td>Vosotros</td><td>comíais</td></tr>
        <tr><td>Ellos</td><td>comían</td></tr>
      </table>

      <h3>Seulement 3 irréguliers !</h3>
      <table class="grammar-table">
        <tr><th>Verbe</th><th>Yo</th><th>Él</th></tr>
        <tr><td>ser</td><td>era</td><td>era</td></tr>
        <tr><td>ir</td><td>iba</td><td>iba</td></tr>
        <tr><td>ver</td><td>veía</td><td>veía</td></tr>
      </table>

      <h3>Quand utiliser l'imparfait ?</h3>
      <ul>
        <li>Habitudes passées → <em>Cuando era niño, <strong>jugaba</strong> en el parque</em></li>
        <li>Descriptions → <em>El cielo <strong>estaba</strong> azul</em></li>
        <li>Actions en cours (toile de fond) → <em>Mientras yo <strong>dormía</strong>...</em></li>
        <li>Heure/âge dans le passé → <em><strong>Eran</strong> las tres / <strong>Tenía</strong> 10 años</em></li>
      </ul>

      <div class="example-box">
        <div class="example-es">Cuando era niño, vivía en un pueblo pequeño y jugaba en la calle todos los días.</div>
        <div class="example-fr">Quand j'étais enfant, je vivais dans un petit village et je jouais dans la rue tous les jours.</div>
      </div>
    `,
    exercises: [
      { type: "fill", question: "Conjuguez : De niño, yo ___ (jugar) al fútbol.", answer: "jugaba", hint: "-AR imparfait : -aba" },
      { type: "qcm", question: "Combien de verbes sont irréguliers à l'imparfait ?", options: ["Aucun", "3 (ser, ir, ver)", "Beaucoup", "10"], correct: 1 },
      { type: "fill", question: "Conjuguez : Nosotros ___ (vivir) en Madrid antes.", answer: "vivíamos", hint: "-IR imparfait : -ía + nous = -íamos" }
    ]
  },
  {
    id: "a2-05", level: "a2", number: 17,
    title: "Passé simple vs imparfait",
    desc: "Quand utiliser l'un ou l'autre",
    content: `
      <h2>Passé simple vs Imparfait</h2>
      <p>C'est LA grande question du passé en espagnol. La clé : penser en termes d'<strong>action ponctuelle</strong> vs <strong>contexte/habitude</strong>.</p>

      <h3>Le passé simple (indefinido)</h3>
      <p>➡️ <strong>Actions ponctuelles, terminées</strong> : ce qui s'est passé.</p>
      <ul>
        <li>Action unique et terminée → <em>Ayer <strong>compré</strong> un libro.</em></li>
        <li>Séquence d'événements → <em><strong>Llegué</strong>, <strong>comí</strong> y <strong>me acosté</strong>.</em></li>
        <li>Changement d'état → <em>De repente, <strong>empezó</strong> a llover.</em></li>
      </ul>

      <h3>L'imparfait (imperfecto)</h3>
      <p>➡️ <strong>Contexte, descriptions, habitudes</strong> : comment c'était, ce qui se passait.</p>
      <ul>
        <li>Description → <em>El restaurante <strong>estaba</strong> lleno.</em></li>
        <li>Habitude → <em>Siempre <strong>comía</strong> a las dos.</em></li>
        <li>Action en cours → <em>Mientras yo <strong>dormía</strong>...</em></li>
      </ul>

      <h3>Ensemble dans la même phrase</h3>
      <p>Souvent, l'imparfait plante le décor et le passé simple raconte l'événement :</p>

      <div class="example-box">
        <div class="example-es">Mientras caminaba por la calle, vi a mi profesor.</div>
        <div class="example-fr">Pendant que je marchais (imparfait) dans la rue, j'ai vu (passé simple) mon professeur.</div>
      </div>

      <div class="tip-box">
        <strong>💡 Métaphore du film :</strong> L'imparfait = le décor qui défile en arrière-plan. Le passé simple = l'action qui se produit au premier plan.
      </div>
    `,
    exercises: [
      { type: "qcm", question: "'Cuando _____ (ser) niño, _____ (ir) a la playa.' — Quels temps ?", options: ["era / iba (imparfait les deux)", "fue / fue (passé simple les deux)", "era / fui (imparfait + passé simple)"], correct: 0 },
      { type: "qcm", question: "'Ayer _____ un accidente.' — Quel temps ?", options: ["había (imparfait)", "hubo (passé simple)"], correct: 1 },
      { type: "qcm", question: "'Mientras yo _____ (dormir), alguien _____ (llamar) a la puerta.'", options: ["dormía / llamó", "dormí / llamaba", "dormía / llamaba"], correct: 0 }
    ]
  },
  {
    id: "a2-06", level: "a2", number: 18,
    title: "Les pronoms COD et COI",
    desc: "Me, te, lo, la, le, nos, os, los, las, les",
    content: `
      <h2>Pronoms compléments d'objet</h2>

      <h3>COD (Complemento directo)</h3>
      <table class="grammar-table">
        <tr><th>Personne</th><th>Pronom COD</th></tr>
        <tr><td>me</td><td>me (me)</td></tr>
        <tr><td>te</td><td>te (te)</td></tr>
        <tr><td>le/la/lo</td><td>le/la/lo (le, la)</td></tr>
        <tr><td>nos</td><td>nos (nous)</td></tr>
        <tr><td>os</td><td>os (vous)</td></tr>
        <tr><td>les/las/los</td><td>les/las/los (les)</td></tr>
      </table>

      <h3>COI (Complemento indirecto)</h3>
      <table class="grammar-table">
        <tr><th>Personne</th><th>Pronom COI</th></tr>
        <tr><td>à moi</td><td>me</td></tr>
        <tr><td>à toi</td><td>te</td></tr>
        <tr><td>à lui/elle</td><td>le</td></tr>
        <tr><td>à nous</td><td>nos</td></tr>
        <tr><td>à vous</td><td>os</td></tr>
        <tr><td>à eux/elles</td><td>les</td></tr>
      </table>

      <h3>Position des pronoms</h3>
      <p>Les pronoms se placent <strong>AVANT</strong> le verbe conjugué :</p>
      <div class="example-box">
        <div class="example-es"><strong>Lo</strong> veo todos los días. (Je <strong>le</strong> vois tous les jours.)</div>
        <div class="example-es"><strong>Le</strong> doy un regalo. (Je <strong>lui</strong> donne un cadeau.)</div>
      </div>

      <div class="tip-box">
        <strong>💡 Quand les deux se combinent :</strong> COI + COD devant le verbe. Mais si les deux commencent par "l", le COI (le/les) devient <strong>SE</strong> : <em>Se lo doy</em> = Je le lui donne.
      </div>
    `,
    exercises: [
      { type: "fill", question: "Remplacez : 'Veo a María' → ___ veo.", answer: "La", hint: "COD féminin singulier" },
      { type: "qcm", question: "'Le doy el libro a Juan' avec deux pronoms :", options: ["Le lo doy", "Se lo doy", "Lo le doy"], correct: 1 },
      { type: "fill", question: "Complétez : ¿___ puedes ayudar? (Tu peux m'aider ?)", answer: "Me", hint: "COD 1re personne" }
    ]
  },
  {
    id: "a2-07", level: "a2", number: 19,
    title: "Gustar et les verbes similaires",
    desc: "Me gusta, me encanta, me interesa...",
    content: `
      <h2>Le verbe GUSTAR (aimer/plaire)</h2>
      <p>GUSTAR fonctionne à l'envers du français ! Ce n'est pas "j'aime le chocolat" mais littéralement "le chocolat me plaît".</p>

      <h3>Construction</h3>
      <table class="grammar-table">
        <tr><th>Français</th><th>Espagnol</th></tr>
        <tr><td>J'aime...</td><td>(A mí) <strong>me</strong> gusta/n</td></tr>
        <tr><td>Tu aimes...</td><td>(A ti) <strong>te</strong> gusta/n</td></tr>
        <tr><td>Il/Elle aime...</td><td>(A él/ella) <strong>le</strong> gusta/n</td></tr>
        <tr><td>Nous aimons...</td><td>(A nosotros) <strong>nos</strong> gusta/n</td></tr>
        <tr><td>Vous aimez...</td><td>(A vosotros) <strong>os</strong> gusta/n</td></tr>
        <tr><td>Ils/Elles aiment...</td><td>(A ellos) <strong>les</strong> gusta/n</td></tr>
      </table>

      <p><strong>gusta</strong> + singulier / infinitif<br><strong>gustan</strong> + pluriel</p>

      <div class="example-box">
        <div class="example-es">Me gusta el chocolate. / Me gustan los gatos. / Me gusta bailar.</div>
        <div class="example-fr">J'aime le chocolat. / J'aime les chats. / J'aime danser.</div>
      </div>

      <h3>Verbes qui fonctionnent pareil</h3>
      <ul>
        <li><em>encantar</em> → adorer → <em>Me encanta la música</em></li>
        <li><em>interesar</em> → intéresser → <em>Me interesa la historia</em></li>
        <li><em>molestar</em> → déranger → <em>Me molesta el ruido</em></li>
        <li><em>importar</em> → importer → <em>No me importa</em></li>
        <li><em>doler</em> → faire mal → <em>Me duele la cabeza</em></li>
        <li><em>parecer</em> → sembler → <em>Me parece bien</em></li>
        <li><em>faltar</em> → manquer → <em>Me falta tiempo</em></li>
      </ul>
    `,
    exercises: [
      { type: "fill", question: "Complétez : A mí ___ gusta la comida española.", answer: "me", hint: "Pronom indirect 1re personne" },
      { type: "qcm", question: "'___ los deportes.' (J'aime les sports)", options: ["Me gusta", "Me gustan", "Yo gusto", "Me gusto"], correct: 1 },
      { type: "fill", question: "Complétez : A ella ___ encanta bailar.", answer: "le", hint: "Pronom indirect 3e personne" }
    ]
  },
  {
    id: "a2-08", level: "a2", number: 20,
    title: "Les comparatifs et superlatifs",
    desc: "Más que, menos que, tan como, el más...",
    content: `
      <h2>Comparer en espagnol</h2>

      <h3>Comparatifs</h3>
      <ul>
        <li><strong>más ... que</strong> (plus ... que) → <em>Madrid es <strong>más grande que</strong> Barcelona</em></li>
        <li><strong>menos ... que</strong> (moins ... que) → <em>Es <strong>menos caro que</strong> París</em></li>
        <li><strong>tan ... como</strong> (aussi ... que) → <em>Es <strong>tan interesante como</strong> Roma</em></li>
        <li><strong>tanto/a/os/as ... como</strong> (autant ... que) → <em>Tengo <strong>tantos libros como</strong> tú</em></li>
      </ul>

      <h3>Comparatifs irréguliers</h3>
      <table class="grammar-table">
        <tr><th>Adjectif</th><th>Comparatif</th></tr>
        <tr><td>bueno (bon)</td><td>mejor (meilleur)</td></tr>
        <tr><td>malo (mauvais)</td><td>peor (pire)</td></tr>
        <tr><td>grande (grand)</td><td>mayor (plus grand / plus vieux)</td></tr>
        <tr><td>pequeño (petit)</td><td>menor (plus petit / plus jeune)</td></tr>
      </table>

      <h3>Superlatifs</h3>
      <ul>
        <li><strong>el/la más ...</strong> → <em>Es <strong>la ciudad más bonita</strong> de España</em></li>
        <li><strong>el/la menos ...</strong> → <em>Es <strong>el menos interesante</strong></em></li>
        <li><strong>-ísimo/a</strong> (superlatif absolu) → <em>Es grand<strong>ísimo</strong></em> = C'est immense</li>
      </ul>

      <div class="example-box">
        <div class="example-es">Mi hermana mayor es más alta que yo, pero yo soy mejor en deportes.</div>
        <div class="example-fr">Ma grande sœur est plus grande que moi, mais je suis meilleur en sport.</div>
      </div>
    `,
    exercises: [
      { type: "fill", question: "Complétez : Madrid es ___ grande ___ Sevilla.", answer: "más...que", hint: "Plus ... que" },
      { type: "qcm", question: "Quel est le comparatif irrégulier de 'bueno' ?", options: ["más bueno", "mejor", "buenísimo", "más bien"], correct: 1 },
      { type: "fill", question: "Traduisez : Elle est aussi intelligente que lui → Es ___ inteligente ___ él.", answer: "tan...como", hint: "Aussi ... que = tan ... como" }
    ]
  },
  {
    id: "a2-09", level: "a2", number: 21,
    title: "Le gérondif et les périphrases verbales",
    desc: "Estar + gerundio, seguir, ir, llevar...",
    content: `
      <h2>Le gérondif (gerundio)</h2>
      <p>Utilisé avec ESTAR pour décrire une action <strong>en cours</strong> ("être en train de").</p>

      <h3>Formation</h3>
      <ul>
        <li>-AR → <strong>-ando</strong> : hablar → hablando</li>
        <li>-ER/-IR → <strong>-iendo</strong> : comer → comiendo, vivir → viviendo</li>
      </ul>

      <h3>Irréguliers courants</h3>
      <table class="grammar-table">
        <tr><th>Verbe</th><th>Gérondif</th></tr>
        <tr><td>dormir</td><td>durmiendo</td></tr>
        <tr><td>leer</td><td>leyendo</td></tr>
        <tr><td>ir</td><td>yendo</td></tr>
        <tr><td>decir</td><td>diciendo</td></tr>
        <tr><td>pedir</td><td>pidiendo</td></tr>
      </table>

      <div class="example-box">
        <div class="example-es">¿Qué estás haciendo? — Estoy estudiando español.</div>
        <div class="example-fr">Qu'est-ce que tu fais ? — Je suis en train d'étudier l'espagnol.</div>
      </div>

      <h3>Autres périphrases verbales</h3>
      <ul>
        <li><strong>Ir a + infinitif</strong> = futur proche → <em>Voy a comer</em></li>
        <li><strong>Tener que + infinitif</strong> = obligation → <em>Tengo que estudiar</em></li>
        <li><strong>Acabar de + infinitif</strong> = venir de → <em>Acabo de llegar</em></li>
        <li><strong>Seguir + gérondif</strong> = continuer à → <em>Sigo estudiando</em></li>
        <li><strong>Llevar + temps + gérondif</strong> = ça fait ... que → <em>Llevo dos horas estudiando</em></li>
      </ul>
    `,
    exercises: [
      { type: "fill", question: "Formez le gérondif de 'comer' : ___", answer: "comiendo", hint: "-ER → -iendo" },
      { type: "fill", question: "Traduisez : Je viens d'arriver → ___ de llegar.", answer: "Acabo", hint: "Acabar de + infinitif" },
      { type: "qcm", question: "'Llevo tres horas estudiando' signifie :", options: ["J'étudie pendant trois heures (futur)", "Ça fait trois heures que j'étudie", "J'ai étudié il y a trois heures"], correct: 1 }
    ]
  },
  {
    id: "a2-10", level: "a2", number: 22,
    title: "Por vs Para",
    desc: "Les deux 'pour' — démystification",
    content: `
      <h2>POR vs PARA</h2>
      <p>Deux prépositions qui se traduisent souvent par "pour" en français mais avec des sens très différents.</p>

      <h3>PARA (destination, objectif, futur)</h3>
      <ul>
        <li><strong>Destinataire</strong> → <em>Este regalo es <strong>para</strong> ti</em></li>
        <li><strong>Objectif / But</strong> → <em>Estudio <strong>para</strong> aprobar</em> (J'étudie pour réussir)</li>
        <li><strong>Destination</strong> → <em>Salgo <strong>para</strong> Madrid</em></li>
        <li><strong>Date limite</strong> → <em><strong>Para</strong> el viernes</em> (Pour vendredi)</li>
        <li><strong>Opinion</strong> → <em><strong>Para</strong> mí, es fácil</em> (Pour moi, c'est facile)</li>
      </ul>

      <h3>POR (cause, moyen, échange)</h3>
      <ul>
        <li><strong>Cause / raison</strong> → <em>Gracias <strong>por</strong> todo</em> (Merci pour tout)</li>
        <li><strong>Moyen</strong> → <em><strong>Por</strong> teléfono</em> (Par téléphone)</li>
        <li><strong>Échange / prix</strong> → <em>Lo compré <strong>por</strong> 20 euros</em></li>
        <li><strong>Durée</strong> → <em>Viví allí <strong>por</strong> dos años</em></li>
        <li><strong>Lieu (à travers)</strong> → <em>Pasé <strong>por</strong> tu casa</em></li>
        <li><strong>Fréquence</strong> → <em>Tres veces <strong>por</strong> semana</em></li>
      </ul>

      <div class="tip-box">
        <strong>💡 Mnémotechnique :</strong><br>
        <strong>PARA</strong> = regarde vers le <strong>futur</strong> (destination, but, date limite)<br>
        <strong>POR</strong> = regarde vers le <strong>passé</strong> (cause, raison, échange)
      </div>

      <div class="example-box">
        <div class="example-es">Estudio español para viajar por América Latina.</div>
        <div class="example-fr">J'étudie l'espagnol pour (but) voyager à travers (lieu) l'Amérique latine.</div>
      </div>
    `,
    exercises: [
      { type: "qcm", question: "'Gracias ___ tu ayuda.'", options: ["para", "por"], correct: 1 },
      { type: "qcm", question: "'Este café es ___ María.'", options: ["para", "por"], correct: 0 },
      { type: "qcm", question: "'Pagué 50 euros ___ este libro.'", options: ["para", "por"], correct: 1 },
      { type: "qcm", question: "'Estudio ___ ser médico.'", options: ["para", "por"], correct: 0 }
    ]
  }
];
