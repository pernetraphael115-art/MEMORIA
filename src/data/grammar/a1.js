export const grammarA1 = [
  {
    id: "a1-01",
    level: "a1",
    number: 1,
    title: "L'alphabet et la prononciation",
    desc: "Les bases de la prononciation espagnole",
    content: `
      <h2>L'alphabet espagnol</h2>
      <p>L'alphabet espagnol compte 27 lettres — les mêmes que le français, plus la <strong>ñ</strong>. La bonne nouvelle : l'espagnol se prononce (presque) comme il s'écrit !</p>
      
      <h3>Les sons qui changent</h3>
      <div class="grammar-table-wrap">
      <table class="grammar-table">
        <tr><th>Lettre</th><th>Son</th><th>Exemple</th></tr>
        <tr><td><strong>C</strong> (+ e, i)</td><td>"th" anglais (Espagne) / "s" (Latam)</td><td><em>cerveza</em> → bière</td></tr>
        <tr><td><strong>G</strong> (+ e, i)</td><td>"r" raclé (comme "jota")</td><td><em>gente</em> → gens</td></tr>
        <tr><td><strong>H</strong></td><td>Toujours muet !</td><td><em>hola</em> → bonjour</td></tr>
        <tr><td><strong>J</strong></td><td>"r" raclé fort</td><td><em>jugar</em> → jouer</td></tr>
        <tr><td><strong>LL</strong></td><td>"y" (comme "yoga")</td><td><em>llamar</em> → appeler</td></tr>
        <tr><td><strong>Ñ</strong></td><td>"gn" (comme "montagne")</td><td><em>España</em> → Espagne</td></tr>
        <tr><td><strong>R</strong></td><td>Roulé (surtout en début de mot)</td><td><em>rojo</em> → rouge</td></tr>
        <tr><td><strong>V</strong></td><td>Prononcé comme un "b" doux</td><td><em>vino</em> → vin</td></tr>
        <tr><td><strong>Z</strong></td><td>"th" anglais (Espagne) / "s" (Latam)</td><td><em>zapato</em> → chaussure</td></tr>
      </table>
      </div>

      <div class="tip-box">
        <strong>💡 Astuce :</strong> En espagnol, chaque voyelle a toujours le même son : A = a, E = é, I = i, O = o, U = ou. Pas de "e" muet comme en français !
      </div>

      <h3>L'accent tonique</h3>
      <p>L'accent tonique est crucial en espagnol. Il tombe naturellement sur :</p>
      <ul>
        <li><strong>L'avant-dernière syllabe</strong> si le mot finit par une voyelle, -n ou -s → <em>ca<strong>sa</strong></em></li>
        <li><strong>La dernière syllabe</strong> si le mot finit par une consonne (sauf -n, -s) → <em>ciu<strong>dad</strong></em></li>
        <li>Un accent écrit (´) indique une exception → <em><strong>mú</strong>sica</em></li>
      </ul>

      <div class="example-box">
        <div class="example-es">🔊 ¡Hola! ¿Cómo te llamas?</div>
        <div class="example-fr">Salut ! Comment tu t'appelles ?</div>
      </div>
    `,
    exercises: [
      {
        type: "qcm",
        question: "Comment prononce-t-on la lettre H en espagnol ?",
        options: ["Comme un 'r' raclé", "Elle est toujours muette", "Comme en français", "Comme un 'j'"],
        correct: 1
      },
      {
        type: "qcm",
        question: "Quel son fait le 'ñ' ?",
        options: ["n", "gn (comme montagne)", "ny", "nn"],
        correct: 1
      },
      {
        type: "qcm",
        question: "Comment se prononce 'cerveza' en Espagne ?",
        options: ["servésa", "thervétha", "kervésa", "servétha"],
        correct: 1
      }
    ]
  },
  {
    id: "a1-02",
    level: "a1",
    number: 2,
    title: "Les articles définis et indéfinis",
    desc: "El, la, los, las / un, una, unos, unas",
    content: `
      <h2>Les articles en espagnol</h2>
      <p>Comme en français, l'espagnol utilise des articles définis ("le, la") et indéfinis ("un, une"). Mais pas de contraction comme "du" ou "au" !</p>

      <h3>Articles définis</h3>
      <table class="grammar-table">
        <tr><th></th><th>Masculin</th><th>Féminin</th></tr>
        <tr><td><strong>Singulier</strong></td><td>el (le)</td><td>la (la)</td></tr>
        <tr><td><strong>Pluriel</strong></td><td>los (les)</td><td>las (les)</td></tr>
      </table>

      <div class="example-box">
        <div class="example-es">El libro está en la mesa.</div>
        <div class="example-fr">Le livre est sur la table.</div>
      </div>

      <h3>Articles indéfinis</h3>
      <table class="grammar-table">
        <tr><th></th><th>Masculin</th><th>Féminin</th></tr>
        <tr><td><strong>Singulier</strong></td><td>un (un)</td><td>una (une)</td></tr>
        <tr><td><strong>Pluriel</strong></td><td>unos (des)</td><td>unas (des)</td></tr>
      </table>

      <div class="example-box">
        <div class="example-es">Tengo un perro y una gata.</div>
        <div class="example-fr">J'ai un chien et une chatte.</div>
      </div>

      <div class="tip-box">
        <strong>💡 Attention :</strong> Devant un nom féminin commençant par <em>a-</em> ou <em>ha-</em> accentué, on utilise <strong>el</strong> (mais le mot reste féminin) : <em>el agua fría</em> (l'eau froide), <em>el águila</em> (l'aigle).
      </div>

      <h3>Contractions</h3>
      <p>Il n'y en a que deux :</p>
      <ul>
        <li><strong>a + el = al</strong> → <em>Voy al cine</em> (Je vais au cinéma)</li>
        <li><strong>de + el = del</strong> → <em>Vengo del trabajo</em> (Je viens du travail)</li>
      </ul>
    `,
    exercises: [
      {
        type: "fill",
        question: "Complétez : ___ casa es bonita. (La maison est jolie)",
        answer: "La",
        hint: "Article défini féminin singulier"
      },
      {
        type: "qcm",
        question: "Quelle est la contraction de 'a + el' ?",
        options: ["a el", "al", "del", "a'l"],
        correct: 1
      },
      {
        type: "fill",
        question: "Complétez : Tengo ___ amigo en Madrid. (J'ai un ami à Madrid)",
        answer: "un",
        hint: "Article indéfini masculin singulier"
      },
      {
        type: "qcm",
        question: "Pourquoi dit-on 'el agua' et non 'la agua' ?",
        options: ["Agua est masculin", "Pour éviter la cacophonie (a + a accentué)", "C'est une exception sans logique", "Les deux sont corrects"],
        correct: 1
      }
    ]
  },
  {
    id: "a1-03",
    level: "a1",
    number: 3,
    title: "Le genre et le nombre des noms",
    desc: "Masculin/féminin, singulier/pluriel",
    content: `
      <h2>Le genre des noms</h2>
      <p>En espagnol, tous les noms sont soit masculins, soit féminins. Bonne nouvelle : les règles sont plus régulières qu'en français !</p>

      <h3>Règle générale</h3>
      <ul>
        <li>Noms en <strong>-o</strong> → généralement <strong>masculins</strong> : <em>el libro, el gato, el vino</em></li>
        <li>Noms en <strong>-a</strong> → généralement <strong>féminins</strong> : <em>la casa, la mesa, la puerta</em></li>
      </ul>

      <div class="tip-box">
        <strong>💡 Exceptions courantes :</strong> <em>el día</em> (le jour), <em>el mapa</em> (la carte), <em>el problema</em> (le problème), <em>el tema</em> (le thème), <em>la mano</em> (la main), <em>la radio</em> (la radio).
      </div>

      <h3>Autres terminaisons</h3>
      <table class="grammar-table">
        <tr><th>Terminaison</th><th>Genre</th><th>Exemples</th></tr>
        <tr><td>-ción, -sión</td><td>Féminin</td><td><em>la nación, la televisión</em></td></tr>
        <tr><td>-dad, -tad</td><td>Féminin</td><td><em>la ciudad, la libertad</em></td></tr>
        <tr><td>-or</td><td>Masculin</td><td><em>el color, el amor</em></td></tr>
        <tr><td>-aje</td><td>Masculin</td><td><em>el viaje, el paisaje</em></td></tr>
      </table>

      <h2>Le nombre (pluriel)</h2>
      <h3>Former le pluriel</h3>
      <ul>
        <li>Mot finissant par une <strong>voyelle</strong> → ajouter <strong>-s</strong> : <em>casa → casas, libro → libros</em></li>
        <li>Mot finissant par une <strong>consonne</strong> → ajouter <strong>-es</strong> : <em>ciudad → ciudades, color → colores</em></li>
        <li>Mot finissant par <strong>-z</strong> → changer en <strong>-ces</strong> : <em>pez → peces, luz → luces</em></li>
      </ul>

      <div class="example-box">
        <div class="example-es">Las ciudades españolas son muy bonitas.</div>
        <div class="example-fr">Les villes espagnoles sont très jolies.</div>
      </div>
    `,
    exercises: [
      {
        type: "qcm",
        question: "Quel est le genre de 'problema' ?",
        options: ["Féminin (la problema)", "Masculin (el problema)", "Les deux sont acceptés"],
        correct: 1
      },
      {
        type: "fill",
        question: "Mettez au pluriel : la ciudad → las ___",
        answer: "ciudades",
        hint: "Consonne → ajouter -es"
      },
      {
        type: "qcm",
        question: "Quel est le pluriel de 'el pez' (le poisson) ?",
        options: ["los pezs", "los pezes", "los peces", "los pez"],
        correct: 2
      }
    ]
  },
  {
    id: "a1-04",
    level: "a1",
    number: 4,
    title: "Les adjectifs",
    desc: "Accord en genre et nombre, placement",
    content: `
      <h2>Les adjectifs en espagnol</h2>
      <p>Les adjectifs s'accordent en <strong>genre</strong> et en <strong>nombre</strong> avec le nom, comme en français. Mais attention : ils se placent généralement <strong>après</strong> le nom !</p>

      <h3>Accord des adjectifs</h3>
      <table class="grammar-table">
        <tr><th></th><th>Masculin</th><th>Féminin</th></tr>
        <tr><td><strong>Singulier</strong></td><td>bonit<strong>o</strong></td><td>bonit<strong>a</strong></td></tr>
        <tr><td><strong>Pluriel</strong></td><td>bonit<strong>os</strong></td><td>bonit<strong>as</strong></td></tr>
      </table>

      <div class="example-box">
        <div class="example-es">La casa blanca es grande.</div>
        <div class="example-fr">La maison blanche est grande.</div>
      </div>

      <h3>Adjectifs invariables en genre</h3>
      <p>Les adjectifs qui finissent par <strong>-e</strong> ou une <strong>consonne</strong> ne changent pas entre masculin et féminin :</p>
      <ul>
        <li><em>grande</em> → <em>un chico grande, una chica grande</em></li>
        <li><em>fácil</em> → <em>un ejercicio fácil, una pregunta fácil</em></li>
        <li><em>azul</em> → <em>el cielo azul, la puerta azul</em></li>
      </ul>

      <h3>Placement</h3>
      <p><strong>Après le nom</strong> (cas général) : adjectifs descriptifs → <em>un coche rojo</em> (une voiture rouge)</p>
      <p><strong>Avant le nom</strong> (cas spéciaux) : <em>bueno, malo, grande, pequeño, primer, último</em></p>

      <div class="tip-box">
        <strong>💡 Attention :</strong> <em>bueno → buen</em> et <em>malo → mal</em> devant un nom masculin singulier : <em>un buen día</em>, <em>un mal momento</em>.
      </div>
    `,
    exercises: [
      {
        type: "fill",
        question: "Accordez : Las flores son muy ___ (bonito)",
        answer: "bonitas",
        hint: "Féminin pluriel"
      },
      {
        type: "qcm",
        question: "Où place-t-on généralement l'adjectif en espagnol ?",
        options: ["Avant le nom", "Après le nom", "Les deux positions sont équivalentes"],
        correct: 1
      },
      {
        type: "fill",
        question: "Complétez : Es un ___ amigo. (C'est un bon ami)",
        answer: "buen",
        hint: "bueno se raccourcit devant un nom masculin"
      }
    ]
  },
  {
    id: "a1-05",
    level: "a1",
    number: 5,
    title: "Les pronoms personnels sujets",
    desc: "Yo, tú, él/ella, nosotros, vosotros, ellos",
    content: `
      <h2>Les pronoms personnels sujets</h2>
      <p>Grande différence avec le français : en espagnol, on <strong>omet souvent</strong> le pronom sujet car la conjugaison du verbe suffit à identifier la personne !</p>

      <table class="grammar-table">
        <tr><th>Espagnol</th><th>Français</th><th>Usage</th></tr>
        <tr><td><strong>Yo</strong></td><td>Je</td><td></td></tr>
        <tr><td><strong>Tú</strong></td><td>Tu</td><td>Informel</td></tr>
        <tr><td><strong>Usted (Ud.)</strong></td><td>Vous (politesse)</td><td>Formel, conjugué à la 3e pers.</td></tr>
        <tr><td><strong>Él / Ella</strong></td><td>Il / Elle</td><td></td></tr>
        <tr><td><strong>Nosotros / Nosotras</strong></td><td>Nous</td><td></td></tr>
        <tr><td><strong>Vosotros / Vosotras</strong></td><td>Vous (pluriel)</td><td>Espagne uniquement</td></tr>
        <tr><td><strong>Ustedes (Uds.)</strong></td><td>Vous (pluriel)</td><td>Latam = informel + formel</td></tr>
        <tr><td><strong>Ellos / Ellas</strong></td><td>Ils / Elles</td><td></td></tr>
      </table>

      <div class="example-box">
        <div class="example-es">¿(Tú) hablas español? — Sí, (yo) hablo un poco.</div>
        <div class="example-fr">Tu parles espagnol ? — Oui, je parle un peu.</div>
      </div>

      <div class="tip-box">
        <strong>💡 Quand utiliser le pronom ?</strong> On l'ajoute pour insister, clarifier ou contraster : <em>Yo soy francés, pero <strong>ella</strong> es española.</em> (Moi je suis français, mais <strong>elle</strong> est espagnole.)
      </div>

      <h3>Tú vs Usted</h3>
      <p><strong>Tú</strong> = tutoiement (amis, famille, jeunes). <strong>Usted</strong> = vouvoiement (formel, respect). En Amérique latine, <em>usted</em> est beaucoup plus courant qu'en Espagne.</p>
    `,
    exercises: [
      {
        type: "qcm",
        question: "Pourquoi peut-on souvent omettre le pronom sujet en espagnol ?",
        options: ["Par politesse", "Parce que la conjugaison identifie la personne", "Parce que le sujet n'est pas important", "C'est incorrect de l'omettre"],
        correct: 1
      },
      {
        type: "qcm",
        question: "'Vosotros' est utilisé :",
        options: ["Partout dans le monde hispanophone", "Uniquement en Espagne", "Uniquement en Amérique latine", "Seulement à l'écrit"],
        correct: 1
      },
      {
        type: "qcm",
        question: "'Usted' se conjugue comme :",
        options: ["La 1re personne (yo)", "La 2e personne (tú)", "La 3e personne (él/ella)", "La 1re personne du pluriel"],
        correct: 2
      }
    ]
  },
  {
    id: "a1-06",
    level: "a1",
    number: 6,
    title: "Le présent de l'indicatif — verbes réguliers",
    desc: "Conjuguer les verbes en -ar, -er, -ir",
    content: `
      <h2>Le présent des verbes réguliers</h2>
      <p>Les verbes espagnols se divisent en 3 groupes selon leur terminaison à l'infinitif : <strong>-AR</strong>, <strong>-ER</strong>, <strong>-IR</strong>. Voici les terminaisons :</p>

      <h3>Verbes en -AR (hablar = parler)</h3>
      <table class="grammar-table">
        <tr><th>Pronom</th><th>Terminaison</th><th>Exemple</th></tr>
        <tr><td>Yo</td><td>-o</td><td>habl<strong>o</strong></td></tr>
        <tr><td>Tú</td><td>-as</td><td>habl<strong>as</strong></td></tr>
        <tr><td>Él/Ella/Ud.</td><td>-a</td><td>habl<strong>a</strong></td></tr>
        <tr><td>Nosotros</td><td>-amos</td><td>habl<strong>amos</strong></td></tr>
        <tr><td>Vosotros</td><td>-áis</td><td>habl<strong>áis</strong></td></tr>
        <tr><td>Ellos/Uds.</td><td>-an</td><td>habl<strong>an</strong></td></tr>
      </table>

      <h3>Verbes en -ER (comer = manger)</h3>
      <table class="grammar-table">
        <tr><th>Pronom</th><th>Terminaison</th><th>Exemple</th></tr>
        <tr><td>Yo</td><td>-o</td><td>com<strong>o</strong></td></tr>
        <tr><td>Tú</td><td>-es</td><td>com<strong>es</strong></td></tr>
        <tr><td>Él/Ella/Ud.</td><td>-e</td><td>com<strong>e</strong></td></tr>
        <tr><td>Nosotros</td><td>-emos</td><td>com<strong>emos</strong></td></tr>
        <tr><td>Vosotros</td><td>-éis</td><td>com<strong>éis</strong></td></tr>
        <tr><td>Ellos/Uds.</td><td>-en</td><td>com<strong>en</strong></td></tr>
      </table>

      <h3>Verbes en -IR (vivir = vivre)</h3>
      <table class="grammar-table">
        <tr><th>Pronom</th><th>Terminaison</th><th>Exemple</th></tr>
        <tr><td>Yo</td><td>-o</td><td>viv<strong>o</strong></td></tr>
        <tr><td>Tú</td><td>-es</td><td>viv<strong>es</strong></td></tr>
        <tr><td>Él/Ella/Ud.</td><td>-e</td><td>viv<strong>e</strong></td></tr>
        <tr><td>Nosotros</td><td>-imos</td><td>viv<strong>imos</strong></td></tr>
        <tr><td>Vosotros</td><td>-ís</td><td>viv<strong>ís</strong></td></tr>
        <tr><td>Ellos/Uds.</td><td>-en</td><td>viv<strong>en</strong></td></tr>
      </table>

      <div class="tip-box">
        <strong>💡 Astuce :</strong> Les verbes en -ER et -IR ont presque les mêmes terminaisons ! Seule différence : <em>nosotros</em> (-emos / -imos) et <em>vosotros</em> (-éis / -ís).
      </div>

      <h3>Verbes courants réguliers</h3>
      <ul>
        <li><strong>-AR</strong> : trabajar (travailler), estudiar (étudier), comprar (acheter), cocinar (cuisiner), caminar (marcher)</li>
        <li><strong>-ER</strong> : beber (boire), leer (lire), aprender (apprendre), correr (courir)</li>
        <li><strong>-IR</strong> : escribir (écrire), abrir (ouvrir), subir (monter), recibir (recevoir)</li>
      </ul>

      <div class="example-box">
        <div class="example-es">Yo trabajo en una oficina y como en un restaurante.</div>
        <div class="example-fr">Je travaille dans un bureau et je mange dans un restaurant.</div>
      </div>
    `,
    exercises: [
      {
        type: "fill",
        question: "Conjuguez : Nosotros ___ (hablar) español.",
        answer: "hablamos",
        hint: "Verbe en -AR, 1re personne du pluriel"
      },
      {
        type: "qcm",
        question: "Quelle est la terminaison de 'tú' pour les verbes en -ER ?",
        options: ["-as", "-es", "-is", "-os"],
        correct: 1
      },
      {
        type: "fill",
        question: "Conjuguez : Ellos ___ (vivir) en Barcelona.",
        answer: "viven",
        hint: "Verbe en -IR, 3e personne du pluriel"
      },
      {
        type: "fill",
        question: "Conjuguez : Tú ___ (escribir) muy bien.",
        answer: "escribes",
        hint: "Verbe en -IR, 2e personne du singulier"
      }
    ]
  },
  {
    id: "a1-07",
    level: "a1",
    number: 7,
    title: "Ser vs Estar",
    desc: "Les deux verbes 'être' — quand utiliser lequel",
    content: `
      <h2>Ser vs Estar — le grand défi !</h2>
      <p>L'espagnol a <strong>deux verbes "être"</strong>. C'est probablement la plus grande difficulté pour les francophones, mais avec les bonnes règles, ça devient logique.</p>

      <h3>Conjugaison au présent</h3>
      <table class="grammar-table">
        <tr><th>Pronom</th><th>SER</th><th>ESTAR</th></tr>
        <tr><td>Yo</td><td>soy</td><td>estoy</td></tr>
        <tr><td>Tú</td><td>eres</td><td>estás</td></tr>
        <tr><td>Él/Ella</td><td>es</td><td>está</td></tr>
        <tr><td>Nosotros</td><td>somos</td><td>estamos</td></tr>
        <tr><td>Vosotros</td><td>sois</td><td>estáis</td></tr>
        <tr><td>Ellos</td><td>son</td><td>están</td></tr>
      </table>

      <h3>Quand utiliser SER ? (DOCTOR)</h3>
      <p>Moyen mnémotechnique : <strong>D.O.C.T.O.R.</strong></p>
      <ul>
        <li><strong>D</strong>escription (caractéristiques permanentes) → <em>Ella <strong>es</strong> alta</em></li>
        <li><strong>O</strong>ccupation → <em>Soy profesor</em></li>
        <li><strong>C</strong>aractéristique / personnalité → <em>Él <strong>es</strong> simpático</em></li>
        <li><strong>T</strong>emps (heure, date) → <em><strong>Son</strong> las tres</em></li>
        <li><strong>O</strong>rigine / nationalité → <em>Soy de Francia</em></li>
        <li><strong>R</strong>elation → <em>Ella <strong>es</strong> mi hermana</em></li>
      </ul>

      <h3>Quand utiliser ESTAR ? (PLACE)</h3>
      <p>Moyen mnémotechnique : <strong>P.L.A.C.E.</strong></p>
      <ul>
        <li><strong>P</strong>osition / lieu → <em><strong>Estoy</strong> en Madrid</em></li>
        <li><strong>L</strong>ocation → <em>El banco <strong>está</strong> en la esquina</em></li>
        <li><strong>A</strong>ction (gérondif) → <em><strong>Estoy</strong> comiendo</em></li>
        <li><strong>C</strong>ondition (état temporaire) → <em><strong>Estoy</strong> cansado</em></li>
        <li><strong>E</strong>motion (humeur) → <em><strong>Estoy</strong> contento</em></li>
      </ul>

      <div class="tip-box">
        <strong>💡 La règle d'or :</strong> SER = permanent/essentiel. ESTAR = temporaire/circonstanciel.
        <br><em>Ella <strong>es</strong> guapa</em> = Elle est belle (caractéristique).
        <br><em>Ella <strong>está</strong> guapa</em> = Elle est belle (en ce moment, bien habillée).
      </div>

      <div class="example-box">
        <div class="example-es">Soy francés, pero estoy en España. ¡Estoy muy contento!</div>
        <div class="example-fr">Je suis français, mais je suis en Espagne. Je suis très content !</div>
      </div>
    `,
    exercises: [
      {
        type: "qcm",
        question: "'María ___ de México.' — Ser ou Estar ?",
        options: ["es (ser)", "está (estar)"],
        correct: 0
      },
      {
        type: "qcm",
        question: "'El restaurante ___ en la calle Mayor.' — Ser ou Estar ?",
        options: ["es (ser)", "está (estar)"],
        correct: 1
      },
      {
        type: "fill",
        question: "Complétez : Yo ___ cansado. (Je suis fatigué — état temporaire)",
        answer: "estoy",
        hint: "État temporaire = estar"
      },
      {
        type: "qcm",
        question: "'___ las ocho de la mañana.' (Il est 8h du matin)",
        options: ["Están", "Son", "Están siendo", "Es"],
        correct: 1
      }
    ]
  },
  {
    id: "a1-08",
    level: "a1",
    number: 8,
    title: "Tener, Hacer, Ir — verbes irréguliers essentiels",
    desc: "Les verbes irréguliers les plus utilisés",
    content: `
      <h2>Les 3 verbes irréguliers indispensables</h2>
      <p>Ces verbes sont parmi les plus utilisés en espagnol et sont tous irréguliers au présent.</p>

      <h3>TENER (avoir)</h3>
      <table class="grammar-table">
        <tr><th>Pronom</th><th>Conjugaison</th></tr>
        <tr><td>Yo</td><td>tengo</td></tr>
        <tr><td>Tú</td><td>tienes</td></tr>
        <tr><td>Él/Ella</td><td>tiene</td></tr>
        <tr><td>Nosotros</td><td>tenemos</td></tr>
        <tr><td>Vosotros</td><td>tenéis</td></tr>
        <tr><td>Ellos</td><td>tienen</td></tr>
      </table>

      <p><strong>Expressions avec TENER</strong> (là où le français utilise "avoir" ou "être") :</p>
      <ul>
        <li><em>Tener hambre</em> = Avoir faim</li>
        <li><em>Tener sed</em> = Avoir soif</li>
        <li><em>Tener frío / calor</em> = Avoir froid / chaud</li>
        <li><em>Tener sueño</em> = Avoir sommeil</li>
        <li><em>Tener miedo</em> = Avoir peur</li>
        <li><em>Tener razón</em> = Avoir raison</li>
        <li><em>Tener ... años</em> = Avoir ... ans</li>
        <li><em>Tener que + infinitif</em> = Devoir (obligation)</li>
      </ul>

      <h3>HACER (faire)</h3>
      <table class="grammar-table">
        <tr><th>Pronom</th><th>Conjugaison</th></tr>
        <tr><td>Yo</td><td>hago</td></tr>
        <tr><td>Tú</td><td>haces</td></tr>
        <tr><td>Él/Ella</td><td>hace</td></tr>
        <tr><td>Nosotros</td><td>hacemos</td></tr>
        <tr><td>Vosotros</td><td>hacéis</td></tr>
        <tr><td>Ellos</td><td>hacen</td></tr>
      </table>

      <h3>IR (aller)</h3>
      <table class="grammar-table">
        <tr><th>Pronom</th><th>Conjugaison</th></tr>
        <tr><td>Yo</td><td>voy</td></tr>
        <tr><td>Tú</td><td>vas</td></tr>
        <tr><td>Él/Ella</td><td>va</td></tr>
        <tr><td>Nosotros</td><td>vamos</td></tr>
        <tr><td>Vosotros</td><td>vais</td></tr>
        <tr><td>Ellos</td><td>van</td></tr>
      </table>

      <div class="tip-box">
        <strong>💡 IR + A + infinitif</strong> = futur proche (comme "aller + infinitif" en français) : <em>Voy a comer</em> = Je vais manger.
      </div>

      <div class="example-box">
        <div class="example-es">Tengo 25 años, hago deporte y voy a la playa los domingos.</div>
        <div class="example-fr">J'ai 25 ans, je fais du sport et je vais à la plage le dimanche.</div>
      </div>
    `,
    exercises: [
      {
        type: "fill",
        question: "Complétez : Yo ___ 30 años. (J'ai 30 ans)",
        answer: "tengo",
        hint: "Tener, 1re personne du singulier"
      },
      {
        type: "qcm",
        question: "Comment dit-on 'Je dois étudier' ?",
        options: ["Tengo estudiar", "Tengo que estudiar", "Hago estudiar", "Voy estudiar"],
        correct: 1
      },
      {
        type: "fill",
        question: "Complétez : ¿Qué ___ (hacer, tú) este fin de semana?",
        answer: "haces",
        hint: "Hacer, 2e personne du singulier"
      },
      {
        type: "fill",
        question: "Complétez : Nosotros ___ (ir) al cine esta noche.",
        answer: "vamos",
        hint: "Ir, 1re personne du pluriel"
      }
    ]
  },
  {
    id: "a1-09",
    level: "a1",
    number: 9,
    title: "Les adjectifs possessifs et démonstratifs",
    desc: "Mi, tu, su / este, ese, aquel",
    content: `
      <h2>Les possessifs</h2>

      <h3>Formes courtes (avant le nom)</h3>
      <table class="grammar-table">
        <tr><th>Français</th><th>Singulier</th><th>Pluriel</th></tr>
        <tr><td>Mon/Ma</td><td>mi</td><td>mis</td></tr>
        <tr><td>Ton/Ta</td><td>tu</td><td>tus</td></tr>
        <tr><td>Son/Sa (de él/ella/Ud.)</td><td>su</td><td>sus</td></tr>
        <tr><td>Notre</td><td>nuestro/a</td><td>nuestros/as</td></tr>
        <tr><td>Votre</td><td>vuestro/a</td><td>vuestros/as</td></tr>
        <tr><td>Leur</td><td>su</td><td>sus</td></tr>
      </table>

      <div class="tip-box">
        <strong>💡 Attention :</strong> <em>su/sus</em> peut signifier "son", "sa", "leur(s)" ou "votre" (usted). Le contexte permet de comprendre. Si c'est ambigu, on précise : <em>el libro <strong>de él</strong></em>.
      </div>

      <div class="example-box">
        <div class="example-es">Mi casa es tu casa.</div>
        <div class="example-fr">Ma maison est ta maison. (Expression d'hospitalité !)</div>
      </div>

      <h2>Les démonstratifs</h2>
      <table class="grammar-table">
        <tr><th></th><th>Près (ici)</th><th>Milieu (là)</th><th>Loin (là-bas)</th></tr>
        <tr><td>Masc. sing.</td><td>este</td><td>ese</td><td>aquel</td></tr>
        <tr><td>Fém. sing.</td><td>esta</td><td>esa</td><td>aquella</td></tr>
        <tr><td>Masc. plur.</td><td>estos</td><td>esos</td><td>aquellos</td></tr>
        <tr><td>Fém. plur.</td><td>estas</td><td>esas</td><td>aquellas</td></tr>
      </table>

      <div class="example-box">
        <div class="example-es">Este libro es interesante, pero aquel es mejor.</div>
        <div class="example-fr">Ce livre(-ci) est intéressant, mais celui-là (bas) est mieux.</div>
      </div>
    `,
    exercises: [
      {
        type: "fill",
        question: "Complétez : ___ padres viven en Madrid. (Mes parents)",
        answer: "Mis",
        hint: "Possessif 'mon/ma' au pluriel"
      },
      {
        type: "qcm",
        question: "'Ese' désigne quelque chose de :",
        options: ["Proche (ici)", "À distance moyenne (là)", "Très loin (là-bas)"],
        correct: 1
      },
      {
        type: "fill",
        question: "Complétez : ___ casa es muy grande. (Notre maison)",
        answer: "Nuestra",
        hint: "Possessif 'notre', casa est féminin"
      }
    ]
  },
  {
    id: "a1-10",
    level: "a1",
    number: 10,
    title: "Les prépositions",
    desc: "A, de, en, con, por, para",
    content: `
      <h2>Les prépositions essentielles</h2>
      
      <h3>A (à, vers)</h3>
      <ul>
        <li>Direction / destination → <em>Voy <strong>a</strong> Madrid</em></li>
        <li>COI (à quelqu'un) → <em>Doy el libro <strong>a</strong> María</em></li>
        <li>Heure → <em><strong>A</strong> las ocho</em> (À huit heures)</li>
        <li><strong>"A personal"</strong> : devant un COD humain → <em>Veo <strong>a</strong> mi amigo</em></li>
      </ul>

      <h3>DE (de, depuis)</h3>
      <ul>
        <li>Origine → <em>Soy <strong>de</strong> Francia</em></li>
        <li>Possession → <em>El coche <strong>de</strong> Juan</em></li>
        <li>Matière → <em>Una mesa <strong>de</strong> madera</em></li>
      </ul>

      <h3>EN (dans, en, sur)</h3>
      <ul>
        <li>Lieu (à l'intérieur) → <em>Estoy <strong>en</strong> casa</em></li>
        <li>Moyen de transport → <em>Voy <strong>en</strong> tren</em></li>
        <li>Mois/année → <em><strong>En</strong> enero, <strong>en</strong> 2024</em></li>
      </ul>

      <h3>CON (avec)</h3>
      <ul>
        <li>Accompagnement → <em>Voy <strong>con</strong> mis amigos</em></li>
        <li><strong>Conmigo / Contigo</strong> = avec moi / avec toi</li>
      </ul>

      <div class="tip-box">
        <strong>💡 POR vs PARA</strong> — Un sujet complexe qu'on approfondira plus tard ! Pour l'instant, retenez :
        <br><strong>PARA</strong> = destination, objectif, "pour" → <em>Este regalo es <strong>para</strong> ti</em>
        <br><strong>POR</strong> = cause, moyen, "à cause de / par" → <em>Gracias <strong>por</strong> todo</em>
      </div>

      <div class="example-box">
        <div class="example-es">Voy a la oficina en metro con mi hermano.</div>
        <div class="example-fr">Je vais au bureau en métro avec mon frère.</div>
      </div>
    `,
    exercises: [
      {
        type: "fill",
        question: "Complétez : Veo ___ mi madre todos los días. (Je vois ma mère)",
        answer: "a",
        hint: "A personal devant un COD humain"
      },
      {
        type: "qcm",
        question: "Comment dit-on 'avec moi' en espagnol ?",
        options: ["con yo", "con mí", "conmigo", "a mí"],
        correct: 2
      },
      {
        type: "fill",
        question: "Complétez : Este regalo es ___ ti. (Ce cadeau est pour toi)",
        answer: "para",
        hint: "Destination / destinataire"
      }
    ]
  },
  {
    id: "a1-11",
    level: "a1",
    number: 11,
    title: "La négation et les questions",
    desc: "No, nunca, nada, nadie / former des questions",
    content: `
      <h2>La négation</h2>
      <p>En espagnol, la négation est simple : on met <strong>no</strong> devant le verbe.</p>

      <div class="example-box">
        <div class="example-es">No hablo italiano. / No tengo hermanos.</div>
        <div class="example-fr">Je ne parle pas italien. / Je n'ai pas de frères et sœurs.</div>
      </div>

      <h3>Les mots négatifs</h3>
      <table class="grammar-table">
        <tr><th>Négatif</th><th>Affirmatif</th><th>Sens</th></tr>
        <tr><td>no</td><td>sí</td><td>non / oui</td></tr>
        <tr><td>nunca / jamás</td><td>siempre</td><td>jamais / toujours</td></tr>
        <tr><td>nada</td><td>algo</td><td>rien / quelque chose</td></tr>
        <tr><td>nadie</td><td>alguien</td><td>personne / quelqu'un</td></tr>
        <tr><td>ninguno/a</td><td>alguno/a</td><td>aucun(e) / quelque</td></tr>
        <tr><td>tampoco</td><td>también</td><td>non plus / aussi</td></tr>
        <tr><td>ni...ni</td><td>o...o</td><td>ni...ni / ou...ou</td></tr>
      </table>

      <div class="tip-box">
        <strong>💡 Double négation :</strong> En espagnol, la double négation est <strong>correcte et courante</strong> ! <em>No tengo <strong>nada</strong></em> = Je n'ai rien. <em>No viene <strong>nadie</strong></em> = Personne ne vient.
      </div>

      <h2>Les questions</h2>
      <p>En espagnol, les questions sont encadrées par <strong>¿ ... ?</strong> (le point d'interrogation inversé au début est obligatoire !)</p>
      
      <h3>Les mots interrogatifs</h3>
      <table class="grammar-table">
        <tr><th>Espagnol</th><th>Français</th></tr>
        <tr><td>¿Qué?</td><td>Quoi / Que ?</td></tr>
        <tr><td>¿Quién / Quiénes?</td><td>Qui ?</td></tr>
        <tr><td>¿Dónde?</td><td>Où ?</td></tr>
        <tr><td>¿Cuándo?</td><td>Quand ?</td></tr>
        <tr><td>¿Cómo?</td><td>Comment ?</td></tr>
        <tr><td>¿Cuánto/a/os/as?</td><td>Combien ?</td></tr>
        <tr><td>¿Por qué?</td><td>Pourquoi ?</td></tr>
        <tr><td>¿Cuál / Cuáles?</td><td>Lequel / Lesquels ?</td></tr>
      </table>

      <div class="example-box">
        <div class="example-es">¿Dónde vives? — ¿Por qué estudias español?</div>
        <div class="example-fr">Où habites-tu ? — Pourquoi tu étudies l'espagnol ?</div>
      </div>
    `,
    exercises: [
      {
        type: "fill",
        question: "Traduisez : Je ne mange rien → No como ___",
        answer: "nada",
        hint: "Rien = nada"
      },
      {
        type: "qcm",
        question: "La double négation en espagnol est :",
        options: ["Une erreur grammaticale", "Correcte et courante", "Uniquement à l'oral", "Uniquement en Amérique latine"],
        correct: 1
      },
      {
        type: "qcm",
        question: "Comment dit-on 'Pourquoi ?' en espagnol ?",
        options: ["¿Para qué?", "¿Por qué?", "¿Porque?", "¿Cómo?"],
        correct: 1
      }
    ]
  },
  {
    id: "a1-12",
    level: "a1",
    number: 12,
    title: "Les verbes pronominaux",
    desc: "Llamarse, levantarse, ducharse...",
    content: `
      <h2>Les verbes pronominaux (reflexivos)</h2>
      <p>Comme en français ("se laver"), l'espagnol utilise des verbes pronominaux avec le pronom réfléchi. La différence : le pronom se place <strong>avant</strong> le verbe conjugué.</p>

      <h3>Les pronoms réfléchis</h3>
      <table class="grammar-table">
        <tr><th>Pronom sujet</th><th>Pronom réfléchi</th></tr>
        <tr><td>Yo</td><td>me</td></tr>
        <tr><td>Tú</td><td>te</td></tr>
        <tr><td>Él/Ella/Ud.</td><td>se</td></tr>
        <tr><td>Nosotros</td><td>nos</td></tr>
        <tr><td>Vosotros</td><td>os</td></tr>
        <tr><td>Ellos/Uds.</td><td>se</td></tr>
      </table>

      <h3>Exemple : Levantarse (se lever)</h3>
      <table class="grammar-table">
        <tr><th>Pronom</th><th>Conjugaison</th></tr>
        <tr><td>Yo</td><td><strong>me</strong> levanto</td></tr>
        <tr><td>Tú</td><td><strong>te</strong> levantas</td></tr>
        <tr><td>Él/Ella</td><td><strong>se</strong> levanta</td></tr>
        <tr><td>Nosotros</td><td><strong>nos</strong> levantamos</td></tr>
        <tr><td>Vosotros</td><td><strong>os</strong> levantáis</td></tr>
        <tr><td>Ellos</td><td><strong>se</strong> levantan</td></tr>
      </table>

      <h3>Verbes pronominaux courants</h3>
      <ul>
        <li><em>llamarse</em> — s'appeler → <em>Me llamo Pablo</em></li>
        <li><em>despertarse</em> — se réveiller</li>
        <li><em>levantarse</em> — se lever</li>
        <li><em>ducharse</em> — se doucher</li>
        <li><em>vestirse</em> — s'habiller</li>
        <li><em>acostarse</em> — se coucher</li>
        <li><em>sentirse</em> — se sentir</li>
        <li><em>irse</em> — s'en aller</li>
      </ul>

      <div class="example-box">
        <div class="example-es">Me levanto a las siete, me ducho y me visto rápidamente.</div>
        <div class="example-fr">Je me lève à sept heures, je me douche et je m'habille rapidement.</div>
      </div>

      <div class="tip-box">
        <strong>💡 Avec l'infinitif :</strong> Le pronom peut se coller à la fin de l'infinitif : <em>Voy a <strong>ducharme</strong></em> ou <em><strong>Me</strong> voy a duchar</em> (les deux sont corrects).
      </div>
    `,
    exercises: [
      {
        type: "fill",
        question: "Complétez : ¿Cómo ___ llamas? (Comment tu t'appelles ?)",
        answer: "te",
        hint: "Pronom réfléchi pour 'tú'"
      },
      {
        type: "fill",
        question: "Conjuguez : Ellos ___ (levantarse) temprano. (Ils se lèvent tôt)",
        answer: "se levantan",
        hint: "Pronom réfléchi 'se' + verbe en -AR, 3e personne pluriel"
      },
      {
        type: "qcm",
        question: "'Voy a ducharme' est équivalent à :",
        options: ["Me voy a duchar", "Se voy a duchar", "Voy ducharme", "Me ducho a ir"],
        correct: 0
      }
    ]
  }
];
