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

  // , { id: "nuevo-tema", asignatura: "...", titulo: "...", tarjetas: [ ... ], test: [ ... ] }
];
