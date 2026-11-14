const mundos = [
  {
    "id": 1,
    "name": "Reino de los fundamentos contables",
    "short": "Fundamentos contables",
    "icon": "📚",
    "desc": "Los conceptos básicos que sostienen todo el conocimiento contable.",
    "req": 0
  },
  {
    "id": 2,
    "name": "La ciudad del ciclo contable",
    "short": "Ciclo contable",
    "icon": "🔄",
    "desc": "Aprende a registrar operaciones y comprender los libros y lados de las cuentas.",
    "req": 15
  },
  {
    "id": 3,
    "name": "El imperio de los estados financieros",
    "short": "Estados financieros",
    "icon": "📈",
    "desc": "Distingue qué informa cada estado financiero y cómo se relacionan.",
    "req": 35
  },
  {
    "id": 4,
    "name": "El reino de los impuestos",
    "short": "Impuestos y tributos",
    "icon": "🏛️",
    "desc": "Comprende tributos, impuestos y obligaciones tributarias descritas en tus tarjetas.",
    "req": 55
  },
  {
    "id": 5,
    "name": "La fábrica de costos y gastos",
    "short": "Costos y gastos",
    "icon": "🏭",
    "desc": "Identifica la contabilidad de costos y los elementos del costo de producción.",
    "req": 75
  },
  {
    "id": 6,
    "name": "El almacén de los inventarios",
    "short": "Inventarios",
    "icon": "📦",
    "desc": "Aprende qué es un inventario y distingue materia prima, productos en proceso y terminados.",
    "req": 100
  },
  {
    "id": 7,
    "name": "La fortaleza de la auditoría",
    "short": "Auditoría y control",
    "icon": "🔎",
    "desc": "Conoce auditoría, control interno, auditoría externa, NIA y evidencia.",
    "req": 125
  },
  {
    "id": 8,
    "name": "El marco legal",
    "short": "Normas contables",
    "icon": "⚖️",
    "desc": "Familiarízate con uniformidad, NIIF, NIIF para PYMES, NIC 37 y NIC 16.",
    "req": 150
  },
  {
    "id": 9,
    "name": "La isla de las finanzas",
    "short": "Finanzas",
    "icon": "🏝️",
    "desc": "Aprende finanzas, rentabilidad, capital de trabajo, presupuesto y punto de equilibrio.",
    "req": 180
  },
  {
    "id": 10,
    "name": "Academia de los maestros contables",
    "short": "Ética profesional",
    "icon": "🎓",
    "desc": "Conoce ética, función del contador, independencia, responsabilidad y confidencialidad.",
    "req": 210
  }
];

const lecciones = [
  {
    "id": 1,
    "world": 1,
    "level": 1,
    "title": "¿Qué es la contabilidad?",
    "subtitle": "Los conceptos básicos que sostienen todo el conocimiento contable.",
    "sections": [
      [
        "Definición de la tarjeta",
        "La contabilidad es la técnica que registra, clasifica y resume las operaciones de una empresa."
      ],
      [
        "Explicación paso a paso",
        "Registrar es dejar constancia; clasificar es agrupar por naturaleza; resumir es organizar para la toma de decisiones."
      ],
      [
        "Ejemplo práctico",
        "Una tienda compra mercancía y vende parte de ella; la contabilidad procesa ambas operaciones."
      ],
      [
        "Cómo reconocer el concepto",
        "Identifica la técnica que procesa operaciones empresariales."
      ],
      [
        "Lo que debes recordar",
        "¿Qué es la contabilidad?: La contabilidad es la técnica que registra, clasifica y resume las operaciones de una empresa."
      ]
    ],
    "summary": "¿Qué es la contabilidad?. La contabilidad es la técnica que registra, clasifica y resume las operaciones de una empresa.",
    "questions": [
      [
        "¿Cuál es la definición correcta de ¿qué es la contabilidad??",
        [
          "Es un concepto ajeno a la gestión contable y financiera de la entidad.",
          "La contabilidad es la técnica que registra, clasifica y resume las operaciones de una empresa.",
          "Corresponde exclusivamente a un registro temporal sin validez formal."
        ],
        1,
        "Recuerda: La contabilidad es la técnica que registra, clasifica y resume las operaciones de una empresa."
      ],
      [
        "Según esta lección, ¿cómo se entiende el concepto de ¿qué es la contabilidad??",
        [
          "Registrar es dejar constancia; clasificar es agrupar por naturaleza; resumir es organizar para la toma de decisiones.",
          "Se calcula restando todos los pasivos circulantes entre sí.",
          "Es un informe exclusivo para auditorías externas gubernamentales."
        ],
        0,
        "Recuerda: La contabilidad es la técnica que registra, clasifica y resume las operaciones de una empresa."
      ],
      [
        "¿Qué enunciado describe correctamente la aplicación práctica de ¿qué es la contabilidad??",
        [
          "No tiene aplicación directa en las operaciones cotidianas de una empresa.",
          "Una tienda compra mercancía y vende parte de ella; la contabilidad procesa ambas operaciones.",
          "Solo se aplica al cierre de operaciones fiscales anuales obligatorias."
        ],
        1,
        "Recuerda: La contabilidad es la técnica que registra, clasifica y resume las operaciones de una empresa."
      ],
      [
        "¿Cuál afirmación coincide exactamente con lo explicado sobre ¿qué es la contabilidad??",
        [
          "Se relaciona directamente con la premisa: La contabilidad es la técnica que registra, clasifica y resume las operaciones de una empresa.",
          "Modifica de forma arbitraria la ecuación contable fundamental.",
          "Representa un pasivo exigible a corto plazo."
        ],
        0,
        "Recuerda: La contabilidad es la técnica que registra, clasifica y resume las operaciones de una empresa."
      ],
      [
        "Al estudiar ¿qué es la contabilidad?, ¿qué aspecto clave debes identificar?",
        [
          "Su dependencia exclusiva de factores externos macroeconómicos.",
          "Identifica la técnica que procesa operaciones empresariales.",
          "Que no requiere ningún tipo de control ni registro documental."
        ],
        1,
        "Recuerda: La contabilidad es la técnica que registra, clasifica y resume las operaciones de una empresa."
      ],
      [
        "¿Qué opción expresa la idea central desarrollada en esta lección?",
        [
          "Los registros se realizan sin seguir ningún orden lógico ni cronológico.",
          "La contabilidad es la técnica que registra, clasifica y resume las operaciones de una empresa.",
          "Los estados financieros pierden toda validez legal al aplicarlo."
        ],
        1,
        "Recuerda: La contabilidad es la técnica que registra, clasifica y resume las operaciones de una empresa."
      ],
      [
        "De acuerdo con los fundamentos estudiados, ¿cómo opera ¿qué es la contabilidad??",
        [
          "Registrar es dejar constancia; clasificar es agrupar por naturaleza; resumir es organizar para la toma de decisiones.",
          "Generando automáticamente pasivos contingentes para la entidad.",
          "Eliminando la necesidad de libros diario y mayor."
        ],
        0,
        "Recuerda: La contabilidad es la técnica que registra, clasifica y resume las operaciones de una empresa."
      ],
      [
        "¿Cuál de las siguientes opciones ejemplifica correctamente este concepto?",
        [
          "Modificar estados financieros sin soporte documental.",
          "Una tienda compra mercancía y vende parte de ella; la contabilidad procesa ambas operaciones.",
          "Omitir el registro de operaciones mercantiles cotidianas."
        ],
        1,
        "Recuerda: La contabilidad es la técnica que registra, clasifica y resume las operaciones de una empresa."
      ],
      [
        "¿Qué descripción corresponde al principio fundamental explicado en ¿qué es la contabilidad??",
        [
          "La supresión total de controles internos en la empresa.",
          "La aplicación de métodos empíricos sin base técnica.",
          "La contabilidad es la técnica que registra, clasifica y resume las operaciones de una empresa."
        ],
        2,
        "Recuerda: La contabilidad es la técnica que registra, clasifica y resume las operaciones de una empresa."
      ],
      [
        "Selecciona la afirmación que resume de mejor manera lo aprendido sobre ¿qué es la contabilidad?:",
        [
          "Es un procedimiento opcional que las empresas pueden ignorar.",
          "La contabilidad es la técnica que registra, clasifica y resume las operaciones de una empresa.",
          "Distorsiona la igualdad numérica de los registros contables."
        ],
        1,
        "Recuerda: La contabilidad es la técnica que registra, clasifica y resume las operaciones de una empresa."
      ]
    ]
  },
  {
    "id": 2,
    "world": 1,
    "level": 2,
    "title": "El patrimonio",
    "subtitle": "Los conceptos básicos que sostienen todo el conocimiento contable.",
    "sections": [
      [
        "Definición de la tarjeta",
        "El patrimonio es lo que queda de la empresa después de pagar sus deudas. Se calcula restando el pasivo al activo."
      ],
      [
        "Explicación paso a paso",
        "Su fórmula principal es Patrimonio = Activo − Pasivo."
      ],
      [
        "Ejemplo práctico",
        "Si una empresa tiene $12,000 en activos y $5,000 en pasivos, su patrimonio es $7,000."
      ],
      [
        "Cómo reconocer el concepto",
        "Relaciona la diferencia entre lo que se posee y lo que se debe."
      ],
      [
        "Lo que debes recordar",
        "El patrimonio: El patrimonio es lo que queda de la empresa después de pagar sus deudas. Se calcula restando el pasivo al activo."
      ]
    ],
    "summary": "El patrimonio. El patrimonio es lo que queda de la empresa después de pagar sus deudas. Se calcula restando el pasivo al activo.",
    "questions": [
      [
        "¿Cuál es la definición correcta de el patrimonio?",
        [
          "Es un concepto ajeno a la gestión contable y financiera de la entidad.",
          "El patrimonio es lo que queda de la empresa después de pagar sus deudas. Se calcula restando el pasivo al activo.",
          "Corresponde exclusivamente a un registro temporal sin validez formal."
        ],
        1,
        "Recuerda: El patrimonio es lo que queda de la empresa después de pagar sus deudas. Se calcula restando el pasivo al activo."
      ],
      [
        "Según esta lección, ¿cómo se entiende el concepto de el patrimonio?",
        [
          "Su fórmula principal es Patrimonio = Activo − Pasivo.",
          "Se calcula restando todos los pasivos circulantes entre sí.",
          "Es un informe exclusivo para auditorías externas gubernamentales."
        ],
        0,
        "Recuerda: El patrimonio es lo que queda de la empresa después de pagar sus deudas. Se calcula restando el pasivo al activo."
      ],
      [
        "¿Qué enunciado describe correctamente la aplicación práctica de el patrimonio?",
        [
          "No tiene aplicación directa en las operaciones cotidianas de una empresa.",
          "Si una empresa tiene $12,000 en activos y $5,000 en pasivos, su patrimonio es $7,000.",
          "Solo se aplica al cierre de operaciones fiscales anuales obligatorias."
        ],
        1,
        "Recuerda: El patrimonio es lo que queda de la empresa después de pagar sus deudas. Se calcula restando el pasivo al activo."
      ],
      [
        "¿Cuál afirmación coincide exactamente con lo explicado sobre el patrimonio?",
        [
          "Se relaciona directamente con la premisa: El patrimonio es lo que queda de la empresa después de pagar sus deudas. Se calcula restando el pasivo al activo.",
          "Modifica de forma arbitraria la ecuación contable fundamental.",
          "Representa un pasivo exigible a corto plazo."
        ],
        0,
        "Recuerda: El patrimonio es lo que queda de la empresa después de pagar sus deudas. Se calcula restando el pasivo al activo."
      ],
      [
        "Al estudiar el patrimonio, ¿qué aspecto clave debes identificar?",
        [
          "Su dependencia exclusiva de factores externos macroeconómicos.",
          "Relaciona la diferencia entre lo que se posee y lo que se debe.",
          "Que no requiere ningún tipo de control ni registro documental."
        ],
        1,
        "Recuerda: El patrimonio es lo que queda de la empresa después de pagar sus deudas. Se calcula restando el pasivo al activo."
      ],
      [
        "¿Qué opción expresa la idea central desarrollada en esta lección?",
        [
          "Los registros se realizan sin seguir ningún orden lógico ni cronológico.",
          "El patrimonio es lo que queda de la empresa después de pagar sus deudas. Se calcula restando el pasivo al activo.",
          "Los estados financieros pierden toda validez legal al aplicarlo."
        ],
        1,
        "Recuerda: El patrimonio es lo que queda de la empresa después de pagar sus deudas. Se calcula restando el pasivo al activo."
      ],
      [
        "De acuerdo con los fundamentos estudiados, ¿cómo opera el patrimonio?",
        [
          "Su fórmula principal es Patrimonio = Activo − Pasivo.",
          "Generando automáticamente pasivos contingentes para la entidad.",
          "Eliminando la necesidad de libros diario y mayor."
        ],
        0,
        "Recuerda: El patrimonio es lo que queda de la empresa después de pagar sus deudas. Se calcula restando el pasivo al activo."
      ],
      [
        "¿Cuál de las siguientes opciones ejemplifica correctamente este concepto?",
        [
          "Modificar estados financieros sin soporte documental.",
          "Si una empresa tiene $12,000 en activos y $5,000 en pasivos, su patrimonio es $7,000.",
          "Omitir el registro de operaciones mercantiles cotidianas."
        ],
        1,
        "Recuerda: El patrimonio es lo que queda de la empresa después de pagar sus deudas. Se calcula restando el pasivo al activo."
      ],
      [
        "¿Qué descripción corresponde al principio fundamental explicado en el patrimonio?",
        [
          "La supresión total de controles internos en la empresa.",
          "La aplicación de métodos empíricos sin base técnica.",
          "El patrimonio es lo que queda de la empresa después de pagar sus deudas. Se calcula restando el pasivo al activo."
        ],
        2,
        "Recuerda: El patrimonio es lo que queda de la empresa después de pagar sus deudas. Se calcula restando el pasivo al activo."
      ],
      [
        "Selecciona la afirmación que resume de mejor manera lo aprendido sobre el patrimonio:",
        [
          "Es un procedimiento opcional que las empresas pueden ignorar.",
          "El patrimonio es lo que queda de la empresa después de pagar sus deudas. Se calcula restando el pasivo al activo.",
          "Distorsiona la igualdad numérica de los registros contables."
        ],
        1,
        "Recuerda: El patrimonio es lo que queda de la empresa después de pagar sus deudas. Se calcula restando el pasivo al activo."
      ]
    ]
  },
  {
    "id": 3,
    "world": 1,
    "level": 3,
    "title": "El activo",
    "subtitle": "Los conceptos básicos que sostienen todo el conocimiento contable.",
    "sections": [
      [
        "Definición de la tarjeta",
        "El activo son los bienes y derechos que tiene la empresa. Algunos ejemplos son el dinero, la mercadería y los edificios."
      ],
      [
        "Explicación paso a paso",
        "Los bienes son recursos tangibles o intangibles; los derechos representan dinero a cobrar de terceros."
      ],
      [
        "Ejemplo práctico",
        "El dinero en caja, el inventario para la venta y los vehículos de reparto son activos."
      ],
      [
        "Cómo reconocer el concepto",
        "Busca bienes y derechos de propiedad de la entidad."
      ],
      [
        "Lo que debes recordar",
        "El activo: El activo son los bienes y derechos que tiene la empresa. Algunos ejemplos son el dinero, la mercadería y los edificios."
      ]
    ],
    "summary": "El activo. El activo son los bienes y derechos que tiene la empresa. Algunos ejemplos son el dinero, la mercadería y los edificios.",
    "questions": [
      [
        "¿Cuál es la definición correcta de el activo?",
        [
          "Es un concepto ajeno a la gestión contable y financiera de la entidad.",
          "El activo son los bienes y derechos que tiene la empresa. Algunos ejemplos son el dinero, la mercadería y los edificios.",
          "Corresponde exclusivamente a un registro temporal sin validez formal."
        ],
        1,
        "Recuerda: El activo son los bienes y derechos que tiene la empresa. Algunos ejemplos son el dinero, la mercadería y los edificios."
      ],
      [
        "Según esta lección, ¿cómo se entiende el concepto de el activo?",
        [
          "Los bienes son recursos tangibles o intangibles; los derechos representan dinero a cobrar de terceros.",
          "Se calcula restando todos los pasivos circulantes entre sí.",
          "Es un informe exclusivo para auditorías externas gubernamentales."
        ],
        0,
        "Recuerda: El activo son los bienes y derechos que tiene la empresa. Algunos ejemplos son el dinero, la mercadería y los edificios."
      ],
      [
        "¿Qué enunciado describe correctamente la aplicación práctica de el activo?",
        [
          "No tiene aplicación directa en las operaciones cotidianas de una empresa.",
          "El dinero en caja, el inventario para la venta y los vehículos de reparto son activos.",
          "Solo se aplica al cierre de operaciones fiscales anuales obligatorias."
        ],
        1,
        "Recuerda: El activo son los bienes y derechos que tiene la empresa. Algunos ejemplos son el dinero, la mercadería y los edificios."
      ],
      [
        "¿Cuál afirmación coincide exactamente con lo explicado sobre el activo?",
        [
          "Se relaciona directamente con la premisa: El activo son los bienes y derechos que tiene la empresa. Algunos ejemplos son el dinero, la mercadería y los edificios.",
          "Modifica de forma arbitraria la ecuación contable fundamental.",
          "Representa un pasivo exigible a corto plazo."
        ],
        0,
        "Recuerda: El activo son los bienes y derechos que tiene la empresa. Algunos ejemplos son el dinero, la mercadería y los edificios."
      ],
      [
        "Al estudiar el activo, ¿qué aspecto clave debes identificar?",
        [
          "Su dependencia exclusiva de factores externos macroeconómicos.",
          "Busca bienes y derechos de propiedad de la entidad.",
          "Que no requiere ningún tipo de control ni registro documental."
        ],
        1,
        "Recuerda: El activo son los bienes y derechos que tiene la empresa. Algunos ejemplos son el dinero, la mercadería y los edificios."
      ],
      [
        "¿Qué opción expresa la idea central desarrollada en esta lección?",
        [
          "Los registros se realizan sin seguir ningún orden lógico ni cronológico.",
          "El activo son los bienes y derechos que tiene la empresa. Algunos ejemplos son el dinero, la mercadería y los edificios.",
          "Los estados financieros pierden toda validez legal al aplicarlo."
        ],
        1,
        "Recuerda: El activo son los bienes y derechos que tiene la empresa. Algunos ejemplos son el dinero, la mercadería y los edificios."
      ],
      [
        "De acuerdo con los fundamentos estudiados, ¿cómo opera el activo?",
        [
          "Los bienes son recursos tangibles o intangibles; los derechos representan dinero a cobrar de terceros.",
          "Generando automáticamente pasivos contingentes para la entidad.",
          "Eliminando la necesidad de libros diario y mayor."
        ],
        0,
        "Recuerda: El activo son los bienes y derechos que tiene la empresa. Algunos ejemplos son el dinero, la mercadería y los edificios."
      ],
      [
        "¿Cuál de las siguientes opciones ejemplifica correctamente este concepto?",
        [
          "Modificar estados financieros sin soporte documental.",
          "El dinero en caja, el inventario para la venta y los vehículos de reparto son activos.",
          "Omitir el registro de operaciones mercantiles cotidianas."
        ],
        1,
        "Recuerda: El activo son los bienes y derechos que tiene la empresa. Algunos ejemplos son el dinero, la mercadería y los edificios."
      ],
      [
        "¿Qué descripción corresponde al principio fundamental explicado en el activo?",
        [
          "La supresión total de controles internos en la empresa.",
          "La aplicación de métodos empíricos sin base técnica.",
          "El activo son los bienes y derechos que tiene la empresa. Algunos ejemplos son el dinero, la mercadería y los edificios."
        ],
        2,
        "Recuerda: El activo son los bienes y derechos que tiene la empresa. Algunos ejemplos son el dinero, la mercadería y los edificios."
      ],
      [
        "Selecciona la afirmación que resume de mejor manera lo aprendido sobre el activo:",
        [
          "Es un procedimiento opcional que las empresas pueden ignorar.",
          "El activo son los bienes y derechos que tiene la empresa. Algunos ejemplos son el dinero, la mercadería y los edificios.",
          "Distorsiona la igualdad numérica de los registros contables."
        ],
        1,
        "Recuerda: El activo son los bienes y derechos que tiene la empresa. Algunos ejemplos son el dinero, la mercadería y los edificios."
      ]
    ]
  },
  {
    "id": 4,
    "world": 1,
    "level": 4,
    "title": "El pasivo",
    "subtitle": "Los conceptos básicos que sostienen todo el conocimiento contable.",
    "sections": [
      [
        "Definición de la tarjeta",
        "El pasivo son las deudas y obligaciones que la empresa debe pagar, como préstamos y cuentas por pagar."
      ],
      [
        "Explicación paso a paso",
        "Representan compromisos financieros futuros con acreedores, proveedores o entidades bancarias."
      ],
      [
        "Ejemplo práctico",
        "Comprar mercancía a crédito genera una cuenta por pagar (pasivo)."
      ],
      [
        "Cómo reconocer el concepto",
        "Identifica obligaciones exigibles y deudas pendientes."
      ],
      [
        "Lo que debes recordar",
        "El pasivo: El pasivo son las deudas y obligaciones que la empresa debe pagar, como préstamos y cuentas por pagar."
      ]
    ],
    "summary": "El pasivo. El pasivo son las deudas y obligaciones que la empresa debe pagar, como préstamos y cuentas por pagar.",
    "questions": [
      [
        "¿Cuál es la definición correcta de el pasivo?",
        [
          "Es un concepto ajeno a la gestión contable y financiera de la entidad.",
          "El pasivo son las deudas y obligaciones que la empresa debe pagar, como préstamos y cuentas por pagar.",
          "Corresponde exclusivamente a un registro temporal sin validez formal."
        ],
        1,
        "Recuerda: El pasivo son las deudas y obligaciones que la empresa debe pagar, como préstamos y cuentas por pagar."
      ],
      [
        "Según esta lección, ¿cómo se entiende el concepto de el pasivo?",
        [
          "Representan compromisos financieros futuros con acreedores, proveedores o entidades bancarias.",
          "Se calcula restando todos los pasivos circulantes entre sí.",
          "Es un informe exclusivo para auditorías externas gubernamentales."
        ],
        0,
        "Recuerda: El pasivo son las deudas y obligaciones que la empresa debe pagar, como préstamos y cuentas por pagar."
      ],
      [
        "¿Qué enunciado describe correctamente la aplicación práctica de el pasivo?",
        [
          "No tiene aplicación directa en las operaciones cotidianas de una empresa.",
          "Comprar mercancía a crédito genera una cuenta por pagar (pasivo).",
          "Solo se aplica al cierre de operaciones fiscales anuales obligatorias."
        ],
        1,
        "Recuerda: El pasivo son las deudas y obligaciones que la empresa debe pagar, como préstamos y cuentas por pagar."
      ],
      [
        "¿Cuál afirmación coincide exactamente con lo explicado sobre el pasivo?",
        [
          "Se relaciona directamente con la premisa: El pasivo son las deudas y obligaciones que la empresa debe pagar, como préstamos y cuentas por pagar.",
          "Modifica de forma arbitraria la ecuación contable fundamental.",
          "Representa un pasivo exigible a corto plazo."
        ],
        0,
        "Recuerda: El pasivo son las deudas y obligaciones que la empresa debe pagar, como préstamos y cuentas por pagar."
      ],
      [
        "Al estudiar el pasivo, ¿qué aspecto clave debes identificar?",
        [
          "Su dependencia exclusiva de factores externos macroeconómicos.",
          "Identifica obligaciones exigibles y deudas pendientes.",
          "Que no requiere ningún tipo de control ni registro documental."
        ],
        1,
        "Recuerda: El pasivo son las deudas y obligaciones que la empresa debe pagar, como préstamos y cuentas por pagar."
      ],
      [
        "¿Qué opción expresa la idea central desarrollada en esta lección?",
        [
          "Los registros se realizan sin seguir ningún orden lógico ni cronológico.",
          "El pasivo son las deudas y obligaciones que la empresa debe pagar, como préstamos y cuentas por pagar.",
          "Los estados financieros pierden toda validez legal al aplicarlo."
        ],
        1,
        "Recuerda: El pasivo son las deudas y obligaciones que la empresa debe pagar, como préstamos y cuentas por pagar."
      ],
      [
        "De acuerdo con los fundamentos estudiados, ¿cómo opera el pasivo?",
        [
          "Representan compromisos financieros futuros con acreedores, proveedores o entidades bancarias.",
          "Generando automáticamente pasivos contingentes para la entidad.",
          "Eliminando la necesidad de libros diario y mayor."
        ],
        0,
        "Recuerda: El pasivo son las deudas y obligaciones que la empresa debe pagar, como préstamos y cuentas por pagar."
      ],
      [
        "¿Cuál de las siguientes opciones ejemplifica correctamente este concepto?",
        [
          "Modificar estados financieros sin soporte documental.",
          "Comprar mercancía a crédito genera una cuenta por pagar (pasivo).",
          "Omitir el registro de operaciones mercantiles cotidianas."
        ],
        1,
        "Recuerda: El pasivo son las deudas y obligaciones que la empresa debe pagar, como préstamos y cuentas por pagar."
      ],
      [
        "¿Qué descripción corresponde al principio fundamental explicado en el pasivo?",
        [
          "La supresión total de controles internos en la empresa.",
          "La aplicación de métodos empíricos sin base técnica.",
          "El pasivo son las deudas y obligaciones que la empresa debe pagar, como préstamos y cuentas por pagar."
        ],
        2,
        "Recuerda: El pasivo son las deudas y obligaciones que la empresa debe pagar, como préstamos y cuentas por pagar."
      ],
      [
        "Selecciona la afirmación que resume de mejor manera lo aprendido sobre el pasivo:",
        [
          "Es un procedimiento opcional que las empresas pueden ignorar.",
          "El pasivo son las deudas y obligaciones que la empresa debe pagar, como préstamos y cuentas por pagar.",
          "Distorsiona la igualdad numérica de los registros contables."
        ],
        1,
        "Recuerda: El pasivo son las deudas y obligaciones que la empresa debe pagar, como préstamos y cuentas por pagar."
      ]
    ]
  },
  {
    "id": 5,
    "world": 1,
    "level": 5,
    "title": "La ecuación contable fundamental",
    "subtitle": "Los conceptos básicos que sostienen todo el conocimiento contable.",
    "sections": [
      [
        "Definición de la tarjeta",
        "Activo = Pasivo + Patrimonio."
      ],
      [
        "Explicación paso a paso",
        "Muestra que todos los recursos de la empresa (activos) son financiados por acreedores (pasivos) o dueños (patrimonio)."
      ],
      [
        "Ejemplo práctico",
        "Si el activo es $20,000 y el pasivo $8,000, el patrimonio asciende a $12,000."
      ],
      [
        "Cómo reconocer el concepto",
        "Reconoce la fórmula básica de equilibrio financiero."
      ],
      [
        "Lo que debes recordar",
        "La ecuación contable fundamental: Activo = Pasivo + Patrimonio."
      ]
    ],
    "summary": "La ecuación contable fundamental. Activo = Pasivo + Patrimonio.",
    "questions": [
      [
        "¿Cuál es la definición correcta de la ecuación contable fundamental?",
        [
          "Es un concepto ajeno a la gestión contable y financiera de la entidad.",
          "Activo = Pasivo + Patrimonio.",
          "Corresponde exclusivamente a un registro temporal sin validez formal."
        ],
        1,
        "Recuerda: Activo = Pasivo + Patrimonio."
      ],
      [
        "Según esta lección, ¿cómo se entiende el concepto de la ecuación contable fundamental?",
        [
          "Muestra que todos los recursos de la empresa (activos) son financiados por acreedores (pasivos) o dueños (patrimonio).",
          "Se calcula restando todos los pasivos circulantes entre sí.",
          "Es un informe exclusivo para auditorías externas gubernamentales."
        ],
        0,
        "Recuerda: Activo = Pasivo + Patrimonio."
      ],
      [
        "¿Qué enunciado describe correctamente la aplicación práctica de la ecuación contable fundamental?",
        [
          "No tiene aplicación directa en las operaciones cotidianas de una empresa.",
          "Si el activo es $20,000 y el pasivo $8,000, el patrimonio asciende a $12,000.",
          "Solo se aplica al cierre de operaciones fiscales anuales obligatorias."
        ],
        1,
        "Recuerda: Activo = Pasivo + Patrimonio."
      ],
      [
        "¿Cuál afirmación coincide exactamente con lo explicado sobre la ecuación contable fundamental?",
        [
          "Se relaciona directamente con la premisa: Activo = Pasivo + Patrimonio.",
          "Modifica de forma arbitraria la ecuación contable fundamental.",
          "Representa un pasivo exigible a corto plazo."
        ],
        0,
        "Recuerda: Activo = Pasivo + Patrimonio."
      ],
      [
        "Al estudiar la ecuación contable fundamental, ¿qué aspecto clave debes identificar?",
        [
          "Su dependencia exclusiva de factores externos macroeconómicos.",
          "Reconoce la fórmula básica de equilibrio financiero.",
          "Que no requiere ningún tipo de control ni registro documental."
        ],
        1,
        "Recuerda: Activo = Pasivo + Patrimonio."
      ],
      [
        "¿Qué opción expresa la idea central desarrollada en esta lección?",
        [
          "Los registros se realizan sin seguir ningún orden lógico ni cronológico.",
          "Activo = Pasivo + Patrimonio.",
          "Los estados financieros pierden toda validez legal al aplicarlo."
        ],
        1,
        "Recuerda: Activo = Pasivo + Patrimonio."
      ],
      [
        "De acuerdo con los fundamentos estudiados, ¿cómo opera la ecuación contable fundamental?",
        [
          "Muestra que todos los recursos de la empresa (activos) son financiados por acreedores (pasivos) o dueños (patrimonio).",
          "Generando automáticamente pasivos contingentes para la entidad.",
          "Eliminando la necesidad de libros diario y mayor."
        ],
        0,
        "Recuerda: Activo = Pasivo + Patrimonio."
      ],
      [
        "¿Cuál de las siguientes opciones ejemplifica correctamente este concepto?",
        [
          "Modificar estados financieros sin soporte documental.",
          "Si el activo es $20,000 y el pasivo $8,000, el patrimonio asciende a $12,000.",
          "Omitir el registro de operaciones mercantiles cotidianas."
        ],
        1,
        "Recuerda: Activo = Pasivo + Patrimonio."
      ],
      [
        "¿Qué descripción corresponde al principio fundamental explicado en la ecuación contable fundamental?",
        [
          "La supresión total de controles internos en la empresa.",
          "La aplicación de métodos empíricos sin base técnica.",
          "Activo = Pasivo + Patrimonio."
        ],
        2,
        "Recuerda: Activo = Pasivo + Patrimonio."
      ],
      [
        "Selecciona la afirmación que resume de mejor manera lo aprendido sobre la ecuación contable fundamental:",
        [
          "Es un procedimiento opcional que las empresas pueden ignorar.",
          "Activo = Pasivo + Patrimonio.",
          "Distorsiona la igualdad numérica de los registros contables."
        ],
        1,
        "Recuerda: Activo = Pasivo + Patrimonio."
      ]
    ]
  },
  {
    "id": 6,
    "world": 1,
    "level": 6,
    "title": "¿Qué son los estados financieros?",
    "subtitle": "Los conceptos básicos que sostienen todo el conocimiento contable.",
    "sections": [
      [
        "Definición de la tarjeta",
        "Son informes que muestran la situación económica y financiera de una empresa."
      ],
      [
        "Explicación paso a paso",
        "Agrupan y sintetizan datos contables para uso de inversores, gerentes y terceros."
      ],
      [
        "Ejemplo práctico",
        "Consultar el balance o el estado de resultados para evaluar el desempeño empresarial."
      ],
      [
        "Cómo reconocer el concepto",
        "Identifica los reportes formales de síntesis contable."
      ],
      [
        "Lo que debes recordar",
        "¿Qué son los estados financieros?: Son informes que muestran la situación económica y financiera de una empresa."
      ]
    ],
    "summary": "¿Qué son los estados financieros?. Son informes que muestran la situación económica y financiera de una empresa.",
    "questions": [
      [
        "¿Cuál es la definición correcta de ¿qué son los estados financieros??",
        [
          "Es un concepto ajeno a la gestión contable y financiera de la entidad.",
          "Son informes que muestran la situación económica y financiera de una empresa.",
          "Corresponde exclusivamente a un registro temporal sin validez formal."
        ],
        1,
        "Recuerda: Son informes que muestran la situación económica y financiera de una empresa."
      ],
      [
        "Según esta lección, ¿cómo se entiende el concepto de ¿qué son los estados financieros??",
        [
          "Agrupan y sintetizan datos contables para uso de inversores, gerentes y terceros.",
          "Se calcula restando todos los pasivos circulantes entre sí.",
          "Es un informe exclusivo para auditorías externas gubernamentales."
        ],
        0,
        "Recuerda: Son informes que muestran la situación económica y financiera de una empresa."
      ],
      [
        "¿Qué enunciado describe correctamente la aplicación práctica de ¿qué son los estados financieros??",
        [
          "No tiene aplicación directa en las operaciones cotidianas de una empresa.",
          "Consultar el balance o el estado de resultados para evaluar el desempeño empresarial.",
          "Solo se aplica al cierre de operaciones fiscales anuales obligatorias."
        ],
        1,
        "Recuerda: Son informes que muestran la situación económica y financiera de una empresa."
      ],
      [
        "¿Cuál afirmación coincide exactamente con lo explicado sobre ¿qué son los estados financieros??",
        [
          "Se relaciona directamente con la premisa: Son informes que muestran la situación económica y financiera de una empresa.",
          "Modifica de forma arbitraria la ecuación contable fundamental.",
          "Representa un pasivo exigible a corto plazo."
        ],
        0,
        "Recuerda: Son informes que muestran la situación económica y financiera de una empresa."
      ],
      [
        "Al estudiar ¿qué son los estados financieros?, ¿qué aspecto clave debes identificar?",
        [
          "Su dependencia exclusiva de factores externos macroeconómicos.",
          "Identifica los reportes formales de síntesis contable.",
          "Que no requiere ningún tipo de control ni registro documental."
        ],
        1,
        "Recuerda: Son informes que muestran la situación económica y financiera de una empresa."
      ],
      [
        "¿Qué opción expresa la idea central desarrollada en esta lección?",
        [
          "Los registros se realizan sin seguir ningún orden lógico ni cronológico.",
          "Son informes que muestran la situación económica y financiera de una empresa.",
          "Los estados financieros pierden toda validez legal al aplicarlo."
        ],
        1,
        "Recuerda: Son informes que muestran la situación económica y financiera de una empresa."
      ],
      [
        "De acuerdo con los fundamentos estudiados, ¿cómo opera ¿qué son los estados financieros??",
        [
          "Agrupan y sintetizan datos contables para uso de inversores, gerentes y terceros.",
          "Generando automáticamente pasivos contingentes para la entidad.",
          "Eliminando la necesidad de libros diario y mayor."
        ],
        0,
        "Recuerda: Son informes que muestran la situación económica y financiera de una empresa."
      ],
      [
        "¿Cuál de las siguientes opciones ejemplifica correctamente este concepto?",
        [
          "Modificar estados financieros sin soporte documental.",
          "Consultar el balance o el estado de resultados para evaluar el desempeño empresarial.",
          "Omitir el registro de operaciones mercantiles cotidianas."
        ],
        1,
        "Recuerda: Son informes que muestran la situación económica y financiera de una empresa."
      ],
      [
        "¿Qué descripción corresponde al principio fundamental explicado en ¿qué son los estados financieros??",
        [
          "La supresión total de controles internos en la empresa.",
          "La aplicación de métodos empíricos sin base técnica.",
          "Son informes que muestran la situación económica y financiera de una empresa."
        ],
        2,
        "Recuerda: Son informes que muestran la situación económica y financiera de una empresa."
      ],
      [
        "Selecciona la afirmación que resume de mejor manera lo aprendido sobre ¿qué son los estados financieros?:",
        [
          "Es un procedimiento opcional que las empresas pueden ignorar.",
          "Son informes que muestran la situación económica y financiera de una empresa.",
          "Distorsiona la igualdad numérica de los registros contables."
        ],
        1,
        "Recuerda: Son informes que muestran la situación económica y financiera de una empresa."
      ]
    ]
  },
  {
    "id": 7,
    "world": 1,
    "level": 7,
    "title": "El balance general",
    "subtitle": "Los conceptos básicos que sostienen todo el conocimiento contable.",
    "sections": [
      [
        "Definición de la tarjeta",
        "Es el estado financiero que presenta los activos, pasivos y patrimonio de una empresa."
      ],
      [
        "Explicación paso a paso",
        "Consolida los recursos y las fuentes de financiación en un momento específico."
      ],
      [
        "Ejemplo práctico",
        "Presentar el total de bienes, deudas y capital social al 31 de diciembre."
      ],
      [
        "Cómo reconocer el concepto",
        "Busca la fotografía estática de activos, pasivos y patrimonio."
      ],
      [
        "Lo que debes recordar",
        "El balance general: Es el estado financiero que presenta los activos, pasivos y patrimonio de una empresa."
      ]
    ],
    "summary": "El balance general. Es el estado financiero que presenta los activos, pasivos y patrimonio de una empresa.",
    "questions": [
      [
        "¿Cuál es la definición correcta de el balance general?",
        [
          "Es un concepto ajeno a la gestión contable y financiera de la entidad.",
          "Es el estado financiero que presenta los activos, pasivos y patrimonio de una empresa.",
          "Corresponde exclusivamente a un registro temporal sin validez formal."
        ],
        1,
        "Recuerda: Es el estado financiero que presenta los activos, pasivos y patrimonio de una empresa."
      ],
      [
        "Según esta lección, ¿cómo se entiende el concepto de el balance general?",
        [
          "Consolida los recursos y las fuentes de financiación en un momento específico.",
          "Se calcula restando todos los pasivos circulantes entre sí.",
          "Es un informe exclusivo para auditorías externas gubernamentales."
        ],
        0,
        "Recuerda: Es el estado financiero que presenta los activos, pasivos y patrimonio de una empresa."
      ],
      [
        "¿Qué enunciado describe correctamente la aplicación práctica de el balance general?",
        [
          "No tiene aplicación directa en las operaciones cotidianas de una empresa.",
          "Presentar el total de bienes, deudas y capital social al 31 de diciembre.",
          "Solo se aplica al cierre de operaciones fiscales anuales obligatorias."
        ],
        1,
        "Recuerda: Es el estado financiero que presenta los activos, pasivos y patrimonio de una empresa."
      ],
      [
        "¿Cuál afirmación coincide exactamente con lo explicado sobre el balance general?",
        [
          "Se relaciona directamente con la premisa: Es el estado financiero que presenta los activos, pasivos y patrimonio de una empresa.",
          "Modifica de forma arbitraria la ecuación contable fundamental.",
          "Representa un pasivo exigible a corto plazo."
        ],
        0,
        "Recuerda: Es el estado financiero que presenta los activos, pasivos y patrimonio de una empresa."
      ],
      [
        "Al estudiar el balance general, ¿qué aspecto clave debes identificar?",
        [
          "Su dependencia exclusiva de factores externos macroeconómicos.",
          "Busca la fotografía estática de activos, pasivos y patrimonio.",
          "Que no requiere ningún tipo de control ni registro documental."
        ],
        1,
        "Recuerda: Es el estado financiero que presenta los activos, pasivos y patrimonio de una empresa."
      ],
      [
        "¿Qué opción expresa la idea central desarrollada en esta lección?",
        [
          "Los registros se realizan sin seguir ningún orden lógico ni cronológico.",
          "Es el estado financiero que presenta los activos, pasivos y patrimonio de una empresa.",
          "Los estados financieros pierden toda validez legal al aplicarlo."
        ],
        1,
        "Recuerda: Es el estado financiero que presenta los activos, pasivos y patrimonio de una empresa."
      ],
      [
        "De acuerdo con los fundamentos estudiados, ¿cómo opera el balance general?",
        [
          "Consolida los recursos y las fuentes de financiación en un momento específico.",
          "Generando automáticamente pasivos contingentes para la entidad.",
          "Eliminando la necesidad de libros diario y mayor."
        ],
        0,
        "Recuerda: Es el estado financiero que presenta los activos, pasivos y patrimonio de una empresa."
      ],
      [
        "¿Cuál de las siguientes opciones ejemplifica correctamente este concepto?",
        [
          "Modificar estados financieros sin soporte documental.",
          "Presentar el total de bienes, deudas y capital social al 31 de diciembre.",
          "Omitir el registro de operaciones mercantiles cotidianas."
        ],
        1,
        "Recuerda: Es el estado financiero que presenta los activos, pasivos y patrimonio de una empresa."
      ],
      [
        "¿Qué descripción corresponde al principio fundamental explicado en el balance general?",
        [
          "La supresión total de controles internos en la empresa.",
          "La aplicación de métodos empíricos sin base técnica.",
          "Es el estado financiero que presenta los activos, pasivos y patrimonio de una empresa."
        ],
        2,
        "Recuerda: Es el estado financiero que presenta los activos, pasivos y patrimonio de una empresa."
      ],
      [
        "Selecciona la afirmación que resume de mejor manera lo aprendido sobre el balance general:",
        [
          "Es un procedimiento opcional que las empresas pueden ignorar.",
          "Es el estado financiero que presenta los activos, pasivos y patrimonio de una empresa.",
          "Distorsiona la igualdad numérica de los registros contables."
        ],
        1,
        "Recuerda: Es el estado financiero que presenta los activos, pasivos y patrimonio de una empresa."
      ]
    ]
  },
  {
    "id": 8,
    "world": 1,
    "level": 8,
    "title": "El estado de resultados",
    "subtitle": "Los conceptos básicos que sostienen todo el conocimiento contable.",
    "sections": [
      [
        "Definición de la tarjeta",
        "Es el informe que muestra los ingresos, costos, gastos y ganancias o pérdidas de una empresa."
      ],
      [
        "Explicación paso a paso",
        "Mide la rentabilidad comparando los ingresos frente a los costos y gastos incurridos."
      ],
      [
        "Ejemplo práctico",
        "Ingresos de $5,000 menos costos de $2,000 y gastos de $1,000 generan una ganancia de $2,000."
      ],
      [
        "Cómo reconocer el concepto",
        "Identifica el reporte de desempeño y rentabilidad temporal."
      ],
      [
        "Lo que debes recordar",
        "El estado de resultados: Es el informe que muestra los ingresos, costos, gastos y ganancias o pérdidas de una empresa."
      ]
    ],
    "summary": "El estado de resultados. Es el informe que muestra los ingresos, costos, gastos y ganancias o pérdidas de una empresa.",
    "questions": [
      [
        "¿Cuál es la definición correcta de el estado de resultados?",
        [
          "Es un concepto ajeno a la gestión contable y financiera de la entidad.",
          "Es el informe que muestra los ingresos, costos, gastos y ganancias o pérdidas de una empresa.",
          "Corresponde exclusivamente a un registro temporal sin validez formal."
        ],
        1,
        "Recuerda: Es el informe que muestra los ingresos, costos, gastos y ganancias o pérdidas de una empresa."
      ],
      [
        "Según esta lección, ¿cómo se entiende el concepto de el estado de resultados?",
        [
          "Mide la rentabilidad comparando los ingresos frente a los costos y gastos incurridos.",
          "Se calcula restando todos los pasivos circulantes entre sí.",
          "Es un informe exclusivo para auditorías externas gubernamentales."
        ],
        0,
        "Recuerda: Es el informe que muestra los ingresos, costos, gastos y ganancias o pérdidas de una empresa."
      ],
      [
        "¿Qué enunciado describe correctamente la aplicación práctica de el estado de resultados?",
        [
          "No tiene aplicación directa en las operaciones cotidianas de una empresa.",
          "Ingresos de $5,000 menos costos de $2,000 y gastos de $1,000 generan una ganancia de $2,000.",
          "Solo se aplica al cierre de operaciones fiscales anuales obligatorias."
        ],
        1,
        "Recuerda: Es el informe que muestra los ingresos, costos, gastos y ganancias o pérdidas de una empresa."
      ],
      [
        "¿Cuál afirmación coincide exactamente con lo explicado sobre el estado de resultados?",
        [
          "Se relaciona directamente con la premisa: Es el informe que muestra los ingresos, costos, gastos y ganancias o pérdidas de una empresa.",
          "Modifica de forma arbitraria la ecuación contable fundamental.",
          "Representa un pasivo exigible a corto plazo."
        ],
        0,
        "Recuerda: Es el informe que muestra los ingresos, costos, gastos y ganancias o pérdidas de una empresa."
      ],
      [
        "Al estudiar el estado de resultados, ¿qué aspecto clave debes identificar?",
        [
          "Su dependencia exclusiva de factores externos macroeconómicos.",
          "Identifica el reporte de desempeño y rentabilidad temporal.",
          "Que no requiere ningún tipo de control ni registro documental."
        ],
        1,
        "Recuerda: Es el informe que muestra los ingresos, costos, gastos y ganancias o pérdidas de una empresa."
      ],
      [
        "¿Qué opción expresa la idea central desarrollada en esta lección?",
        [
          "Los registros se realizan sin seguir ningún orden lógico ni cronológico.",
          "Es el informe que muestra los ingresos, costos, gastos y ganancias o pérdidas de una empresa.",
          "Los estados financieros pierden toda validez legal al aplicarlo."
        ],
        1,
        "Recuerda: Es el informe que muestra los ingresos, costos, gastos y ganancias o pérdidas de una empresa."
      ],
      [
        "De acuerdo con los fundamentos estudiados, ¿cómo opera el estado de resultados?",
        [
          "Mide la rentabilidad comparando los ingresos frente a los costos y gastos incurridos.",
          "Generando automáticamente pasivos contingentes para la entidad.",
          "Eliminando la necesidad de libros diario y mayor."
        ],
        0,
        "Recuerda: Es el informe que muestra los ingresos, costos, gastos y ganancias o pérdidas de una empresa."
      ],
      [
        "¿Cuál de las siguientes opciones ejemplifica correctamente este concepto?",
        [
          "Modificar estados financieros sin soporte documental.",
          "Ingresos de $5,000 menos costos de $2,000 y gastos de $1,000 generan una ganancia de $2,000.",
          "Omitir el registro de operaciones mercantiles cotidianas."
        ],
        1,
        "Recuerda: Es el informe que muestra los ingresos, costos, gastos y ganancias o pérdidas de una empresa."
      ],
      [
        "¿Qué descripción corresponde al principio fundamental explicado en el estado de resultados?",
        [
          "La supresión total de controles internos en la empresa.",
          "La aplicación de métodos empíricos sin base técnica.",
          "Es el informe que muestra los ingresos, costos, gastos y ganancias o pérdidas de una empresa."
        ],
        2,
        "Recuerda: Es el informe que muestra los ingresos, costos, gastos y ganancias o pérdidas de una empresa."
      ],
      [
        "Selecciona la afirmación que resume de mejor manera lo aprendido sobre el estado de resultados:",
        [
          "Es un procedimiento opcional que las empresas pueden ignorar.",
          "Es el informe que muestra los ingresos, costos, gastos y ganancias o pérdidas de una empresa.",
          "Distorsiona la igualdad numérica de los registros contables."
        ],
        1,
        "Recuerda: Es el informe que muestra los ingresos, costos, gastos y ganancias o pérdidas de una empresa."
      ]
    ]
  },
  {
    "id": 9,
    "world": 1,
    "level": 9,
    "title": "El estado de cambios en el patrimonio",
    "subtitle": "Los conceptos básicos que sostienen todo el conocimiento contable.",
    "sections": [
      [
        "Definición de la tarjeta",
        "Es el informe que muestra las variaciones del patrimonio durante un período contable."
      ],
      [
        "Explicación paso a paso",
        "Refleja aumentos por aportes o ganancias y disminuciones por retiros o pérdidas."
      ],
      [
        "Ejemplo práctico",
        "Si el patrimonio pasa de $10,000 a $13,000, hubo un aumento neto de $3,000."
      ],
      [
        "Cómo reconocer el concepto",
        "Busca el análisis de las fluctuaciones en el capital y reservas."
      ],
      [
        "Lo que debes recordar",
        "El estado de cambios en el patrimonio: Es el informe que muestra las variaciones del patrimonio durante un período contable."
      ]
    ],
    "summary": "El estado de cambios en el patrimonio. Es el informe que muestra las variaciones del patrimonio durante un período contable.",
    "questions": [
      [
        "¿Cuál es la definición correcta de el estado de cambios en el patrimonio?",
        [
          "Es un concepto ajeno a la gestión contable y financiera de la entidad.",
          "Es el informe que muestra las variaciones del patrimonio durante un período contable.",
          "Corresponde exclusivamente a un registro temporal sin validez formal."
        ],
        1,
        "Recuerda: Es el informe que muestra las variaciones del patrimonio durante un período contable."
      ],
      [
        "Según esta lección, ¿cómo se entiende el concepto de el estado de cambios en el patrimonio?",
        [
          "Refleja aumentos por aportes o ganancias y disminuciones por retiros o pérdidas.",
          "Se calcula restando todos los pasivos circulantes entre sí.",
          "Es un informe exclusivo para auditorías externas gubernamentales."
        ],
        0,
        "Recuerda: Es el informe que muestra las variaciones del patrimonio durante un período contable."
      ],
      [
        "¿Qué enunciado describe correctamente la aplicación práctica de el estado de cambios en el patrimonio?",
        [
          "No tiene aplicación directa en las operaciones cotidianas de una empresa.",
          "Si el patrimonio pasa de $10,000 a $13,000, hubo un aumento neto de $3,000.",
          "Solo se aplica al cierre de operaciones fiscales anuales obligatorias."
        ],
        1,
        "Recuerda: Es el informe que muestra las variaciones del patrimonio durante un período contable."
      ],
      [
        "¿Cuál afirmación coincide exactamente con lo explicado sobre el estado de cambios en el patrimonio?",
        [
          "Se relaciona directamente con la premisa: Es el informe que muestra las variaciones del patrimonio durante un período contable.",
          "Modifica de forma arbitraria la ecuación contable fundamental.",
          "Representa un pasivo exigible a corto plazo."
        ],
        0,
        "Recuerda: Es el informe que muestra las variaciones del patrimonio durante un período contable."
      ],
      [
        "Al estudiar el estado de cambios en el patrimonio, ¿qué aspecto clave debes identificar?",
        [
          "Su dependencia exclusiva de factores externos macroeconómicos.",
          "Busca el análisis de las fluctuaciones en el capital y reservas.",
          "Que no requiere ningún tipo de control ni registro documental."
        ],
        1,
        "Recuerda: Es el informe que muestra las variaciones del patrimonio durante un período contable."
      ],
      [
        "¿Qué opción expresa la idea central desarrollada en esta lección?",
        [
          "Los registros se realizan sin seguir ningún orden lógico ni cronológico.",
          "Es el informe que muestra las variaciones del patrimonio durante un período contable.",
          "Los estados financieros pierden toda validez legal al aplicarlo."
        ],
        1,
        "Recuerda: Es el informe que muestra las variaciones del patrimonio durante un período contable."
      ],
      [
        "De acuerdo con los fundamentos estudiados, ¿cómo opera el estado de cambios en el patrimonio?",
        [
          "Refleja aumentos por aportes o ganancias y disminuciones por retiros o pérdidas.",
          "Generando automáticamente pasivos contingentes para la entidad.",
          "Eliminando la necesidad de libros diario y mayor."
        ],
        0,
        "Recuerda: Es el informe que muestra las variaciones del patrimonio durante un período contable."
      ],
      [
        "¿Cuál de las siguientes opciones ejemplifica correctamente este concepto?",
        [
          "Modificar estados financieros sin soporte documental.",
          "Si el patrimonio pasa de $10,000 a $13,000, hubo un aumento neto de $3,000.",
          "Omitir el registro de operaciones mercantiles cotidianas."
        ],
        1,
        "Recuerda: Es el informe que muestra las variaciones del patrimonio durante un período contable."
      ],
      [
        "¿Qué descripción corresponde al principio fundamental explicado en el estado de cambios en el patrimonio?",
        [
          "La supresión total de controles internos en la empresa.",
          "La aplicación de métodos empíricos sin base técnica.",
          "Es el informe que muestra las variaciones del patrimonio durante un período contable."
        ],
        2,
        "Recuerda: Es el informe que muestra las variaciones del patrimonio durante un período contable."
      ],
      [
        "Selecciona la afirmación que resume de mejor manera lo aprendido sobre el estado de cambios en el patrimonio:",
        [
          "Es un procedimiento opcional que las empresas pueden ignorar.",
          "Es el informe que muestra las variaciones del patrimonio durante un período contable.",
          "Distorsiona la igualdad numérica de los registros contables."
        ],
        1,
        "Recuerda: Es el informe que muestra las variaciones del patrimonio durante un período contable."
      ]
    ]
  },
  {
    "id": 10,
    "world": 1,
    "level": 10,
    "title": "El estado de flujo de efectivo",
    "subtitle": "Los conceptos básicos que sostienen todo el conocimiento contable.",
    "sections": [
      [
        "Definición de la tarjeta",
        "Es el informe que muestra las entradas y salidas de dinero de una empresa."
      ],
      [
        "Explicación paso a paso",
        "Controla la liquidez real operando con efectivo y equivalentes durante el ejercicio."
      ],
      [
        "Ejemplo práctico",
        "Cobrar $900 a un cliente y pagar $500 a un proveedor genera un flujo neto positivo."
      ],
      [
        "Cómo reconocer el concepto",
        "Identifica el movimiento de efectivo disponible."
      ],
      [
        "Lo que debes recordar",
        "El estado de flujo de efectivo: Es el informe que muestra las entradas y salidas de dinero de una empresa."
      ]
    ],
    "summary": "El estado de flujo de efectivo. Es el informe que muestra las entradas y salidas de dinero de una empresa.",
    "questions": [
      [
        "¿Cuál es la definición correcta de el estado de flujo de efectivo?",
        [
          "Es un concepto ajeno a la gestión contable y financiera de la entidad.",
          "Es el informe que muestra las entradas y salidas de dinero de una empresa.",
          "Corresponde exclusivamente a un registro temporal sin validez formal."
        ],
        1,
        "Recuerda: Es el informe que muestra las entradas y salidas de dinero de una empresa."
      ],
      [
        "Según esta lección, ¿cómo se entiende el concepto de el estado de flujo de efectivo?",
        [
          "Controla la liquidez real operando con efectivo y equivalentes durante el ejercicio.",
          "Se calcula restando todos los pasivos circulantes entre sí.",
          "Es un informe exclusivo para auditorías externas gubernamentales."
        ],
        0,
        "Recuerda: Es el informe que muestra las entradas y salidas de dinero de una empresa."
      ],
      [
        "¿Qué enunciado describe correctamente la aplicación práctica de el estado de flujo de efectivo?",
        [
          "No tiene aplicación directa en las operaciones cotidianas de una empresa.",
          "Cobrar $900 a un cliente y pagar $500 a un proveedor genera un flujo neto positivo.",
          "Solo se aplica al cierre de operaciones fiscales anuales obligatorias."
        ],
        1,
        "Recuerda: Es el informe que muestra las entradas y salidas de dinero de una empresa."
      ],
      [
        "¿Cuál afirmación coincide exactamente con lo explicado sobre el estado de flujo de efectivo?",
        [
          "Se relaciona directamente con la premisa: Es el informe que muestra las entradas y salidas de dinero de una empresa.",
          "Modifica de forma arbitraria la ecuación contable fundamental.",
          "Representa un pasivo exigible a corto plazo."
        ],
        0,
        "Recuerda: Es el informe que muestra las entradas y salidas de dinero de una empresa."
      ],
      [
        "Al estudiar el estado de flujo de efectivo, ¿qué aspecto clave debes identificar?",
        [
          "Su dependencia exclusiva de factores externos macroeconómicos.",
          "Identifica el movimiento de efectivo disponible.",
          "Que no requiere ningún tipo de control ni registro documental."
        ],
        1,
        "Recuerda: Es el informe que muestra las entradas y salidas de dinero de una empresa."
      ],
      [
        "¿Qué opción expresa la idea central desarrollada en esta lección?",
        [
          "Los registros se realizan sin seguir ningún orden lógico ni cronológico.",
          "Es el informe que muestra las entradas y salidas de dinero de una empresa.",
          "Los estados financieros pierden toda validez legal al aplicarlo."
        ],
        1,
        "Recuerda: Es el informe que muestra las entradas y salidas de dinero de una empresa."
      ],
      [
        "De acuerdo con los fundamentos estudiados, ¿cómo opera el estado de flujo de efectivo?",
        [
          "Controla la liquidez real operando con efectivo y equivalentes durante el ejercicio.",
          "Generando automáticamente pasivos contingentes para la entidad.",
          "Eliminando la necesidad de libros diario y mayor."
        ],
        0,
        "Recuerda: Es el informe que muestra las entradas y salidas de dinero de una empresa."
      ],
      [
        "¿Cuál de las siguientes opciones ejemplifica correctamente este concepto?",
        [
          "Modificar estados financieros sin soporte documental.",
          "Cobrar $900 a un cliente y pagar $500 a un proveedor genera un flujo neto positivo.",
          "Omitir el registro de operaciones mercantiles cotidianas."
        ],
        1,
        "Recuerda: Es el informe que muestra las entradas y salidas de dinero de una empresa."
      ],
      [
        "¿Qué descripción corresponde al principio fundamental explicado en el estado de flujo de efectivo?",
        [
          "La supresión total de controles internos en la empresa.",
          "La aplicación de métodos empíricos sin base técnica.",
          "Es el informe que muestra las entradas y salidas de dinero de una empresa."
        ],
        2,
        "Recuerda: Es el informe que muestra las entradas y salidas de dinero de una empresa."
      ],
      [
        "Selecciona la afirmación que resume de mejor manera lo aprendido sobre el estado de flujo de efectivo:",
        [
          "Es un procedimiento opcional que las empresas pueden ignorar.",
          "Es el informe que muestra las entradas y salidas de dinero de una empresa.",
          "Distorsiona la igualdad numérica de los registros contables."
        ],
        1,
        "Recuerda: Es el informe que muestra las entradas y salidas de dinero de una empresa."
      ]
    ]
  },
  {
    "id": 11,
    "world": 2,
    "level": 1,
    "title": "La partida contable",
    "subtitle": "Aprende a registrar operaciones y comprender los libros y lados de las cuentas.",
    "sections": [
      [
        "Definición de la tarjeta",
        "Es el registro de una operación económica mediante cargos y abonos."
      ],
      [
        "Explicación paso a paso",
        "Cada transacción afecta al menos dos cuentas manteniendo el equilibrio de la ecuación contable."
      ],
      [
        "Ejemplo práctico",
        "Analizar qué cuentas intervienen y aplicar débitos y créditos equivalentes."
      ],
      [
        "Cómo reconocer el concepto",
        "Reconoce el principio de dualidad económica en el registro."
      ],
      [
        "Lo que debes recordar",
        "La partida contable: Es el registro de una operación económica mediante cargos y abonos."
      ]
    ],
    "summary": "La partida contable. Es el registro de una operación económica mediante cargos y abonos.",
    "questions": [
      [
        "¿Cuál es la definición correcta de la partida contable?",
        [
          "Es un concepto ajeno a la gestión contable y financiera de la entidad.",
          "Es el registro de una operación económica mediante cargos y abonos.",
          "Corresponde exclusivamente a un registro temporal sin validez formal."
        ],
        1,
        "Recuerda: Es el registro de una operación económica mediante cargos y abonos."
      ],
      [
        "Según esta lección, ¿cómo se entiende el concepto de la partida contable?",
        [
          "Cada transacción afecta al menos dos cuentas manteniendo el equilibrio de la ecuación contable.",
          "Se calcula restando todos los pasivos circulantes entre sí.",
          "Es un informe exclusivo para auditorías externas gubernamentales."
        ],
        0,
        "Recuerda: Es el registro de una operación económica mediante cargos y abonos."
      ],
      [
        "¿Qué enunciado describe correctamente la aplicación práctica de la partida contable?",
        [
          "No tiene aplicación directa en las operaciones cotidianas de una empresa.",
          "Analizar qué cuentas intervienen y aplicar débitos y créditos equivalentes.",
          "Solo se aplica al cierre de operaciones fiscales anuales obligatorias."
        ],
        1,
        "Recuerda: Es el registro de una operación económica mediante cargos y abonos."
      ],
      [
        "¿Cuál afirmación coincide exactamente con lo explicado sobre la partida contable?",
        [
          "Se relaciona directamente con la premisa: Es el registro de una operación económica mediante cargos y abonos.",
          "Modifica de forma arbitraria la ecuación contable fundamental.",
          "Representa un pasivo exigible a corto plazo."
        ],
        0,
        "Recuerda: Es el registro de una operación económica mediante cargos y abonos."
      ],
      [
        "Al estudiar la partida contable, ¿qué aspecto clave debes identificar?",
        [
          "Su dependencia exclusiva de factores externos macroeconómicos.",
          "Reconoce el principio de dualidad económica en el registro.",
          "Que no requiere ningún tipo de control ni registro documental."
        ],
        1,
        "Recuerda: Es el registro de una operación económica mediante cargos y abonos."
      ],
      [
        "¿Qué opción expresa la idea central desarrollada en esta lección?",
        [
          "Los registros se realizan sin seguir ningún orden lógico ni cronológico.",
          "Es el registro de una operación económica mediante cargos y abonos.",
          "Los estados financieros pierden toda validez legal al aplicarlo."
        ],
        1,
        "Recuerda: Es el registro de una operación económica mediante cargos y abonos."
      ],
      [
        "De acuerdo con los fundamentos estudiados, ¿cómo opera la partida contable?",
        [
          "Cada transacción afecta al menos dos cuentas manteniendo el equilibrio de la ecuación contable.",
          "Generando automáticamente pasivos contingentes para la entidad.",
          "Eliminando la necesidad de libros diario y mayor."
        ],
        0,
        "Recuerda: Es el registro de una operación económica mediante cargos y abonos."
      ],
      [
        "¿Cuál de las siguientes opciones ejemplifica correctamente este concepto?",
        [
          "Modificar estados financieros sin soporte documental.",
          "Analizar qué cuentas intervienen y aplicar débitos y créditos equivalentes.",
          "Omitir el registro de operaciones mercantiles cotidianas."
        ],
        1,
        "Recuerda: Es el registro de una operación económica mediante cargos y abonos."
      ],
      [
        "¿Qué descripción corresponde al principio fundamental explicado en la partida contable?",
        [
          "La supresión total de controles internos en la empresa.",
          "La aplicación de métodos empíricos sin base técnica.",
          "Es el registro de una operación económica mediante cargos y abonos."
        ],
        2,
        "Recuerda: Es el registro de una operación económica mediante cargos y abonos."
      ],
      [
        "Selecciona la afirmación que resume de mejor manera lo aprendido sobre la partida contable:",
        [
          "Es un procedimiento opcional que las empresas pueden ignorar.",
          "Es el registro de una operación económica mediante cargos y abonos.",
          "Distorsiona la igualdad numérica de los registros contables."
        ],
        1,
        "Recuerda: Es el registro de una operación económica mediante cargos y abonos."
      ]
    ]
  },
  {
    "id": 12,
    "world": 2,
    "level": 2,
    "title": "El libro diario",
    "subtitle": "Aprende a registrar operaciones y comprender los libros y lados de las cuentas.",
    "sections": [
      [
        "Definición de la tarjeta",
        "Es el libro donde se registran cronológicamente las operaciones de una empresa."
      ],
      [
        "Explicación paso a paso",
        "Ordena día a día cada transacción comercial en forma de asientos contables."
      ],
      [
        "Ejemplo práctico",
        "Anotar una compra el lunes y un pago el martes siguiendo estrictamente el orden de fechas."
      ],
      [
        "Cómo reconocer el concepto",
        "Busca el registro temporal secuencial de transacciones."
      ],
      [
        "Lo que debes recordar",
        "El libro diario: Es el libro donde se registran cronológicamente las operaciones de una empresa."
      ]
    ],
    "summary": "El libro diario. Es el libro donde se registran cronológicamente las operaciones de una empresa.",
    "questions": [
      [
        "¿Cuál es la definición correcta de el libro diario?",
        [
          "Es un concepto ajeno a la gestión contable y financiera de la entidad.",
          "Es el libro donde se registran cronológicamente las operaciones de una empresa.",
          "Corresponde exclusivamente a un registro temporal sin validez formal."
        ],
        1,
        "Recuerda: Es el libro donde se registran cronológicamente las operaciones de una empresa."
      ],
      [
        "Según esta lección, ¿cómo se entiende el concepto de el libro diario?",
        [
          "Ordena día a día cada transacción comercial en forma de asientos contables.",
          "Se calcula restando todos los pasivos circulantes entre sí.",
          "Es un informe exclusivo para auditorías externas gubernamentales."
        ],
        0,
        "Recuerda: Es el libro donde se registran cronológicamente las operaciones de una empresa."
      ],
      [
        "¿Qué enunciado describe correctamente la aplicación práctica de el libro diario?",
        [
          "No tiene aplicación directa en las operaciones cotidianas de una empresa.",
          "Anotar una compra el lunes y un pago el martes siguiendo estrictamente el orden de fechas.",
          "Solo se aplica al cierre de operaciones fiscales anuales obligatorias."
        ],
        1,
        "Recuerda: Es el libro donde se registran cronológicamente las operaciones de una empresa."
      ],
      [
        "¿Cuál afirmación coincide exactamente con lo explicado sobre el libro diario?",
        [
          "Se relaciona directamente con la premisa: Es el libro donde se registran cronológicamente las operaciones de una empresa.",
          "Modifica de forma arbitraria la ecuación contable fundamental.",
          "Representa un pasivo exigible a corto plazo."
        ],
        0,
        "Recuerda: Es el libro donde se registran cronológicamente las operaciones de una empresa."
      ],
      [
        "Al estudiar el libro diario, ¿qué aspecto clave debes identificar?",
        [
          "Su dependencia exclusiva de factores externos macroeconómicos.",
          "Busca el registro temporal secuencial de transacciones.",
          "Que no requiere ningún tipo de control ni registro documental."
        ],
        1,
        "Recuerda: Es el libro donde se registran cronológicamente las operaciones de una empresa."
      ],
      [
        "¿Qué opción expresa la idea central desarrollada en esta lección?",
        [
          "Los registros se realizan sin seguir ningún orden lógico ni cronológico.",
          "Es el libro donde se registran cronológicamente las operaciones de una empresa.",
          "Los estados financieros pierden toda validez legal al aplicarlo."
        ],
        1,
        "Recuerda: Es el libro donde se registran cronológicamente las operaciones de una empresa."
      ],
      [
        "De acuerdo con los fundamentos estudiados, ¿cómo opera el libro diario?",
        [
          "Ordena día a día cada transacción comercial en forma de asientos contables.",
          "Generando automáticamente pasivos contingentes para la entidad.",
          "Eliminando la necesidad de libros diario y mayor."
        ],
        0,
        "Recuerda: Es el libro donde se registran cronológicamente las operaciones de una empresa."
      ],
      [
        "¿Cuál de las siguientes opciones ejemplifica correctamente este concepto?",
        [
          "Modificar estados financieros sin soporte documental.",
          "Anotar una compra el lunes y un pago el martes siguiendo estrictamente el orden de fechas.",
          "Omitir el registro de operaciones mercantiles cotidianas."
        ],
        1,
        "Recuerda: Es el libro donde se registran cronológicamente las operaciones de una empresa."
      ],
      [
        "¿Qué descripción corresponde al principio fundamental explicado en el libro diario?",
        [
          "La supresión total de controles internos en la empresa.",
          "La aplicación de métodos empíricos sin base técnica.",
          "Es el libro donde se registran cronológicamente las operaciones de una empresa."
        ],
        2,
        "Recuerda: Es el libro donde se registran cronológicamente las operaciones de una empresa."
      ],
      [
        "Selecciona la afirmación que resume de mejor manera lo aprendido sobre el libro diario:",
        [
          "Es un procedimiento opcional que las empresas pueden ignorar.",
          "Es el libro donde se registran cronológicamente las operaciones de una empresa.",
          "Distorsiona la igualdad numérica de los registros contables."
        ],
        1,
        "Recuerda: Es el libro donde se registran cronológicamente las operaciones de una empresa."
      ]
    ]
  },
  {
    "id": 13,
    "world": 2,
    "level": 3,
    "title": "El libro mayor",
    "subtitle": "Aprende a registrar operaciones y comprender los libros y lados de las cuentas.",
    "sections": [
      [
        "Definición de la tarjeta",
        "Es el libro que agrupa los movimientos de cada cuenta contable."
      ],
      [
        "Explicación paso a paso",
        "Reúne en fichas o cuentas individuales (en T) todos los cargos y abonos de una cuenta específica."
      ],
      [
        "Ejemplo práctico",
        "Agrupar todos los movimientos de la cuenta 'Caja' sin importar la fecha exacta."
      ],
      [
        "Cómo reconocer el concepto",
        "Identifica la clasificación por cuenta contable."
      ],
      [
        "Lo que debes recordar",
        "El libro mayor: Es el libro que agrupa los movimientos de cada cuenta contable."
      ]
    ],
    "summary": "El libro mayor. Es el libro que agrupa los movimientos de cada cuenta contable.",
    "questions": [
      [
        "¿Cuál es la definición correcta de el libro mayor?",
        [
          "Es un concepto ajeno a la gestión contable y financiera de la entidad.",
          "Es el libro que agrupa los movimientos de cada cuenta contable.",
          "Corresponde exclusivamente a un registro temporal sin validez formal."
        ],
        1,
        "Recuerda: Es el libro que agrupa los movimientos de cada cuenta contable."
      ],
      [
        "Según esta lección, ¿cómo se entiende el concepto de el libro mayor?",
        [
          "Reúne en fichas o cuentas individuales (en T) todos los cargos y abonos de una cuenta específica.",
          "Se calcula restando todos los pasivos circulantes entre sí.",
          "Es un informe exclusivo para auditorías externas gubernamentales."
        ],
        0,
        "Recuerda: Es el libro que agrupa los movimientos de cada cuenta contable."
      ],
      [
        "¿Qué enunciado describe correctamente la aplicación práctica de el libro mayor?",
        [
          "No tiene aplicación directa en las operaciones cotidianas de una empresa.",
          "Agrupar todos los movimientos de la cuenta 'Caja' sin importar la fecha exacta.",
          "Solo se aplica al cierre de operaciones fiscales anuales obligatorias."
        ],
        1,
        "Recuerda: Es el libro que agrupa los movimientos de cada cuenta contable."
      ],
      [
        "¿Cuál afirmación coincide exactamente con lo explicado sobre el libro mayor?",
        [
          "Se relaciona directamente con la premisa: Es el libro que agrupa los movimientos de cada cuenta contable.",
          "Modifica de forma arbitraria la ecuación contable fundamental.",
          "Representa un pasivo exigible a corto plazo."
        ],
        0,
        "Recuerda: Es el libro que agrupa los movimientos de cada cuenta contable."
      ],
      [
        "Al estudiar el libro mayor, ¿qué aspecto clave debes identificar?",
        [
          "Su dependencia exclusiva de factores externos macroeconómicos.",
          "Identifica la clasificación por cuenta contable.",
          "Que no requiere ningún tipo de control ni registro documental."
        ],
        1,
        "Recuerda: Es el libro que agrupa los movimientos de cada cuenta contable."
      ],
      [
        "¿Qué opción expresa la idea central desarrollada en esta lección?",
        [
          "Los registros se realizan sin seguir ningún orden lógico ni cronológico.",
          "Es el libro que agrupa los movimientos de cada cuenta contable.",
          "Los estados financieros pierden toda validez legal al aplicarlo."
        ],
        1,
        "Recuerda: Es el libro que agrupa los movimientos de cada cuenta contable."
      ],
      [
        "De acuerdo con los fundamentos estudiados, ¿cómo opera el libro mayor?",
        [
          "Reúne en fichas o cuentas individuales (en T) todos los cargos y abonos de una cuenta específica.",
          "Generando automáticamente pasivos contingentes para la entidad.",
          "Eliminando la necesidad de libros diario y mayor."
        ],
        0,
        "Recuerda: Es el libro que agrupa los movimientos de cada cuenta contable."
      ],
      [
        "¿Cuál de las siguientes opciones ejemplifica correctamente este concepto?",
        [
          "Modificar estados financieros sin soporte documental.",
          "Agrupar todos los movimientos de la cuenta 'Caja' sin importar la fecha exacta.",
          "Omitir el registro de operaciones mercantiles cotidianas."
        ],
        1,
        "Recuerda: Es el libro que agrupa los movimientos de cada cuenta contable."
      ],
      [
        "¿Qué descripción corresponde al principio fundamental explicado en el libro mayor?",
        [
          "La supresión total de controles internos en la empresa.",
          "La aplicación de métodos empíricos sin base técnica.",
          "Es el libro que agrupa los movimientos de cada cuenta contable."
        ],
        2,
        "Recuerda: Es el libro que agrupa los movimientos de cada cuenta contable."
      ],
      [
        "Selecciona la afirmación que resume de mejor manera lo aprendido sobre el libro mayor:",
        [
          "Es un procedimiento opcional que las empresas pueden ignorar.",
          "Es el libro que agrupa los movimientos de cada cuenta contable.",
          "Distorsiona la igualdad numérica de los registros contables."
        ],
        1,
        "Recuerda: Es el libro que agrupa los movimientos de cada cuenta contable."
      ]
    ]
  },
  {
    "id": 14,
    "world": 2,
    "level": 4,
    "title": "El debe",
    "subtitle": "Aprende a registrar operaciones y comprender los libros y lados de las cuentas.",
    "sections": [
      [
        "Definición de la tarjeta",
        "Es el lado izquierdo de una cuenta contable, donde se registran los cargos."
      ],
      [
        "Explicación paso a paso",
        "Representa la columna izquierda en la estructura tradicional de una cuenta en T."
      ],
      [
        "Ejemplo práctico",
        "Ubicar los cargos monetarios en la columna izquierda de la cuenta."
      ],
      [
        "Cómo reconocer el concepto",
        "Reconoce la ubicación del cargo contable."
      ],
      [
        "Lo que debes recordar",
        "El debe: Es el lado izquierdo de una cuenta contable, donde se registran los cargos."
      ]
    ],
    "summary": "El debe. Es el lado izquierdo de una cuenta contable, donde se registran los cargos.",
    "questions": [
      [
        "¿Cuál es la definición correcta de el debe?",
        [
          "Es un concepto ajeno a la gestión contable y financiera de la entidad.",
          "Es el lado izquierdo de una cuenta contable, donde se registran los cargos.",
          "Corresponde exclusivamente a un registro temporal sin validez formal."
        ],
        1,
        "Recuerda: Es el lado izquierdo de una cuenta contable, donde se registran los cargos."
      ],
      [
        "Según esta lección, ¿cómo se entiende el concepto de el debe?",
        [
          "Representa la columna izquierda en la estructura tradicional de una cuenta en T.",
          "Se calcula restando todos los pasivos circulantes entre sí.",
          "Es un informe exclusivo para auditorías externas gubernamentales."
        ],
        0,
        "Recuerda: Es el lado izquierdo de una cuenta contable, donde se registran los cargos."
      ],
      [
        "¿Qué enunciado describe correctamente la aplicación práctica de el debe?",
        [
          "No tiene aplicación directa en las operaciones cotidianas de una empresa.",
          "Ubicar los cargos monetarios en la columna izquierda de la cuenta.",
          "Solo se aplica al cierre de operaciones fiscales anuales obligatorias."
        ],
        1,
        "Recuerda: Es el lado izquierdo de una cuenta contable, donde se registran los cargos."
      ],
      [
        "¿Cuál afirmación coincide exactamente con lo explicado sobre el debe?",
        [
          "Se relaciona directamente con la premisa: Es el lado izquierdo de una cuenta contable, donde se registran los cargos.",
          "Modifica de forma arbitraria la ecuación contable fundamental.",
          "Representa un pasivo exigible a corto plazo."
        ],
        0,
        "Recuerda: Es el lado izquierdo de una cuenta contable, donde se registran los cargos."
      ],
      [
        "Al estudiar el debe, ¿qué aspecto clave debes identificar?",
        [
          "Su dependencia exclusiva de factores externos macroeconómicos.",
          "Reconoce la ubicación del cargo contable.",
          "Que no requiere ningún tipo de control ni registro documental."
        ],
        1,
        "Recuerda: Es el lado izquierdo de una cuenta contable, donde se registran los cargos."
      ],
      [
        "¿Qué opción expresa la idea central desarrollada en esta lección?",
        [
          "Los registros se realizan sin seguir ningún orden lógico ni cronológico.",
          "Es el lado izquierdo de una cuenta contable, donde se registran los cargos.",
          "Los estados financieros pierden toda validez legal al aplicarlo."
        ],
        1,
        "Recuerda: Es el lado izquierdo de una cuenta contable, donde se registran los cargos."
      ],
      [
        "De acuerdo con los fundamentos estudiados, ¿cómo opera el debe?",
        [
          "Representa la columna izquierda en la estructura tradicional de una cuenta en T.",
          "Generando automáticamente pasivos contingentes para la entidad.",
          "Eliminando la necesidad de libros diario y mayor."
        ],
        0,
        "Recuerda: Es el lado izquierdo de una cuenta contable, donde se registran los cargos."
      ],
      [
        "¿Cuál de las siguientes opciones ejemplifica correctamente este concepto?",
        [
          "Modificar estados financieros sin soporte documental.",
          "Ubicar los cargos monetarios en la columna izquierda de la cuenta.",
          "Omitir el registro de operaciones mercantiles cotidianas."
        ],
        1,
        "Recuerda: Es el lado izquierdo de una cuenta contable, donde se registran los cargos."
      ],
      [
        "¿Qué descripción corresponde al principio fundamental explicado en el debe?",
        [
          "La supresión total de controles internos en la empresa.",
          "La aplicación de métodos empíricos sin base técnica.",
          "Es el lado izquierdo de una cuenta contable, donde se registran los cargos."
        ],
        2,
        "Recuerda: Es el lado izquierdo de una cuenta contable, donde se registran los cargos."
      ],
      [
        "Selecciona la afirmación que resume de mejor manera lo aprendido sobre el debe:",
        [
          "Es un procedimiento opcional que las empresas pueden ignorar.",
          "Es el lado izquierdo de una cuenta contable, donde se registran los cargos.",
          "Distorsiona la igualdad numérica de los registros contables."
        ],
        1,
        "Recuerda: Es el lado izquierdo de una cuenta contable, donde se registran los cargos."
      ]
    ]
  },
  {
    "id": 15,
    "world": 2,
    "level": 5,
    "title": "El haber",
    "subtitle": "Aprende a registrar operaciones y comprender los libros y lados de las cuentas.",
    "sections": [
      [
        "Definición de la tarjeta",
        "Es el lado derecho de una cuenta contable, donde se registran los abonos."
      ],
      [
        "Explicación paso a paso",
        "Representa la columna derecha en la estructura tradicional de una cuenta en T."
      ],
      [
        "Ejemplo práctico",
        "Ubicar los abonos monetarios en la columna derecha de la cuenta."
      ],
      [
        "Cómo reconocer el concepto",
        "Reconoce la ubicación del abono contable."
      ],
      [
        "Lo que debes recordar",
        "El haber: Es el lado derecho de una cuenta contable, donde se registran los abonos."
      ]
    ],
    "summary": "El haber. Es el lado derecho de una cuenta contable, donde se registran los abonos.",
    "questions": [
      [
        "¿Cuál es la definición correcta de el haber?",
        [
          "Es un concepto ajeno a la gestión contable y financiera de la entidad.",
          "Es el lado derecho de una cuenta contable, donde se registran los abonos.",
          "Corresponde exclusivamente a un registro temporal sin validez formal."
        ],
        1,
        "Recuerda: Es el lado derecho de una cuenta contable, donde se registran los abonos."
      ],
      [
        "Según esta lección, ¿cómo se entiende el concepto de el haber?",
        [
          "Representa la columna derecha en la estructura tradicional de una cuenta en T.",
          "Se calcula restando todos los pasivos circulantes entre sí.",
          "Es un informe exclusivo para auditorías externas gubernamentales."
        ],
        0,
        "Recuerda: Es el lado derecho de una cuenta contable, donde se registran los abonos."
      ],
      [
        "¿Qué enunciado describe correctamente la aplicación práctica de el haber?",
        [
          "No tiene aplicación directa en las operaciones cotidianas de una empresa.",
          "Ubicar los abonos monetarios en la columna derecha de la cuenta.",
          "Solo se aplica al cierre de operaciones fiscales anuales obligatorias."
        ],
        1,
        "Recuerda: Es el lado derecho de una cuenta contable, donde se registran los abonos."
      ],
      [
        "¿Cuál afirmación coincide exactamente con lo explicado sobre el haber?",
        [
          "Se relaciona directamente con la premisa: Es el lado derecho de una cuenta contable, donde se registran los abonos.",
          "Modifica de forma arbitraria la ecuación contable fundamental.",
          "Representa un pasivo exigible a corto plazo."
        ],
        0,
        "Recuerda: Es el lado derecho de una cuenta contable, donde se registran los abonos."
      ],
      [
        "Al estudiar el haber, ¿qué aspecto clave debes identificar?",
        [
          "Su dependencia exclusiva de factores externos macroeconómicos.",
          "Reconoce la ubicación del abono contable.",
          "Que no requiere ningún tipo de control ni registro documental."
        ],
        1,
        "Recuerda: Es el lado derecho de una cuenta contable, donde se registran los abonos."
      ],
      [
        "¿Qué opción expresa la idea central desarrollada en esta lección?",
        [
          "Los registros se realizan sin seguir ningún orden lógico ni cronológico.",
          "Es el lado derecho de una cuenta contable, donde se registran los abonos.",
          "Los estados financieros pierden toda validez legal al aplicarlo."
        ],
        1,
        "Recuerda: Es el lado derecho de una cuenta contable, donde se registran los abonos."
      ],
      [
        "De acuerdo con los fundamentos estudiados, ¿cómo opera el haber?",
        [
          "Representa la columna derecha en la estructura tradicional de una cuenta en T.",
          "Generando automáticamente pasivos contingentes para la entidad.",
          "Eliminando la necesidad de libros diario y mayor."
        ],
        0,
        "Recuerda: Es el lado derecho de una cuenta contable, donde se registran los abonos."
      ],
      [
        "¿Cuál de las siguientes opciones ejemplifica correctamente este concepto?",
        [
          "Modificar estados financieros sin soporte documental.",
          "Ubicar los abonos monetarios en la columna derecha de la cuenta.",
          "Omitir el registro de operaciones mercantiles cotidianas."
        ],
        1,
        "Recuerda: Es el lado derecho de una cuenta contable, donde se registran los abonos."
      ],
      [
        "¿Qué descripción corresponde al principio fundamental explicado en el haber?",
        [
          "La supresión total de controles internos en la empresa.",
          "La aplicación de métodos empíricos sin base técnica.",
          "Es el lado derecho de una cuenta contable, donde se registran los abonos."
        ],
        2,
        "Recuerda: Es el lado derecho de una cuenta contable, donde se registran los abonos."
      ],
      [
        "Selecciona la afirmación que resume de mejor manera lo aprendido sobre el haber:",
        [
          "Es un procedimiento opcional que las empresas pueden ignorar.",
          "Es el lado derecho de una cuenta contable, donde se registran los abonos.",
          "Distorsiona la igualdad numérica de los registros contables."
        ],
        1,
        "Recuerda: Es el lado derecho de una cuenta contable, donde se registran los abonos."
      ]
    ]
  },
  {
    "id": 16,
    "world": 2,
    "level": 6,
    "title": "Diferencia entre diario y mayor",
    "subtitle": "Aprende a registrar operaciones y comprender los libros y lados de las cuentas.",
    "sections": [
      [
        "Definición de la tarjeta",
        "El libro diario registra cronológicamente las operaciones; el libro mayor agrupa los movimientos por cuenta."
      ],
      [
        "Explicación paso a paso",
        "El diario muestra el 'cuándo' y 'cómo' de la transacción; el mayor muestra el saldo acumulado por cuenta."
      ],
      [
        "Ejemplo práctico",
        "Registrar una venta en el diario por fecha y luego trasladarla a la cuenta de ventas en el mayor."
      ],
      [
        "Cómo reconocer el concepto",
        "Identifica la función dual de los principales libros contables."
      ],
      [
        "Lo que debes recordar",
        "Diferencia entre diario y mayor: El libro diario registra cronológicamente las operaciones; el libro mayor agrupa los movimientos por cuenta."
      ]
    ],
    "summary": "Diferencia entre diario y mayor. El libro diario registra cronológicamente las operaciones; el libro mayor agrupa los movimientos por cuenta.",
    "questions": [
      [
        "¿Cuál es la definición correcta de diferencia entre diario y mayor?",
        [
          "Es un concepto ajeno a la gestión contable y financiera de la entidad.",
          "El libro diario registra cronológicamente las operaciones; el libro mayor agrupa los movimientos por cuenta.",
          "Corresponde exclusivamente a un registro temporal sin validez formal."
        ],
        1,
        "Recuerda: El libro diario registra cronológicamente las operaciones; el libro mayor agrupa los movimientos por cuenta."
      ],
      [
        "Según esta lección, ¿cómo se entiende el concepto de diferencia entre diario y mayor?",
        [
          "El diario muestra el 'cuándo' y 'cómo' de la transacción; el mayor muestra el saldo acumulado por cuenta.",
          "Se calcula restando todos los pasivos circulantes entre sí.",
          "Es un informe exclusivo para auditorías externas gubernamentales."
        ],
        0,
        "Recuerda: El libro diario registra cronológicamente las operaciones; el libro mayor agrupa los movimientos por cuenta."
      ],
      [
        "¿Qué enunciado describe correctamente la aplicación práctica de diferencia entre diario y mayor?",
        [
          "No tiene aplicación directa en las operaciones cotidianas de una empresa.",
          "Registrar una venta en el diario por fecha y luego trasladarla a la cuenta de ventas en el mayor.",
          "Solo se aplica al cierre de operaciones fiscales anuales obligatorias."
        ],
        1,
        "Recuerda: El libro diario registra cronológicamente las operaciones; el libro mayor agrupa los movimientos por cuenta."
      ],
      [
        "¿Cuál afirmación coincide exactamente con lo explicado sobre diferencia entre diario y mayor?",
        [
          "Se relaciona directamente con la premisa: El libro diario registra cronológicamente las operaciones; el libro mayor agrupa los movimientos por cuenta.",
          "Modifica de forma arbitraria la ecuación contable fundamental.",
          "Representa un pasivo exigible a corto plazo."
        ],
        0,
        "Recuerda: El libro diario registra cronológicamente las operaciones; el libro mayor agrupa los movimientos por cuenta."
      ],
      [
        "Al estudiar diferencia entre diario y mayor, ¿qué aspecto clave debes identificar?",
        [
          "Su dependencia exclusiva de factores externos macroeconómicos.",
          "Identifica la función dual de los principales libros contables.",
          "Que no requiere ningún tipo de control ni registro documental."
        ],
        1,
        "Recuerda: El libro diario registra cronológicamente las operaciones; el libro mayor agrupa los movimientos por cuenta."
      ],
      [
        "¿Qué opción expresa la idea central desarrollada en esta lección?",
        [
          "Los registros se realizan sin seguir ningún orden lógico ni cronológico.",
          "El libro diario registra cronológicamente las operaciones; el libro mayor agrupa los movimientos por cuenta.",
          "Los estados financieros pierden toda validez legal al aplicarlo."
        ],
        1,
        "Recuerda: El libro diario registra cronológicamente las operaciones; el libro mayor agrupa los movimientos por cuenta."
      ],
      [
        "De acuerdo con los fundamentos estudiados, ¿cómo opera diferencia entre diario y mayor?",
        [
          "El diario muestra el 'cuándo' y 'cómo' de la transacción; el mayor muestra el saldo acumulado por cuenta.",
          "Generando automáticamente pasivos contingentes para la entidad.",
          "Eliminando la necesidad de libros diario y mayor."
        ],
        0,
        "Recuerda: El libro diario registra cronológicamente las operaciones; el libro mayor agrupa los movimientos por cuenta."
      ],
      [
        "¿Cuál de las siguientes opciones ejemplifica correctamente este concepto?",
        [
          "Modificar estados financieros sin soporte documental.",
          "Registrar una venta en el diario por fecha y luego trasladarla a la cuenta de ventas en el mayor.",
          "Omitir el registro de operaciones mercantiles cotidianas."
        ],
        1,
        "Recuerda: El libro diario registra cronológicamente las operaciones; el libro mayor agrupa los movimientos por cuenta."
      ],
      [
        "¿Qué descripción corresponde al principio fundamental explicado en diferencia entre diario y mayor?",
        [
          "La supresión total de controles internos en la empresa.",
          "La aplicación de métodos empíricos sin base técnica.",
          "El libro diario registra cronológicamente las operaciones; el libro mayor agrupa los movimientos por cuenta."
        ],
        2,
        "Recuerda: El libro diario registra cronológicamente las operaciones; el libro mayor agrupa los movimientos por cuenta."
      ],
      [
        "Selecciona la afirmación que resume de mejor manera lo aprendido sobre diferencia entre diario y mayor:",
        [
          "Es un procedimiento opcional que las empresas pueden ignorar.",
          "El libro diario registra cronológicamente las operaciones; el libro mayor agrupa los movimientos por cuenta.",
          "Distorsiona la igualdad numérica de los registros contables."
        ],
        1,
        "Recuerda: El libro diario registra cronológicamente las operaciones; el libro mayor agrupa los movimientos por cuenta."
      ]
    ]
  },
  {
    "id": 17,
    "world": 2,
    "level": 7,
    "title": "Cómo leer una cuenta contable",
    "subtitle": "Aprende a registrar operaciones y comprender los libros y lados de las cuentas.",
    "sections": [
      [
        "Definición de la tarjeta",
        "Una cuenta contable tiene dos lados: Debe a la izquierda y Haber a la derecha."
      ],
      [
        "Explicación paso a paso",
        "Permite interpretar los aumentos y disminuciones según la naturaleza de la cuenta."
      ],
      [
        "Ejemplo práctico",
        "Identificar claramente la columna izquierda (Debe) y la derecha (Haber) antes de calcular saldos."
      ],
      [
        "Cómo reconocer el concepto",
        "Reconoce la estructura en T de las cuentas."
      ],
      [
        "Lo que debes recordar",
        "Cómo leer una cuenta contable: Una cuenta contable tiene dos lados: Debe a la izquierda y Haber a la derecha."
      ]
    ],
    "summary": "Cómo leer una cuenta contable. Una cuenta contable tiene dos lados: Debe a la izquierda y Haber a la derecha.",
    "questions": [
      [
        "¿Cuál es la definición correcta de cómo leer una cuenta contable?",
        [
          "Es un concepto ajeno a la gestión contable y financiera de la entidad.",
          "Una cuenta contable tiene dos lados: Debe a la izquierda y Haber a la derecha.",
          "Corresponde exclusivamente a un registro temporal sin validez formal."
        ],
        1,
        "Recuerda: Una cuenta contable tiene dos lados: Debe a la izquierda y Haber a la derecha."
      ],
      [
        "Según esta lección, ¿cómo se entiende el concepto de cómo leer una cuenta contable?",
        [
          "Permite interpretar los aumentos y disminuciones según la naturaleza de la cuenta.",
          "Se calcula restando todos los pasivos circulantes entre sí.",
          "Es un informe exclusivo para auditorías externas gubernamentales."
        ],
        0,
        "Recuerda: Una cuenta contable tiene dos lados: Debe a la izquierda y Haber a la derecha."
      ],
      [
        "¿Qué enunciado describe correctamente la aplicación práctica de cómo leer una cuenta contable?",
        [
          "No tiene aplicación directa en las operaciones cotidianas de una empresa.",
          "Identificar claramente la columna izquierda (Debe) y la derecha (Haber) antes de calcular saldos.",
          "Solo se aplica al cierre de operaciones fiscales anuales obligatorias."
        ],
        1,
        "Recuerda: Una cuenta contable tiene dos lados: Debe a la izquierda y Haber a la derecha."
      ],
      [
        "¿Cuál afirmación coincide exactamente con lo explicado sobre cómo leer una cuenta contable?",
        [
          "Se relaciona directamente con la premisa: Una cuenta contable tiene dos lados: Debe a la izquierda y Haber a la derecha.",
          "Modifica de forma arbitraria la ecuación contable fundamental.",
          "Representa un pasivo exigible a corto plazo."
        ],
        0,
        "Recuerda: Una cuenta contable tiene dos lados: Debe a la izquierda y Haber a la derecha."
      ],
      [
        "Al estudiar cómo leer una cuenta contable, ¿qué aspecto clave debes identificar?",
        [
          "Su dependencia exclusiva de factores externos macroeconómicos.",
          "Reconoce la estructura en T de las cuentas.",
          "Que no requiere ningún tipo de control ni registro documental."
        ],
        1,
        "Recuerda: Una cuenta contable tiene dos lados: Debe a la izquierda y Haber a la derecha."
      ],
      [
        "¿Qué opción expresa la idea central desarrollada en esta lección?",
        [
          "Los registros se realizan sin seguir ningún orden lógico ni cronológico.",
          "Una cuenta contable tiene dos lados: Debe a la izquierda y Haber a la derecha.",
          "Los estados financieros pierden toda validez legal al aplicarlo."
        ],
        1,
        "Recuerda: Una cuenta contable tiene dos lados: Debe a la izquierda y Haber a la derecha."
      ],
      [
        "De acuerdo con los fundamentos estudiados, ¿cómo opera cómo leer una cuenta contable?",
        [
          "Permite interpretar los aumentos y disminuciones según la naturaleza de la cuenta.",
          "Generando automáticamente pasivos contingentes para la entidad.",
          "Eliminando la necesidad de libros diario y mayor."
        ],
        0,
        "Recuerda: Una cuenta contable tiene dos lados: Debe a la izquierda y Haber a la derecha."
      ],
      [
        "¿Cuál de las siguientes opciones ejemplifica correctamente este concepto?",
        [
          "Modificar estados financieros sin soporte documental.",
          "Identificar claramente la columna izquierda (Debe) y la derecha (Haber) antes de calcular saldos.",
          "Omitir el registro de operaciones mercantiles cotidianas."
        ],
        1,
        "Recuerda: Una cuenta contable tiene dos lados: Debe a la izquierda y Haber a la derecha."
      ],
      [
        "¿Qué descripción corresponde al principio fundamental explicado en cómo leer una cuenta contable?",
        [
          "La supresión total de controles internos en la empresa.",
          "La aplicación de métodos empíricos sin base técnica.",
          "Una cuenta contable tiene dos lados: Debe a la izquierda y Haber a la derecha."
        ],
        2,
        "Recuerda: Una cuenta contable tiene dos lados: Debe a la izquierda y Haber a la derecha."
      ],
      [
        "Selecciona la afirmación que resume de mejor manera lo aprendido sobre cómo leer una cuenta contable:",
        [
          "Es un procedimiento opcional que las empresas pueden ignorar.",
          "Una cuenta contable tiene dos lados: Debe a la izquierda y Haber a la derecha.",
          "Distorsiona la igualdad numérica de los registros contables."
        ],
        1,
        "Recuerda: Una cuenta contable tiene dos lados: Debe a la izquierda y Haber a la derecha."
      ]
    ]
  },
  {
    "id": 18,
    "world": 2,
    "level": 8,
    "title": "Registro cronológico",
    "subtitle": "Aprende a registrar operaciones y comprender los libros y lados de las cuentas.",
    "sections": [
      [
        "Definición de la tarjeta",
        "Registrar cronológicamente significa ordenar las operaciones según la fecha en que suceden."
      ],
      [
        "Explicación paso a paso",
        "Característica principal del libro diario que evita saltos temporales."
      ],
      [
        "Ejemplo práctico",
        "Anotar una operación del día 3 antes de una operación ocurrida el día 5."
      ],
      [
        "Cómo reconocer el concepto",
        "Busca el principio de secuencialidad temporal."
      ],
      [
        "Lo que debes recordar",
        "Registro cronológico: Registrar cronológicamente significa ordenar las operaciones según la fecha en que suceden."
      ]
    ],
    "summary": "Registro cronológico. Registrar cronológicamente significa ordenar las operaciones según la fecha en que suceden.",
    "questions": [
      [
        "¿Cuál es la definición correcta de registro cronológico?",
        [
          "Es un concepto ajeno a la gestión contable y financiera de la entidad.",
          "Registrar cronológicamente significa ordenar las operaciones según la fecha en que suceden.",
          "Corresponde exclusivamente a un registro temporal sin validez formal."
        ],
        1,
        "Recuerda: Registrar cronológicamente significa ordenar las operaciones según la fecha en que suceden."
      ],
      [
        "Según esta lección, ¿cómo se entiende el concepto de registro cronológico?",
        [
          "Característica principal del libro diario que evita saltos temporales.",
          "Se calcula restando todos los pasivos circulantes entre sí.",
          "Es un informe exclusivo para auditorías externas gubernamentales."
        ],
        0,
        "Recuerda: Registrar cronológicamente significa ordenar las operaciones según la fecha en que suceden."
      ],
      [
        "¿Qué enunciado describe correctamente la aplicación práctica de registro cronológico?",
        [
          "No tiene aplicación directa en las operaciones cotidianas de una empresa.",
          "Anotar una operación del día 3 antes de una operación ocurrida el día 5.",
          "Solo se aplica al cierre de operaciones fiscales anuales obligatorias."
        ],
        1,
        "Recuerda: Registrar cronológicamente significa ordenar las operaciones según la fecha en que suceden."
      ],
      [
        "¿Cuál afirmación coincide exactamente con lo explicado sobre registro cronológico?",
        [
          "Se relaciona directamente con la premisa: Registrar cronológicamente significa ordenar las operaciones según la fecha en que suceden.",
          "Modifica de forma arbitraria la ecuación contable fundamental.",
          "Representa un pasivo exigible a corto plazo."
        ],
        0,
        "Recuerda: Registrar cronológicamente significa ordenar las operaciones según la fecha en que suceden."
      ],
      [
        "Al estudiar registro cronológico, ¿qué aspecto clave debes identificar?",
        [
          "Su dependencia exclusiva de factores externos macroeconómicos.",
          "Busca el principio de secuencialidad temporal.",
          "Que no requiere ningún tipo de control ni registro documental."
        ],
        1,
        "Recuerda: Registrar cronológicamente significa ordenar las operaciones según la fecha en que suceden."
      ],
      [
        "¿Qué opción expresa la idea central desarrollada en esta lección?",
        [
          "Los registros se realizan sin seguir ningún orden lógico ni cronológico.",
          "Registrar cronológicamente significa ordenar las operaciones según la fecha en que suceden.",
          "Los estados financieros pierden toda validez legal al aplicarlo."
        ],
        1,
        "Recuerda: Registrar cronológicamente significa ordenar las operaciones según la fecha en que suceden."
      ],
      [
        "De acuerdo con los fundamentos estudiados, ¿cómo opera registro cronológico?",
        [
          "Característica principal del libro diario que evita saltos temporales.",
          "Generando automáticamente pasivos contingentes para la entidad.",
          "Eliminando la necesidad de libros diario y mayor."
        ],
        0,
        "Recuerda: Registrar cronológicamente significa ordenar las operaciones según la fecha en que suceden."
      ],
      [
        "¿Cuál de las siguientes opciones ejemplifica correctamente este concepto?",
        [
          "Modificar estados financieros sin soporte documental.",
          "Anotar una operación del día 3 antes de una operación ocurrida el día 5.",
          "Omitir el registro de operaciones mercantiles cotidianas."
        ],
        1,
        "Recuerda: Registrar cronológicamente significa ordenar las operaciones según la fecha en que suceden."
      ],
      [
        "¿Qué descripción corresponde al principio fundamental explicado en registro cronológico?",
        [
          "La supresión total de controles internos en la empresa.",
          "La aplicación de métodos empíricos sin base técnica.",
          "Registrar cronológicamente significa ordenar las operaciones según la fecha en que suceden."
        ],
        2,
        "Recuerda: Registrar cronológicamente significa ordenar las operaciones según la fecha en que suceden."
      ],
      [
        "Selecciona la afirmación que resume de mejor manera lo aprendido sobre registro cronológico:",
        [
          "Es un procedimiento opcional que las empresas pueden ignorar.",
          "Registrar cronológicamente significa ordenar las operaciones según la fecha en que suceden.",
          "Distorsiona la igualdad numérica de los registros contables."
        ],
        1,
        "Recuerda: Registrar cronológicamente significa ordenar las operaciones según la fecha en que suceden."
      ]
    ]
  },
  {
    "id": 19,
    "world": 2,
    "level": 9,
    "title": "Agrupación por cuenta",
    "subtitle": "Aprende a registrar operaciones y comprender los libros y lados de las cuentas.",
    "sections": [
      [
        "Definición de la tarjeta",
        "Agrupar por cuenta significa reunir en un mismo lugar los movimientos que corresponden a una cuenta contable."
      ],
      [
        "Explicación paso a paso",
        "Es el propósito fundamental del libro mayor para conocer saldos individuales."
      ],
      [
        "Ejemplo práctico",
        "Reunir todos los pagos a bancos en la cuenta 'Préstamos Bancarios'."
      ],
      [
        "Cómo reconocer el concepto",
        "Identifica la consolidación de movimientos homogéneos."
      ],
      [
        "Lo que debes recordar",
        "Agrupación por cuenta: Agrupar por cuenta significa reunir en un mismo lugar los movimientos que corresponden a una cuenta contable."
      ]
    ],
    "summary": "Agrupación por cuenta. Agrupar por cuenta significa reunir en un mismo lugar los movimientos que corresponden a una cuenta contable.",
    "questions": [
      [
        "¿Cuál es la definición correcta de agrupación por cuenta?",
        [
          "Es un concepto ajeno a la gestión contable y financiera de la entidad.",
          "Agrupar por cuenta significa reunir en un mismo lugar los movimientos que corresponden a una cuenta contable.",
          "Corresponde exclusivamente a un registro temporal sin validez formal."
        ],
        1,
        "Recuerda: Agrupar por cuenta significa reunir en un mismo lugar los movimientos que corresponden a una cuenta contable."
      ],
      [
        "Según esta lección, ¿cómo se entiende el concepto de agrupación por cuenta?",
        [
          "Es el propósito fundamental del libro mayor para conocer saldos individuales.",
          "Se calcula restando todos los pasivos circulantes entre sí.",
          "Es un informe exclusivo para auditorías externas gubernamentales."
        ],
        0,
        "Recuerda: Agrupar por cuenta significa reunir en un mismo lugar los movimientos que corresponden a una cuenta contable."
      ],
      [
        "¿Qué enunciado describe correctamente la aplicación práctica de agrupación por cuenta?",
        [
          "No tiene aplicación directa en las operaciones cotidianas de una empresa.",
          "Reunir todos los pagos a bancos en la cuenta 'Préstamos Bancarios'.",
          "Solo se aplica al cierre de operaciones fiscales anuales obligatorias."
        ],
        1,
        "Recuerda: Agrupar por cuenta significa reunir en un mismo lugar los movimientos que corresponden a una cuenta contable."
      ],
      [
        "¿Cuál afirmación coincide exactamente con lo explicado sobre agrupación por cuenta?",
        [
          "Se relaciona directamente con la premisa: Agrupar por cuenta significa reunir en un mismo lugar los movimientos que corresponden a una cuenta contable.",
          "Modifica de forma arbitraria la ecuación contable fundamental.",
          "Representa un pasivo exigible a corto plazo."
        ],
        0,
        "Recuerda: Agrupar por cuenta significa reunir en un mismo lugar los movimientos que corresponden a una cuenta contable."
      ],
      [
        "Al estudiar agrupación por cuenta, ¿qué aspecto clave debes identificar?",
        [
          "Su dependencia exclusiva de factores externos macroeconómicos.",
          "Identifica la consolidación de movimientos homogéneos.",
          "Que no requiere ningún tipo de control ni registro documental."
        ],
        1,
        "Recuerda: Agrupar por cuenta significa reunir en un mismo lugar los movimientos que corresponden a una cuenta contable."
      ],
      [
        "¿Qué opción expresa la idea central desarrollada en esta lección?",
        [
          "Los registros se realizan sin seguir ningún orden lógico ni cronológico.",
          "Agrupar por cuenta significa reunir en un mismo lugar los movimientos que corresponden a una cuenta contable.",
          "Los estados financieros pierden toda validez legal al aplicarlo."
        ],
        1,
        "Recuerda: Agrupar por cuenta significa reunir en un mismo lugar los movimientos que corresponden a una cuenta contable."
      ],
      [
        "De acuerdo con los fundamentos estudiados, ¿cómo opera agrupación por cuenta?",
        [
          "Es el propósito fundamental del libro mayor para conocer saldos individuales.",
          "Generando automáticamente pasivos contingentes para la entidad.",
          "Eliminando la necesidad de libros diario y mayor."
        ],
        0,
        "Recuerda: Agrupar por cuenta significa reunir en un mismo lugar los movimientos que corresponden a una cuenta contable."
      ],
      [
        "¿Cuál de las siguientes opciones ejemplifica correctamente este concepto?",
        [
          "Modificar estados financieros sin soporte documental.",
          "Reunir todos los pagos a bancos en la cuenta 'Préstamos Bancarios'.",
          "Omitir el registro de operaciones mercantiles cotidianas."
        ],
        1,
        "Recuerda: Agrupar por cuenta significa reunir en un mismo lugar los movimientos que corresponden a una cuenta contable."
      ],
      [
        "¿Qué descripción corresponde al principio fundamental explicado en agrupación por cuenta?",
        [
          "La supresión total de controles internos en la empresa.",
          "La aplicación de métodos empíricos sin base técnica.",
          "Agrupar por cuenta significa reunir en un mismo lugar los movimientos que corresponden a una cuenta contable."
        ],
        2,
        "Recuerda: Agrupar por cuenta significa reunir en un mismo lugar los movimientos que corresponden a una cuenta contable."
      ],
      [
        "Selecciona la afirmación que resume de mejor manera lo aprendido sobre agrupación por cuenta:",
        [
          "Es un procedimiento opcional que las empresas pueden ignorar.",
          "Agrupar por cuenta significa reunir en un mismo lugar los movimientos que corresponden a una cuenta contable.",
          "Distorsiona la igualdad numérica de los registros contables."
        ],
        1,
        "Recuerda: Agrupar por cuenta significa reunir en un mismo lugar los movimientos que corresponden a una cuenta contable."
      ]
    ]
  },
  {
    "id": 20,
    "world": 2,
    "level": 10,
    "title": "Repaso del ciclo y los registros",
    "subtitle": "Aprende a registrar operaciones y comprender los libros y lados de las cuentas.",
    "sections": [
      [
        "Definición de la tarjeta",
        "La partida contable registra operaciones mediante cargos y abonos; el diario las ordena por fecha y el mayor agrupa movimientos por cuenta."
      ],
      [
        "Explicación paso a paso",
        "Integra todos los fundamentos operativos del ciclo contable básico."
      ],
      [
        "Ejemplo práctico",
        "Realizar una partida, asentarla en el diario y mayorizarla en cuentas T."
      ],
      [
        "Cómo reconocer el concepto",
        "Reconoce el flujo completo de registro contable."
      ],
      [
        "Lo que debes recordar",
        "Repaso del ciclo y los registros: La partida contable registra operaciones mediante cargos y abonos; el diario las ordena por fecha y el mayor agrupa movimientos por cuenta."
      ]
    ],
    "summary": "Repaso del ciclo y los registros. La partida contable registra operaciones mediante cargos y abonos; el diario las ordena por fecha y el mayor agrupa movimientos por cuenta.",
    "questions": [
      [
        "¿Cuál es la definición correcta de repaso del ciclo y los registros?",
        [
          "Es un concepto ajeno a la gestión contable y financiera de la entidad.",
          "La partida contable registra operaciones mediante cargos y abonos; el diario las ordena por fecha y el mayor agrupa movimientos por cuenta.",
          "Corresponde exclusivamente a un registro temporal sin validez formal."
        ],
        1,
        "Recuerda: La partida contable registra operaciones mediante cargos y abonos; el diario las ordena por fecha y el mayor agrupa movimientos por cuenta."
      ],
      [
        "Según esta lección, ¿cómo se entiende el concepto de repaso del ciclo y los registros?",
        [
          "Integra todos los fundamentos operativos del ciclo contable básico.",
          "Se calcula restando todos los pasivos circulantes entre sí.",
          "Es un informe exclusivo para auditorías externas gubernamentales."
        ],
        0,
        "Recuerda: La partida contable registra operaciones mediante cargos y abonos; el diario las ordena por fecha y el mayor agrupa movimientos por cuenta."
      ],
      [
        "¿Qué enunciado describe correctamente la aplicación práctica de repaso del ciclo y los registros?",
        [
          "No tiene aplicación directa en las operaciones cotidianas de una empresa.",
          "Realizar una partida, asentarla en el diario y mayorizarla en cuentas T.",
          "Solo se aplica al cierre de operaciones fiscales anuales obligatorias."
        ],
        1,
        "Recuerda: La partida contable registra operaciones mediante cargos y abonos; el diario las ordena por fecha y el mayor agrupa movimientos por cuenta."
      ],
      [
        "¿Cuál afirmación coincide exactamente con lo explicado sobre repaso del ciclo y los registros?",
        [
          "Se relaciona directamente con la premisa: La partida contable registra operaciones mediante cargos y abonos; el diario las ordena por fecha y el mayor agrupa movimientos por cuenta.",
          "Modifica de forma arbitraria la ecuación contable fundamental.",
          "Representa un pasivo exigible a corto plazo."
        ],
        0,
        "Recuerda: La partida contable registra operaciones mediante cargos y abonos; el diario las ordena por fecha y el mayor agrupa movimientos por cuenta."
      ],
      [
        "Al estudiar repaso del ciclo y los registros, ¿qué aspecto clave debes identificar?",
        [
          "Su dependencia exclusiva de factores externos macroeconómicos.",
          "Reconoce el flujo completo de registro contable.",
          "Que no requiere ningún tipo de control ni registro documental."
        ],
        1,
        "Recuerda: La partida contable registra operaciones mediante cargos y abonos; el diario las ordena por fecha y el mayor agrupa movimientos por cuenta."
      ],
      [
        "¿Qué opción expresa la idea central desarrollada en esta lección?",
        [
          "Los registros se realizan sin seguir ningún orden lógico ni cronológico.",
          "La partida contable registra operaciones mediante cargos y abonos; el diario las ordena por fecha y el mayor agrupa movimientos por cuenta.",
          "Los estados financieros pierden toda validez legal al aplicarlo."
        ],
        1,
        "Recuerda: La partida contable registra operaciones mediante cargos y abonos; el diario las ordena por fecha y el mayor agrupa movimientos por cuenta."
      ],
      [
        "De acuerdo con los fundamentos estudiados, ¿cómo opera repaso del ciclo y los registros?",
        [
          "Integra todos los fundamentos operativos del ciclo contable básico.",
          "Generando automáticamente pasivos contingentes para la entidad.",
          "Eliminando la necesidad de libros diario y mayor."
        ],
        0,
        "Recuerda: La partida contable registra operaciones mediante cargos y abonos; el diario las ordena por fecha y el mayor agrupa movimientos por cuenta."
      ],
      [
        "¿Cuál de las siguientes opciones ejemplifica correctamente este concepto?",
        [
          "Modificar estados financieros sin soporte documental.",
          "Realizar una partida, asentarla en el diario y mayorizarla en cuentas T.",
          "Omitir el registro de operaciones mercantiles cotidianas."
        ],
        1,
        "Recuerda: La partida contable registra operaciones mediante cargos y abonos; el diario las ordena por fecha y el mayor agrupa movimientos por cuenta."
      ],
      [
        "¿Qué descripción corresponde al principio fundamental explicado en repaso del ciclo y los registros?",
        [
          "La supresión total de controles internos en la empresa.",
          "La aplicación de métodos empíricos sin base técnica.",
          "La partida contable registra operaciones mediante cargos y abonos; el diario las ordena por fecha y el mayor agrupa movimientos por cuenta."
        ],
        2,
        "Recuerda: La partida contable registra operaciones mediante cargos y abonos; el diario las ordena por fecha y el mayor agrupa movimientos por cuenta."
      ],
      [
        "Selecciona la afirmación que resume de mejor manera lo aprendido sobre repaso del ciclo y los registros:",
        [
          "Es un procedimiento opcional que las empresas pueden ignorar.",
          "La partida contable registra operaciones mediante cargos y abonos; el diario las ordena por fecha y el mayor agrupa movimientos por cuenta.",
          "Distorsiona la igualdad numérica de los registros contables."
        ],
        1,
        "Recuerda: La partida contable registra operaciones mediante cargos y abonos; el diario las ordena por fecha y el mayor agrupa movimientos por cuenta."
      ]
    ]
  },
  {
    "id": 21,
    "world": 3,
    "level": 1,
    "title": "Los cuatro informes de las tarjetas",
    "subtitle": "Distingue qué informa cada estado financiero y cómo se relacionan.",
    "sections": [
      [
        "Definición de la tarjeta",
        "Las tarjetas describen el balance general, el estado de resultados, el estado de cambios en el patrimonio y el estado de flujo de efectivo."
      ],
      [
        "Explicación paso a paso",
        "Cada informe cumple un rol específico en la rendición de cuentas corporativa."
      ],
      [
        "Ejemplo práctico",
        "Utilizar los cuatro reportes para obtener una visión holística de la salud financiera."
      ],
      [
        "Cómo reconocer el concepto",
        "Identifica el cuarteto básico de estados financieros."
      ],
      [
        "Lo que debes recordar",
        "Los cuatro informes de las tarjetas: Las tarjetas describen el balance general, el estado de resultados, el estado de cambios en el patrimonio y el estado de flujo de efectivo."
      ]
    ],
    "summary": "Los cuatro informes de las tarjetas. Las tarjetas describen el balance general, el estado de resultados, el estado de cambios en el patrimonio y el estado de flujo de efectivo.",
    "questions": [
      [
        "¿Cuál es la definición correcta de los cuatro informes de las tarjetas?",
        [
          "Es un concepto ajeno a la gestión contable y financiera de la entidad.",
          "Las tarjetas describen el balance general, el estado de resultados, el estado de cambios en el patrimonio y el estado de flujo de efectivo.",
          "Corresponde exclusivamente a un registro temporal sin validez formal."
        ],
        1,
        "Recuerda: Las tarjetas describen el balance general, el estado de resultados, el estado de cambios en el patrimonio y el estado de flujo de efectivo."
      ],
      [
        "Según esta lección, ¿cómo se entiende el concepto de los cuatro informes de las tarjetas?",
        [
          "Cada informe cumple un rol específico en la rendición de cuentas corporativa.",
          "Se calcula restando todos los pasivos circulantes entre sí.",
          "Es un informe exclusivo para auditorías externas gubernamentales."
        ],
        0,
        "Recuerda: Las tarjetas describen el balance general, el estado de resultados, el estado de cambios en el patrimonio y el estado de flujo de efectivo."
      ],
      [
        "¿Qué enunciado describe correctamente la aplicación práctica de los cuatro informes de las tarjetas?",
        [
          "No tiene aplicación directa en las operaciones cotidianas de una empresa.",
          "Utilizar los cuatro reportes para obtener una visión holística de la salud financiera.",
          "Solo se aplica al cierre de operaciones fiscales anuales obligatorias."
        ],
        1,
        "Recuerda: Las tarjetas describen el balance general, el estado de resultados, el estado de cambios en el patrimonio y el estado de flujo de efectivo."
      ],
      [
        "¿Cuál afirmación coincide exactamente con lo explicado sobre los cuatro informes de las tarjetas?",
        [
          "Se relaciona directamente con la premisa: Las tarjetas describen el balance general, el estado de resultados, el estado de cambios en el patrimonio y el estado de flujo de efectivo.",
          "Modifica de forma arbitraria la ecuación contable fundamental.",
          "Representa un pasivo exigible a corto plazo."
        ],
        0,
        "Recuerda: Las tarjetas describen el balance general, el estado de resultados, el estado de cambios en el patrimonio y el estado de flujo de efectivo."
      ],
      [
        "Al estudiar los cuatro informes de las tarjetas, ¿qué aspecto clave debes identificar?",
        [
          "Su dependencia exclusiva de factores externos macroeconómicos.",
          "Identifica el cuarteto básico de estados financieros.",
          "Que no requiere ningún tipo de control ni registro documental."
        ],
        1,
        "Recuerda: Las tarjetas describen el balance general, el estado de resultados, el estado de cambios en el patrimonio y el estado de flujo de efectivo."
      ],
      [
        "¿Qué opción expresa la idea central desarrollada en esta lección?",
        [
          "Los registros se realizan sin seguir ningún orden lógico ni cronológico.",
          "Las tarjetas describen el balance general, el estado de resultados, el estado de cambios en el patrimonio y el estado de flujo de efectivo.",
          "Los estados financieros pierden toda validez legal al aplicarlo."
        ],
        1,
        "Recuerda: Las tarjetas describen el balance general, el estado de resultados, el estado de cambios en el patrimonio y el estado de flujo de efectivo."
      ],
      [
        "De acuerdo con los fundamentos estudiados, ¿cómo opera los cuatro informes de las tarjetas?",
        [
          "Cada informe cumple un rol específico en la rendición de cuentas corporativa.",
          "Generando automáticamente pasivos contingentes para la entidad.",
          "Eliminando la necesidad de libros diario y mayor."
        ],
        0,
        "Recuerda: Las tarjetas describen el balance general, el estado de resultados, el estado de cambios en el patrimonio y el estado de flujo de efectivo."
      ],
      [
        "¿Cuál de las siguientes opciones ejemplifica correctamente este concepto?",
        [
          "Modificar estados financieros sin soporte documental.",
          "Utilizar los cuatro reportes para obtener una visión holística de la salud financiera.",
          "Omitir el registro de operaciones mercantiles cotidianas."
        ],
        1,
        "Recuerda: Las tarjetas describen el balance general, el estado de resultados, el estado de cambios en el patrimonio y el estado de flujo de efectivo."
      ],
      [
        "¿Qué descripción corresponde al principio fundamental explicado en los cuatro informes de las tarjetas?",
        [
          "La supresión total de controles internos en la empresa.",
          "La aplicación de métodos empíricos sin base técnica.",
          "Las tarjetas describen el balance general, el estado de resultados, el estado de cambios en el patrimonio y el estado de flujo de efectivo."
        ],
        2,
        "Recuerda: Las tarjetas describen el balance general, el estado de resultados, el estado de cambios en el patrimonio y el estado de flujo de efectivo."
      ],
      [
        "Selecciona la afirmación que resume de mejor manera lo aprendido sobre los cuatro informes de las tarjetas:",
        [
          "Es un procedimiento opcional que las empresas pueden ignorar.",
          "Las tarjetas describen el balance general, el estado de resultados, el estado de cambios en el patrimonio y el estado de flujo de efectivo.",
          "Distorsiona la igualdad numérica de los registros contables."
        ],
        1,
        "Recuerda: Las tarjetas describen el balance general, el estado de resultados, el estado de cambios en el patrimonio y el estado de flujo de efectivo."
      ]
    ]
  },
  {
    "id": 22,
    "world": 3,
    "level": 2,
    "title": "Situación financiera: balance general",
    "subtitle": "Distingue qué informa cada estado financiero y cómo se relacionan.",
    "sections": [
      [
        "Definición de la tarjeta",
        "El balance general presenta activos, pasivos y patrimonio de una empresa."
      ],
      [
        "Explicación paso a paso",
        "Informa sobre la solvencia y la estructura de capital a una fecha dada."
      ],
      [
        "Ejemplo práctico",
        "Consultar el balance para verificar si los activos cubren las obligaciones exigibles."
      ],
      [
        "Cómo reconocer el concepto",
        "Reconoce el reporte de posición patrimonial."
      ],
      [
        "Lo que debes recordar",
        "Situación financiera: balance general: El balance general presenta activos, pasivos y patrimonio de una empresa."
      ]
    ],
    "summary": "Situación financiera: balance general. El balance general presenta activos, pasivos y patrimonio de una empresa.",
    "questions": [
      [
        "¿Cuál es la definición correcta de situación financiera: balance general?",
        [
          "Es un concepto ajeno a la gestión contable y financiera de la entidad.",
          "El balance general presenta activos, pasivos y patrimonio de una empresa.",
          "Corresponde exclusivamente a un registro temporal sin validez formal."
        ],
        1,
        "Recuerda: El balance general presenta activos, pasivos y patrimonio de una empresa."
      ],
      [
        "Según esta lección, ¿cómo se entiende el concepto de situación financiera: balance general?",
        [
          "Informa sobre la solvencia y la estructura de capital a una fecha dada.",
          "Se calcula restando todos los pasivos circulantes entre sí.",
          "Es un informe exclusivo para auditorías externas gubernamentales."
        ],
        0,
        "Recuerda: El balance general presenta activos, pasivos y patrimonio de una empresa."
      ],
      [
        "¿Qué enunciado describe correctamente la aplicación práctica de situación financiera: balance general?",
        [
          "No tiene aplicación directa en las operaciones cotidianas de una empresa.",
          "Consultar el balance para verificar si los activos cubren las obligaciones exigibles.",
          "Solo se aplica al cierre de operaciones fiscales anuales obligatorias."
        ],
        1,
        "Recuerda: El balance general presenta activos, pasivos y patrimonio de una empresa."
      ],
      [
        "¿Cuál afirmación coincide exactamente con lo explicado sobre situación financiera: balance general?",
        [
          "Se relaciona directamente con la premisa: El balance general presenta activos, pasivos y patrimonio de una empresa.",
          "Modifica de forma arbitraria la ecuación contable fundamental.",
          "Representa un pasivo exigible a corto plazo."
        ],
        0,
        "Recuerda: El balance general presenta activos, pasivos y patrimonio de una empresa."
      ],
      [
        "Al estudiar situación financiera: balance general, ¿qué aspecto clave debes identificar?",
        [
          "Su dependencia exclusiva de factores externos macroeconómicos.",
          "Reconoce el reporte de posición patrimonial.",
          "Que no requiere ningún tipo de control ni registro documental."
        ],
        1,
        "Recuerda: El balance general presenta activos, pasivos y patrimonio de una empresa."
      ],
      [
        "¿Qué opción expresa la idea central desarrollada en esta lección?",
        [
          "Los registros se realizan sin seguir ningún orden lógico ni cronológico.",
          "El balance general presenta activos, pasivos y patrimonio de una empresa.",
          "Los estados financieros pierden toda validez legal al aplicarlo."
        ],
        1,
        "Recuerda: El balance general presenta activos, pasivos y patrimonio de una empresa."
      ],
      [
        "De acuerdo con los fundamentos estudiados, ¿cómo opera situación financiera: balance general?",
        [
          "Informa sobre la solvencia y la estructura de capital a una fecha dada.",
          "Generando automáticamente pasivos contingentes para la entidad.",
          "Eliminando la necesidad de libros diario y mayor."
        ],
        0,
        "Recuerda: El balance general presenta activos, pasivos y patrimonio de una empresa."
      ],
      [
        "¿Cuál de las siguientes opciones ejemplifica correctamente este concepto?",
        [
          "Modificar estados financieros sin soporte documental.",
          "Consultar el balance para verificar si los activos cubren las obligaciones exigibles.",
          "Omitir el registro de operaciones mercantiles cotidianas."
        ],
        1,
        "Recuerda: El balance general presenta activos, pasivos y patrimonio de una empresa."
      ],
      [
        "¿Qué descripción corresponde al principio fundamental explicado en situación financiera: balance general?",
        [
          "La supresión total de controles internos en la empresa.",
          "La aplicación de métodos empíricos sin base técnica.",
          "El balance general presenta activos, pasivos y patrimonio de una empresa."
        ],
        2,
        "Recuerda: El balance general presenta activos, pasivos y patrimonio de una empresa."
      ],
      [
        "Selecciona la afirmación que resume de mejor manera lo aprendido sobre situación financiera: balance general:",
        [
          "Es un procedimiento opcional que las empresas pueden ignorar.",
          "El balance general presenta activos, pasivos y patrimonio de una empresa.",
          "Distorsiona la igualdad numérica de los registros contables."
        ],
        1,
        "Recuerda: El balance general presenta activos, pasivos y patrimonio de una empresa."
      ]
    ]
  },
  {
    "id": 23,
    "world": 3,
    "level": 3,
    "title": "Rendimiento: estado de resultados",
    "subtitle": "Distingue qué informa cada estado financiero y cómo se relacionan.",
    "sections": [
      [
        "Definición de la tarjeta",
        "El estado de resultados muestra ingresos, costos, gastos y ganancias o pérdidas."
      ],
      [
        "Explicación paso a paso",
        "Muestra la eficiencia operativa y la capacidad de generar utilidades."
      ],
      [
        "Ejemplo práctico",
        "Analizar si la empresa obtuvo utilidad neta al final del ejercicio fiscal."
      ],
      [
        "Cómo reconocer el concepto",
        "Identifica el informe de ganancias y pérdidas."
      ],
      [
        "Lo que debes recordar",
        "Rendimiento: estado de resultados: El estado de resultados muestra ingresos, costos, gastos y ganancias o pérdidas."
      ]
    ],
    "summary": "Rendimiento: estado de resultados. El estado de resultados muestra ingresos, costos, gastos y ganancias o pérdidas.",
    "questions": [
      [
        "¿Cuál es la definición correcta de rendimiento: estado de resultados?",
        [
          "Es un concepto ajeno a la gestión contable y financiera de la entidad.",
          "El estado de resultados muestra ingresos, costos, gastos y ganancias o pérdidas.",
          "Corresponde exclusivamente a un registro temporal sin validez formal."
        ],
        1,
        "Recuerda: El estado de resultados muestra ingresos, costos, gastos y ganancias o pérdidas."
      ],
      [
        "Según esta lección, ¿cómo se entiende el concepto de rendimiento: estado de resultados?",
        [
          "Muestra la eficiencia operativa y la capacidad de generar utilidades.",
          "Se calcula restando todos los pasivos circulantes entre sí.",
          "Es un informe exclusivo para auditorías externas gubernamentales."
        ],
        0,
        "Recuerda: El estado de resultados muestra ingresos, costos, gastos y ganancias o pérdidas."
      ],
      [
        "¿Qué enunciado describe correctamente la aplicación práctica de rendimiento: estado de resultados?",
        [
          "No tiene aplicación directa en las operaciones cotidianas de una empresa.",
          "Analizar si la empresa obtuvo utilidad neta al final del ejercicio fiscal.",
          "Solo se aplica al cierre de operaciones fiscales anuales obligatorias."
        ],
        1,
        "Recuerda: El estado de resultados muestra ingresos, costos, gastos y ganancias o pérdidas."
      ],
      [
        "¿Cuál afirmación coincide exactamente con lo explicado sobre rendimiento: estado de resultados?",
        [
          "Se relaciona directamente con la premisa: El estado de resultados muestra ingresos, costos, gastos y ganancias o pérdidas.",
          "Modifica de forma arbitraria la ecuación contable fundamental.",
          "Representa un pasivo exigible a corto plazo."
        ],
        0,
        "Recuerda: El estado de resultados muestra ingresos, costos, gastos y ganancias o pérdidas."
      ],
      [
        "Al estudiar rendimiento: estado de resultados, ¿qué aspecto clave debes identificar?",
        [
          "Su dependencia exclusiva de factores externos macroeconómicos.",
          "Identifica el informe de ganancias y pérdidas.",
          "Que no requiere ningún tipo de control ni registro documental."
        ],
        1,
        "Recuerda: El estado de resultados muestra ingresos, costos, gastos y ganancias o pérdidas."
      ],
      [
        "¿Qué opción expresa la idea central desarrollada en esta lección?",
        [
          "Los registros se realizan sin seguir ningún orden lógico ni cronológico.",
          "El estado de resultados muestra ingresos, costos, gastos y ganancias o pérdidas.",
          "Los estados financieros pierden toda validez legal al aplicarlo."
        ],
        1,
        "Recuerda: El estado de resultados muestra ingresos, costos, gastos y ganancias o pérdidas."
      ],
      [
        "De acuerdo con los fundamentos estudiados, ¿cómo opera rendimiento: estado de resultados?",
        [
          "Muestra la eficiencia operativa y la capacidad de generar utilidades.",
          "Generando automáticamente pasivos contingentes para la entidad.",
          "Eliminando la necesidad de libros diario y mayor."
        ],
        0,
        "Recuerda: El estado de resultados muestra ingresos, costos, gastos y ganancias o pérdidas."
      ],
      [
        "¿Cuál de las siguientes opciones ejemplifica correctamente este concepto?",
        [
          "Modificar estados financieros sin soporte documental.",
          "Analizar si la empresa obtuvo utilidad neta al final del ejercicio fiscal.",
          "Omitir el registro de operaciones mercantiles cotidianas."
        ],
        1,
        "Recuerda: El estado de resultados muestra ingresos, costos, gastos y ganancias o pérdidas."
      ],
      [
        "¿Qué descripción corresponde al principio fundamental explicado en rendimiento: estado de resultados?",
        [
          "La supresión total de controles internos en la empresa.",
          "La aplicación de métodos empíricos sin base técnica.",
          "El estado de resultados muestra ingresos, costos, gastos y ganancias o pérdidas."
        ],
        2,
        "Recuerda: El estado de resultados muestra ingresos, costos, gastos y ganancias o pérdidas."
      ],
      [
        "Selecciona la afirmación que resume de mejor manera lo aprendido sobre rendimiento: estado de resultados:",
        [
          "Es un procedimiento opcional que las empresas pueden ignorar.",
          "El estado de resultados muestra ingresos, costos, gastos y ganancias o pérdidas.",
          "Distorsiona la igualdad numérica de los registros contables."
        ],
        1,
        "Recuerda: El estado de resultados muestra ingresos, costos, gastos y ganancias o pérdidas."
      ]
    ]
  },
  {
    "id": 24,
    "world": 3,
    "level": 4,
    "title": "Cambios patrimoniales",
    "subtitle": "Distingue qué informa cada estado financiero y cómo se relacionan.",
    "sections": [
      [
        "Definición de la tarjeta",
        "El estado de cambios en el patrimonio muestra las variaciones del patrimonio durante un período."
      ],
      [
        "Explicación paso a paso",
        "Explica qué originó el incremento o reducción del capital y las reservas."
      ],
      [
        "Ejemplo práctico",
        "Revisar la capitalización de utilidades retenidas en el año."
      ],
      [
        "Cómo reconocer el concepto",
        "Busca la explicación de las modificaciones en el patrimonio neto."
      ],
      [
        "Lo que debes recordar",
        "Cambios patrimoniales: El estado de cambios en el patrimonio muestra las variaciones del patrimonio durante un período."
      ]
    ],
    "summary": "Cambios patrimoniales. El estado de cambios en el patrimonio muestra las variaciones del patrimonio durante un período.",
    "questions": [
      [
        "¿Cuál es la definición correcta de cambios patrimoniales?",
        [
          "Es un concepto ajeno a la gestión contable y financiera de la entidad.",
          "El estado de cambios en el patrimonio muestra las variaciones del patrimonio durante un período.",
          "Corresponde exclusivamente a un registro temporal sin validez formal."
        ],
        1,
        "Recuerda: El estado de cambios en el patrimonio muestra las variaciones del patrimonio durante un período."
      ],
      [
        "Según esta lección, ¿cómo se entiende el concepto de cambios patrimoniales?",
        [
          "Explica qué originó el incremento o reducción del capital y las reservas.",
          "Se calcula restando todos los pasivos circulantes entre sí.",
          "Es un informe exclusivo para auditorías externas gubernamentales."
        ],
        0,
        "Recuerda: El estado de cambios en el patrimonio muestra las variaciones del patrimonio durante un período."
      ],
      [
        "¿Qué enunciado describe correctamente la aplicación práctica de cambios patrimoniales?",
        [
          "No tiene aplicación directa en las operaciones cotidianas de una empresa.",
          "Revisar la capitalización de utilidades retenidas en el año.",
          "Solo se aplica al cierre de operaciones fiscales anuales obligatorias."
        ],
        1,
        "Recuerda: El estado de cambios en el patrimonio muestra las variaciones del patrimonio durante un período."
      ],
      [
        "¿Cuál afirmación coincide exactamente con lo explicado sobre cambios patrimoniales?",
        [
          "Se relaciona directamente con la premisa: El estado de cambios en el patrimonio muestra las variaciones del patrimonio durante un período.",
          "Modifica de forma arbitraria la ecuación contable fundamental.",
          "Representa un pasivo exigible a corto plazo."
        ],
        0,
        "Recuerda: El estado de cambios en el patrimonio muestra las variaciones del patrimonio durante un período."
      ],
      [
        "Al estudiar cambios patrimoniales, ¿qué aspecto clave debes identificar?",
        [
          "Su dependencia exclusiva de factores externos macroeconómicos.",
          "Busca la explicación de las modificaciones en el patrimonio neto.",
          "Que no requiere ningún tipo de control ni registro documental."
        ],
        1,
        "Recuerda: El estado de cambios en el patrimonio muestra las variaciones del patrimonio durante un período."
      ],
      [
        "¿Qué opción expresa la idea central desarrollada en esta lección?",
        [
          "Los registros se realizan sin seguir ningún orden lógico ni cronológico.",
          "El estado de cambios en el patrimonio muestra las variaciones del patrimonio durante un período.",
          "Los estados financieros pierden toda validez legal al aplicarlo."
        ],
        1,
        "Recuerda: El estado de cambios en el patrimonio muestra las variaciones del patrimonio durante un período."
      ],
      [
        "De acuerdo con los fundamentos estudiados, ¿cómo opera cambios patrimoniales?",
        [
          "Explica qué originó el incremento o reducción del capital y las reservas.",
          "Generando automáticamente pasivos contingentes para la entidad.",
          "Eliminando la necesidad de libros diario y mayor."
        ],
        0,
        "Recuerda: El estado de cambios en el patrimonio muestra las variaciones del patrimonio durante un período."
      ],
      [
        "¿Cuál de las siguientes opciones ejemplifica correctamente este concepto?",
        [
          "Modificar estados financieros sin soporte documental.",
          "Revisar la capitalización de utilidades retenidas en el año.",
          "Omitir el registro de operaciones mercantiles cotidianas."
        ],
        1,
        "Recuerda: El estado de cambios en el patrimonio muestra las variaciones del patrimonio durante un período."
      ],
      [
        "¿Qué descripción corresponde al principio fundamental explicado en cambios patrimoniales?",
        [
          "La supresión total de controles internos en la empresa.",
          "La aplicación de métodos empíricos sin base técnica.",
          "El estado de cambios en el patrimonio muestra las variaciones del patrimonio durante un período."
        ],
        2,
        "Recuerda: El estado de cambios en el patrimonio muestra las variaciones del patrimonio durante un período."
      ],
      [
        "Selecciona la afirmación que resume de mejor manera lo aprendido sobre cambios patrimoniales:",
        [
          "Es un procedimiento opcional que las empresas pueden ignorar.",
          "El estado de cambios en el patrimonio muestra las variaciones del patrimonio durante un período.",
          "Distorsiona la igualdad numérica de los registros contables."
        ],
        1,
        "Recuerda: El estado de cambios en el patrimonio muestra las variaciones del patrimonio durante un período."
      ]
    ]
  },
  {
    "id": 25,
    "world": 3,
    "level": 5,
    "title": "Movimientos de efectivo",
    "subtitle": "Distingue qué informa cada estado financiero y cómo se relacionan.",
    "sections": [
      [
        "Definición de la tarjeta",
        "El estado de flujo de efectivo muestra las entradas y salidas de dinero de una empresa."
      ],
      [
        "Explicación paso a paso",
        "Permite evaluar la capacidad de la empresa para generar efectivo y equivalentes."
      ],
      [
        "Ejemplo práctico",
        "Distinguir el cobro a clientes (entrada) del pago de salarios (salida)."
      ],
      [
        "Cómo reconocer el concepto",
        "Reconoce el reporte de liquidez monetaria."
      ],
      [
        "Lo que debes recordar",
        "Movimientos de efectivo: El estado de flujo de efectivo muestra las entradas y salidas de dinero de una empresa."
      ]
    ],
    "summary": "Movimientos de efectivo. El estado de flujo de efectivo muestra las entradas y salidas de dinero de una empresa.",
    "questions": [
      [
        "¿Cuál es la definición correcta de movimientos de efectivo?",
        [
          "Es un concepto ajeno a la gestión contable y financiera de la entidad.",
          "El estado de flujo de efectivo muestra las entradas y salidas de dinero de una empresa.",
          "Corresponde exclusivamente a un registro temporal sin validez formal."
        ],
        1,
        "Recuerda: El estado de flujo de efectivo muestra las entradas y salidas de dinero de una empresa."
      ],
      [
        "Según esta lección, ¿cómo se entiende el concepto de movimientos de efectivo?",
        [
          "Permite evaluar la capacidad de la empresa para generar efectivo y equivalentes.",
          "Se calcula restando todos los pasivos circulantes entre sí.",
          "Es un informe exclusivo para auditorías externas gubernamentales."
        ],
        0,
        "Recuerda: El estado de flujo de efectivo muestra las entradas y salidas de dinero de una empresa."
      ],
      [
        "¿Qué enunciado describe correctamente la aplicación práctica de movimientos de efectivo?",
        [
          "No tiene aplicación directa en las operaciones cotidianas de una empresa.",
          "Distinguir el cobro a clientes (entrada) del pago de salarios (salida).",
          "Solo se aplica al cierre de operaciones fiscales anuales obligatorias."
        ],
        1,
        "Recuerda: El estado de flujo de efectivo muestra las entradas y salidas de dinero de una empresa."
      ],
      [
        "¿Cuál afirmación coincide exactamente con lo explicado sobre movimientos de efectivo?",
        [
          "Se relaciona directamente con la premisa: El estado de flujo de efectivo muestra las entradas y salidas de dinero de una empresa.",
          "Modifica de forma arbitraria la ecuación contable fundamental.",
          "Representa un pasivo exigible a corto plazo."
        ],
        0,
        "Recuerda: El estado de flujo de efectivo muestra las entradas y salidas de dinero de una empresa."
      ],
      [
        "Al estudiar movimientos de efectivo, ¿qué aspecto clave debes identificar?",
        [
          "Su dependencia exclusiva de factores externos macroeconómicos.",
          "Reconoce el reporte de liquidez monetaria.",
          "Que no requiere ningún tipo de control ni registro documental."
        ],
        1,
        "Recuerda: El estado de flujo de efectivo muestra las entradas y salidas de dinero de una empresa."
      ],
      [
        "¿Qué opción expresa la idea central desarrollada en esta lección?",
        [
          "Los registros se realizan sin seguir ningún orden lógico ni cronológico.",
          "El estado de flujo de efectivo muestra las entradas y salidas de dinero de una empresa.",
          "Los estados financieros pierden toda validez legal al aplicarlo."
        ],
        1,
        "Recuerda: El estado de flujo de efectivo muestra las entradas y salidas de dinero de una empresa."
      ],
      [
        "De acuerdo con los fundamentos estudiados, ¿cómo opera movimientos de efectivo?",
        [
          "Permite evaluar la capacidad de la empresa para generar efectivo y equivalentes.",
          "Generando automáticamente pasivos contingentes para la entidad.",
          "Eliminando la necesidad de libros diario y mayor."
        ],
        0,
        "Recuerda: El estado de flujo de efectivo muestra las entradas y salidas de dinero de una empresa."
      ],
      [
        "¿Cuál de las siguientes opciones ejemplifica correctamente este concepto?",
        [
          "Modificar estados financieros sin soporte documental.",
          "Distinguir el cobro a clientes (entrada) del pago de salarios (salida).",
          "Omitir el registro de operaciones mercantiles cotidianas."
        ],
        1,
        "Recuerda: El estado de flujo de efectivo muestra las entradas y salidas de dinero de una empresa."
      ],
      [
        "¿Qué descripción corresponde al principio fundamental explicado en movimientos de efectivo?",
        [
          "La supresión total de controles internos en la empresa.",
          "La aplicación de métodos empíricos sin base técnica.",
          "El estado de flujo de efectivo muestra las entradas y salidas de dinero de una empresa."
        ],
        2,
        "Recuerda: El estado de flujo de efectivo muestra las entradas y salidas de dinero de una empresa."
      ],
      [
        "Selecciona la afirmación que resume de mejor manera lo aprendido sobre movimientos de efectivo:",
        [
          "Es un procedimiento opcional que las empresas pueden ignorar.",
          "El estado de flujo de efectivo muestra las entradas y salidas de dinero de una empresa.",
          "Distorsiona la igualdad numérica de los registros contables."
        ],
        1,
        "Recuerda: El estado de flujo de efectivo muestra las entradas y salidas de dinero de una empresa."
      ]
    ]
  },
  {
    "id": 26,
    "world": 3,
    "level": 6,
    "title": "No confundir los estados",
    "subtitle": "Distingue qué informa cada estado financiero y cómo se relacionan.",
    "sections": [
      [
        "Definición de la tarjeta",
        "Balance general, estado de resultados, cambios en el patrimonio y flujo de efectivo tienen enfoques diferentes."
      ],
      [
        "Explicación paso a paso",
        "Evita malinterpretar un reporte de rentabilidad como si fuera un informe de liquidez."
      ],
      [
        "Ejemplo práctico",
        "No usar el estado de resultados para conocer las deudas a largo plazo."
      ],
      [
        "Cómo reconocer el concepto",
        "Identifica la distinción conceptual entre los cuatro informes."
      ],
      [
        "Lo que debes recordar",
        "No confundir los estados: Balance general, estado de resultados, cambios en el patrimonio y flujo de efectivo tienen enfoques diferentes."
      ]
    ],
    "summary": "No confundir los estados. Balance general, estado de resultados, cambios en el patrimonio y flujo de efectivo tienen enfoques diferentes.",
    "questions": [
      [
        "¿Cuál es la definición correcta de no confundir los estados?",
        [
          "Es un concepto ajeno a la gestión contable y financiera de la entidad.",
          "Balance general, estado de resultados, cambios en el patrimonio y flujo de efectivo tienen enfoques diferentes.",
          "Corresponde exclusivamente a un registro temporal sin validez formal."
        ],
        1,
        "Recuerda: Balance general, estado de resultados, cambios en el patrimonio y flujo de efectivo tienen enfoques diferentes."
      ],
      [
        "Según esta lección, ¿cómo se entiende el concepto de no confundir los estados?",
        [
          "Evita malinterpretar un reporte de rentabilidad como si fuera un informe de liquidez.",
          "Se calcula restando todos los pasivos circulantes entre sí.",
          "Es un informe exclusivo para auditorías externas gubernamentales."
        ],
        0,
        "Recuerda: Balance general, estado de resultados, cambios en el patrimonio y flujo de efectivo tienen enfoques diferentes."
      ],
      [
        "¿Qué enunciado describe correctamente la aplicación práctica de no confundir los estados?",
        [
          "No tiene aplicación directa en las operaciones cotidianas de una empresa.",
          "No usar el estado de resultados para conocer las deudas a largo plazo.",
          "Solo se aplica al cierre de operaciones fiscales anuales obligatorias."
        ],
        1,
        "Recuerda: Balance general, estado de resultados, cambios en el patrimonio y flujo de efectivo tienen enfoques diferentes."
      ],
      [
        "¿Cuál afirmación coincide exactamente con lo explicado sobre no confundir los estados?",
        [
          "Se relaciona directamente con la premisa: Balance general, estado de resultados, cambios en el patrimonio y flujo de efectivo tienen enfoques diferentes.",
          "Modifica de forma arbitraria la ecuación contable fundamental.",
          "Representa un pasivo exigible a corto plazo."
        ],
        0,
        "Recuerda: Balance general, estado de resultados, cambios en el patrimonio y flujo de efectivo tienen enfoques diferentes."
      ],
      [
        "Al estudiar no confundir los estados, ¿qué aspecto clave debes identificar?",
        [
          "Su dependencia exclusiva de factores externos macroeconómicos.",
          "Identifica la distinción conceptual entre los cuatro informes.",
          "Que no requiere ningún tipo de control ni registro documental."
        ],
        1,
        "Recuerda: Balance general, estado de resultados, cambios en el patrimonio y flujo de efectivo tienen enfoques diferentes."
      ],
      [
        "¿Qué opción expresa la idea central desarrollada en esta lección?",
        [
          "Los registros se realizan sin seguir ningún orden lógico ni cronológico.",
          "Balance general, estado de resultados, cambios en el patrimonio y flujo de efectivo tienen enfoques diferentes.",
          "Los estados financieros pierden toda validez legal al aplicarlo."
        ],
        1,
        "Recuerda: Balance general, estado de resultados, cambios en el patrimonio y flujo de efectivo tienen enfoques diferentes."
      ],
      [
        "De acuerdo con los fundamentos estudiados, ¿cómo opera no confundir los estados?",
        [
          "Evita malinterpretar un reporte de rentabilidad como si fuera un informe de liquidez.",
          "Generando automáticamente pasivos contingentes para la entidad.",
          "Eliminando la necesidad de libros diario y mayor."
        ],
        0,
        "Recuerda: Balance general, estado de resultados, cambios en el patrimonio y flujo de efectivo tienen enfoques diferentes."
      ],
      [
        "¿Cuál de las siguientes opciones ejemplifica correctamente este concepto?",
        [
          "Modificar estados financieros sin soporte documental.",
          "No usar el estado de resultados para conocer las deudas a largo plazo.",
          "Omitir el registro de operaciones mercantiles cotidianas."
        ],
        1,
        "Recuerda: Balance general, estado de resultados, cambios en el patrimonio y flujo de efectivo tienen enfoques diferentes."
      ],
      [
        "¿Qué descripción corresponde al principio fundamental explicado en no confundir los estados?",
        [
          "La supresión total de controles internos en la empresa.",
          "La aplicación de métodos empíricos sin base técnica.",
          "Balance general, estado de resultados, cambios en el patrimonio y flujo de efectivo tienen enfoques diferentes."
        ],
        2,
        "Recuerda: Balance general, estado de resultados, cambios en el patrimonio y flujo de efectivo tienen enfoques diferentes."
      ],
      [
        "Selecciona la afirmación que resume de mejor manera lo aprendido sobre no confundir los estados:",
        [
          "Es un procedimiento opcional que las empresas pueden ignorar.",
          "Balance general, estado de resultados, cambios en el patrimonio y flujo de efectivo tienen enfoques diferentes.",
          "Distorsiona la igualdad numérica de los registros contables."
        ],
        1,
        "Recuerda: Balance general, estado de resultados, cambios en el patrimonio y flujo de efectivo tienen enfoques diferentes."
      ]
    ]
  },
  {
    "id": 27,
    "world": 3,
    "level": 7,
    "title": "Lectura del balance",
    "subtitle": "Distingue qué informa cada estado financiero y cómo se relacionan.",
    "sections": [
      [
        "Definición de la tarjeta",
        "Para leer el balance se identifican activo, pasivo y patrimonio y se comprueba Activo = Pasivo + Patrimonio."
      ],
      [
        "Explicación paso a paso",
        "Valida la consistencia matemática y la estructura financiera."
      ],
      [
        "Ejemplo práctico",
        "Verificar que $9,000 en activos igualen a $3,000 de pasivo más $6,000 de patrimonio."
      ],
      [
        "Cómo reconocer el concepto",
        "Reconoce la verificación contable en el balance."
      ],
      [
        "Lo que debes recordar",
        "Lectura del balance: Para leer el balance se identifican activo, pasivo y patrimonio y se comprueba Activo = Pasivo + Patrimonio."
      ]
    ],
    "summary": "Lectura del balance. Para leer el balance se identifican activo, pasivo y patrimonio y se comprueba Activo = Pasivo + Patrimonio.",
    "questions": [
      [
        "¿Cuál es la definición correcta de lectura del balance?",
        [
          "Es un concepto ajeno a la gestión contable y financiera de la entidad.",
          "Para leer el balance se identifican activo, pasivo y patrimonio y se comprueba Activo = Pasivo + Patrimonio.",
          "Corresponde exclusivamente a un registro temporal sin validez formal."
        ],
        1,
        "Recuerda: Para leer el balance se identifican activo, pasivo y patrimonio y se comprueba Activo = Pasivo + Patrimonio."
      ],
      [
        "Según esta lección, ¿cómo se entiende el concepto de lectura del balance?",
        [
          "Valida la consistencia matemática y la estructura financiera.",
          "Se calcula restando todos los pasivos circulantes entre sí.",
          "Es un informe exclusivo para auditorías externas gubernamentales."
        ],
        0,
        "Recuerda: Para leer el balance se identifican activo, pasivo y patrimonio y se comprueba Activo = Pasivo + Patrimonio."
      ],
      [
        "¿Qué enunciado describe correctamente la aplicación práctica de lectura del balance?",
        [
          "No tiene aplicación directa en las operaciones cotidianas de una empresa.",
          "Verificar que $9,000 en activos igualen a $3,000 de pasivo más $6,000 de patrimonio.",
          "Solo se aplica al cierre de operaciones fiscales anuales obligatorias."
        ],
        1,
        "Recuerda: Para leer el balance se identifican activo, pasivo y patrimonio y se comprueba Activo = Pasivo + Patrimonio."
      ],
      [
        "¿Cuál afirmación coincide exactamente con lo explicado sobre lectura del balance?",
        [
          "Se relaciona directamente con la premisa: Para leer el balance se identifican activo, pasivo y patrimonio y se comprueba Activo = Pasivo + Patrimonio.",
          "Modifica de forma arbitraria la ecuación contable fundamental.",
          "Representa un pasivo exigible a corto plazo."
        ],
        0,
        "Recuerda: Para leer el balance se identifican activo, pasivo y patrimonio y se comprueba Activo = Pasivo + Patrimonio."
      ],
      [
        "Al estudiar lectura del balance, ¿qué aspecto clave debes identificar?",
        [
          "Su dependencia exclusiva de factores externos macroeconómicos.",
          "Reconoce la verificación contable en el balance.",
          "Que no requiere ningún tipo de control ni registro documental."
        ],
        1,
        "Recuerda: Para leer el balance se identifican activo, pasivo y patrimonio y se comprueba Activo = Pasivo + Patrimonio."
      ],
      [
        "¿Qué opción expresa la idea central desarrollada en esta lección?",
        [
          "Los registros se realizan sin seguir ningún orden lógico ni cronológico.",
          "Para leer el balance se identifican activo, pasivo y patrimonio y se comprueba Activo = Pasivo + Patrimonio.",
          "Los estados financieros pierden toda validez legal al aplicarlo."
        ],
        1,
        "Recuerda: Para leer el balance se identifican activo, pasivo y patrimonio y se comprueba Activo = Pasivo + Patrimonio."
      ],
      [
        "De acuerdo con los fundamentos estudiados, ¿cómo opera lectura del balance?",
        [
          "Valida la consistencia matemática y la estructura financiera.",
          "Generando automáticamente pasivos contingentes para la entidad.",
          "Eliminando la necesidad de libros diario y mayor."
        ],
        0,
        "Recuerda: Para leer el balance se identifican activo, pasivo y patrimonio y se comprueba Activo = Pasivo + Patrimonio."
      ],
      [
        "¿Cuál de las siguientes opciones ejemplifica correctamente este concepto?",
        [
          "Modificar estados financieros sin soporte documental.",
          "Verificar que $9,000 en activos igualen a $3,000 de pasivo más $6,000 de patrimonio.",
          "Omitir el registro de operaciones mercantiles cotidianas."
        ],
        1,
        "Recuerda: Para leer el balance se identifican activo, pasivo y patrimonio y se comprueba Activo = Pasivo + Patrimonio."
      ],
      [
        "¿Qué descripción corresponde al principio fundamental explicado en lectura del balance?",
        [
          "La supresión total de controles internos en la empresa.",
          "La aplicación de métodos empíricos sin base técnica.",
          "Para leer el balance se identifican activo, pasivo y patrimonio y se comprueba Activo = Pasivo + Patrimonio."
        ],
        2,
        "Recuerda: Para leer el balance se identifican activo, pasivo y patrimonio y se comprueba Activo = Pasivo + Patrimonio."
      ],
      [
        "Selecciona la afirmación que resume de mejor manera lo aprendido sobre lectura del balance:",
        [
          "Es un procedimiento opcional que las empresas pueden ignorar.",
          "Para leer el balance se identifican activo, pasivo y patrimonio y se comprueba Activo = Pasivo + Patrimonio.",
          "Distorsiona la igualdad numérica de los registros contables."
        ],
        1,
        "Recuerda: Para leer el balance se identifican activo, pasivo y patrimonio y se comprueba Activo = Pasivo + Patrimonio."
      ]
    ]
  },
  {
    "id": 28,
    "world": 3,
    "level": 8,
    "title": "Lectura del resultado",
    "subtitle": "Distingue qué informa cada estado financiero y cómo se relacionan.",
    "sections": [
      [
        "Definición de la tarjeta",
        "Para interpretar el estado de resultados se identifican ingresos, costos, gastos y el resultado final."
      ],
      [
        "Explicación paso a paso",
        "Permite determinar si la operación generó utilidad o pérdida neta."
      ],
      [
        "Ejemplo práctico",
        "Restar costos y gastos a los ingresos totales para obtener la ganancia."
      ],
      [
        "Cómo reconocer el concepto",
        "Identifica la lectura del desempeño operativo."
      ],
      [
        "Lo que debes recordar",
        "Lectura del resultado: Para interpretar el estado de resultados se identifican ingresos, costos, gastos y el resultado final."
      ]
    ],
    "summary": "Lectura del resultado. Para interpretar el estado de resultados se identifican ingresos, costos, gastos y el resultado final.",
    "questions": [
      [
        "¿Cuál es la definición correcta de lectura del resultado?",
        [
          "Es un concepto ajeno a la gestión contable y financiera de la entidad.",
          "Para interpretar el estado de resultados se identifican ingresos, costos, gastos y el resultado final.",
          "Corresponde exclusivamente a un registro temporal sin validez formal."
        ],
        1,
        "Recuerda: Para interpretar el estado de resultados se identifican ingresos, costos, gastos y el resultado final."
      ],
      [
        "Según esta lección, ¿cómo se entiende el concepto de lectura del resultado?",
        [
          "Permite determinar si la operación generó utilidad o pérdida neta.",
          "Se calcula restando todos los pasivos circulantes entre sí.",
          "Es un informe exclusivo para auditorías externas gubernamentales."
        ],
        0,
        "Recuerda: Para interpretar el estado de resultados se identifican ingresos, costos, gastos y el resultado final."
      ],
      [
        "¿Qué enunciado describe correctamente la aplicación práctica de lectura del resultado?",
        [
          "No tiene aplicación directa en las operaciones cotidianas de una empresa.",
          "Restar costos y gastos a los ingresos totales para obtener la ganancia.",
          "Solo se aplica al cierre de operaciones fiscales anuales obligatorias."
        ],
        1,
        "Recuerda: Para interpretar el estado de resultados se identifican ingresos, costos, gastos y el resultado final."
      ],
      [
        "¿Cuál afirmación coincide exactamente con lo explicado sobre lectura del resultado?",
        [
          "Se relaciona directamente con la premisa: Para interpretar el estado de resultados se identifican ingresos, costos, gastos y el resultado final.",
          "Modifica de forma arbitraria la ecuación contable fundamental.",
          "Representa un pasivo exigible a corto plazo."
        ],
        0,
        "Recuerda: Para interpretar el estado de resultados se identifican ingresos, costos, gastos y el resultado final."
      ],
      [
        "Al estudiar lectura del resultado, ¿qué aspecto clave debes identificar?",
        [
          "Su dependencia exclusiva de factores externos macroeconómicos.",
          "Identifica la lectura del desempeño operativo.",
          "Que no requiere ningún tipo de control ni registro documental."
        ],
        1,
        "Recuerda: Para interpretar el estado de resultados se identifican ingresos, costos, gastos y el resultado final."
      ],
      [
        "¿Qué opción expresa la idea central desarrollada en esta lección?",
        [
          "Los registros se realizan sin seguir ningún orden lógico ni cronológico.",
          "Para interpretar el estado de resultados se identifican ingresos, costos, gastos y el resultado final.",
          "Los estados financieros pierden toda validez legal al aplicarlo."
        ],
        1,
        "Recuerda: Para interpretar el estado de resultados se identifican ingresos, costos, gastos y el resultado final."
      ],
      [
        "De acuerdo con los fundamentos estudiados, ¿cómo opera lectura del resultado?",
        [
          "Permite determinar si la operación generó utilidad o pérdida neta.",
          "Generando automáticamente pasivos contingentes para la entidad.",
          "Eliminando la necesidad de libros diario y mayor."
        ],
        0,
        "Recuerda: Para interpretar el estado de resultados se identifican ingresos, costos, gastos y el resultado final."
      ],
      [
        "¿Cuál de las siguientes opciones ejemplifica correctamente este concepto?",
        [
          "Modificar estados financieros sin soporte documental.",
          "Restar costos y gastos a los ingresos totales para obtener la ganancia.",
          "Omitir el registro de operaciones mercantiles cotidianas."
        ],
        1,
        "Recuerda: Para interpretar el estado de resultados se identifican ingresos, costos, gastos y el resultado final."
      ],
      [
        "¿Qué descripción corresponde al principio fundamental explicado en lectura del resultado?",
        [
          "La supresión total de controles internos en la empresa.",
          "La aplicación de métodos empíricos sin base técnica.",
          "Para interpretar el estado de resultados se identifican ingresos, costos, gastos y el resultado final."
        ],
        2,
        "Recuerda: Para interpretar el estado de resultados se identifican ingresos, costos, gastos y el resultado final."
      ],
      [
        "Selecciona la afirmación que resume de mejor manera lo aprendido sobre lectura del resultado:",
        [
          "Es un procedimiento opcional que las empresas pueden ignorar.",
          "Para interpretar el estado de resultados se identifican ingresos, costos, gastos y el resultado final.",
          "Distorsiona la igualdad numérica de los registros contables."
        ],
        1,
        "Recuerda: Para interpretar el estado de resultados se identifican ingresos, costos, gastos y el resultado final."
      ]
    ]
  },
  {
    "id": 29,
    "world": 3,
    "level": 9,
    "title": "Lectura de variaciones patrimoniales",
    "subtitle": "Distingue qué informa cada estado financiero y cómo se relacionan.",
    "sections": [
      [
        "Definición de la tarjeta",
        "El estado de cambios en el patrimonio compara y presenta los cambios patrimoniales del período."
      ],
      [
        "Explicación paso a paso",
        "Identifica aumentos por capitalización o disminuciones por dividendos."
      ],
      [
        "Ejemplo práctico",
        "Comparar el patrimonio inicial de $14,000 con el final de $12,500."
      ],
      [
        "Cómo reconocer el concepto",
        "Busca la lectura de fluctuaciones patrimoniales."
      ],
      [
        "Lo que debes recordar",
        "Lectura de variaciones patrimoniales: El estado de cambios en el patrimonio compara y presenta los cambios patrimoniales del período."
      ]
    ],
    "summary": "Lectura de variaciones patrimoniales. El estado de cambios en el patrimonio compara y presenta los cambios patrimoniales del período.",
    "questions": [
      [
        "¿Cuál es la definición correcta de lectura de variaciones patrimoniales?",
        [
          "Es un concepto ajeno a la gestión contable y financiera de la entidad.",
          "El estado de cambios en el patrimonio compara y presenta los cambios patrimoniales del período.",
          "Corresponde exclusivamente a un registro temporal sin validez formal."
        ],
        1,
        "Recuerda: El estado de cambios en el patrimonio compara y presenta los cambios patrimoniales del período."
      ],
      [
        "Según esta lección, ¿cómo se entiende el concepto de lectura de variaciones patrimoniales?",
        [
          "Identifica aumentos por capitalización o disminuciones por dividendos.",
          "Se calcula restando todos los pasivos circulantes entre sí.",
          "Es un informe exclusivo para auditorías externas gubernamentales."
        ],
        0,
        "Recuerda: El estado de cambios en el patrimonio compara y presenta los cambios patrimoniales del período."
      ],
      [
        "¿Qué enunciado describe correctamente la aplicación práctica de lectura de variaciones patrimoniales?",
        [
          "No tiene aplicación directa en las operaciones cotidianas de una empresa.",
          "Comparar el patrimonio inicial de $14,000 con el final de $12,500.",
          "Solo se aplica al cierre de operaciones fiscales anuales obligatorias."
        ],
        1,
        "Recuerda: El estado de cambios en el patrimonio compara y presenta los cambios patrimoniales del período."
      ],
      [
        "¿Cuál afirmación coincide exactamente con lo explicado sobre lectura de variaciones patrimoniales?",
        [
          "Se relaciona directamente con la premisa: El estado de cambios en el patrimonio compara y presenta los cambios patrimoniales del período.",
          "Modifica de forma arbitraria la ecuación contable fundamental.",
          "Representa un pasivo exigible a corto plazo."
        ],
        0,
        "Recuerda: El estado de cambios en el patrimonio compara y presenta los cambios patrimoniales del período."
      ],
      [
        "Al estudiar lectura de variaciones patrimoniales, ¿qué aspecto clave debes identificar?",
        [
          "Su dependencia exclusiva de factores externos macroeconómicos.",
          "Busca la lectura de fluctuaciones patrimoniales.",
          "Que no requiere ningún tipo de control ni registro documental."
        ],
        1,
        "Recuerda: El estado de cambios en el patrimonio compara y presenta los cambios patrimoniales del período."
      ],
      [
        "¿Qué opción expresa la idea central desarrollada en esta lección?",
        [
          "Los registros se realizan sin seguir ningún orden lógico ni cronológico.",
          "El estado de cambios en el patrimonio compara y presenta los cambios patrimoniales del período.",
          "Los estados financieros pierden toda validez legal al aplicarlo."
        ],
        1,
        "Recuerda: El estado de cambios en el patrimonio compara y presenta los cambios patrimoniales del período."
      ],
      [
        "De acuerdo con los fundamentos estudiados, ¿cómo opera lectura de variaciones patrimoniales?",
        [
          "Identifica aumentos por capitalización o disminuciones por dividendos.",
          "Generando automáticamente pasivos contingentes para la entidad.",
          "Eliminando la necesidad de libros diario y mayor."
        ],
        0,
        "Recuerda: El estado de cambios en el patrimonio compara y presenta los cambios patrimoniales del período."
      ],
      [
        "¿Cuál de las siguientes opciones ejemplifica correctamente este concepto?",
        [
          "Modificar estados financieros sin soporte documental.",
          "Comparar el patrimonio inicial de $14,000 con el final de $12,500.",
          "Omitir el registro de operaciones mercantiles cotidianas."
        ],
        1,
        "Recuerda: El estado de cambios en el patrimonio compara y presenta los cambios patrimoniales del período."
      ],
      [
        "¿Qué descripción corresponde al principio fundamental explicado en lectura de variaciones patrimoniales?",
        [
          "La supresión total de controles internos en la empresa.",
          "La aplicación de métodos empíricos sin base técnica.",
          "El estado de cambios en el patrimonio compara y presenta los cambios patrimoniales del período."
        ],
        2,
        "Recuerda: El estado de cambios en el patrimonio compara y presenta los cambios patrimoniales del período."
      ],
      [
        "Selecciona la afirmación que resume de mejor manera lo aprendido sobre lectura de variaciones patrimoniales:",
        [
          "Es un procedimiento opcional que las empresas pueden ignorar.",
          "El estado de cambios en el patrimonio compara y presenta los cambios patrimoniales del período.",
          "Distorsiona la igualdad numérica de los registros contables."
        ],
        1,
        "Recuerda: El estado de cambios en el patrimonio compara y presenta los cambios patrimoniales del período."
      ]
    ]
  },
  {
    "id": 30,
    "world": 3,
    "level": 10,
    "title": "Lectura del flujo de efectivo",
    "subtitle": "Distingue qué informa cada estado financiero y cómo se relacionan.",
    "sections": [
      [
        "Definición de la tarjeta",
        "El estado de flujo de efectivo permite identificar entradas, salidas y diferencia neta de dinero."
      ],
      [
        "Explicación paso a paso",
        "Facilita conocer si la empresa ganó o perdió liquidez neta en el ciclo."
      ],
      [
        "Ejemplo práctico",
        "Entradas de $1,200 menos salidas de $900 arrojan una diferencia neta de $300."
      ],
      [
        "Cómo reconocer el concepto",
        "Reconoce la lectura de flujos monetarios netos."
      ],
      [
        "Lo que debes recordar",
        "Lectura del flujo de efectivo: El estado de flujo de efectivo permite identificar entradas, salidas y diferencia neta de dinero."
      ]
    ],
    "summary": "Lectura del flujo de efectivo. El estado de flujo de efectivo permite identificar entradas, salidas y diferencia neta de dinero.",
    "questions": [
      [
        "¿Cuál es la definición correcta de lectura del flujo de efectivo?",
        [
          "Es un concepto ajeno a la gestión contable y financiera de la entidad.",
          "El estado de flujo de efectivo permite identificar entradas, salidas y diferencia neta de dinero.",
          "Corresponde exclusivamente a un registro temporal sin validez formal."
        ],
        1,
        "Recuerda: El estado de flujo de efectivo permite identificar entradas, salidas y diferencia neta de dinero."
      ],
      [
        "Según esta lección, ¿cómo se entiende el concepto de lectura del flujo de efectivo?",
        [
          "Facilita conocer si la empresa ganó o perdió liquidez neta en el ciclo.",
          "Se calcula restando todos los pasivos circulantes entre sí.",
          "Es un informe exclusivo para auditorías externas gubernamentales."
        ],
        0,
        "Recuerda: El estado de flujo de efectivo permite identificar entradas, salidas y diferencia neta de dinero."
      ],
      [
        "¿Qué enunciado describe correctamente la aplicación práctica de lectura del flujo de efectivo?",
        [
          "No tiene aplicación directa en las operaciones cotidianas de una empresa.",
          "Entradas de $1,200 menos salidas de $900 arrojan una diferencia neta de $300.",
          "Solo se aplica al cierre de operaciones fiscales anuales obligatorias."
        ],
        1,
        "Recuerda: El estado de flujo de efectivo permite identificar entradas, salidas y diferencia neta de dinero."
      ],
      [
        "¿Cuál afirmación coincide exactamente con lo explicado sobre lectura del flujo de efectivo?",
        [
          "Se relaciona directamente con la premisa: El estado de flujo de efectivo permite identificar entradas, salidas y diferencia neta de dinero.",
          "Modifica de forma arbitraria la ecuación contable fundamental.",
          "Representa un pasivo exigible a corto plazo."
        ],
        0,
        "Recuerda: El estado de flujo de efectivo permite identificar entradas, salidas y diferencia neta de dinero."
      ],
      [
        "Al estudiar lectura del flujo de efectivo, ¿qué aspecto clave debes identificar?",
        [
          "Su dependencia exclusiva de factores externos macroeconómicos.",
          "Reconoce la lectura de flujos monetarios netos.",
          "Que no requiere ningún tipo de control ni registro documental."
        ],
        1,
        "Recuerda: El estado de flujo de efectivo permite identificar entradas, salidas y diferencia neta de dinero."
      ],
      [
        "¿Qué opción expresa la idea central desarrollada en esta lección?",
        [
          "Los registros se realizan sin seguir ningún orden lógico ni cronológico.",
          "El estado de flujo de efectivo permite identificar entradas, salidas y diferencia neta de dinero.",
          "Los estados financieros pierden toda validez legal al aplicarlo."
        ],
        1,
        "Recuerda: El estado de flujo de efectivo permite identificar entradas, salidas y diferencia neta de dinero."
      ],
      [
        "De acuerdo con los fundamentos estudiados, ¿cómo opera lectura del flujo de efectivo?",
        [
          "Facilita conocer si la empresa ganó o perdió liquidez neta en el ciclo.",
          "Generando automáticamente pasivos contingentes para la entidad.",
          "Eliminando la necesidad de libros diario y mayor."
        ],
        0,
        "Recuerda: El estado de flujo de efectivo permite identificar entradas, salidas y diferencia neta de dinero."
      ],
      [
        "¿Cuál de las siguientes opciones ejemplifica correctamente este concepto?",
        [
          "Modificar estados financieros sin soporte documental.",
          "Entradas de $1,200 menos salidas de $900 arrojan una diferencia neta de $300.",
          "Omitir el registro de operaciones mercantiles cotidianas."
        ],
        1,
        "Recuerda: El estado de flujo de efectivo permite identificar entradas, salidas y diferencia neta de dinero."
      ],
      [
        "¿Qué descripción corresponde al principio fundamental explicado en lectura del flujo de efectivo?",
        [
          "La supresión total de controles internos en la empresa.",
          "La aplicación de métodos empíricos sin base técnica.",
          "El estado de flujo de efectivo permite identificar entradas, salidas y diferencia neta de dinero."
        ],
        2,
        "Recuerda: El estado de flujo de efectivo permite identificar entradas, salidas y diferencia neta de dinero."
      ],
      [
        "Selecciona la afirmación que resume de mejor manera lo aprendido sobre lectura del flujo de efectivo:",
        [
          "Es un procedimiento opcional que las empresas pueden ignorar.",
          "El estado de flujo de efectivo permite identificar entradas, salidas y diferencia neta de dinero.",
          "Distorsiona la igualdad numérica de los registros contables."
        ],
        1,
        "Recuerda: El estado de flujo de efectivo permite identificar entradas, salidas y diferencia neta de dinero."
      ]
    ]
  },
  {
    "id": 31,
    "world": 4,
    "level": 1,
    "title": "Los tributos",
    "subtitle": "Comprende tributos, impuestos y obligaciones tributarias descritas en tus tarjetas.",
    "sections": [
      [
        "Definición de la tarjeta",
        "Los tributos son pagos obligatorios establecidos por el Estado para financiar el gasto público."
      ],
      [
        "Explicación paso a paso",
        "Constituyen la principal fuente de ingresos fiscales para el sostenimiento social."
      ],
      [
        "Ejemplo práctico",
        "Pagar tasas e impuestos establecidos por la ley tributaria."
      ],
      [
        "Cómo reconocer el concepto",
        "Identifica la definición de tributo estatal."
      ],
      [
        "Lo que debes recordar",
        "Los tributos: Los tributos son pagos obligatorios establecidos por el Estado para financiar el gasto público."
      ]
    ],
    "summary": "Los tributos. Los tributos son pagos obligatorios establecidos por el Estado para financiar el gasto público.",
    "questions": [
      [
        "¿Cuál es la definición correcta de los tributos?",
        [
          "Es un concepto ajeno a la gestión contable y financiera de la entidad.",
          "Los tributos son pagos obligatorios establecidos por el Estado para financiar el gasto público.",
          "Corresponde exclusivamente a un registro temporal sin validez formal."
        ],
        1,
        "Recuerda: Los tributos son pagos obligatorios establecidos por el Estado para financiar el gasto público."
      ],
      [
        "Según esta lección, ¿cómo se entiende el concepto de los tributos?",
        [
          "Constituyen la principal fuente de ingresos fiscales para el sostenimiento social.",
          "Se calcula restando todos los pasivos circulantes entre sí.",
          "Es un informe exclusivo para auditorías externas gubernamentales."
        ],
        0,
        "Recuerda: Los tributos son pagos obligatorios establecidos por el Estado para financiar el gasto público."
      ],
      [
        "¿Qué enunciado describe correctamente la aplicación práctica de los tributos?",
        [
          "No tiene aplicación directa en las operaciones cotidianas de una empresa.",
          "Pagar tasas e impuestos establecidos por la ley tributaria.",
          "Solo se aplica al cierre de operaciones fiscales anuales obligatorias."
        ],
        1,
        "Recuerda: Los tributos son pagos obligatorios establecidos por el Estado para financiar el gasto público."
      ],
      [
        "¿Cuál afirmación coincide exactamente con lo explicado sobre los tributos?",
        [
          "Se relaciona directamente con la premisa: Los tributos son pagos obligatorios establecidos por el Estado para financiar el gasto público.",
          "Modifica de forma arbitraria la ecuación contable fundamental.",
          "Representa un pasivo exigible a corto plazo."
        ],
        0,
        "Recuerda: Los tributos son pagos obligatorios establecidos por el Estado para financiar el gasto público."
      ],
      [
        "Al estudiar los tributos, ¿qué aspecto clave debes identificar?",
        [
          "Su dependencia exclusiva de factores externos macroeconómicos.",
          "Identifica la definición de tributo estatal.",
          "Que no requiere ningún tipo de control ni registro documental."
        ],
        1,
        "Recuerda: Los tributos son pagos obligatorios establecidos por el Estado para financiar el gasto público."
      ],
      [
        "¿Qué opción expresa la idea central desarrollada en esta lección?",
        [
          "Los registros se realizan sin seguir ningún orden lógico ni cronológico.",
          "Los tributos son pagos obligatorios establecidos por el Estado para financiar el gasto público.",
          "Los estados financieros pierden toda validez legal al aplicarlo."
        ],
        1,
        "Recuerda: Los tributos son pagos obligatorios establecidos por el Estado para financiar el gasto público."
      ],
      [
        "De acuerdo con los fundamentos estudiados, ¿cómo opera los tributos?",
        [
          "Constituyen la principal fuente de ingresos fiscales para el sostenimiento social.",
          "Generando automáticamente pasivos contingentes para la entidad.",
          "Eliminando la necesidad de libros diario y mayor."
        ],
        0,
        "Recuerda: Los tributos son pagos obligatorios establecidos por el Estado para financiar el gasto público."
      ],
      [
        "¿Cuál de las siguientes opciones ejemplifica correctamente este concepto?",
        [
          "Modificar estados financieros sin soporte documental.",
          "Pagar tasas e impuestos establecidos por la ley tributaria.",
          "Omitir el registro de operaciones mercantiles cotidianas."
        ],
        1,
        "Recuerda: Los tributos son pagos obligatorios establecidos por el Estado para financiar el gasto público."
      ],
      [
        "¿Qué descripción corresponde al principio fundamental explicado en los tributos?",
        [
          "La supresión total de controles internos en la empresa.",
          "La aplicación de métodos empíricos sin base técnica.",
          "Los tributos son pagos obligatorios establecidos por el Estado para financiar el gasto público."
        ],
        2,
        "Recuerda: Los tributos son pagos obligatorios establecidos por el Estado para financiar el gasto público."
      ],
      [
        "Selecciona la afirmación que resume de mejor manera lo aprendido sobre los tributos:",
        [
          "Es un procedimiento opcional que las empresas pueden ignorar.",
          "Los tributos son pagos obligatorios establecidos por el Estado para financiar el gasto público.",
          "Distorsiona la igualdad numérica de los registros contables."
        ],
        1,
        "Recuerda: Los tributos son pagos obligatorios establecidos por el Estado para financiar el gasto público."
      ]
    ]
  },
  {
    "id": 32,
    "world": 4,
    "level": 2,
    "title": "Los impuestos",
    "subtitle": "Comprende tributos, impuestos y obligaciones tributarias descritas en tus tarjetas.",
    "sections": [
      [
        "Definición de la tarjeta",
        "Los impuestos son tributos que se exigen conforme a la ley y forman parte de los pagos obligatorios al Estado."
      ],
      [
        "Explicación paso a paso",
        "Su pago es obligatorio por mandato legal, sin que el contribuyente reciba un servicio inmediato directo."
      ],
      [
        "Ejemplo práctico",
        "El impuesto sobre la renta se paga obligatoriamente por ley."
      ],
      [
        "Cómo reconocer el concepto",
        "Reconoce la categoría de impuesto dentro de los tributos."
      ],
      [
        "Lo que debes recordar",
        "Los impuestos: Los impuestos son tributos que se exigen conforme a la ley y forman parte de los pagos obligatorios al Estado."
      ]
    ],
    "summary": "Los impuestos. Los impuestos son tributos que se exigen conforme a la ley y forman parte de los pagos obligatorios al Estado.",
    "questions": [
      [
        "¿Cuál es la definición correcta de los impuestos?",
        [
          "Es un concepto ajeno a la gestión contable y financiera de la entidad.",
          "Los impuestos son tributos que se exigen conforme a la ley y forman parte de los pagos obligatorios al Estado.",
          "Corresponde exclusivamente a un registro temporal sin validez formal."
        ],
        1,
        "Recuerda: Los impuestos son tributos que se exigen conforme a la ley y forman parte de los pagos obligatorios al Estado."
      ],
      [
        "Según esta lección, ¿cómo se entiende el concepto de los impuestos?",
        [
          "Su pago es obligatorio por mandato legal, sin que el contribuyente reciba un servicio inmediato directo.",
          "Se calcula restando todos los pasivos circulantes entre sí.",
          "Es un informe exclusivo para auditorías externas gubernamentales."
        ],
        0,
        "Recuerda: Los impuestos son tributos que se exigen conforme a la ley y forman parte de los pagos obligatorios al Estado."
      ],
      [
        "¿Qué enunciado describe correctamente la aplicación práctica de los impuestos?",
        [
          "No tiene aplicación directa en las operaciones cotidianas de una empresa.",
          "El impuesto sobre la renta se paga obligatoriamente por ley.",
          "Solo se aplica al cierre de operaciones fiscales anuales obligatorias."
        ],
        1,
        "Recuerda: Los impuestos son tributos que se exigen conforme a la ley y forman parte de los pagos obligatorios al Estado."
      ],
      [
        "¿Cuál afirmación coincide exactamente con lo explicado sobre los impuestos?",
        [
          "Se relaciona directamente con la premisa: Los impuestos son tributos que se exigen conforme a la ley y forman parte de los pagos obligatorios al Estado.",
          "Modifica de forma arbitraria la ecuación contable fundamental.",
          "Representa un pasivo exigible a corto plazo."
        ],
        0,
        "Recuerda: Los impuestos son tributos que se exigen conforme a la ley y forman parte de los pagos obligatorios al Estado."
      ],
      [
        "Al estudiar los impuestos, ¿qué aspecto clave debes identificar?",
        [
          "Su dependencia exclusiva de factores externos macroeconómicos.",
          "Reconoce la categoría de impuesto dentro de los tributos.",
          "Que no requiere ningún tipo de control ni registro documental."
        ],
        1,
        "Recuerda: Los impuestos son tributos que se exigen conforme a la ley y forman parte de los pagos obligatorios al Estado."
      ],
      [
        "¿Qué opción expresa la idea central desarrollada en esta lección?",
        [
          "Los registros se realizan sin seguir ningún orden lógico ni cronológico.",
          "Los impuestos son tributos que se exigen conforme a la ley y forman parte de los pagos obligatorios al Estado.",
          "Los estados financieros pierden toda validez legal al aplicarlo."
        ],
        1,
        "Recuerda: Los impuestos son tributos que se exigen conforme a la ley y forman parte de los pagos obligatorios al Estado."
      ],
      [
        "De acuerdo con los fundamentos estudiados, ¿cómo opera los impuestos?",
        [
          "Su pago es obligatorio por mandato legal, sin que el contribuyente reciba un servicio inmediato directo.",
          "Generando automáticamente pasivos contingentes para la entidad.",
          "Eliminando la necesidad de libros diario y mayor."
        ],
        0,
        "Recuerda: Los impuestos son tributos que se exigen conforme a la ley y forman parte de los pagos obligatorios al Estado."
      ],
      [
        "¿Cuál de las siguientes opciones ejemplifica correctamente este concepto?",
        [
          "Modificar estados financieros sin soporte documental.",
          "El impuesto sobre la renta se paga obligatoriamente por ley.",
          "Omitir el registro de operaciones mercantiles cotidianas."
        ],
        1,
        "Recuerda: Los impuestos son tributos que se exigen conforme a la ley y forman parte de los pagos obligatorios al Estado."
      ],
      [
        "¿Qué descripción corresponde al principio fundamental explicado en los impuestos?",
        [
          "La supresión total de controles internos en la empresa.",
          "La aplicación de métodos empíricos sin base técnica.",
          "Los impuestos son tributos que se exigen conforme a la ley y forman parte de los pagos obligatorios al Estado."
        ],
        2,
        "Recuerda: Los impuestos son tributos que se exigen conforme a la ley y forman parte de los pagos obligatorios al Estado."
      ],
      [
        "Selecciona la afirmación que resume de mejor manera lo aprendido sobre los impuestos:",
        [
          "Es un procedimiento opcional que las empresas pueden ignorar.",
          "Los impuestos son tributos que se exigen conforme a la ley y forman parte de los pagos obligatorios al Estado.",
          "Distorsiona la igualdad numérica de los registros contables."
        ],
        1,
        "Recuerda: Los impuestos son tributos que se exigen conforme a la ley y forman parte de los pagos obligatorios al Estado."
      ]
    ]
  },
  {
    "id": 33,
    "world": 4,
    "level": 3,
    "title": "El IVA",
    "subtitle": "Comprende tributos, impuestos y obligaciones tributarias descritas en tus tarjetas.",
    "sections": [
      [
        "Definición de la tarjeta",
        "El IVA es el impuesto a la transferencia de bienes muebles y a la prestación de servicios."
      ],
      [
        "Explicación paso a paso",
        "Grava el consumo de bienes y servicios aplicando una tasa porcentual sobre el valor."
      ],
      [
        "Ejemplo práctico",
        "Vender mercancía o prestar servicios profesionales genera la aplicación del IVA."
      ],
      [
        "Cómo reconocer el concepto",
        "Identifica el impuesto indirecto al consumo."
      ],
      [
        "Lo que debes recordar",
        "El IVA: El IVA es el impuesto a la transferencia de bienes muebles y a la prestación de servicios."
      ]
    ],
    "summary": "El IVA. El IVA es el impuesto a la transferencia de bienes muebles y a la prestación de servicios.",
    "questions": [
      [
        "¿Cuál es la definición correcta de el iva?",
        [
          "Es un concepto ajeno a la gestión contable y financiera de la entidad.",
          "El IVA es el impuesto a la transferencia de bienes muebles y a la prestación de servicios.",
          "Corresponde exclusivamente a un registro temporal sin validez formal."
        ],
        1,
        "Recuerda: El IVA es el impuesto a la transferencia de bienes muebles y a la prestación de servicios."
      ],
      [
        "Según esta lección, ¿cómo se entiende el concepto de el iva?",
        [
          "Grava el consumo de bienes y servicios aplicando una tasa porcentual sobre el valor.",
          "Se calcula restando todos los pasivos circulantes entre sí.",
          "Es un informe exclusivo para auditorías externas gubernamentales."
        ],
        0,
        "Recuerda: El IVA es el impuesto a la transferencia de bienes muebles y a la prestación de servicios."
      ],
      [
        "¿Qué enunciado describe correctamente la aplicación práctica de el iva?",
        [
          "No tiene aplicación directa en las operaciones cotidianas de una empresa.",
          "Vender mercancía o prestar servicios profesionales genera la aplicación del IVA.",
          "Solo se aplica al cierre de operaciones fiscales anuales obligatorias."
        ],
        1,
        "Recuerda: El IVA es el impuesto a la transferencia de bienes muebles y a la prestación de servicios."
      ],
      [
        "¿Cuál afirmación coincide exactamente con lo explicado sobre el iva?",
        [
          "Se relaciona directamente con la premisa: El IVA es el impuesto a la transferencia de bienes muebles y a la prestación de servicios.",
          "Modifica de forma arbitraria la ecuación contable fundamental.",
          "Representa un pasivo exigible a corto plazo."
        ],
        0,
        "Recuerda: El IVA es el impuesto a la transferencia de bienes muebles y a la prestación de servicios."
      ],
      [
        "Al estudiar el iva, ¿qué aspecto clave debes identificar?",
        [
          "Su dependencia exclusiva de factores externos macroeconómicos.",
          "Identifica el impuesto indirecto al consumo.",
          "Que no requiere ningún tipo de control ni registro documental."
        ],
        1,
        "Recuerda: El IVA es el impuesto a la transferencia de bienes muebles y a la prestación de servicios."
      ],
      [
        "¿Qué opción expresa la idea central desarrollada en esta lección?",
        [
          "Los registros se realizan sin seguir ningún orden lógico ni cronológico.",
          "El IVA es el impuesto a la transferencia de bienes muebles y a la prestación de servicios.",
          "Los estados financieros pierden toda validez legal al aplicarlo."
        ],
        1,
        "Recuerda: El IVA es el impuesto a la transferencia de bienes muebles y a la prestación de servicios."
      ],
      [
        "De acuerdo con los fundamentos estudiados, ¿cómo opera el iva?",
        [
          "Grava el consumo de bienes y servicios aplicando una tasa porcentual sobre el valor.",
          "Generando automáticamente pasivos contingentes para la entidad.",
          "Eliminando la necesidad de libros diario y mayor."
        ],
        0,
        "Recuerda: El IVA es el impuesto a la transferencia de bienes muebles y a la prestación de servicios."
      ],
      [
        "¿Cuál de las siguientes opciones ejemplifica correctamente este concepto?",
        [
          "Modificar estados financieros sin soporte documental.",
          "Vender mercancía o prestar servicios profesionales genera la aplicación del IVA.",
          "Omitir el registro de operaciones mercantiles cotidianas."
        ],
        1,
        "Recuerda: El IVA es el impuesto a la transferencia de bienes muebles y a la prestación de servicios."
      ],
      [
        "¿Qué descripción corresponde al principio fundamental explicado en el iva?",
        [
          "La supresión total de controles internos en la empresa.",
          "La aplicación de métodos empíricos sin base técnica.",
          "El IVA es el impuesto a la transferencia de bienes muebles y a la prestación de servicios."
        ],
        2,
        "Recuerda: El IVA es el impuesto a la transferencia de bienes muebles y a la prestación de servicios."
      ],
      [
        "Selecciona la afirmación que resume de mejor manera lo aprendido sobre el iva:",
        [
          "Es un procedimiento opcional que las empresas pueden ignorar.",
          "El IVA es el impuesto a la transferencia de bienes muebles y a la prestación de servicios.",
          "Distorsiona la igualdad numérica de los registros contables."
        ],
        1,
        "Recuerda: El IVA es el impuesto a la transferencia de bienes muebles y a la prestación de servicios."
      ]
    ]
  },
  {
    "id": 34,
    "world": 4,
    "level": 4,
    "title": "El impuesto sobre la renta",
    "subtitle": "Comprende tributos, impuestos y obligaciones tributarias descritas en tus tarjetas.",
    "sections": [
      [
        "Definición de la tarjeta",
        "Es un impuesto que grava las rentas o ganancias obtenidas por personas y empresas."
      ],
      [
        "Explicación paso a paso",
        "Se calcula sobre los ingresos netos o utilidades obtenidas en un periodo fiscal."
      ],
      [
        "Ejemplo práctico",
        "Una empresa calcula su impuesto anual basándose en la utilidad neta obtenida."
      ],
      [
        "Cómo reconocer el concepto",
        "Reconoce el impuesto directo sobre beneficios y salarios."
      ],
      [
        "Lo que debes recordar",
        "El impuesto sobre la renta: Es un impuesto que grava las rentas o ganancias obtenidas por personas y empresas."
      ]
    ],
    "summary": "El impuesto sobre la renta. Es un impuesto que grava las rentas o ganancias obtenidas por personas y empresas.",
    "questions": [
      [
        "¿Cuál es la definición correcta de el impuesto sobre la renta?",
        [
          "Es un concepto ajeno a la gestión contable y financiera de la entidad.",
          "Es un impuesto que grava las rentas o ganancias obtenidas por personas y empresas.",
          "Corresponde exclusivamente a un registro temporal sin validez formal."
        ],
        1,
        "Recuerda: Es un impuesto que grava las rentas o ganancias obtenidas por personas y empresas."
      ],
      [
        "Según esta lección, ¿cómo se entiende el concepto de el impuesto sobre la renta?",
        [
          "Se calcula sobre los ingresos netos o utilidades obtenidas en un periodo fiscal.",
          "Se calcula restando todos los pasivos circulantes entre sí.",
          "Es un informe exclusivo para auditorías externas gubernamentales."
        ],
        0,
        "Recuerda: Es un impuesto que grava las rentas o ganancias obtenidas por personas y empresas."
      ],
      [
        "¿Qué enunciado describe correctamente la aplicación práctica de el impuesto sobre la renta?",
        [
          "No tiene aplicación directa en las operaciones cotidianas de una empresa.",
          "Una empresa calcula su impuesto anual basándose en la utilidad neta obtenida.",
          "Solo se aplica al cierre de operaciones fiscales anuales obligatorias."
        ],
        1,
        "Recuerda: Es un impuesto que grava las rentas o ganancias obtenidas por personas y empresas."
      ],
      [
        "¿Cuál afirmación coincide exactamente con lo explicado sobre el impuesto sobre la renta?",
        [
          "Se relaciona directamente con la premisa: Es un impuesto que grava las rentas o ganancias obtenidas por personas y empresas.",
          "Modifica de forma arbitraria la ecuación contable fundamental.",
          "Representa un pasivo exigible a corto plazo."
        ],
        0,
        "Recuerda: Es un impuesto que grava las rentas o ganancias obtenidas por personas y empresas."
      ],
      [
        "Al estudiar el impuesto sobre la renta, ¿qué aspecto clave debes identificar?",
        [
          "Su dependencia exclusiva de factores externos macroeconómicos.",
          "Reconoce el impuesto directo sobre beneficios y salarios.",
          "Que no requiere ningún tipo de control ni registro documental."
        ],
        1,
        "Recuerda: Es un impuesto que grava las rentas o ganancias obtenidas por personas y empresas."
      ],
      [
        "¿Qué opción expresa la idea central desarrollada en esta lección?",
        [
          "Los registros se realizan sin seguir ningún orden lógico ni cronológico.",
          "Es un impuesto que grava las rentas o ganancias obtenidas por personas y empresas.",
          "Los estados financieros pierden toda validez legal al aplicarlo."
        ],
        1,
        "Recuerda: Es un impuesto que grava las rentas o ganancias obtenidas por personas y empresas."
      ],
      [
        "De acuerdo con los fundamentos estudiados, ¿cómo opera el impuesto sobre la renta?",
        [
          "Se calcula sobre los ingresos netos o utilidades obtenidas en un periodo fiscal.",
          "Generando automáticamente pasivos contingentes para la entidad.",
          "Eliminando la necesidad de libros diario y mayor."
        ],
        0,
        "Recuerda: Es un impuesto que grava las rentas o ganancias obtenidas por personas y empresas."
      ],
      [
        "¿Cuál de las siguientes opciones ejemplifica correctamente este concepto?",
        [
          "Modificar estados financieros sin soporte documental.",
          "Una empresa calcula su impuesto anual basándose en la utilidad neta obtenida.",
          "Omitir el registro de operaciones mercantiles cotidianas."
        ],
        1,
        "Recuerda: Es un impuesto que grava las rentas o ganancias obtenidas por personas y empresas."
      ],
      [
        "¿Qué descripción corresponde al principio fundamental explicado en el impuesto sobre la renta?",
        [
          "La supresión total de controles internos en la empresa.",
          "La aplicación de métodos empíricos sin base técnica.",
          "Es un impuesto que grava las rentas o ganancias obtenidas por personas y empresas."
        ],
        2,
        "Recuerda: Es un impuesto que grava las rentas o ganancias obtenidas por personas y empresas."
      ],
      [
        "Selecciona la afirmación que resume de mejor manera lo aprendido sobre el impuesto sobre la renta:",
        [
          "Es un procedimiento opcional que las empresas pueden ignorar.",
          "Es un impuesto que grava las rentas o ganancias obtenidas por personas y empresas.",
          "Distorsiona la igualdad numérica de los registros contables."
        ],
        1,
        "Recuerda: Es un impuesto que grava las rentas o ganancias obtenidas por personas y empresas."
      ]
    ]
  },
  {
    "id": 35,
    "world": 4,
    "level": 5,
    "title": "Obligación tributaria formal",
    "subtitle": "Comprende tributos, impuestos y obligaciones tributarias descritas en tus tarjetas.",
    "sections": [
      [
        "Definición de la tarjeta",
        "Es el deber de cumplir requisitos legales, como presentar declaraciones y llevar registros."
      ],
      [
        "Explicación paso a paso",
        "No implica un pago monetario directo, sino observar formalidades legales ante la administración."
      ],
      [
        "Ejemplo práctico",
        "Llevar libros contables al día y presentar declaraciones juradas a tiempo."
      ],
      [
        "Cómo reconocer el concepto",
        "Identifica los deberes formales del contribuyente."
      ],
      [
        "Lo que debes recordar",
        "Obligación tributaria formal: Es el deber de cumplir requisitos legales, como presentar declaraciones y llevar registros."
      ]
    ],
    "summary": "Obligación tributaria formal. Es el deber de cumplir requisitos legales, como presentar declaraciones y llevar registros.",
    "questions": [
      [
        "¿Cuál es la definición correcta de obligación tributaria formal?",
        [
          "Es un concepto ajeno a la gestión contable y financiera de la entidad.",
          "Es el deber de cumplir requisitos legales, como presentar declaraciones y llevar registros.",
          "Corresponde exclusivamente a un registro temporal sin validez formal."
        ],
        1,
        "Recuerda: Es el deber de cumplir requisitos legales, como presentar declaraciones y llevar registros."
      ],
      [
        "Según esta lección, ¿cómo se entiende el concepto de obligación tributaria formal?",
        [
          "No implica un pago monetario directo, sino observar formalidades legales ante la administración.",
          "Se calcula restando todos los pasivos circulantes entre sí.",
          "Es un informe exclusivo para auditorías externas gubernamentales."
        ],
        0,
        "Recuerda: Es el deber de cumplir requisitos legales, como presentar declaraciones y llevar registros."
      ],
      [
        "¿Qué enunciado describe correctamente la aplicación práctica de obligación tributaria formal?",
        [
          "No tiene aplicación directa en las operaciones cotidianas de una empresa.",
          "Llevar libros contables al día y presentar declaraciones juradas a tiempo.",
          "Solo se aplica al cierre de operaciones fiscales anuales obligatorias."
        ],
        1,
        "Recuerda: Es el deber de cumplir requisitos legales, como presentar declaraciones y llevar registros."
      ],
      [
        "¿Cuál afirmación coincide exactamente con lo explicado sobre obligación tributaria formal?",
        [
          "Se relaciona directamente con la premisa: Es el deber de cumplir requisitos legales, como presentar declaraciones y llevar registros.",
          "Modifica de forma arbitraria la ecuación contable fundamental.",
          "Representa un pasivo exigible a corto plazo."
        ],
        0,
        "Recuerda: Es el deber de cumplir requisitos legales, como presentar declaraciones y llevar registros."
      ],
      [
        "Al estudiar obligación tributaria formal, ¿qué aspecto clave debes identificar?",
        [
          "Su dependencia exclusiva de factores externos macroeconómicos.",
          "Identifica los deberes formales del contribuyente.",
          "Que no requiere ningún tipo de control ni registro documental."
        ],
        1,
        "Recuerda: Es el deber de cumplir requisitos legales, como presentar declaraciones y llevar registros."
      ],
      [
        "¿Qué opción expresa la idea central desarrollada en esta lección?",
        [
          "Los registros se realizan sin seguir ningún orden lógico ni cronológico.",
          "Es el deber de cumplir requisitos legales, como presentar declaraciones y llevar registros.",
          "Los estados financieros pierden toda validez legal al aplicarlo."
        ],
        1,
        "Recuerda: Es el deber de cumplir requisitos legales, como presentar declaraciones y llevar registros."
      ],
      [
        "De acuerdo con los fundamentos estudiados, ¿cómo opera obligación tributaria formal?",
        [
          "No implica un pago monetario directo, sino observar formalidades legales ante la administración.",
          "Generando automáticamente pasivos contingentes para la entidad.",
          "Eliminando la necesidad de libros diario y mayor."
        ],
        0,
        "Recuerda: Es el deber de cumplir requisitos legales, como presentar declaraciones y llevar registros."
      ],
      [
        "¿Cuál de las siguientes opciones ejemplifica correctamente este concepto?",
        [
          "Modificar estados financieros sin soporte documental.",
          "Llevar libros contables al día y presentar declaraciones juradas a tiempo.",
          "Omitir el registro de operaciones mercantiles cotidianas."
        ],
        1,
        "Recuerda: Es el deber de cumplir requisitos legales, como presentar declaraciones y llevar registros."
      ],
      [
        "¿Qué descripción corresponde al principio fundamental explicado en obligación tributaria formal?",
        [
          "La supresión total de controles internos en la empresa.",
          "La aplicación de métodos empíricos sin base técnica.",
          "Es el deber de cumplir requisitos legales, como presentar declaraciones y llevar registros."
        ],
        2,
        "Recuerda: Es el deber de cumplir requisitos legales, como presentar declaraciones y llevar registros."
      ],
      [
        "Selecciona la afirmación que resume de mejor manera lo aprendido sobre obligación tributaria formal:",
        [
          "Es un procedimiento opcional que las empresas pueden ignorar.",
          "Es el deber de cumplir requisitos legales, como presentar declaraciones y llevar registros.",
          "Distorsiona la igualdad numérica de los registros contables."
        ],
        1,
        "Recuerda: Es el deber de cumplir requisitos legales, como presentar declaraciones y llevar registros."
      ]
    ]
  },
  {
    "id": 36,
    "world": 4,
    "level": 6,
    "title": "Obligación tributaria sustantiva",
    "subtitle": "Comprende tributos, impuestos y obligaciones tributarias descritas en tus tarjetas.",
    "sections": [
      [
        "Definición de la tarjeta",
        "Es el deber de pagar los tributos que corresponden conforme a la ley."
      ],
      [
        "Explicación paso a paso",
        "Consiste en la obligación de entregar una suma de dinero en concepto de impuesto."
      ],
      [
        "Ejemplo práctico",
        "Efectuar el pago monetario del impuesto determinado en la liquidación."
      ],
      [
        "Cómo reconocer el concepto",
        "Reconoce el deber de pago fiscal."
      ],
      [
        "Lo que debes recordar",
        "Obligación tributaria sustantiva: Es el deber de pagar los tributos que corresponden conforme a la ley."
      ]
    ],
    "summary": "Obligación tributaria sustantiva. Es el deber de pagar los tributos que corresponden conforme a la ley.",
    "questions": [
      [
        "¿Cuál es la definición correcta de obligación tributaria sustantiva?",
        [
          "Es un concepto ajeno a la gestión contable y financiera de la entidad.",
          "Es el deber de pagar los tributos que corresponden conforme a la ley.",
          "Corresponde exclusivamente a un registro temporal sin validez formal."
        ],
        1,
        "Recuerda: Es el deber de pagar los tributos que corresponden conforme a la ley."
      ],
      [
        "Según esta lección, ¿cómo se entiende el concepto de obligación tributaria sustantiva?",
        [
          "Consiste en la obligación de entregar una suma de dinero en concepto de impuesto.",
          "Se calcula restando todos los pasivos circulantes entre sí.",
          "Es un informe exclusivo para auditorías externas gubernamentales."
        ],
        0,
        "Recuerda: Es el deber de pagar los tributos que corresponden conforme a la ley."
      ],
      [
        "¿Qué enunciado describe correctamente la aplicación práctica de obligación tributaria sustantiva?",
        [
          "No tiene aplicación directa en las operaciones cotidianas de una empresa.",
          "Efectuar el pago monetario del impuesto determinado en la liquidación.",
          "Solo se aplica al cierre de operaciones fiscales anuales obligatorias."
        ],
        1,
        "Recuerda: Es el deber de pagar los tributos que corresponden conforme a la ley."
      ],
      [
        "¿Cuál afirmación coincide exactamente con lo explicado sobre obligación tributaria sustantiva?",
        [
          "Se relaciona directamente con la premisa: Es el deber de pagar los tributos que corresponden conforme a la ley.",
          "Modifica de forma arbitraria la ecuación contable fundamental.",
          "Representa un pasivo exigible a corto plazo."
        ],
        0,
        "Recuerda: Es el deber de pagar los tributos que corresponden conforme a la ley."
      ],
      [
        "Al estudiar obligación tributaria sustantiva, ¿qué aspecto clave debes identificar?",
        [
          "Su dependencia exclusiva de factores externos macroeconómicos.",
          "Reconoce el deber de pago fiscal.",
          "Que no requiere ningún tipo de control ni registro documental."
        ],
        1,
        "Recuerda: Es el deber de pagar los tributos que corresponden conforme a la ley."
      ],
      [
        "¿Qué opción expresa la idea central desarrollada en esta lección?",
        [
          "Los registros se realizan sin seguir ningún orden lógico ni cronológico.",
          "Es el deber de pagar los tributos que corresponden conforme a la ley.",
          "Los estados financieros pierden toda validez legal al aplicarlo."
        ],
        1,
        "Recuerda: Es el deber de pagar los tributos que corresponden conforme a la ley."
      ],
      [
        "De acuerdo con los fundamentos estudiados, ¿cómo opera obligación tributaria sustantiva?",
        [
          "Consiste en la obligación de entregar una suma de dinero en concepto de impuesto.",
          "Generando automáticamente pasivos contingentes para la entidad.",
          "Eliminando la necesidad de libros diario y mayor."
        ],
        0,
        "Recuerda: Es el deber de pagar los tributos que corresponden conforme a la ley."
      ],
      [
        "¿Cuál de las siguientes opciones ejemplifica correctamente este concepto?",
        [
          "Modificar estados financieros sin soporte documental.",
          "Efectuar el pago monetario del impuesto determinado en la liquidación.",
          "Omitir el registro de operaciones mercantiles cotidianas."
        ],
        1,
        "Recuerda: Es el deber de pagar los tributos que corresponden conforme a la ley."
      ],
      [
        "¿Qué descripción corresponde al principio fundamental explicado en obligación tributaria sustantiva?",
        [
          "La supresión total de controles internos en la empresa.",
          "La aplicación de métodos empíricos sin base técnica.",
          "Es el deber de pagar los tributos que corresponden conforme a la ley."
        ],
        2,
        "Recuerda: Es el deber de pagar los tributos que corresponden conforme a la ley."
      ],
      [
        "Selecciona la afirmación que resume de mejor manera lo aprendido sobre obligación tributaria sustantiva:",
        [
          "Es un procedimiento opcional que las empresas pueden ignorar.",
          "Es el deber de pagar los tributos que corresponden conforme a la ley.",
          "Distorsiona la igualdad numérica de los registros contables."
        ],
        1,
        "Recuerda: Es el deber de pagar los tributos que corresponden conforme a la ley."
      ]
    ]
  },
  {
    "id": 37,
    "world": 4,
    "level": 7,
    "title": "Formal y sustantiva: diferencia",
    "subtitle": "Comprende tributos, impuestos y obligaciones tributarias descritas en tus tarjetas.",
    "sections": [
      [
        "Definición de la tarjeta",
        "La obligación formal consiste en cumplir requisitos legales; la sustantiva consiste en pagar los tributos correspondientes."
      ],
      [
        "Explicación paso a paso",
        "Una se refiere a hacer declaraciones y llevar libros; la otra a pagar el impuesto debido."
      ],
      [
        "Ejemplo práctico",
        "Presentar formularios es formal; cancelar el valor adeudado es sustantivo."
      ],
      [
        "Cómo reconocer el concepto",
        "Identifica la dicotomía de deberes fiscales."
      ],
      [
        "Lo que debes recordar",
        "Formal y sustantiva: diferencia: La obligación formal consiste en cumplir requisitos legales; la sustantiva consiste en pagar los tributos correspondientes."
      ]
    ],
    "summary": "Formal y sustantiva: diferencia. La obligación formal consiste en cumplir requisitos legales; la sustantiva consiste en pagar los tributos correspondientes.",
    "questions": [
      [
        "¿Cuál es la definición correcta de formal y sustantiva: diferencia?",
        [
          "Es un concepto ajeno a la gestión contable y financiera de la entidad.",
          "La obligación formal consiste en cumplir requisitos legales; la sustantiva consiste en pagar los tributos correspondientes.",
          "Corresponde exclusivamente a un registro temporal sin validez formal."
        ],
        1,
        "Recuerda: La obligación formal consiste en cumplir requisitos legales; la sustantiva consiste en pagar los tributos correspondientes."
      ],
      [
        "Según esta lección, ¿cómo se entiende el concepto de formal y sustantiva: diferencia?",
        [
          "Una se refiere a hacer declaraciones y llevar libros; la otra a pagar el impuesto debido.",
          "Se calcula restando todos los pasivos circulantes entre sí.",
          "Es un informe exclusivo para auditorías externas gubernamentales."
        ],
        0,
        "Recuerda: La obligación formal consiste en cumplir requisitos legales; la sustantiva consiste en pagar los tributos correspondientes."
      ],
      [
        "¿Qué enunciado describe correctamente la aplicación práctica de formal y sustantiva: diferencia?",
        [
          "No tiene aplicación directa en las operaciones cotidianas de una empresa.",
          "Presentar formularios es formal; cancelar el valor adeudado es sustantivo.",
          "Solo se aplica al cierre de operaciones fiscales anuales obligatorias."
        ],
        1,
        "Recuerda: La obligación formal consiste en cumplir requisitos legales; la sustantiva consiste en pagar los tributos correspondientes."
      ],
      [
        "¿Cuál afirmación coincide exactamente con lo explicado sobre formal y sustantiva: diferencia?",
        [
          "Se relaciona directamente con la premisa: La obligación formal consiste en cumplir requisitos legales; la sustantiva consiste en pagar los tributos correspondientes.",
          "Modifica de forma arbitraria la ecuación contable fundamental.",
          "Representa un pasivo exigible a corto plazo."
        ],
        0,
        "Recuerda: La obligación formal consiste en cumplir requisitos legales; la sustantiva consiste en pagar los tributos correspondientes."
      ],
      [
        "Al estudiar formal y sustantiva: diferencia, ¿qué aspecto clave debes identificar?",
        [
          "Su dependencia exclusiva de factores externos macroeconómicos.",
          "Identifica la dicotomía de deberes fiscales.",
          "Que no requiere ningún tipo de control ni registro documental."
        ],
        1,
        "Recuerda: La obligación formal consiste en cumplir requisitos legales; la sustantiva consiste en pagar los tributos correspondientes."
      ],
      [
        "¿Qué opción expresa la idea central desarrollada en esta lección?",
        [
          "Los registros se realizan sin seguir ningún orden lógico ni cronológico.",
          "La obligación formal consiste en cumplir requisitos legales; la sustantiva consiste en pagar los tributos correspondientes.",
          "Los estados financieros pierden toda validez legal al aplicarlo."
        ],
        1,
        "Recuerda: La obligación formal consiste en cumplir requisitos legales; la sustantiva consiste en pagar los tributos correspondientes."
      ],
      [
        "De acuerdo con los fundamentos estudiados, ¿cómo opera formal y sustantiva: diferencia?",
        [
          "Una se refiere a hacer declaraciones y llevar libros; la otra a pagar el impuesto debido.",
          "Generando automáticamente pasivos contingentes para la entidad.",
          "Eliminando la necesidad de libros diario y mayor."
        ],
        0,
        "Recuerda: La obligación formal consiste en cumplir requisitos legales; la sustantiva consiste en pagar los tributos correspondientes."
      ],
      [
        "¿Cuál de las siguientes opciones ejemplifica correctamente este concepto?",
        [
          "Modificar estados financieros sin soporte documental.",
          "Presentar formularios es formal; cancelar el valor adeudado es sustantivo.",
          "Omitir el registro de operaciones mercantiles cotidianas."
        ],
        1,
        "Recuerda: La obligación formal consiste en cumplir requisitos legales; la sustantiva consiste en pagar los tributos correspondientes."
      ],
      [
        "¿Qué descripción corresponde al principio fundamental explicado en formal y sustantiva: diferencia?",
        [
          "La supresión total de controles internos en la empresa.",
          "La aplicación de métodos empíricos sin base técnica.",
          "La obligación formal consiste en cumplir requisitos legales; la sustantiva consiste en pagar los tributos correspondientes."
        ],
        2,
        "Recuerda: La obligación formal consiste en cumplir requisitos legales; la sustantiva consiste en pagar los tributos correspondientes."
      ],
      [
        "Selecciona la afirmación que resume de mejor manera lo aprendido sobre formal y sustantiva: diferencia:",
        [
          "Es un procedimiento opcional que las empresas pueden ignorar.",
          "La obligación formal consiste en cumplir requisitos legales; la sustantiva consiste en pagar los tributos correspondientes.",
          "Distorsiona la igualdad numérica de los registros contables."
        ],
        1,
        "Recuerda: La obligación formal consiste en cumplir requisitos legales; la sustantiva consiste en pagar los tributos correspondientes."
      ]
    ]
  },
  {
    "id": 38,
    "world": 4,
    "level": 8,
    "title": "Para qué sirven los tributos",
    "subtitle": "Comprende tributos, impuestos y obligaciones tributarias descritas en tus tarjetas.",
    "sections": [
      [
        "Definición de la tarjeta",
        "Los tributos son pagos obligatorios establecidos por el Estado para financiar el gasto público."
      ],
      [
        "Explicación paso a paso",
        "Permiten construir infraestructura, salud, educación y seguridad nacional."
      ],
      [
        "Ejemplo práctico",
        "Los impuestos recaudados se destinan a presupuestos de obras públicas y servicios."
      ],
      [
        "Cómo reconocer el concepto",
        "Reconoce la finalidad social de la tributación."
      ],
      [
        "Lo que debes recordar",
        "Para qué sirven los tributos: Los tributos son pagos obligatorios establecidos por el Estado para financiar el gasto público."
      ]
    ],
    "summary": "Para qué sirven los tributos. Los tributos son pagos obligatorios establecidos por el Estado para financiar el gasto público.",
    "questions": [
      [
        "¿Cuál es la definición correcta de para qué sirven los tributos?",
        [
          "Es un concepto ajeno a la gestión contable y financiera de la entidad.",
          "Los tributos son pagos obligatorios establecidos por el Estado para financiar el gasto público.",
          "Corresponde exclusivamente a un registro temporal sin validez formal."
        ],
        1,
        "Recuerda: Los tributos son pagos obligatorios establecidos por el Estado para financiar el gasto público."
      ],
      [
        "Según esta lección, ¿cómo se entiende el concepto de para qué sirven los tributos?",
        [
          "Permiten construir infraestructura, salud, educación y seguridad nacional.",
          "Se calcula restando todos los pasivos circulantes entre sí.",
          "Es un informe exclusivo para auditorías externas gubernamentales."
        ],
        0,
        "Recuerda: Los tributos son pagos obligatorios establecidos por el Estado para financiar el gasto público."
      ],
      [
        "¿Qué enunciado describe correctamente la aplicación práctica de para qué sirven los tributos?",
        [
          "No tiene aplicación directa en las operaciones cotidianas de una empresa.",
          "Los impuestos recaudados se destinan a presupuestos de obras públicas y servicios.",
          "Solo se aplica al cierre de operaciones fiscales anuales obligatorias."
        ],
        1,
        "Recuerda: Los tributos son pagos obligatorios establecidos por el Estado para financiar el gasto público."
      ],
      [
        "¿Cuál afirmación coincide exactamente con lo explicado sobre para qué sirven los tributos?",
        [
          "Se relaciona directamente con la premisa: Los tributos son pagos obligatorios establecidos por el Estado para financiar el gasto público.",
          "Modifica de forma arbitraria la ecuación contable fundamental.",
          "Representa un pasivo exigible a corto plazo."
        ],
        0,
        "Recuerda: Los tributos son pagos obligatorios establecidos por el Estado para financiar el gasto público."
      ],
      [
        "Al estudiar para qué sirven los tributos, ¿qué aspecto clave debes identificar?",
        [
          "Su dependencia exclusiva de factores externos macroeconómicos.",
          "Reconoce la finalidad social de la tributación.",
          "Que no requiere ningún tipo de control ni registro documental."
        ],
        1,
        "Recuerda: Los tributos son pagos obligatorios establecidos por el Estado para financiar el gasto público."
      ],
      [
        "¿Qué opción expresa la idea central desarrollada en esta lección?",
        [
          "Los registros se realizan sin seguir ningún orden lógico ni cronológico.",
          "Los tributos son pagos obligatorios establecidos por el Estado para financiar el gasto público.",
          "Los estados financieros pierden toda validez legal al aplicarlo."
        ],
        1,
        "Recuerda: Los tributos son pagos obligatorios establecidos por el Estado para financiar el gasto público."
      ],
      [
        "De acuerdo con los fundamentos estudiados, ¿cómo opera para qué sirven los tributos?",
        [
          "Permiten construir infraestructura, salud, educación y seguridad nacional.",
          "Generando automáticamente pasivos contingentes para la entidad.",
          "Eliminando la necesidad de libros diario y mayor."
        ],
        0,
        "Recuerda: Los tributos son pagos obligatorios establecidos por el Estado para financiar el gasto público."
      ],
      [
        "¿Cuál de las siguientes opciones ejemplifica correctamente este concepto?",
        [
          "Modificar estados financieros sin soporte documental.",
          "Los impuestos recaudados se destinan a presupuestos de obras públicas y servicios.",
          "Omitir el registro de operaciones mercantiles cotidianas."
        ],
        1,
        "Recuerda: Los tributos son pagos obligatorios establecidos por el Estado para financiar el gasto público."
      ],
      [
        "¿Qué descripción corresponde al principio fundamental explicado en para qué sirven los tributos?",
        [
          "La supresión total de controles internos en la empresa.",
          "La aplicación de métodos empíricos sin base técnica.",
          "Los tributos son pagos obligatorios establecidos por el Estado para financiar el gasto público."
        ],
        2,
        "Recuerda: Los tributos son pagos obligatorios establecidos por el Estado para financiar el gasto público."
      ],
      [
        "Selecciona la afirmación que resume de mejor manera lo aprendido sobre para qué sirven los tributos:",
        [
          "Es un procedimiento opcional que las empresas pueden ignorar.",
          "Los tributos son pagos obligatorios establecidos por el Estado para financiar el gasto público.",
          "Distorsiona la igualdad numérica de los registros contables."
        ],
        1,
        "Recuerda: Los tributos son pagos obligatorios establecidos por el Estado para financiar el gasto público."
      ]
    ]
  },
  {
    "id": 39,
    "world": 4,
    "level": 9,
    "title": "IVA y renta",
    "subtitle": "Comprende tributos, impuestos y obligaciones tributarias descritas en tus tarjetas.",
    "sections": [
      [
        "Definición de la tarjeta",
        "El IVA se relaciona con la transferencia de bienes muebles y la prestación de servicios; la renta grava rentas o ganancias de personas y empresas."
      ],
      [
        "Explicación paso a paso",
        "El IVA grava transacciones comerciales; la renta grava utilidades o ingresos netos."
      ],
      [
        "Ejemplo práctico",
        "Diferenciar una factura de venta con IVA de la declaración anual de ganancias."
      ],
      [
        "Cómo reconocer el concepto",
        "Identifica la diferencia entre impuesto al consumo e impuesto a la renta."
      ],
      [
        "Lo que debes recordar",
        "IVA y renta: El IVA se relaciona con la transferencia de bienes muebles y la prestación de servicios; la renta grava rentas o ganancias de personas y empresas."
      ]
    ],
    "summary": "IVA y renta. El IVA se relaciona con la transferencia de bienes muebles y la prestación de servicios; la renta grava rentas o ganancias de personas y empresas.",
    "questions": [
      [
        "¿Cuál es la definición correcta de iva y renta?",
        [
          "Es un concepto ajeno a la gestión contable y financiera de la entidad.",
          "El IVA se relaciona con la transferencia de bienes muebles y la prestación de servicios; la renta grava rentas o ganancias de personas y empresas.",
          "Corresponde exclusivamente a un registro temporal sin validez formal."
        ],
        1,
        "Recuerda: El IVA se relaciona con la transferencia de bienes muebles y la prestación de servicios; la renta grava rentas o ganancias de personas y empresas."
      ],
      [
        "Según esta lección, ¿cómo se entiende el concepto de iva y renta?",
        [
          "El IVA grava transacciones comerciales; la renta grava utilidades o ingresos netos.",
          "Se calcula restando todos los pasivos circulantes entre sí.",
          "Es un informe exclusivo para auditorías externas gubernamentales."
        ],
        0,
        "Recuerda: El IVA se relaciona con la transferencia de bienes muebles y la prestación de servicios; la renta grava rentas o ganancias de personas y empresas."
      ],
      [
        "¿Qué enunciado describe correctamente la aplicación práctica de iva y renta?",
        [
          "No tiene aplicación directa en las operaciones cotidianas de una empresa.",
          "Diferenciar una factura de venta con IVA de la declaración anual de ganancias.",
          "Solo se aplica al cierre de operaciones fiscales anuales obligatorias."
        ],
        1,
        "Recuerda: El IVA se relaciona con la transferencia de bienes muebles y la prestación de servicios; la renta grava rentas o ganancias de personas y empresas."
      ],
      [
        "¿Cuál afirmación coincide exactamente con lo explicado sobre iva y renta?",
        [
          "Se relaciona directamente con la premisa: El IVA se relaciona con la transferencia de bienes muebles y la prestación de servicios; la renta grava rentas o ganancias de personas y empresas.",
          "Modifica de forma arbitraria la ecuación contable fundamental.",
          "Representa un pasivo exigible a corto plazo."
        ],
        0,
        "Recuerda: El IVA se relaciona con la transferencia de bienes muebles y la prestación de servicios; la renta grava rentas o ganancias de personas y empresas."
      ],
      [
        "Al estudiar iva y renta, ¿qué aspecto clave debes identificar?",
        [
          "Su dependencia exclusiva de factores externos macroeconómicos.",
          "Identifica la diferencia entre impuesto al consumo e impuesto a la renta.",
          "Que no requiere ningún tipo de control ni registro documental."
        ],
        1,
        "Recuerda: El IVA se relaciona con la transferencia de bienes muebles y la prestación de servicios; la renta grava rentas o ganancias de personas y empresas."
      ],
      [
        "¿Qué opción expresa la idea central desarrollada en esta lección?",
        [
          "Los registros se realizan sin seguir ningún orden lógico ni cronológico.",
          "El IVA se relaciona con la transferencia de bienes muebles y la prestación de servicios; la renta grava rentas o ganancias de personas y empresas.",
          "Los estados financieros pierden toda validez legal al aplicarlo."
        ],
        1,
        "Recuerda: El IVA se relaciona con la transferencia de bienes muebles y la prestación de servicios; la renta grava rentas o ganancias de personas y empresas."
      ],
      [
        "De acuerdo con los fundamentos estudiados, ¿cómo opera iva y renta?",
        [
          "El IVA grava transacciones comerciales; la renta grava utilidades o ingresos netos.",
          "Generando automáticamente pasivos contingentes para la entidad.",
          "Eliminando la necesidad de libros diario y mayor."
        ],
        0,
        "Recuerda: El IVA se relaciona con la transferencia de bienes muebles y la prestación de servicios; la renta grava rentas o ganancias de personas y empresas."
      ],
      [
        "¿Cuál de las siguientes opciones ejemplifica correctamente este concepto?",
        [
          "Modificar estados financieros sin soporte documental.",
          "Diferenciar una factura de venta con IVA de la declaración anual de ganancias.",
          "Omitir el registro de operaciones mercantiles cotidianas."
        ],
        1,
        "Recuerda: El IVA se relaciona con la transferencia de bienes muebles y la prestación de servicios; la renta grava rentas o ganancias de personas y empresas."
      ],
      [
        "¿Qué descripción corresponde al principio fundamental explicado en iva y renta?",
        [
          "La supresión total de controles internos en la empresa.",
          "La aplicación de métodos empíricos sin base técnica.",
          "El IVA se relaciona con la transferencia de bienes muebles y la prestación de servicios; la renta grava rentas o ganancias de personas y empresas."
        ],
        2,
        "Recuerda: El IVA se relaciona con la transferencia de bienes muebles y la prestación de servicios; la renta grava rentas o ganancias de personas y empresas."
      ],
      [
        "Selecciona la afirmación que resume de mejor manera lo aprendido sobre iva y renta:",
        [
          "Es un procedimiento opcional que las empresas pueden ignorar.",
          "El IVA se relaciona con la transferencia de bienes muebles y la prestación de servicios; la renta grava rentas o ganancias de personas y empresas.",
          "Distorsiona la igualdad numérica de los registros contables."
        ],
        1,
        "Recuerda: El IVA se relaciona con la transferencia de bienes muebles y la prestación de servicios; la renta grava rentas o ganancias de personas y empresas."
      ]
    ]
  },
  {
    "id": 40,
    "world": 4,
    "level": 10,
    "title": "Repaso de obligaciones tributarias",
    "subtitle": "Comprende tributos, impuestos y obligaciones tributarias descritas en tus tarjetas.",
    "sections": [
      [
        "Definición de la tarjeta",
        "Las obligaciones tributarias pueden ser formales, como presentar declaraciones y llevar registros, o sustantivas, como pagar tributos."
      ],
      [
        "Explicación paso a paso",
        "Integra el cumplimiento administrativo y el pago monetario obligatorio."
      ],
      [
        "Ejemplo práctico",
        "Cumplir con la presentación de declaraciones (formal) y cancelar el impuesto (sustantiva)."
      ],
      [
        "Cómo reconocer el concepto",
        "Reconoce el panorama integral tributario."
      ],
      [
        "Lo que debes recordar",
        "Repaso de obligaciones tributarias: Las obligaciones tributarias pueden ser formales, como presentar declaraciones y llevar registros, o sustantivas, como pagar tributos."
      ]
    ],
    "summary": "Repaso de obligaciones tributarias. Las obligaciones tributarias pueden ser formales, como presentar declaraciones y llevar registros, o sustantivas, como pagar tributos.",
    "questions": [
      [
        "¿Cuál es la definición correcta de repaso de obligaciones tributarias?",
        [
          "Es un concepto ajeno a la gestión contable y financiera de la entidad.",
          "Las obligaciones tributarias pueden ser formales, como presentar declaraciones y llevar registros, o sustantivas, como pagar tributos.",
          "Corresponde exclusivamente a un registro temporal sin validez formal."
        ],
        1,
        "Recuerda: Las obligaciones tributarias pueden ser formales, como presentar declaraciones y llevar registros, o sustantivas, como pagar tributos."
      ],
      [
        "Según esta lección, ¿cómo se entiende el concepto de repaso de obligaciones tributarias?",
        [
          "Integra el cumplimiento administrativo y el pago monetario obligatorio.",
          "Se calcula restando todos los pasivos circulantes entre sí.",
          "Es un informe exclusivo para auditorías externas gubernamentales."
        ],
        0,
        "Recuerda: Las obligaciones tributarias pueden ser formales, como presentar declaraciones y llevar registros, o sustantivas, como pagar tributos."
      ],
      [
        "¿Qué enunciado describe correctamente la aplicación práctica de repaso de obligaciones tributarias?",
        [
          "No tiene aplicación directa en las operaciones cotidianas de una empresa.",
          "Cumplir con la presentación de declaraciones (formal) y cancelar el impuesto (sustantiva).",
          "Solo se aplica al cierre de operaciones fiscales anuales obligatorias."
        ],
        1,
        "Recuerda: Las obligaciones tributarias pueden ser formales, como presentar declaraciones y llevar registros, o sustantivas, como pagar tributos."
      ],
      [
        "¿Cuál afirmación coincide exactamente con lo explicado sobre repaso de obligaciones tributarias?",
        [
          "Se relaciona directamente con la premisa: Las obligaciones tributarias pueden ser formales, como presentar declaraciones y llevar registros, o sustantivas, como pagar tributos.",
          "Modifica de forma arbitraria la ecuación contable fundamental.",
          "Representa un pasivo exigible a corto plazo."
        ],
        0,
        "Recuerda: Las obligaciones tributarias pueden ser formales, como presentar declaraciones y llevar registros, o sustantivas, como pagar tributos."
      ],
      [
        "Al estudiar repaso de obligaciones tributarias, ¿qué aspecto clave debes identificar?",
        [
          "Su dependencia exclusiva de factores externos macroeconómicos.",
          "Reconoce el panorama integral tributario.",
          "Que no requiere ningún tipo de control ni registro documental."
        ],
        1,
        "Recuerda: Las obligaciones tributarias pueden ser formales, como presentar declaraciones y llevar registros, o sustantivas, como pagar tributos."
      ],
      [
        "¿Qué opción expresa la idea central desarrollada en esta lección?",
        [
          "Los registros se realizan sin seguir ningún orden lógico ni cronológico.",
          "Las obligaciones tributarias pueden ser formales, como presentar declaraciones y llevar registros, o sustantivas, como pagar tributos.",
          "Los estados financieros pierden toda validez legal al aplicarlo."
        ],
        1,
        "Recuerda: Las obligaciones tributarias pueden ser formales, como presentar declaraciones y llevar registros, o sustantivas, como pagar tributos."
      ],
      [
        "De acuerdo con los fundamentos estudiados, ¿cómo opera repaso de obligaciones tributarias?",
        [
          "Integra el cumplimiento administrativo y el pago monetario obligatorio.",
          "Generando automáticamente pasivos contingentes para la entidad.",
          "Eliminando la necesidad de libros diario y mayor."
        ],
        0,
        "Recuerda: Las obligaciones tributarias pueden ser formales, como presentar declaraciones y llevar registros, o sustantivas, como pagar tributos."
      ],
      [
        "¿Cuál de las siguientes opciones ejemplifica correctamente este concepto?",
        [
          "Modificar estados financieros sin soporte documental.",
          "Cumplir con la presentación de declaraciones (formal) y cancelar el impuesto (sustantiva).",
          "Omitir el registro de operaciones mercantiles cotidianas."
        ],
        1,
        "Recuerda: Las obligaciones tributarias pueden ser formales, como presentar declaraciones y llevar registros, o sustantivas, como pagar tributos."
      ],
      [
        "¿Qué descripción corresponde al principio fundamental explicado en repaso de obligaciones tributarias?",
        [
          "La supresión total de controles internos en la empresa.",
          "La aplicación de métodos empíricos sin base técnica.",
          "Las obligaciones tributarias pueden ser formales, como presentar declaraciones y llevar registros, o sustantivas, como pagar tributos."
        ],
        2,
        "Recuerda: Las obligaciones tributarias pueden ser formales, como presentar declaraciones y llevar registros, o sustantivas, como pagar tributos."
      ],
      [
        "Selecciona la afirmación que resume de mejor manera lo aprendido sobre repaso de obligaciones tributarias:",
        [
          "Es un procedimiento opcional que las empresas pueden ignorar.",
          "Las obligaciones tributarias pueden ser formales, como presentar declaraciones y llevar registros, o sustantivas, como pagar tributos.",
          "Distorsiona la igualdad numérica de los registros contables."
        ],
        1,
        "Recuerda: Las obligaciones tributarias pueden ser formales, como presentar declaraciones y llevar registros, o sustantivas, como pagar tributos."
      ]
    ]
  },
  {
    "id": 41,
    "world": 5,
    "level": 1,
    "title": "Contabilidad de costos",
    "subtitle": "Identifica la contabilidad de costos y los elementos del costo de producción.",
    "sections": [
      [
        "Definición de la tarjeta",
        "Es la rama contable que identifica, registra y controla los costos de producción o servicios."
      ],
      [
        "Explicación paso a paso",
        "Permite calcular cuánto cuesta fabricar un producto o prestar un servicio profesional."
      ],
      [
        "Ejemplo práctico",
        "Una planta manufacturera implementa costos para determinar el valor de fabricación de sus artículos."
      ],
      [
        "Cómo reconocer el concepto",
        "Identifica la rama contable de la producción."
      ],
      [
        "Lo que debes recordar",
        "Contabilidad de costos: Es la rama contable que identifica, registra y controla los costos de producción o servicios."
      ]
    ],
    "summary": "Contabilidad de costos. Es la rama contable que identifica, registra y controla los costos de producción o servicios.",
    "questions": [
      [
        "¿Cuál es la definición correcta de contabilidad de costos?",
        [
          "Es un concepto ajeno a la gestión contable y financiera de la entidad.",
          "Es la rama contable que identifica, registra y controla los costos de producción o servicios.",
          "Corresponde exclusivamente a un registro temporal sin validez formal."
        ],
        1,
        "Recuerda: Es la rama contable que identifica, registra y controla los costos de producción o servicios."
      ],
      [
        "Según esta lección, ¿cómo se entiende el concepto de contabilidad de costos?",
        [
          "Permite calcular cuánto cuesta fabricar un producto o prestar un servicio profesional.",
          "Se calcula restando todos los pasivos circulantes entre sí.",
          "Es un informe exclusivo para auditorías externas gubernamentales."
        ],
        0,
        "Recuerda: Es la rama contable que identifica, registra y controla los costos de producción o servicios."
      ],
      [
        "¿Qué enunciado describe correctamente la aplicación práctica de contabilidad de costos?",
        [
          "No tiene aplicación directa en las operaciones cotidianas de una empresa.",
          "Una planta manufacturera implementa costos para determinar el valor de fabricación de sus artículos.",
          "Solo se aplica al cierre de operaciones fiscales anuales obligatorias."
        ],
        1,
        "Recuerda: Es la rama contable que identifica, registra y controla los costos de producción o servicios."
      ],
      [
        "¿Cuál afirmación coincide exactamente con lo explicado sobre contabilidad de costos?",
        [
          "Se relaciona directamente con la premisa: Es la rama contable que identifica, registra y controla los costos de producción o servicios.",
          "Modifica de forma arbitraria la ecuación contable fundamental.",
          "Representa un pasivo exigible a corto plazo."
        ],
        0,
        "Recuerda: Es la rama contable que identifica, registra y controla los costos de producción o servicios."
      ],
      [
        "Al estudiar contabilidad de costos, ¿qué aspecto clave debes identificar?",
        [
          "Su dependencia exclusiva de factores externos macroeconómicos.",
          "Identifica la rama contable de la producción.",
          "Que no requiere ningún tipo de control ni registro documental."
        ],
        1,
        "Recuerda: Es la rama contable que identifica, registra y controla los costos de producción o servicios."
      ],
      [
        "¿Qué opción expresa la idea central desarrollada en esta lección?",
        [
          "Los registros se realizan sin seguir ningún orden lógico ni cronológico.",
          "Es la rama contable que identifica, registra y controla los costos de producción o servicios.",
          "Los estados financieros pierden toda validez legal al aplicarlo."
        ],
        1,
        "Recuerda: Es la rama contable que identifica, registra y controla los costos de producción o servicios."
      ],
      [
        "De acuerdo con los fundamentos estudiados, ¿cómo opera contabilidad de costos?",
        [
          "Permite calcular cuánto cuesta fabricar un producto o prestar un servicio profesional.",
          "Generando automáticamente pasivos contingentes para la entidad.",
          "Eliminando la necesidad de libros diario y mayor."
        ],
        0,
        "Recuerda: Es la rama contable que identifica, registra y controla los costos de producción o servicios."
      ],
      [
        "¿Cuál de las siguientes opciones ejemplifica correctamente este concepto?",
        [
          "Modificar estados financieros sin soporte documental.",
          "Una planta manufacturera implementa costos para determinar el valor de fabricación de sus artículos.",
          "Omitir el registro de operaciones mercantiles cotidianas."
        ],
        1,
        "Recuerda: Es la rama contable que identifica, registra y controla los costos de producción o servicios."
      ],
      [
        "¿Qué descripción corresponde al principio fundamental explicado en contabilidad de costos?",
        [
          "La supresión total de controles internos en la empresa.",
          "La aplicación de métodos empíricos sin base técnica.",
          "Es la rama contable que identifica, registra y controla los costos de producción o servicios."
        ],
        2,
        "Recuerda: Es la rama contable que identifica, registra y controla los costos de producción o servicios."
      ],
      [
        "Selecciona la afirmación que resume de mejor manera lo aprendido sobre contabilidad de costos:",
        [
          "Es un procedimiento opcional que las empresas pueden ignorar.",
          "Es la rama contable que identifica, registra y controla los costos de producción o servicios.",
          "Distorsiona la igualdad numérica de los registros contables."
        ],
        1,
        "Recuerda: Es la rama contable que identifica, registra y controla los costos de producción o servicios."
      ]
    ]
  },
  {
    "id": 42,
    "world": 5,
    "level": 2,
    "title": "Materia prima directa",
    "subtitle": "Identifica la contabilidad de costos y los elementos del costo de producción.",
    "sections": [
      [
        "Definición de la tarjeta",
        "Son los materiales principales que se utilizan para fabricar un producto."
      ],
      [
        "Explicación paso a paso",
        "Forman parte insustituible del bien fabricado y son identificables directamente."
      ],
      [
        "Ejemplo práctico",
        "La tela utilizada en la confección de camisas o la madera en una mesa."
      ],
      [
        "Cómo reconocer el concepto",
        "Busca el material principal directo."
      ],
      [
        "Lo que debes recordar",
        "Materia prima directa: Son los materiales principales que se utilizan para fabricar un producto."
      ]
    ],
    "summary": "Materia prima directa. Son los materiales principales que se utilizan para fabricar un producto.",
    "questions": [
      [
        "¿Cuál es la definición correcta de materia prima directa?",
        [
          "Es un concepto ajeno a la gestión contable y financiera de la entidad.",
          "Son los materiales principales que se utilizan para fabricar un producto.",
          "Corresponde exclusivamente a un registro temporal sin validez formal."
        ],
        1,
        "Recuerda: Son los materiales principales que se utilizan para fabricar un producto."
      ],
      [
        "Según esta lección, ¿cómo se entiende el concepto de materia prima directa?",
        [
          "Forman parte insustituible del bien fabricado y son identificables directamente.",
          "Se calcula restando todos los pasivos circulantes entre sí.",
          "Es un informe exclusivo para auditorías externas gubernamentales."
        ],
        0,
        "Recuerda: Son los materiales principales que se utilizan para fabricar un producto."
      ],
      [
        "¿Qué enunciado describe correctamente la aplicación práctica de materia prima directa?",
        [
          "No tiene aplicación directa en las operaciones cotidianas de una empresa.",
          "La tela utilizada en la confección de camisas o la madera en una mesa.",
          "Solo se aplica al cierre de operaciones fiscales anuales obligatorias."
        ],
        1,
        "Recuerda: Son los materiales principales que se utilizan para fabricar un producto."
      ],
      [
        "¿Cuál afirmación coincide exactamente con lo explicado sobre materia prima directa?",
        [
          "Se relaciona directamente con la premisa: Son los materiales principales que se utilizan para fabricar un producto.",
          "Modifica de forma arbitraria la ecuación contable fundamental.",
          "Representa un pasivo exigible a corto plazo."
        ],
        0,
        "Recuerda: Son los materiales principales que se utilizan para fabricar un producto."
      ],
      [
        "Al estudiar materia prima directa, ¿qué aspecto clave debes identificar?",
        [
          "Su dependencia exclusiva de factores externos macroeconómicos.",
          "Busca el material principal directo.",
          "Que no requiere ningún tipo de control ni registro documental."
        ],
        1,
        "Recuerda: Son los materiales principales que se utilizan para fabricar un producto."
      ],
      [
        "¿Qué opción expresa la idea central desarrollada en esta lección?",
        [
          "Los registros se realizan sin seguir ningún orden lógico ni cronológico.",
          "Son los materiales principales que se utilizan para fabricar un producto.",
          "Los estados financieros pierden toda validez legal al aplicarlo."
        ],
        1,
        "Recuerda: Son los materiales principales que se utilizan para fabricar un producto."
      ],
      [
        "De acuerdo con los fundamentos estudiados, ¿cómo opera materia prima directa?",
        [
          "Forman parte insustituible del bien fabricado y son identificables directamente.",
          "Generando automáticamente pasivos contingentes para la entidad.",
          "Eliminando la necesidad de libros diario y mayor."
        ],
        0,
        "Recuerda: Son los materiales principales que se utilizan para fabricar un producto."
      ],
      [
        "¿Cuál de las siguientes opciones ejemplifica correctamente este concepto?",
        [
          "Modificar estados financieros sin soporte documental.",
          "La tela utilizada en la confección de camisas o la madera en una mesa.",
          "Omitir el registro de operaciones mercantiles cotidianas."
        ],
        1,
        "Recuerda: Son los materiales principales que se utilizan para fabricar un producto."
      ],
      [
        "¿Qué descripción corresponde al principio fundamental explicado en materia prima directa?",
        [
          "La supresión total de controles internos en la empresa.",
          "La aplicación de métodos empíricos sin base técnica.",
          "Son los materiales principales que se utilizan para fabricar un producto."
        ],
        2,
        "Recuerda: Son los materiales principales que se utilizan para fabricar un producto."
      ],
      [
        "Selecciona la afirmación que resume de mejor manera lo aprendido sobre materia prima directa:",
        [
          "Es un procedimiento opcional que las empresas pueden ignorar.",
          "Son los materiales principales que se utilizan para fabricar un producto.",
          "Distorsiona la igualdad numérica de los registros contables."
        ],
        1,
        "Recuerda: Son los materiales principales que se utilizan para fabricar un producto."
      ]
    ]
  },
  {
    "id": 43,
    "world": 5,
    "level": 3,
    "title": "Mano de obra directa",
    "subtitle": "Identifica la contabilidad de costos y los elementos del costo de producción.",
    "sections": [
      [
        "Definición de la tarjeta",
        "Es el trabajo de los empleados que participan directamente en la fabricación."
      ],
      [
        "Explicación paso a paso",
        "Corresponde a los salarios de operarios y artesanos que transforman los insumos."
      ],
      [
        "Ejemplo práctico",
        "El tiempo y salario del tornero que opera la máquina ensambladora."
      ],
      [
        "Cómo reconocer el concepto",
        "Identifica el trabajo directo de producción."
      ],
      [
        "Lo que debes recordar",
        "Mano de obra directa: Es el trabajo de los empleados que participan directamente en la fabricación."
      ]
    ],
    "summary": "Mano de obra directa. Es el trabajo de los empleados que participan directamente en la fabricación.",
    "questions": [
      [
        "¿Cuál es la definición correcta de mano de obra directa?",
        [
          "Es un concepto ajeno a la gestión contable y financiera de la entidad.",
          "Es el trabajo de los empleados que participan directamente en la fabricación.",
          "Corresponde exclusivamente a un registro temporal sin validez formal."
        ],
        1,
        "Recuerda: Es el trabajo de los empleados que participan directamente en la fabricación."
      ],
      [
        "Según esta lección, ¿cómo se entiende el concepto de mano de obra directa?",
        [
          "Corresponde a los salarios de operarios y artesanos que transforman los insumos.",
          "Se calcula restando todos los pasivos circulantes entre sí.",
          "Es un informe exclusivo para auditorías externas gubernamentales."
        ],
        0,
        "Recuerda: Es el trabajo de los empleados que participan directamente en la fabricación."
      ],
      [
        "¿Qué enunciado describe correctamente la aplicación práctica de mano de obra directa?",
        [
          "No tiene aplicación directa en las operaciones cotidianas de una empresa.",
          "El tiempo y salario del tornero que opera la máquina ensambladora.",
          "Solo se aplica al cierre de operaciones fiscales anuales obligatorias."
        ],
        1,
        "Recuerda: Es el trabajo de los empleados que participan directamente en la fabricación."
      ],
      [
        "¿Cuál afirmación coincide exactamente con lo explicado sobre mano de obra directa?",
        [
          "Se relaciona directamente con la premisa: Es el trabajo de los empleados que participan directamente en la fabricación.",
          "Modifica de forma arbitraria la ecuación contable fundamental.",
          "Representa un pasivo exigible a corto plazo."
        ],
        0,
        "Recuerda: Es el trabajo de los empleados que participan directamente en la fabricación."
      ],
      [
        "Al estudiar mano de obra directa, ¿qué aspecto clave debes identificar?",
        [
          "Su dependencia exclusiva de factores externos macroeconómicos.",
          "Identifica el trabajo directo de producción.",
          "Que no requiere ningún tipo de control ni registro documental."
        ],
        1,
        "Recuerda: Es el trabajo de los empleados que participan directamente en la fabricación."
      ],
      [
        "¿Qué opción expresa la idea central desarrollada en esta lección?",
        [
          "Los registros se realizan sin seguir ningún orden lógico ni cronológico.",
          "Es el trabajo de los empleados que participan directamente en la fabricación.",
          "Los estados financieros pierden toda validez legal al aplicarlo."
        ],
        1,
        "Recuerda: Es el trabajo de los empleados que participan directamente en la fabricación."
      ],
      [
        "De acuerdo con los fundamentos estudiados, ¿cómo opera mano de obra directa?",
        [
          "Corresponde a los salarios de operarios y artesanos que transforman los insumos.",
          "Generando automáticamente pasivos contingentes para la entidad.",
          "Eliminando la necesidad de libros diario y mayor."
        ],
        0,
        "Recuerda: Es el trabajo de los empleados que participan directamente en la fabricación."
      ],
      [
        "¿Cuál de las siguientes opciones ejemplifica correctamente este concepto?",
        [
          "Modificar estados financieros sin soporte documental.",
          "El tiempo y salario del tornero que opera la máquina ensambladora.",
          "Omitir el registro de operaciones mercantiles cotidianas."
        ],
        1,
        "Recuerda: Es el trabajo de los empleados que participan directamente en la fabricación."
      ],
      [
        "¿Qué descripción corresponde al principio fundamental explicado en mano de obra directa?",
        [
          "La supresión total de controles internos en la empresa.",
          "La aplicación de métodos empíricos sin base técnica.",
          "Es el trabajo de los empleados que participan directamente en la fabricación."
        ],
        2,
        "Recuerda: Es el trabajo de los empleados que participan directamente en la fabricación."
      ],
      [
        "Selecciona la afirmación que resume de mejor manera lo aprendido sobre mano de obra directa:",
        [
          "Es un procedimiento opcional que las empresas pueden ignorar.",
          "Es el trabajo de los empleados que participan directamente en la fabricación.",
          "Distorsiona la igualdad numérica de los registros contables."
        ],
        1,
        "Recuerda: Es el trabajo de los empleados que participan directamente en la fabricación."
      ]
    ]
  },
  {
    "id": 44,
    "world": 5,
    "level": 4,
    "title": "Gastos indirectos de fabricación",
    "subtitle": "Identifica la contabilidad de costos y los elementos del costo de producción.",
    "sections": [
      [
        "Definición de la tarjeta",
        "Son los costos de producción que no se identifican directamente con un producto específico."
      ],
      [
        "Explicación paso a paso",
        "Incluyen suministros generales, depreciación de maquinaria o supervisión de planta."
      ],
      [
        "Ejemplo práctico",
        "El pago de electricidad de la fábrica o el salario del supervisor general."
      ],
      [
        "Cómo reconocer el concepto",
        "Reconoce los costos de fabricación indirectos."
      ],
      [
        "Lo que debes recordar",
        "Gastos indirectos de fabricación: Son los costos de producción que no se identifican directamente con un producto específico."
      ]
    ],
    "summary": "Gastos indirectos de fabricación. Son los costos de producción que no se identifican directamente con un producto específico.",
    "questions": [
      [
        "¿Cuál es la definición correcta de gastos indirectos de fabricación?",
        [
          "Es un concepto ajeno a la gestión contable y financiera de la entidad.",
          "Son los costos de producción que no se identifican directamente con un producto específico.",
          "Corresponde exclusivamente a un registro temporal sin validez formal."
        ],
        1,
        "Recuerda: Son los costos de producción que no se identifican directamente con un producto específico."
      ],
      [
        "Según esta lección, ¿cómo se entiende el concepto de gastos indirectos de fabricación?",
        [
          "Incluyen suministros generales, depreciación de maquinaria o supervisión de planta.",
          "Se calcula restando todos los pasivos circulantes entre sí.",
          "Es un informe exclusivo para auditorías externas gubernamentales."
        ],
        0,
        "Recuerda: Son los costos de producción que no se identifican directamente con un producto específico."
      ],
      [
        "¿Qué enunciado describe correctamente la aplicación práctica de gastos indirectos de fabricación?",
        [
          "No tiene aplicación directa en las operaciones cotidianas de una empresa.",
          "El pago de electricidad de la fábrica o el salario del supervisor general.",
          "Solo se aplica al cierre de operaciones fiscales anuales obligatorias."
        ],
        1,
        "Recuerda: Son los costos de producción que no se identifican directamente con un producto específico."
      ],
      [
        "¿Cuál afirmación coincide exactamente con lo explicado sobre gastos indirectos de fabricación?",
        [
          "Se relaciona directamente con la premisa: Son los costos de producción que no se identifican directamente con un producto específico.",
          "Modifica de forma arbitraria la ecuación contable fundamental.",
          "Representa un pasivo exigible a corto plazo."
        ],
        0,
        "Recuerda: Son los costos de producción que no se identifican directamente con un producto específico."
      ],
      [
        "Al estudiar gastos indirectos de fabricación, ¿qué aspecto clave debes identificar?",
        [
          "Su dependencia exclusiva de factores externos macroeconómicos.",
          "Reconoce los costos de fabricación indirectos.",
          "Que no requiere ningún tipo de control ni registro documental."
        ],
        1,
        "Recuerda: Son los costos de producción que no se identifican directamente con un producto específico."
      ],
      [
        "¿Qué opción expresa la idea central desarrollada en esta lección?",
        [
          "Los registros se realizan sin seguir ningún orden lógico ni cronológico.",
          "Son los costos de producción que no se identifican directamente con un producto específico.",
          "Los estados financieros pierden toda validez legal al aplicarlo."
        ],
        1,
        "Recuerda: Son los costos de producción que no se identifican directamente con un producto específico."
      ],
      [
        "De acuerdo con los fundamentos estudiados, ¿cómo opera gastos indirectos de fabricación?",
        [
          "Incluyen suministros generales, depreciación de maquinaria o supervisión de planta.",
          "Generando automáticamente pasivos contingentes para la entidad.",
          "Eliminando la necesidad de libros diario y mayor."
        ],
        0,
        "Recuerda: Son los costos de producción que no se identifican directamente con un producto específico."
      ],
      [
        "¿Cuál de las siguientes opciones ejemplifica correctamente este concepto?",
        [
          "Modificar estados financieros sin soporte documental.",
          "El pago de electricidad de la fábrica o el salario del supervisor general.",
          "Omitir el registro de operaciones mercantiles cotidianas."
        ],
        1,
        "Recuerda: Son los costos de producción que no se identifican directamente con un producto específico."
      ],
      [
        "¿Qué descripción corresponde al principio fundamental explicado en gastos indirectos de fabricación?",
        [
          "La supresión total de controles internos en la empresa.",
          "La aplicación de métodos empíricos sin base técnica.",
          "Son los costos de producción que no se identifican directamente con un producto específico."
        ],
        2,
        "Recuerda: Son los costos de producción que no se identifican directamente con un producto específico."
      ],
      [
        "Selecciona la afirmación que resume de mejor manera lo aprendido sobre gastos indirectos de fabricación:",
        [
          "Es un procedimiento opcional que las empresas pueden ignorar.",
          "Son los costos de producción que no se identifican directamente con un producto específico.",
          "Distorsiona la igualdad numérica de los registros contables."
        ],
        1,
        "Recuerda: Son los costos de producción que no se identifican directamente con un producto específico."
      ]
    ]
  },
  {
    "id": 45,
    "world": 5,
    "level": 5,
    "title": "Tres elementos del costo de producción",
    "subtitle": "Identifica la contabilidad de costos y los elementos del costo de producción.",
    "sections": [
      [
        "Definición de la tarjeta",
        "Materia prima directa, mano de obra directa y gastos indirectos de fabricación."
      ],
      [
        "Explicación paso a paso",
        "Agrupan todos los desembolsos necesarios para transformar insumos en productos terminados."
      ],
      [
        "Ejemplo práctico",
        "Sumar materiales directos, trabajo directo y costos indirectos de planta."
      ],
      [
        "Cómo reconocer el concepto",
        "Identifica los tres componentes del costo."
      ],
      [
        "Lo que debes recordar",
        "Tres elementos del costo de producción: Materia prima directa, mano de obra directa y gastos indirectos de fabricación."
      ]
    ],
    "summary": "Tres elementos del costo de producción. Materia prima directa, mano de obra directa y gastos indirectos de fabricación.",
    "questions": [
      [
        "¿Cuál es la definición correcta de tres elementos del costo de producción?",
        [
          "Es un concepto ajeno a la gestión contable y financiera de la entidad.",
          "Materia prima directa, mano de obra directa y gastos indirectos de fabricación.",
          "Corresponde exclusivamente a un registro temporal sin validez formal."
        ],
        1,
        "Recuerda: Materia prima directa, mano de obra directa y gastos indirectos de fabricación."
      ],
      [
        "Según esta lección, ¿cómo se entiende el concepto de tres elementos del costo de producción?",
        [
          "Agrupan todos los desembolsos necesarios para transformar insumos en productos terminados.",
          "Se calcula restando todos los pasivos circulantes entre sí.",
          "Es un informe exclusivo para auditorías externas gubernamentales."
        ],
        0,
        "Recuerda: Materia prima directa, mano de obra directa y gastos indirectos de fabricación."
      ],
      [
        "¿Qué enunciado describe correctamente la aplicación práctica de tres elementos del costo de producción?",
        [
          "No tiene aplicación directa en las operaciones cotidianas de una empresa.",
          "Sumar materiales directos, trabajo directo y costos indirectos de planta.",
          "Solo se aplica al cierre de operaciones fiscales anuales obligatorias."
        ],
        1,
        "Recuerda: Materia prima directa, mano de obra directa y gastos indirectos de fabricación."
      ],
      [
        "¿Cuál afirmación coincide exactamente con lo explicado sobre tres elementos del costo de producción?",
        [
          "Se relaciona directamente con la premisa: Materia prima directa, mano de obra directa y gastos indirectos de fabricación.",
          "Modifica de forma arbitraria la ecuación contable fundamental.",
          "Representa un pasivo exigible a corto plazo."
        ],
        0,
        "Recuerda: Materia prima directa, mano de obra directa y gastos indirectos de fabricación."
      ],
      [
        "Al estudiar tres elementos del costo de producción, ¿qué aspecto clave debes identificar?",
        [
          "Su dependencia exclusiva de factores externos macroeconómicos.",
          "Identifica los tres componentes del costo.",
          "Que no requiere ningún tipo de control ni registro documental."
        ],
        1,
        "Recuerda: Materia prima directa, mano de obra directa y gastos indirectos de fabricación."
      ],
      [
        "¿Qué opción expresa la idea central desarrollada en esta lección?",
        [
          "Los registros se realizan sin seguir ningún orden lógico ni cronológico.",
          "Materia prima directa, mano de obra directa y gastos indirectos de fabricación.",
          "Los estados financieros pierden toda validez legal al aplicarlo."
        ],
        1,
        "Recuerda: Materia prima directa, mano de obra directa y gastos indirectos de fabricación."
      ],
      [
        "De acuerdo con los fundamentos estudiados, ¿cómo opera tres elementos del costo de producción?",
        [
          "Agrupan todos los desembolsos necesarios para transformar insumos en productos terminados.",
          "Generando automáticamente pasivos contingentes para la entidad.",
          "Eliminando la necesidad de libros diario y mayor."
        ],
        0,
        "Recuerda: Materia prima directa, mano de obra directa y gastos indirectos de fabricación."
      ],
      [
        "¿Cuál de las siguientes opciones ejemplifica correctamente este concepto?",
        [
          "Modificar estados financieros sin soporte documental.",
          "Sumar materiales directos, trabajo directo y costos indirectos de planta.",
          "Omitir el registro de operaciones mercantiles cotidianas."
        ],
        1,
        "Recuerda: Materia prima directa, mano de obra directa y gastos indirectos de fabricación."
      ],
      [
        "¿Qué descripción corresponde al principio fundamental explicado en tres elementos del costo de producción?",
        [
          "La supresión total de controles internos en la empresa.",
          "La aplicación de métodos empíricos sin base técnica.",
          "Materia prima directa, mano de obra directa y gastos indirectos de fabricación."
        ],
        2,
        "Recuerda: Materia prima directa, mano de obra directa y gastos indirectos de fabricación."
      ],
      [
        "Selecciona la afirmación que resume de mejor manera lo aprendido sobre tres elementos del costo de producción:",
        [
          "Es un procedimiento opcional que las empresas pueden ignorar.",
          "Materia prima directa, mano de obra directa y gastos indirectos de fabricación.",
          "Distorsiona la igualdad numérica de los registros contables."
        ],
        1,
        "Recuerda: Materia prima directa, mano de obra directa y gastos indirectos de fabricación."
      ]
    ]
  },
  {
    "id": 46,
    "world": 5,
    "level": 6,
    "title": "Directo e indirecto",
    "subtitle": "Identifica la contabilidad de costos y los elementos del costo de producción.",
    "sections": [
      [
        "Definición de la tarjeta",
        "La materia prima directa y la mano de obra directa se relacionan directamente con la fabricación; los gastos indirectos no se identifican directamente con un producto específico."
      ],
      [
        "Explicación paso a paso",
        "Lo directo se asigna sin ambigüedad; lo indirecto requiere bases de distribución."
      ],
      [
        "Ejemplo práctico",
        "Asignar la madera a la mesa (directo) frente al pegamento general o luz de planta (indirecto)."
      ],
      [
        "Cómo reconocer el concepto",
        "Reconoce la diferencia de asignación de costos."
      ],
      [
        "Lo que debes recordar",
        "Directo e indirecto: La materia prima directa y la mano de obra directa se relacionan directamente con la fabricación; los gastos indirectos no se identifican directamente con un producto específico."
      ]
    ],
    "summary": "Directo e indirecto. La materia prima directa y la mano de obra directa se relacionan directamente con la fabricación; los gastos indirectos no se identifican directamente con un producto específico.",
    "questions": [
      [
        "¿Cuál es la definición correcta de directo e indirecto?",
        [
          "Es un concepto ajeno a la gestión contable y financiera de la entidad.",
          "La materia prima directa y la mano de obra directa se relacionan directamente con la fabricación; los gastos indirectos no se identifican directamente con un producto específico.",
          "Corresponde exclusivamente a un registro temporal sin validez formal."
        ],
        1,
        "Recuerda: La materia prima directa y la mano de obra directa se relacionan directamente con la fabricación; los gastos indirectos no se identifican directamente con un producto específico."
      ],
      [
        "Según esta lección, ¿cómo se entiende el concepto de directo e indirecto?",
        [
          "Lo directo se asigna sin ambigüedad; lo indirecto requiere bases de distribución.",
          "Se calcula restando todos los pasivos circulantes entre sí.",
          "Es un informe exclusivo para auditorías externas gubernamentales."
        ],
        0,
        "Recuerda: La materia prima directa y la mano de obra directa se relacionan directamente con la fabricación; los gastos indirectos no se identifican directamente con un producto específico."
      ],
      [
        "¿Qué enunciado describe correctamente la aplicación práctica de directo e indirecto?",
        [
          "No tiene aplicación directa en las operaciones cotidianas de una empresa.",
          "Asignar la madera a la mesa (directo) frente al pegamento general o luz de planta (indirecto).",
          "Solo se aplica al cierre de operaciones fiscales anuales obligatorias."
        ],
        1,
        "Recuerda: La materia prima directa y la mano de obra directa se relacionan directamente con la fabricación; los gastos indirectos no se identifican directamente con un producto específico."
      ],
      [
        "¿Cuál afirmación coincide exactamente con lo explicado sobre directo e indirecto?",
        [
          "Se relaciona directamente con la premisa: La materia prima directa y la mano de obra directa se relacionan directamente con la fabricación; los gastos indirectos no se identifican directamente con un producto específico.",
          "Modifica de forma arbitraria la ecuación contable fundamental.",
          "Representa un pasivo exigible a corto plazo."
        ],
        0,
        "Recuerda: La materia prima directa y la mano de obra directa se relacionan directamente con la fabricación; los gastos indirectos no se identifican directamente con un producto específico."
      ],
      [
        "Al estudiar directo e indirecto, ¿qué aspecto clave debes identificar?",
        [
          "Su dependencia exclusiva de factores externos macroeconómicos.",
          "Reconoce la diferencia de asignación de costos.",
          "Que no requiere ningún tipo de control ni registro documental."
        ],
        1,
        "Recuerda: La materia prima directa y la mano de obra directa se relacionan directamente con la fabricación; los gastos indirectos no se identifican directamente con un producto específico."
      ],
      [
        "¿Qué opción expresa la idea central desarrollada en esta lección?",
        [
          "Los registros se realizan sin seguir ningún orden lógico ni cronológico.",
          "La materia prima directa y la mano de obra directa se relacionan directamente con la fabricación; los gastos indirectos no se identifican directamente con un producto específico.",
          "Los estados financieros pierden toda validez legal al aplicarlo."
        ],
        1,
        "Recuerda: La materia prima directa y la mano de obra directa se relacionan directamente con la fabricación; los gastos indirectos no se identifican directamente con un producto específico."
      ],
      [
        "De acuerdo con los fundamentos estudiados, ¿cómo opera directo e indirecto?",
        [
          "Lo directo se asigna sin ambigüedad; lo indirecto requiere bases de distribución.",
          "Generando automáticamente pasivos contingentes para la entidad.",
          "Eliminando la necesidad de libros diario y mayor."
        ],
        0,
        "Recuerda: La materia prima directa y la mano de obra directa se relacionan directamente con la fabricación; los gastos indirectos no se identifican directamente con un producto específico."
      ],
      [
        "¿Cuál de las siguientes opciones ejemplifica correctamente este concepto?",
        [
          "Modificar estados financieros sin soporte documental.",
          "Asignar la madera a la mesa (directo) frente al pegamento general o luz de planta (indirecto).",
          "Omitir el registro de operaciones mercantiles cotidianas."
        ],
        1,
        "Recuerda: La materia prima directa y la mano de obra directa se relacionan directamente con la fabricación; los gastos indirectos no se identifican directamente con un producto específico."
      ],
      [
        "¿Qué descripción corresponde al principio fundamental explicado en directo e indirecto?",
        [
          "La supresión total de controles internos en la empresa.",
          "La aplicación de métodos empíricos sin base técnica.",
          "La materia prima directa y la mano de obra directa se relacionan directamente con la fabricación; los gastos indirectos no se identifican directamente con un producto específico."
        ],
        2,
        "Recuerda: La materia prima directa y la mano de obra directa se relacionan directamente con la fabricación; los gastos indirectos no se identifican directamente con un producto específico."
      ],
      [
        "Selecciona la afirmación que resume de mejor manera lo aprendido sobre directo e indirecto:",
        [
          "Es un procedimiento opcional que las empresas pueden ignorar.",
          "La materia prima directa y la mano de obra directa se relacionan directamente con la fabricación; los gastos indirectos no se identifican directamente con un producto específico.",
          "Distorsiona la igualdad numérica de los registros contables."
        ],
        1,
        "Recuerda: La materia prima directa y la mano de obra directa se relacionan directamente con la fabricación; los gastos indirectos no se identifican directamente con un producto específico."
      ]
    ]
  },
  {
    "id": 47,
    "world": 5,
    "level": 7,
    "title": "Identificar materia prima",
    "subtitle": "Identifica la contabilidad de costos y los elementos del costo de producción.",
    "sections": [
      [
        "Definición de la tarjeta",
        "La materia prima directa corresponde al material principal utilizado para fabricar un producto."
      ],
      [
        "Explicación paso a paso",
        "Preguntarse qué materia constituye la esencia física del artículo."
      ],
      [
        "Ejemplo práctico",
        "Reconocer el acero en la fabricación de herramientas."
      ],
      [
        "Cómo reconocer el concepto",
        "Busca la identificación de insumos directos."
      ],
      [
        "Lo que debes recordar",
        "Identificar materia prima: La materia prima directa corresponde al material principal utilizado para fabricar un producto."
      ]
    ],
    "summary": "Identificar materia prima. La materia prima directa corresponde al material principal utilizado para fabricar un producto.",
    "questions": [
      [
        "¿Cuál es la definición correcta de identificar materia prima?",
        [
          "Es un concepto ajeno a la gestión contable y financiera de la entidad.",
          "La materia prima directa corresponde al material principal utilizado para fabricar un producto.",
          "Corresponde exclusivamente a un registro temporal sin validez formal."
        ],
        1,
        "Recuerda: La materia prima directa corresponde al material principal utilizado para fabricar un producto."
      ],
      [
        "Según esta lección, ¿cómo se entiende el concepto de identificar materia prima?",
        [
          "Preguntarse qué materia constituye la esencia física del artículo.",
          "Se calcula restando todos los pasivos circulantes entre sí.",
          "Es un informe exclusivo para auditorías externas gubernamentales."
        ],
        0,
        "Recuerda: La materia prima directa corresponde al material principal utilizado para fabricar un producto."
      ],
      [
        "¿Qué enunciado describe correctamente la aplicación práctica de identificar materia prima?",
        [
          "No tiene aplicación directa en las operaciones cotidianas de una empresa.",
          "Reconocer el acero en la fabricación de herramientas.",
          "Solo se aplica al cierre de operaciones fiscales anuales obligatorias."
        ],
        1,
        "Recuerda: La materia prima directa corresponde al material principal utilizado para fabricar un producto."
      ],
      [
        "¿Cuál afirmación coincide exactamente con lo explicado sobre identificar materia prima?",
        [
          "Se relaciona directamente con la premisa: La materia prima directa corresponde al material principal utilizado para fabricar un producto.",
          "Modifica de forma arbitraria la ecuación contable fundamental.",
          "Representa un pasivo exigible a corto plazo."
        ],
        0,
        "Recuerda: La materia prima directa corresponde al material principal utilizado para fabricar un producto."
      ],
      [
        "Al estudiar identificar materia prima, ¿qué aspecto clave debes identificar?",
        [
          "Su dependencia exclusiva de factores externos macroeconómicos.",
          "Busca la identificación de insumos directos.",
          "Que no requiere ningún tipo de control ni registro documental."
        ],
        1,
        "Recuerda: La materia prima directa corresponde al material principal utilizado para fabricar un producto."
      ],
      [
        "¿Qué opción expresa la idea central desarrollada en esta lección?",
        [
          "Los registros se realizan sin seguir ningún orden lógico ni cronológico.",
          "La materia prima directa corresponde al material principal utilizado para fabricar un producto.",
          "Los estados financieros pierden toda validez legal al aplicarlo."
        ],
        1,
        "Recuerda: La materia prima directa corresponde al material principal utilizado para fabricar un producto."
      ],
      [
        "De acuerdo con los fundamentos estudiados, ¿cómo opera identificar materia prima?",
        [
          "Preguntarse qué materia constituye la esencia física del artículo.",
          "Generando automáticamente pasivos contingentes para la entidad.",
          "Eliminando la necesidad de libros diario y mayor."
        ],
        0,
        "Recuerda: La materia prima directa corresponde al material principal utilizado para fabricar un producto."
      ],
      [
        "¿Cuál de las siguientes opciones ejemplifica correctamente este concepto?",
        [
          "Modificar estados financieros sin soporte documental.",
          "Reconocer el acero en la fabricación de herramientas.",
          "Omitir el registro de operaciones mercantiles cotidianas."
        ],
        1,
        "Recuerda: La materia prima directa corresponde al material principal utilizado para fabricar un producto."
      ],
      [
        "¿Qué descripción corresponde al principio fundamental explicado en identificar materia prima?",
        [
          "La supresión total de controles internos en la empresa.",
          "La aplicación de métodos empíricos sin base técnica.",
          "La materia prima directa corresponde al material principal utilizado para fabricar un producto."
        ],
        2,
        "Recuerda: La materia prima directa corresponde al material principal utilizado para fabricar un producto."
      ],
      [
        "Selecciona la afirmación que resume de mejor manera lo aprendido sobre identificar materia prima:",
        [
          "Es un procedimiento opcional que las empresas pueden ignorar.",
          "La materia prima directa corresponde al material principal utilizado para fabricar un producto.",
          "Distorsiona la igualdad numérica de los registros contables."
        ],
        1,
        "Recuerda: La materia prima directa corresponde al material principal utilizado para fabricar un producto."
      ]
    ]
  },
  {
    "id": 48,
    "world": 5,
    "level": 8,
    "title": "Identificar mano de obra",
    "subtitle": "Identifica la contabilidad de costos y los elementos del costo de producción.",
    "sections": [
      [
        "Definición de la tarjeta",
        "La mano de obra directa es el trabajo de los empleados que participan directamente en la fabricación."
      ],
      [
        "Explicación paso a paso",
        "Distinguir al personal de planta operativo del personal administrativo de oficinas."
      ],
      [
        "Ejemplo práctico",
        "Identificar al costurero de una línea de ensamblaje textil."
      ],
      [
        "Cómo reconocer el concepto",
        "Reconoce el trabajo directo productivo."
      ],
      [
        "Lo que debes recordar",
        "Identificar mano de obra: La mano de obra directa es el trabajo de los empleados que participan directamente en la fabricación."
      ]
    ],
    "summary": "Identificar mano de obra. La mano de obra directa es el trabajo de los empleados que participan directamente en la fabricación.",
    "questions": [
      [
        "¿Cuál es la definición correcta de identificar mano de obra?",
        [
          "Es un concepto ajeno a la gestión contable y financiera de la entidad.",
          "La mano de obra directa es el trabajo de los empleados que participan directamente en la fabricación.",
          "Corresponde exclusivamente a un registro temporal sin validez formal."
        ],
        1,
        "Recuerda: La mano de obra directa es el trabajo de los empleados que participan directamente en la fabricación."
      ],
      [
        "Según esta lección, ¿cómo se entiende el concepto de identificar mano de obra?",
        [
          "Distinguir al personal de planta operativo del personal administrativo de oficinas.",
          "Se calcula restando todos los pasivos circulantes entre sí.",
          "Es un informe exclusivo para auditorías externas gubernamentales."
        ],
        0,
        "Recuerda: La mano de obra directa es el trabajo de los empleados que participan directamente en la fabricación."
      ],
      [
        "¿Qué enunciado describe correctamente la aplicación práctica de identificar mano de obra?",
        [
          "No tiene aplicación directa en las operaciones cotidianas de una empresa.",
          "Identificar al costurero de una línea de ensamblaje textil.",
          "Solo se aplica al cierre de operaciones fiscales anuales obligatorias."
        ],
        1,
        "Recuerda: La mano de obra directa es el trabajo de los empleados que participan directamente en la fabricación."
      ],
      [
        "¿Cuál afirmación coincide exactamente con lo explicado sobre identificar mano de obra?",
        [
          "Se relaciona directamente con la premisa: La mano de obra directa es el trabajo de los empleados que participan directamente en la fabricación.",
          "Modifica de forma arbitraria la ecuación contable fundamental.",
          "Representa un pasivo exigible a corto plazo."
        ],
        0,
        "Recuerda: La mano de obra directa es el trabajo de los empleados que participan directamente en la fabricación."
      ],
      [
        "Al estudiar identificar mano de obra, ¿qué aspecto clave debes identificar?",
        [
          "Su dependencia exclusiva de factores externos macroeconómicos.",
          "Reconoce el trabajo directo productivo.",
          "Que no requiere ningún tipo de control ni registro documental."
        ],
        1,
        "Recuerda: La mano de obra directa es el trabajo de los empleados que participan directamente en la fabricación."
      ],
      [
        "¿Qué opción expresa la idea central desarrollada en esta lección?",
        [
          "Los registros se realizan sin seguir ningún orden lógico ni cronológico.",
          "La mano de obra directa es el trabajo de los empleados que participan directamente en la fabricación.",
          "Los estados financieros pierden toda validez legal al aplicarlo."
        ],
        1,
        "Recuerda: La mano de obra directa es el trabajo de los empleados que participan directamente en la fabricación."
      ],
      [
        "De acuerdo con los fundamentos estudiados, ¿cómo opera identificar mano de obra?",
        [
          "Distinguir al personal de planta operativo del personal administrativo de oficinas.",
          "Generando automáticamente pasivos contingentes para la entidad.",
          "Eliminando la necesidad de libros diario y mayor."
        ],
        0,
        "Recuerda: La mano de obra directa es el trabajo de los empleados que participan directamente en la fabricación."
      ],
      [
        "¿Cuál de las siguientes opciones ejemplifica correctamente este concepto?",
        [
          "Modificar estados financieros sin soporte documental.",
          "Identificar al costurero de una línea de ensamblaje textil.",
          "Omitir el registro de operaciones mercantiles cotidianas."
        ],
        1,
        "Recuerda: La mano de obra directa es el trabajo de los empleados que participan directamente en la fabricación."
      ],
      [
        "¿Qué descripción corresponde al principio fundamental explicado en identificar mano de obra?",
        [
          "La supresión total de controles internos en la empresa.",
          "La aplicación de métodos empíricos sin base técnica.",
          "La mano de obra directa es el trabajo de los empleados que participan directamente en la fabricación."
        ],
        2,
        "Recuerda: La mano de obra directa es el trabajo de los empleados que participan directamente en la fabricación."
      ],
      [
        "Selecciona la afirmación que resume de mejor manera lo aprendido sobre identificar mano de obra:",
        [
          "Es un procedimiento opcional que las empresas pueden ignorar.",
          "La mano de obra directa es el trabajo de los empleados que participan directamente en la fabricación.",
          "Distorsiona la igualdad numérica de los registros contables."
        ],
        1,
        "Recuerda: La mano de obra directa es el trabajo de los empleados que participan directamente en la fabricación."
      ]
    ]
  },
  {
    "id": 49,
    "world": 5,
    "level": 9,
    "title": "Identificar costos indirectos",
    "subtitle": "Identifica la contabilidad de costos y los elementos del costo de producción.",
    "sections": [
      [
        "Definición de la tarjeta",
        "Los gastos indirectos de fabricación son costos de producción que no se identifican directamente con un producto específico."
      ],
      [
        "Explicación paso a paso",
        "Ubicar gastos de fábrica que benefician a toda la producción globalmente."
      ],
      [
        "Ejemplo práctico",
        "El alquiler del edificio de la planta de producción."
      ],
      [
        "Cómo reconocer el concepto",
        "Busca costos fabriles generales no directos."
      ],
      [
        "Lo que debes recordar",
        "Identificar costos indirectos: Los gastos indirectos de fabricación son costos de producción que no se identifican directamente con un producto específico."
      ]
    ],
    "summary": "Identificar costos indirectos. Los gastos indirectos de fabricación son costos de producción que no se identifican directamente con un producto específico.",
    "questions": [
      [
        "¿Cuál es la definición correcta de identificar costos indirectos?",
        [
          "Es un concepto ajeno a la gestión contable y financiera de la entidad.",
          "Los gastos indirectos de fabricación son costos de producción que no se identifican directamente con un producto específico.",
          "Corresponde exclusivamente a un registro temporal sin validez formal."
        ],
        1,
        "Recuerda: Los gastos indirectos de fabricación son costos de producción que no se identifican directamente con un producto específico."
      ],
      [
        "Según esta lección, ¿cómo se entiende el concepto de identificar costos indirectos?",
        [
          "Ubicar gastos de fábrica que benefician a toda la producción globalmente.",
          "Se calcula restando todos los pasivos circulantes entre sí.",
          "Es un informe exclusivo para auditorías externas gubernamentales."
        ],
        0,
        "Recuerda: Los gastos indirectos de fabricación son costos de producción que no se identifican directamente con un producto específico."
      ],
      [
        "¿Qué enunciado describe correctamente la aplicación práctica de identificar costos indirectos?",
        [
          "No tiene aplicación directa en las operaciones cotidianas de una empresa.",
          "El alquiler del edificio de la planta de producción.",
          "Solo se aplica al cierre de operaciones fiscales anuales obligatorias."
        ],
        1,
        "Recuerda: Los gastos indirectos de fabricación son costos de producción que no se identifican directamente con un producto específico."
      ],
      [
        "¿Cuál afirmación coincide exactamente con lo explicado sobre identificar costos indirectos?",
        [
          "Se relaciona directamente con la premisa: Los gastos indirectos de fabricación son costos de producción que no se identifican directamente con un producto específico.",
          "Modifica de forma arbitraria la ecuación contable fundamental.",
          "Representa un pasivo exigible a corto plazo."
        ],
        0,
        "Recuerda: Los gastos indirectos de fabricación son costos de producción que no se identifican directamente con un producto específico."
      ],
      [
        "Al estudiar identificar costos indirectos, ¿qué aspecto clave debes identificar?",
        [
          "Su dependencia exclusiva de factores externos macroeconómicos.",
          "Busca costos fabriles generales no directos.",
          "Que no requiere ningún tipo de control ni registro documental."
        ],
        1,
        "Recuerda: Los gastos indirectos de fabricación son costos de producción que no se identifican directamente con un producto específico."
      ],
      [
        "¿Qué opción expresa la idea central desarrollada en esta lección?",
        [
          "Los registros se realizan sin seguir ningún orden lógico ni cronológico.",
          "Los gastos indirectos de fabricación son costos de producción que no se identifican directamente con un producto específico.",
          "Los estados financieros pierden toda validez legal al aplicarlo."
        ],
        1,
        "Recuerda: Los gastos indirectos de fabricación son costos de producción que no se identifican directamente con un producto específico."
      ],
      [
        "De acuerdo con los fundamentos estudiados, ¿cómo opera identificar costos indirectos?",
        [
          "Ubicar gastos de fábrica que benefician a toda la producción globalmente.",
          "Generando automáticamente pasivos contingentes para la entidad.",
          "Eliminando la necesidad de libros diario y mayor."
        ],
        0,
        "Recuerda: Los gastos indirectos de fabricación son costos de producción que no se identifican directamente con un producto específico."
      ],
      [
        "¿Cuál de las siguientes opciones ejemplifica correctamente este concepto?",
        [
          "Modificar estados financieros sin soporte documental.",
          "El alquiler del edificio de la planta de producción.",
          "Omitir el registro de operaciones mercantiles cotidianas."
        ],
        1,
        "Recuerda: Los gastos indirectos de fabricación son costos de producción que no se identifican directamente con un producto específico."
      ],
      [
        "¿Qué descripción corresponde al principio fundamental explicado en identificar costos indirectos?",
        [
          "La supresión total de controles internos en la empresa.",
          "La aplicación de métodos empíricos sin base técnica.",
          "Los gastos indirectos de fabricación son costos de producción que no se identifican directamente con un producto específico."
        ],
        2,
        "Recuerda: Los gastos indirectos de fabricación son costos de producción que no se identifican directamente con un producto específico."
      ],
      [
        "Selecciona la afirmación que resume de mejor manera lo aprendido sobre identificar costos indirectos:",
        [
          "Es un procedimiento opcional que las empresas pueden ignorar.",
          "Los gastos indirectos de fabricación son costos de producción que no se identifican directamente con un producto específico.",
          "Distorsiona la igualdad numérica de los registros contables."
        ],
        1,
        "Recuerda: Los gastos indirectos de fabricación son costos de producción que no se identifican directamente con un producto específico."
      ]
    ]
  },
  {
    "id": 50,
    "world": 5,
    "level": 10,
    "title": "Repaso de los elementos del costo",
    "subtitle": "Identifica la contabilidad de costos y los elementos del costo de producción.",
    "sections": [
      [
        "Definición de la tarjeta",
        "El costo de producción se compone de materia prima directa, mano de obra directa y gastos indirectos de fabricación."
      ],
      [
        "Explicación paso a paso",
        "Sintetiza la base fundamental de la contabilidad de costos industrial."
      ],
      [
        "Ejemplo práctico",
        "Clasificar una erogación fabril en uno de los tres elementos del costo."
      ],
      [
        "Cómo reconocer el concepto",
        "Reconoce la estructura integral de costos."
      ],
      [
        "Lo que debes recordar",
        "Repaso de los elementos del costo: El costo de producción se compone de materia prima directa, mano de obra directa y gastos indirectos de fabricación."
      ]
    ],
    "summary": "Repaso de los elementos del costo. El costo de producción se compone de materia prima directa, mano de obra directa y gastos indirectos de fabricación.",
    "questions": [
      [
        "¿Cuál es la definición correcta de repaso de los elementos del costo?",
        [
          "Es un concepto ajeno a la gestión contable y financiera de la entidad.",
          "El costo de producción se compone de materia prima directa, mano de obra directa y gastos indirectos de fabricación.",
          "Corresponde exclusivamente a un registro temporal sin validez formal."
        ],
        1,
        "Recuerda: El costo de producción se compone de materia prima directa, mano de obra directa y gastos indirectos de fabricación."
      ],
      [
        "Según esta lección, ¿cómo se entiende el concepto de repaso de los elementos del costo?",
        [
          "Sintetiza la base fundamental de la contabilidad de costos industrial.",
          "Se calcula restando todos los pasivos circulantes entre sí.",
          "Es un informe exclusivo para auditorías externas gubernamentales."
        ],
        0,
        "Recuerda: El costo de producción se compone de materia prima directa, mano de obra directa y gastos indirectos de fabricación."
      ],
      [
        "¿Qué enunciado describe correctamente la aplicación práctica de repaso de los elementos del costo?",
        [
          "No tiene aplicación directa en las operaciones cotidianas de una empresa.",
          "Clasificar una erogación fabril en uno de los tres elementos del costo.",
          "Solo se aplica al cierre de operaciones fiscales anuales obligatorias."
        ],
        1,
        "Recuerda: El costo de producción se compone de materia prima directa, mano de obra directa y gastos indirectos de fabricación."
      ],
      [
        "¿Cuál afirmación coincide exactamente con lo explicado sobre repaso de los elementos del costo?",
        [
          "Se relaciona directamente con la premisa: El costo de producción se compone de materia prima directa, mano de obra directa y gastos indirectos de fabricación.",
          "Modifica de forma arbitraria la ecuación contable fundamental.",
          "Representa un pasivo exigible a corto plazo."
        ],
        0,
        "Recuerda: El costo de producción se compone de materia prima directa, mano de obra directa y gastos indirectos de fabricación."
      ],
      [
        "Al estudiar repaso de los elementos del costo, ¿qué aspecto clave debes identificar?",
        [
          "Su dependencia exclusiva de factores externos macroeconómicos.",
          "Reconoce la estructura integral de costos.",
          "Que no requiere ningún tipo de control ni registro documental."
        ],
        1,
        "Recuerda: El costo de producción se compone de materia prima directa, mano de obra directa y gastos indirectos de fabricación."
      ],
      [
        "¿Qué opción expresa la idea central desarrollada en esta lección?",
        [
          "Los registros se realizan sin seguir ningún orden lógico ni cronológico.",
          "El costo de producción se compone de materia prima directa, mano de obra directa y gastos indirectos de fabricación.",
          "Los estados financieros pierden toda validez legal al aplicarlo."
        ],
        1,
        "Recuerda: El costo de producción se compone de materia prima directa, mano de obra directa y gastos indirectos de fabricación."
      ],
      [
        "De acuerdo con los fundamentos estudiados, ¿cómo opera repaso de los elementos del costo?",
        [
          "Sintetiza la base fundamental de la contabilidad de costos industrial.",
          "Generando automáticamente pasivos contingentes para la entidad.",
          "Eliminando la necesidad de libros diario y mayor."
        ],
        0,
        "Recuerda: El costo de producción se compone de materia prima directa, mano de obra directa y gastos indirectos de fabricación."
      ],
      [
        "¿Cuál de las siguientes opciones ejemplifica correctamente este concepto?",
        [
          "Modificar estados financieros sin soporte documental.",
          "Clasificar una erogación fabril en uno de los tres elementos del costo.",
          "Omitir el registro de operaciones mercantiles cotidianas."
        ],
        1,
        "Recuerda: El costo de producción se compone de materia prima directa, mano de obra directa y gastos indirectos de fabricación."
      ],
      [
        "¿Qué descripción corresponde al principio fundamental explicado en repaso de los elementos del costo?",
        [
          "La supresión total de controles internos en la empresa.",
          "La aplicación de métodos empíricos sin base técnica.",
          "El costo de producción se compone de materia prima directa, mano de obra directa y gastos indirectos de fabricación."
        ],
        2,
        "Recuerda: El costo de producción se compone de materia prima directa, mano de obra directa y gastos indirectos de fabricación."
      ],
      [
        "Selecciona la afirmación que resume de mejor manera lo aprendido sobre repaso de los elementos del costo:",
        [
          "Es un procedimiento opcional que las empresas pueden ignorar.",
          "El costo de producción se compone de materia prima directa, mano de obra directa y gastos indirectos de fabricación.",
          "Distorsiona la igualdad numérica de los registros contables."
        ],
        1,
        "Recuerda: El costo de producción se compone de materia prima directa, mano de obra directa y gastos indirectos de fabricación."
      ]
    ]
  },
  {
    "id": 51,
    "world": 6,
    "level": 1,
    "title": "¿Qué es un inventario?",
    "subtitle": "Aprende qué es un inventario y distingue materia prima, productos en proceso y terminados.",
    "sections": [
      [
        "Definición de la tarjeta",
        "Es el conjunto de bienes que una empresa posee para vender o utilizar en sus operaciones."
      ],
      [
        "Explicación paso a paso",
        "Representa un activo corriente fundamental para la continuidad comercial."
      ],
      [
        "Ejemplo práctico",
        "Mantener mercancías y suministros en almacén para la actividad económica."
      ],
      [
        "Cómo reconocer el concepto",
        "Identifica el concepto de inventario operativo."
      ],
      [
        "Lo que debes recordar",
        "¿Qué es un inventario?: Es el conjunto de bienes que una empresa posee para vender o utilizar en sus operaciones."
      ]
    ],
    "summary": "¿Qué es un inventario?. Es el conjunto de bienes que una empresa posee para vender o utilizar en sus operaciones.",
    "questions": [
      [
        "¿Cuál es la definición correcta de ¿qué es un inventario??",
        [
          "Es un concepto ajeno a la gestión contable y financiera de la entidad.",
          "Es el conjunto de bienes que una empresa posee para vender o utilizar en sus operaciones.",
          "Corresponde exclusivamente a un registro temporal sin validez formal."
        ],
        1,
        "Recuerda: Es el conjunto de bienes que una empresa posee para vender o utilizar en sus operaciones."
      ],
      [
        "Según esta lección, ¿cómo se entiende el concepto de ¿qué es un inventario??",
        [
          "Representa un activo corriente fundamental para la continuidad comercial.",
          "Se calcula restando todos los pasivos circulantes entre sí.",
          "Es un informe exclusivo para auditorías externas gubernamentales."
        ],
        0,
        "Recuerda: Es el conjunto de bienes que una empresa posee para vender o utilizar en sus operaciones."
      ],
      [
        "¿Qué enunciado describe correctamente la aplicación práctica de ¿qué es un inventario??",
        [
          "No tiene aplicación directa en las operaciones cotidianas de una empresa.",
          "Mantener mercancías y suministros en almacén para la actividad económica.",
          "Solo se aplica al cierre de operaciones fiscales anuales obligatorias."
        ],
        1,
        "Recuerda: Es el conjunto de bienes que una empresa posee para vender o utilizar en sus operaciones."
      ],
      [
        "¿Cuál afirmación coincide exactamente con lo explicado sobre ¿qué es un inventario??",
        [
          "Se relaciona directamente con la premisa: Es el conjunto de bienes que una empresa posee para vender o utilizar en sus operaciones.",
          "Modifica de forma arbitraria la ecuación contable fundamental.",
          "Representa un pasivo exigible a corto plazo."
        ],
        0,
        "Recuerda: Es el conjunto de bienes que una empresa posee para vender o utilizar en sus operaciones."
      ],
      [
        "Al estudiar ¿qué es un inventario?, ¿qué aspecto clave debes identificar?",
        [
          "Su dependencia exclusiva de factores externos macroeconómicos.",
          "Identifica el concepto de inventario operativo.",
          "Que no requiere ningún tipo de control ni registro documental."
        ],
        1,
        "Recuerda: Es el conjunto de bienes que una empresa posee para vender o utilizar en sus operaciones."
      ],
      [
        "¿Qué opción expresa la idea central desarrollada en esta lección?",
        [
          "Los registros se realizan sin seguir ningún orden lógico ni cronológico.",
          "Es el conjunto de bienes que una empresa posee para vender o utilizar en sus operaciones.",
          "Los estados financieros pierden toda validez legal al aplicarlo."
        ],
        1,
        "Recuerda: Es el conjunto de bienes que una empresa posee para vender o utilizar en sus operaciones."
      ],
      [
        "De acuerdo con los fundamentos estudiados, ¿cómo opera ¿qué es un inventario??",
        [
          "Representa un activo corriente fundamental para la continuidad comercial.",
          "Generando automáticamente pasivos contingentes para la entidad.",
          "Eliminando la necesidad de libros diario y mayor."
        ],
        0,
        "Recuerda: Es el conjunto de bienes que una empresa posee para vender o utilizar en sus operaciones."
      ],
      [
        "¿Cuál de las siguientes opciones ejemplifica correctamente este concepto?",
        [
          "Modificar estados financieros sin soporte documental.",
          "Mantener mercancías y suministros en almacén para la actividad económica.",
          "Omitir el registro de operaciones mercantiles cotidianas."
        ],
        1,
        "Recuerda: Es el conjunto de bienes que una empresa posee para vender o utilizar en sus operaciones."
      ],
      [
        "¿Qué descripción corresponde al principio fundamental explicado en ¿qué es un inventario??",
        [
          "La supresión total de controles internos en la empresa.",
          "La aplicación de métodos empíricos sin base técnica.",
          "Es el conjunto de bienes que una empresa posee para vender o utilizar en sus operaciones."
        ],
        2,
        "Recuerda: Es el conjunto de bienes que una empresa posee para vender o utilizar en sus operaciones."
      ],
      [
        "Selecciona la afirmación que resume de mejor manera lo aprendido sobre ¿qué es un inventario?:",
        [
          "Es un procedimiento opcional que las empresas pueden ignorar.",
          "Es el conjunto de bienes que una empresa posee para vender o utilizar en sus operaciones.",
          "Distorsiona la igualdad numérica de los registros contables."
        ],
        1,
        "Recuerda: Es el conjunto de bienes que una empresa posee para vender o utilizar en sus operaciones."
      ]
    ]
  },
  {
    "id": 52,
    "world": 6,
    "level": 2,
    "title": "Inventario de materia prima",
    "subtitle": "Aprende qué es un inventario y distingue materia prima, productos en proceso y terminados.",
    "sections": [
      [
        "Definición de la tarjeta",
        "Son los materiales que se utilizan para elaborar productos."
      ],
      [
        "Explicación paso a paso",
        "Constituye la fase inicial del ciclo de inventarios en empresas manufactureras."
      ],
      [
        "Ejemplo práctico",
        "Almacenar rollos de cuero antes de iniciar el corte de zapatos."
      ],
      [
        "Cómo reconocer el concepto",
        "Reconoce el inventario de insumos iniciales."
      ],
      [
        "Lo que debes recordar",
        "Inventario de materia prima: Son los materiales que se utilizan para elaborar productos."
      ]
    ],
    "summary": "Inventario de materia prima. Son los materiales que se utilizan para elaborar productos.",
    "questions": [
      [
        "¿Cuál es la definición correcta de inventario de materia prima?",
        [
          "Es un concepto ajeno a la gestión contable y financiera de la entidad.",
          "Son los materiales que se utilizan para elaborar productos.",
          "Corresponde exclusivamente a un registro temporal sin validez formal."
        ],
        1,
        "Recuerda: Son los materiales que se utilizan para elaborar productos."
      ],
      [
        "Según esta lección, ¿cómo se entiende el concepto de inventario de materia prima?",
        [
          "Constituye la fase inicial del ciclo de inventarios en empresas manufactureras.",
          "Se calcula restando todos los pasivos circulantes entre sí.",
          "Es un informe exclusivo para auditorías externas gubernamentales."
        ],
        0,
        "Recuerda: Son los materiales que se utilizan para elaborar productos."
      ],
      [
        "¿Qué enunciado describe correctamente la aplicación práctica de inventario de materia prima?",
        [
          "No tiene aplicación directa en las operaciones cotidianas de una empresa.",
          "Almacenar rollos de cuero antes de iniciar el corte de zapatos.",
          "Solo se aplica al cierre de operaciones fiscales anuales obligatorias."
        ],
        1,
        "Recuerda: Son los materiales que se utilizan para elaborar productos."
      ],
      [
        "¿Cuál afirmación coincide exactamente con lo explicado sobre inventario de materia prima?",
        [
          "Se relaciona directamente con la premisa: Son los materiales que se utilizan para elaborar productos.",
          "Modifica de forma arbitraria la ecuación contable fundamental.",
          "Representa un pasivo exigible a corto plazo."
        ],
        0,
        "Recuerda: Son los materiales que se utilizan para elaborar productos."
      ],
      [
        "Al estudiar inventario de materia prima, ¿qué aspecto clave debes identificar?",
        [
          "Su dependencia exclusiva de factores externos macroeconómicos.",
          "Reconoce el inventario de insumos iniciales.",
          "Que no requiere ningún tipo de control ni registro documental."
        ],
        1,
        "Recuerda: Son los materiales que se utilizan para elaborar productos."
      ],
      [
        "¿Qué opción expresa la idea central desarrollada en esta lección?",
        [
          "Los registros se realizan sin seguir ningún orden lógico ni cronológico.",
          "Son los materiales que se utilizan para elaborar productos.",
          "Los estados financieros pierden toda validez legal al aplicarlo."
        ],
        1,
        "Recuerda: Son los materiales que se utilizan para elaborar productos."
      ],
      [
        "De acuerdo con los fundamentos estudiados, ¿cómo opera inventario de materia prima?",
        [
          "Constituye la fase inicial del ciclo de inventarios en empresas manufactureras.",
          "Generando automáticamente pasivos contingentes para la entidad.",
          "Eliminando la necesidad de libros diario y mayor."
        ],
        0,
        "Recuerda: Son los materiales que se utilizan para elaborar productos."
      ],
      [
        "¿Cuál de las siguientes opciones ejemplifica correctamente este concepto?",
        [
          "Modificar estados financieros sin soporte documental.",
          "Almacenar rollos de cuero antes de iniciar el corte de zapatos.",
          "Omitir el registro de operaciones mercantiles cotidianas."
        ],
        1,
        "Recuerda: Son los materiales que se utilizan para elaborar productos."
      ],
      [
        "¿Qué descripción corresponde al principio fundamental explicado en inventario de materia prima?",
        [
          "La supresión total de controles internos en la empresa.",
          "La aplicación de métodos empíricos sin base técnica.",
          "Son los materiales que se utilizan para elaborar productos."
        ],
        2,
        "Recuerda: Son los materiales que se utilizan para elaborar productos."
      ],
      [
        "Selecciona la afirmación que resume de mejor manera lo aprendido sobre inventario de materia prima:",
        [
          "Es un procedimiento opcional que las empresas pueden ignorar.",
          "Son los materiales que se utilizan para elaborar productos.",
          "Distorsiona la igualdad numérica de los registros contables."
        ],
        1,
        "Recuerda: Son los materiales que se utilizan para elaborar productos."
      ]
    ]
  },
  {
    "id": 53,
    "world": 6,
    "level": 3,
    "title": "Inventario de productos en proceso",
    "subtitle": "Aprende qué es un inventario y distingue materia prima, productos en proceso y terminados.",
    "sections": [
      [
        "Definición de la tarjeta",
        "Son los productos que todavía no han terminado su fabricación."
      ],
      [
        "Explicación paso a paso",
        "Acumulan costos de materiales, mano de obra e indirectos a mitad del proceso."
      ],
      [
        "Ejemplo práctico",
        "Muebles ensamblados que aún no tienen pintura ni acabado final."
      ],
      [
        "Cómo reconocer el concepto",
        "Identifica bienes en fase de transformación."
      ],
      [
        "Lo que debes recordar",
        "Inventario de productos en proceso: Son los productos que todavía no han terminado su fabricación."
      ]
    ],
    "summary": "Inventario de productos en proceso. Son los productos que todavía no han terminado su fabricación.",
    "questions": [
      [
        "¿Cuál es la definición correcta de inventario de productos en proceso?",
        [
          "Es un concepto ajeno a la gestión contable y financiera de la entidad.",
          "Son los productos que todavía no han terminado su fabricación.",
          "Corresponde exclusivamente a un registro temporal sin validez formal."
        ],
        1,
        "Recuerda: Son los productos que todavía no han terminado su fabricación."
      ],
      [
        "Según esta lección, ¿cómo se entiende el concepto de inventario de productos en proceso?",
        [
          "Acumulan costos de materiales, mano de obra e indirectos a mitad del proceso.",
          "Se calcula restando todos los pasivos circulantes entre sí.",
          "Es un informe exclusivo para auditorías externas gubernamentales."
        ],
        0,
        "Recuerda: Son los productos que todavía no han terminado su fabricación."
      ],
      [
        "¿Qué enunciado describe correctamente la aplicación práctica de inventario de productos en proceso?",
        [
          "No tiene aplicación directa en las operaciones cotidianas de una empresa.",
          "Muebles ensamblados que aún no tienen pintura ni acabado final.",
          "Solo se aplica al cierre de operaciones fiscales anuales obligatorias."
        ],
        1,
        "Recuerda: Son los productos que todavía no han terminado su fabricación."
      ],
      [
        "¿Cuál afirmación coincide exactamente con lo explicado sobre inventario de productos en proceso?",
        [
          "Se relaciona directamente con la premisa: Son los productos que todavía no han terminado su fabricación.",
          "Modifica de forma arbitraria la ecuación contable fundamental.",
          "Representa un pasivo exigible a corto plazo."
        ],
        0,
        "Recuerda: Son los productos que todavía no han terminado su fabricación."
      ],
      [
        "Al estudiar inventario de productos en proceso, ¿qué aspecto clave debes identificar?",
        [
          "Su dependencia exclusiva de factores externos macroeconómicos.",
          "Identifica bienes en fase de transformación.",
          "Que no requiere ningún tipo de control ni registro documental."
        ],
        1,
        "Recuerda: Son los productos que todavía no han terminado su fabricación."
      ],
      [
        "¿Qué opción expresa la idea central desarrollada en esta lección?",
        [
          "Los registros se realizan sin seguir ningún orden lógico ni cronológico.",
          "Son los productos que todavía no han terminado su fabricación.",
          "Los estados financieros pierden toda validez legal al aplicarlo."
        ],
        1,
        "Recuerda: Son los productos que todavía no han terminado su fabricación."
      ],
      [
        "De acuerdo con los fundamentos estudiados, ¿cómo opera inventario de productos en proceso?",
        [
          "Acumulan costos de materiales, mano de obra e indirectos a mitad del proceso.",
          "Generando automáticamente pasivos contingentes para la entidad.",
          "Eliminando la necesidad de libros diario y mayor."
        ],
        0,
        "Recuerda: Son los productos que todavía no han terminado su fabricación."
      ],
      [
        "¿Cuál de las siguientes opciones ejemplifica correctamente este concepto?",
        [
          "Modificar estados financieros sin soporte documental.",
          "Muebles ensamblados que aún no tienen pintura ni acabado final.",
          "Omitir el registro de operaciones mercantiles cotidianas."
        ],
        1,
        "Recuerda: Son los productos que todavía no han terminado su fabricación."
      ],
      [
        "¿Qué descripción corresponde al principio fundamental explicado en inventario de productos en proceso?",
        [
          "La supresión total de controles internos en la empresa.",
          "La aplicación de métodos empíricos sin base técnica.",
          "Son los productos que todavía no han terminado su fabricación."
        ],
        2,
        "Recuerda: Son los productos que todavía no han terminado su fabricación."
      ],
      [
        "Selecciona la afirmación que resume de mejor manera lo aprendido sobre inventario de productos en proceso:",
        [
          "Es un procedimiento opcional que las empresas pueden ignorar.",
          "Son los productos que todavía no han terminado su fabricación.",
          "Distorsiona la igualdad numérica de los registros contables."
        ],
        1,
        "Recuerda: Son los productos que todavía no han terminado su fabricación."
      ]
    ]
  },
  {
    "id": 54,
    "world": 6,
    "level": 4,
    "title": "Inventario de productos terminados",
    "subtitle": "Aprende qué es un inventario y distingue materia prima, productos en proceso y terminados.",
    "sections": [
      [
        "Definición de la tarjeta",
        "Son los productos que ya finalizaron su fabricación y están listos para venderse."
      ],
      [
        "Explicación paso a paso",
        "Representan el inventario final disponible para los clientes en el almacén."
      ],
      [
        "Ejemplo práctico",
        "Televisores empacados en cajas listos para embarcar a las tiendas."
      ],
      [
        "Cómo reconocer el concepto",
        "Busca bienes acabados y disponibles para venta."
      ],
      [
        "Lo que debes recordar",
        "Inventario de productos terminados: Son los productos que ya finalizaron su fabricación y están listos para venderse."
      ]
    ],
    "summary": "Inventario de productos terminados. Son los productos que ya finalizaron su fabricación y están listos para venderse.",
    "questions": [
      [
        "¿Cuál es la definición correcta de inventario de productos terminados?",
        [
          "Es un concepto ajeno a la gestión contable y financiera de la entidad.",
          "Son los productos que ya finalizaron su fabricación y están listos para venderse.",
          "Corresponde exclusivamente a un registro temporal sin validez formal."
        ],
        1,
        "Recuerda: Son los productos que ya finalizaron su fabricación y están listos para venderse."
      ],
      [
        "Según esta lección, ¿cómo se entiende el concepto de inventario de productos terminados?",
        [
          "Representan el inventario final disponible para los clientes en el almacén.",
          "Se calcula restando todos los pasivos circulantes entre sí.",
          "Es un informe exclusivo para auditorías externas gubernamentales."
        ],
        0,
        "Recuerda: Son los productos que ya finalizaron su fabricación y están listos para venderse."
      ],
      [
        "¿Qué enunciado describe correctamente la aplicación práctica de inventario de productos terminados?",
        [
          "No tiene aplicación directa en las operaciones cotidianas de una empresa.",
          "Televisores empacados en cajas listos para embarcar a las tiendas.",
          "Solo se aplica al cierre de operaciones fiscales anuales obligatorias."
        ],
        1,
        "Recuerda: Son los productos que ya finalizaron su fabricación y están listos para venderse."
      ],
      [
        "¿Cuál afirmación coincide exactamente con lo explicado sobre inventario de productos terminados?",
        [
          "Se relaciona directamente con la premisa: Son los productos que ya finalizaron su fabricación y están listos para venderse.",
          "Modifica de forma arbitraria la ecuación contable fundamental.",
          "Representa un pasivo exigible a corto plazo."
        ],
        0,
        "Recuerda: Son los productos que ya finalizaron su fabricación y están listos para venderse."
      ],
      [
        "Al estudiar inventario de productos terminados, ¿qué aspecto clave debes identificar?",
        [
          "Su dependencia exclusiva de factores externos macroeconómicos.",
          "Busca bienes acabados y disponibles para venta.",
          "Que no requiere ningún tipo de control ni registro documental."
        ],
        1,
        "Recuerda: Son los productos que ya finalizaron su fabricación y están listos para venderse."
      ],
      [
        "¿Qué opción expresa la idea central desarrollada en esta lección?",
        [
          "Los registros se realizan sin seguir ningún orden lógico ni cronológico.",
          "Son los productos que ya finalizaron su fabricación y están listos para venderse.",
          "Los estados financieros pierden toda validez legal al aplicarlo."
        ],
        1,
        "Recuerda: Son los productos que ya finalizaron su fabricación y están listos para venderse."
      ],
      [
        "De acuerdo con los fundamentos estudiados, ¿cómo opera inventario de productos terminados?",
        [
          "Representan el inventario final disponible para los clientes en el almacén.",
          "Generando automáticamente pasivos contingentes para la entidad.",
          "Eliminando la necesidad de libros diario y mayor."
        ],
        0,
        "Recuerda: Son los productos que ya finalizaron su fabricación y están listos para venderse."
      ],
      [
        "¿Cuál de las siguientes opciones ejemplifica correctamente este concepto?",
        [
          "Modificar estados financieros sin soporte documental.",
          "Televisores empacados en cajas listos para embarcar a las tiendas.",
          "Omitir el registro de operaciones mercantiles cotidianas."
        ],
        1,
        "Recuerda: Son los productos que ya finalizaron su fabricación y están listos para venderse."
      ],
      [
        "¿Qué descripción corresponde al principio fundamental explicado en inventario de productos terminados?",
        [
          "La supresión total de controles internos en la empresa.",
          "La aplicación de métodos empíricos sin base técnica.",
          "Son los productos que ya finalizaron su fabricación y están listos para venderse."
        ],
        2,
        "Recuerda: Son los productos que ya finalizaron su fabricación y están listos para venderse."
      ],
      [
        "Selecciona la afirmación que resume de mejor manera lo aprendido sobre inventario de productos terminados:",
        [
          "Es un procedimiento opcional que las empresas pueden ignorar.",
          "Son los productos que ya finalizaron su fabricación y están listos para venderse.",
          "Distorsiona la igualdad numérica de los registros contables."
        ],
        1,
        "Recuerda: Son los productos que ya finalizaron su fabricación y están listos para venderse."
      ]
    ]
  },
  {
    "id": 55,
    "world": 6,
    "level": 5,
    "title": "Diferencias entre los inventarios",
    "subtitle": "Aprende qué es un inventario y distingue materia prima, productos en proceso y terminados.",
    "sections": [
      [
        "Definición de la tarjeta",
        "Materia prima son materiales para elaborar; productos en proceso aún no terminan su fabricación; productos terminados ya finalizaron y están listos para venderse."
      ],
      [
        "Explicación paso a paso",
        "Muestra la transformación gradual desde insumos hasta mercancía acabada."
      ],
      [
        "Ejemplo práctico",
        "Clasificar un rollo de tela (materia prima), una camisa a medio coser (proceso) y una camisa empaquetada (terminado)."
      ],
      [
        "Cómo reconocer el concepto",
        "Reconoce la progresión del ciclo de inventarios."
      ],
      [
        "Lo que debes recordar",
        "Diferencias entre los inventarios: Materia prima son materiales para elaborar; productos en proceso aún no terminan su fabricación; productos terminados ya finalizaron y están listos para venderse."
      ]
    ],
    "summary": "Diferencias entre los inventarios. Materia prima son materiales para elaborar; productos en proceso aún no terminan su fabricación; productos terminados ya finalizaron y están listos para venderse.",
    "questions": [
      [
        "¿Cuál es la definición correcta de diferencias entre los inventarios?",
        [
          "Es un concepto ajeno a la gestión contable y financiera de la entidad.",
          "Materia prima son materiales para elaborar; productos en proceso aún no terminan su fabricación; productos terminados ya finalizaron y están listos para venderse.",
          "Corresponde exclusivamente a un registro temporal sin validez formal."
        ],
        1,
        "Recuerda: Materia prima son materiales para elaborar; productos en proceso aún no terminan su fabricación; productos terminados ya finalizaron y están listos para venderse."
      ],
      [
        "Según esta lección, ¿cómo se entiende el concepto de diferencias entre los inventarios?",
        [
          "Muestra la transformación gradual desde insumos hasta mercancía acabada.",
          "Se calcula restando todos los pasivos circulantes entre sí.",
          "Es un informe exclusivo para auditorías externas gubernamentales."
        ],
        0,
        "Recuerda: Materia prima son materiales para elaborar; productos en proceso aún no terminan su fabricación; productos terminados ya finalizaron y están listos para venderse."
      ],
      [
        "¿Qué enunciado describe correctamente la aplicación práctica de diferencias entre los inventarios?",
        [
          "No tiene aplicación directa en las operaciones cotidianas de una empresa.",
          "Clasificar un rollo de tela (materia prima), una camisa a medio coser (proceso) y una camisa empaquetada (terminado).",
          "Solo se aplica al cierre de operaciones fiscales anuales obligatorias."
        ],
        1,
        "Recuerda: Materia prima son materiales para elaborar; productos en proceso aún no terminan su fabricación; productos terminados ya finalizaron y están listos para venderse."
      ],
      [
        "¿Cuál afirmación coincide exactamente con lo explicado sobre diferencias entre los inventarios?",
        [
          "Se relaciona directamente con la premisa: Materia prima son materiales para elaborar; productos en proceso aún no terminan su fabricación; productos terminados ya finalizaron y están listos para venderse.",
          "Modifica de forma arbitraria la ecuación contable fundamental.",
          "Representa un pasivo exigible a corto plazo."
        ],
        0,
        "Recuerda: Materia prima son materiales para elaborar; productos en proceso aún no terminan su fabricación; productos terminados ya finalizaron y están listos para venderse."
      ],
      [
        "Al estudiar diferencias entre los inventarios, ¿qué aspecto clave debes identificar?",
        [
          "Su dependencia exclusiva de factores externos macroeconómicos.",
          "Reconoce la progresión del ciclo de inventarios.",
          "Que no requiere ningún tipo de control ni registro documental."
        ],
        1,
        "Recuerda: Materia prima son materiales para elaborar; productos en proceso aún no terminan su fabricación; productos terminados ya finalizaron y están listos para venderse."
      ],
      [
        "¿Qué opción expresa la idea central desarrollada en esta lección?",
        [
          "Los registros se realizan sin seguir ningún orden lógico ni cronológico.",
          "Materia prima son materiales para elaborar; productos en proceso aún no terminan su fabricación; productos terminados ya finalizaron y están listos para venderse.",
          "Los estados financieros pierden toda validez legal al aplicarlo."
        ],
        1,
        "Recuerda: Materia prima son materiales para elaborar; productos en proceso aún no terminan su fabricación; productos terminados ya finalizaron y están listos para venderse."
      ],
      [
        "De acuerdo con los fundamentos estudiados, ¿cómo opera diferencias entre los inventarios?",
        [
          "Muestra la transformación gradual desde insumos hasta mercancía acabada.",
          "Generando automáticamente pasivos contingentes para la entidad.",
          "Eliminando la necesidad de libros diario y mayor."
        ],
        0,
        "Recuerda: Materia prima son materiales para elaborar; productos en proceso aún no terminan su fabricación; productos terminados ya finalizaron y están listos para venderse."
      ],
      [
        "¿Cuál de las siguientes opciones ejemplifica correctamente este concepto?",
        [
          "Modificar estados financieros sin soporte documental.",
          "Clasificar un rollo de tela (materia prima), una camisa a medio coser (proceso) y una camisa empaquetada (terminado).",
          "Omitir el registro de operaciones mercantiles cotidianas."
        ],
        1,
        "Recuerda: Materia prima son materiales para elaborar; productos en proceso aún no terminan su fabricación; productos terminados ya finalizaron y están listos para venderse."
      ],
      [
        "¿Qué descripción corresponde al principio fundamental explicado en diferencias entre los inventarios?",
        [
          "La supresión total de controles internos en la empresa.",
          "La aplicación de métodos empíricos sin base técnica.",
          "Materia prima son materiales para elaborar; productos en proceso aún no terminan su fabricación; productos terminados ya finalizaron y están listos para venderse."
        ],
        2,
        "Recuerda: Materia prima son materiales para elaborar; productos en proceso aún no terminan su fabricación; productos terminados ya finalizaron y están listos para venderse."
      ],
      [
        "Selecciona la afirmación que resume de mejor manera lo aprendido sobre diferencias entre los inventarios:",
        [
          "Es un procedimiento opcional que las empresas pueden ignorar.",
          "Materia prima son materiales para elaborar; productos en proceso aún no terminan su fabricación; productos terminados ya finalizaron y están listos para venderse.",
          "Distorsiona la igualdad numérica de los registros contables."
        ],
        1,
        "Recuerda: Materia prima son materiales para elaborar; productos en proceso aún no terminan su fabricación; productos terminados ya finalizaron y están listos para venderse."
      ]
    ]
  },
  {
    "id": 56,
    "world": 6,
    "level": 6,
    "title": "Control de inventarios",
    "subtitle": "Aprende qué es un inventario y distingue materia prima, productos en proceso y terminados.",
    "sections": [
      [
        "Definición de la tarjeta",
        "El control de inventarios garantiza el registro preciso y la custodia física de las existencias."
      ],
      [
        "Explicación paso a paso",
        "Evita mermas, robos, obsolescencia y roturas de stock en el almacén."
      ],
      [
        "Ejemplo práctico",
        "Realizar conteos físicos periódicos (inventario físico) y compararlos con registros contables."
      ],
      [
        "Cómo reconocer el concepto",
        "Identifica la gestión de existencias."
      ],
      [
        "Lo que debes recordar",
        "Control de inventarios: El control de inventarios garantiza el registro preciso y la custodia física de las existencias."
      ]
    ],
    "summary": "Control de inventarios. El control de inventarios garantiza el registro preciso y la custodia física de las existencias.",
    "questions": [
      [
        "¿Cuál es la definición correcta de control de inventarios?",
        [
          "Es un concepto ajeno a la gestión contable y financiera de la entidad.",
          "El control de inventarios garantiza el registro preciso y la custodia física de las existencias.",
          "Corresponde exclusivamente a un registro temporal sin validez formal."
        ],
        1,
        "Recuerda: El control de inventarios garantiza el registro preciso y la custodia física de las existencias."
      ],
      [
        "Según esta lección, ¿cómo se entiende el concepto de control de inventarios?",
        [
          "Evita mermas, robos, obsolescencia y roturas de stock en el almacén.",
          "Se calcula restando todos los pasivos circulantes entre sí.",
          "Es un informe exclusivo para auditorías externas gubernamentales."
        ],
        0,
        "Recuerda: El control de inventarios garantiza el registro preciso y la custodia física de las existencias."
      ],
      [
        "¿Qué enunciado describe correctamente la aplicación práctica de control de inventarios?",
        [
          "No tiene aplicación directa en las operaciones cotidianas de una empresa.",
          "Realizar conteos físicos periódicos (inventario físico) y compararlos con registros contables.",
          "Solo se aplica al cierre de operaciones fiscales anuales obligatorias."
        ],
        1,
        "Recuerda: El control de inventarios garantiza el registro preciso y la custodia física de las existencias."
      ],
      [
        "¿Cuál afirmación coincide exactamente con lo explicado sobre control de inventarios?",
        [
          "Se relaciona directamente con la premisa: El control de inventarios garantiza el registro preciso y la custodia física de las existencias.",
          "Modifica de forma arbitraria la ecuación contable fundamental.",
          "Representa un pasivo exigible a corto plazo."
        ],
        0,
        "Recuerda: El control de inventarios garantiza el registro preciso y la custodia física de las existencias."
      ],
      [
        "Al estudiar control de inventarios, ¿qué aspecto clave debes identificar?",
        [
          "Su dependencia exclusiva de factores externos macroeconómicos.",
          "Identifica la gestión de existencias.",
          "Que no requiere ningún tipo de control ni registro documental."
        ],
        1,
        "Recuerda: El control de inventarios garantiza el registro preciso y la custodia física de las existencias."
      ],
      [
        "¿Qué opción expresa la idea central desarrollada en esta lección?",
        [
          "Los registros se realizan sin seguir ningún orden lógico ni cronológico.",
          "El control de inventarios garantiza el registro preciso y la custodia física de las existencias.",
          "Los estados financieros pierden toda validez legal al aplicarlo."
        ],
        1,
        "Recuerda: El control de inventarios garantiza el registro preciso y la custodia física de las existencias."
      ],
      [
        "De acuerdo con los fundamentos estudiados, ¿cómo opera control de inventarios?",
        [
          "Evita mermas, robos, obsolescencia y roturas de stock en el almacén.",
          "Generando automáticamente pasivos contingentes para la entidad.",
          "Eliminando la necesidad de libros diario y mayor."
        ],
        0,
        "Recuerda: El control de inventarios garantiza el registro preciso y la custodia física de las existencias."
      ],
      [
        "¿Cuál de las siguientes opciones ejemplifica correctamente este concepto?",
        [
          "Modificar estados financieros sin soporte documental.",
          "Realizar conteos físicos periódicos (inventario físico) y compararlos con registros contables.",
          "Omitir el registro de operaciones mercantiles cotidianas."
        ],
        1,
        "Recuerda: El control de inventarios garantiza el registro preciso y la custodia física de las existencias."
      ],
      [
        "¿Qué descripción corresponde al principio fundamental explicado en control de inventarios?",
        [
          "La supresión total de controles internos en la empresa.",
          "La aplicación de métodos empíricos sin base técnica.",
          "El control de inventarios garantiza el registro preciso y la custodia física de las existencias."
        ],
        2,
        "Recuerda: El control de inventarios garantiza el registro preciso y la custodia física de las existencias."
      ],
      [
        "Selecciona la afirmación que resume de mejor manera lo aprendido sobre control de inventarios:",
        [
          "Es un procedimiento opcional que las empresas pueden ignorar.",
          "El control de inventarios garantiza el registro preciso y la custodia física de las existencias.",
          "Distorsiona la igualdad numérica de los registros contables."
        ],
        1,
        "Recuerda: El control de inventarios garantiza el registro preciso y la custodia física de las existencias."
      ]
    ]
  },
  {
    "id": 57,
    "world": 6,
    "level": 7,
    "title": "Rotación de inventarios",
    "subtitle": "Aprende qué es un inventario y distingue materia prima, productos en proceso y terminados.",
    "sections": [
      [
        "Definición de la tarjeta",
        "La rotación de inventarios mide cuántas veces se vende y reemplaza el inventario en un período."
      ],
      [
        "Explicación paso a paso",
        "Una alta rotación indica eficiencia comercial y buena gestión de ventas."
      ],
      [
        "Ejemplo práctico",
        "Vender y reponer el inventario de abarrotes 6 veces al año."
      ],
      [
        "Cómo reconocer el concepto",
        "Reconoce el índice de velocidad de ventas."
      ],
      [
        "Lo que debes recordar",
        "Rotación de inventarios: La rotación de inventarios mide cuántas veces se vende y reemplaza el inventario en un período."
      ]
    ],
    "summary": "Rotación de inventarios. La rotación de inventarios mide cuántas veces se vende y reemplaza el inventario en un período.",
    "questions": [
      [
        "¿Cuál es la definición correcta de rotación de inventarios?",
        [
          "Es un concepto ajeno a la gestión contable y financiera de la entidad.",
          "La rotación de inventarios mide cuántas veces se vende y reemplaza el inventario en un período.",
          "Corresponde exclusivamente a un registro temporal sin validez formal."
        ],
        1,
        "Recuerda: La rotación de inventarios mide cuántas veces se vende y reemplaza el inventario en un período."
      ],
      [
        "Según esta lección, ¿cómo se entiende el concepto de rotación de inventarios?",
        [
          "Una alta rotación indica eficiencia comercial y buena gestión de ventas.",
          "Se calcula restando todos los pasivos circulantes entre sí.",
          "Es un informe exclusivo para auditorías externas gubernamentales."
        ],
        0,
        "Recuerda: La rotación de inventarios mide cuántas veces se vende y reemplaza el inventario en un período."
      ],
      [
        "¿Qué enunciado describe correctamente la aplicación práctica de rotación de inventarios?",
        [
          "No tiene aplicación directa en las operaciones cotidianas de una empresa.",
          "Vender y reponer el inventario de abarrotes 6 veces al año.",
          "Solo se aplica al cierre de operaciones fiscales anuales obligatorias."
        ],
        1,
        "Recuerda: La rotación de inventarios mide cuántas veces se vende y reemplaza el inventario en un período."
      ],
      [
        "¿Cuál afirmación coincide exactamente con lo explicado sobre rotación de inventarios?",
        [
          "Se relaciona directamente con la premisa: La rotación de inventarios mide cuántas veces se vende y reemplaza el inventario en un período.",
          "Modifica de forma arbitraria la ecuación contable fundamental.",
          "Representa un pasivo exigible a corto plazo."
        ],
        0,
        "Recuerda: La rotación de inventarios mide cuántas veces se vende y reemplaza el inventario en un período."
      ],
      [
        "Al estudiar rotación de inventarios, ¿qué aspecto clave debes identificar?",
        [
          "Su dependencia exclusiva de factores externos macroeconómicos.",
          "Reconoce el índice de velocidad de ventas.",
          "Que no requiere ningún tipo de control ni registro documental."
        ],
        1,
        "Recuerda: La rotación de inventarios mide cuántas veces se vende y reemplaza el inventario en un período."
      ],
      [
        "¿Qué opción expresa la idea central desarrollada en esta lección?",
        [
          "Los registros se realizan sin seguir ningún orden lógico ni cronológico.",
          "La rotación de inventarios mide cuántas veces se vende y reemplaza el inventario en un período.",
          "Los estados financieros pierden toda validez legal al aplicarlo."
        ],
        1,
        "Recuerda: La rotación de inventarios mide cuántas veces se vende y reemplaza el inventario en un período."
      ],
      [
        "De acuerdo con los fundamentos estudiados, ¿cómo opera rotación de inventarios?",
        [
          "Una alta rotación indica eficiencia comercial y buena gestión de ventas.",
          "Generando automáticamente pasivos contingentes para la entidad.",
          "Eliminando la necesidad de libros diario y mayor."
        ],
        0,
        "Recuerda: La rotación de inventarios mide cuántas veces se vende y reemplaza el inventario en un período."
      ],
      [
        "¿Cuál de las siguientes opciones ejemplifica correctamente este concepto?",
        [
          "Modificar estados financieros sin soporte documental.",
          "Vender y reponer el inventario de abarrotes 6 veces al año.",
          "Omitir el registro de operaciones mercantiles cotidianas."
        ],
        1,
        "Recuerda: La rotación de inventarios mide cuántas veces se vende y reemplaza el inventario en un período."
      ],
      [
        "¿Qué descripción corresponde al principio fundamental explicado en rotación de inventarios?",
        [
          "La supresión total de controles internos en la empresa.",
          "La aplicación de métodos empíricos sin base técnica.",
          "La rotación de inventarios mide cuántas veces se vende y reemplaza el inventario en un período."
        ],
        2,
        "Recuerda: La rotación de inventarios mide cuántas veces se vende y reemplaza el inventario en un período."
      ],
      [
        "Selecciona la afirmación que resume de mejor manera lo aprendido sobre rotación de inventarios:",
        [
          "Es un procedimiento opcional que las empresas pueden ignorar.",
          "La rotación de inventarios mide cuántas veces se vende y reemplaza el inventario en un período.",
          "Distorsiona la igualdad numérica de los registros contables."
        ],
        1,
        "Recuerda: La rotación de inventarios mide cuántas veces se vende y reemplaza el inventario en un período."
      ]
    ]
  },
  {
    "id": 58,
    "world": 6,
    "level": 8,
    "title": "Valoración de inventarios",
    "subtitle": "Aprende qué es un inventario y distingue materia prima, productos en proceso y terminados.",
    "sections": [
      [
        "Definición de la tarjeta",
        "La valoración de inventarios asigna un costo monetario a las mercancías en stock y vendidas."
      ],
      [
        "Explicación paso a paso",
        "Utiliza criterios formales como costo promedio, PEPS (FIFO) o UEPS (LIFO)."
      ],
      [
        "Ejemplo práctico",
        "Calcular el costo de la mercancía vendida aplicando el método de inventarios elegido."
      ],
      [
        "Cómo reconocer el concepto",
        "Identifica la asignación monetaria de existencias."
      ],
      [
        "Lo que debes recordar",
        "Valoración de inventarios: La valoración de inventarios asigna un costo monetario a las mercancías en stock y vendidas."
      ]
    ],
    "summary": "Valoración de inventarios. La valoración de inventarios asigna un costo monetario a las mercancías en stock y vendidas.",
    "questions": [
      [
        "¿Cuál es la definición correcta de valoración de inventarios?",
        [
          "Es un concepto ajeno a la gestión contable y financiera de la entidad.",
          "La valoración de inventarios asigna un costo monetario a las mercancías en stock y vendidas.",
          "Corresponde exclusivamente a un registro temporal sin validez formal."
        ],
        1,
        "Recuerda: La valoración de inventarios asigna un costo monetario a las mercancías en stock y vendidas."
      ],
      [
        "Según esta lección, ¿cómo se entiende el concepto de valoración de inventarios?",
        [
          "Utiliza criterios formales como costo promedio, PEPS (FIFO) o UEPS (LIFO).",
          "Se calcula restando todos los pasivos circulantes entre sí.",
          "Es un informe exclusivo para auditorías externas gubernamentales."
        ],
        0,
        "Recuerda: La valoración de inventarios asigna un costo monetario a las mercancías en stock y vendidas."
      ],
      [
        "¿Qué enunciado describe correctamente la aplicación práctica de valoración de inventarios?",
        [
          "No tiene aplicación directa en las operaciones cotidianas de una empresa.",
          "Calcular el costo de la mercancía vendida aplicando el método de inventarios elegido.",
          "Solo se aplica al cierre de operaciones fiscales anuales obligatorias."
        ],
        1,
        "Recuerda: La valoración de inventarios asigna un costo monetario a las mercancías en stock y vendidas."
      ],
      [
        "¿Cuál afirmación coincide exactamente con lo explicado sobre valoración de inventarios?",
        [
          "Se relaciona directamente con la premisa: La valoración de inventarios asigna un costo monetario a las mercancías en stock y vendidas.",
          "Modifica de forma arbitraria la ecuación contable fundamental.",
          "Representa un pasivo exigible a corto plazo."
        ],
        0,
        "Recuerda: La valoración de inventarios asigna un costo monetario a las mercancías en stock y vendidas."
      ],
      [
        "Al estudiar valoración de inventarios, ¿qué aspecto clave debes identificar?",
        [
          "Su dependencia exclusiva de factores externos macroeconómicos.",
          "Identifica la asignación monetaria de existencias.",
          "Que no requiere ningún tipo de control ni registro documental."
        ],
        1,
        "Recuerda: La valoración de inventarios asigna un costo monetario a las mercancías en stock y vendidas."
      ],
      [
        "¿Qué opción expresa la idea central desarrollada en esta lección?",
        [
          "Los registros se realizan sin seguir ningún orden lógico ni cronológico.",
          "La valoración de inventarios asigna un costo monetario a las mercancías en stock y vendidas.",
          "Los estados financieros pierden toda validez legal al aplicarlo."
        ],
        1,
        "Recuerda: La valoración de inventarios asigna un costo monetario a las mercancías en stock y vendidas."
      ],
      [
        "De acuerdo con los fundamentos estudiados, ¿cómo opera valoración de inventarios?",
        [
          "Utiliza criterios formales como costo promedio, PEPS (FIFO) o UEPS (LIFO).",
          "Generando automáticamente pasivos contingentes para la entidad.",
          "Eliminando la necesidad de libros diario y mayor."
        ],
        0,
        "Recuerda: La valoración de inventarios asigna un costo monetario a las mercancías en stock y vendidas."
      ],
      [
        "¿Cuál de las siguientes opciones ejemplifica correctamente este concepto?",
        [
          "Modificar estados financieros sin soporte documental.",
          "Calcular el costo de la mercancía vendida aplicando el método de inventarios elegido.",
          "Omitir el registro de operaciones mercantiles cotidianas."
        ],
        1,
        "Recuerda: La valoración de inventarios asigna un costo monetario a las mercancías en stock y vendidas."
      ],
      [
        "¿Qué descripción corresponde al principio fundamental explicado en valoración de inventarios?",
        [
          "La supresión total de controles internos en la empresa.",
          "La aplicación de métodos empíricos sin base técnica.",
          "La valoración de inventarios asigna un costo monetario a las mercancías en stock y vendidas."
        ],
        2,
        "Recuerda: La valoración de inventarios asigna un costo monetario a las mercancías en stock y vendidas."
      ],
      [
        "Selecciona la afirmación que resume de mejor manera lo aprendido sobre valoración de inventarios:",
        [
          "Es un procedimiento opcional que las empresas pueden ignorar.",
          "La valoración de inventarios asigna un costo monetario a las mercancías en stock y vendidas.",
          "Distorsiona la igualdad numérica de los registros contables."
        ],
        1,
        "Recuerda: La valoración de inventarios asigna un costo monetario a las mercancías en stock y vendidas."
      ]
    ]
  },
  {
    "id": 59,
    "world": 6,
    "level": 9,
    "title": "Merma y obsolescencia",
    "subtitle": "Aprende qué es un inventario y distingue materia prima, productos en proceso y terminados.",
    "sections": [
      [
        "Definición de la tarjeta",
        "La merma representa pérdidas físicas de inventario y la obsolescencia la pérdida de valor comercial por desuso."
      ],
      [
        "Explicación paso a paso",
        "Afectan directamente los resultados al convertirse en pérdidas o gastos del periodo."
      ],
      [
        "Ejemplo práctico",
        "Alimentos caducados (merma) o tecnología desactualizada que no se vende (obsolescencia)."
      ],
      [
        "Cómo reconocer el concepto",
        "Reconoce las causas de pérdida en inventarios."
      ],
      [
        "Lo que debes recordar",
        "Merma y obsolescencia: La merma representa pérdidas físicas de inventario y la obsolescencia la pérdida de valor comercial por desuso."
      ]
    ],
    "summary": "Merma y obsolescencia. La merma representa pérdidas físicas de inventario y la obsolescencia la pérdida de valor comercial por desuso.",
    "questions": [
      [
        "¿Cuál es la definición correcta de merma y obsolescencia?",
        [
          "Es un concepto ajeno a la gestión contable y financiera de la entidad.",
          "La merma representa pérdidas físicas de inventario y la obsolescencia la pérdida de valor comercial por desuso.",
          "Corresponde exclusivamente a un registro temporal sin validez formal."
        ],
        1,
        "Recuerda: La merma representa pérdidas físicas de inventario y la obsolescencia la pérdida de valor comercial por desuso."
      ],
      [
        "Según esta lección, ¿cómo se entiende el concepto de merma y obsolescencia?",
        [
          "Afectan directamente los resultados al convertirse en pérdidas o gastos del periodo.",
          "Se calcula restando todos los pasivos circulantes entre sí.",
          "Es un informe exclusivo para auditorías externas gubernamentales."
        ],
        0,
        "Recuerda: La merma representa pérdidas físicas de inventario y la obsolescencia la pérdida de valor comercial por desuso."
      ],
      [
        "¿Qué enunciado describe correctamente la aplicación práctica de merma y obsolescencia?",
        [
          "No tiene aplicación directa en las operaciones cotidianas de una empresa.",
          "Alimentos caducados (merma) o tecnología desactualizada que no se vende (obsolescencia).",
          "Solo se aplica al cierre de operaciones fiscales anuales obligatorias."
        ],
        1,
        "Recuerda: La merma representa pérdidas físicas de inventario y la obsolescencia la pérdida de valor comercial por desuso."
      ],
      [
        "¿Cuál afirmación coincide exactamente con lo explicado sobre merma y obsolescencia?",
        [
          "Se relaciona directamente con la premisa: La merma representa pérdidas físicas de inventario y la obsolescencia la pérdida de valor comercial por desuso.",
          "Modifica de forma arbitraria la ecuación contable fundamental.",
          "Representa un pasivo exigible a corto plazo."
        ],
        0,
        "Recuerda: La merma representa pérdidas físicas de inventario y la obsolescencia la pérdida de valor comercial por desuso."
      ],
      [
        "Al estudiar merma y obsolescencia, ¿qué aspecto clave debes identificar?",
        [
          "Su dependencia exclusiva de factores externos macroeconómicos.",
          "Reconoce las causas de pérdida en inventarios.",
          "Que no requiere ningún tipo de control ni registro documental."
        ],
        1,
        "Recuerda: La merma representa pérdidas físicas de inventario y la obsolescencia la pérdida de valor comercial por desuso."
      ],
      [
        "¿Qué opción expresa la idea central desarrollada en esta lección?",
        [
          "Los registros se realizan sin seguir ningún orden lógico ni cronológico.",
          "La merma representa pérdidas físicas de inventario y la obsolescencia la pérdida de valor comercial por desuso.",
          "Los estados financieros pierden toda validez legal al aplicarlo."
        ],
        1,
        "Recuerda: La merma representa pérdidas físicas de inventario y la obsolescencia la pérdida de valor comercial por desuso."
      ],
      [
        "De acuerdo con los fundamentos estudiados, ¿cómo opera merma y obsolescencia?",
        [
          "Afectan directamente los resultados al convertirse en pérdidas o gastos del periodo.",
          "Generando automáticamente pasivos contingentes para la entidad.",
          "Eliminando la necesidad de libros diario y mayor."
        ],
        0,
        "Recuerda: La merma representa pérdidas físicas de inventario y la obsolescencia la pérdida de valor comercial por desuso."
      ],
      [
        "¿Cuál de las siguientes opciones ejemplifica correctamente este concepto?",
        [
          "Modificar estados financieros sin soporte documental.",
          "Alimentos caducados (merma) o tecnología desactualizada que no se vende (obsolescencia).",
          "Omitir el registro de operaciones mercantiles cotidianas."
        ],
        1,
        "Recuerda: La merma representa pérdidas físicas de inventario y la obsolescencia la pérdida de valor comercial por desuso."
      ],
      [
        "¿Qué descripción corresponde al principio fundamental explicado en merma y obsolescencia?",
        [
          "La supresión total de controles internos en la empresa.",
          "La aplicación de métodos empíricos sin base técnica.",
          "La merma representa pérdidas físicas de inventario y la obsolescencia la pérdida de valor comercial por desuso."
        ],
        2,
        "Recuerda: La merma representa pérdidas físicas de inventario y la obsolescencia la pérdida de valor comercial por desuso."
      ],
      [
        "Selecciona la afirmación que resume de mejor manera lo aprendido sobre merma y obsolescencia:",
        [
          "Es un procedimiento opcional que las empresas pueden ignorar.",
          "La merma representa pérdidas físicas de inventario y la obsolescencia la pérdida de valor comercial por desuso.",
          "Distorsiona la igualdad numérica de los registros contables."
        ],
        1,
        "Recuerda: La merma representa pérdidas físicas de inventario y la obsolescencia la pérdida de valor comercial por desuso."
      ]
    ]
  },
  {
    "id": 60,
    "world": 6,
    "level": 10,
    "title": "Repaso del ciclo de inventarios",
    "subtitle": "Aprende qué es un inventario y distingue materia prima, productos en proceso y terminados.",
    "sections": [
      [
        "Definición de la tarjeta",
        "El ciclo de inventarios abarca desde la adquisición de materia prima, su transformación en proceso hasta la venta de productos terminados bajo control y valoración."
      ],
      [
        "Explicación paso a paso",
        "Integra todas las fases y controles de las existencias corporativas."
      ],
      [
        "Ejemplo práctico",
        "Gestionar compras, producción, almacenamiento y venta de mercancías."
      ],
      [
        "Cómo reconocer el concepto",
        "Reconoce el panorama completo de inventarios."
      ],
      [
        "Lo que debes recordar",
        "Repaso del ciclo de inventarios: El ciclo de inventarios abarca desde la adquisición de materia prima, su transformación en proceso hasta la venta de productos terminados bajo control y valoración."
      ]
    ],
    "summary": "Repaso del ciclo de inventarios. El ciclo de inventarios abarca desde la adquisición de materia prima, su transformación en proceso hasta la venta de productos terminados bajo control y valoración.",
    "questions": [
      [
        "¿Cuál es la definición correcta de repaso del ciclo de inventarios?",
        [
          "Es un concepto ajeno a la gestión contable y financiera de la entidad.",
          "El ciclo de inventarios abarca desde la adquisición de materia prima, su transformación en proceso hasta la venta de productos terminados bajo control y valoración.",
          "Corresponde exclusivamente a un registro temporal sin validez formal."
        ],
        1,
        "Recuerda: El ciclo de inventarios abarca desde la adquisición de materia prima, su transformación en proceso hasta la venta de productos terminados bajo control y valoración."
      ],
      [
        "Según esta lección, ¿cómo se entiende el concepto de repaso del ciclo de inventarios?",
        [
          "Integra todas las fases y controles de las existencias corporativas.",
          "Se calcula restando todos los pasivos circulantes entre sí.",
          "Es un informe exclusivo para auditorías externas gubernamentales."
        ],
        0,
        "Recuerda: El ciclo de inventarios abarca desde la adquisición de materia prima, su transformación en proceso hasta la venta de productos terminados bajo control y valoración."
      ],
      [
        "¿Qué enunciado describe correctamente la aplicación práctica de repaso del ciclo de inventarios?",
        [
          "No tiene aplicación directa en las operaciones cotidianas de una empresa.",
          "Gestionar compras, producción, almacenamiento y venta de mercancías.",
          "Solo se aplica al cierre de operaciones fiscales anuales obligatorias."
        ],
        1,
        "Recuerda: El ciclo de inventarios abarca desde la adquisición de materia prima, su transformación en proceso hasta la venta de productos terminados bajo control y valoración."
      ],
      [
        "¿Cuál afirmación coincide exactamente con lo explicado sobre repaso del ciclo de inventarios?",
        [
          "Se relaciona directamente con la premisa: El ciclo de inventarios abarca desde la adquisición de materia prima, su transformación en proceso hasta la venta de productos terminados bajo control y valoración.",
          "Modifica de forma arbitraria la ecuación contable fundamental.",
          "Representa un pasivo exigible a corto plazo."
        ],
        0,
        "Recuerda: El ciclo de inventarios abarca desde la adquisición de materia prima, su transformación en proceso hasta la venta de productos terminados bajo control y valoración."
      ],
      [
        "Al estudiar repaso del ciclo de inventarios, ¿qué aspecto clave debes identificar?",
        [
          "Su dependencia exclusiva de factores externos macroeconómicos.",
          "Reconoce el panorama completo de inventarios.",
          "Que no requiere ningún tipo de control ni registro documental."
        ],
        1,
        "Recuerda: El ciclo de inventarios abarca desde la adquisición de materia prima, su transformación en proceso hasta la venta de productos terminados bajo control y valoración."
      ],
      [
        "¿Qué opción expresa la idea central desarrollada en esta lección?",
        [
          "Los registros se realizan sin seguir ningún orden lógico ni cronológico.",
          "El ciclo de inventarios abarca desde la adquisición de materia prima, su transformación en proceso hasta la venta de productos terminados bajo control y valoración.",
          "Los estados financieros pierden toda validez legal al aplicarlo."
        ],
        1,
        "Recuerda: El ciclo de inventarios abarca desde la adquisición de materia prima, su transformación en proceso hasta la venta de productos terminados bajo control y valoración."
      ],
      [
        "De acuerdo con los fundamentos estudiados, ¿cómo opera repaso del ciclo de inventarios?",
        [
          "Integra todas las fases y controles de las existencias corporativas.",
          "Generando automáticamente pasivos contingentes para la entidad.",
          "Eliminando la necesidad de libros diario y mayor."
        ],
        0,
        "Recuerda: El ciclo de inventarios abarca desde la adquisición de materia prima, su transformación en proceso hasta la venta de productos terminados bajo control y valoración."
      ],
      [
        "¿Cuál de las siguientes opciones ejemplifica correctamente este concepto?",
        [
          "Modificar estados financieros sin soporte documental.",
          "Gestionar compras, producción, almacenamiento y venta de mercancías.",
          "Omitir el registro de operaciones mercantiles cotidianas."
        ],
        1,
        "Recuerda: El ciclo de inventarios abarca desde la adquisición de materia prima, su transformación en proceso hasta la venta de productos terminados bajo control y valoración."
      ],
      [
        "¿Qué descripción corresponde al principio fundamental explicado en repaso del ciclo de inventarios?",
        [
          "La supresión total de controles internos en la empresa.",
          "La aplicación de métodos empíricos sin base técnica.",
          "El ciclo de inventarios abarca desde la adquisición de materia prima, su transformación en proceso hasta la venta de productos terminados bajo control y valoración."
        ],
        2,
        "Recuerda: El ciclo de inventarios abarca desde la adquisición de materia prima, su transformación en proceso hasta la venta de productos terminados bajo control y valoración."
      ],
      [
        "Selecciona la afirmación que resume de mejor manera lo aprendido sobre repaso del ciclo de inventarios:",
        [
          "Es un procedimiento opcional que las empresas pueden ignorar.",
          "El ciclo de inventarios abarca desde la adquisición de materia prima, su transformación en proceso hasta la venta de productos terminados bajo control y valoración.",
          "Distorsiona la igualdad numérica de los registros contables."
        ],
        1,
        "Recuerda: El ciclo de inventarios abarca desde la adquisición de materia prima, su transformación en proceso hasta la venta de productos terminados bajo control y valoración."
      ]
    ]
  },
  {
    "id": 61,
    "world": 7,
    "level": 1,
    "title": "¿Qué es la auditoría?",
    "subtitle": "Conoce auditoría, control interno, auditoría externa, NIA y evidencia.",
    "sections": [
      [
        "Definición de la tarjeta",
        "La auditoría es el examen crítico y sistemático de los estados financieros y operaciones de una empresa."
      ],
      [
        "Explicación paso a paso",
        "Busca emitir una opinión profesional e independiente sobre la razonabilidad de la información."
      ],
      [
        "Ejemplo práctico",
        "Contratar a un contador público independiente para revisar los registros contables anuales."
      ],
      [
        "Cómo reconocer el concepto",
        "Identifica la revisión crítica e independiente."
      ],
      [
        "Lo que debes recordar",
        "¿Qué es la auditoría?: La auditoría es el examen crítico y sistemático de los estados financieros y operaciones de una empresa."
      ]
    ],
    "summary": "¿Qué es la auditoría?. La auditoría es el examen crítico y sistemático de los estados financieros y operaciones de una empresa.",
    "questions": [
      [
        "¿Cuál es la definición correcta de ¿qué es la auditoría??",
        [
          "Es un concepto ajeno a la gestión contable y financiera de la entidad.",
          "La auditoría es el examen crítico y sistemático de los estados financieros y operaciones de una empresa.",
          "Corresponde exclusivamente a un registro temporal sin validez formal."
        ],
        1,
        "Recuerda: La auditoría es el examen crítico y sistemático de los estados financieros y operaciones de una empresa."
      ],
      [
        "Según esta lección, ¿cómo se entiende el concepto de ¿qué es la auditoría??",
        [
          "Busca emitir una opinión profesional e independiente sobre la razonabilidad de la información.",
          "Se calcula restando todos los pasivos circulantes entre sí.",
          "Es un informe exclusivo para auditorías externas gubernamentales."
        ],
        0,
        "Recuerda: La auditoría es el examen crítico y sistemático de los estados financieros y operaciones de una empresa."
      ],
      [
        "¿Qué enunciado describe correctamente la aplicación práctica de ¿qué es la auditoría??",
        [
          "No tiene aplicación directa en las operaciones cotidianas de una empresa.",
          "Contratar a un contador público independiente para revisar los registros contables anuales.",
          "Solo se aplica al cierre de operaciones fiscales anuales obligatorias."
        ],
        1,
        "Recuerda: La auditoría es el examen crítico y sistemático de los estados financieros y operaciones de una empresa."
      ],
      [
        "¿Cuál afirmación coincide exactamente con lo explicado sobre ¿qué es la auditoría??",
        [
          "Se relaciona directamente con la premisa: La auditoría es el examen crítico y sistemático de los estados financieros y operaciones de una empresa.",
          "Modifica de forma arbitraria la ecuación contable fundamental.",
          "Representa un pasivo exigible a corto plazo."
        ],
        0,
        "Recuerda: La auditoría es el examen crítico y sistemático de los estados financieros y operaciones de una empresa."
      ],
      [
        "Al estudiar ¿qué es la auditoría?, ¿qué aspecto clave debes identificar?",
        [
          "Su dependencia exclusiva de factores externos macroeconómicos.",
          "Identifica la revisión crítica e independiente.",
          "Que no requiere ningún tipo de control ni registro documental."
        ],
        1,
        "Recuerda: La auditoría es el examen crítico y sistemático de los estados financieros y operaciones de una empresa."
      ],
      [
        "¿Qué opción expresa la idea central desarrollada en esta lección?",
        [
          "Los registros se realizan sin seguir ningún orden lógico ni cronológico.",
          "La auditoría es el examen crítico y sistemático de los estados financieros y operaciones de una empresa.",
          "Los estados financieros pierden toda validez legal al aplicarlo."
        ],
        1,
        "Recuerda: La auditoría es el examen crítico y sistemático de los estados financieros y operaciones de una empresa."
      ],
      [
        "De acuerdo con los fundamentos estudiados, ¿cómo opera ¿qué es la auditoría??",
        [
          "Busca emitir una opinión profesional e independiente sobre la razonabilidad de la información.",
          "Generando automáticamente pasivos contingentes para la entidad.",
          "Eliminando la necesidad de libros diario y mayor."
        ],
        0,
        "Recuerda: La auditoría es el examen crítico y sistemático de los estados financieros y operaciones de una empresa."
      ],
      [
        "¿Cuál de las siguientes opciones ejemplifica correctamente este concepto?",
        [
          "Modificar estados financieros sin soporte documental.",
          "Contratar a un contador público independiente para revisar los registros contables anuales.",
          "Omitir el registro de operaciones mercantiles cotidianas."
        ],
        1,
        "Recuerda: La auditoría es el examen crítico y sistemático de los estados financieros y operaciones de una empresa."
      ],
      [
        "¿Qué descripción corresponde al principio fundamental explicado en ¿qué es la auditoría??",
        [
          "La supresión total de controles internos en la empresa.",
          "La aplicación de métodos empíricos sin base técnica.",
          "La auditoría es el examen crítico y sistemático de los estados financieros y operaciones de una empresa."
        ],
        2,
        "Recuerda: La auditoría es el examen crítico y sistemático de los estados financieros y operaciones de una empresa."
      ],
      [
        "Selecciona la afirmación que resume de mejor manera lo aprendido sobre ¿qué es la auditoría?:",
        [
          "Es un procedimiento opcional que las empresas pueden ignorar.",
          "La auditoría es el examen crítico y sistemático de los estados financieros y operaciones de una empresa.",
          "Distorsiona la igualdad numérica de los registros contables."
        ],
        1,
        "Recuerda: La auditoría es el examen crítico y sistemático de los estados financieros y operaciones de una empresa."
      ]
    ]
  },
  {
    "id": 62,
    "world": 7,
    "level": 2,
    "title": "Control interno",
    "subtitle": "Conoce auditoría, control interno, auditoría externa, NIA y evidencia.",
    "sections": [
      [
        "Definición de la tarjeta",
        "El control interno es el sistema implementado por la administración para garantizar la eficiencia y seguridad operativa."
      ],
      [
        "Explicación paso a paso",
        "Protege los activos, asegura la veracidad contable y previene fraudes."
      ],
      [
        "Ejemplo práctico",
        "Requerir dos firmas autorizadas para emitir cheques corporativos."
      ],
      [
        "Cómo reconocer el concepto",
        "Reconoce el sistema de salvaguarda y supervisión interna."
      ],
      [
        "Lo que debes recordar",
        "Control interno: El control interno es el sistema implementado por la administración para garantizar la eficiencia y seguridad operativa."
      ]
    ],
    "summary": "Control interno. El control interno es el sistema implementado por la administración para garantizar la eficiencia y seguridad operativa.",
    "questions": [
      [
        "¿Cuál es la definición correcta de control interno?",
        [
          "Es un concepto ajeno a la gestión contable y financiera de la entidad.",
          "El control interno es el sistema implementado por la administración para garantizar la eficiencia y seguridad operativa.",
          "Corresponde exclusivamente a un registro temporal sin validez formal."
        ],
        1,
        "Recuerda: El control interno es el sistema implementado por la administración para garantizar la eficiencia y seguridad operativa."
      ],
      [
        "Según esta lección, ¿cómo se entiende el concepto de control interno?",
        [
          "Protege los activos, asegura la veracidad contable y previene fraudes.",
          "Se calcula restando todos los pasivos circulantes entre sí.",
          "Es un informe exclusivo para auditorías externas gubernamentales."
        ],
        0,
        "Recuerda: El control interno es el sistema implementado por la administración para garantizar la eficiencia y seguridad operativa."
      ],
      [
        "¿Qué enunciado describe correctamente la aplicación práctica de control interno?",
        [
          "No tiene aplicación directa en las operaciones cotidianas de una empresa.",
          "Requerir dos firmas autorizadas para emitir cheques corporativos.",
          "Solo se aplica al cierre de operaciones fiscales anuales obligatorias."
        ],
        1,
        "Recuerda: El control interno es el sistema implementado por la administración para garantizar la eficiencia y seguridad operativa."
      ],
      [
        "¿Cuál afirmación coincide exactamente con lo explicado sobre control interno?",
        [
          "Se relaciona directamente con la premisa: El control interno es el sistema implementado por la administración para garantizar la eficiencia y seguridad operativa.",
          "Modifica de forma arbitraria la ecuación contable fundamental.",
          "Representa un pasivo exigible a corto plazo."
        ],
        0,
        "Recuerda: El control interno es el sistema implementado por la administración para garantizar la eficiencia y seguridad operativa."
      ],
      [
        "Al estudiar control interno, ¿qué aspecto clave debes identificar?",
        [
          "Su dependencia exclusiva de factores externos macroeconómicos.",
          "Reconoce el sistema de salvaguarda y supervisión interna.",
          "Que no requiere ningún tipo de control ni registro documental."
        ],
        1,
        "Recuerda: El control interno es el sistema implementado por la administración para garantizar la eficiencia y seguridad operativa."
      ],
      [
        "¿Qué opción expresa la idea central desarrollada en esta lección?",
        [
          "Los registros se realizan sin seguir ningún orden lógico ni cronológico.",
          "El control interno es el sistema implementado por la administración para garantizar la eficiencia y seguridad operativa.",
          "Los estados financieros pierden toda validez legal al aplicarlo."
        ],
        1,
        "Recuerda: El control interno es el sistema implementado por la administración para garantizar la eficiencia y seguridad operativa."
      ],
      [
        "De acuerdo con los fundamentos estudiados, ¿cómo opera control interno?",
        [
          "Protege los activos, asegura la veracidad contable y previene fraudes.",
          "Generando automáticamente pasivos contingentes para la entidad.",
          "Eliminando la necesidad de libros diario y mayor."
        ],
        0,
        "Recuerda: El control interno es el sistema implementado por la administración para garantizar la eficiencia y seguridad operativa."
      ],
      [
        "¿Cuál de las siguientes opciones ejemplifica correctamente este concepto?",
        [
          "Modificar estados financieros sin soporte documental.",
          "Requerir dos firmas autorizadas para emitir cheques corporativos.",
          "Omitir el registro de operaciones mercantiles cotidianas."
        ],
        1,
        "Recuerda: El control interno es el sistema implementado por la administración para garantizar la eficiencia y seguridad operativa."
      ],
      [
        "¿Qué descripción corresponde al principio fundamental explicado en control interno?",
        [
          "La supresión total de controles internos en la empresa.",
          "La aplicación de métodos empíricos sin base técnica.",
          "El control interno es el sistema implementado por la administración para garantizar la eficiencia y seguridad operativa."
        ],
        2,
        "Recuerda: El control interno es el sistema implementado por la administración para garantizar la eficiencia y seguridad operativa."
      ],
      [
        "Selecciona la afirmación que resume de mejor manera lo aprendido sobre control interno:",
        [
          "Es un procedimiento opcional que las empresas pueden ignorar.",
          "El control interno es el sistema implementado por la administración para garantizar la eficiencia y seguridad operativa.",
          "Distorsiona la igualdad numérica de los registros contables."
        ],
        1,
        "Recuerda: El control interno es el sistema implementado por la administración para garantizar la eficiencia y seguridad operativa."
      ]
    ]
  },
  {
    "id": 63,
    "world": 7,
    "level": 3,
    "title": "Auditoría externa",
    "subtitle": "Conoce auditoría, control interno, auditoría externa, NIA y evidencia.",
    "sections": [
      [
        "Definición de la tarjeta",
        "La auditoría externa es el examen realizado por contadores públicos independientes ajenos a la empresa."
      ],
      [
        "Explicación paso a paso",
        "Proporciona máxima credibilidad ante inversores, bancos y autoridades tributarias."
      ],
      [
        "Ejemplo práctico",
        "Una firma de auditoría certifica los estados financieros de una gran corporación."
      ],
      [
        "Cómo reconocer el concepto",
        "Identifica la auditoría realizada por terceros independientes."
      ],
      [
        "Lo que debes recordar",
        "Auditoría externa: La auditoría externa es el examen realizado por contadores públicos independientes ajenos a la empresa."
      ]
    ],
    "summary": "Auditoría externa. La auditoría externa es el examen realizado por contadores públicos independientes ajenos a la empresa.",
    "questions": [
      [
        "¿Cuál es la definición correcta de auditoría externa?",
        [
          "Es un concepto ajeno a la gestión contable y financiera de la entidad.",
          "La auditoría externa es el examen realizado por contadores públicos independientes ajenos a la empresa.",
          "Corresponde exclusivamente a un registro temporal sin validez formal."
        ],
        1,
        "Recuerda: La auditoría externa es el examen realizado por contadores públicos independientes ajenos a la empresa."
      ],
      [
        "Según esta lección, ¿cómo se entiende el concepto de auditoría externa?",
        [
          "Proporciona máxima credibilidad ante inversores, bancos y autoridades tributarias.",
          "Se calcula restando todos los pasivos circulantes entre sí.",
          "Es un informe exclusivo para auditorías externas gubernamentales."
        ],
        0,
        "Recuerda: La auditoría externa es el examen realizado por contadores públicos independientes ajenos a la empresa."
      ],
      [
        "¿Qué enunciado describe correctamente la aplicación práctica de auditoría externa?",
        [
          "No tiene aplicación directa en las operaciones cotidianas de una empresa.",
          "Una firma de auditoría certifica los estados financieros de una gran corporación.",
          "Solo se aplica al cierre de operaciones fiscales anuales obligatorias."
        ],
        1,
        "Recuerda: La auditoría externa es el examen realizado por contadores públicos independientes ajenos a la empresa."
      ],
      [
        "¿Cuál afirmación coincide exactamente con lo explicado sobre auditoría externa?",
        [
          "Se relaciona directamente con la premisa: La auditoría externa es el examen realizado por contadores públicos independientes ajenos a la empresa.",
          "Modifica de forma arbitraria la ecuación contable fundamental.",
          "Representa un pasivo exigible a corto plazo."
        ],
        0,
        "Recuerda: La auditoría externa es el examen realizado por contadores públicos independientes ajenos a la empresa."
      ],
      [
        "Al estudiar auditoría externa, ¿qué aspecto clave debes identificar?",
        [
          "Su dependencia exclusiva de factores externos macroeconómicos.",
          "Identifica la auditoría realizada por terceros independientes.",
          "Que no requiere ningún tipo de control ni registro documental."
        ],
        1,
        "Recuerda: La auditoría externa es el examen realizado por contadores públicos independientes ajenos a la empresa."
      ],
      [
        "¿Qué opción expresa la idea central desarrollada en esta lección?",
        [
          "Los registros se realizan sin seguir ningún orden lógico ni cronológico.",
          "La auditoría externa es el examen realizado por contadores públicos independientes ajenos a la empresa.",
          "Los estados financieros pierden toda validez legal al aplicarlo."
        ],
        1,
        "Recuerda: La auditoría externa es el examen realizado por contadores públicos independientes ajenos a la empresa."
      ],
      [
        "De acuerdo con los fundamentos estudiados, ¿cómo opera auditoría externa?",
        [
          "Proporciona máxima credibilidad ante inversores, bancos y autoridades tributarias.",
          "Generando automáticamente pasivos contingentes para la entidad.",
          "Eliminando la necesidad de libros diario y mayor."
        ],
        0,
        "Recuerda: La auditoría externa es el examen realizado por contadores públicos independientes ajenos a la empresa."
      ],
      [
        "¿Cuál de las siguientes opciones ejemplifica correctamente este concepto?",
        [
          "Modificar estados financieros sin soporte documental.",
          "Una firma de auditoría certifica los estados financieros de una gran corporación.",
          "Omitir el registro de operaciones mercantiles cotidianas."
        ],
        1,
        "Recuerda: La auditoría externa es el examen realizado por contadores públicos independientes ajenos a la empresa."
      ],
      [
        "¿Qué descripción corresponde al principio fundamental explicado en auditoría externa?",
        [
          "La supresión total de controles internos en la empresa.",
          "La aplicación de métodos empíricos sin base técnica.",
          "La auditoría externa es el examen realizado por contadores públicos independientes ajenos a la empresa."
        ],
        2,
        "Recuerda: La auditoría externa es el examen realizado por contadores públicos independientes ajenos a la empresa."
      ],
      [
        "Selecciona la afirmación que resume de mejor manera lo aprendido sobre auditoría externa:",
        [
          "Es un procedimiento opcional que las empresas pueden ignorar.",
          "La auditoría externa es el examen realizado por contadores públicos independientes ajenos a la empresa.",
          "Distorsiona la igualdad numérica de los registros contables."
        ],
        1,
        "Recuerda: La auditoría externa es el examen realizado por contadores públicos independientes ajenos a la empresa."
      ]
    ]
  },
  {
    "id": 64,
    "world": 7,
    "level": 4,
    "title": "Normas Internacionales de Auditoría (NIA)",
    "subtitle": "Conoce auditoría, control interno, auditoría externa, NIA y evidencia.",
    "sections": [
      [
        "Definición de la tarjeta",
        "Las NIA son los estándares internacionales que regulan los principios y procedimientos de auditoría."
      ],
      [
        "Explicación paso a paso",
        "Garantizan la calidad, uniformidad y rigor profesional en los encargos de auditoría."
      ],
      [
        "Ejemplo práctico",
        "Aplicar los requerimientos de independencia y escepticismo profesional exigidos por las NIA."
      ],
      [
        "Cómo reconocer el concepto",
        "Reconoce los estándares técnicos internacionales de auditoría."
      ],
      [
        "Lo que debes recordar",
        "Normas Internacionales de Auditoría (NIA): Las NIA son los estándares internacionales que regulan los principios y procedimientos de auditoría."
      ]
    ],
    "summary": "Normas Internacionales de Auditoría (NIA). Las NIA son los estándares internacionales que regulan los principios y procedimientos de auditoría.",
    "questions": [
      [
        "¿Cuál es la definición correcta de normas internacionales de auditoría (nia)?",
        [
          "Es un concepto ajeno a la gestión contable y financiera de la entidad.",
          "Las NIA son los estándares internacionales que regulan los principios y procedimientos de auditoría.",
          "Corresponde exclusivamente a un registro temporal sin validez formal."
        ],
        1,
        "Recuerda: Las NIA son los estándares internacionales que regulan los principios y procedimientos de auditoría."
      ],
      [
        "Según esta lección, ¿cómo se entiende el concepto de normas internacionales de auditoría (nia)?",
        [
          "Garantizan la calidad, uniformidad y rigor profesional en los encargos de auditoría.",
          "Se calcula restando todos los pasivos circulantes entre sí.",
          "Es un informe exclusivo para auditorías externas gubernamentales."
        ],
        0,
        "Recuerda: Las NIA son los estándares internacionales que regulan los principios y procedimientos de auditoría."
      ],
      [
        "¿Qué enunciado describe correctamente la aplicación práctica de normas internacionales de auditoría (nia)?",
        [
          "No tiene aplicación directa en las operaciones cotidianas de una empresa.",
          "Aplicar los requerimientos de independencia y escepticismo profesional exigidos por las NIA.",
          "Solo se aplica al cierre de operaciones fiscales anuales obligatorias."
        ],
        1,
        "Recuerda: Las NIA son los estándares internacionales que regulan los principios y procedimientos de auditoría."
      ],
      [
        "¿Cuál afirmación coincide exactamente con lo explicado sobre normas internacionales de auditoría (nia)?",
        [
          "Se relaciona directamente con la premisa: Las NIA son los estándares internacionales que regulan los principios y procedimientos de auditoría.",
          "Modifica de forma arbitraria la ecuación contable fundamental.",
          "Representa un pasivo exigible a corto plazo."
        ],
        0,
        "Recuerda: Las NIA son los estándares internacionales que regulan los principios y procedimientos de auditoría."
      ],
      [
        "Al estudiar normas internacionales de auditoría (nia), ¿qué aspecto clave debes identificar?",
        [
          "Su dependencia exclusiva de factores externos macroeconómicos.",
          "Reconoce los estándares técnicos internacionales de auditoría.",
          "Que no requiere ningún tipo de control ni registro documental."
        ],
        1,
        "Recuerda: Las NIA son los estándares internacionales que regulan los principios y procedimientos de auditoría."
      ],
      [
        "¿Qué opción expresa la idea central desarrollada en esta lección?",
        [
          "Los registros se realizan sin seguir ningún orden lógico ni cronológico.",
          "Las NIA son los estándares internacionales que regulan los principios y procedimientos de auditoría.",
          "Los estados financieros pierden toda validez legal al aplicarlo."
        ],
        1,
        "Recuerda: Las NIA son los estándares internacionales que regulan los principios y procedimientos de auditoría."
      ],
      [
        "De acuerdo con los fundamentos estudiados, ¿cómo opera normas internacionales de auditoría (nia)?",
        [
          "Garantizan la calidad, uniformidad y rigor profesional en los encargos de auditoría.",
          "Generando automáticamente pasivos contingentes para la entidad.",
          "Eliminando la necesidad de libros diario y mayor."
        ],
        0,
        "Recuerda: Las NIA son los estándares internacionales que regulan los principios y procedimientos de auditoría."
      ],
      [
        "¿Cuál de las siguientes opciones ejemplifica correctamente este concepto?",
        [
          "Modificar estados financieros sin soporte documental.",
          "Aplicar los requerimientos de independencia y escepticismo profesional exigidos por las NIA.",
          "Omitir el registro de operaciones mercantiles cotidianas."
        ],
        1,
        "Recuerda: Las NIA son los estándares internacionales que regulan los principios y procedimientos de auditoría."
      ],
      [
        "¿Qué descripción corresponde al principio fundamental explicado en normas internacionales de auditoría (nia)?",
        [
          "La supresión total de controles internos en la empresa.",
          "La aplicación de métodos empíricos sin base técnica.",
          "Las NIA son los estándares internacionales que regulan los principios y procedimientos de auditoría."
        ],
        2,
        "Recuerda: Las NIA son los estándares internacionales que regulan los principios y procedimientos de auditoría."
      ],
      [
        "Selecciona la afirmación que resume de mejor manera lo aprendido sobre normas internacionales de auditoría (nia):",
        [
          "Es un procedimiento opcional que las empresas pueden ignorar.",
          "Las NIA son los estándares internacionales que regulan los principios y procedimientos de auditoría.",
          "Distorsiona la igualdad numérica de los registros contables."
        ],
        1,
        "Recuerda: Las NIA son los estándares internacionales que regulan los principios y procedimientos de auditoría."
      ]
    ]
  },
  {
    "id": 65,
    "world": 7,
    "level": 5,
    "title": "Evidencia de auditoría",
    "subtitle": "Conoce auditoría, control interno, auditoría externa, NIA y evidencia.",
    "sections": [
      [
        "Definición de la tarjeta",
        "La evidencia de auditoría son todos los datos y documentos utilizados por el auditor para alcanzar conclusiones."
      ],
      [
        "Explicación paso a paso",
        "Debe ser suficiente (cantidad) y adecuada (calidad y pertinencia)."
      ],
      [
        "Ejemplo práctico",
        "Inspeccionar facturas físicas, confirmar saldos bancarios y realizar entrevistas."
      ],
      [
        "Cómo reconocer el concepto",
        "Busca los soportes probatorios del dictamen."
      ],
      [
        "Lo que debes recordar",
        "Evidencia de auditoría: La evidencia de auditoría son todos los datos y documentos utilizados por el auditor para alcanzar conclusiones."
      ]
    ],
    "summary": "Evidencia de auditoría. La evidencia de auditoría son todos los datos y documentos utilizados por el auditor para alcanzar conclusiones.",
    "questions": [
      [
        "¿Cuál es la definición correcta de evidencia de auditoría?",
        [
          "Es un concepto ajeno a la gestión contable y financiera de la entidad.",
          "La evidencia de auditoría son todos los datos y documentos utilizados por el auditor para alcanzar conclusiones.",
          "Corresponde exclusivamente a un registro temporal sin validez formal."
        ],
        1,
        "Recuerda: La evidencia de auditoría son todos los datos y documentos utilizados por el auditor para alcanzar conclusiones."
      ],
      [
        "Según esta lección, ¿cómo se entiende el concepto de evidencia de auditoría?",
        [
          "Debe ser suficiente (cantidad) y adecuada (calidad y pertinencia).",
          "Se calcula restando todos los pasivos circulantes entre sí.",
          "Es un informe exclusivo para auditorías externas gubernamentales."
        ],
        0,
        "Recuerda: La evidencia de auditoría son todos los datos y documentos utilizados por el auditor para alcanzar conclusiones."
      ],
      [
        "¿Qué enunciado describe correctamente la aplicación práctica de evidencia de auditoría?",
        [
          "No tiene aplicación directa en las operaciones cotidianas de una empresa.",
          "Inspeccionar facturas físicas, confirmar saldos bancarios y realizar entrevistas.",
          "Solo se aplica al cierre de operaciones fiscales anuales obligatorias."
        ],
        1,
        "Recuerda: La evidencia de auditoría son todos los datos y documentos utilizados por el auditor para alcanzar conclusiones."
      ],
      [
        "¿Cuál afirmación coincide exactamente con lo explicado sobre evidencia de auditoría?",
        [
          "Se relaciona directamente con la premisa: La evidencia de auditoría son todos los datos y documentos utilizados por el auditor para alcanzar conclusiones.",
          "Modifica de forma arbitraria la ecuación contable fundamental.",
          "Representa un pasivo exigible a corto plazo."
        ],
        0,
        "Recuerda: La evidencia de auditoría son todos los datos y documentos utilizados por el auditor para alcanzar conclusiones."
      ],
      [
        "Al estudiar evidencia de auditoría, ¿qué aspecto clave debes identificar?",
        [
          "Su dependencia exclusiva de factores externos macroeconómicos.",
          "Busca los soportes probatorios del dictamen.",
          "Que no requiere ningún tipo de control ni registro documental."
        ],
        1,
        "Recuerda: La evidencia de auditoría son todos los datos y documentos utilizados por el auditor para alcanzar conclusiones."
      ],
      [
        "¿Qué opción expresa la idea central desarrollada en esta lección?",
        [
          "Los registros se realizan sin seguir ningún orden lógico ni cronológico.",
          "La evidencia de auditoría son todos los datos y documentos utilizados por el auditor para alcanzar conclusiones.",
          "Los estados financieros pierden toda validez legal al aplicarlo."
        ],
        1,
        "Recuerda: La evidencia de auditoría son todos los datos y documentos utilizados por el auditor para alcanzar conclusiones."
      ],
      [
        "De acuerdo con los fundamentos estudiados, ¿cómo opera evidencia de auditoría?",
        [
          "Debe ser suficiente (cantidad) y adecuada (calidad y pertinencia).",
          "Generando automáticamente pasivos contingentes para la entidad.",
          "Eliminando la necesidad de libros diario y mayor."
        ],
        0,
        "Recuerda: La evidencia de auditoría son todos los datos y documentos utilizados por el auditor para alcanzar conclusiones."
      ],
      [
        "¿Cuál de las siguientes opciones ejemplifica correctamente este concepto?",
        [
          "Modificar estados financieros sin soporte documental.",
          "Inspeccionar facturas físicas, confirmar saldos bancarios y realizar entrevistas.",
          "Omitir el registro de operaciones mercantiles cotidianas."
        ],
        1,
        "Recuerda: La evidencia de auditoría son todos los datos y documentos utilizados por el auditor para alcanzar conclusiones."
      ],
      [
        "¿Qué descripción corresponde al principio fundamental explicado en evidencia de auditoría?",
        [
          "La supresión total de controles internos en la empresa.",
          "La aplicación de métodos empíricos sin base técnica.",
          "La evidencia de auditoría son todos los datos y documentos utilizados por el auditor para alcanzar conclusiones."
        ],
        2,
        "Recuerda: La evidencia de auditoría son todos los datos y documentos utilizados por el auditor para alcanzar conclusiones."
      ],
      [
        "Selecciona la afirmación que resume de mejor manera lo aprendido sobre evidencia de auditoría:",
        [
          "Es un procedimiento opcional que las empresas pueden ignorar.",
          "La evidencia de auditoría son todos los datos y documentos utilizados por el auditor para alcanzar conclusiones.",
          "Distorsiona la igualdad numérica de los registros contables."
        ],
        1,
        "Recuerda: La evidencia de auditoría son todos los datos y documentos utilizados por el auditor para alcanzar conclusiones."
      ]
    ]
  },
  {
    "id": 66,
    "world": 7,
    "level": 6,
    "title": "Independencia del auditor",
    "subtitle": "Conoce auditoría, control interno, auditoría externa, NIA y evidencia.",
    "sections": [
      [
        "Definición de la tarjeta",
        "La independencia es la actitud mental y apariencia de imparcialidad que debe mantener el auditor."
      ],
      [
        "Explicación paso a paso",
        "Evita vínculos financieros o familiares que comprometan la objetividad profesional."
      ],
      [
        "Ejemplo práctico",
        "Rechazar auditar una empresa donde el auditor posee acciones o familiares directos."
      ],
      [
        "Cómo reconocer el concepto",
        "Identifica el principio ético fundamental de objetividad en auditoría."
      ],
      [
        "Lo que debes recordar",
        "Independencia del auditor: La independencia es la actitud mental y apariencia de imparcialidad que debe mantener el auditor."
      ]
    ],
    "summary": "Independencia del auditor. La independencia es la actitud mental y apariencia de imparcialidad que debe mantener el auditor.",
    "questions": [
      [
        "¿Cuál es la definición correcta de independencia del auditor?",
        [
          "Es un concepto ajeno a la gestión contable y financiera de la entidad.",
          "La independencia es la actitud mental y apariencia de imparcialidad que debe mantener el auditor.",
          "Corresponde exclusivamente a un registro temporal sin validez formal."
        ],
        1,
        "Recuerda: La independencia es la actitud mental y apariencia de imparcialidad que debe mantener el auditor."
      ],
      [
        "Según esta lección, ¿cómo se entiende el concepto de independencia del auditor?",
        [
          "Evita vínculos financieros o familiares que comprometan la objetividad profesional.",
          "Se calcula restando todos los pasivos circulantes entre sí.",
          "Es un informe exclusivo para auditorías externas gubernamentales."
        ],
        0,
        "Recuerda: La independencia es la actitud mental y apariencia de imparcialidad que debe mantener el auditor."
      ],
      [
        "¿Qué enunciado describe correctamente la aplicación práctica de independencia del auditor?",
        [
          "No tiene aplicación directa en las operaciones cotidianas de una empresa.",
          "Rechazar auditar una empresa donde el auditor posee acciones o familiares directos.",
          "Solo se aplica al cierre de operaciones fiscales anuales obligatorias."
        ],
        1,
        "Recuerda: La independencia es la actitud mental y apariencia de imparcialidad que debe mantener el auditor."
      ],
      [
        "¿Cuál afirmación coincide exactamente con lo explicado sobre independencia del auditor?",
        [
          "Se relaciona directamente con la premisa: La independencia es la actitud mental y apariencia de imparcialidad que debe mantener el auditor.",
          "Modifica de forma arbitraria la ecuación contable fundamental.",
          "Representa un pasivo exigible a corto plazo."
        ],
        0,
        "Recuerda: La independencia es la actitud mental y apariencia de imparcialidad que debe mantener el auditor."
      ],
      [
        "Al estudiar independencia del auditor, ¿qué aspecto clave debes identificar?",
        [
          "Su dependencia exclusiva de factores externos macroeconómicos.",
          "Identifica el principio ético fundamental de objetividad en auditoría.",
          "Que no requiere ningún tipo de control ni registro documental."
        ],
        1,
        "Recuerda: La independencia es la actitud mental y apariencia de imparcialidad que debe mantener el auditor."
      ],
      [
        "¿Qué opción expresa la idea central desarrollada en esta lección?",
        [
          "Los registros se realizan sin seguir ningún orden lógico ni cronológico.",
          "La independencia es la actitud mental y apariencia de imparcialidad que debe mantener el auditor.",
          "Los estados financieros pierden toda validez legal al aplicarlo."
        ],
        1,
        "Recuerda: La independencia es la actitud mental y apariencia de imparcialidad que debe mantener el auditor."
      ],
      [
        "De acuerdo con los fundamentos estudiados, ¿cómo opera independencia del auditor?",
        [
          "Evita vínculos financieros o familiares que comprometan la objetividad profesional.",
          "Generando automáticamente pasivos contingentes para la entidad.",
          "Eliminando la necesidad de libros diario y mayor."
        ],
        0,
        "Recuerda: La independencia es la actitud mental y apariencia de imparcialidad que debe mantener el auditor."
      ],
      [
        "¿Cuál de las siguientes opciones ejemplifica correctamente este concepto?",
        [
          "Modificar estados financieros sin soporte documental.",
          "Rechazar auditar una empresa donde el auditor posee acciones o familiares directos.",
          "Omitir el registro de operaciones mercantiles cotidianas."
        ],
        1,
        "Recuerda: La independencia es la actitud mental y apariencia de imparcialidad que debe mantener el auditor."
      ],
      [
        "¿Qué descripción corresponde al principio fundamental explicado en independencia del auditor?",
        [
          "La supresión total de controles internos en la empresa.",
          "La aplicación de métodos empíricos sin base técnica.",
          "La independencia es la actitud mental y apariencia de imparcialidad que debe mantener el auditor."
        ],
        2,
        "Recuerda: La independencia es la actitud mental y apariencia de imparcialidad que debe mantener el auditor."
      ],
      [
        "Selecciona la afirmación que resume de mejor manera lo aprendido sobre independencia del auditor:",
        [
          "Es un procedimiento opcional que las empresas pueden ignorar.",
          "La independencia es la actitud mental y apariencia de imparcialidad que debe mantener el auditor.",
          "Distorsiona la igualdad numérica de los registros contables."
        ],
        1,
        "Recuerda: La independencia es la actitud mental y apariencia de imparcialidad que debe mantener el auditor."
      ]
    ]
  },
  {
    "id": 67,
    "world": 7,
    "level": 7,
    "title": "Riesgo de auditoría",
    "subtitle": "Conoce auditoría, control interno, auditoría externa, NIA y evidencia.",
    "sections": [
      [
        "Definición de la tarjeta",
        "El riesgo de auditoría es la posibilidad de que el auditor exprese una opinión inadecuada cuando los estados financieros contienen errores materiales."
      ],
      [
        "Explicación paso a paso",
        "Se compone de riesgo inherente, riesgo de control y riesgo de detección."
      ],
      [
        "Ejemplo práctico",
        "Evaluar que los controles débiles aumentan la probabilidad de no detectar fraudes."
      ],
      [
        "Cómo reconocer el concepto",
        "Reconoce la probabilidad de error en el dictamen."
      ],
      [
        "Lo que debes recordar",
        "Riesgo de auditoría: El riesgo de auditoría es la posibilidad de que el auditor exprese una opinión inadecuada cuando los estados financieros contienen errores materiales."
      ]
    ],
    "summary": "Riesgo de auditoría. El riesgo de auditoría es la posibilidad de que el auditor exprese una opinión inadecuada cuando los estados financieros contienen errores materiales.",
    "questions": [
      [
        "¿Cuál es la definición correcta de riesgo de auditoría?",
        [
          "Es un concepto ajeno a la gestión contable y financiera de la entidad.",
          "El riesgo de auditoría es la posibilidad de que el auditor exprese una opinión inadecuada cuando los estados financieros contienen errores materiales.",
          "Corresponde exclusivamente a un registro temporal sin validez formal."
        ],
        1,
        "Recuerda: El riesgo de auditoría es la posibilidad de que el auditor exprese una opinión inadecuada cuando los estados financieros contienen errores materiales."
      ],
      [
        "Según esta lección, ¿cómo se entiende el concepto de riesgo de auditoría?",
        [
          "Se compone de riesgo inherente, riesgo de control y riesgo de detección.",
          "Se calcula restando todos los pasivos circulantes entre sí.",
          "Es un informe exclusivo para auditorías externas gubernamentales."
        ],
        0,
        "Recuerda: El riesgo de auditoría es la posibilidad de que el auditor exprese una opinión inadecuada cuando los estados financieros contienen errores materiales."
      ],
      [
        "¿Qué enunciado describe correctamente la aplicación práctica de riesgo de auditoría?",
        [
          "No tiene aplicación directa en las operaciones cotidianas de una empresa.",
          "Evaluar que los controles débiles aumentan la probabilidad de no detectar fraudes.",
          "Solo se aplica al cierre de operaciones fiscales anuales obligatorias."
        ],
        1,
        "Recuerda: El riesgo de auditoría es la posibilidad de que el auditor exprese una opinión inadecuada cuando los estados financieros contienen errores materiales."
      ],
      [
        "¿Cuál afirmación coincide exactamente con lo explicado sobre riesgo de auditoría?",
        [
          "Se relaciona directamente con la premisa: El riesgo de auditoría es la posibilidad de que el auditor exprese una opinión inadecuada cuando los estados financieros contienen errores materiales.",
          "Modifica de forma arbitraria la ecuación contable fundamental.",
          "Representa un pasivo exigible a corto plazo."
        ],
        0,
        "Recuerda: El riesgo de auditoría es la posibilidad de que el auditor exprese una opinión inadecuada cuando los estados financieros contienen errores materiales."
      ],
      [
        "Al estudiar riesgo de auditoría, ¿qué aspecto clave debes identificar?",
        [
          "Su dependencia exclusiva de factores externos macroeconómicos.",
          "Reconoce la probabilidad de error en el dictamen.",
          "Que no requiere ningún tipo de control ni registro documental."
        ],
        1,
        "Recuerda: El riesgo de auditoría es la posibilidad de que el auditor exprese una opinión inadecuada cuando los estados financieros contienen errores materiales."
      ],
      [
        "¿Qué opción expresa la idea central desarrollada en esta lección?",
        [
          "Los registros se realizan sin seguir ningún orden lógico ni cronológico.",
          "El riesgo de auditoría es la posibilidad de que el auditor exprese una opinión inadecuada cuando los estados financieros contienen errores materiales.",
          "Los estados financieros pierden toda validez legal al aplicarlo."
        ],
        1,
        "Recuerda: El riesgo de auditoría es la posibilidad de que el auditor exprese una opinión inadecuada cuando los estados financieros contienen errores materiales."
      ],
      [
        "De acuerdo con los fundamentos estudiados, ¿cómo opera riesgo de auditoría?",
        [
          "Se compone de riesgo inherente, riesgo de control y riesgo de detección.",
          "Generando automáticamente pasivos contingentes para la entidad.",
          "Eliminando la necesidad de libros diario y mayor."
        ],
        0,
        "Recuerda: El riesgo de auditoría es la posibilidad de que el auditor exprese una opinión inadecuada cuando los estados financieros contienen errores materiales."
      ],
      [
        "¿Cuál de las siguientes opciones ejemplifica correctamente este concepto?",
        [
          "Modificar estados financieros sin soporte documental.",
          "Evaluar que los controles débiles aumentan la probabilidad de no detectar fraudes.",
          "Omitir el registro de operaciones mercantiles cotidianas."
        ],
        1,
        "Recuerda: El riesgo de auditoría es la posibilidad de que el auditor exprese una opinión inadecuada cuando los estados financieros contienen errores materiales."
      ],
      [
        "¿Qué descripción corresponde al principio fundamental explicado en riesgo de auditoría?",
        [
          "La supresión total de controles internos en la empresa.",
          "La aplicación de métodos empíricos sin base técnica.",
          "El riesgo de auditoría es la posibilidad de que el auditor exprese una opinión inadecuada cuando los estados financieros contienen errores materiales."
        ],
        2,
        "Recuerda: El riesgo de auditoría es la posibilidad de que el auditor exprese una opinión inadecuada cuando los estados financieros contienen errores materiales."
      ],
      [
        "Selecciona la afirmación que resume de mejor manera lo aprendido sobre riesgo de auditoría:",
        [
          "Es un procedimiento opcional que las empresas pueden ignorar.",
          "El riesgo de auditoría es la posibilidad de que el auditor exprese una opinión inadecuada cuando los estados financieros contienen errores materiales.",
          "Distorsiona la igualdad numérica de los registros contables."
        ],
        1,
        "Recuerda: El riesgo de auditoría es la posibilidad de que el auditor exprese una opinión inadecuada cuando los estados financieros contienen errores materiales."
      ]
    ]
  },
  {
    "id": 68,
    "world": 7,
    "level": 8,
    "title": "Papeles de trabajo",
    "subtitle": "Conoce auditoría, control interno, auditoría externa, NIA y evidencia.",
    "sections": [
      [
        "Definición de la tarjeta",
        "Los papeles de trabajo son los registros donde el auditor documenta las pruebas realizadas y conclusiones."
      ],
      [
        "Explicación paso a paso",
        "Sirven de sustento detallado del dictamen emitido y demuestran el cumplimiento de las NIA."
      ],
      [
        "Ejemplo práctico",
        "Archivar planillas de conciliación bancaria y cuestionarios de control interno evaluados."
      ],
      [
        "Cómo reconocer el concepto",
        "Identifica el expediente probatorio del auditor."
      ],
      [
        "Lo que debes recordar",
        "Papeles de trabajo: Los papeles de trabajo son los registros donde el auditor documenta las pruebas realizadas y conclusiones."
      ]
    ],
    "summary": "Papeles de trabajo. Los papeles de trabajo son los registros donde el auditor documenta las pruebas realizadas y conclusiones.",
    "questions": [
      [
        "¿Cuál es la definición correcta de papeles de trabajo?",
        [
          "Es un concepto ajeno a la gestión contable y financiera de la entidad.",
          "Los papeles de trabajo son los registros donde el auditor documenta las pruebas realizadas y conclusiones.",
          "Corresponde exclusivamente a un registro temporal sin validez formal."
        ],
        1,
        "Recuerda: Los papeles de trabajo son los registros donde el auditor documenta las pruebas realizadas y conclusiones."
      ],
      [
        "Según esta lección, ¿cómo se entiende el concepto de papeles de trabajo?",
        [
          "Sirven de sustento detallado del dictamen emitido y demuestran el cumplimiento de las NIA.",
          "Se calcula restando todos los pasivos circulantes entre sí.",
          "Es un informe exclusivo para auditorías externas gubernamentales."
        ],
        0,
        "Recuerda: Los papeles de trabajo son los registros donde el auditor documenta las pruebas realizadas y conclusiones."
      ],
      [
        "¿Qué enunciado describe correctamente la aplicación práctica de papeles de trabajo?",
        [
          "No tiene aplicación directa en las operaciones cotidianas de una empresa.",
          "Archivar planillas de conciliación bancaria y cuestionarios de control interno evaluados.",
          "Solo se aplica al cierre de operaciones fiscales anuales obligatorias."
        ],
        1,
        "Recuerda: Los papeles de trabajo son los registros donde el auditor documenta las pruebas realizadas y conclusiones."
      ],
      [
        "¿Cuál afirmación coincide exactamente con lo explicado sobre papeles de trabajo?",
        [
          "Se relaciona directamente con la premisa: Los papeles de trabajo son los registros donde el auditor documenta las pruebas realizadas y conclusiones.",
          "Modifica de forma arbitraria la ecuación contable fundamental.",
          "Representa un pasivo exigible a corto plazo."
        ],
        0,
        "Recuerda: Los papeles de trabajo son los registros donde el auditor documenta las pruebas realizadas y conclusiones."
      ],
      [
        "Al estudiar papeles de trabajo, ¿qué aspecto clave debes identificar?",
        [
          "Su dependencia exclusiva de factores externos macroeconómicos.",
          "Identifica el expediente probatorio del auditor.",
          "Que no requiere ningún tipo de control ni registro documental."
        ],
        1,
        "Recuerda: Los papeles de trabajo son los registros donde el auditor documenta las pruebas realizadas y conclusiones."
      ],
      [
        "¿Qué opción expresa la idea central desarrollada en esta lección?",
        [
          "Los registros se realizan sin seguir ningún orden lógico ni cronológico.",
          "Los papeles de trabajo son los registros donde el auditor documenta las pruebas realizadas y conclusiones.",
          "Los estados financieros pierden toda validez legal al aplicarlo."
        ],
        1,
        "Recuerda: Los papeles de trabajo son los registros donde el auditor documenta las pruebas realizadas y conclusiones."
      ],
      [
        "De acuerdo con los fundamentos estudiados, ¿cómo opera papeles de trabajo?",
        [
          "Sirven de sustento detallado del dictamen emitido y demuestran el cumplimiento de las NIA.",
          "Generando automáticamente pasivos contingentes para la entidad.",
          "Eliminando la necesidad de libros diario y mayor."
        ],
        0,
        "Recuerda: Los papeles de trabajo son los registros donde el auditor documenta las pruebas realizadas y conclusiones."
      ],
      [
        "¿Cuál de las siguientes opciones ejemplifica correctamente este concepto?",
        [
          "Modificar estados financieros sin soporte documental.",
          "Archivar planillas de conciliación bancaria y cuestionarios de control interno evaluados.",
          "Omitir el registro de operaciones mercantiles cotidianas."
        ],
        1,
        "Recuerda: Los papeles de trabajo son los registros donde el auditor documenta las pruebas realizadas y conclusiones."
      ],
      [
        "¿Qué descripción corresponde al principio fundamental explicado en papeles de trabajo?",
        [
          "La supresión total de controles internos en la empresa.",
          "La aplicación de métodos empíricos sin base técnica.",
          "Los papeles de trabajo son los registros donde el auditor documenta las pruebas realizadas y conclusiones."
        ],
        2,
        "Recuerda: Los papeles de trabajo son los registros donde el auditor documenta las pruebas realizadas y conclusiones."
      ],
      [
        "Selecciona la afirmación que resume de mejor manera lo aprendido sobre papeles de trabajo:",
        [
          "Es un procedimiento opcional que las empresas pueden ignorar.",
          "Los papeles de trabajo son los registros donde el auditor documenta las pruebas realizadas y conclusiones.",
          "Distorsiona la igualdad numérica de los registros contables."
        ],
        1,
        "Recuerda: Los papeles de trabajo son los registros donde el auditor documenta las pruebas realizadas y conclusiones."
      ]
    ]
  },
  {
    "id": 69,
    "world": 7,
    "level": 9,
    "title": "Dictamen de auditoría",
    "subtitle": "Conoce auditoría, control interno, auditoría externa, NIA y evidencia.",
    "sections": [
      [
        "Definición de la tarjeta",
        "El dictamen de auditoría es el informe formal donde el auditor expresa su opinión sobre los estados financieros."
      ],
      [
        "Explicación paso a paso",
        "Puede ser opinión limpia (sin salvedades), con salvedades, adversa o abstención de opinión."
      ],
      [
        "Ejemplo práctico",
        "Emitir un informe declarando que los estados financieros presentan fielmente la situación contable."
      ],
      [
        "Cómo reconocer el concepto",
        "Busca el informe final de opinión profesional."
      ],
      [
        "Lo que debes recordar",
        "Dictamen de auditoría: El dictamen de auditoría es el informe formal donde el auditor expresa su opinión sobre los estados financieros."
      ]
    ],
    "summary": "Dictamen de auditoría. El dictamen de auditoría es el informe formal donde el auditor expresa su opinión sobre los estados financieros.",
    "questions": [
      [
        "¿Cuál es la definición correcta de dictamen de auditoría?",
        [
          "Es un concepto ajeno a la gestión contable y financiera de la entidad.",
          "El dictamen de auditoría es el informe formal donde el auditor expresa su opinión sobre los estados financieros.",
          "Corresponde exclusivamente a un registro temporal sin validez formal."
        ],
        1,
        "Recuerda: El dictamen de auditoría es el informe formal donde el auditor expresa su opinión sobre los estados financieros."
      ],
      [
        "Según esta lección, ¿cómo se entiende el concepto de dictamen de auditoría?",
        [
          "Puede ser opinión limpia (sin salvedades), con salvedades, adversa o abstención de opinión.",
          "Se calcula restando todos los pasivos circulantes entre sí.",
          "Es un informe exclusivo para auditorías externas gubernamentales."
        ],
        0,
        "Recuerda: El dictamen de auditoría es el informe formal donde el auditor expresa su opinión sobre los estados financieros."
      ],
      [
        "¿Qué enunciado describe correctamente la aplicación práctica de dictamen de auditoría?",
        [
          "No tiene aplicación directa en las operaciones cotidianas de una empresa.",
          "Emitir un informe declarando que los estados financieros presentan fielmente la situación contable.",
          "Solo se aplica al cierre de operaciones fiscales anuales obligatorias."
        ],
        1,
        "Recuerda: El dictamen de auditoría es el informe formal donde el auditor expresa su opinión sobre los estados financieros."
      ],
      [
        "¿Cuál afirmación coincide exactamente con lo explicado sobre dictamen de auditoría?",
        [
          "Se relaciona directamente con la premisa: El dictamen de auditoría es el informe formal donde el auditor expresa su opinión sobre los estados financieros.",
          "Modifica de forma arbitraria la ecuación contable fundamental.",
          "Representa un pasivo exigible a corto plazo."
        ],
        0,
        "Recuerda: El dictamen de auditoría es el informe formal donde el auditor expresa su opinión sobre los estados financieros."
      ],
      [
        "Al estudiar dictamen de auditoría, ¿qué aspecto clave debes identificar?",
        [
          "Su dependencia exclusiva de factores externos macroeconómicos.",
          "Busca el informe final de opinión profesional.",
          "Que no requiere ningún tipo de control ni registro documental."
        ],
        1,
        "Recuerda: El dictamen de auditoría es el informe formal donde el auditor expresa su opinión sobre los estados financieros."
      ],
      [
        "¿Qué opción expresa la idea central desarrollada en esta lección?",
        [
          "Los registros se realizan sin seguir ningún orden lógico ni cronológico.",
          "El dictamen de auditoría es el informe formal donde el auditor expresa su opinión sobre los estados financieros.",
          "Los estados financieros pierden toda validez legal al aplicarlo."
        ],
        1,
        "Recuerda: El dictamen de auditoría es el informe formal donde el auditor expresa su opinión sobre los estados financieros."
      ],
      [
        "De acuerdo con los fundamentos estudiados, ¿cómo opera dictamen de auditoría?",
        [
          "Puede ser opinión limpia (sin salvedades), con salvedades, adversa o abstención de opinión.",
          "Generando automáticamente pasivos contingentes para la entidad.",
          "Eliminando la necesidad de libros diario y mayor."
        ],
        0,
        "Recuerda: El dictamen de auditoría es el informe formal donde el auditor expresa su opinión sobre los estados financieros."
      ],
      [
        "¿Cuál de las siguientes opciones ejemplifica correctamente este concepto?",
        [
          "Modificar estados financieros sin soporte documental.",
          "Emitir un informe declarando que los estados financieros presentan fielmente la situación contable.",
          "Omitir el registro de operaciones mercantiles cotidianas."
        ],
        1,
        "Recuerda: El dictamen de auditoría es el informe formal donde el auditor expresa su opinión sobre los estados financieros."
      ],
      [
        "¿Qué descripción corresponde al principio fundamental explicado en dictamen de auditoría?",
        [
          "La supresión total de controles internos en la empresa.",
          "La aplicación de métodos empíricos sin base técnica.",
          "El dictamen de auditoría es el informe formal donde el auditor expresa su opinión sobre los estados financieros."
        ],
        2,
        "Recuerda: El dictamen de auditoría es el informe formal donde el auditor expresa su opinión sobre los estados financieros."
      ],
      [
        "Selecciona la afirmación que resume de mejor manera lo aprendido sobre dictamen de auditoría:",
        [
          "Es un procedimiento opcional que las empresas pueden ignorar.",
          "El dictamen de auditoría es el informe formal donde el auditor expresa su opinión sobre los estados financieros.",
          "Distorsiona la igualdad numérica de los registros contables."
        ],
        1,
        "Recuerda: El dictamen de auditoría es el informe formal donde el auditor expresa su opinión sobre los estados financieros."
      ]
    ]
  },
  {
    "id": 70,
    "world": 7,
    "level": 10,
    "title": "Repaso de auditoría",
    "subtitle": "Conoce auditoría, control interno, auditoría externa, NIA y evidencia.",
    "sections": [
      [
        "Definición de la tarjeta",
        "La auditoría evalúa el control interno y aplica las NIA para recopilar evidencia y emitir un dictamen independiente."
      ],
      [
        "Explicación paso a paso",
        "Integra todo el proceso de fiscalización y garantía contable."
      ],
      [
        "Ejemplo práctico",
        "Revisar controles, aplicar pruebas, obtener evidencia y dictaminar estados financieros."
      ],
      [
        "Cómo reconocer el concepto",
        "Reconoce el proceso completo de auditoría."
      ],
      [
        "Lo que debes recordar",
        "Repaso de auditoría: La auditoría evalúa el control interno y aplica las NIA para recopilar evidencia y emitir un dictamen independiente."
      ]
    ],
    "summary": "Repaso de auditoría. La auditoría evalúa el control interno y aplica las NIA para recopilar evidencia y emitir un dictamen independiente.",
    "questions": [
      [
        "¿Cuál es la definición correcta de repaso de auditoría?",
        [
          "Es un concepto ajeno a la gestión contable y financiera de la entidad.",
          "La auditoría evalúa el control interno y aplica las NIA para recopilar evidencia y emitir un dictamen independiente.",
          "Corresponde exclusivamente a un registro temporal sin validez formal."
        ],
        1,
        "Recuerda: La auditoría evalúa el control interno y aplica las NIA para recopilar evidencia y emitir un dictamen independiente."
      ],
      [
        "Según esta lección, ¿cómo se entiende el concepto de repaso de auditoría?",
        [
          "Integra todo el proceso de fiscalización y garantía contable.",
          "Se calcula restando todos los pasivos circulantes entre sí.",
          "Es un informe exclusivo para auditorías externas gubernamentales."
        ],
        0,
        "Recuerda: La auditoría evalúa el control interno y aplica las NIA para recopilar evidencia y emitir un dictamen independiente."
      ],
      [
        "¿Qué enunciado describe correctamente la aplicación práctica de repaso de auditoría?",
        [
          "No tiene aplicación directa en las operaciones cotidianas de una empresa.",
          "Revisar controles, aplicar pruebas, obtener evidencia y dictaminar estados financieros.",
          "Solo se aplica al cierre de operaciones fiscales anuales obligatorias."
        ],
        1,
        "Recuerda: La auditoría evalúa el control interno y aplica las NIA para recopilar evidencia y emitir un dictamen independiente."
      ],
      [
        "¿Cuál afirmación coincide exactamente con lo explicado sobre repaso de auditoría?",
        [
          "Se relaciona directamente con la premisa: La auditoría evalúa el control interno y aplica las NIA para recopilar evidencia y emitir un dictamen independiente.",
          "Modifica de forma arbitraria la ecuación contable fundamental.",
          "Representa un pasivo exigible a corto plazo."
        ],
        0,
        "Recuerda: La auditoría evalúa el control interno y aplica las NIA para recopilar evidencia y emitir un dictamen independiente."
      ],
      [
        "Al estudiar repaso de auditoría, ¿qué aspecto clave debes identificar?",
        [
          "Su dependencia exclusiva de factores externos macroeconómicos.",
          "Reconoce el proceso completo de auditoría.",
          "Que no requiere ningún tipo de control ni registro documental."
        ],
        1,
        "Recuerda: La auditoría evalúa el control interno y aplica las NIA para recopilar evidencia y emitir un dictamen independiente."
      ],
      [
        "¿Qué opción expresa la idea central desarrollada en esta lección?",
        [
          "Los registros se realizan sin seguir ningún orden lógico ni cronológico.",
          "La auditoría evalúa el control interno y aplica las NIA para recopilar evidencia y emitir un dictamen independiente.",
          "Los estados financieros pierden toda validez legal al aplicarlo."
        ],
        1,
        "Recuerda: La auditoría evalúa el control interno y aplica las NIA para recopilar evidencia y emitir un dictamen independiente."
      ],
      [
        "De acuerdo con los fundamentos estudiados, ¿cómo opera repaso de auditoría?",
        [
          "Integra todo el proceso de fiscalización y garantía contable.",
          "Generando automáticamente pasivos contingentes para la entidad.",
          "Eliminando la necesidad de libros diario y mayor."
        ],
        0,
        "Recuerda: La auditoría evalúa el control interno y aplica las NIA para recopilar evidencia y emitir un dictamen independiente."
      ],
      [
        "¿Cuál de las siguientes opciones ejemplifica correctamente este concepto?",
        [
          "Modificar estados financieros sin soporte documental.",
          "Revisar controles, aplicar pruebas, obtener evidencia y dictaminar estados financieros.",
          "Omitir el registro de operaciones mercantiles cotidianas."
        ],
        1,
        "Recuerda: La auditoría evalúa el control interno y aplica las NIA para recopilar evidencia y emitir un dictamen independiente."
      ],
      [
        "¿Qué descripción corresponde al principio fundamental explicado en repaso de auditoría?",
        [
          "La supresión total de controles internos en la empresa.",
          "La aplicación de métodos empíricos sin base técnica.",
          "La auditoría evalúa el control interno y aplica las NIA para recopilar evidencia y emitir un dictamen independiente."
        ],
        2,
        "Recuerda: La auditoría evalúa el control interno y aplica las NIA para recopilar evidencia y emitir un dictamen independiente."
      ],
      [
        "Selecciona la afirmación que resume de mejor manera lo aprendido sobre repaso de auditoría:",
        [
          "Es un procedimiento opcional que las empresas pueden ignorar.",
          "La auditoría evalúa el control interno y aplica las NIA para recopilar evidencia y emitir un dictamen independiente.",
          "Distorsiona la igualdad numérica de los registros contables."
        ],
        1,
        "Recuerda: La auditoría evalúa el control interno y aplica las NIA para recopilar evidencia y emitir un dictamen independiente."
      ]
    ]
  },
  {
    "id": 71,
    "world": 8,
    "level": 1,
    "title": "Principio de uniformidad",
    "subtitle": "Familiarízate con uniformidad, NIIF, NIIF para PYMES, NIC 37 y NIC 16.",
    "sections": [
      [
        "Definición de la tarjeta",
        "El principio de uniformidad exige que una vez adoptados los criterios contables, se mantengan en el tiempo."
      ],
      [
        "Explicación paso a paso",
        "Permite que los estados financieros de diferentes periodos sean comparables entre sí."
      ],
      [
        "Ejemplo práctico",
        "No cambiar arbitrariamente el método de depreciación de activos de un año a otro."
      ],
      [
        "Cómo reconocer el concepto",
        "Identifica la consistencia temporal de métodos contables."
      ],
      [
        "Lo que debes recordar",
        "Principio de uniformidad: El principio de uniformidad exige que una vez adoptados los criterios contables, se mantengan en el tiempo."
      ]
    ],
    "summary": "Principio de uniformidad. El principio de uniformidad exige que una vez adoptados los criterios contables, se mantengan en el tiempo.",
    "questions": [
      [
        "¿Cuál es la definición correcta de principio de uniformidad?",
        [
          "Es un concepto ajeno a la gestión contable y financiera de la entidad.",
          "El principio de uniformidad exige que una vez adoptados los criterios contables, se mantengan en el tiempo.",
          "Corresponde exclusivamente a un registro temporal sin validez formal."
        ],
        1,
        "Recuerda: El principio de uniformidad exige que una vez adoptados los criterios contables, se mantengan en el tiempo."
      ],
      [
        "Según esta lección, ¿cómo se entiende el concepto de principio de uniformidad?",
        [
          "Permite que los estados financieros de diferentes periodos sean comparables entre sí.",
          "Se calcula restando todos los pasivos circulantes entre sí.",
          "Es un informe exclusivo para auditorías externas gubernamentales."
        ],
        0,
        "Recuerda: El principio de uniformidad exige que una vez adoptados los criterios contables, se mantengan en el tiempo."
      ],
      [
        "¿Qué enunciado describe correctamente la aplicación práctica de principio de uniformidad?",
        [
          "No tiene aplicación directa en las operaciones cotidianas de una empresa.",
          "No cambiar arbitrariamente el método de depreciación de activos de un año a otro.",
          "Solo se aplica al cierre de operaciones fiscales anuales obligatorias."
        ],
        1,
        "Recuerda: El principio de uniformidad exige que una vez adoptados los criterios contables, se mantengan en el tiempo."
      ],
      [
        "¿Cuál afirmación coincide exactamente con lo explicado sobre principio de uniformidad?",
        [
          "Se relaciona directamente con la premisa: El principio de uniformidad exige que una vez adoptados los criterios contables, se mantengan en el tiempo.",
          "Modifica de forma arbitraria la ecuación contable fundamental.",
          "Representa un pasivo exigible a corto plazo."
        ],
        0,
        "Recuerda: El principio de uniformidad exige que una vez adoptados los criterios contables, se mantengan en el tiempo."
      ],
      [
        "Al estudiar principio de uniformidad, ¿qué aspecto clave debes identificar?",
        [
          "Su dependencia exclusiva de factores externos macroeconómicos.",
          "Identifica la consistencia temporal de métodos contables.",
          "Que no requiere ningún tipo de control ni registro documental."
        ],
        1,
        "Recuerda: El principio de uniformidad exige que una vez adoptados los criterios contables, se mantengan en el tiempo."
      ],
      [
        "¿Qué opción expresa la idea central desarrollada en esta lección?",
        [
          "Los registros se realizan sin seguir ningún orden lógico ni cronológico.",
          "El principio de uniformidad exige que una vez adoptados los criterios contables, se mantengan en el tiempo.",
          "Los estados financieros pierden toda validez legal al aplicarlo."
        ],
        1,
        "Recuerda: El principio de uniformidad exige que una vez adoptados los criterios contables, se mantengan en el tiempo."
      ],
      [
        "De acuerdo con los fundamentos estudiados, ¿cómo opera principio de uniformidad?",
        [
          "Permite que los estados financieros de diferentes periodos sean comparables entre sí.",
          "Generando automáticamente pasivos contingentes para la entidad.",
          "Eliminando la necesidad de libros diario y mayor."
        ],
        0,
        "Recuerda: El principio de uniformidad exige que una vez adoptados los criterios contables, se mantengan en el tiempo."
      ],
      [
        "¿Cuál de las siguientes opciones ejemplifica correctamente este concepto?",
        [
          "Modificar estados financieros sin soporte documental.",
          "No cambiar arbitrariamente el método de depreciación de activos de un año a otro.",
          "Omitir el registro de operaciones mercantiles cotidianas."
        ],
        1,
        "Recuerda: El principio de uniformidad exige que una vez adoptados los criterios contables, se mantengan en el tiempo."
      ],
      [
        "¿Qué descripción corresponde al principio fundamental explicado en principio de uniformidad?",
        [
          "La supresión total de controles internos en la empresa.",
          "La aplicación de métodos empíricos sin base técnica.",
          "El principio de uniformidad exige que una vez adoptados los criterios contables, se mantengan en el tiempo."
        ],
        2,
        "Recuerda: El principio de uniformidad exige que una vez adoptados los criterios contables, se mantengan en el tiempo."
      ],
      [
        "Selecciona la afirmación que resume de mejor manera lo aprendido sobre principio de uniformidad:",
        [
          "Es un procedimiento opcional que las empresas pueden ignorar.",
          "El principio de uniformidad exige que una vez adoptados los criterios contables, se mantengan en el tiempo.",
          "Distorsiona la igualdad numérica de los registros contables."
        ],
        1,
        "Recuerda: El principio de uniformidad exige que una vez adoptados los criterios contables, se mantengan en el tiempo."
      ]
    ]
  },
  {
    "id": 72,
    "world": 8,
    "level": 2,
    "title": "NIIF (IFRS)",
    "subtitle": "Familiarízate con uniformidad, NIIF, NIIF para PYMES, NIC 37 y NIC 16.",
    "sections": [
      [
        "Definición de la tarjeta",
        "Las NIIF son los estándares contables globales emitidos para garantizar transparencia y comparabilidad."
      ],
      [
        "Explicación paso a paso",
        "Regulan el reconocimiento, medición, presentación y revelación de transacciones."
      ],
      [
        "Ejemplo práctico",
        "Preparar los estados financieros corporativos cumpliendo las normativas internacionales vigentes."
      ],
      [
        "Cómo reconocer el concepto",
        "Reconoce los estándares contables mundiales."
      ],
      [
        "Lo que debes recordar",
        "NIIF (IFRS): Las NIIF son los estándares contables globales emitidos para garantizar transparencia y comparabilidad."
      ]
    ],
    "summary": "NIIF (IFRS). Las NIIF son los estándares contables globales emitidos para garantizar transparencia y comparabilidad.",
    "questions": [
      [
        "¿Cuál es la definición correcta de niif (ifrs)?",
        [
          "Es un concepto ajeno a la gestión contable y financiera de la entidad.",
          "Las NIIF son los estándares contables globales emitidos para garantizar transparencia y comparabilidad.",
          "Corresponde exclusivamente a un registro temporal sin validez formal."
        ],
        1,
        "Recuerda: Las NIIF son los estándares contables globales emitidos para garantizar transparencia y comparabilidad."
      ],
      [
        "Según esta lección, ¿cómo se entiende el concepto de niif (ifrs)?",
        [
          "Regulan el reconocimiento, medición, presentación y revelación de transacciones.",
          "Se calcula restando todos los pasivos circulantes entre sí.",
          "Es un informe exclusivo para auditorías externas gubernamentales."
        ],
        0,
        "Recuerda: Las NIIF son los estándares contables globales emitidos para garantizar transparencia y comparabilidad."
      ],
      [
        "¿Qué enunciado describe correctamente la aplicación práctica de niif (ifrs)?",
        [
          "No tiene aplicación directa en las operaciones cotidianas de una empresa.",
          "Preparar los estados financieros corporativos cumpliendo las normativas internacionales vigentes.",
          "Solo se aplica al cierre de operaciones fiscales anuales obligatorias."
        ],
        1,
        "Recuerda: Las NIIF son los estándares contables globales emitidos para garantizar transparencia y comparabilidad."
      ],
      [
        "¿Cuál afirmación coincide exactamente con lo explicado sobre niif (ifrs)?",
        [
          "Se relaciona directamente con la premisa: Las NIIF son los estándares contables globales emitidos para garantizar transparencia y comparabilidad.",
          "Modifica de forma arbitraria la ecuación contable fundamental.",
          "Representa un pasivo exigible a corto plazo."
        ],
        0,
        "Recuerda: Las NIIF son los estándares contables globales emitidos para garantizar transparencia y comparabilidad."
      ],
      [
        "Al estudiar niif (ifrs), ¿qué aspecto clave debes identificar?",
        [
          "Su dependencia exclusiva de factores externos macroeconómicos.",
          "Reconoce los estándares contables mundiales.",
          "Que no requiere ningún tipo de control ni registro documental."
        ],
        1,
        "Recuerda: Las NIIF son los estándares contables globales emitidos para garantizar transparencia y comparabilidad."
      ],
      [
        "¿Qué opción expresa la idea central desarrollada en esta lección?",
        [
          "Los registros se realizan sin seguir ningún orden lógico ni cronológico.",
          "Las NIIF son los estándares contables globales emitidos para garantizar transparencia y comparabilidad.",
          "Los estados financieros pierden toda validez legal al aplicarlo."
        ],
        1,
        "Recuerda: Las NIIF son los estándares contables globales emitidos para garantizar transparencia y comparabilidad."
      ],
      [
        "De acuerdo con los fundamentos estudiados, ¿cómo opera niif (ifrs)?",
        [
          "Regulan el reconocimiento, medición, presentación y revelación de transacciones.",
          "Generando automáticamente pasivos contingentes para la entidad.",
          "Eliminando la necesidad de libros diario y mayor."
        ],
        0,
        "Recuerda: Las NIIF son los estándares contables globales emitidos para garantizar transparencia y comparabilidad."
      ],
      [
        "¿Cuál de las siguientes opciones ejemplifica correctamente este concepto?",
        [
          "Modificar estados financieros sin soporte documental.",
          "Preparar los estados financieros corporativos cumpliendo las normativas internacionales vigentes.",
          "Omitir el registro de operaciones mercantiles cotidianas."
        ],
        1,
        "Recuerda: Las NIIF son los estándares contables globales emitidos para garantizar transparencia y comparabilidad."
      ],
      [
        "¿Qué descripción corresponde al principio fundamental explicado en niif (ifrs)?",
        [
          "La supresión total de controles internos en la empresa.",
          "La aplicación de métodos empíricos sin base técnica.",
          "Las NIIF son los estándares contables globales emitidos para garantizar transparencia y comparabilidad."
        ],
        2,
        "Recuerda: Las NIIF son los estándares contables globales emitidos para garantizar transparencia y comparabilidad."
      ],
      [
        "Selecciona la afirmación que resume de mejor manera lo aprendido sobre niif (ifrs):",
        [
          "Es un procedimiento opcional que las empresas pueden ignorar.",
          "Las NIIF son los estándares contables globales emitidos para garantizar transparencia y comparabilidad.",
          "Distorsiona la igualdad numérica de los registros contables."
        ],
        1,
        "Recuerda: Las NIIF son los estándares contables globales emitidos para garantizar transparencia y comparabilidad."
      ]
    ]
  },
  {
    "id": 73,
    "world": 8,
    "level": 3,
    "title": "NIIF para PYMES",
    "subtitle": "Familiarízate con uniformidad, NIIF, NIIF para PYMES, NIC 37 y NIC 16.",
    "sections": [
      [
        "Definición de la tarjeta",
        "Las NIIF para PYMES son estándares adaptados que reducen la complejidad para pequeñas y medianas empresas."
      ],
      [
        "Explicación paso a paso",
        "Mantienen principios rigurosos pero eliminan requerimientos no aplicables a empresas no cotizadas."
      ],
      [
        "Ejemplo práctico",
        "Una mediana empresa adopta la norma simplificada para rendir informes financieros."
      ],
      [
        "Cómo reconocer el concepto",
        "Identifica el marco contable simplificado."
      ],
      [
        "Lo que debes recordar",
        "NIIF para PYMES: Las NIIF para PYMES son estándares adaptados que reducen la complejidad para pequeñas y medianas empresas."
      ]
    ],
    "summary": "NIIF para PYMES. Las NIIF para PYMES son estándares adaptados que reducen la complejidad para pequeñas y medianas empresas.",
    "questions": [
      [
        "¿Cuál es la definición correcta de niif para pymes?",
        [
          "Es un concepto ajeno a la gestión contable y financiera de la entidad.",
          "Las NIIF para PYMES son estándares adaptados que reducen la complejidad para pequeñas y medianas empresas.",
          "Corresponde exclusivamente a un registro temporal sin validez formal."
        ],
        1,
        "Recuerda: Las NIIF para PYMES son estándares adaptados que reducen la complejidad para pequeñas y medianas empresas."
      ],
      [
        "Según esta lección, ¿cómo se entiende el concepto de niif para pymes?",
        [
          "Mantienen principios rigurosos pero eliminan requerimientos no aplicables a empresas no cotizadas.",
          "Se calcula restando todos los pasivos circulantes entre sí.",
          "Es un informe exclusivo para auditorías externas gubernamentales."
        ],
        0,
        "Recuerda: Las NIIF para PYMES son estándares adaptados que reducen la complejidad para pequeñas y medianas empresas."
      ],
      [
        "¿Qué enunciado describe correctamente la aplicación práctica de niif para pymes?",
        [
          "No tiene aplicación directa en las operaciones cotidianas de una empresa.",
          "Una mediana empresa adopta la norma simplificada para rendir informes financieros.",
          "Solo se aplica al cierre de operaciones fiscales anuales obligatorias."
        ],
        1,
        "Recuerda: Las NIIF para PYMES son estándares adaptados que reducen la complejidad para pequeñas y medianas empresas."
      ],
      [
        "¿Cuál afirmación coincide exactamente con lo explicado sobre niif para pymes?",
        [
          "Se relaciona directamente con la premisa: Las NIIF para PYMES son estándares adaptados que reducen la complejidad para pequeñas y medianas empresas.",
          "Modifica de forma arbitraria la ecuación contable fundamental.",
          "Representa un pasivo exigible a corto plazo."
        ],
        0,
        "Recuerda: Las NIIF para PYMES son estándares adaptados que reducen la complejidad para pequeñas y medianas empresas."
      ],
      [
        "Al estudiar niif para pymes, ¿qué aspecto clave debes identificar?",
        [
          "Su dependencia exclusiva de factores externos macroeconómicos.",
          "Identifica el marco contable simplificado.",
          "Que no requiere ningún tipo de control ni registro documental."
        ],
        1,
        "Recuerda: Las NIIF para PYMES son estándares adaptados que reducen la complejidad para pequeñas y medianas empresas."
      ],
      [
        "¿Qué opción expresa la idea central desarrollada en esta lección?",
        [
          "Los registros se realizan sin seguir ningún orden lógico ni cronológico.",
          "Las NIIF para PYMES son estándares adaptados que reducen la complejidad para pequeñas y medianas empresas.",
          "Los estados financieros pierden toda validez legal al aplicarlo."
        ],
        1,
        "Recuerda: Las NIIF para PYMES son estándares adaptados que reducen la complejidad para pequeñas y medianas empresas."
      ],
      [
        "De acuerdo con los fundamentos estudiados, ¿cómo opera niif para pymes?",
        [
          "Mantienen principios rigurosos pero eliminan requerimientos no aplicables a empresas no cotizadas.",
          "Generando automáticamente pasivos contingentes para la entidad.",
          "Eliminando la necesidad de libros diario y mayor."
        ],
        0,
        "Recuerda: Las NIIF para PYMES son estándares adaptados que reducen la complejidad para pequeñas y medianas empresas."
      ],
      [
        "¿Cuál de las siguientes opciones ejemplifica correctamente este concepto?",
        [
          "Modificar estados financieros sin soporte documental.",
          "Una mediana empresa adopta la norma simplificada para rendir informes financieros.",
          "Omitir el registro de operaciones mercantiles cotidianas."
        ],
        1,
        "Recuerda: Las NIIF para PYMES son estándares adaptados que reducen la complejidad para pequeñas y medianas empresas."
      ],
      [
        "¿Qué descripción corresponde al principio fundamental explicado en niif para pymes?",
        [
          "La supresión total de controles internos en la empresa.",
          "La aplicación de métodos empíricos sin base técnica.",
          "Las NIIF para PYMES son estándares adaptados que reducen la complejidad para pequeñas y medianas empresas."
        ],
        2,
        "Recuerda: Las NIIF para PYMES son estándares adaptados que reducen la complejidad para pequeñas y medianas empresas."
      ],
      [
        "Selecciona la afirmación que resume de mejor manera lo aprendido sobre niif para pymes:",
        [
          "Es un procedimiento opcional que las empresas pueden ignorar.",
          "Las NIIF para PYMES son estándares adaptados que reducen la complejidad para pequeñas y medianas empresas.",
          "Distorsiona la igualdad numérica de los registros contables."
        ],
        1,
        "Recuerda: Las NIIF para PYMES son estándares adaptados que reducen la complejidad para pequeñas y medianas empresas."
      ]
    ]
  },
  {
    "id": 74,
    "world": 8,
    "level": 4,
    "title": "NIC 16: Propiedades, planta y equipo",
    "subtitle": "Familiarízate con uniformidad, NIIF, NIIF para PYMES, NIC 37 y NIC 16.",
    "sections": [
      [
        "Definición de la tarjeta",
        "La NIC 16 establece el reconocimiento, depreciación y deterioro de los activos fijos tangibles."
      ],
      [
        "Explicación paso a paso",
        "Establece que los bienes deben registrarse al costo y depreciarse sistemáticamente en su vida útil."
      ],
      [
        "Ejemplo práctico",
        "Registrar la adquisición de maquinaria y calcular su depreciación anual."
      ],
      [
        "Cómo reconocer el concepto",
        "Reconoce la norma internacional de activos fijos."
      ],
      [
        "Lo que debes recordar",
        "NIC 16: Propiedades, planta y equipo: La NIC 16 establece el reconocimiento, depreciación y deterioro de los activos fijos tangibles."
      ]
    ],
    "summary": "NIC 16: Propiedades, planta y equipo. La NIC 16 establece el reconocimiento, depreciación y deterioro de los activos fijos tangibles.",
    "questions": [
      [
        "¿Cuál es la definición correcta de nic 16: propiedades, planta y equipo?",
        [
          "Es un concepto ajeno a la gestión contable y financiera de la entidad.",
          "La NIC 16 establece el reconocimiento, depreciación y deterioro de los activos fijos tangibles.",
          "Corresponde exclusivamente a un registro temporal sin validez formal."
        ],
        1,
        "Recuerda: La NIC 16 establece el reconocimiento, depreciación y deterioro de los activos fijos tangibles."
      ],
      [
        "Según esta lección, ¿cómo se entiende el concepto de nic 16: propiedades, planta y equipo?",
        [
          "Establece que los bienes deben registrarse al costo y depreciarse sistemáticamente en su vida útil.",
          "Se calcula restando todos los pasivos circulantes entre sí.",
          "Es un informe exclusivo para auditorías externas gubernamentales."
        ],
        0,
        "Recuerda: La NIC 16 establece el reconocimiento, depreciación y deterioro de los activos fijos tangibles."
      ],
      [
        "¿Qué enunciado describe correctamente la aplicación práctica de nic 16: propiedades, planta y equipo?",
        [
          "No tiene aplicación directa en las operaciones cotidianas de una empresa.",
          "Registrar la adquisición de maquinaria y calcular su depreciación anual.",
          "Solo se aplica al cierre de operaciones fiscales anuales obligatorias."
        ],
        1,
        "Recuerda: La NIC 16 establece el reconocimiento, depreciación y deterioro de los activos fijos tangibles."
      ],
      [
        "¿Cuál afirmación coincide exactamente con lo explicado sobre nic 16: propiedades, planta y equipo?",
        [
          "Se relaciona directamente con la premisa: La NIC 16 establece el reconocimiento, depreciación y deterioro de los activos fijos tangibles.",
          "Modifica de forma arbitraria la ecuación contable fundamental.",
          "Representa un pasivo exigible a corto plazo."
        ],
        0,
        "Recuerda: La NIC 16 establece el reconocimiento, depreciación y deterioro de los activos fijos tangibles."
      ],
      [
        "Al estudiar nic 16: propiedades, planta y equipo, ¿qué aspecto clave debes identificar?",
        [
          "Su dependencia exclusiva de factores externos macroeconómicos.",
          "Reconoce la norma internacional de activos fijos.",
          "Que no requiere ningún tipo de control ni registro documental."
        ],
        1,
        "Recuerda: La NIC 16 establece el reconocimiento, depreciación y deterioro de los activos fijos tangibles."
      ],
      [
        "¿Qué opción expresa la idea central desarrollada en esta lección?",
        [
          "Los registros se realizan sin seguir ningún orden lógico ni cronológico.",
          "La NIC 16 establece el reconocimiento, depreciación y deterioro de los activos fijos tangibles.",
          "Los estados financieros pierden toda validez legal al aplicarlo."
        ],
        1,
        "Recuerda: La NIC 16 establece el reconocimiento, depreciación y deterioro de los activos fijos tangibles."
      ],
      [
        "De acuerdo con los fundamentos estudiados, ¿cómo opera nic 16: propiedades, planta y equipo?",
        [
          "Establece que los bienes deben registrarse al costo y depreciarse sistemáticamente en su vida útil.",
          "Generando automáticamente pasivos contingentes para la entidad.",
          "Eliminando la necesidad de libros diario y mayor."
        ],
        0,
        "Recuerda: La NIC 16 establece el reconocimiento, depreciación y deterioro de los activos fijos tangibles."
      ],
      [
        "¿Cuál de las siguientes opciones ejemplifica correctamente este concepto?",
        [
          "Modificar estados financieros sin soporte documental.",
          "Registrar la adquisición de maquinaria y calcular su depreciación anual.",
          "Omitir el registro de operaciones mercantiles cotidianas."
        ],
        1,
        "Recuerda: La NIC 16 establece el reconocimiento, depreciación y deterioro de los activos fijos tangibles."
      ],
      [
        "¿Qué descripción corresponde al principio fundamental explicado en nic 16: propiedades, planta y equipo?",
        [
          "La supresión total de controles internos en la empresa.",
          "La aplicación de métodos empíricos sin base técnica.",
          "La NIC 16 establece el reconocimiento, depreciación y deterioro de los activos fijos tangibles."
        ],
        2,
        "Recuerda: La NIC 16 establece el reconocimiento, depreciación y deterioro de los activos fijos tangibles."
      ],
      [
        "Selecciona la afirmación que resume de mejor manera lo aprendido sobre nic 16: propiedades, planta y equipo:",
        [
          "Es un procedimiento opcional que las empresas pueden ignorar.",
          "La NIC 16 establece el reconocimiento, depreciación y deterioro de los activos fijos tangibles.",
          "Distorsiona la igualdad numérica de los registros contables."
        ],
        1,
        "Recuerda: La NIC 16 establece el reconocimiento, depreciación y deterioro de los activos fijos tangibles."
      ]
    ]
  },
  {
    "id": 75,
    "world": 8,
    "level": 5,
    "title": "NIC 37: Provisiones y pasivos contingentes",
    "subtitle": "Familiarízate con uniformidad, NIIF, NIIF para PYMES, NIC 37 y NIC 16.",
    "sections": [
      [
        "Definición de la tarjeta",
        "La NIC 37 regula el registro de provisiones, pasivos contingentes y activos contingentes."
      ],
      [
        "Explicación paso a paso",
        "Una provisión se reconoce cuando existe una obligación actual probable y cuantificable."
      ],
      [
        "Ejemplo práctico",
        "Registrar una estimación contable por un juicio pendiente con alta probabilidad de pérdida."
      ],
      [
        "Cómo reconocer el concepto",
        "Busca el tratamiento normativo de obligaciones inciertas."
      ],
      [
        "Lo que debes recordar",
        "NIC 37: Provisiones y pasivos contingentes: La NIC 37 regula el registro de provisiones, pasivos contingentes y activos contingentes."
      ]
    ],
    "summary": "NIC 37: Provisiones y pasivos contingentes. La NIC 37 regula el registro de provisiones, pasivos contingentes y activos contingentes.",
    "questions": [
      [
        "¿Cuál es la definición correcta de nic 37: provisiones y pasivos contingentes?",
        [
          "Es un concepto ajeno a la gestión contable y financiera de la entidad.",
          "La NIC 37 regula el registro de provisiones, pasivos contingentes y activos contingentes.",
          "Corresponde exclusivamente a un registro temporal sin validez formal."
        ],
        1,
        "Recuerda: La NIC 37 regula el registro de provisiones, pasivos contingentes y activos contingentes."
      ],
      [
        "Según esta lección, ¿cómo se entiende el concepto de nic 37: provisiones y pasivos contingentes?",
        [
          "Una provisión se reconoce cuando existe una obligación actual probable y cuantificable.",
          "Se calcula restando todos los pasivos circulantes entre sí.",
          "Es un informe exclusivo para auditorías externas gubernamentales."
        ],
        0,
        "Recuerda: La NIC 37 regula el registro de provisiones, pasivos contingentes y activos contingentes."
      ],
      [
        "¿Qué enunciado describe correctamente la aplicación práctica de nic 37: provisiones y pasivos contingentes?",
        [
          "No tiene aplicación directa en las operaciones cotidianas de una empresa.",
          "Registrar una estimación contable por un juicio pendiente con alta probabilidad de pérdida.",
          "Solo se aplica al cierre de operaciones fiscales anuales obligatorias."
        ],
        1,
        "Recuerda: La NIC 37 regula el registro de provisiones, pasivos contingentes y activos contingentes."
      ],
      [
        "¿Cuál afirmación coincide exactamente con lo explicado sobre nic 37: provisiones y pasivos contingentes?",
        [
          "Se relaciona directamente con la premisa: La NIC 37 regula el registro de provisiones, pasivos contingentes y activos contingentes.",
          "Modifica de forma arbitraria la ecuación contable fundamental.",
          "Representa un pasivo exigible a corto plazo."
        ],
        0,
        "Recuerda: La NIC 37 regula el registro de provisiones, pasivos contingentes y activos contingentes."
      ],
      [
        "Al estudiar nic 37: provisiones y pasivos contingentes, ¿qué aspecto clave debes identificar?",
        [
          "Su dependencia exclusiva de factores externos macroeconómicos.",
          "Busca el tratamiento normativo de obligaciones inciertas.",
          "Que no requiere ningún tipo de control ni registro documental."
        ],
        1,
        "Recuerda: La NIC 37 regula el registro de provisiones, pasivos contingentes y activos contingentes."
      ],
      [
        "¿Qué opción expresa la idea central desarrollada en esta lección?",
        [
          "Los registros se realizan sin seguir ningún orden lógico ni cronológico.",
          "La NIC 37 regula el registro de provisiones, pasivos contingentes y activos contingentes.",
          "Los estados financieros pierden toda validez legal al aplicarlo."
        ],
        1,
        "Recuerda: La NIC 37 regula el registro de provisiones, pasivos contingentes y activos contingentes."
      ],
      [
        "De acuerdo con los fundamentos estudiados, ¿cómo opera nic 37: provisiones y pasivos contingentes?",
        [
          "Una provisión se reconoce cuando existe una obligación actual probable y cuantificable.",
          "Generando automáticamente pasivos contingentes para la entidad.",
          "Eliminando la necesidad de libros diario y mayor."
        ],
        0,
        "Recuerda: La NIC 37 regula el registro de provisiones, pasivos contingentes y activos contingentes."
      ],
      [
        "¿Cuál de las siguientes opciones ejemplifica correctamente este concepto?",
        [
          "Modificar estados financieros sin soporte documental.",
          "Registrar una estimación contable por un juicio pendiente con alta probabilidad de pérdida.",
          "Omitir el registro de operaciones mercantiles cotidianas."
        ],
        1,
        "Recuerda: La NIC 37 regula el registro de provisiones, pasivos contingentes y activos contingentes."
      ],
      [
        "¿Qué descripción corresponde al principio fundamental explicado en nic 37: provisiones y pasivos contingentes?",
        [
          "La supresión total de controles internos en la empresa.",
          "La aplicación de métodos empíricos sin base técnica.",
          "La NIC 37 regula el registro de provisiones, pasivos contingentes y activos contingentes."
        ],
        2,
        "Recuerda: La NIC 37 regula el registro de provisiones, pasivos contingentes y activos contingentes."
      ],
      [
        "Selecciona la afirmación que resume de mejor manera lo aprendido sobre nic 37: provisiones y pasivos contingentes:",
        [
          "Es un procedimiento opcional que las empresas pueden ignorar.",
          "La NIC 37 regula el registro de provisiones, pasivos contingentes y activos contingentes.",
          "Distorsiona la igualdad numérica de los registros contables."
        ],
        1,
        "Recuerda: La NIC 37 regula el registro de provisiones, pasivos contingentes y activos contingentes."
      ]
    ]
  },
  {
    "id": 76,
    "world": 8,
    "level": 6,
    "title": "Marco conceptual de la contabilidad",
    "subtitle": "Familiarízate con uniformidad, NIIF, NIIF para PYMES, NIC 37 y NIC 16.",
    "sections": [
      [
        "Definición de la tarjeta",
        "El marco conceptual establece los conceptos subyacentes que guían la preparación de estados financieros."
      ],
      [
        "Explicación paso a paso",
        "Define características cualitativas como relevancia, fiabilidad, comparabilidad y comprensibilidad."
      ],
      [
        "Ejemplo práctico",
        "Evaluar si una información contable es relevante y útil para los inversores."
      ],
      [
        "Cómo reconocer el concepto",
        "Identifica la base teórica normativa."
      ],
      [
        "Lo que debes recordar",
        "Marco conceptual de la contabilidad: El marco conceptual establece los conceptos subyacentes que guían la preparación de estados financieros."
      ]
    ],
    "summary": "Marco conceptual de la contabilidad. El marco conceptual establece los conceptos subyacentes que guían la preparación de estados financieros.",
    "questions": [
      [
        "¿Cuál es la definición correcta de marco conceptual de la contabilidad?",
        [
          "Es un concepto ajeno a la gestión contable y financiera de la entidad.",
          "El marco conceptual establece los conceptos subyacentes que guían la preparación de estados financieros.",
          "Corresponde exclusivamente a un registro temporal sin validez formal."
        ],
        1,
        "Recuerda: El marco conceptual establece los conceptos subyacentes que guían la preparación de estados financieros."
      ],
      [
        "Según esta lección, ¿cómo se entiende el concepto de marco conceptual de la contabilidad?",
        [
          "Define características cualitativas como relevancia, fiabilidad, comparabilidad y comprensibilidad.",
          "Se calcula restando todos los pasivos circulantes entre sí.",
          "Es un informe exclusivo para auditorías externas gubernamentales."
        ],
        0,
        "Recuerda: El marco conceptual establece los conceptos subyacentes que guían la preparación de estados financieros."
      ],
      [
        "¿Qué enunciado describe correctamente la aplicación práctica de marco conceptual de la contabilidad?",
        [
          "No tiene aplicación directa en las operaciones cotidianas de una empresa.",
          "Evaluar si una información contable es relevante y útil para los inversores.",
          "Solo se aplica al cierre de operaciones fiscales anuales obligatorias."
        ],
        1,
        "Recuerda: El marco conceptual establece los conceptos subyacentes que guían la preparación de estados financieros."
      ],
      [
        "¿Cuál afirmación coincide exactamente con lo explicado sobre marco conceptual de la contabilidad?",
        [
          "Se relaciona directamente con la premisa: El marco conceptual establece los conceptos subyacentes que guían la preparación de estados financieros.",
          "Modifica de forma arbitraria la ecuación contable fundamental.",
          "Representa un pasivo exigible a corto plazo."
        ],
        0,
        "Recuerda: El marco conceptual establece los conceptos subyacentes que guían la preparación de estados financieros."
      ],
      [
        "Al estudiar marco conceptual de la contabilidad, ¿qué aspecto clave debes identificar?",
        [
          "Su dependencia exclusiva de factores externos macroeconómicos.",
          "Identifica la base teórica normativa.",
          "Que no requiere ningún tipo de control ni registro documental."
        ],
        1,
        "Recuerda: El marco conceptual establece los conceptos subyacentes que guían la preparación de estados financieros."
      ],
      [
        "¿Qué opción expresa la idea central desarrollada en esta lección?",
        [
          "Los registros se realizan sin seguir ningún orden lógico ni cronológico.",
          "El marco conceptual establece los conceptos subyacentes que guían la preparación de estados financieros.",
          "Los estados financieros pierden toda validez legal al aplicarlo."
        ],
        1,
        "Recuerda: El marco conceptual establece los conceptos subyacentes que guían la preparación de estados financieros."
      ],
      [
        "De acuerdo con los fundamentos estudiados, ¿cómo opera marco conceptual de la contabilidad?",
        [
          "Define características cualitativas como relevancia, fiabilidad, comparabilidad y comprensibilidad.",
          "Generando automáticamente pasivos contingentes para la entidad.",
          "Eliminando la necesidad de libros diario y mayor."
        ],
        0,
        "Recuerda: El marco conceptual establece los conceptos subyacentes que guían la preparación de estados financieros."
      ],
      [
        "¿Cuál de las siguientes opciones ejemplifica correctamente este concepto?",
        [
          "Modificar estados financieros sin soporte documental.",
          "Evaluar si una información contable es relevante y útil para los inversores.",
          "Omitir el registro de operaciones mercantiles cotidianas."
        ],
        1,
        "Recuerda: El marco conceptual establece los conceptos subyacentes que guían la preparación de estados financieros."
      ],
      [
        "¿Qué descripción corresponde al principio fundamental explicado en marco conceptual de la contabilidad?",
        [
          "La supresión total de controles internos en la empresa.",
          "La aplicación de métodos empíricos sin base técnica.",
          "El marco conceptual establece los conceptos subyacentes que guían la preparación de estados financieros."
        ],
        2,
        "Recuerda: El marco conceptual establece los conceptos subyacentes que guían la preparación de estados financieros."
      ],
      [
        "Selecciona la afirmación que resume de mejor manera lo aprendido sobre marco conceptual de la contabilidad:",
        [
          "Es un procedimiento opcional que las empresas pueden ignorar.",
          "El marco conceptual establece los conceptos subyacentes que guían la preparación de estados financieros.",
          "Distorsiona la igualdad numérica de los registros contables."
        ],
        1,
        "Recuerda: El marco conceptual establece los conceptos subyacentes que guían la preparación de estados financieros."
      ]
    ]
  },
  {
    "id": 77,
    "world": 8,
    "level": 7,
    "title": "Reconocimiento contable",
    "subtitle": "Familiarízate con uniformidad, NIIF, NIIF para PYMES, NIC 37 y NIC 16.",
    "sections": [
      [
        "Definición de la tarjeta",
        "El reconocimiento contable es el proceso de incorporar en el balance o resultados un elemento que cumpla la definición."
      ],
      [
        "Explicación paso a paso",
        "Requiere que sea probable la obtención de beneficios económicos y tenga un costo fiable."
      ],
      [
        "Ejemplo práctico",
        "Registrar una factura de venta al entregar la mercancía al cliente."
      ],
      [
        "Cómo reconocer el concepto",
        "Reconoce la incorporación formal de partidas."
      ],
      [
        "Lo que debes recordar",
        "Reconocimiento contable: El reconocimiento contable es el proceso de incorporar en el balance o resultados un elemento que cumpla la definición."
      ]
    ],
    "summary": "Reconocimiento contable. El reconocimiento contable es el proceso de incorporar en el balance o resultados un elemento que cumpla la definición.",
    "questions": [
      [
        "¿Cuál es la definición correcta de reconocimiento contable?",
        [
          "Es un concepto ajeno a la gestión contable y financiera de la entidad.",
          "El reconocimiento contable es el proceso de incorporar en el balance o resultados un elemento que cumpla la definición.",
          "Corresponde exclusivamente a un registro temporal sin validez formal."
        ],
        1,
        "Recuerda: El reconocimiento contable es el proceso de incorporar en el balance o resultados un elemento que cumpla la definición."
      ],
      [
        "Según esta lección, ¿cómo se entiende el concepto de reconocimiento contable?",
        [
          "Requiere que sea probable la obtención de beneficios económicos y tenga un costo fiable.",
          "Se calcula restando todos los pasivos circulantes entre sí.",
          "Es un informe exclusivo para auditorías externas gubernamentales."
        ],
        0,
        "Recuerda: El reconocimiento contable es el proceso de incorporar en el balance o resultados un elemento que cumpla la definición."
      ],
      [
        "¿Qué enunciado describe correctamente la aplicación práctica de reconocimiento contable?",
        [
          "No tiene aplicación directa en las operaciones cotidianas de una empresa.",
          "Registrar una factura de venta al entregar la mercancía al cliente.",
          "Solo se aplica al cierre de operaciones fiscales anuales obligatorias."
        ],
        1,
        "Recuerda: El reconocimiento contable es el proceso de incorporar en el balance o resultados un elemento que cumpla la definición."
      ],
      [
        "¿Cuál afirmación coincide exactamente con lo explicado sobre reconocimiento contable?",
        [
          "Se relaciona directamente con la premisa: El reconocimiento contable es el proceso de incorporar en el balance o resultados un elemento que cumpla la definición.",
          "Modifica de forma arbitraria la ecuación contable fundamental.",
          "Representa un pasivo exigible a corto plazo."
        ],
        0,
        "Recuerda: El reconocimiento contable es el proceso de incorporar en el balance o resultados un elemento que cumpla la definición."
      ],
      [
        "Al estudiar reconocimiento contable, ¿qué aspecto clave debes identificar?",
        [
          "Su dependencia exclusiva de factores externos macroeconómicos.",
          "Reconoce la incorporación formal de partidas.",
          "Que no requiere ningún tipo de control ni registro documental."
        ],
        1,
        "Recuerda: El reconocimiento contable es el proceso de incorporar en el balance o resultados un elemento que cumpla la definición."
      ],
      [
        "¿Qué opción expresa la idea central desarrollada en esta lección?",
        [
          "Los registros se realizan sin seguir ningún orden lógico ni cronológico.",
          "El reconocimiento contable es el proceso de incorporar en el balance o resultados un elemento que cumpla la definición.",
          "Los estados financieros pierden toda validez legal al aplicarlo."
        ],
        1,
        "Recuerda: El reconocimiento contable es el proceso de incorporar en el balance o resultados un elemento que cumpla la definición."
      ],
      [
        "De acuerdo con los fundamentos estudiados, ¿cómo opera reconocimiento contable?",
        [
          "Requiere que sea probable la obtención de beneficios económicos y tenga un costo fiable.",
          "Generando automáticamente pasivos contingentes para la entidad.",
          "Eliminando la necesidad de libros diario y mayor."
        ],
        0,
        "Recuerda: El reconocimiento contable es el proceso de incorporar en el balance o resultados un elemento que cumpla la definición."
      ],
      [
        "¿Cuál de las siguientes opciones ejemplifica correctamente este concepto?",
        [
          "Modificar estados financieros sin soporte documental.",
          "Registrar una factura de venta al entregar la mercancía al cliente.",
          "Omitir el registro de operaciones mercantiles cotidianas."
        ],
        1,
        "Recuerda: El reconocimiento contable es el proceso de incorporar en el balance o resultados un elemento que cumpla la definición."
      ],
      [
        "¿Qué descripción corresponde al principio fundamental explicado en reconocimiento contable?",
        [
          "La supresión total de controles internos en la empresa.",
          "La aplicación de métodos empíricos sin base técnica.",
          "El reconocimiento contable es el proceso de incorporar en el balance o resultados un elemento que cumpla la definición."
        ],
        2,
        "Recuerda: El reconocimiento contable es el proceso de incorporar en el balance o resultados un elemento que cumpla la definición."
      ],
      [
        "Selecciona la afirmación que resume de mejor manera lo aprendido sobre reconocimiento contable:",
        [
          "Es un procedimiento opcional que las empresas pueden ignorar.",
          "El reconocimiento contable es el proceso de incorporar en el balance o resultados un elemento que cumpla la definición.",
          "Distorsiona la igualdad numérica de los registros contables."
        ],
        1,
        "Recuerda: El reconocimiento contable es el proceso de incorporar en el balance o resultados un elemento que cumpla la definición."
      ]
    ]
  },
  {
    "id": 78,
    "world": 8,
    "level": 8,
    "title": "Medición contable",
    "subtitle": "Familiarízate con uniformidad, NIIF, NIIF para PYMES, NIC 37 y NIC 16.",
    "sections": [
      [
        "Definición de la tarjeta",
        "La medición contable es el proceso de asignar importes monetarios a los elementos de los estados financieros."
      ],
      [
        "Explicación paso a paso",
        "Utiliza bases como costo histórico, valor razonable o valor neto realizable."
      ],
      [
        "Ejemplo práctico",
        "Valorar un inventario a su precio de adquisición histórico."
      ],
      [
        "Cómo reconocer el concepto",
        "Identifica la asignación de valor monetario."
      ],
      [
        "Lo que debes recordar",
        "Medición contable: La medición contable es el proceso de asignar importes monetarios a los elementos de los estados financieros."
      ]
    ],
    "summary": "Medición contable. La medición contable es el proceso de asignar importes monetarios a los elementos de los estados financieros.",
    "questions": [
      [
        "¿Cuál es la definición correcta de medición contable?",
        [
          "Es un concepto ajeno a la gestión contable y financiera de la entidad.",
          "La medición contable es el proceso de asignar importes monetarios a los elementos de los estados financieros.",
          "Corresponde exclusivamente a un registro temporal sin validez formal."
        ],
        1,
        "Recuerda: La medición contable es el proceso de asignar importes monetarios a los elementos de los estados financieros."
      ],
      [
        "Según esta lección, ¿cómo se entiende el concepto de medición contable?",
        [
          "Utiliza bases como costo histórico, valor razonable o valor neto realizable.",
          "Se calcula restando todos los pasivos circulantes entre sí.",
          "Es un informe exclusivo para auditorías externas gubernamentales."
        ],
        0,
        "Recuerda: La medición contable es el proceso de asignar importes monetarios a los elementos de los estados financieros."
      ],
      [
        "¿Qué enunciado describe correctamente la aplicación práctica de medición contable?",
        [
          "No tiene aplicación directa en las operaciones cotidianas de una empresa.",
          "Valorar un inventario a su precio de adquisición histórico.",
          "Solo se aplica al cierre de operaciones fiscales anuales obligatorias."
        ],
        1,
        "Recuerda: La medición contable es el proceso de asignar importes monetarios a los elementos de los estados financieros."
      ],
      [
        "¿Cuál afirmación coincide exactamente con lo explicado sobre medición contable?",
        [
          "Se relaciona directamente con la premisa: La medición contable es el proceso de asignar importes monetarios a los elementos de los estados financieros.",
          "Modifica de forma arbitraria la ecuación contable fundamental.",
          "Representa un pasivo exigible a corto plazo."
        ],
        0,
        "Recuerda: La medición contable es el proceso de asignar importes monetarios a los elementos de los estados financieros."
      ],
      [
        "Al estudiar medición contable, ¿qué aspecto clave debes identificar?",
        [
          "Su dependencia exclusiva de factores externos macroeconómicos.",
          "Identifica la asignación de valor monetario.",
          "Que no requiere ningún tipo de control ni registro documental."
        ],
        1,
        "Recuerda: La medición contable es el proceso de asignar importes monetarios a los elementos de los estados financieros."
      ],
      [
        "¿Qué opción expresa la idea central desarrollada en esta lección?",
        [
          "Los registros se realizan sin seguir ningún orden lógico ni cronológico.",
          "La medición contable es el proceso de asignar importes monetarios a los elementos de los estados financieros.",
          "Los estados financieros pierden toda validez legal al aplicarlo."
        ],
        1,
        "Recuerda: La medición contable es el proceso de asignar importes monetarios a los elementos de los estados financieros."
      ],
      [
        "De acuerdo con los fundamentos estudiados, ¿cómo opera medición contable?",
        [
          "Utiliza bases como costo histórico, valor razonable o valor neto realizable.",
          "Generando automáticamente pasivos contingentes para la entidad.",
          "Eliminando la necesidad de libros diario y mayor."
        ],
        0,
        "Recuerda: La medición contable es el proceso de asignar importes monetarios a los elementos de los estados financieros."
      ],
      [
        "¿Cuál de las siguientes opciones ejemplifica correctamente este concepto?",
        [
          "Modificar estados financieros sin soporte documental.",
          "Valorar un inventario a su precio de adquisición histórico.",
          "Omitir el registro de operaciones mercantiles cotidianas."
        ],
        1,
        "Recuerda: La medición contable es el proceso de asignar importes monetarios a los elementos de los estados financieros."
      ],
      [
        "¿Qué descripción corresponde al principio fundamental explicado en medición contable?",
        [
          "La supresión total de controles internos en la empresa.",
          "La aplicación de métodos empíricos sin base técnica.",
          "La medición contable es el proceso de asignar importes monetarios a los elementos de los estados financieros."
        ],
        2,
        "Recuerda: La medición contable es el proceso de asignar importes monetarios a los elementos de los estados financieros."
      ],
      [
        "Selecciona la afirmación que resume de mejor manera lo aprendido sobre medición contable:",
        [
          "Es un procedimiento opcional que las empresas pueden ignorar.",
          "La medición contable es el proceso de asignar importes monetarios a los elementos de los estados financieros.",
          "Distorsiona la igualdad numérica de los registros contables."
        ],
        1,
        "Recuerda: La medición contable es el proceso de asignar importes monetarios a los elementos de los estados financieros."
      ]
    ]
  },
  {
    "id": 79,
    "world": 8,
    "level": 9,
    "title": "Revelación de información",
    "subtitle": "Familiarízate con uniformidad, NIIF, NIIF para PYMES, NIC 37 y NIC 16.",
    "sections": [
      [
        "Definición de la tarjeta",
        "La revelación consiste en informar mediante notas explicativas detalles cuantitativos y cualitativos relevantes."
      ],
      [
        "Explicación paso a paso",
        "Complementa las cifras principales con explicaciones de políticas y riesgos."
      ],
      [
        "Ejemplo práctico",
        "Incluir una nota explicativa sobre juicios pendientes y tasas de cambio utilizadas."
      ],
      [
        "Cómo reconocer el concepto",
        "Busca la divulgación detallada en notas."
      ],
      [
        "Lo que debes recordar",
        "Revelación de información: La revelación consiste en informar mediante notas explicativas detalles cuantitativos y cualitativos relevantes."
      ]
    ],
    "summary": "Revelación de información. La revelación consiste en informar mediante notas explicativas detalles cuantitativos y cualitativos relevantes.",
    "questions": [
      [
        "¿Cuál es la definición correcta de revelación de información?",
        [
          "Es un concepto ajeno a la gestión contable y financiera de la entidad.",
          "La revelación consiste en informar mediante notas explicativas detalles cuantitativos y cualitativos relevantes.",
          "Corresponde exclusivamente a un registro temporal sin validez formal."
        ],
        1,
        "Recuerda: La revelación consiste en informar mediante notas explicativas detalles cuantitativos y cualitativos relevantes."
      ],
      [
        "Según esta lección, ¿cómo se entiende el concepto de revelación de información?",
        [
          "Complementa las cifras principales con explicaciones de políticas y riesgos.",
          "Se calcula restando todos los pasivos circulantes entre sí.",
          "Es un informe exclusivo para auditorías externas gubernamentales."
        ],
        0,
        "Recuerda: La revelación consiste en informar mediante notas explicativas detalles cuantitativos y cualitativos relevantes."
      ],
      [
        "¿Qué enunciado describe correctamente la aplicación práctica de revelación de información?",
        [
          "No tiene aplicación directa en las operaciones cotidianas de una empresa.",
          "Incluir una nota explicativa sobre juicios pendientes y tasas de cambio utilizadas.",
          "Solo se aplica al cierre de operaciones fiscales anuales obligatorias."
        ],
        1,
        "Recuerda: La revelación consiste en informar mediante notas explicativas detalles cuantitativos y cualitativos relevantes."
      ],
      [
        "¿Cuál afirmación coincide exactamente con lo explicado sobre revelación de información?",
        [
          "Se relaciona directamente con la premisa: La revelación consiste en informar mediante notas explicativas detalles cuantitativos y cualitativos relevantes.",
          "Modifica de forma arbitraria la ecuación contable fundamental.",
          "Representa un pasivo exigible a corto plazo."
        ],
        0,
        "Recuerda: La revelación consiste en informar mediante notas explicativas detalles cuantitativos y cualitativos relevantes."
      ],
      [
        "Al estudiar revelación de información, ¿qué aspecto clave debes identificar?",
        [
          "Su dependencia exclusiva de factores externos macroeconómicos.",
          "Busca la divulgación detallada en notas.",
          "Que no requiere ningún tipo de control ni registro documental."
        ],
        1,
        "Recuerda: La revelación consiste en informar mediante notas explicativas detalles cuantitativos y cualitativos relevantes."
      ],
      [
        "¿Qué opción expresa la idea central desarrollada en esta lección?",
        [
          "Los registros se realizan sin seguir ningún orden lógico ni cronológico.",
          "La revelación consiste en informar mediante notas explicativas detalles cuantitativos y cualitativos relevantes.",
          "Los estados financieros pierden toda validez legal al aplicarlo."
        ],
        1,
        "Recuerda: La revelación consiste en informar mediante notas explicativas detalles cuantitativos y cualitativos relevantes."
      ],
      [
        "De acuerdo con los fundamentos estudiados, ¿cómo opera revelación de información?",
        [
          "Complementa las cifras principales con explicaciones de políticas y riesgos.",
          "Generando automáticamente pasivos contingentes para la entidad.",
          "Eliminando la necesidad de libros diario y mayor."
        ],
        0,
        "Recuerda: La revelación consiste en informar mediante notas explicativas detalles cuantitativos y cualitativos relevantes."
      ],
      [
        "¿Cuál de las siguientes opciones ejemplifica correctamente este concepto?",
        [
          "Modificar estados financieros sin soporte documental.",
          "Incluir una nota explicativa sobre juicios pendientes y tasas de cambio utilizadas.",
          "Omitir el registro de operaciones mercantiles cotidianas."
        ],
        1,
        "Recuerda: La revelación consiste en informar mediante notas explicativas detalles cuantitativos y cualitativos relevantes."
      ],
      [
        "¿Qué descripción corresponde al principio fundamental explicado en revelación de información?",
        [
          "La supresión total de controles internos en la empresa.",
          "La aplicación de métodos empíricos sin base técnica.",
          "La revelación consiste en informar mediante notas explicativas detalles cuantitativos y cualitativos relevantes."
        ],
        2,
        "Recuerda: La revelación consiste en informar mediante notas explicativas detalles cuantitativos y cualitativos relevantes."
      ],
      [
        "Selecciona la afirmación que resume de mejor manera lo aprendido sobre revelación de información:",
        [
          "Es un procedimiento opcional que las empresas pueden ignorar.",
          "La revelación consiste en informar mediante notas explicativas detalles cuantitativos y cualitativos relevantes.",
          "Distorsiona la igualdad numérica de los registros contables."
        ],
        1,
        "Recuerda: La revelación consiste en informar mediante notas explicativas detalles cuantitativos y cualitativos relevantes."
      ]
    ]
  },
  {
    "id": 80,
    "world": 8,
    "level": 10,
    "title": "Repaso del marco normativo",
    "subtitle": "Familiarízate con uniformidad, NIIF, NIIF para PYMES, NIC 37 y NIC 16.",
    "sections": [
      [
        "Definición de la tarjeta",
        "El marco normativo contable, basado en NIIF y NIC, regula el reconocimiento, medición, uniformidad y revelación para garantizar información financiera confiable."
      ],
      [
        "Explicación paso a paso",
        "Integra todo el sistema legal y técnico de la profesión contable."
      ],
      [
        "Ejemplo práctico",
        "Aplicar NIIF, cumplir NIC 16 y NIC 37, y revelar notas explicativas."
      ],
      [
        "Cómo reconocer el concepto",
        "Reconoce el panorama normativo integral."
      ],
      [
        "Lo que debes recordar",
        "Repaso del marco normativo: El marco normativo contable, basado en NIIF y NIC, regula el reconocimiento, medición, uniformidad y revelación para garantizar información financiera confiable."
      ]
    ],
    "summary": "Repaso del marco normativo. El marco normativo contable, basado en NIIF y NIC, regula el reconocimiento, medición, uniformidad y revelación para garantizar información financiera confiable.",
    "questions": [
      [
        "¿Cuál es la definición correcta de repaso del marco normativo?",
        [
          "Es un concepto ajeno a la gestión contable y financiera de la entidad.",
          "El marco normativo contable, basado en NIIF y NIC, regula el reconocimiento, medición, uniformidad y revelación para garantizar información financiera confiable.",
          "Corresponde exclusivamente a un registro temporal sin validez formal."
        ],
        1,
        "Recuerda: El marco normativo contable, basado en NIIF y NIC, regula el reconocimiento, medición, uniformidad y revelación para garantizar información financiera confiable."
      ],
      [
        "Según esta lección, ¿cómo se entiende el concepto de repaso del marco normativo?",
        [
          "Integra todo el sistema legal y técnico de la profesión contable.",
          "Se calcula restando todos los pasivos circulantes entre sí.",
          "Es un informe exclusivo para auditorías externas gubernamentales."
        ],
        0,
        "Recuerda: El marco normativo contable, basado en NIIF y NIC, regula el reconocimiento, medición, uniformidad y revelación para garantizar información financiera confiable."
      ],
      [
        "¿Qué enunciado describe correctamente la aplicación práctica de repaso del marco normativo?",
        [
          "No tiene aplicación directa en las operaciones cotidianas de una empresa.",
          "Aplicar NIIF, cumplir NIC 16 y NIC 37, y revelar notas explicativas.",
          "Solo se aplica al cierre de operaciones fiscales anuales obligatorias."
        ],
        1,
        "Recuerda: El marco normativo contable, basado en NIIF y NIC, regula el reconocimiento, medición, uniformidad y revelación para garantizar información financiera confiable."
      ],
      [
        "¿Cuál afirmación coincide exactamente con lo explicado sobre repaso del marco normativo?",
        [
          "Se relaciona directamente con la premisa: El marco normativo contable, basado en NIIF y NIC, regula el reconocimiento, medición, uniformidad y revelación para garantizar información financiera confiable.",
          "Modifica de forma arbitraria la ecuación contable fundamental.",
          "Representa un pasivo exigible a corto plazo."
        ],
        0,
        "Recuerda: El marco normativo contable, basado en NIIF y NIC, regula el reconocimiento, medición, uniformidad y revelación para garantizar información financiera confiable."
      ],
      [
        "Al estudiar repaso del marco normativo, ¿qué aspecto clave debes identificar?",
        [
          "Su dependencia exclusiva de factores externos macroeconómicos.",
          "Reconoce el panorama normativo integral.",
          "Que no requiere ningún tipo de control ni registro documental."
        ],
        1,
        "Recuerda: El marco normativo contable, basado en NIIF y NIC, regula el reconocimiento, medición, uniformidad y revelación para garantizar información financiera confiable."
      ],
      [
        "¿Qué opción expresa la idea central desarrollada en esta lección?",
        [
          "Los registros se realizan sin seguir ningún orden lógico ni cronológico.",
          "El marco normativo contable, basado en NIIF y NIC, regula el reconocimiento, medición, uniformidad y revelación para garantizar información financiera confiable.",
          "Los estados financieros pierden toda validez legal al aplicarlo."
        ],
        1,
        "Recuerda: El marco normativo contable, basado en NIIF y NIC, regula el reconocimiento, medición, uniformidad y revelación para garantizar información financiera confiable."
      ],
      [
        "De acuerdo con los fundamentos estudiados, ¿cómo opera repaso del marco normativo?",
        [
          "Integra todo el sistema legal y técnico de la profesión contable.",
          "Generando automáticamente pasivos contingentes para la entidad.",
          "Eliminando la necesidad de libros diario y mayor."
        ],
        0,
        "Recuerda: El marco normativo contable, basado en NIIF y NIC, regula el reconocimiento, medición, uniformidad y revelación para garantizar información financiera confiable."
      ],
      [
        "¿Cuál de las siguientes opciones ejemplifica correctamente este concepto?",
        [
          "Modificar estados financieros sin soporte documental.",
          "Aplicar NIIF, cumplir NIC 16 y NIC 37, y revelar notas explicativas.",
          "Omitir el registro de operaciones mercantiles cotidianas."
        ],
        1,
        "Recuerda: El marco normativo contable, basado en NIIF y NIC, regula el reconocimiento, medición, uniformidad y revelación para garantizar información financiera confiable."
      ],
      [
        "¿Qué descripción corresponde al principio fundamental explicado en repaso del marco normativo?",
        [
          "La supresión total de controles internos en la empresa.",
          "La aplicación de métodos empíricos sin base técnica.",
          "El marco normativo contable, basado en NIIF y NIC, regula el reconocimiento, medición, uniformidad y revelación para garantizar información financiera confiable."
        ],
        2,
        "Recuerda: El marco normativo contable, basado en NIIF y NIC, regula el reconocimiento, medición, uniformidad y revelación para garantizar información financiera confiable."
      ],
      [
        "Selecciona la afirmación que resume de mejor manera lo aprendido sobre repaso del marco normativo:",
        [
          "Es un procedimiento opcional que las empresas pueden ignorar.",
          "El marco normativo contable, basado en NIIF y NIC, regula el reconocimiento, medición, uniformidad y revelación para garantizar información financiera confiable.",
          "Distorsiona la igualdad numérica de los registros contables."
        ],
        1,
        "Recuerda: El marco normativo contable, basado en NIIF y NIC, regula el reconocimiento, medición, uniformidad y revelación para garantizar información financiera confiable."
      ]
    ]
  },
  {
    "id": 81,
    "world": 9,
    "level": 1,
    "title": "¿Qué son las finanzas?",
    "subtitle": "Aprende finanzas, rentabilidad, capital de trabajo, presupuesto y punto de equilibrio.",
    "sections": [
      [
        "Definición de la tarjeta",
        "Las finanzas estudian la obtención y gestión eficiente del dinero y los recursos de capital por parte de individuos y empresas."
      ],
      [
        "Explicación paso a paso",
        "Analizan cómo maximizar el valor de la empresa y rentabilizar las inversiones."
      ],
      [
        "Ejemplo práctico",
        "Evaluar si conviene solicitar un préstamo bancario o emitir acciones para financiar un proyecto."
      ],
      [
        "Cómo reconocer el concepto",
        "Identifica la gestión corporativa de recursos monetarios."
      ],
      [
        "Lo que debes recordar",
        "¿Qué son las finanzas?: Las finanzas estudian la obtención y gestión eficiente del dinero y los recursos de capital por parte de individuos y empresas."
      ]
    ],
    "summary": "¿Qué son las finanzas?. Las finanzas estudian la obtención y gestión eficiente del dinero y los recursos de capital por parte de individuos y empresas.",
    "questions": [
      [
        "¿Cuál es la definición correcta de ¿qué son las finanzas??",
        [
          "Es un concepto ajeno a la gestión contable y financiera de la entidad.",
          "Las finanzas estudian la obtención y gestión eficiente del dinero y los recursos de capital por parte de individuos y empresas.",
          "Corresponde exclusivamente a un registro temporal sin validez formal."
        ],
        1,
        "Recuerda: Las finanzas estudian la obtención y gestión eficiente del dinero y los recursos de capital por parte de individuos y empresas."
      ],
      [
        "Según esta lección, ¿cómo se entiende el concepto de ¿qué son las finanzas??",
        [
          "Analizan cómo maximizar el valor de la empresa y rentabilizar las inversiones.",
          "Se calcula restando todos los pasivos circulantes entre sí.",
          "Es un informe exclusivo para auditorías externas gubernamentales."
        ],
        0,
        "Recuerda: Las finanzas estudian la obtención y gestión eficiente del dinero y los recursos de capital por parte de individuos y empresas."
      ],
      [
        "¿Qué enunciado describe correctamente la aplicación práctica de ¿qué son las finanzas??",
        [
          "No tiene aplicación directa en las operaciones cotidianas de una empresa.",
          "Evaluar si conviene solicitar un préstamo bancario o emitir acciones para financiar un proyecto.",
          "Solo se aplica al cierre de operaciones fiscales anuales obligatorias."
        ],
        1,
        "Recuerda: Las finanzas estudian la obtención y gestión eficiente del dinero y los recursos de capital por parte de individuos y empresas."
      ],
      [
        "¿Cuál afirmación coincide exactamente con lo explicado sobre ¿qué son las finanzas??",
        [
          "Se relaciona directamente con la premisa: Las finanzas estudian la obtención y gestión eficiente del dinero y los recursos de capital por parte de individuos y empresas.",
          "Modifica de forma arbitraria la ecuación contable fundamental.",
          "Representa un pasivo exigible a corto plazo."
        ],
        0,
        "Recuerda: Las finanzas estudian la obtención y gestión eficiente del dinero y los recursos de capital por parte de individuos y empresas."
      ],
      [
        "Al estudiar ¿qué son las finanzas?, ¿qué aspecto clave debes identificar?",
        [
          "Su dependencia exclusiva de factores externos macroeconómicos.",
          "Identifica la gestión corporativa de recursos monetarios.",
          "Que no requiere ningún tipo de control ni registro documental."
        ],
        1,
        "Recuerda: Las finanzas estudian la obtención y gestión eficiente del dinero y los recursos de capital por parte de individuos y empresas."
      ],
      [
        "¿Qué opción expresa la idea central desarrollada en esta lección?",
        [
          "Los registros se realizan sin seguir ningún orden lógico ni cronológico.",
          "Las finanzas estudian la obtención y gestión eficiente del dinero y los recursos de capital por parte de individuos y empresas.",
          "Los estados financieros pierden toda validez legal al aplicarlo."
        ],
        1,
        "Recuerda: Las finanzas estudian la obtención y gestión eficiente del dinero y los recursos de capital por parte de individuos y empresas."
      ],
      [
        "De acuerdo con los fundamentos estudiados, ¿cómo opera ¿qué son las finanzas??",
        [
          "Analizan cómo maximizar el valor de la empresa y rentabilizar las inversiones.",
          "Generando automáticamente pasivos contingentes para la entidad.",
          "Eliminando la necesidad de libros diario y mayor."
        ],
        0,
        "Recuerda: Las finanzas estudian la obtención y gestión eficiente del dinero y los recursos de capital por parte de individuos y empresas."
      ],
      [
        "¿Cuál de las siguientes opciones ejemplifica correctamente este concepto?",
        [
          "Modificar estados financieros sin soporte documental.",
          "Evaluar si conviene solicitar un préstamo bancario o emitir acciones para financiar un proyecto.",
          "Omitir el registro de operaciones mercantiles cotidianas."
        ],
        1,
        "Recuerda: Las finanzas estudian la obtención y gestión eficiente del dinero y los recursos de capital por parte de individuos y empresas."
      ],
      [
        "¿Qué descripción corresponde al principio fundamental explicado en ¿qué son las finanzas??",
        [
          "La supresión total de controles internos en la empresa.",
          "La aplicación de métodos empíricos sin base técnica.",
          "Las finanzas estudian la obtención y gestión eficiente del dinero y los recursos de capital por parte de individuos y empresas."
        ],
        2,
        "Recuerda: Las finanzas estudian la obtención y gestión eficiente del dinero y los recursos de capital por parte de individuos y empresas."
      ],
      [
        "Selecciona la afirmación que resume de mejor manera lo aprendido sobre ¿qué son las finanzas?:",
        [
          "Es un procedimiento opcional que las empresas pueden ignorar.",
          "Las finanzas estudian la obtención y gestión eficiente del dinero y los recursos de capital por parte de individuos y empresas.",
          "Distorsiona la igualdad numérica de los registros contables."
        ],
        1,
        "Recuerda: Las finanzas estudian la obtención y gestión eficiente del dinero y los recursos de capital por parte de individuos y empresas."
      ]
    ]
  },
  {
    "id": 82,
    "world": 9,
    "level": 2,
    "title": "Rentabilidad",
    "subtitle": "Aprende finanzas, rentabilidad, capital de trabajo, presupuesto y punto de equilibrio.",
    "sections": [
      [
        "Definición de la tarjeta",
        "La rentabilidad mide la ganancia o utilidad obtenida en proporción al capital invertido o recursos empleados."
      ],
      [
        "Explicación paso a paso",
        "Permite evaluar el éxito económico y la eficiencia de las decisiones financieras."
      ],
      [
        "Ejemplo práctico",
        "Obtener $2,000 de utilidad neta sobre una inversión inicial de $10,000 (20% de rentabilidad)."
      ],
      [
        "Cómo reconocer el concepto",
        "Reconoce la eficiencia en generación de ganancias."
      ],
      [
        "Lo que debes recordar",
        "Rentabilidad: La rentabilidad mide la ganancia o utilidad obtenida en proporción al capital invertido o recursos empleados."
      ]
    ],
    "summary": "Rentabilidad. La rentabilidad mide la ganancia o utilidad obtenida en proporción al capital invertido o recursos empleados.",
    "questions": [
      [
        "¿Cuál es la definición correcta de rentabilidad?",
        [
          "Es un concepto ajeno a la gestión contable y financiera de la entidad.",
          "La rentabilidad mide la ganancia o utilidad obtenida en proporción al capital invertido o recursos empleados.",
          "Corresponde exclusivamente a un registro temporal sin validez formal."
        ],
        1,
        "Recuerda: La rentabilidad mide la ganancia o utilidad obtenida en proporción al capital invertido o recursos empleados."
      ],
      [
        "Según esta lección, ¿cómo se entiende el concepto de rentabilidad?",
        [
          "Permite evaluar el éxito económico y la eficiencia de las decisiones financieras.",
          "Se calcula restando todos los pasivos circulantes entre sí.",
          "Es un informe exclusivo para auditorías externas gubernamentales."
        ],
        0,
        "Recuerda: La rentabilidad mide la ganancia o utilidad obtenida en proporción al capital invertido o recursos empleados."
      ],
      [
        "¿Qué enunciado describe correctamente la aplicación práctica de rentabilidad?",
        [
          "No tiene aplicación directa en las operaciones cotidianas de una empresa.",
          "Obtener $2,000 de utilidad neta sobre una inversión inicial de $10,000 (20% de rentabilidad).",
          "Solo se aplica al cierre de operaciones fiscales anuales obligatorias."
        ],
        1,
        "Recuerda: La rentabilidad mide la ganancia o utilidad obtenida en proporción al capital invertido o recursos empleados."
      ],
      [
        "¿Cuál afirmación coincide exactamente con lo explicado sobre rentabilidad?",
        [
          "Se relaciona directamente con la premisa: La rentabilidad mide la ganancia o utilidad obtenida en proporción al capital invertido o recursos empleados.",
          "Modifica de forma arbitraria la ecuación contable fundamental.",
          "Representa un pasivo exigible a corto plazo."
        ],
        0,
        "Recuerda: La rentabilidad mide la ganancia o utilidad obtenida en proporción al capital invertido o recursos empleados."
      ],
      [
        "Al estudiar rentabilidad, ¿qué aspecto clave debes identificar?",
        [
          "Su dependencia exclusiva de factores externos macroeconómicos.",
          "Reconoce la eficiencia en generación de ganancias.",
          "Que no requiere ningún tipo de control ni registro documental."
        ],
        1,
        "Recuerda: La rentabilidad mide la ganancia o utilidad obtenida en proporción al capital invertido o recursos empleados."
      ],
      [
        "¿Qué opción expresa la idea central desarrollada en esta lección?",
        [
          "Los registros se realizan sin seguir ningún orden lógico ni cronológico.",
          "La rentabilidad mide la ganancia o utilidad obtenida en proporción al capital invertido o recursos empleados.",
          "Los estados financieros pierden toda validez legal al aplicarlo."
        ],
        1,
        "Recuerda: La rentabilidad mide la ganancia o utilidad obtenida en proporción al capital invertido o recursos empleados."
      ],
      [
        "De acuerdo con los fundamentos estudiados, ¿cómo opera rentabilidad?",
        [
          "Permite evaluar el éxito económico y la eficiencia de las decisiones financieras.",
          "Generando automáticamente pasivos contingentes para la entidad.",
          "Eliminando la necesidad de libros diario y mayor."
        ],
        0,
        "Recuerda: La rentabilidad mide la ganancia o utilidad obtenida en proporción al capital invertido o recursos empleados."
      ],
      [
        "¿Cuál de las siguientes opciones ejemplifica correctamente este concepto?",
        [
          "Modificar estados financieros sin soporte documental.",
          "Obtener $2,000 de utilidad neta sobre una inversión inicial de $10,000 (20% de rentabilidad).",
          "Omitir el registro de operaciones mercantiles cotidianas."
        ],
        1,
        "Recuerda: La rentabilidad mide la ganancia o utilidad obtenida en proporción al capital invertido o recursos empleados."
      ],
      [
        "¿Qué descripción corresponde al principio fundamental explicado en rentabilidad?",
        [
          "La supresión total de controles internos en la empresa.",
          "La aplicación de métodos empíricos sin base técnica.",
          "La rentabilidad mide la ganancia o utilidad obtenida en proporción al capital invertido o recursos empleados."
        ],
        2,
        "Recuerda: La rentabilidad mide la ganancia o utilidad obtenida en proporción al capital invertido o recursos empleados."
      ],
      [
        "Selecciona la afirmación que resume de mejor manera lo aprendido sobre rentabilidad:",
        [
          "Es un procedimiento opcional que las empresas pueden ignorar.",
          "La rentabilidad mide la ganancia o utilidad obtenida en proporción al capital invertido o recursos empleados.",
          "Distorsiona la igualdad numérica de los registros contables."
        ],
        1,
        "Recuerda: La rentabilidad mide la ganancia o utilidad obtenida en proporción al capital invertido o recursos empleados."
      ]
    ]
  },
  {
    "id": 83,
    "world": 9,
    "level": 3,
    "title": "Capital de trabajo",
    "subtitle": "Aprende finanzas, rentabilidad, capital de trabajo, presupuesto y punto de equilibrio.",
    "sections": [
      [
        "Definición de la tarjeta",
        "El capital de trabajo es el excedente de los activos corrientes sobre los pasivos corrientes."
      ],
      [
        "Explicación paso a paso",
        "Garantiza que la empresa tenga suficiente liquidez para pagar sueldos, materias primas y facturas inmediatas."
      ],
      [
        "Ejemplo práctico",
        "Restar pasivos a corto plazo de los activos circulantes para conocer el fondo operativo."
      ],
      [
        "Cómo reconocer el concepto",
        "Identifica la liquidez operativa a corto plazo."
      ],
      [
        "Lo que debes recordar",
        "Capital de trabajo: El capital de trabajo es el excedente de los activos corrientes sobre los pasivos corrientes."
      ]
    ],
    "summary": "Capital de trabajo. El capital de trabajo es el excedente de los activos corrientes sobre los pasivos corrientes.",
    "questions": [
      [
        "¿Cuál es la definición correcta de capital de trabajo?",
        [
          "Es un concepto ajeno a la gestión contable y financiera de la entidad.",
          "El capital de trabajo es el excedente de los activos corrientes sobre los pasivos corrientes.",
          "Corresponde exclusivamente a un registro temporal sin validez formal."
        ],
        1,
        "Recuerda: El capital de trabajo es el excedente de los activos corrientes sobre los pasivos corrientes."
      ],
      [
        "Según esta lección, ¿cómo se entiende el concepto de capital de trabajo?",
        [
          "Garantiza que la empresa tenga suficiente liquidez para pagar sueldos, materias primas y facturas inmediatas.",
          "Se calcula restando todos los pasivos circulantes entre sí.",
          "Es un informe exclusivo para auditorías externas gubernamentales."
        ],
        0,
        "Recuerda: El capital de trabajo es el excedente de los activos corrientes sobre los pasivos corrientes."
      ],
      [
        "¿Qué enunciado describe correctamente la aplicación práctica de capital de trabajo?",
        [
          "No tiene aplicación directa en las operaciones cotidianas de una empresa.",
          "Restar pasivos a corto plazo de los activos circulantes para conocer el fondo operativo.",
          "Solo se aplica al cierre de operaciones fiscales anuales obligatorias."
        ],
        1,
        "Recuerda: El capital de trabajo es el excedente de los activos corrientes sobre los pasivos corrientes."
      ],
      [
        "¿Cuál afirmación coincide exactamente con lo explicado sobre capital de trabajo?",
        [
          "Se relaciona directamente con la premisa: El capital de trabajo es el excedente de los activos corrientes sobre los pasivos corrientes.",
          "Modifica de forma arbitraria la ecuación contable fundamental.",
          "Representa un pasivo exigible a corto plazo."
        ],
        0,
        "Recuerda: El capital de trabajo es el excedente de los activos corrientes sobre los pasivos corrientes."
      ],
      [
        "Al estudiar capital de trabajo, ¿qué aspecto clave debes identificar?",
        [
          "Su dependencia exclusiva de factores externos macroeconómicos.",
          "Identifica la liquidez operativa a corto plazo.",
          "Que no requiere ningún tipo de control ni registro documental."
        ],
        1,
        "Recuerda: El capital de trabajo es el excedente de los activos corrientes sobre los pasivos corrientes."
      ],
      [
        "¿Qué opción expresa la idea central desarrollada en esta lección?",
        [
          "Los registros se realizan sin seguir ningún orden lógico ni cronológico.",
          "El capital de trabajo es el excedente de los activos corrientes sobre los pasivos corrientes.",
          "Los estados financieros pierden toda validez legal al aplicarlo."
        ],
        1,
        "Recuerda: El capital de trabajo es el excedente de los activos corrientes sobre los pasivos corrientes."
      ],
      [
        "De acuerdo con los fundamentos estudiados, ¿cómo opera capital de trabajo?",
        [
          "Garantiza que la empresa tenga suficiente liquidez para pagar sueldos, materias primas y facturas inmediatas.",
          "Generando automáticamente pasivos contingentes para la entidad.",
          "Eliminando la necesidad de libros diario y mayor."
        ],
        0,
        "Recuerda: El capital de trabajo es el excedente de los activos corrientes sobre los pasivos corrientes."
      ],
      [
        "¿Cuál de las siguientes opciones ejemplifica correctamente este concepto?",
        [
          "Modificar estados financieros sin soporte documental.",
          "Restar pasivos a corto plazo de los activos circulantes para conocer el fondo operativo.",
          "Omitir el registro de operaciones mercantiles cotidianas."
        ],
        1,
        "Recuerda: El capital de trabajo es el excedente de los activos corrientes sobre los pasivos corrientes."
      ],
      [
        "¿Qué descripción corresponde al principio fundamental explicado en capital de trabajo?",
        [
          "La supresión total de controles internos en la empresa.",
          "La aplicación de métodos empíricos sin base técnica.",
          "El capital de trabajo es el excedente de los activos corrientes sobre los pasivos corrientes."
        ],
        2,
        "Recuerda: El capital de trabajo es el excedente de los activos corrientes sobre los pasivos corrientes."
      ],
      [
        "Selecciona la afirmación que resume de mejor manera lo aprendido sobre capital de trabajo:",
        [
          "Es un procedimiento opcional que las empresas pueden ignorar.",
          "El capital de trabajo es el excedente de los activos corrientes sobre los pasivos corrientes.",
          "Distorsiona la igualdad numérica de los registros contables."
        ],
        1,
        "Recuerda: El capital de trabajo es el excedente de los activos corrientes sobre los pasivos corrientes."
      ]
    ]
  },
  {
    "id": 84,
    "world": 9,
    "level": 4,
    "title": "Presupuesto operativo y financiero",
    "subtitle": "Aprende finanzas, rentabilidad, capital de trabajo, presupuesto y punto de equilibrio.",
    "sections": [
      [
        "Definición de la tarjeta",
        "El presupuesto es la estimación financiera anticipada de los ingresos, costos, gastos y flujos monetarios futuros."
      ],
      [
        "Explicación paso a paso",
        "Sirve como herramienta de control y guía para la toma de decisiones gerenciales."
      ],
      [
        "Ejemplo práctico",
        "Planificar las ventas estimadas y los pagos previstos para el siguiente año fiscal."
      ],
      [
        "Cómo reconocer el concepto",
        "Reconoce la planificación financiera anticipada."
      ],
      [
        "Lo que debes recordar",
        "Presupuesto operativo y financiero: El presupuesto es la estimación financiera anticipada de los ingresos, costos, gastos y flujos monetarios futuros."
      ]
    ],
    "summary": "Presupuesto operativo y financiero. El presupuesto es la estimación financiera anticipada de los ingresos, costos, gastos y flujos monetarios futuros.",
    "questions": [
      [
        "¿Cuál es la definición correcta de presupuesto operativo y financiero?",
        [
          "Es un concepto ajeno a la gestión contable y financiera de la entidad.",
          "El presupuesto es la estimación financiera anticipada de los ingresos, costos, gastos y flujos monetarios futuros.",
          "Corresponde exclusivamente a un registro temporal sin validez formal."
        ],
        1,
        "Recuerda: El presupuesto es la estimación financiera anticipada de los ingresos, costos, gastos y flujos monetarios futuros."
      ],
      [
        "Según esta lección, ¿cómo se entiende el concepto de presupuesto operativo y financiero?",
        [
          "Sirve como herramienta de control y guía para la toma de decisiones gerenciales.",
          "Se calcula restando todos los pasivos circulantes entre sí.",
          "Es un informe exclusivo para auditorías externas gubernamentales."
        ],
        0,
        "Recuerda: El presupuesto es la estimación financiera anticipada de los ingresos, costos, gastos y flujos monetarios futuros."
      ],
      [
        "¿Qué enunciado describe correctamente la aplicación práctica de presupuesto operativo y financiero?",
        [
          "No tiene aplicación directa en las operaciones cotidianas de una empresa.",
          "Planificar las ventas estimadas y los pagos previstos para el siguiente año fiscal.",
          "Solo se aplica al cierre de operaciones fiscales anuales obligatorias."
        ],
        1,
        "Recuerda: El presupuesto es la estimación financiera anticipada de los ingresos, costos, gastos y flujos monetarios futuros."
      ],
      [
        "¿Cuál afirmación coincide exactamente con lo explicado sobre presupuesto operativo y financiero?",
        [
          "Se relaciona directamente con la premisa: El presupuesto es la estimación financiera anticipada de los ingresos, costos, gastos y flujos monetarios futuros.",
          "Modifica de forma arbitraria la ecuación contable fundamental.",
          "Representa un pasivo exigible a corto plazo."
        ],
        0,
        "Recuerda: El presupuesto es la estimación financiera anticipada de los ingresos, costos, gastos y flujos monetarios futuros."
      ],
      [
        "Al estudiar presupuesto operativo y financiero, ¿qué aspecto clave debes identificar?",
        [
          "Su dependencia exclusiva de factores externos macroeconómicos.",
          "Reconoce la planificación financiera anticipada.",
          "Que no requiere ningún tipo de control ni registro documental."
        ],
        1,
        "Recuerda: El presupuesto es la estimación financiera anticipada de los ingresos, costos, gastos y flujos monetarios futuros."
      ],
      [
        "¿Qué opción expresa la idea central desarrollada en esta lección?",
        [
          "Los registros se realizan sin seguir ningún orden lógico ni cronológico.",
          "El presupuesto es la estimación financiera anticipada de los ingresos, costos, gastos y flujos monetarios futuros.",
          "Los estados financieros pierden toda validez legal al aplicarlo."
        ],
        1,
        "Recuerda: El presupuesto es la estimación financiera anticipada de los ingresos, costos, gastos y flujos monetarios futuros."
      ],
      [
        "De acuerdo con los fundamentos estudiados, ¿cómo opera presupuesto operativo y financiero?",
        [
          "Sirve como herramienta de control y guía para la toma de decisiones gerenciales.",
          "Generando automáticamente pasivos contingentes para la entidad.",
          "Eliminando la necesidad de libros diario y mayor."
        ],
        0,
        "Recuerda: El presupuesto es la estimación financiera anticipada de los ingresos, costos, gastos y flujos monetarios futuros."
      ],
      [
        "¿Cuál de las siguientes opciones ejemplifica correctamente este concepto?",
        [
          "Modificar estados financieros sin soporte documental.",
          "Planificar las ventas estimadas y los pagos previstos para el siguiente año fiscal.",
          "Omitir el registro de operaciones mercantiles cotidianas."
        ],
        1,
        "Recuerda: El presupuesto es la estimación financiera anticipada de los ingresos, costos, gastos y flujos monetarios futuros."
      ],
      [
        "¿Qué descripción corresponde al principio fundamental explicado en presupuesto operativo y financiero?",
        [
          "La supresión total de controles internos en la empresa.",
          "La aplicación de métodos empíricos sin base técnica.",
          "El presupuesto es la estimación financiera anticipada de los ingresos, costos, gastos y flujos monetarios futuros."
        ],
        2,
        "Recuerda: El presupuesto es la estimación financiera anticipada de los ingresos, costos, gastos y flujos monetarios futuros."
      ],
      [
        "Selecciona la afirmación que resume de mejor manera lo aprendido sobre presupuesto operativo y financiero:",
        [
          "Es un procedimiento opcional que las empresas pueden ignorar.",
          "El presupuesto es la estimación financiera anticipada de los ingresos, costos, gastos y flujos monetarios futuros.",
          "Distorsiona la igualdad numérica de los registros contables."
        ],
        1,
        "Recuerda: El presupuesto es la estimación financiera anticipada de los ingresos, costos, gastos y flujos monetarios futuros."
      ]
    ]
  },
  {
    "id": 85,
    "world": 9,
    "level": 5,
    "title": "Punto de equilibrio",
    "subtitle": "Aprende finanzas, rentabilidad, capital de trabajo, presupuesto y punto de equilibrio.",
    "sections": [
      [
        "Definición de la tarjeta",
        "El punto de equilibrio es el volumen de ventas en el cual la empresa no tiene ganancias ni pérdidas."
      ],
      [
        "Explicación paso a paso",
        "A partir de este punto, cada unidad adicional vendida genera utilidad neta."
      ],
      [
        "Ejemplo práctico",
        "Calcular cuántas unidades se deben vender para cubrir costos fijos y variables."
      ],
      [
        "Cómo reconocer el concepto",
        "Busca el umbral de cero ganancias y cero pérdidas."
      ],
      [
        "Lo que debes recordar",
        "Punto de equilibrio: El punto de equilibrio es el volumen de ventas en el cual la empresa no tiene ganancias ni pérdidas."
      ]
    ],
    "summary": "Punto de equilibrio. El punto de equilibrio es el volumen de ventas en el cual la empresa no tiene ganancias ni pérdidas.",
    "questions": [
      [
        "¿Cuál es la definición correcta de punto de equilibrio?",
        [
          "Es un concepto ajeno a la gestión contable y financiera de la entidad.",
          "El punto de equilibrio es el volumen de ventas en el cual la empresa no tiene ganancias ni pérdidas.",
          "Corresponde exclusivamente a un registro temporal sin validez formal."
        ],
        1,
        "Recuerda: El punto de equilibrio es el volumen de ventas en el cual la empresa no tiene ganancias ni pérdidas."
      ],
      [
        "Según esta lección, ¿cómo se entiende el concepto de punto de equilibrio?",
        [
          "A partir de este punto, cada unidad adicional vendida genera utilidad neta.",
          "Se calcula restando todos los pasivos circulantes entre sí.",
          "Es un informe exclusivo para auditorías externas gubernamentales."
        ],
        0,
        "Recuerda: El punto de equilibrio es el volumen de ventas en el cual la empresa no tiene ganancias ni pérdidas."
      ],
      [
        "¿Qué enunciado describe correctamente la aplicación práctica de punto de equilibrio?",
        [
          "No tiene aplicación directa en las operaciones cotidianas de una empresa.",
          "Calcular cuántas unidades se deben vender para cubrir costos fijos y variables.",
          "Solo se aplica al cierre de operaciones fiscales anuales obligatorias."
        ],
        1,
        "Recuerda: El punto de equilibrio es el volumen de ventas en el cual la empresa no tiene ganancias ni pérdidas."
      ],
      [
        "¿Cuál afirmación coincide exactamente con lo explicado sobre punto de equilibrio?",
        [
          "Se relaciona directamente con la premisa: El punto de equilibrio es el volumen de ventas en el cual la empresa no tiene ganancias ni pérdidas.",
          "Modifica de forma arbitraria la ecuación contable fundamental.",
          "Representa un pasivo exigible a corto plazo."
        ],
        0,
        "Recuerda: El punto de equilibrio es el volumen de ventas en el cual la empresa no tiene ganancias ni pérdidas."
      ],
      [
        "Al estudiar punto de equilibrio, ¿qué aspecto clave debes identificar?",
        [
          "Su dependencia exclusiva de factores externos macroeconómicos.",
          "Busca el umbral de cero ganancias y cero pérdidas.",
          "Que no requiere ningún tipo de control ni registro documental."
        ],
        1,
        "Recuerda: El punto de equilibrio es el volumen de ventas en el cual la empresa no tiene ganancias ni pérdidas."
      ],
      [
        "¿Qué opción expresa la idea central desarrollada en esta lección?",
        [
          "Los registros se realizan sin seguir ningún orden lógico ni cronológico.",
          "El punto de equilibrio es el volumen de ventas en el cual la empresa no tiene ganancias ni pérdidas.",
          "Los estados financieros pierden toda validez legal al aplicarlo."
        ],
        1,
        "Recuerda: El punto de equilibrio es el volumen de ventas en el cual la empresa no tiene ganancias ni pérdidas."
      ],
      [
        "De acuerdo con los fundamentos estudiados, ¿cómo opera punto de equilibrio?",
        [
          "A partir de este punto, cada unidad adicional vendida genera utilidad neta.",
          "Generando automáticamente pasivos contingentes para la entidad.",
          "Eliminando la necesidad de libros diario y mayor."
        ],
        0,
        "Recuerda: El punto de equilibrio es el volumen de ventas en el cual la empresa no tiene ganancias ni pérdidas."
      ],
      [
        "¿Cuál de las siguientes opciones ejemplifica correctamente este concepto?",
        [
          "Modificar estados financieros sin soporte documental.",
          "Calcular cuántas unidades se deben vender para cubrir costos fijos y variables.",
          "Omitir el registro de operaciones mercantiles cotidianas."
        ],
        1,
        "Recuerda: El punto de equilibrio es el volumen de ventas en el cual la empresa no tiene ganancias ni pérdidas."
      ],
      [
        "¿Qué descripción corresponde al principio fundamental explicado en punto de equilibrio?",
        [
          "La supresión total de controles internos en la empresa.",
          "La aplicación de métodos empíricos sin base técnica.",
          "El punto de equilibrio es el volumen de ventas en el cual la empresa no tiene ganancias ni pérdidas."
        ],
        2,
        "Recuerda: El punto de equilibrio es el volumen de ventas en el cual la empresa no tiene ganancias ni pérdidas."
      ],
      [
        "Selecciona la afirmación que resume de mejor manera lo aprendido sobre punto de equilibrio:",
        [
          "Es un procedimiento opcional que las empresas pueden ignorar.",
          "El punto de equilibrio es el volumen de ventas en el cual la empresa no tiene ganancias ni pérdidas.",
          "Distorsiona la igualdad numérica de los registros contables."
        ],
        1,
        "Recuerda: El punto de equilibrio es el volumen de ventas en el cual la empresa no tiene ganancias ni pérdidas."
      ]
    ]
  },
  {
    "id": 86,
    "world": 9,
    "level": 6,
    "title": "Apalancamiento financiero",
    "subtitle": "Aprende finanzas, rentabilidad, capital de trabajo, presupuesto y punto de equilibrio.",
    "sections": [
      [
        "Definición de la tarjeta",
        "El apalancamiento financiero consiste en utilizar endeudamiento para financiar operaciones y potenciar la rentabilidad."
      ],
      [
        "Explicación paso a paso",
        "Implica mayor riesgo financiero si los rendimientos operativos disminuyen."
      ],
      [
        "Ejemplo práctico",
        "Financiar la compra de nueva maquinaria un 50% con deuda bancaria y 50% con capital propio."
      ],
      [
        "Cómo reconocer el concepto",
        "Identifica el uso estratégico de deuda."
      ],
      [
        "Lo que debes recordar",
        "Apalancamiento financiero: El apalancamiento financiero consiste en utilizar endeudamiento para financiar operaciones y potenciar la rentabilidad."
      ]
    ],
    "summary": "Apalancamiento financiero. El apalancamiento financiero consiste en utilizar endeudamiento para financiar operaciones y potenciar la rentabilidad.",
    "questions": [
      [
        "¿Cuál es la definición correcta de apalancamiento financiero?",
        [
          "Es un concepto ajeno a la gestión contable y financiera de la entidad.",
          "El apalancamiento financiero consiste en utilizar endeudamiento para financiar operaciones y potenciar la rentabilidad.",
          "Corresponde exclusivamente a un registro temporal sin validez formal."
        ],
        1,
        "Recuerda: El apalancamiento financiero consiste en utilizar endeudamiento para financiar operaciones y potenciar la rentabilidad."
      ],
      [
        "Según esta lección, ¿cómo se entiende el concepto de apalancamiento financiero?",
        [
          "Implica mayor riesgo financiero si los rendimientos operativos disminuyen.",
          "Se calcula restando todos los pasivos circulantes entre sí.",
          "Es un informe exclusivo para auditorías externas gubernamentales."
        ],
        0,
        "Recuerda: El apalancamiento financiero consiste en utilizar endeudamiento para financiar operaciones y potenciar la rentabilidad."
      ],
      [
        "¿Qué enunciado describe correctamente la aplicación práctica de apalancamiento financiero?",
        [
          "No tiene aplicación directa en las operaciones cotidianas de una empresa.",
          "Financiar la compra de nueva maquinaria un 50% con deuda bancaria y 50% con capital propio.",
          "Solo se aplica al cierre de operaciones fiscales anuales obligatorias."
        ],
        1,
        "Recuerda: El apalancamiento financiero consiste en utilizar endeudamiento para financiar operaciones y potenciar la rentabilidad."
      ],
      [
        "¿Cuál afirmación coincide exactamente con lo explicado sobre apalancamiento financiero?",
        [
          "Se relaciona directamente con la premisa: El apalancamiento financiero consiste en utilizar endeudamiento para financiar operaciones y potenciar la rentabilidad.",
          "Modifica de forma arbitraria la ecuación contable fundamental.",
          "Representa un pasivo exigible a corto plazo."
        ],
        0,
        "Recuerda: El apalancamiento financiero consiste en utilizar endeudamiento para financiar operaciones y potenciar la rentabilidad."
      ],
      [
        "Al estudiar apalancamiento financiero, ¿qué aspecto clave debes identificar?",
        [
          "Su dependencia exclusiva de factores externos macroeconómicos.",
          "Identifica el uso estratégico de deuda.",
          "Que no requiere ningún tipo de control ni registro documental."
        ],
        1,
        "Recuerda: El apalancamiento financiero consiste en utilizar endeudamiento para financiar operaciones y potenciar la rentabilidad."
      ],
      [
        "¿Qué opción expresa la idea central desarrollada en esta lección?",
        [
          "Los registros se realizan sin seguir ningún orden lógico ni cronológico.",
          "El apalancamiento financiero consiste en utilizar endeudamiento para financiar operaciones y potenciar la rentabilidad.",
          "Los estados financieros pierden toda validez legal al aplicarlo."
        ],
        1,
        "Recuerda: El apalancamiento financiero consiste en utilizar endeudamiento para financiar operaciones y potenciar la rentabilidad."
      ],
      [
        "De acuerdo con los fundamentos estudiados, ¿cómo opera apalancamiento financiero?",
        [
          "Implica mayor riesgo financiero si los rendimientos operativos disminuyen.",
          "Generando automáticamente pasivos contingentes para la entidad.",
          "Eliminando la necesidad de libros diario y mayor."
        ],
        0,
        "Recuerda: El apalancamiento financiero consiste en utilizar endeudamiento para financiar operaciones y potenciar la rentabilidad."
      ],
      [
        "¿Cuál de las siguientes opciones ejemplifica correctamente este concepto?",
        [
          "Modificar estados financieros sin soporte documental.",
          "Financiar la compra de nueva maquinaria un 50% con deuda bancaria y 50% con capital propio.",
          "Omitir el registro de operaciones mercantiles cotidianas."
        ],
        1,
        "Recuerda: El apalancamiento financiero consiste en utilizar endeudamiento para financiar operaciones y potenciar la rentabilidad."
      ],
      [
        "¿Qué descripción corresponde al principio fundamental explicado en apalancamiento financiero?",
        [
          "La supresión total de controles internos en la empresa.",
          "La aplicación de métodos empíricos sin base técnica.",
          "El apalancamiento financiero consiste en utilizar endeudamiento para financiar operaciones y potenciar la rentabilidad."
        ],
        2,
        "Recuerda: El apalancamiento financiero consiste en utilizar endeudamiento para financiar operaciones y potenciar la rentabilidad."
      ],
      [
        "Selecciona la afirmación que resume de mejor manera lo aprendido sobre apalancamiento financiero:",
        [
          "Es un procedimiento opcional que las empresas pueden ignorar.",
          "El apalancamiento financiero consiste en utilizar endeudamiento para financiar operaciones y potenciar la rentabilidad.",
          "Distorsiona la igualdad numérica de los registros contables."
        ],
        1,
        "Recuerda: El apalancamiento financiero consiste en utilizar endeudamiento para financiar operaciones y potenciar la rentabilidad."
      ]
    ]
  },
  {
    "id": 87,
    "world": 9,
    "level": 7,
    "title": "Liquidez",
    "subtitle": "Aprende finanzas, rentabilidad, capital de trabajo, presupuesto y punto de equilibrio.",
    "sections": [
      [
        "Definición de la tarjeta",
        "La liquidez es la facilidad con que un activo puede convertirse en dinero en efectivo sin perder valor."
      ],
      [
        "Explicación paso a paso",
        "Mide la capacidad de la empresa para pagar sus deudas inmediatas puntualmente."
      ],
      [
        "Ejemplo práctico",
        "Disponer de dinero en cuentas bancarias para pagar la nómina quincenal."
      ],
      [
        "Cómo reconocer el concepto",
        "Reconoce la disponibilidad inmediata de tesorería."
      ],
      [
        "Lo que debes recordar",
        "Liquidez: La liquidez es la facilidad con que un activo puede convertirse en dinero en efectivo sin perder valor."
      ]
    ],
    "summary": "Liquidez. La liquidez es la facilidad con que un activo puede convertirse en dinero en efectivo sin perder valor.",
    "questions": [
      [
        "¿Cuál es la definición correcta de liquidez?",
        [
          "Es un concepto ajeno a la gestión contable y financiera de la entidad.",
          "La liquidez es la facilidad con que un activo puede convertirse en dinero en efectivo sin perder valor.",
          "Corresponde exclusivamente a un registro temporal sin validez formal."
        ],
        1,
        "Recuerda: La liquidez es la facilidad con que un activo puede convertirse en dinero en efectivo sin perder valor."
      ],
      [
        "Según esta lección, ¿cómo se entiende el concepto de liquidez?",
        [
          "Mide la capacidad de la empresa para pagar sus deudas inmediatas puntualmente.",
          "Se calcula restando todos los pasivos circulantes entre sí.",
          "Es un informe exclusivo para auditorías externas gubernamentales."
        ],
        0,
        "Recuerda: La liquidez es la facilidad con que un activo puede convertirse en dinero en efectivo sin perder valor."
      ],
      [
        "¿Qué enunciado describe correctamente la aplicación práctica de liquidez?",
        [
          "No tiene aplicación directa en las operaciones cotidianas de una empresa.",
          "Disponer de dinero en cuentas bancarias para pagar la nómina quincenal.",
          "Solo se aplica al cierre de operaciones fiscales anuales obligatorias."
        ],
        1,
        "Recuerda: La liquidez es la facilidad con que un activo puede convertirse en dinero en efectivo sin perder valor."
      ],
      [
        "¿Cuál afirmación coincide exactamente con lo explicado sobre liquidez?",
        [
          "Se relaciona directamente con la premisa: La liquidez es la facilidad con que un activo puede convertirse en dinero en efectivo sin perder valor.",
          "Modifica de forma arbitraria la ecuación contable fundamental.",
          "Representa un pasivo exigible a corto plazo."
        ],
        0,
        "Recuerda: La liquidez es la facilidad con que un activo puede convertirse en dinero en efectivo sin perder valor."
      ],
      [
        "Al estudiar liquidez, ¿qué aspecto clave debes identificar?",
        [
          "Su dependencia exclusiva de factores externos macroeconómicos.",
          "Reconoce la disponibilidad inmediata de tesorería.",
          "Que no requiere ningún tipo de control ni registro documental."
        ],
        1,
        "Recuerda: La liquidez es la facilidad con que un activo puede convertirse en dinero en efectivo sin perder valor."
      ],
      [
        "¿Qué opción expresa la idea central desarrollada en esta lección?",
        [
          "Los registros se realizan sin seguir ningún orden lógico ni cronológico.",
          "La liquidez es la facilidad con que un activo puede convertirse en dinero en efectivo sin perder valor.",
          "Los estados financieros pierden toda validez legal al aplicarlo."
        ],
        1,
        "Recuerda: La liquidez es la facilidad con que un activo puede convertirse en dinero en efectivo sin perder valor."
      ],
      [
        "De acuerdo con los fundamentos estudiados, ¿cómo opera liquidez?",
        [
          "Mide la capacidad de la empresa para pagar sus deudas inmediatas puntualmente.",
          "Generando automáticamente pasivos contingentes para la entidad.",
          "Eliminando la necesidad de libros diario y mayor."
        ],
        0,
        "Recuerda: La liquidez es la facilidad con que un activo puede convertirse en dinero en efectivo sin perder valor."
      ],
      [
        "¿Cuál de las siguientes opciones ejemplifica correctamente este concepto?",
        [
          "Modificar estados financieros sin soporte documental.",
          "Disponer de dinero en cuentas bancarias para pagar la nómina quincenal.",
          "Omitir el registro de operaciones mercantiles cotidianas."
        ],
        1,
        "Recuerda: La liquidez es la facilidad con que un activo puede convertirse en dinero en efectivo sin perder valor."
      ],
      [
        "¿Qué descripción corresponde al principio fundamental explicado en liquidez?",
        [
          "La supresión total de controles internos en la empresa.",
          "La aplicación de métodos empíricos sin base técnica.",
          "La liquidez es la facilidad con que un activo puede convertirse en dinero en efectivo sin perder valor."
        ],
        2,
        "Recuerda: La liquidez es la facilidad con que un activo puede convertirse en dinero en efectivo sin perder valor."
      ],
      [
        "Selecciona la afirmación que resume de mejor manera lo aprendido sobre liquidez:",
        [
          "Es un procedimiento opcional que las empresas pueden ignorar.",
          "La liquidez es la facilidad con que un activo puede convertirse en dinero en efectivo sin perder valor.",
          "Distorsiona la igualdad numérica de los registros contables."
        ],
        1,
        "Recuerda: La liquidez es la facilidad con que un activo puede convertirse en dinero en efectivo sin perder valor."
      ]
    ]
  },
  {
    "id": 88,
    "world": 9,
    "level": 8,
    "title": "Valor del dinero en el tiempo",
    "subtitle": "Aprende finanzas, rentabilidad, capital de trabajo, presupuesto y punto de equilibrio.",
    "sections": [
      [
        "Definición de la tarjeta",
        "El valor del dinero en el tiempo establece que el dinero disponible hoy tiene mayor potencial de valor debido al interés."
      ],
      [
        "Explicación paso a paso",
        "Se fundamenta en la capacidad de inversión y generación de rendimientos con el tiempo."
      ],
      [
        "Ejemplo práctico",
        "Evaluar cuánto valdrá una inversión de hoy dentro de cinco años aplicando una tasa de descuento."
      ],
      [
        "Cómo reconocer el concepto",
        "Identifica el principio temporal del dinero."
      ],
      [
        "Lo que debes recordar",
        "Valor del dinero en el tiempo: El valor del dinero en el tiempo establece que el dinero disponible hoy tiene mayor potencial de valor debido al interés."
      ]
    ],
    "summary": "Valor del dinero en el tiempo. El valor del dinero en el tiempo establece que el dinero disponible hoy tiene mayor potencial de valor debido al interés.",
    "questions": [
      [
        "¿Cuál es la definición correcta de valor del dinero en el tiempo?",
        [
          "Es un concepto ajeno a la gestión contable y financiera de la entidad.",
          "El valor del dinero en el tiempo establece que el dinero disponible hoy tiene mayor potencial de valor debido al interés.",
          "Corresponde exclusivamente a un registro temporal sin validez formal."
        ],
        1,
        "Recuerda: El valor del dinero en el tiempo establece que el dinero disponible hoy tiene mayor potencial de valor debido al interés."
      ],
      [
        "Según esta lección, ¿cómo se entiende el concepto de valor del dinero en el tiempo?",
        [
          "Se fundamenta en la capacidad de inversión y generación de rendimientos con el tiempo.",
          "Se calcula restando todos los pasivos circulantes entre sí.",
          "Es un informe exclusivo para auditorías externas gubernamentales."
        ],
        0,
        "Recuerda: El valor del dinero en el tiempo establece que el dinero disponible hoy tiene mayor potencial de valor debido al interés."
      ],
      [
        "¿Qué enunciado describe correctamente la aplicación práctica de valor del dinero en el tiempo?",
        [
          "No tiene aplicación directa en las operaciones cotidianas de una empresa.",
          "Evaluar cuánto valdrá una inversión de hoy dentro de cinco años aplicando una tasa de descuento.",
          "Solo se aplica al cierre de operaciones fiscales anuales obligatorias."
        ],
        1,
        "Recuerda: El valor del dinero en el tiempo establece que el dinero disponible hoy tiene mayor potencial de valor debido al interés."
      ],
      [
        "¿Cuál afirmación coincide exactamente con lo explicado sobre valor del dinero en el tiempo?",
        [
          "Se relaciona directamente con la premisa: El valor del dinero en el tiempo establece que el dinero disponible hoy tiene mayor potencial de valor debido al interés.",
          "Modifica de forma arbitraria la ecuación contable fundamental.",
          "Representa un pasivo exigible a corto plazo."
        ],
        0,
        "Recuerda: El valor del dinero en el tiempo establece que el dinero disponible hoy tiene mayor potencial de valor debido al interés."
      ],
      [
        "Al estudiar valor del dinero en el tiempo, ¿qué aspecto clave debes identificar?",
        [
          "Su dependencia exclusiva de factores externos macroeconómicos.",
          "Identifica el principio temporal del dinero.",
          "Que no requiere ningún tipo de control ni registro documental."
        ],
        1,
        "Recuerda: El valor del dinero en el tiempo establece que el dinero disponible hoy tiene mayor potencial de valor debido al interés."
      ],
      [
        "¿Qué opción expresa la idea central desarrollada en esta lección?",
        [
          "Los registros se realizan sin seguir ningún orden lógico ni cronológico.",
          "El valor del dinero en el tiempo establece que el dinero disponible hoy tiene mayor potencial de valor debido al interés.",
          "Los estados financieros pierden toda validez legal al aplicarlo."
        ],
        1,
        "Recuerda: El valor del dinero en el tiempo establece que el dinero disponible hoy tiene mayor potencial de valor debido al interés."
      ],
      [
        "De acuerdo con los fundamentos estudiados, ¿cómo opera valor del dinero en el tiempo?",
        [
          "Se fundamenta en la capacidad de inversión y generación de rendimientos con el tiempo.",
          "Generando automáticamente pasivos contingentes para la entidad.",
          "Eliminando la necesidad de libros diario y mayor."
        ],
        0,
        "Recuerda: El valor del dinero en el tiempo establece que el dinero disponible hoy tiene mayor potencial de valor debido al interés."
      ],
      [
        "¿Cuál de las siguientes opciones ejemplifica correctamente este concepto?",
        [
          "Modificar estados financieros sin soporte documental.",
          "Evaluar cuánto valdrá una inversión de hoy dentro de cinco años aplicando una tasa de descuento.",
          "Omitir el registro de operaciones mercantiles cotidianas."
        ],
        1,
        "Recuerda: El valor del dinero en el tiempo establece que el dinero disponible hoy tiene mayor potencial de valor debido al interés."
      ],
      [
        "¿Qué descripción corresponde al principio fundamental explicado en valor del dinero en el tiempo?",
        [
          "La supresión total de controles internos en la empresa.",
          "La aplicación de métodos empíricos sin base técnica.",
          "El valor del dinero en el tiempo establece que el dinero disponible hoy tiene mayor potencial de valor debido al interés."
        ],
        2,
        "Recuerda: El valor del dinero en el tiempo establece que el dinero disponible hoy tiene mayor potencial de valor debido al interés."
      ],
      [
        "Selecciona la afirmación que resume de mejor manera lo aprendido sobre valor del dinero en el tiempo:",
        [
          "Es un procedimiento opcional que las empresas pueden ignorar.",
          "El valor del dinero en el tiempo establece que el dinero disponible hoy tiene mayor potencial de valor debido al interés.",
          "Distorsiona la igualdad numérica de los registros contables."
        ],
        1,
        "Recuerda: El valor del dinero en el tiempo establece que el dinero disponible hoy tiene mayor potencial de valor debido al interés."
      ]
    ]
  },
  {
    "id": 89,
    "world": 9,
    "level": 9,
    "title": "Flujo de caja proyectado",
    "subtitle": "Aprende finanzas, rentabilidad, capital de trabajo, presupuesto y punto de equilibrio.",
    "sections": [
      [
        "Definición de la tarjeta",
        "El flujo de caja proyectado es el pronóstico de los cobros y pagos esperados en diferentes periodos futuros."
      ],
      [
        "Explicación paso a paso",
        "Permite anticipar déficits de liquidez y planificar necesidades de financiamiento temporal."
      ],
      [
        "Ejemplo práctico",
        "Pronosticar los ingresos por ventas y egresos de caja mes a mes para el próximo año."
      ],
      [
        "Cómo reconocer el concepto",
        "Busca la proyección temporal de tesorería."
      ],
      [
        "Lo que debes recordar",
        "Flujo de caja proyectado: El flujo de caja proyectado es el pronóstico de los cobros y pagos esperados en diferentes periodos futuros."
      ]
    ],
    "summary": "Flujo de caja proyectado. El flujo de caja proyectado es el pronóstico de los cobros y pagos esperados en diferentes periodos futuros.",
    "questions": [
      [
        "¿Cuál es la definición correcta de flujo de caja proyectado?",
        [
          "Es un concepto ajeno a la gestión contable y financiera de la entidad.",
          "El flujo de caja proyectado es el pronóstico de los cobros y pagos esperados en diferentes periodos futuros.",
          "Corresponde exclusivamente a un registro temporal sin validez formal."
        ],
        1,
        "Recuerda: El flujo de caja proyectado es el pronóstico de los cobros y pagos esperados en diferentes periodos futuros."
      ],
      [
        "Según esta lección, ¿cómo se entiende el concepto de flujo de caja proyectado?",
        [
          "Permite anticipar déficits de liquidez y planificar necesidades de financiamiento temporal.",
          "Se calcula restando todos los pasivos circulantes entre sí.",
          "Es un informe exclusivo para auditorías externas gubernamentales."
        ],
        0,
        "Recuerda: El flujo de caja proyectado es el pronóstico de los cobros y pagos esperados en diferentes periodos futuros."
      ],
      [
        "¿Qué enunciado describe correctamente la aplicación práctica de flujo de caja proyectado?",
        [
          "No tiene aplicación directa en las operaciones cotidianas de una empresa.",
          "Pronosticar los ingresos por ventas y egresos de caja mes a mes para el próximo año.",
          "Solo se aplica al cierre de operaciones fiscales anuales obligatorias."
        ],
        1,
        "Recuerda: El flujo de caja proyectado es el pronóstico de los cobros y pagos esperados en diferentes periodos futuros."
      ],
      [
        "¿Cuál afirmación coincide exactamente con lo explicado sobre flujo de caja proyectado?",
        [
          "Se relaciona directamente con la premisa: El flujo de caja proyectado es el pronóstico de los cobros y pagos esperados en diferentes periodos futuros.",
          "Modifica de forma arbitraria la ecuación contable fundamental.",
          "Representa un pasivo exigible a corto plazo."
        ],
        0,
        "Recuerda: El flujo de caja proyectado es el pronóstico de los cobros y pagos esperados en diferentes periodos futuros."
      ],
      [
        "Al estudiar flujo de caja proyectado, ¿qué aspecto clave debes identificar?",
        [
          "Su dependencia exclusiva de factores externos macroeconómicos.",
          "Busca la proyección temporal de tesorería.",
          "Que no requiere ningún tipo de control ni registro documental."
        ],
        1,
        "Recuerda: El flujo de caja proyectado es el pronóstico de los cobros y pagos esperados en diferentes periodos futuros."
      ],
      [
        "¿Qué opción expresa la idea central desarrollada en esta lección?",
        [
          "Los registros se realizan sin seguir ningún orden lógico ni cronológico.",
          "El flujo de caja proyectado es el pronóstico de los cobros y pagos esperados en diferentes periodos futuros.",
          "Los estados financieros pierden toda validez legal al aplicarlo."
        ],
        1,
        "Recuerda: El flujo de caja proyectado es el pronóstico de los cobros y pagos esperados en diferentes periodos futuros."
      ],
      [
        "De acuerdo con los fundamentos estudiados, ¿cómo opera flujo de caja proyectado?",
        [
          "Permite anticipar déficits de liquidez y planificar necesidades de financiamiento temporal.",
          "Generando automáticamente pasivos contingentes para la entidad.",
          "Eliminando la necesidad de libros diario y mayor."
        ],
        0,
        "Recuerda: El flujo de caja proyectado es el pronóstico de los cobros y pagos esperados en diferentes periodos futuros."
      ],
      [
        "¿Cuál de las siguientes opciones ejemplifica correctamente este concepto?",
        [
          "Modificar estados financieros sin soporte documental.",
          "Pronosticar los ingresos por ventas y egresos de caja mes a mes para el próximo año.",
          "Omitir el registro de operaciones mercantiles cotidianas."
        ],
        1,
        "Recuerda: El flujo de caja proyectado es el pronóstico de los cobros y pagos esperados en diferentes periodos futuros."
      ],
      [
        "¿Qué descripción corresponde al principio fundamental explicado en flujo de caja proyectado?",
        [
          "La supresión total de controles internos en la empresa.",
          "La aplicación de métodos empíricos sin base técnica.",
          "El flujo de caja proyectado es el pronóstico de los cobros y pagos esperados en diferentes periodos futuros."
        ],
        2,
        "Recuerda: El flujo de caja proyectado es el pronóstico de los cobros y pagos esperados en diferentes periodos futuros."
      ],
      [
        "Selecciona la afirmación que resume de mejor manera lo aprendido sobre flujo de caja proyectado:",
        [
          "Es un procedimiento opcional que las empresas pueden ignorar.",
          "El flujo de caja proyectado es el pronóstico de los cobros y pagos esperados en diferentes periodos futuros.",
          "Distorsiona la igualdad numérica de los registros contables."
        ],
        1,
        "Recuerda: El flujo de caja proyectado es el pronóstico de los cobros y pagos esperados en diferentes periodos futuros."
      ]
    ]
  },
  {
    "id": 90,
    "world": 9,
    "level": 10,
    "title": "Repaso financiero",
    "subtitle": "Aprende finanzas, rentabilidad, capital de trabajo, presupuesto y punto de equilibrio.",
    "sections": [
      [
        "Definición de la tarjeta",
        "Las finanzas analizan la rentabilidad, el capital de trabajo, los presupuestos, la liquidez y el punto de equilibrio para maximizar el valor de la empresa."
      ],
      [
        "Explicación paso a paso",
        "Integra todas las herramientas de gestión de recursos monetarios corporativos."
      ],
      [
        "Ejemplo práctico",
        "Evaluar rentabilidad, calcular punto de equilibrio y proyectar flujos de caja."
      ],
      [
        "Cómo reconocer el concepto",
        "Reconoce el panorama financiero integral."
      ],
      [
        "Lo que debes recordar",
        "Repaso financiero: Las finanzas analizan la rentabilidad, el capital de trabajo, los presupuestos, la liquidez y el punto de equilibrio para maximizar el valor de la empresa."
      ]
    ],
    "summary": "Repaso financiero. Las finanzas analizan la rentabilidad, el capital de trabajo, los presupuestos, la liquidez y el punto de equilibrio para maximizar el valor de la empresa.",
    "questions": [
      [
        "¿Cuál es la definición correcta de repaso financiero?",
        [
          "Es un concepto ajeno a la gestión contable y financiera de la entidad.",
          "Las finanzas analizan la rentabilidad, el capital de trabajo, los presupuestos, la liquidez y el punto de equilibrio para maximizar el valor de la empresa.",
          "Corresponde exclusivamente a un registro temporal sin validez formal."
        ],
        1,
        "Recuerda: Las finanzas analizan la rentabilidad, el capital de trabajo, los presupuestos, la liquidez y el punto de equilibrio para maximizar el valor de la empresa."
      ],
      [
        "Según esta lección, ¿cómo se entiende el concepto de repaso financiero?",
        [
          "Integra todas las herramientas de gestión de recursos monetarios corporativos.",
          "Se calcula restando todos los pasivos circulantes entre sí.",
          "Es un informe exclusivo para auditorías externas gubernamentales."
        ],
        0,
        "Recuerda: Las finanzas analizan la rentabilidad, el capital de trabajo, los presupuestos, la liquidez y el punto de equilibrio para maximizar el valor de la empresa."
      ],
      [
        "¿Qué enunciado describe correctamente la aplicación práctica de repaso financiero?",
        [
          "No tiene aplicación directa en las operaciones cotidianas de una empresa.",
          "Evaluar rentabilidad, calcular punto de equilibrio y proyectar flujos de caja.",
          "Solo se aplica al cierre de operaciones fiscales anuales obligatorias."
        ],
        1,
        "Recuerda: Las finanzas analizan la rentabilidad, el capital de trabajo, los presupuestos, la liquidez y el punto de equilibrio para maximizar el valor de la empresa."
      ],
      [
        "¿Cuál afirmación coincide exactamente con lo explicado sobre repaso financiero?",
        [
          "Se relaciona directamente con la premisa: Las finanzas analizan la rentabilidad, el capital de trabajo, los presupuestos, la liquidez y el punto de equilibrio para maximizar el valor de la empresa.",
          "Modifica de forma arbitraria la ecuación contable fundamental.",
          "Representa un pasivo exigible a corto plazo."
        ],
        0,
        "Recuerda: Las finanzas analizan la rentabilidad, el capital de trabajo, los presupuestos, la liquidez y el punto de equilibrio para maximizar el valor de la empresa."
      ],
      [
        "Al estudiar repaso financiero, ¿qué aspecto clave debes identificar?",
        [
          "Su dependencia exclusiva de factores externos macroeconómicos.",
          "Reconoce el panorama financiero integral.",
          "Que no requiere ningún tipo de control ni registro documental."
        ],
        1,
        "Recuerda: Las finanzas analizan la rentabilidad, el capital de trabajo, los presupuestos, la liquidez y el punto de equilibrio para maximizar el valor de la empresa."
      ],
      [
        "¿Qué opción expresa la idea central desarrollada en esta lección?",
        [
          "Los registros se realizan sin seguir ningún orden lógico ni cronológico.",
          "Las finanzas analizan la rentabilidad, el capital de trabajo, los presupuestos, la liquidez y el punto de equilibrio para maximizar el valor de la empresa.",
          "Los estados financieros pierden toda validez legal al aplicarlo."
        ],
        1,
        "Recuerda: Las finanzas analizan la rentabilidad, el capital de trabajo, los presupuestos, la liquidez y el punto de equilibrio para maximizar el valor de la empresa."
      ],
      [
        "De acuerdo con los fundamentos estudiados, ¿cómo opera repaso financiero?",
        [
          "Integra todas las herramientas de gestión de recursos monetarios corporativos.",
          "Generando automáticamente pasivos contingentes para la entidad.",
          "Eliminando la necesidad de libros diario y mayor."
        ],
        0,
        "Recuerda: Las finanzas analizan la rentabilidad, el capital de trabajo, los presupuestos, la liquidez y el punto de equilibrio para maximizar el valor de la empresa."
      ],
      [
        "¿Cuál de las siguientes opciones ejemplifica correctamente este concepto?",
        [
          "Modificar estados financieros sin soporte documental.",
          "Evaluar rentabilidad, calcular punto de equilibrio y proyectar flujos de caja.",
          "Omitir el registro de operaciones mercantiles cotidianas."
        ],
        1,
        "Recuerda: Las finanzas analizan la rentabilidad, el capital de trabajo, los presupuestos, la liquidez y el punto de equilibrio para maximizar el valor de la empresa."
      ],
      [
        "¿Qué descripción corresponde al principio fundamental explicado en repaso financiero?",
        [
          "La supresión total de controles internos en la empresa.",
          "La aplicación de métodos empíricos sin base técnica.",
          "Las finanzas analizan la rentabilidad, el capital de trabajo, los presupuestos, la liquidez y el punto de equilibrio para maximizar el valor de la empresa."
        ],
        2,
        "Recuerda: Las finanzas analizan la rentabilidad, el capital de trabajo, los presupuestos, la liquidez y el punto de equilibrio para maximizar el valor de la empresa."
      ],
      [
        "Selecciona la afirmación que resume de mejor manera lo aprendido sobre repaso financiero:",
        [
          "Es un procedimiento opcional que las empresas pueden ignorar.",
          "Las finanzas analizan la rentabilidad, el capital de trabajo, los presupuestos, la liquidez y el punto de equilibrio para maximizar el valor de la empresa.",
          "Distorsiona la igualdad numérica de los registros contables."
        ],
        1,
        "Recuerda: Las finanzas analizan la rentabilidad, el capital de trabajo, los presupuestos, la liquidez y el punto de equilibrio para maximizar el valor de la empresa."
      ]
    ]
  },
  {
    "id": 91,
    "world": 10,
    "level": 1,
    "title": "Ética contable",
    "subtitle": "Conoce ética, función del contador, independencia, responsabilidad y confidencialidad.",
    "sections": [
      [
        "Definición de la tarjeta",
        "La ética contable es el conjunto de principios morales y de conducta que guían la actuación del contador."
      ],
      [
        "Explicación paso a paso",
        "Garantiza la honestidad, transparencia y veracidad en la presentación de información financiera."
      ],
      [
        "Ejemplo práctico",
        "Rechazar alterar registros contables a petición de la gerencia."
      ],
      [
        "Cómo reconocer el concepto",
        "Identifica la moralidad y rectitud profesional."
      ],
      [
        "Lo que debes recordar",
        "Ética contable: La ética contable es el conjunto de principios morales y de conducta que guían la actuación del contador."
      ]
    ],
    "summary": "Ética contable. La ética contable es el conjunto de principios morales y de conducta que guían la actuación del contador.",
    "questions": [
      [
        "¿Cuál es la definición correcta de ética contable?",
        [
          "Es un concepto ajeno a la gestión contable y financiera de la entidad.",
          "La ética contable es el conjunto de principios morales y de conducta que guían la actuación del contador.",
          "Corresponde exclusivamente a un registro temporal sin validez formal."
        ],
        1,
        "Recuerda: La ética contable es el conjunto de principios morales y de conducta que guían la actuación del contador."
      ],
      [
        "Según esta lección, ¿cómo se entiende el concepto de ética contable?",
        [
          "Garantiza la honestidad, transparencia y veracidad en la presentación de información financiera.",
          "Se calcula restando todos los pasivos circulantes entre sí.",
          "Es un informe exclusivo para auditorías externas gubernamentales."
        ],
        0,
        "Recuerda: La ética contable es el conjunto de principios morales y de conducta que guían la actuación del contador."
      ],
      [
        "¿Qué enunciado describe correctamente la aplicación práctica de ética contable?",
        [
          "No tiene aplicación directa en las operaciones cotidianas de una empresa.",
          "Rechazar alterar registros contables a petición de la gerencia.",
          "Solo se aplica al cierre de operaciones fiscales anuales obligatorias."
        ],
        1,
        "Recuerda: La ética contable es el conjunto de principios morales y de conducta que guían la actuación del contador."
      ],
      [
        "¿Cuál afirmación coincide exactamente con lo explicado sobre ética contable?",
        [
          "Se relaciona directamente con la premisa: La ética contable es el conjunto de principios morales y de conducta que guían la actuación del contador.",
          "Modifica de forma arbitraria la ecuación contable fundamental.",
          "Representa un pasivo exigible a corto plazo."
        ],
        0,
        "Recuerda: La ética contable es el conjunto de principios morales y de conducta que guían la actuación del contador."
      ],
      [
        "Al estudiar ética contable, ¿qué aspecto clave debes identificar?",
        [
          "Su dependencia exclusiva de factores externos macroeconómicos.",
          "Identifica la moralidad y rectitud profesional.",
          "Que no requiere ningún tipo de control ni registro documental."
        ],
        1,
        "Recuerda: La ética contable es el conjunto de principios morales y de conducta que guían la actuación del contador."
      ],
      [
        "¿Qué opción expresa la idea central desarrollada en esta lección?",
        [
          "Los registros se realizan sin seguir ningún orden lógico ni cronológico.",
          "La ética contable es el conjunto de principios morales y de conducta que guían la actuación del contador.",
          "Los estados financieros pierden toda validez legal al aplicarlo."
        ],
        1,
        "Recuerda: La ética contable es el conjunto de principios morales y de conducta que guían la actuación del contador."
      ],
      [
        "De acuerdo con los fundamentos estudiados, ¿cómo opera ética contable?",
        [
          "Garantiza la honestidad, transparencia y veracidad en la presentación de información financiera.",
          "Generando automáticamente pasivos contingentes para la entidad.",
          "Eliminando la necesidad de libros diario y mayor."
        ],
        0,
        "Recuerda: La ética contable es el conjunto de principios morales y de conducta que guían la actuación del contador."
      ],
      [
        "¿Cuál de las siguientes opciones ejemplifica correctamente este concepto?",
        [
          "Modificar estados financieros sin soporte documental.",
          "Rechazar alterar registros contables a petición de la gerencia.",
          "Omitir el registro de operaciones mercantiles cotidianas."
        ],
        1,
        "Recuerda: La ética contable es el conjunto de principios morales y de conducta que guían la actuación del contador."
      ],
      [
        "¿Qué descripción corresponde al principio fundamental explicado en ética contable?",
        [
          "La supresión total de controles internos en la empresa.",
          "La aplicación de métodos empíricos sin base técnica.",
          "La ética contable es el conjunto de principios morales y de conducta que guían la actuación del contador."
        ],
        2,
        "Recuerda: La ética contable es el conjunto de principios morales y de conducta que guían la actuación del contador."
      ],
      [
        "Selecciona la afirmación que resume de mejor manera lo aprendido sobre ética contable:",
        [
          "Es un procedimiento opcional que las empresas pueden ignorar.",
          "La ética contable es el conjunto de principios morales y de conducta que guían la actuación del contador.",
          "Distorsiona la igualdad numérica de los registros contables."
        ],
        1,
        "Recuerda: La ética contable es el conjunto de principios morales y de conducta que guían la actuación del contador."
      ]
    ]
  },
  {
    "id": 92,
    "world": 10,
    "level": 2,
    "title": "Función social del contador",
    "subtitle": "Conoce ética, función del contador, independencia, responsabilidad y confidencialidad.",
    "sections": [
      [
        "Definición de la tarjeta",
        "La función social del contador consiste en garantizar la fe pública y la confianza en la información financiera."
      ],
      [
        "Explicación paso a paso",
        "Protege los intereses de inversores, estado y sociedad mediante información veraz y transparente."
      ],
      [
        "Ejemplo práctico",
        "Certificar estados financieros con veracidad para proteger la confianza pública."
      ],
      [
        "Cómo reconocer el concepto",
        "Reconoce la responsabilidad social de la profesión."
      ],
      [
        "Lo que debes recordar",
        "Función social del contador: La función social del contador consiste en garantizar la fe pública y la confianza en la información financiera."
      ]
    ],
    "summary": "Función social del contador. La función social del contador consiste en garantizar la fe pública y la confianza en la información financiera.",
    "questions": [
      [
        "¿Cuál es la definición correcta de función social del contador?",
        [
          "Es un concepto ajeno a la gestión contable y financiera de la entidad.",
          "La función social del contador consiste en garantizar la fe pública y la confianza en la información financiera.",
          "Corresponde exclusivamente a un registro temporal sin validez formal."
        ],
        1,
        "Recuerda: La función social del contador consiste en garantizar la fe pública y la confianza en la información financiera."
      ],
      [
        "Según esta lección, ¿cómo se entiende el concepto de función social del contador?",
        [
          "Protege los intereses de inversores, estado y sociedad mediante información veraz y transparente.",
          "Se calcula restando todos los pasivos circulantes entre sí.",
          "Es un informe exclusivo para auditorías externas gubernamentales."
        ],
        0,
        "Recuerda: La función social del contador consiste en garantizar la fe pública y la confianza en la información financiera."
      ],
      [
        "¿Qué enunciado describe correctamente la aplicación práctica de función social del contador?",
        [
          "No tiene aplicación directa en las operaciones cotidianas de una empresa.",
          "Certificar estados financieros con veracidad para proteger la confianza pública.",
          "Solo se aplica al cierre de operaciones fiscales anuales obligatorias."
        ],
        1,
        "Recuerda: La función social del contador consiste en garantizar la fe pública y la confianza en la información financiera."
      ],
      [
        "¿Cuál afirmación coincide exactamente con lo explicado sobre función social del contador?",
        [
          "Se relaciona directamente con la premisa: La función social del contador consiste en garantizar la fe pública y la confianza en la información financiera.",
          "Modifica de forma arbitraria la ecuación contable fundamental.",
          "Representa un pasivo exigible a corto plazo."
        ],
        0,
        "Recuerda: La función social del contador consiste en garantizar la fe pública y la confianza en la información financiera."
      ],
      [
        "Al estudiar función social del contador, ¿qué aspecto clave debes identificar?",
        [
          "Su dependencia exclusiva de factores externos macroeconómicos.",
          "Reconoce la responsabilidad social de la profesión.",
          "Que no requiere ningún tipo de control ni registro documental."
        ],
        1,
        "Recuerda: La función social del contador consiste en garantizar la fe pública y la confianza en la información financiera."
      ],
      [
        "¿Qué opción expresa la idea central desarrollada en esta lección?",
        [
          "Los registros se realizan sin seguir ningún orden lógico ni cronológico.",
          "La función social del contador consiste en garantizar la fe pública y la confianza en la información financiera.",
          "Los estados financieros pierden toda validez legal al aplicarlo."
        ],
        1,
        "Recuerda: La función social del contador consiste en garantizar la fe pública y la confianza en la información financiera."
      ],
      [
        "De acuerdo con los fundamentos estudiados, ¿cómo opera función social del contador?",
        [
          "Protege los intereses de inversores, estado y sociedad mediante información veraz y transparente.",
          "Generando automáticamente pasivos contingentes para la entidad.",
          "Eliminando la necesidad de libros diario y mayor."
        ],
        0,
        "Recuerda: La función social del contador consiste en garantizar la fe pública y la confianza en la información financiera."
      ],
      [
        "¿Cuál de las siguientes opciones ejemplifica correctamente este concepto?",
        [
          "Modificar estados financieros sin soporte documental.",
          "Certificar estados financieros con veracidad para proteger la confianza pública.",
          "Omitir el registro de operaciones mercantiles cotidianas."
        ],
        1,
        "Recuerda: La función social del contador consiste en garantizar la fe pública y la confianza en la información financiera."
      ],
      [
        "¿Qué descripción corresponde al principio fundamental explicado en función social del contador?",
        [
          "La supresión total de controles internos en la empresa.",
          "La aplicación de métodos empíricos sin base técnica.",
          "La función social del contador consiste en garantizar la fe pública y la confianza en la información financiera."
        ],
        2,
        "Recuerda: La función social del contador consiste en garantizar la fe pública y la confianza en la información financiera."
      ],
      [
        "Selecciona la afirmación que resume de mejor manera lo aprendido sobre función social del contador:",
        [
          "Es un procedimiento opcional que las empresas pueden ignorar.",
          "La función social del contador consiste en garantizar la fe pública y la confianza en la información financiera.",
          "Distorsiona la igualdad numérica de los registros contables."
        ],
        1,
        "Recuerda: La función social del contador consiste en garantizar la fe pública y la confianza en la información financiera."
      ]
    ]
  },
  {
    "id": 93,
    "world": 10,
    "level": 3,
    "title": "Independencia mental",
    "subtitle": "Conoce ética, función del contador, independencia, responsabilidad y confidencialidad.",
    "sections": [
      [
        "Definición de la tarjeta",
        "La independencia mental es la actitud del contador de actuar con libertad de criterio y objetividad total."
      ],
      [
        "Explicación paso a paso",
        "Impide que presiones de clientes o jefes alteren el juicio profesional imparcial."
      ],
      [
        "Ejemplo práctico",
        "Mantener la postura técnica correcta a pesar de presiones de la gerencia para maquillar cifras."
      ],
      [
        "Cómo reconocer el concepto",
        "Identifica la libertad de juicio profesional."
      ],
      [
        "Lo que debes recordar",
        "Independencia mental: La independencia mental es la actitud del contador de actuar con libertad de criterio y objetividad total."
      ]
    ],
    "summary": "Independencia mental. La independencia mental es la actitud del contador de actuar con libertad de criterio y objetividad total.",
    "questions": [
      [
        "¿Cuál es la definición correcta de independencia mental?",
        [
          "Es un concepto ajeno a la gestión contable y financiera de la entidad.",
          "La independencia mental es la actitud del contador de actuar con libertad de criterio y objetividad total.",
          "Corresponde exclusivamente a un registro temporal sin validez formal."
        ],
        1,
        "Recuerda: La independencia mental es la actitud del contador de actuar con libertad de criterio y objetividad total."
      ],
      [
        "Según esta lección, ¿cómo se entiende el concepto de independencia mental?",
        [
          "Impide que presiones de clientes o jefes alteren el juicio profesional imparcial.",
          "Se calcula restando todos los pasivos circulantes entre sí.",
          "Es un informe exclusivo para auditorías externas gubernamentales."
        ],
        0,
        "Recuerda: La independencia mental es la actitud del contador de actuar con libertad de criterio y objetividad total."
      ],
      [
        "¿Qué enunciado describe correctamente la aplicación práctica de independencia mental?",
        [
          "No tiene aplicación directa en las operaciones cotidianas de una empresa.",
          "Mantener la postura técnica correcta a pesar de presiones de la gerencia para maquillar cifras.",
          "Solo se aplica al cierre de operaciones fiscales anuales obligatorias."
        ],
        1,
        "Recuerda: La independencia mental es la actitud del contador de actuar con libertad de criterio y objetividad total."
      ],
      [
        "¿Cuál afirmación coincide exactamente con lo explicado sobre independencia mental?",
        [
          "Se relaciona directamente con la premisa: La independencia mental es la actitud del contador de actuar con libertad de criterio y objetividad total.",
          "Modifica de forma arbitraria la ecuación contable fundamental.",
          "Representa un pasivo exigible a corto plazo."
        ],
        0,
        "Recuerda: La independencia mental es la actitud del contador de actuar con libertad de criterio y objetividad total."
      ],
      [
        "Al estudiar independencia mental, ¿qué aspecto clave debes identificar?",
        [
          "Su dependencia exclusiva de factores externos macroeconómicos.",
          "Identifica la libertad de juicio profesional.",
          "Que no requiere ningún tipo de control ni registro documental."
        ],
        1,
        "Recuerda: La independencia mental es la actitud del contador de actuar con libertad de criterio y objetividad total."
      ],
      [
        "¿Qué opción expresa la idea central desarrollada en esta lección?",
        [
          "Los registros se realizan sin seguir ningún orden lógico ni cronológico.",
          "La independencia mental es la actitud del contador de actuar con libertad de criterio y objetividad total.",
          "Los estados financieros pierden toda validez legal al aplicarlo."
        ],
        1,
        "Recuerda: La independencia mental es la actitud del contador de actuar con libertad de criterio y objetividad total."
      ],
      [
        "De acuerdo con los fundamentos estudiados, ¿cómo opera independencia mental?",
        [
          "Impide que presiones de clientes o jefes alteren el juicio profesional imparcial.",
          "Generando automáticamente pasivos contingentes para la entidad.",
          "Eliminando la necesidad de libros diario y mayor."
        ],
        0,
        "Recuerda: La independencia mental es la actitud del contador de actuar con libertad de criterio y objetividad total."
      ],
      [
        "¿Cuál de las siguientes opciones ejemplifica correctamente este concepto?",
        [
          "Modificar estados financieros sin soporte documental.",
          "Mantener la postura técnica correcta a pesar de presiones de la gerencia para maquillar cifras.",
          "Omitir el registro de operaciones mercantiles cotidianas."
        ],
        1,
        "Recuerda: La independencia mental es la actitud del contador de actuar con libertad de criterio y objetividad total."
      ],
      [
        "¿Qué descripción corresponde al principio fundamental explicado en independencia mental?",
        [
          "La supresión total de controles internos en la empresa.",
          "La aplicación de métodos empíricos sin base técnica.",
          "La independencia mental es la actitud del contador de actuar con libertad de criterio y objetividad total."
        ],
        2,
        "Recuerda: La independencia mental es la actitud del contador de actuar con libertad de criterio y objetividad total."
      ],
      [
        "Selecciona la afirmación que resume de mejor manera lo aprendido sobre independencia mental:",
        [
          "Es un procedimiento opcional que las empresas pueden ignorar.",
          "La independencia mental es la actitud del contador de actuar con libertad de criterio y objetividad total.",
          "Distorsiona la igualdad numérica de los registros contables."
        ],
        1,
        "Recuerda: La independencia mental es la actitud del contador de actuar con libertad de criterio y objetividad total."
      ]
    ]
  },
  {
    "id": 94,
    "world": 10,
    "level": 4,
    "title": "Responsabilidad profesional",
    "subtitle": "Conoce ética, función del contador, independencia, responsabilidad y confidencialidad.",
    "sections": [
      [
        "Definición de la tarjeta",
        "La responsabilidad profesional es el deber del contador de ejecutar su trabajo con alta competencia y rigor técnico."
      ],
      [
        "Explicación paso a paso",
        "Exige actualización constante y cumplimiento estricto de las normativas vigentes."
      ],
      [
        "Ejemplo práctico",
        "Capacitarse continuamente en nuevas normativas NIIF para prestar un servicio de calidad."
      ],
      [
        "Cómo reconocer el concepto",
        "Reconoce el compromiso de rigor y competencia."
      ],
      [
        "Lo que debes recordar",
        "Responsabilidad profesional: La responsabilidad profesional es el deber del contador de ejecutar su trabajo con alta competencia y rigor técnico."
      ]
    ],
    "summary": "Responsabilidad profesional. La responsabilidad profesional es el deber del contador de ejecutar su trabajo con alta competencia y rigor técnico.",
    "questions": [
      [
        "¿Cuál es la definición correcta de responsabilidad profesional?",
        [
          "Es un concepto ajeno a la gestión contable y financiera de la entidad.",
          "La responsabilidad profesional es el deber del contador de ejecutar su trabajo con alta competencia y rigor técnico.",
          "Corresponde exclusivamente a un registro temporal sin validez formal."
        ],
        1,
        "Recuerda: La responsabilidad profesional es el deber del contador de ejecutar su trabajo con alta competencia y rigor técnico."
      ],
      [
        "Según esta lección, ¿cómo se entiende el concepto de responsabilidad profesional?",
        [
          "Exige actualización constante y cumplimiento estricto de las normativas vigentes.",
          "Se calcula restando todos los pasivos circulantes entre sí.",
          "Es un informe exclusivo para auditorías externas gubernamentales."
        ],
        0,
        "Recuerda: La responsabilidad profesional es el deber del contador de ejecutar su trabajo con alta competencia y rigor técnico."
      ],
      [
        "¿Qué enunciado describe correctamente la aplicación práctica de responsabilidad profesional?",
        [
          "No tiene aplicación directa en las operaciones cotidianas de una empresa.",
          "Capacitarse continuamente en nuevas normativas NIIF para prestar un servicio de calidad.",
          "Solo se aplica al cierre de operaciones fiscales anuales obligatorias."
        ],
        1,
        "Recuerda: La responsabilidad profesional es el deber del contador de ejecutar su trabajo con alta competencia y rigor técnico."
      ],
      [
        "¿Cuál afirmación coincide exactamente con lo explicado sobre responsabilidad profesional?",
        [
          "Se relaciona directamente con la premisa: La responsabilidad profesional es el deber del contador de ejecutar su trabajo con alta competencia y rigor técnico.",
          "Modifica de forma arbitraria la ecuación contable fundamental.",
          "Representa un pasivo exigible a corto plazo."
        ],
        0,
        "Recuerda: La responsabilidad profesional es el deber del contador de ejecutar su trabajo con alta competencia y rigor técnico."
      ],
      [
        "Al estudiar responsabilidad profesional, ¿qué aspecto clave debes identificar?",
        [
          "Su dependencia exclusiva de factores externos macroeconómicos.",
          "Reconoce el compromiso de rigor y competencia.",
          "Que no requiere ningún tipo de control ni registro documental."
        ],
        1,
        "Recuerda: La responsabilidad profesional es el deber del contador de ejecutar su trabajo con alta competencia y rigor técnico."
      ],
      [
        "¿Qué opción expresa la idea central desarrollada en esta lección?",
        [
          "Los registros se realizan sin seguir ningún orden lógico ni cronológico.",
          "La responsabilidad profesional es el deber del contador de ejecutar su trabajo con alta competencia y rigor técnico.",
          "Los estados financieros pierden toda validez legal al aplicarlo."
        ],
        1,
        "Recuerda: La responsabilidad profesional es el deber del contador de ejecutar su trabajo con alta competencia y rigor técnico."
      ],
      [
        "De acuerdo con los fundamentos estudiados, ¿cómo opera responsabilidad profesional?",
        [
          "Exige actualización constante y cumplimiento estricto de las normativas vigentes.",
          "Generando automáticamente pasivos contingentes para la entidad.",
          "Eliminando la necesidad de libros diario y mayor."
        ],
        0,
        "Recuerda: La responsabilidad profesional es el deber del contador de ejecutar su trabajo con alta competencia y rigor técnico."
      ],
      [
        "¿Cuál de las siguientes opciones ejemplifica correctamente este concepto?",
        [
          "Modificar estados financieros sin soporte documental.",
          "Capacitarse continuamente en nuevas normativas NIIF para prestar un servicio de calidad.",
          "Omitir el registro de operaciones mercantiles cotidianas."
        ],
        1,
        "Recuerda: La responsabilidad profesional es el deber del contador de ejecutar su trabajo con alta competencia y rigor técnico."
      ],
      [
        "¿Qué descripción corresponde al principio fundamental explicado en responsabilidad profesional?",
        [
          "La supresión total de controles internos en la empresa.",
          "La aplicación de métodos empíricos sin base técnica.",
          "La responsabilidad profesional es el deber del contador de ejecutar su trabajo con alta competencia y rigor técnico."
        ],
        2,
        "Recuerda: La responsabilidad profesional es el deber del contador de ejecutar su trabajo con alta competencia y rigor técnico."
      ],
      [
        "Selecciona la afirmación que resume de mejor manera lo aprendido sobre responsabilidad profesional:",
        [
          "Es un procedimiento opcional que las empresas pueden ignorar.",
          "La responsabilidad profesional es el deber del contador de ejecutar su trabajo con alta competencia y rigor técnico.",
          "Distorsiona la igualdad numérica de los registros contables."
        ],
        1,
        "Recuerda: La responsabilidad profesional es el deber del contador de ejecutar su trabajo con alta competencia y rigor técnico."
      ]
    ]
  },
  {
    "id": 95,
    "world": 10,
    "level": 5,
    "title": "Confidencialidad",
    "subtitle": "Conoce ética, función del contador, independencia, responsabilidad y confidencialidad.",
    "sections": [
      [
        "Definición de la tarjeta",
        "La confidencialidad es la obligación de no divulgar información financiera privada obtenida durante el ejercicio profesional."
      ],
      [
        "Explicación paso a paso",
        "Protege los secretos comerciales y datos sensibles de las empresas asesoradas."
      ],
      [
        "Ejemplo práctico",
        "No revelar los costos secretos ni las estrategias financieras de un cliente a terceros."
      ],
      [
        "Cómo reconocer el concepto",
        "Busca el secreto y reserva profesional."
      ],
      [
        "Lo que debes recordar",
        "Confidencialidad: La confidencialidad es la obligación de no divulgar información financiera privada obtenida durante el ejercicio profesional."
      ]
    ],
    "summary": "Confidencialidad. La confidencialidad es la obligación de no divulgar información financiera privada obtenida durante el ejercicio profesional.",
    "questions": [
      [
        "¿Cuál es la definición correcta de confidencialidad?",
        [
          "Es un concepto ajeno a la gestión contable y financiera de la entidad.",
          "La confidencialidad es la obligación de no divulgar información financiera privada obtenida durante el ejercicio profesional.",
          "Corresponde exclusivamente a un registro temporal sin validez formal."
        ],
        1,
        "Recuerda: La confidencialidad es la obligación de no divulgar información financiera privada obtenida durante el ejercicio profesional."
      ],
      [
        "Según esta lección, ¿cómo se entiende el concepto de confidencialidad?",
        [
          "Protege los secretos comerciales y datos sensibles de las empresas asesoradas.",
          "Se calcula restando todos los pasivos circulantes entre sí.",
          "Es un informe exclusivo para auditorías externas gubernamentales."
        ],
        0,
        "Recuerda: La confidencialidad es la obligación de no divulgar información financiera privada obtenida durante el ejercicio profesional."
      ],
      [
        "¿Qué enunciado describe correctamente la aplicación práctica de confidencialidad?",
        [
          "No tiene aplicación directa en las operaciones cotidianas de una empresa.",
          "No revelar los costos secretos ni las estrategias financieras de un cliente a terceros.",
          "Solo se aplica al cierre de operaciones fiscales anuales obligatorias."
        ],
        1,
        "Recuerda: La confidencialidad es la obligación de no divulgar información financiera privada obtenida durante el ejercicio profesional."
      ],
      [
        "¿Cuál afirmación coincide exactamente con lo explicado sobre confidencialidad?",
        [
          "Se relaciona directamente con la premisa: La confidencialidad es la obligación de no divulgar información financiera privada obtenida durante el ejercicio profesional.",
          "Modifica de forma arbitraria la ecuación contable fundamental.",
          "Representa un pasivo exigible a corto plazo."
        ],
        0,
        "Recuerda: La confidencialidad es la obligación de no divulgar información financiera privada obtenida durante el ejercicio profesional."
      ],
      [
        "Al estudiar confidencialidad, ¿qué aspecto clave debes identificar?",
        [
          "Su dependencia exclusiva de factores externos macroeconómicos.",
          "Busca el secreto y reserva profesional.",
          "Que no requiere ningún tipo de control ni registro documental."
        ],
        1,
        "Recuerda: La confidencialidad es la obligación de no divulgar información financiera privada obtenida durante el ejercicio profesional."
      ],
      [
        "¿Qué opción expresa la idea central desarrollada en esta lección?",
        [
          "Los registros se realizan sin seguir ningún orden lógico ni cronológico.",
          "La confidencialidad es la obligación de no divulgar información financiera privada obtenida durante el ejercicio profesional.",
          "Los estados financieros pierden toda validez legal al aplicarlo."
        ],
        1,
        "Recuerda: La confidencialidad es la obligación de no divulgar información financiera privada obtenida durante el ejercicio profesional."
      ],
      [
        "De acuerdo con los fundamentos estudiados, ¿cómo opera confidencialidad?",
        [
          "Protege los secretos comerciales y datos sensibles de las empresas asesoradas.",
          "Generando automáticamente pasivos contingentes para la entidad.",
          "Eliminando la necesidad de libros diario y mayor."
        ],
        0,
        "Recuerda: La confidencialidad es la obligación de no divulgar información financiera privada obtenida durante el ejercicio profesional."
      ],
      [
        "¿Cuál de las siguientes opciones ejemplifica correctamente este concepto?",
        [
          "Modificar estados financieros sin soporte documental.",
          "No revelar los costos secretos ni las estrategias financieras de un cliente a terceros.",
          "Omitir el registro de operaciones mercantiles cotidianas."
        ],
        1,
        "Recuerda: La confidencialidad es la obligación de no divulgar información financiera privada obtenida durante el ejercicio profesional."
      ],
      [
        "¿Qué descripción corresponde al principio fundamental explicado en confidencialidad?",
        [
          "La supresión total de controles internos en la empresa.",
          "La aplicación de métodos empíricos sin base técnica.",
          "La confidencialidad es la obligación de no divulgar información financiera privada obtenida durante el ejercicio profesional."
        ],
        2,
        "Recuerda: La confidencialidad es la obligación de no divulgar información financiera privada obtenida durante el ejercicio profesional."
      ],
      [
        "Selecciona la afirmación que resume de mejor manera lo aprendido sobre confidencialidad:",
        [
          "Es un procedimiento opcional que las empresas pueden ignorar.",
          "La confidencialidad es la obligación de no divulgar información financiera privada obtenida durante el ejercicio profesional.",
          "Distorsiona la igualdad numérica de los registros contables."
        ],
        1,
        "Recuerda: La confidencialidad es la obligación de no divulgar información financiera privada obtenida durante el ejercicio profesional."
      ]
    ]
  },
  {
    "id": 96,
    "world": 10,
    "level": 6,
    "title": "Código de ética",
    "subtitle": "Conoce ética, función del contador, independencia, responsabilidad y confidencialidad.",
    "sections": [
      [
        "Definición de la tarjeta",
        "El código de ética es el documento oficial que establece las reglas de conducta y valores para los contadores."
      ],
      [
        "Explicación paso a paso",
        "Regula la integridad, objetividad, competencia, confidencialidad y comportamiento profesional."
      ],
      [
        "Ejemplo práctico",
        "Consultar el código deontológico ante una duda sobre un dilema de conflicto de interés."
      ],
      [
        "Cómo reconocer el concepto",
        "Identifica el reglamento formal de conducta profesional."
      ],
      [
        "Lo que debes recordar",
        "Código de ética: El código de ética es el documento oficial que establece las reglas de conducta y valores para los contadores."
      ]
    ],
    "summary": "Código de ética. El código de ética es el documento oficial que establece las reglas de conducta y valores para los contadores.",
    "questions": [
      [
        "¿Cuál es la definición correcta de código de ética?",
        [
          "Es un concepto ajeno a la gestión contable y financiera de la entidad.",
          "El código de ética es el documento oficial que establece las reglas de conducta y valores para los contadores.",
          "Corresponde exclusivamente a un registro temporal sin validez formal."
        ],
        1,
        "Recuerda: El código de ética es el documento oficial que establece las reglas de conducta y valores para los contadores."
      ],
      [
        "Según esta lección, ¿cómo se entiende el concepto de código de ética?",
        [
          "Regula la integridad, objetividad, competencia, confidencialidad y comportamiento profesional.",
          "Se calcula restando todos los pasivos circulantes entre sí.",
          "Es un informe exclusivo para auditorías externas gubernamentales."
        ],
        0,
        "Recuerda: El código de ética es el documento oficial que establece las reglas de conducta y valores para los contadores."
      ],
      [
        "¿Qué enunciado describe correctamente la aplicación práctica de código de ética?",
        [
          "No tiene aplicación directa en las operaciones cotidianas de una empresa.",
          "Consultar el código deontológico ante una duda sobre un dilema de conflicto de interés.",
          "Solo se aplica al cierre de operaciones fiscales anuales obligatorias."
        ],
        1,
        "Recuerda: El código de ética es el documento oficial que establece las reglas de conducta y valores para los contadores."
      ],
      [
        "¿Cuál afirmación coincide exactamente con lo explicado sobre código de ética?",
        [
          "Se relaciona directamente con la premisa: El código de ética es el documento oficial que establece las reglas de conducta y valores para los contadores.",
          "Modifica de forma arbitraria la ecuación contable fundamental.",
          "Representa un pasivo exigible a corto plazo."
        ],
        0,
        "Recuerda: El código de ética es el documento oficial que establece las reglas de conducta y valores para los contadores."
      ],
      [
        "Al estudiar código de ética, ¿qué aspecto clave debes identificar?",
        [
          "Su dependencia exclusiva de factores externos macroeconómicos.",
          "Identifica el reglamento formal de conducta profesional.",
          "Que no requiere ningún tipo de control ni registro documental."
        ],
        1,
        "Recuerda: El código de ética es el documento oficial que establece las reglas de conducta y valores para los contadores."
      ],
      [
        "¿Qué opción expresa la idea central desarrollada en esta lección?",
        [
          "Los registros se realizan sin seguir ningún orden lógico ni cronológico.",
          "El código de ética es el documento oficial que establece las reglas de conducta y valores para los contadores.",
          "Los estados financieros pierden toda validez legal al aplicarlo."
        ],
        1,
        "Recuerda: El código de ética es el documento oficial que establece las reglas de conducta y valores para los contadores."
      ],
      [
        "De acuerdo con los fundamentos estudiados, ¿cómo opera código de ética?",
        [
          "Regula la integridad, objetividad, competencia, confidencialidad y comportamiento profesional.",
          "Generando automáticamente pasivos contingentes para la entidad.",
          "Eliminando la necesidad de libros diario y mayor."
        ],
        0,
        "Recuerda: El código de ética es el documento oficial que establece las reglas de conducta y valores para los contadores."
      ],
      [
        "¿Cuál de las siguientes opciones ejemplifica correctamente este concepto?",
        [
          "Modificar estados financieros sin soporte documental.",
          "Consultar el código deontológico ante una duda sobre un dilema de conflicto de interés.",
          "Omitir el registro de operaciones mercantiles cotidianas."
        ],
        1,
        "Recuerda: El código de ética es el documento oficial que establece las reglas de conducta y valores para los contadores."
      ],
      [
        "¿Qué descripción corresponde al principio fundamental explicado en código de ética?",
        [
          "La supresión total de controles internos en la empresa.",
          "La aplicación de métodos empíricos sin base técnica.",
          "El código de ética es el documento oficial que establece las reglas de conducta y valores para los contadores."
        ],
        2,
        "Recuerda: El código de ética es el documento oficial que establece las reglas de conducta y valores para los contadores."
      ],
      [
        "Selecciona la afirmación que resume de mejor manera lo aprendido sobre código de ética:",
        [
          "Es un procedimiento opcional que las empresas pueden ignorar.",
          "El código de ética es el documento oficial que establece las reglas de conducta y valores para los contadores.",
          "Distorsiona la igualdad numérica de los registros contables."
        ],
        1,
        "Recuerda: El código de ética es el documento oficial que establece las reglas de conducta y valores para los contadores."
      ]
    ]
  },
  {
    "id": 97,
    "world": 10,
    "level": 7,
    "title": "Conflictos de interés",
    "subtitle": "Conoce ética, función del contador, independencia, responsabilidad y confidencialidad.",
    "sections": [
      [
        "Definición de la tarjeta",
        "Un conflicto de interés ocurre cuando los intereses personales o financieros del contador comprometen su imparcialidad."
      ],
      [
        "Explicación paso a paso",
        "Exige inhibirse de participar en encargos donde exista dicha incompatibilidad."
      ],
      [
        "Ejemplo práctico",
        "Rechazar auditar una empresa propiedad de familiares cercanos por incompatibilidad."
      ],
      [
        "Cómo reconocer el concepto",
        "Reconoce situaciones de incompatibilidad profesional."
      ],
      [
        "Lo que debes recordar",
        "Conflictos de interés: Un conflicto de interés ocurre cuando los intereses personales o financieros del contador comprometen su imparcialidad."
      ]
    ],
    "summary": "Conflictos de interés. Un conflicto de interés ocurre cuando los intereses personales o financieros del contador comprometen su imparcialidad.",
    "questions": [
      [
        "¿Cuál es la definición correcta de conflictos de interés?",
        [
          "Es un concepto ajeno a la gestión contable y financiera de la entidad.",
          "Un conflicto de interés ocurre cuando los intereses personales o financieros del contador comprometen su imparcialidad.",
          "Corresponde exclusivamente a un registro temporal sin validez formal."
        ],
        1,
        "Recuerda: Un conflicto de interés ocurre cuando los intereses personales o financieros del contador comprometen su imparcialidad."
      ],
      [
        "Según esta lección, ¿cómo se entiende el concepto de conflictos de interés?",
        [
          "Exige inhibirse de participar en encargos donde exista dicha incompatibilidad.",
          "Se calcula restando todos los pasivos circulantes entre sí.",
          "Es un informe exclusivo para auditorías externas gubernamentales."
        ],
        0,
        "Recuerda: Un conflicto de interés ocurre cuando los intereses personales o financieros del contador comprometen su imparcialidad."
      ],
      [
        "¿Qué enunciado describe correctamente la aplicación práctica de conflictos de interés?",
        [
          "No tiene aplicación directa en las operaciones cotidianas de una empresa.",
          "Rechazar auditar una empresa propiedad de familiares cercanos por incompatibilidad.",
          "Solo se aplica al cierre de operaciones fiscales anuales obligatorias."
        ],
        1,
        "Recuerda: Un conflicto de interés ocurre cuando los intereses personales o financieros del contador comprometen su imparcialidad."
      ],
      [
        "¿Cuál afirmación coincide exactamente con lo explicado sobre conflictos de interés?",
        [
          "Se relaciona directamente con la premisa: Un conflicto de interés ocurre cuando los intereses personales o financieros del contador comprometen su imparcialidad.",
          "Modifica de forma arbitraria la ecuación contable fundamental.",
          "Representa un pasivo exigible a corto plazo."
        ],
        0,
        "Recuerda: Un conflicto de interés ocurre cuando los intereses personales o financieros del contador comprometen su imparcialidad."
      ],
      [
        "Al estudiar conflictos de interés, ¿qué aspecto clave debes identificar?",
        [
          "Su dependencia exclusiva de factores externos macroeconómicos.",
          "Reconoce situaciones de incompatibilidad profesional.",
          "Que no requiere ningún tipo de control ni registro documental."
        ],
        1,
        "Recuerda: Un conflicto de interés ocurre cuando los intereses personales o financieros del contador comprometen su imparcialidad."
      ],
      [
        "¿Qué opción expresa la idea central desarrollada en esta lección?",
        [
          "Los registros se realizan sin seguir ningún orden lógico ni cronológico.",
          "Un conflicto de interés ocurre cuando los intereses personales o financieros del contador comprometen su imparcialidad.",
          "Los estados financieros pierden toda validez legal al aplicarlo."
        ],
        1,
        "Recuerda: Un conflicto de interés ocurre cuando los intereses personales o financieros del contador comprometen su imparcialidad."
      ],
      [
        "De acuerdo con los fundamentos estudiados, ¿cómo opera conflictos de interés?",
        [
          "Exige inhibirse de participar en encargos donde exista dicha incompatibilidad.",
          "Generando automáticamente pasivos contingentes para la entidad.",
          "Eliminando la necesidad de libros diario y mayor."
        ],
        0,
        "Recuerda: Un conflicto de interés ocurre cuando los intereses personales o financieros del contador comprometen su imparcialidad."
      ],
      [
        "¿Cuál de las siguientes opciones ejemplifica correctamente este concepto?",
        [
          "Modificar estados financieros sin soporte documental.",
          "Rechazar auditar una empresa propiedad de familiares cercanos por incompatibilidad.",
          "Omitir el registro de operaciones mercantiles cotidianas."
        ],
        1,
        "Recuerda: Un conflicto de interés ocurre cuando los intereses personales o financieros del contador comprometen su imparcialidad."
      ],
      [
        "¿Qué descripción corresponde al principio fundamental explicado en conflictos de interés?",
        [
          "La supresión total de controles internos en la empresa.",
          "La aplicación de métodos empíricos sin base técnica.",
          "Un conflicto de interés ocurre cuando los intereses personales o financieros del contador comprometen su imparcialidad."
        ],
        2,
        "Recuerda: Un conflicto de interés ocurre cuando los intereses personales o financieros del contador comprometen su imparcialidad."
      ],
      [
        "Selecciona la afirmación que resume de mejor manera lo aprendido sobre conflictos de interés:",
        [
          "Es un procedimiento opcional que las empresas pueden ignorar.",
          "Un conflicto de interés ocurre cuando los intereses personales o financieros del contador comprometen su imparcialidad.",
          "Distorsiona la igualdad numérica de los registros contables."
        ],
        1,
        "Recuerda: Un conflicto de interés ocurre cuando los intereses personales o financieros del contador comprometen su imparcialidad."
      ]
    ]
  },
  {
    "id": 98,
    "world": 10,
    "level": 8,
    "title": "Secreto profesional",
    "subtitle": "Conoce ética, función del contador, independencia, responsabilidad y confidencialidad.",
    "sections": [
      [
        "Definición de la tarjeta",
        "El secreto profesional es el derecho y deber legal de guardar reserva sobre hechos conocidos en razón del ejercicio contable."
      ],
      [
        "Explicación paso a paso",
        "Protege al cliente y salvaguarda la confianza en la relación de asesoría."
      ],
      [
        "Ejemplo práctico",
        "Negarse a revelar datos financieros privados de un cliente ante terceros no autorizados."
      ],
      [
        "Cómo reconocer el concepto",
        "Identifica la reserva legal de información."
      ],
      [
        "Lo que debes recordar",
        "Secreto profesional: El secreto profesional es el derecho y deber legal de guardar reserva sobre hechos conocidos en razón del ejercicio contable."
      ]
    ],
    "summary": "Secreto profesional. El secreto profesional es el derecho y deber legal de guardar reserva sobre hechos conocidos en razón del ejercicio contable.",
    "questions": [
      [
        "¿Cuál es la definición correcta de secreto profesional?",
        [
          "Es un concepto ajeno a la gestión contable y financiera de la entidad.",
          "El secreto profesional es el derecho y deber legal de guardar reserva sobre hechos conocidos en razón del ejercicio contable.",
          "Corresponde exclusivamente a un registro temporal sin validez formal."
        ],
        1,
        "Recuerda: El secreto profesional es el derecho y deber legal de guardar reserva sobre hechos conocidos en razón del ejercicio contable."
      ],
      [
        "Según esta lección, ¿cómo se entiende el concepto de secreto profesional?",
        [
          "Protege al cliente y salvaguarda la confianza en la relación de asesoría.",
          "Se calcula restando todos los pasivos circulantes entre sí.",
          "Es un informe exclusivo para auditorías externas gubernamentales."
        ],
        0,
        "Recuerda: El secreto profesional es el derecho y deber legal de guardar reserva sobre hechos conocidos en razón del ejercicio contable."
      ],
      [
        "¿Qué enunciado describe correctamente la aplicación práctica de secreto profesional?",
        [
          "No tiene aplicación directa en las operaciones cotidianas de una empresa.",
          "Negarse a revelar datos financieros privados de un cliente ante terceros no autorizados.",
          "Solo se aplica al cierre de operaciones fiscales anuales obligatorias."
        ],
        1,
        "Recuerda: El secreto profesional es el derecho y deber legal de guardar reserva sobre hechos conocidos en razón del ejercicio contable."
      ],
      [
        "¿Cuál afirmación coincide exactamente con lo explicado sobre secreto profesional?",
        [
          "Se relaciona directamente con la premisa: El secreto profesional es el derecho y deber legal de guardar reserva sobre hechos conocidos en razón del ejercicio contable.",
          "Modifica de forma arbitraria la ecuación contable fundamental.",
          "Representa un pasivo exigible a corto plazo."
        ],
        0,
        "Recuerda: El secreto profesional es el derecho y deber legal de guardar reserva sobre hechos conocidos en razón del ejercicio contable."
      ],
      [
        "Al estudiar secreto profesional, ¿qué aspecto clave debes identificar?",
        [
          "Su dependencia exclusiva de factores externos macroeconómicos.",
          "Identifica la reserva legal de información.",
          "Que no requiere ningún tipo de control ni registro documental."
        ],
        1,
        "Recuerda: El secreto profesional es el derecho y deber legal de guardar reserva sobre hechos conocidos en razón del ejercicio contable."
      ],
      [
        "¿Qué opción expresa la idea central desarrollada en esta lección?",
        [
          "Los registros se realizan sin seguir ningún orden lógico ni cronológico.",
          "El secreto profesional es el derecho y deber legal de guardar reserva sobre hechos conocidos en razón del ejercicio contable.",
          "Los estados financieros pierden toda validez legal al aplicarlo."
        ],
        1,
        "Recuerda: El secreto profesional es el derecho y deber legal de guardar reserva sobre hechos conocidos en razón del ejercicio contable."
      ],
      [
        "De acuerdo con los fundamentos estudiados, ¿cómo opera secreto profesional?",
        [
          "Protege al cliente y salvaguarda la confianza en la relación de asesoría.",
          "Generando automáticamente pasivos contingentes para la entidad.",
          "Eliminando la necesidad de libros diario y mayor."
        ],
        0,
        "Recuerda: El secreto profesional es el derecho y deber legal de guardar reserva sobre hechos conocidos en razón del ejercicio contable."
      ],
      [
        "¿Cuál de las siguientes opciones ejemplifica correctamente este concepto?",
        [
          "Modificar estados financieros sin soporte documental.",
          "Negarse a revelar datos financieros privados de un cliente ante terceros no autorizados.",
          "Omitir el registro de operaciones mercantiles cotidianas."
        ],
        1,
        "Recuerda: El secreto profesional es el derecho y deber legal de guardar reserva sobre hechos conocidos en razón del ejercicio contable."
      ],
      [
        "¿Qué descripción corresponde al principio fundamental explicado en secreto profesional?",
        [
          "La supresión total de controles internos en la empresa.",
          "La aplicación de métodos empíricos sin base técnica.",
          "El secreto profesional es el derecho y deber legal de guardar reserva sobre hechos conocidos en razón del ejercicio contable."
        ],
        2,
        "Recuerda: El secreto profesional es el derecho y deber legal de guardar reserva sobre hechos conocidos en razón del ejercicio contable."
      ],
      [
        "Selecciona la afirmación que resume de mejor manera lo aprendido sobre secreto profesional:",
        [
          "Es un procedimiento opcional que las empresas pueden ignorar.",
          "El secreto profesional es el derecho y deber legal de guardar reserva sobre hechos conocidos en razón del ejercicio contable.",
          "Distorsiona la igualdad numérica de los registros contables."
        ],
        1,
        "Recuerda: El secreto profesional es el derecho y deber legal de guardar reserva sobre hechos conocidos en razón del ejercicio contable."
      ]
    ]
  },
  {
    "id": 99,
    "world": 10,
    "level": 9,
    "title": "Integridad y objetividad",
    "subtitle": "Conoce ética, función del contador, independencia, responsabilidad y confidencialidad.",
    "sections": [
      [
        "Definición de la tarjeta",
        "La integridad exige ser honesto y franco; la objetividad exige no permitir favoritismos, conflictos o sesgos."
      ],
      [
        "Explicación paso a paso",
        "Aseguran que el dictamen contable sea éticamente intachable y técnicamente exacto."
      ],
      [
        "Ejemplo práctico",
        "Actuar con total honradez y basar las opiniones exclusivamente en evidencias técnicas."
      ],
      [
        "Cómo reconocer el concepto",
        "Busca los pilares de honradez y ausencia de sesgo."
      ],
      [
        "Lo que debes recordar",
        "Integridad y objetividad: La integridad exige ser honesto y franco; la objetividad exige no permitir favoritismos, conflictos o sesgos."
      ]
    ],
    "summary": "Integridad y objetividad. La integridad exige ser honesto y franco; la objetividad exige no permitir favoritismos, conflictos o sesgos.",
    "questions": [
      [
        "¿Cuál es la definición correcta de integridad y objetividad?",
        [
          "Es un concepto ajeno a la gestión contable y financiera de la entidad.",
          "La integridad exige ser honesto y franco; la objetividad exige no permitir favoritismos, conflictos o sesgos.",
          "Corresponde exclusivamente a un registro temporal sin validez formal."
        ],
        1,
        "Recuerda: La integridad exige ser honesto y franco; la objetividad exige no permitir favoritismos, conflictos o sesgos."
      ],
      [
        "Según esta lección, ¿cómo se entiende el concepto de integridad y objetividad?",
        [
          "Aseguran que el dictamen contable sea éticamente intachable y técnicamente exacto.",
          "Se calcula restando todos los pasivos circulantes entre sí.",
          "Es un informe exclusivo para auditorías externas gubernamentales."
        ],
        0,
        "Recuerda: La integridad exige ser honesto y franco; la objetividad exige no permitir favoritismos, conflictos o sesgos."
      ],
      [
        "¿Qué enunciado describe correctamente la aplicación práctica de integridad y objetividad?",
        [
          "No tiene aplicación directa en las operaciones cotidianas de una empresa.",
          "Actuar con total honradez y basar las opiniones exclusivamente en evidencias técnicas.",
          "Solo se aplica al cierre de operaciones fiscales anuales obligatorias."
        ],
        1,
        "Recuerda: La integridad exige ser honesto y franco; la objetividad exige no permitir favoritismos, conflictos o sesgos."
      ],
      [
        "¿Cuál afirmación coincide exactamente con lo explicado sobre integridad y objetividad?",
        [
          "Se relaciona directamente con la premisa: La integridad exige ser honesto y franco; la objetividad exige no permitir favoritismos, conflictos o sesgos.",
          "Modifica de forma arbitraria la ecuación contable fundamental.",
          "Representa un pasivo exigible a corto plazo."
        ],
        0,
        "Recuerda: La integridad exige ser honesto y franco; la objetividad exige no permitir favoritismos, conflictos o sesgos."
      ],
      [
        "Al estudiar integridad y objetividad, ¿qué aspecto clave debes identificar?",
        [
          "Su dependencia exclusiva de factores externos macroeconómicos.",
          "Busca los pilares de honradez y ausencia de sesgo.",
          "Que no requiere ningún tipo de control ni registro documental."
        ],
        1,
        "Recuerda: La integridad exige ser honesto y franco; la objetividad exige no permitir favoritismos, conflictos o sesgos."
      ],
      [
        "¿Qué opción expresa la idea central desarrollada en esta lección?",
        [
          "Los registros se realizan sin seguir ningún orden lógico ni cronológico.",
          "La integridad exige ser honesto y franco; la objetividad exige no permitir favoritismos, conflictos o sesgos.",
          "Los estados financieros pierden toda validez legal al aplicarlo."
        ],
        1,
        "Recuerda: La integridad exige ser honesto y franco; la objetividad exige no permitir favoritismos, conflictos o sesgos."
      ],
      [
        "De acuerdo con los fundamentos estudiados, ¿cómo opera integridad y objetividad?",
        [
          "Aseguran que el dictamen contable sea éticamente intachable y técnicamente exacto.",
          "Generando automáticamente pasivos contingentes para la entidad.",
          "Eliminando la necesidad de libros diario y mayor."
        ],
        0,
        "Recuerda: La integridad exige ser honesto y franco; la objetividad exige no permitir favoritismos, conflictos o sesgos."
      ],
      [
        "¿Cuál de las siguientes opciones ejemplifica correctamente este concepto?",
        [
          "Modificar estados financieros sin soporte documental.",
          "Actuar con total honradez y basar las opiniones exclusivamente en evidencias técnicas.",
          "Omitir el registro de operaciones mercantiles cotidianas."
        ],
        1,
        "Recuerda: La integridad exige ser honesto y franco; la objetividad exige no permitir favoritismos, conflictos o sesgos."
      ],
      [
        "¿Qué descripción corresponde al principio fundamental explicado en integridad y objetividad?",
        [
          "La supresión total de controles internos en la empresa.",
          "La aplicación de métodos empíricos sin base técnica.",
          "La integridad exige ser honesto y franco; la objetividad exige no permitir favoritismos, conflictos o sesgos."
        ],
        2,
        "Recuerda: La integridad exige ser honesto y franco; la objetividad exige no permitir favoritismos, conflictos o sesgos."
      ],
      [
        "Selecciona la afirmación que resume de mejor manera lo aprendido sobre integridad y objetividad:",
        [
          "Es un procedimiento opcional que las empresas pueden ignorar.",
          "La integridad exige ser honesto y franco; la objetividad exige no permitir favoritismos, conflictos o sesgos.",
          "Distorsiona la igualdad numérica de los registros contables."
        ],
        1,
        "Recuerda: La integridad exige ser honesto y franco; la objetividad exige no permitir favoritismos, conflictos o sesgos."
      ]
    ]
  },
  {
    "id": 100,
    "world": 10,
    "level": 10,
    "title": "Academia de los maestros contables",
    "subtitle": "Conoce ética, función del contador, independencia, responsabilidad y confidencialidad.",
    "sections": [
      [
        "Definición de la tarjeta",
        "La ética, la independencia, la responsabilidad, la confidencialidad y la integridad conforman la cúspide de la academia de los maestros contables."
      ],
      [
        "Explicación paso a paso",
        "Representa el dominio completo de los valores que distinguen al contador ejemplar."
      ],
      [
        "Ejemplo práctico",
        "Ejercer la contaduría pública aplicando rigurosamente todos los principios éticos y técnicos aprendidos."
      ],
      [
        "Cómo reconocer el concepto",
        "Reconoce la excelencia ética y profesional integral."
      ],
      [
        "Lo que debes recordar",
        "Academia de los maestros contables: La ética, la independencia, la responsabilidad, la confidencialidad y la integridad conforman la cúspide de la academia de los maestros contables."
      ]
    ],
    "summary": "Academia de los maestros contables. La ética, la independencia, la responsabilidad, la confidencialidad y la integridad conforman la cúspide de la academia de los maestros contables.",
    "questions": [
      [
        "¿Cuál es la definición correcta de academia de los maestros contables?",
        [
          "Es un concepto ajeno a la gestión contable y financiera de la entidad.",
          "La ética, la independencia, la responsabilidad, la confidencialidad y la integridad conforman la cúspide de la academia de los maestros contables.",
          "Corresponde exclusivamente a un registro temporal sin validez formal."
        ],
        1,
        "Recuerda: La ética, la independencia, la responsabilidad, la confidencialidad y la integridad conforman la cúspide de la academia de los maestros contables."
      ],
      [
        "Según esta lección, ¿cómo se entiende el concepto de academia de los maestros contables?",
        [
          "Representa el dominio completo de los valores que distinguen al contador ejemplar.",
          "Se calcula restando todos los pasivos circulantes entre sí.",
          "Es un informe exclusivo para auditorías externas gubernamentales."
        ],
        0,
        "Recuerda: La ética, la independencia, la responsabilidad, la confidencialidad y la integridad conforman la cúspide de la academia de los maestros contables."
      ],
      [
        "¿Qué enunciado describe correctamente la aplicación práctica de academia de los maestros contables?",
        [
          "No tiene aplicación directa en las operaciones cotidianas de una empresa.",
          "Ejercer la contaduría pública aplicando rigurosamente todos los principios éticos y técnicos aprendidos.",
          "Solo se aplica al cierre de operaciones fiscales anuales obligatorias."
        ],
        1,
        "Recuerda: La ética, la independencia, la responsabilidad, la confidencialidad y la integridad conforman la cúspide de la academia de los maestros contables."
      ],
      [
        "¿Cuál afirmación coincide exactamente con lo explicado sobre academia de los maestros contables?",
        [
          "Se relaciona directamente con la premisa: La ética, la independencia, la responsabilidad, la confidencialidad y la integridad conforman la cúspide de la academia de los maestros contables.",
          "Modifica de forma arbitraria la ecuación contable fundamental.",
          "Representa un pasivo exigible a corto plazo."
        ],
        0,
        "Recuerda: La ética, la independencia, la responsabilidad, la confidencialidad y la integridad conforman la cúspide de la academia de los maestros contables."
      ],
      [
        "Al estudiar academia de los maestros contables, ¿qué aspecto clave debes identificar?",
        [
          "Su dependencia exclusiva de factores externos macroeconómicos.",
          "Reconoce la excelencia ética y profesional integral.",
          "Que no requiere ningún tipo de control ni registro documental."
        ],
        1,
        "Recuerda: La ética, la independencia, la responsabilidad, la confidencialidad y la integridad conforman la cúspide de la academia de los maestros contables."
      ],
      [
        "¿Qué opción expresa la idea central desarrollada en esta lección?",
        [
          "Los registros se realizan sin seguir ningún orden lógico ni cronológico.",
          "La ética, la independencia, la responsabilidad, la confidencialidad y la integridad conforman la cúspide de la academia de los maestros contables.",
          "Los estados financieros pierden toda validez legal al aplicarlo."
        ],
        1,
        "Recuerda: La ética, la independencia, la responsabilidad, la confidencialidad y la integridad conforman la cúspide de la academia de los maestros contables."
      ],
      [
        "De acuerdo con los fundamentos estudiados, ¿cómo opera academia de los maestros contables?",
        [
          "Representa el dominio completo de los valores que distinguen al contador ejemplar.",
          "Generando automáticamente pasivos contingentes para la entidad.",
          "Eliminando la necesidad de libros diario y mayor."
        ],
        0,
        "Recuerda: La ética, la independencia, la responsabilidad, la confidencialidad y la integridad conforman la cúspide de la academia de los maestros contables."
      ],
      [
        "¿Cuál de las siguientes opciones ejemplifica correctamente este concepto?",
        [
          "Modificar estados financieros sin soporte documental.",
          "Ejercer la contaduría pública aplicando rigurosamente todos los principios éticos y técnicos aprendidos.",
          "Omitir el registro de operaciones mercantiles cotidianas."
        ],
        1,
        "Recuerda: La ética, la independencia, la responsabilidad, la confidencialidad y la integridad conforman la cúspide de la academia de los maestros contables."
      ],
      [
        "¿Qué descripción corresponde al principio fundamental explicado en academia de los maestros contables?",
        [
          "La supresión total de controles internos en la empresa.",
          "La aplicación de métodos empíricos sin base técnica.",
          "La ética, la independencia, la responsabilidad, la confidencialidad y la integridad conforman la cúspide de la academia de los maestros contables."
        ],
        2,
        "Recuerda: La ética, la independencia, la responsabilidad, la confidencialidad y la integridad conforman la cúspide de la academia de los maestros contables."
      ],
      [
        "Selecciona la afirmación que resume de mejor manera lo aprendido sobre academia de los maestros contables:",
        [
          "Es un procedimiento opcional que las empresas pueden ignorar.",
          "La ética, la independencia, la responsabilidad, la confidencialidad y la integridad conforman la cúspide de la academia de los maestros contables.",
          "Distorsiona la igualdad numérica de los registros contables."
        ],
        1,
        "Recuerda: La ética, la independencia, la responsabilidad, la confidencialidad y la integridad conforman la cúspide de la academia de los maestros contables."
      ]
    ]
  }
];
