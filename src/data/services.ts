import type { Service } from "../types"

export const servicesData_iniciar: Service[] = [
  {
    id: "wastezero",
    name: "Program WasteZero™",
    description:
      "Programa táctico de implementación LEAN para reducir pérdidas operativas de manera concreta, visible y sostenida.",
    longDescription: [
      "WasteZero™ es un programa táctico de implementación LEAN diseñado para empresas que buscan reducir pérdidas operativas de manera concreta, visible y sostenida. ",
      "Se centra en identificar y eliminar los 8 desperdicios clásicos de la gestión LEAN, combinando análisis visual, trabajo de campo y proyectos de mejora con impacto real.",
    ],
    icon: "Target",
    color: "from-[var(--color-secondary)] to-[var(--color-accent)]",
    route: "/wastezero",
    isActive: true,
  },
  {
    id: "5s-plus",
    name: "5S Plus™",
    description:
      "Programa práctico de intervención para crear espacios de trabajo limpios, ordenados, eficientes y seguros.",
    longDescription: [
      "5S Plus™ es un programa práctico de intervención que ayuda a las organizaciones a crear espacios de trabajo limpios, ordenados, eficientes y seguros, como base indispensable para cualquier camino de mejora continua.",
      "A través de cinco pasos simples, 5S Plus™ identifica con claridad aquellas cosas que NO deberían estar en el lugar y ayuda a ordenar aquellas otras que SÍ lo deberían estar. Instala hábitos y estándares que permiten sostener la disciplina operativa en el tiempo.",
    ],
    icon: "Settings",
    color: "from-[var(--color-accent)] to-[var(--color-primary)]",
    route: "/5splus",
    isActive: true,
  },
]

export const servicesData_estabilizar: Service[] = [
  {
    id: "flowstable",
    name: "FlowStable™",
    description:
      "Programa estructurado para estabilizar procesos industriales y operativos, logrando eficiencia y previsibilidad sin necesidad de activos fijos.",
    longDescription: [
      "FlowStable™ es el programa más recomendado por LYSPAS & CO para empresas que desean aumentar su producción o eficiencia sin invertir en activos fijos.",
      "A través de un enfoque estructurado, cambia el foco de la operación de perseguir récords diarios a construir procesos estables y previsibles, lo que permite alcanzar mejores promedios, mayor control y más productividad.",
      "Su metodología incluye una secuencia diaria de mejora, seguimiento de desvíos, y aplicación de acciones correctivas en tiempo real, generando resultados rápidos y sostenidos.",
      "La implementación se realiza en 7 fases durante 7 meses, que van desde diagnóstico inicial hasta la consolidación de equipos y auditorías de gestión.",
    ],
    icon: "ChartNoAxesCombined",
    color: "from-[var(--color-primary)] to-[var(--color-secondary)]",
    route: "/flowstable",
    isActive: true,
  },
  {
    id: "leanbridge",
    name: "LeanBridge™",
    description:
      "Programa integral de transformación LEAN para eliminar desperdicios, mejorar eficiencia y consolidar cultura de mejora continua.",
    longDescription: [
      "LeanBridge™ es un programa de transformación diseñado por LYSPAS & CO para implementar técnicas LEAN en empresas que buscan eficiencia, eliminación de desperdicios y una cultura sostenible de mejora continua.",
      "Funciona como un 'puente' entre el estado actual y el ideal, conectando equipos operativos con objetivos estratégicos y alineando ejecución diaria con visión de largo plazo.",
      "Redistribuye la toma de decisiones hacia la línea de frente, empoderando a los equipos para resolver problemas en el origen y liberando a la supervisión para enfocarse en iniciativas estratégicas.",
      "Su propósito es integrar la mejora continua al ADN operativo, posicionando a la empresa en un nivel inicial de madurez según el LYSPAS HIERARCHY INDEX™.",
      "En los primeros 8 meses se logran mejoras visibles en orden, planificación y cumplimiento de metas; la gestión visual permite detectar y corregir desviaciones en tiempo real.",
    ],
    icon: "Binoculars",
    color: "from-[var(--color-secondary)] to-[var(--color-accent)]",
    route: "/leanbridge",
    isActive: true,
  },
  {
    id: "kaizen-action",
    name: "Kaizen Action™",
    description:
      "Intervención directa para resolver cuellos de botella y problemas End-to-End con metodología KAIZEN y resultados inmediatos.",
    longDescription: [
      "KAIZEN ACTION™ es un servicio de intervención directa que utiliza la metodología KAIZEN con foco en acción inmediata, colaboración interdisciplinaria y resultados medibles.",
      "Está diseñado para empresas que enfrentan cuellos de botella operativos, conflictos entre áreas o problemas End-to-End que impactan la experiencia del cliente o la eficiencia estratégica.",
      "Incluye planificación y facilitación de eventos KAIZEN (presenciales o virtuales), definición conjunta del problema, formación de facilitadores, ejecución del ciclo completo y seguimiento post-evento.",
      "Se aplican herramientas específicas (SIPOC, Ishikawa, matrices impacto-esfuerzo), y se configuran controles visuales y auditorías para garantizar sostenibilidad.",
      "KAIZEN ACTION™ se basa en el ciclo DMAIC (Definir, Medir, Analizar, Mejorar y Controlar) e integra preparación, ejecución presencial de al menos 3 días y hasta 3 meses de seguimiento.",
      "Es una evolución de LeanBridge™, orientada a la acción real y al empoderamiento de agentes internos, con impacto exponencial cuando participan áreas transversales.",
    ],
    icon: "Zap",
    color: "from-[var(--color-accent)] to-[var(--color-primary)]",
    route: "/kaizen-action",
    isActive: true,
  },
  {
    id: "decisiones-estadisticas",
    name: "Decisiones Gerenciales Basadas en Estadísticas™",
    description:
      "Capacitación práctica para tomar decisiones empresariales con respaldo estadístico, reduciendo incertidumbre y mejorando resultados.",
    longDescription: [
      "Este programa capacita a profesionales para interpretar datos, analizar variaciones y fundamentar decisiones con evidencia, usando herramientas como Excel y Minitab.",
      "El diseño incluye 5 módulos teórico-prácticos que cubren desde modelado de datos y estadística descriptiva hasta inferencia, regresión y diseño de experimentos.",
      "Los participantes desarrollan un proyecto real en cada módulo (TP1–TP4), aplicando lo aprendido en su propio entorno o en ejemplos proporcionados.",
      "Disponibles dos modalidades: académica (12 clases de 2 h) o empresarial (6 clases intensivas de 4 h), con 70 % de tiempo dedicado a la práctica.",
      "El curso es ideal para quienes necesitan decisiones basadas en datos (mandos medios, calidad, finanzas, etc.) y es un complemento clave para mejorar programas como WasteZero™, FlowStable™ y LeanBridge™.",
      "Al completar el curso los participantes reciben certificación en análisis estadístico aplicado, orientado a estándares Green Belt.",
    ],
    icon: "TrendingUp",
    color: "from-[var(--color-accent)] to-[var(--color-secondary)]",
    route: "/decisiones-estadisticas",
    isActive: false,
  },
]

export const servicesData_transformar: Service[] = [
  {
    id: "lean-enterprise-transformation",
    name: "Lean Enterprise Transformation™",
    description: "Programa integral para implementar un sistema de gestión de mejora continua en toda la empresa.",
    longDescription: [
      "Lean Enterprise Transformation™ es un programa diseñado por LYSPAS & CO para instaurar un sistema de gestión basado en mejora continua, abarcando cultura, procesos, personas y resultados.",
      "Está dirigido a empresas que buscan ordenar su operación, eliminar desperdicios, estabilizar procesos e integrar indicadores reales, sin importar su sector o tamaño.",
      "Resuelve problemas comunes como la falta de organización, silos, bajos niveles de planificación, pérdidas ocultas y desconexión entre indicadores y la realidad operativa.",
      "Comprende 7 fases: diagnóstico inicial, alineación directiva, selección de áreas piloto, implementación de herramientas, cultura visual, expansión y consolidación con seguimiento.",
      "La implementación es secuencial, con alta presencia de especialistas y agentes internos, y se completa en 12 meses, finalizando con una auditoría de valor y madurez.",
      "Ofrece resultados como procesos estables y visuales, equipos comprometidos, aumento de productividad sin inversiones en activos, reducción de desperdicios y liderazgo interno de mejora continua.",
    ],
    icon: "Building2",
    color: "from-[var(--color-secondary)] to-[var(--color-accent)]",
    route: "/lean-enterprise-transformation",
    isActive: true,
  },
  {
    id: "stratbridge",
    name: "StratBridge™",
    description:
      "Programa de planificación estratégica (Hoshin Kanri) para alinear visión, objetivos y ejecución diaria.",
    longDescription: [
      "StratBridge™ es el programa de planificación estructurada que ofrece LYSPAS & CO basado en la metodología Hoshin Kanri, para convertir visión y misión en acciones concretas y medibles.",
      "Abarca la definición colaborativa de objetivos a largo plazo (5–10 años), desglosándolos en metas anuales, KPIs, iniciativas y tareas por área.",
      "Se construye la matriz Hoshin (X‑Matrix), que despliega estrategia mediante herramientas visuales, tableros, asignación de recursos y seguimiento.",
      "La metodología incluye reuniones secuenciales con feedback (catchball) y revisiones regulares (mensuales y anuales), según la práctica recomendada de Hoshin Kanri.",
      "Al final, los colaboradores entienden cómo cada tarea contribuye al propósito institucional, promoviendo autonomía y alineamiento.",
      "StratBridge™ sirve de marco general: escala entornos operativos de LeanBridge™, Kaizen Action™, FlowStable™ y decisiones estratégicas basadas en datos.",
    ],
    icon: "Compass",
    color: "from-[var(--color-primary)] to-[var(--color-accent)]",
    route: "/stratbridge",
    isActive: true,
  },
  {
    id: "projectfocus",
    name: "ProjectFocus™ – Selección Estratégica de Proyectos",
    description:
      "Metodología práctica para convertir objetivos estratégicos en decisiones de inversión alineadas y priorizadas.",
    longDescription: [
      "ProjectFocus™ es una metodología diseñada para ayudar a las organizaciones a identificar, analizar y seleccionar proyectos de inversión de forma colaborativa y alineada con el plan estratégico vigente.",
      "No todos los proyectos tienen el mismo valor, por eso incluye herramientas para mapear beneficios, costos, impactos y riesgos, y tomar decisiones basadas en valor, no en urgencia.",
      "Funciona como extensión natural de StratBridge™, transformando la planificación estratégica en un portafolio ejecutable de proyectos clave.",
      "Resuelve problemas como la falta de visibilidad de iniciativas, priorización ineficiente, desalineación con objetivos, tensiones internas y evaluación insuficiente de impacto-beneficio.",
      "Ideal para empresas industriales, logísticas, comerciales, agroexportadoras o de servicios que realizan planificación anual de inversiones o expansión y desean involucrar a gerentes intermedios en la toma de decisiones.",
      "Consta de fases claras: exploración de oportunidades, mapeo funcional, análisis de alineación, brainstorming, valoración de proyectos, priorización e identificación de responsables y ejecución.",
      "Se implementa por medio de un primer encuentro virtual o presencial para alinear ideas, seguido de dos sesiones presenciales de medio día para presentar, discutir y decidir proyectos en grupo.",
      "Se integra con StratBridge™, llevando la estrategia definida a acciones concretas, seleccionando cuidadosamente los proyectos que alineados a la visión y respaldados por los tomadores de decisión.",
    ],
    icon: "Puzzle",
    color: "from-[var(--color-primary)] to-[var(--color-accent)]",
    route: "/projectfocus",
    isActive: true,
  },
]

export const servicesData_aplicaciones: Service[] = [
  {
    id: "flowstable",
    name: "FlowStable™",
    description:
      "Programa estructurado para estabilizar procesos industriales y operativos, logrando eficiencia y previsibilidad sin necesidad de activos fijos.",
    longDescription: [
      "FlowStable™ es el programa más recomendado por LYSPAS & CO para empresas que desean aumentar su producción o eficiencia sin invertir en activos fijos.",
      "A través de un enfoque estructurado, cambia el foco de la operación de perseguir récords diarios a construir procesos estables y previsibles, lo que permite alcanzar mejores promedios, mayor control y más productividad.",
      "Su metodología incluye una secuencia diaria de mejora, seguimiento de desvíos, y aplicación de acciones correctivas en tiempo real, generando resultados rápidos y sostenidos.",
      "La implementación se realiza en 7 fases durante 7 meses, que van desde diagnóstico inicial hasta la consolidación de equipos y auditorías de gestión.",
    ],
    icon: "TrendingUp",
    color: "from-[var(--color-primary)] to-[var(--color-secondary)]",
    route: "/flowstable",
    isActive: false,
  },
  {
    id: "leanbridge",
    name: "LeanBridge™",
    description:
      "Programa integral de transformación LEAN para eliminar desperdicios, mejorar eficiencia y consolidar cultura de mejora continua.",
    longDescription: [
      "LeanBridge™ es un programa de transformación diseñado por LYSPAS & CO para implementar técnicas LEAN en empresas que buscan eficiencia, eliminación de desperdicios y una cultura sostenible de mejora continua.",
      "Funciona como un 'puente' entre el estado actual y el ideal, conectando equipos operativos con objetivos estratégicos y alineando ejecución diaria con visión de largo plazo.",
      "Redistribuye la toma de decisiones hacia la línea de frente, empoderando a los equipos para resolver problemas en el origen y liberando a la supervisión para enfocarse en iniciativas estratégicas.",
      "Su propósito es integrar la mejora continua al ADN operativo, posicionando a la empresa en un nivel inicial de madurez según el LYSPAS HIERARCHY INDEX™.",
      "En los primeros 8 meses se logran mejoras visibles en orden, planificación y cumplimiento de metas; la gestión visual permite detectar y corregir desviaciones en tiempo real.",
    ],
    icon: "Bridge",
    color: "from-[var(--color-secondary)] to-[var(--color-accent)]",
    route: "/leanbridge",
    isActive: false,
  },
]
