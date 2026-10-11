// =====================================================
//  TUS TEMAS DE ESTUDIO
//  Para añadir un tema nuevo: copia un bloque { ... },
//  pégalo al final de la lista (separado por una coma)
//  y cambia el contenido.
// =====================================================

window.TEMAS = [
  {
    id: "ingles-modales",
    asignatura: "Inglés",
    titulo: "Verbos modales",
    tarjetas: [
      { frente: "can", reverso: "Poder / saber hacer algo (capacidad o permiso informal).\nI can swim." },
      { frente: "could", reverso: "Podía / podría. Pasado de can o petición educada.\nCould you help me?" },
      { frente: "may", reverso: "Puede que / ¿puedo? (permiso formal o posibilidad).\nMay I come in?" },
      { frente: "might", reverso: "Quizás, posibilidad más baja que may.\nIt might rain." },
      { frente: "must", reverso: "Deber (obligación fuerte o deducción segura).\nYou must wear a helmet." },
      { frente: "mustn't", reverso: "Prohibido, no se debe.\nYou mustn't smoke here." },
      { frente: "have to", reverso: "Tener que (obligación externa, una norma).\nI have to work on Saturday." },
      { frente: "don't have to", reverso: "No hace falta (no es obligatorio, pero puedes).\nYou don't have to come." },
      { frente: "should", reverso: "Debería (consejo).\nYou should rest more." },
      { frente: "would", reverso: "Condicional (-ría) o petición educada.\nWould you like a coffee?" },
      { frente: "Regla de oro", reverso: "Después de un modal va el verbo sin 'to' y sin '-s'.\nShe can drive (no: she cans to drive)." }
    ],
    test: [
      { pregunta: "___ you open the window, please? (petición educada)", opciones: ["Must", "Could", "Should", "Might"], correcta: 1, explicacion: "Could se usa para pedir algo con educación." },
      { pregunta: "You ___ smoke in the hospital. It's forbidden.", opciones: ["don't have to", "mustn't", "shouldn't", "might not"], correcta: 1, explicacion: "Mustn't = está prohibido." },
      { pregunta: "Tomorrow is Sunday. I ___ get up early.", opciones: ["mustn't", "don't have to", "can't", "couldn't"], correcta: 1, explicacion: "Don't have to = no es necesario." },
      { pregunta: "You look tired. You ___ go to bed.", opciones: ["should", "may", "could", "would"], correcta: 0, explicacion: "Should da un consejo." },
      { pregunta: "When I was 10, I ___ ride a bike.", opciones: ["can", "could", "may", "must"], correcta: 1, explicacion: "Could es el pasado de can (capacidad)." },
      { pregunta: "¿Cuál es correcta?", opciones: ["She cans speak English", "She can to speak English", "She can speak English", "She can speaks English"], correcta: 2, explicacion: "Modal + verbo sin 'to' y sin '-s'." },
      { pregunta: "Take an umbrella. It ___ rain later (no es seguro).", opciones: ["must", "might", "has to", "should"], correcta: 1, explicacion: "Might = posibilidad, no es seguro." },
      { pregunta: "Forma formal de pedir permiso:", opciones: ["Can I go?", "May I leave early?", "I go?", "Must I go?"], correcta: 1, explicacion: "May I...? es la forma más formal y educada." }
    ]
  }

  ,{
    id: "ingles-logros",
    asignatura: "Inglés",
    titulo: "Logros (Achievements)",
    tarjetas: [
      { frente: "publish a book", reverso: "publicar un libro" },
      { frente: "win a prize", reverso: "ganar un premio" },
      { frente: "create a website", reverso: "crear una página web" },
      { frente: "paint a picture", reverso: "pintar un cuadro" },
      { frente: "write music", reverso: "componer música" },
      { frente: "make a film", reverso: "hacer una película" },
      { frente: "invent things", reverso: "inventar cosas" },
      { frente: "become rich", reverso: "hacerse rico" },
      { frente: "play in a band", reverso: "tocar en un grupo musical" },
      { frente: "start a business", reverso: "empezar / abrir un negocio" },
      { frente: "become famous", reverso: "hacerse famoso" },
      { frente: "release an album", reverso: "lanzar un álbum" },
      { frente: "participate in a competition", reverso: "participar en una competición" },
      { frente: "earn money", reverso: "ganar dinero (trabajando)" },
      { frente: "¿win o earn?", reverso: "win = ganar un premio o una competición\nearn = ganar dinero trabajando" }
    ],
    test: [
      { pregunta: "¿Qué significa «release an album»?", opciones: ["grabar un álbum", "lanzar un álbum", "comprar un álbum", "escuchar un álbum"], correcta: 1, explicacion: "Release = lanzar, sacar al mercado." },
      { pregunta: "¿Cómo se dice «hacerse rico»?", opciones: ["become rich", "make rich", "be rich", "get famous"], correcta: 0, explicacion: "Become = hacerse, convertirse en." },
      { pregunta: "She wants to ___ a prize in the competition.", opciones: ["earn", "win", "make", "start"], correcta: 1, explicacion: "Los premios se ganan con win." },
      { pregunta: "I work every day to ___ money.", opciones: ["win", "earn", "become", "publish"], correcta: 1, explicacion: "El dinero que ganas trabajando es earn." },
      { pregunta: "¿Cómo se dice «abrir un negocio»?", opciones: ["open a business", "start a business", "make a business", "create a business"], correcta: 1, explicacion: "En tus apuntes: start a business." },
      { pregunta: "¿Qué significa «paint a picture»?", opciones: ["hacer una foto", "pintar un cuadro", "dibujar un mapa", "colgar un cuadro"], correcta: 1, explicacion: "Picture aquí es cuadro o dibujo." },
      { pregunta: "¿Cómo se dice «componer música»?", opciones: ["make music", "play music", "write music", "listen music"], correcta: 2, explicacion: "Componer música = write music." },
      { pregunta: "He wants to ___ a film about his life.", opciones: ["make", "do", "write", "play"], correcta: 0, explicacion: "Hacer una película = make a film." },
      { pregunta: "¿Qué significa «play in a band»?", opciones: ["jugar en un equipo", "tocar en un grupo musical", "bailar en una fiesta", "cantar en un coro"], correcta: 1, explicacion: "Band = grupo de música." },
      { pregunta: "¿Cómo se dice «crear una página web»?", opciones: ["do a website", "create a website", "publish a website", "invent a website"], correcta: 1, explicacion: "Create a website." }
    ]
  }
  ,{
    id: "ingles-vida",
    asignatura: "Inglés",
    titulo: "Acontecimientos de la vida (Life events)",
    tarjetas: [
      { frente: "be born", reverso: "nacer\nI was born in 1981." },
      { frente: "have a baby", reverso: "tener un bebé" },
      { frente: "grow up", reverso: "crecer" },
      { frente: "go to university", reverso: "ir a la universidad" },
      { frente: "get a job", reverso: "conseguir un trabajo" },
      { frente: "work for", reverso: "trabajar para\nI work for a telecom company." },
      { frente: "get engaged", reverso: "comprometerse (para casarse)" },
      { frente: "get married", reverso: "casarse" },
      { frente: "get divorced", reverso: "divorciarse" },
      { frente: "move (to)", reverso: "mudarse (a)\nWe moved to Talavera." },
      { frente: "retire", reverso: "jubilarse" },
      { frente: "die", reverso: "morir" },
      { frente: "Truco: get + ...", reverso: "get engaged, get married, get divorced, get a job\nGet sirve para «conseguir» o «pasar a estar»." }
    ],
    test: [
      { pregunta: "¿Cómo se dice «casarse»?", opciones: ["get engaged", "get married", "get divorced", "have a baby"], correcta: 1, explicacion: "Get married = casarse." },
      { pregunta: "¿Qué significa «get engaged»?", opciones: ["casarse", "divorciarse", "comprometerse", "enamorarse"], correcta: 2, explicacion: "Get engaged es comprometerse antes de la boda." },
      { pregunta: "¿Cómo se dice «jubilarse»?", opciones: ["retire", "relax", "return", "rest"], correcta: 0, explicacion: "Retire = jubilarse." },
      { pregunta: "I ___ born in Spain.", opciones: ["am", "was", "have", "did"], correcta: 1, explicacion: "Nacer se dice be born, y en pasado: I was born." },
      { pregunta: "¿Qué significa «grow up»?", opciones: ["levantarse", "crecer", "subir", "mudarse"], correcta: 1, explicacion: "Grow up = crecer (hacerse mayor)." },
      { pregunta: "They ___ to Madrid last year.", opciones: ["moved", "worked", "retired", "grew"], correcta: 0, explicacion: "Move to = mudarse a." },
      { pregunta: "¿Cómo se dice «conseguir un trabajo»?", opciones: ["make a job", "do a job", "get a job", "win a job"], correcta: 2, explicacion: "Get a job." },
      { pregunta: "I work ___ Radio Soluciones.", opciones: ["to", "in", "for", "at"], correcta: 2, explicacion: "Trabajar para una empresa = work for." },
      { pregunta: "¿Qué significa «get divorced»?", opciones: ["casarse", "divorciarse", "separarse de casa", "comprometerse"], correcta: 1, explicacion: "Get divorced = divorciarse." },
      { pregunta: "Orden normal de una vida:", opciones: ["be born → grow up → get a job → retire", "grow up → be born → retire → get a job", "retire → get a job → be born → grow up", "get a job → be born → grow up → retire"], correcta: 0, explicacion: "Nacer, crecer, trabajar y jubilarse." }
    ]
  }

  // , { id: "nuevo-tema", asignatura: "...", titulo: "...", tarjetas: [ ... ], test: [ ... ] }
];
