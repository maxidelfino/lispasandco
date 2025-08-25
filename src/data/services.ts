import type { Service } from "../types";

// --- INICIAR ---

export const servicesData_iniciar: Service[] = [
  {
    id: "wastezero",
    name: "Programa WasteZero™",
    description:
      "Programa táctico de implementación LEAN para reducir pérdidas operativas de manera concreta, visible y sostenida.",
    longDescription: [
      "WasteZero™ es un programa práctico diseñado para empresas que buscan reducir pérdidas operativas de manera concreta, visible y ágil, sin grandes inversiones.",
      "Se centra en identificar y eliminar los 8 desperdicios clásicos de la gestión LEAN, combinando análisis visual, trabajo de campo y proyectos de mejora con impacto real.",
    ],
    icon: "Target",
    color: "from-[var(--color-secondary)] to-[var(--color-accent)]",
    route: "/wastezero",
    isActive: true,
    benefits: [
      "Reducción inmediata de desperdicios: menos reprocesos, menos movimientos innecesarios, menos espera.",
      "Generación rápida de ideas o proyectos con valor agregado y baja inversión.",
    ],
    subtitle: "Reducir ineficiencias",
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
    benefits: [
      "El programa de 5 S PLUS aporta un beneficio inmediato en el clima laboral y la sensación de pertenencia de la gente.",
      "Además, el sistema desarrolla un concepto de orden, limpieza y estandarización de espacios lo cual transforma los espacios en donde se aplica.",
      "Los beneficios se visualizan a los 3-4 meses de estar aplicado el programa",
    ],
    subtitle: "Ordenar sectores",
  },
  {
    id: "kaizen-action",
    name: "Kaizen Action™",
    description:
      "Intervención directa para resolver cuellos de botella y problemas End-to-End con metodología KAIZEN y resultados inmediatos.",
    longDescription: [
      // "KAIZEN ACTION™ es un servicio de intervención directa que utiliza la metodología KAIZEN con foco en acción inmediata, colaboración interdisciplinaria y resultados medibles.",
      // "Está diseñado para empresas que enfrentan cuellos de botella operativos, conflictos entre áreas o problemas End-to-End que impactan la experiencia del cliente o la eficiencia estratégica.",
      // "Incluye planificación y facilitación de eventos KAIZEN (presenciales o virtuales), definición conjunta del problema, formación de facilitadores, ejecución del ciclo completo y seguimiento post-evento.",
      // "Se aplican herramientas específicas (SIPOC, Ishikawa, matrices impacto-esfuerzo), y se configuran controles visuales y auditorías para garantizar sostenibilidad.",
      // "KAIZEN ACTION™ se basa en el ciclo DMAIC (Definir, Medir, Analizar, Mejorar y Controlar) e integra preparación, ejecución presencial de al menos 3 días y hasta 3 meses de seguimiento.",
      // "Es una evolución de LeanBridge™, orientada a la acción real y al empoderamiento de agentes internos, con impacto exponencial cuando participan áreas transversales.",
      "KAIZEN ACTION™ es una intervención intensiva que aplica la metodología KAIZEN con foco en acción inmediata, colaboración entre áreas y resultados medibles para resolver cuellos de botella o problemas End-to-End.",
      "Incluye eventos presenciales o virtuales con herramientas Lean (SIPOC, Ishikawa, DMAIC, etc.), formación de facilitadores y seguimiento post-evento de hasta 3 meses para garantizar sostenibilidad y transformación real.",
    ],
    icon: "Zap",
    color: "from-[var(--color-accent)] to-[var(--color-primary)]",
    route: "/kaizen-action",
    isActive: true,
    benefits: [
      "Resuelve problemas complejos y recurrentes que generan pérdida de eficiencia o conflicto entre áreas y que necesita de gran interacción e involucramiento de personas especialistas para su solución",
      "Activa una cultura de mejora transversal y ágil",
      "Desarrolla la habilidad interna de liderar KAIZEN con criterios profesionales",
      "Forma agentes de cambio en plena acción, dentro del contexto real de la empresa",
    ],
    subtitle: "Resolver problemas",
  },
  {
    id: "change-bridge",
    name: "Programa Change Bridge™",
    description: "",
    route: "/change-bridge",
    longDescription: [
      // "Change Bridge es la Gestión del Cambio.",
      "Es un programa práctico y estructurado para ayudar a las empresas a gestionar de forma ordenada, clara y participativa los procesos de cambio, asegurando que los equipos entiendan, adopten y sostengan las transformaciones necesarias para la evolución del negocio.",
    ],
    isActive: true,
    benefits: [
      "La oganizacion se siente preparada para afrontar  cambios.",
      "Se minimizar las resistencias al cambio  y se identifican los  riesgos.",
      "Aumenta el  compromiso en los equipos por el solo hecho de sentirse participados.",
      "Se logran resultados sostenibles en cada transformación.",
    ],
    // working: true,
    subtitle: "Gestionar cambios",
  },
];

export const servicesData_iniciar_en: Service[] = [
  {
    id: "wastezero",
    name: "WasteZero™ Program",
    description:
      "Tactical LEAN implementation program to reduce operational losses in a concrete, visible, and sustained way.",
    longDescription: [
      "WasteZero™ is a hands-on program designed for companies seeking to reduce operational losses in a concrete, visible, and agile way, without major investments.",
      "It focuses on identifying and eliminating the 8 classic wastes of LEAN management, combining visual analysis, fieldwork, and improvement projects with real impact.",
    ],
    icon: "Target",
    color: "from-[var(--color-secondary)] to-[var(--color-accent)]",
    route: "/wastezero",
    isActive: true,
    benefits: [
      "Immediate waste reduction: less rework, fewer unnecessary movements, less waiting.",
      "Quick generation of value-added, low-investment ideas or projects.",
    ],
    subtitle: "Reduce inefficiencies",
  },
  {
    id: "5s-plus",
    name: "5S Plus™",
    description:
      "Practical intervention program to create clean, organized, efficient, and safe workspaces.",
    longDescription: [
      "5S Plus™ is a practical intervention program that helps organizations create clean, organized, efficient, and safe workspaces, as an essential foundation for any continuous improvement journey.",
      "Through five simple steps, 5S Plus™ clearly identifies what should NOT be in the workplace and helps organize what SHOULD be there. It establishes habits and standards that sustain operational discipline over time.",
    ],
    icon: "Settings",
    color: "from-[var(--color-accent)] to-[var(--color-primary)]",
    route: "/5splus",
    isActive: true,
    benefits: [
      "The 5S PLUS program provides an immediate benefit to workplace climate and people's sense of belonging.",
      "Additionally, the system develops a concept of order, cleanliness, and standardization of spaces, transforming the areas where it is applied.",
      "Benefits are visible 3-4 months after the program is implemented.",
    ],
    subtitle: "Organize areas",
  },
  {
    id: "kaizen-action",
    name: "Kaizen Action™",
    description:
      "Direct intervention to solve bottlenecks and end-to-end problems using KAIZEN methodology and immediate results.",
    longDescription: [
      "KAIZEN ACTION™ is an intensive intervention that applies the KAIZEN methodology with a focus on immediate action, cross-functional collaboration, and measurable results to solve bottlenecks or end-to-end problems.",
      "It includes in-person or virtual events with Lean tools (SIPOC, Ishikawa, DMAIC, etc.), facilitator training, and post-event follow-up for up to 3 months to ensure sustainability and real transformation.",
    ],
    icon: "Zap",
    color: "from-[var(--color-accent)] to-[var(--color-primary)]",
    route: "/kaizen-action",
    isActive: true,
    benefits: [
      "Solves complex and recurring problems that cause loss of efficiency or interdepartmental conflict and require significant interaction and involvement of specialist personnel.",
      "Activates a culture of agile, cross-functional improvement.",
      "Develops internal capability to lead KAIZEN with professional standards.",
      "Trains change agents in real action, within the company's actual context.",
    ],
    subtitle: "Solve problems",
  },
  {
    id: "change-bridge",
    name: "Change Bridge™ Program",
    description: "",
    route: "/change-bridge",
    longDescription: [
      "A practical and structured program to help companies manage change processes in an orderly, clear, and participatory way, ensuring teams understand, adopt, and sustain the transformations needed for business evolution.",
    ],
    isActive: true,
    benefits: [
      "The organization feels prepared to face changes.",
      "Resistance to change is minimized and risks are identified.",
      "Team commitment increases simply by feeling involved.",
      "Sustainable results are achieved in every transformation.",
    ],
    subtitle: "Manage change",
  },
];

export const servicesData_iniciar_pt: Service[] = [
  {
    id: "wastezero",
    name: "Programa WasteZero™",
    description:
      "Programa tático de implementação LEAN para reduzir perdas operacionais de forma concreta, visível e sustentável.",
    longDescription: [
      "WasteZero™ é um programa prático desenvolvido para empresas que buscam reduzir perdas operacionais de maneira concreta, visível e ágil, sem grandes investimentos.",
      "Foca na identificação e eliminação dos 8 desperdícios clássicos da gestão LEAN, combinando análise visual, trabalho de campo e projetos de melhoria com impacto real.",
    ],
    icon: "Target",
    color: "from-[var(--color-secondary)] to-[var(--color-accent)]",
    route: "/wastezero",
    isActive: true,
    benefits: [
      "Redução imediata de desperdícios: menos retrabalho, menos movimentos desnecessários, menos espera.",
      "Geração rápida de ideias ou projetos de valor agregado e baixo investimento.",
    ],
    subtitle: "Reduzir ineficiências",
  },
  {
    id: "5s-plus",
    name: "5S Plus™",
    description:
      "Programa prático de intervenção para criar ambientes de trabalho limpos, organizados, eficientes e seguros.",
    longDescription: [
      "5S Plus™ é um programa prático de intervenção que ajuda as organizações a criar ambientes de trabalho limpos, organizados, eficientes e seguros, como base indispensável para qualquer jornada de melhoria contínua.",
      "Através de cinco passos simples, o 5S Plus™ identifica claramente o que NÃO deveria estar no local e ajuda a organizar aquilo que SIM deveria estar. Instala hábitos e padrões que permitem sustentar a disciplina operacional ao longo do tempo.",
    ],
    icon: "Settings",
    color: "from-[var(--color-accent)] to-[var(--color-primary)]",
    route: "/5splus",
    isActive: true,
    benefits: [
      "O programa 5S PLUS traz um benefício imediato ao clima de trabalho e ao sentimento de pertencimento das pessoas.",
      "Além disso, o sistema desenvolve um conceito de ordem, limpeza e padronização dos espaços, transformando os ambientes onde é aplicado.",
      "Os benefícios são visíveis após 3-4 meses de implementação do programa.",
    ],
    subtitle: "Organizar setores",
  },
  {
    id: "kaizen-action",
    name: "Kaizen Action™",
    description:
      "Intervenção direta para resolver gargalos e problemas End-to-End com metodologia KAIZEN e resultados imediatos.",
    longDescription: [
      "KAIZEN ACTION™ é uma intervenção intensiva que aplica a metodologia KAIZEN com foco em ação imediata, colaboração entre áreas e resultados mensuráveis para resolver gargalos ou problemas End-to-End.",
      "Inclui eventos presenciais ou virtuais com ferramentas Lean (SIPOC, Ishikawa, DMAIC, etc.), formação de facilitadores e acompanhamento pós-evento de até 3 meses para garantir sustentabilidade e transformação real.",
    ],
    icon: "Zap",
    color: "from-[var(--color-accent)] to-[var(--color-primary)]",
    route: "/kaizen-action",
    isActive: true,
    benefits: [
      "Resolve problemas complexos e recorrentes que geram perda de eficiência ou conflito entre áreas e que exigem grande interação e envolvimento de especialistas para sua solução.",
      "Ativa uma cultura de melhoria transversal e ágil.",
      "Desenvolve a habilidade interna de liderar KAIZEN com critérios profissionais.",
      "Forma agentes de mudança em plena ação, dentro do contexto real da empresa.",
    ],
    subtitle: "Resolver problemas",
  },
  {
    id: "change-bridge",
    name: "Programa Change Bridge™",
    description: "",
    route: "/change-bridge",
    longDescription: [
      "É um programa prático e estruturado para ajudar as empresas a gerenciar de forma ordenada, clara e participativa os processos de mudança, garantindo que as equipes entendam, adotem e sustentem as transformações necessárias para a evolução do negócio.",
    ],
    isActive: true,
    benefits: [
      "A organização se sente preparada para enfrentar mudanças.",
      "As resistências à mudança são minimizadas e os riscos identificados.",
      "Aumenta o comprometimento das equipes simplesmente por se sentirem envolvidas.",
      "Resultados sustentáveis são alcançados em cada transformação.",
    ],
    subtitle: "Gerenciar mudanças",
  },
];

// --- ESTABILIZAR ---

export const servicesData_estabilizar_en: Service[] = [
  {
    id: "flowstable",
    name: "FlowStable™",
    description:
      "Structured program to stabilize industrial and operational processes, achieving efficiency and predictability without the need for fixed assets.",
    longDescription: [
      "FlowStable™ optimizes production and efficiency without major investments, shifting from chasing daily records to establishing stable and predictable processes to improve averages and control.",
      "Its implementation in 7 phases over 7 months combines diagnostics, daily improvement routines, deviation tracking, and real-time corrective actions to generate rapid and sustained results.",
    ],
    icon: "ChartNoAxesCombined",
    color: "from-[var(--color-primary)] to-[var(--color-secondary)]",
    route: "/flowstable",
    isActive: true,
    benefits: [
      "Generates rapid and sustained improvements, especially in production or service consistency, reduction of operational variability, and achievement of daily objectives.",
      "No investment in fixed assets required.",
    ],
    subtitle: "Control processes, improve results",
  },
  {
    id: "decisiones-estadisticas",
    name: "Managerial Decisions™",
    description:
      "Practical training to make business decisions with statistical support, reducing uncertainty and improving results.",
    longDescription: [
      "Practical training in data analysis to support decisions using tools like Excel and Minitab, through 5 modules covering descriptive statistics, inference, regression, and experimental design, with real projects at each stage.",
      "Offers academic (12×2 h) or intensive business (6×4 h) modes with 70% practice, and upon completion grants certification in applied statistical analysis (Green Belt standard), ideal for middle management and areas of quality, finance, and continuous improvement.",
    ],
    icon: "TrendingUp",
    color: "from-[var(--color-accent)] to-[var(--color-secondary)]",
    route: "/decisiones-estadisticas",
    isActive: true,
    benefits: [
      "Enables business decisions with less uncertainty and greater data support.",
      "Develops practical skills in applied statistical analysis.",
      "Ideal for middle management, quality, finance, and continuous improvement.",
    ],
    subtitle: "Decide with data",
  },
  {
    id: "ops-standard",
    name: "OPS Standard™",
    description: "",
    isActive: false,
    benefits: [],
    working: true,
    subtitle: "Standardize processes",
  },
  {
    id: "leanbridge",
    name: "LeanBridge™",
    description:
      "Comprehensive LEAN transformation program to eliminate waste, improve efficiency, and consolidate a culture of continuous improvement.",
    longDescription: [
      "LeanBridge™ is a transformation program designed to implement LEAN techniques in companies seeking efficiency, waste elimination, and a sustainable culture of continuous improvement.",
      "It acts as a 'bridge' between the current and ideal state, connecting operational teams with strategic objectives and aligning daily execution with long-term vision.",
      "It redistributes decision-making to the front line, empowering teams to solve problems at the source and freeing up supervisors to focus on strategic initiatives.",
      "The purpose is to integrate continuous improvement into the operational DNA, positioning the company at an initial level of maturity according to the LYSPAS HIERARCHY INDEX™.",
      "In the first 8 months, visible improvements are achieved in order, planning, and goal fulfillment; visual management allows deviations to be detected and corrected in real time.",
    ],
    icon: "Binoculars",
    color: "from-[var(--color-secondary)] to-[var(--color-accent)]",
    route: "/leanbridge",
    isActive: true,
    benefits: [
      "Redistribute operational decision-making to the lowest possible hierarchical level.",
      "Quickly solve daily problems at the place where they occur.",
      "Empower front-line field teams.",
      "Free up supervisors and managers to focus on continuous improvement and higher-impact strategic decisions.",
    ],
    subtitle: "Jump to operational excellence",
  },
];

export const servicesData_estabilizar_pt: Service[] = [
  {
    id: "flowstable",
    name: "FlowStable™",
    description:
      "Programa estruturado para estabilizar processos industriais e operacionais, alcançando eficiência e previsibilidade sem necessidade de ativos fixos.",
    longDescription: [
      "FlowStable™ otimiza a produção e a eficiência sem grandes investimentos, passando de perseguir recordes diários para estabelecer processos estáveis e previsíveis para melhorar médias e controle.",
      "Sua implementação em 7 fases ao longo de 7 meses combina diagnóstico, rotina diária de melhoria, acompanhamento de desvios e ações corretivas em tempo real para gerar resultados rápidos e sustentáveis.",
    ],
    icon: "ChartNoAxesCombined",
    color: "from-[var(--color-primary)] to-[var(--color-secondary)]",
    route: "/flowstable",
    isActive: true,
    benefits: [
      "Gera melhorias rápidas e sustentáveis, especialmente na consistência da produção ou dos serviços, redução da variabilidade operacional e cumprimento dos objetivos diários.",
      "Sem necessidade de investir em ativos fixos.",
    ],
    subtitle: "Controlar processos, melhorar resultados",
  },
  {
    id: "decisiones-estadisticas",
    name: "Decisões Gerenciais™",
    description:
      "Treinamento prático para tomar decisões empresariais com suporte estatístico, reduzindo a incerteza e melhorando resultados.",
    longDescription: [
      "Treinamento prático em análise de dados para fundamentar decisões com ferramentas como Excel e Minitab, em 5 módulos que abrangem desde estatística descritiva e inferência até regressão e planejamento de experimentos, com projetos reais em cada etapa.",
      "Oferece modalidade acadêmica (12×2 h) ou intensiva empresarial (6×4 h) com 70% de prática, e ao final concede certificação em análise estatística aplicada (padrão Green Belt), ideal para média liderança e áreas de qualidade, finanças e melhoria contínua.",
    ],
    icon: "TrendingUp",
    color: "from-[var(--color-accent)] to-[var(--color-secondary)]",
    route: "/decisiones-estadisticas",
    isActive: true,
    benefits: [
      "Permite tomar decisões empresariais com menor incerteza e maior embasamento em dados.",
      "Desenvolve habilidades práticas em análise estatística aplicada.",
      "Ideal para média liderança, qualidade, finanças e melhoria contínua.",
    ],
    subtitle: "Decidir com dados",
  },
  {
    id: "ops-standard",
    name: "OPS Standard™",
    description: "",
    isActive: false,
    benefits: [],
    working: true,
    subtitle: "Padronizar processos",
  },
  {
    id: "leanbridge",
    name: "LeanBridge™",
    description:
      "Programa de transformação LEAN para eliminar desperdícios, melhorar a eficiência e consolidar uma cultura de melhoria contínua.",
    longDescription: [
      "Programa de transformação Lean que atua como ponte entre a operação diária e a estratégia, capacitando as equipes de linha de frente para eliminar desperdícios e resolver problemas na origem, enquanto alinha objetivos táticos com a visão de longo prazo.",
      "Implementação de um sistema sustentável de melhoria contínua integrado ao DNA operacional, com resultados visíveis em 8 meses (ordem, planejamento, cumprimento de metas) e controle visual em tempo real segundo o LYSPAS HIERARCHY INDEX™.",
    ],
    icon: "Binoculars",
    color: "from-[var(--color-secondary)] to-[var(--color-accent)]",
    route: "/leanbridge",
    isActive: true,
    benefits: [
      "Redistribuir a tomada de decisões operacionais para o nível hierárquico mais baixo possível.",
      "Resolver problemas cotidianos rapidamente e no local onde ocorrem.",
      "Capacitar as equipes de linha de frente.",
      "Liberar supervisores e gerentes para se concentrarem na melhoria contínua e em decisões estratégicas de maior impacto.",
    ],
    subtitle: "Saltar para a excelência operacional",
  },
];

export const servicesData_estabilizar: Service[] = [
  {
    id: "flowstable",
    name: "FlowStable™",
    description:
      "Programa estructurado para estabilizar procesos industriales y operativos, logrando eficiencia y previsibilidad sin necesidad de activos fijos.",
    longDescription: [
      // "FlowStable™ es el programa más recomendado por LYSPAS & CO para empresas que desean aumentar su producción o eficiencia sin invertir en activos fijos.",
      // "A través de un enfoque estructurado, cambia el foco de la operación de perseguir récords diarios a construir procesos estables y previsibles, lo que permite alcanzar mejores promedios, mayor control y más productividad.",
      // "Su metodología incluye una secuencia diaria de mejora, seguimiento de desvíos, y aplicación de acciones correctivas en tiempo real, generando resultados rápidos y sostenidos.",
      // "La implementación se realiza en 7 fases durante 7 meses, que van desde diagnóstico inicial hasta la consolidación de equipos y auditorías de gestión.",
      "FlowStable™ optimiza la producción y eficiencia sin grandes inversiones, pasando de perseguir récords diarios a establecer procesos estables y previsibles para mejorar promedios y control.",
      "Su implementación en 7 fases a lo largo de 7 meses combina diagnóstico, secuencia diaria de mejora, seguimiento de desvíos y acciones correctivas en tiempo real para generar resultados rápidos y sostenidos.",
    ],
    icon: "ChartNoAxesCombined",
    color: "from-[var(--color-primary)] to-[var(--color-secondary)]",
    route: "/flowstable",
    isActive: true,
    benefits: [
      // "Estabiliza los procesos productivos",
      // "Reduce la variabilidad en la producción",
      // "Mejora la predictibilidad de resultados",
      // "Optimiza el flujo de materiales",

      "Genera mejoras rápidas y sostenidas, especialmente en la consistencia de la producción o los servicios, la reducción de variabilidad operativa y el cumplimiento de los objetivos diarios.",
      "Sin invertir en activos fijos.",
    ],
    subtitle: "Controlar procesos mejorar resultados",
  },
  {
    id: "decisiones-estadisticas",
    name: "Decisiones Gerenciales™",
    description:
      "Capacitación práctica para tomar decisiones empresariales con respaldo estadístico, reduciendo incertidumbre y mejorando resultados.",
    longDescription: [
      // "Este programa capacita a profesionales para interpretar datos, analizar variaciones y fundamentar decisiones con evidencia, usando herramientas como Excel y Minitab.",
      // "El diseño incluye 5 módulos teórico-prácticos que cubren desde modelado de datos y estadística descriptiva hasta inferencia, regresión y diseño de experimentos.",
      // "Los participantes desarrollan un proyecto real en cada módulo (TP1–TP4), aplicando lo aprendido en su propio entorno o en ejemplos proporcionados.",
      // "Disponibles dos modalidades: académica (12 clases de 2 h) o empresarial (6 clases intensivas de 4 h), con 70 % de tiempo dedicado a la práctica.",
      // "El curso es ideal para quienes necesitan decisiones basadas en datos (mandos medios, calidad, finanzas, etc.) y es un complemento clave para mejorar programas como WasteZero™, FlowStable™ y LeanBridge™.",
      // "Al completar el curso los participantes reciben certificación en análisis estadístico aplicado, orientado a estándares Green Belt.",
      "Formación práctica en análisis de datos para fundamentar decisiones con herramientas como Excel y Minitab, mediante 5 módulos que abarcan desde estadística descriptiva e inferencia hasta regresión y diseño de experimentos, con proyectos reales en cada etapa.",
      "Ofrece modalidad académica (12×2 h) o intensiva empresarial (6×4 h) con 70 % de práctica, y al finalizar otorga certificación en análisis estadístico aplicado (estándar Green Belt), ideal para mandos medios y áreas de calidad, finanzas y mejora continua.",
    ],
    icon: "TrendingUp",
    color: "from-[var(--color-accent)] to-[var(--color-secondary)]",
    route: "/decisiones-estadisticas",
    isActive: true,
    benefits: [
      "Mayor análisis de datos que permiten mejorar la toma de decisiones.",
      "Información precisa a la hora de presentar una propuesta de inversión.",
      "Profundidad en la explicación de causas básicas de problemas.",
    ],
    subtitle: "Trabajar con datos",
  },
  {
    id: "ops-standard",
    name: "OPS Standard™",
    description: "",
    isActive: false,
    benefits: [],
    working: true,
    subtitle: "Standarizar procesos",
  },
  {
    id: "leanbridge",
    name: "LeanBridge™",
    description:
      "Programa integral de transformación LEAN para eliminar desperdicios, mejorar eficiencia y consolidar cultura de mejora continua.",
    longDescription: [
      // "LeanBridge™ es un programa de transformación diseñado por LYSPAS & CO para implementar técnicas LEAN en empresas que buscan eficiencia, eliminación de desperdicios y una cultura sostenible de mejora continua.",
      // "Funciona como un 'puente' entre el estado actual y el ideal, conectando equipos operativos con objetivos estratégicos y alineando ejecución diaria con visión de largo plazo.",
      // "Redistribuye la toma de decisiones hacia la línea de frente, empoderando a los equipos para resolver problemas en el origen y liberando a la supervisión para enfocarse en iniciativas estratégicas.",
      // "Su propósito es integrar la mejora continua al ADN operativo, posicionando a la empresa en un nivel inicial de madurez según el LYSPAS HIERARCHY INDEX™.",
      // "En los primeros 8 meses se logran mejoras visibles en orden, planificación y cumplimiento de metas; la gestión visual permite detectar y corregir desviaciones en tiempo real.",
      "Programa de transformación Lean que actúa como puente entre la operación diaria y la estrategia, empoderando a los equipos de primera línea para eliminar desperdicios y resolver problemas en el origen, mientras alinea objetivos tácticos con la visión a largo plazo.",
      "Implementación de un sistema sostenible de mejora continua integrada al ADN operativo, con resultados visibles en 8 meses (orden, planificación, cumplimiento de metas) y control visual en tiempo real según el LYSPAS HIERARCHY INDEX™.",
    ],
    icon: "Binoculars",
    color: "from-[var(--color-secondary)] to-[var(--color-accent)]",
    route: "/leanbridge",
    isActive: true,
    benefits: [
      "Redistribuir la toma de decisiones operativas hacia el nivel jerárquico más bajo posible.",
      "Resolver problemas cotidianos rápidamente y en el lugar donde ocurren.",
      "Empoderando a los equipos de primera línea de campo.",
      "Liberar a supervisores y gerencias para concentrarse en la mejora continua y en decisiones estratégicas de mayor impacto.",
    ],
    subtitle: "Saltar a la excelencia de operación",
  },
];

// --- TRANSFORMAR ---

export const servicesData_transformar: Service[] = [
  // {
  //   id: "lean-enterprise-transformation",
  //   name: "Lean Enterprise Transformation™",
  //   description:
  //     "Programa integral para implementar un sistema de gestión de mejora continua en toda la empresa.",
  //   longDescription: [
  //     "Lean Enterprise Transformation™ es un programa diseñado por LYSPAS & CO para instaurar un sistema de gestión basado en mejora continua, abarcando cultura, procesos, personas y resultados.",
  //     "Está dirigido a empresas que buscan ordenar su operación, eliminar desperdicios, estabilizar procesos e integrar indicadores reales, sin importar su sector o tamaño.",
  //     "Resuelve problemas comunes como la falta de organización, silos, bajos niveles de planificación, pérdidas ocultas y desconexión entre indicadores y la realidad operativa.",
  //     "Comprende 7 fases: diagnóstico inicial, alineación directiva, selección de áreas piloto, implementación de herramientas, cultura visual, expansión y consolidación con seguimiento.",
  //     "La implementación es secuencial, con alta presencia de especialistas y agentes internos, y se completa en 12 meses, finalizando con una auditoría de valor y madurez.",
  //     "Ofrece resultados como procesos estables y visuales, equipos comprometidos, aumento de productividad sin inversiones en activos, reducción de desperdicios y liderazgo interno de mejora continua.",
  //   ],
  //   icon: "Building2",
  //   color: "from-[var(--color-secondary)] to-[var(--color-accent)]",
  //   route: "/lean-enterprise-transformation",
  //   isActive: true,
  //   benefits: [
  //     "Transformación integral de la organización",
  //     "Desarrollo de cultura lean sostenible",
  //     "Mejora continua sistemática",
  //     "Resultados a largo plazo",
  //   ],
  // },
  {
    id: "asset-control-bridge",
    name: "Asset Control Bridge™",
    description:
      "Sistema integral para la gestión eficiente de activos industriales, enfocado en maximizar la disponibilidad, confiabilidad y vida útil de los equipos productivos.",
    longDescription: [
      "Las organizaciones precisan activos para elaborar productos o proporcionar servicios. En entornos industriales, la gestión de activos es la disciplina que asegura que los equipos e instalaciones mantengan su rendimiento, seguridad y valor durante todo su ciclo de vida. Implica integrar ingeniería, mantenimiento, operaciones y gestión financiera para tomar decisiones informadas sobre adquisición, uso, mantenimiento, renovación y disposición de los activos.",
    ],
    icon: "Settings", // Icono relacionado a mantenimiento y gestión de activos
    color: "from-[var(--color-secondary)] to-[var(--color-accent)]",
    route: "/asset-control-bridge",
    isActive: true,
    benefits: [
      "Maximiza la disponibilidad y confiabilidad de los equipos productivos.",
      "Reduce costos y paradas no programadas mediante mantenimiento preventivo y predictivo.",
      "Facilita la trazabilidad y control de intervenciones en activos críticos.",
      "Optimiza la planificación y ejecución de tareas de mantenimiento.",
      "Integra indicadores clave para la toma de decisiones basada en datos.",
      "Alinea la gestión de activos con los objetivos estratégicos de la empresa.",
    ],
    working: false,
    subtitle: "Mantenimiento Industrial",
  },
  {
    id: "autops",
    name: "AUTOPS™",
    description: "",
    isActive: false,
    benefits: [],
    working: true,
    subtitle: "Incorporar operación automática de procesos",
  },
  {
    id: "safe-process",
    name: "Safe Process™",
    description: "",
    isActive: false,
    benefits: [],
    working: true,
    subtitle: "Gestionar la Seguridad industrial",
  },
  {
    id: "measure-bridge",
    name: "Measure Bridge™",
    description:
      "Programa integral para la gestión y control de la medición industrial, asegurando precisión, confiabilidad y cumplimiento normativo en los procesos de medición.",
    longDescription: [
      "Measure Bridge™ es un sistema especializado que permite gestionar, controlar y optimizar los procesos de medición industrial, garantizando la trazabilidad y la integridad de los datos obtenidos.",
      "A través de metodologías estructuradas, digitalización y análisis de información, facilita la toma de decisiones basada en datos confiables, reduce errores y asegura el cumplimiento de estándares de calidad y normativas vigentes.",
    ],
    icon: "BarChart", // Icono relacionado a medición y análisis de datos
    color: "from-[var(--color-secondary)] to-[var(--color-accent)]",
    route: "/measure-bridge",
    isActive: true,
    benefits: [
      "Asegura la precisión y confiabilidad de los datos de medición.",
      "Facilita la trazabilidad y el control de instrumentos y procesos de medición.",
      "Reduce errores y desviaciones mediante la digitalización y estandarización.",
      "Cumple con normativas y estándares de calidad en la gestión metrológica.",
    ],
    working: false,
    subtitle: "Mejorar precisión analítica",
  },
];

export const servicesData_transformar_en: Service[] = [
  {
    id: "asset-control-bridge",
    name: "Asset Control Bridge™",
    description:
      "Comprehensive system for efficient management of industrial assets, focused on maximizing the availability, reliability, and lifespan of production equipment.",
    longDescription: [
      "Asset Control Bridge™ is a specialized program for industrial asset management that enables control, monitoring, and optimization of maintenance for critical equipment. Through structured methodologies, digitalization, and data analysis, it helps reduce unplanned downtime, improve planning, and ensure traceability of interventions.",
      "The system integrates visual tools, key indicators, and standardized processes to guarantee the availability and reliability of assets, aligning maintenance management with the organization's strategic objectives and facilitating decision-making based on real and timely information.",
    ],
    icon: "Settings", // Icon related to maintenance and asset management
    color: "from-[var(--color-secondary)] to-[var(--color-accent)]",
    route: "/asset-control-bridge",
    isActive: true,
    benefits: [
      "Maximizes the availability and reliability of production equipment.",
      "Reduces costs and unplanned downtime through preventive and predictive maintenance.",
      "Facilitates traceability and control of interventions on critical assets.",
      "Optimizes planning and execution of maintenance tasks.",
      "Integrates key indicators for data-driven decision-making.",
      "Aligns asset management with the company's strategic objectives.",
    ],
    working: false,
    subtitle: "Industrial Maintenance",
  },
  {
    id: "autops",
    name: "AUTOPS™",
    description: "",
    isActive: false,
    benefits: [],
    working: true,
    subtitle: "Implement automatic process operation",
  },
  {
    id: "safe-process",
    name: "Safe Process™",
    description: "",
    isActive: false,
    benefits: [],
    working: true,
    subtitle: "Manage industrial safety",
  },
  {
    id: "measure-bridge",
    name: "Measure Bridge™",
    description:
      "Comprehensive program for the management and control of industrial measurement, ensuring accuracy, reliability, and regulatory compliance in measurement processes.",
    longDescription: [
      "Measure Bridge™ is a specialized system that enables the management, control, and optimization of industrial measurement processes, guaranteeing traceability and data integrity.",
      "Through structured methodologies, digitalization, and information analysis, it facilitates data-driven decision-making, reduces errors, and ensures compliance with current quality standards and regulations.",
    ],
    icon: "BarChart", // Icon related to measurement and data analysis
    color: "from-[var(--color-secondary)] to-[var(--color-accent)]",
    route: "/measure-bridge",
    isActive: true,
    benefits: [
      "Ensures the accuracy and reliability of measurement data.",
      "Facilitates traceability and control of measurement instruments and processes.",
      "Reduces errors and deviations through digitalization and standardization.",
      "Complies with regulations and quality standards in metrological management.",
    ],
    working: false,
    subtitle: "Improve analytical precision",
  },
];

export const servicesData_transformar_pt: Service[] = [
  {
    id: "asset-control-bridge",
    name: "Asset Control Bridge™",
    description:
      "Sistema abrangente para a gestão eficiente de ativos industriais, focado em maximizar a disponibilidade, confiabilidade e vida útil dos equipamentos produtivos.",
    longDescription: [
      "O Asset Control Bridge™ é um programa especializado em gestão de ativos industriais que permite controlar, monitorar e otimizar a manutenção de equipamentos críticos. Por meio de metodologias estruturadas, digitalização e análise de dados, ajuda a reduzir paradas não programadas, melhorar o planejamento e garantir a rastreabilidade das intervenções.",
      "O sistema integra ferramentas visuais, indicadores-chave e processos padronizados para garantir a disponibilidade e confiabilidade dos ativos, alinhando a gestão de manutenção com os objetivos estratégicos da organização e facilitando a tomada de decisões baseada em informações reais e oportunas.",
    ],
    icon: "Settings", // Ícone relacionado à manutenção e gestão de ativos
    color: "from-[var(--color-secondary)] to-[var(--color-accent)]",
    route: "/asset-control-bridge",
    isActive: true,
    benefits: [
      "Maximiza a disponibilidade e confiabilidade dos equipamentos produtivos.",
      "Reduz custos e paradas não programadas por meio de manutenção preventiva e preditiva.",
      "Facilita a rastreabilidade e o controle das intervenções em ativos críticos.",
      "Otimiza o planejamento e a execução das tarefas de manutenção.",
      "Integra indicadores-chave para a tomada de decisões baseada em dados.",
      "Alinha a gestão de ativos com os objetivos estratégicos da empresa.",
    ],
    working: false,
    subtitle: "Manutenção Industrial",
  },
  {
    id: "autops",
    name: "AUTOPS™",
    description: "",
    isActive: false,
    benefits: [],
    working: true,
    subtitle: "Incorporar operação automática de processos",
  },
  {
    id: "safe-process",
    name: "Safe Process™",
    description: "",
    isActive: false,
    benefits: [],
    working: true,
    subtitle: "Gerenciar a segurança industrial",
  },
  {
    id: "measure-bridge",
    name: "Measure Bridge™",
    description:
      "Programa abrangente para a gestão e controle da medição industrial, assegurando precisão, confiabilidade e conformidade normativa nos processos de medição.",
    longDescription: [
      "O Measure Bridge™ é um sistema especializado que permite gerenciar, controlar e otimizar os processos de medição industrial, garantindo a rastreabilidade e a integridade dos dados obtidos.",
      "Por meio de metodologias estruturadas, digitalização e análise de informações, facilita a tomada de decisões baseada em dados confiáveis, reduz erros e assegura o cumprimento de padrões de qualidade e normas vigentes.",
    ],
    icon: "BarChart", // Ícone relacionado à medição e análise de dados
    color: "from-[var(--color-secondary)] to-[var(--color-accent)]",
    route: "/measure-bridge",
    isActive: true,
    benefits: [
      "Assegura a precisão e confiabilidade dos dados de medição.",
      "Facilita a rastreabilidade e o controle de instrumentos e processos de medição.",
      "Reduz erros e desvios por meio da digitalização e padronização.",
      "Cumpre normas e padrões de qualidade na gestão metrológica.",
    ],
    working: false,
    subtitle: "Melhorar a precisão analítica",
  },
];

// --- APLICACIONES ---

export const servicesData_aplicaciones: Service[] = [
  {
    id: "ops-bridge",
    name: "OpsBridge™ - World Class",
    description: "",
    route: "/ops-bridge",
    longDescription: [
      "OpsBridge™ es un programa diseñado para llevar a las empresas hacia un nivel superior de estandarización, control y eficiencia, transformando sus operaciones en sistemas de clase mundial.",
      "Es un proceso de transformación completa de la empresa bajo principios LEAN, de mediano/largo plazo, que abarca cultura, procesos, liderazgo, estrategia y estructuras de gestión.",
    ],
    isActive: true,
    benefits: [
      "Aumento de productividad y eficiencia operativa estandizando procesos",
      "Generación de rutinas de gestión diaria, semanal y mensual con foco en resultados.",
      "Consolidación de un sistema de gestión que facilita la toma de decisiones en todos los niveles.",
      "Preparación de la empresa para avanzar hacia niveles World Class de operación.",
    ],
    working: false,
    subtitle: "Optimizar el sistema integral de gestión",
  },
  {
    id: "projectfocus",
    name: "ProjectFocus™",
    description:
      "Metodología práctica para convertir objetivos estratégicos en decisiones de inversión alineadas y priorizadas.",
    longDescription: [
      "Metodología colaborativa para mapear, priorizar y seleccionar proyectos clave alineados con la estrategia, usando herramientas de valoración de beneficios, costos e impactos para tomar decisiones basadas en valor.",
      "Extensión de StratBridge™ que convierte la planificación estratégica en un portafolio ejecutable, con fases claras desde exploración de oportunidades hasta asignación de responsables y ejecución.",
      "Ideal para organizaciones que buscan visibilidad y alineación de iniciativas, mediante encuentros virtuales y presenciales que garantizan consenso y compromiso de la alta dirección.",
    ],
    icon: "Puzzle",
    color: "from-[var(--color-primary)] to-[var(--color-accent)]",
    route: "/projectfocus",
    isActive: true,
    benefits: [
      "Dar visibilidad sobre proyectos e iniciativas.",
      "Priorizar decisiones de inversión.",
      "Alinear proyectos con objetivos estratégicos.",
      "Disminuir tensiones internas por asignación de recursos.",
      "Evaluar decisiones según impacto-beneficio.",
      "Asignar responsabilidades claras sobre la ejecución.",
    ],
    subtitle: "Identificar y seleccionar proyectos",
  },
  {
    id: "stratbridge",
    name: "StratBridge™",
    description:
      "Programa de planificación estratégica (Hoshin Kanri) para alinear visión, objetivos y ejecución diaria.",
    longDescription: [
      "StratBridge™ es un programa de planificación estratégica basado en la metodología Hoshin Kanri que convierte visión y misión en objetivos concretos, medibles y alineados al trabajo diario.",
      "Descompone metas de largo plazo en objetivos anuales, KPIs e iniciativas por área, utilizando herramientas visuales como la X-Matrix, tableros de control y procesos de feedback estructurado (catchball).",
      "Permite alinear equipos, promover autonomía y dar sentido al trabajo diario, integrando metodologías como LeanBridge™, Kaizen Action™ y FlowStable™ bajo una misma dirección estratégica.",
    ],
    icon: "Compass",
    color: "from-[var(--color-primary)] to-[var(--color-accent)]",
    route: "/stratbridge",
    isActive: true,
    benefits: [
      "Alinea la estrategia con la ejecución",
      "Mejora la toma de decisiones estratégicas",
      "Desarrolla capacidades de planificación",
      "Acelera el logro de objetivos estratégicos",
    ],
    subtitle: "Alinear la estrategia",
  },
  {
    id: "people-first",
    name: "People First™",
    description: "",
    route: "/people-first",
    isActive: true,
    longDescription: [
      "People First™ es un sistema integral para la gestión de personas que conecta el desarrollo individual con los objetivos estratégicos de la organización. A través de procesos estructurados de feedback, definición de objetivos y evaluación de competencias, promueve la alineación entre el crecimiento personal y las necesidades del negocio.",
      "La metodología permite identificar brechas de habilidades, asignar roles y responsabilidades basados en evidencias y diseñar entrenamientos a medida, asegurando que cada colaborador aporte su máximo potencial en el lugar correcto.",
      "Además, fomenta un entorno de aprendizaje continuo donde el desarrollo técnico y humano es parte del sistema operativo de la empresa, fortaleciendo la sostenibilidad de los resultados y el compromiso de las personas.",
    ],
    benefits: [
      "Fortalece el compromiso individual a través de objetivos claros y feedback efectivo.",
      "Mejora la asignación de roles y responsabilidades, basándose en evidencias de habilidades reales.",
      "Cierra brechas entre necesidades de la operación y el perfil de las personas mediante entrenamientos a medida.",
      "Genera un entorno de aprendizaje continuo, donde el desarrollo técnico y humano es parte del sistema operativo de la empresa.",
      "Conecta el crecimiento personal con la mejora continua organizacional, aumentando la sostenibilidad de los resultados",
    ],
    working: false,
    subtitle: "Gestionar recursos humanos",
  },
];

export const servicesData_aplicaciones_en: Service[] = [
  {
    id: "ops-bridge",
    name: "OpsBridge™ - World Class",
    description: "",
    route: "/ops-bridge",
    longDescription: [
      "OpsBridge™ is a program designed to take companies to a higher level of standardization, control, and efficiency, transforming their operations into world-class systems.",
      "It is a comprehensive business transformation process based on LEAN principles, medium/long-term, covering culture, processes, leadership, strategy, and management structures.",
    ],
    isActive: true,
    benefits: [
      "Increased productivity and operational efficiency by standardizing processes.",
      "Creation of daily, weekly, and monthly management routines focused on results.",
      "Consolidation of a management system that facilitates decision-making at all levels.",
      "Preparation of the company to advance towards World Class levels of operation.",
    ],
    working: false,
    subtitle: "Optimize the integrated management system",
  },
  {
    id: "projectfocus",
    name: "ProjectFocus™",
    description:
      "Practical methodology to turn strategic objectives into aligned and prioritized investment decisions.",
    longDescription: [
      "Collaborative methodology to map, prioritize, and select key projects aligned with strategy, using tools to assess benefits, costs, and impacts for value-based decision-making.",
      "Extension of StratBridge™ that turns strategic planning into an executable portfolio, with clear phases from opportunity exploration to assignment of responsibilities and execution.",
      "Ideal for organizations seeking visibility and alignment of initiatives, through virtual and in-person meetings that ensure consensus and commitment from top management.",
    ],
    icon: "Puzzle",
    color: "from-[var(--color-primary)] to-[var(--color-accent)]",
    route: "/projectfocus",
    isActive: true,
    benefits: [
      "Provide visibility on projects and initiatives.",
      "Prioritize investment decisions.",
      "Align projects with strategic objectives.",
      "Reduce internal tensions over resource allocation.",
      "Evaluate decisions based on impact-benefit.",
      "Assign clear responsibilities for execution.",
    ],
    subtitle: "Identify and select projects",
  },
  {
    id: "stratbridge",
    name: "StratBridge™",
    description:
      "Strategic planning program (Hoshin Kanri) to align vision, objectives, and daily execution.",
    longDescription: [
      "StratBridge™ is a strategic planning program based on the Hoshin Kanri methodology that turns vision and mission into concrete, measurable objectives aligned with daily work.",
      "Breaks down long-term goals into annual objectives, KPIs, and initiatives by area, using visual tools like the X-Matrix, control boards, and structured feedback processes (catchball).",
      "Enables team alignment, promotes autonomy, and gives meaning to daily work, integrating methodologies such as LeanBridge™, Kaizen Action™, and FlowStable™ under a single strategic direction.",
    ],
    icon: "Compass",
    color: "from-[var(--color-primary)] to-[var(--color-accent)]",
    route: "/stratbridge",
    isActive: true,
    benefits: [
      "Aligns strategy with execution",
      "Improves strategic decision-making",
      "Develops planning capabilities",
      "Accelerates achievement of strategic objectives",
    ],
    subtitle: "Align the strategy",
  },
  {
    id: "people-first",
    name: "People First™",
    description:
      "Comprehensive people management system that connects individual development with the organization's strategic objectives. Through structured feedback, goal setting, and competency assessment, it aligns personal growth with business needs.",
    route: "/people-first",
    isActive: true,
    longDescription: [
      "People First™ is a comprehensive system for people management that connects individual development with the strategic objectives of the organization. Through structured processes of feedback, goal definition, and competency evaluation, it promotes alignment between personal growth and business needs.",
      "The methodology allows for the identification of skill gaps, assignment of roles and responsibilities based on evidence, and the design of tailored training, ensuring each team member contributes their full potential in the right place.",
      "It also fosters a continuous learning environment where technical and human development is part of the company's operating system, strengthening sustainability of results and employee engagement.",
    ],
    benefits: [
      "Strengthens individual commitment through clear objectives and effective feedback.",
      "Improves the assignment of roles and responsibilities, based on evidence of real skills.",
      "Closes gaps between operational needs and people’s profiles through tailored training.",
      "Creates a continuous learning environment, where technical and human development is part of the company’s operating system.",
      "Connects personal growth with organizational continuous improvement, increasing the sustainability of results.",
    ],
    working: false,
    subtitle: "Manage human resources",
  },
];

export const servicesData_aplicaciones_pt: Service[] = [
  {
    id: "ops-bridge",
    name: "OpsBridge™ - World Class",
    description: "",
    route: "/ops-bridge",
    longDescription: [
      "OpsBridge™ é um programa projetado para levar as empresas a um nível superior de padronização, controle e eficiência, transformando suas operações em sistemas de classe mundial.",
      "É um processo de transformação completa da empresa baseado em princípios LEAN, de médio/longo prazo, que abrange cultura, processos, liderança, estratégia e estruturas de gestão.",
    ],
    isActive: true,
    benefits: [
      "Aumento da produtividade e eficiência operacional padronizando processos.",
      "Geração de rotinas de gestão diária, semanal e mensal com foco em resultados.",
      "Consolidação de um sistema de gestão que facilita a tomada de decisões em todos os níveis.",
      "Preparação da empresa para avançar para níveis World Class de operação.",
    ],
    working: false,
    subtitle: "Otimizar o sistema de gestão integrado",
  },
  {
    id: "projectfocus",
    name: "ProjectFocus™",
    description:
      "Metodologia prática para transformar objetivos estratégicos em decisões de investimento alinhadas e priorizadas.",
    longDescription: [
      "Metodologia colaborativa para mapear, priorizar e selecionar projetos-chave alinhados à estratégia, usando ferramentas de avaliação de benefícios, custos e impactos para tomar decisões baseadas em valor.",
      "Extensão do StratBridge™ que transforma o planejamento estratégico em um portfólio executável, com fases claras desde a exploração de oportunidades até a atribuição de responsáveis e execução.",
      "Ideal para organizações que buscam visibilidade e alinhamento de iniciativas, por meio de encontros virtuais e presenciais que garantem consenso e compromisso da alta direção.",
    ],
    icon: "Puzzle",
    color: "from-[var(--color-primary)] to-[var(--color-accent)]",
    route: "/projectfocus",
    isActive: true,
    benefits: [
      "Dar visibilidade sobre projetos e iniciativas.",
      "Priorizar decisões de investimento.",
      "Alinhar projetos com objetivos estratégicos.",
      "Diminuir tensões internas por alocação de recursos.",
      "Avaliar decisões segundo impacto-benefício.",
      "Atribuir responsabilidades claras sobre a execução.",
    ],
    subtitle: "Identificar e selecionar projetos",
  },
  {
    id: "stratbridge",
    name: "StratBridge™",
    description:
      "Programa de planejamento estratégico (Hoshin Kanri) para alinhar visão, objetivos e execução diária.",
    longDescription: [
      "StratBridge™ é um programa de planejamento estratégico baseado na metodologia Hoshin Kanri que transforma visão e missão em objetivos concretos, mensuráveis e alinhados ao trabalho diário.",
      "Desdobra metas de longo prazo em objetivos anuais, KPIs e iniciativas por área, utilizando ferramentas visuais como a X-Matrix, quadros de controle e processos de feedback estruturado (catchball).",
      "Permite alinhar equipes, promover autonomia e dar sentido ao trabalho diário, integrando metodologias como LeanBridge™, Kaizen Action™ e FlowStable™ sob uma mesma direção estratégica.",
    ],
    icon: "Compass",
    color: "from-[var(--color-primary)] to-[var(--color-accent)]",
    route: "/stratbridge",
    isActive: true,
    benefits: [
      "Alinha a estratégia com a execução",
      "Melhora a tomada de decisões estratégicas",
      "Desenvolve capacidades de planejamento",
      "Acelera o alcance de objetivos estratégicos",
    ],
    subtitle: "Alinhar a estratégia",
  },
  {
    id: "people-first",
    name: "People First™",
    description:
      "Sistema integrado para gestão de pessoas que conecta o desenvolvimento individual aos objetivos estratégicos da organização.",
    route: "/people-first",
    isActive: true,
    longDescription: [
      "People First™ é um sistema completo para gestão de pessoas que conecta o desenvolvimento individual aos objetivos estratégicos da organização. Por meio de processos estruturados de feedback, definição de metas e avaliação de competências, promove o alinhamento entre o crescimento pessoal e as necessidades do negócio.",
      "A metodologia permite identificar lacunas de habilidades, atribuir papéis e responsabilidades baseados em evidências e desenhar treinamentos sob medida, garantindo que cada colaborador contribua com seu máximo potencial no lugar certo.",
      "Além disso, fomenta um ambiente de aprendizado contínuo, onde o desenvolvimento técnico e humano faz parte do sistema operacional da empresa, fortalecendo a sustentabilidade dos resultados e o engajamento das pessoas.",
    ],
    benefits: [
      "Fortalece o compromisso individual por meio de metas claras e feedback efetivo.",
      "Melhora a atribuição de papéis e responsabilidades, com base em evidências reais de habilidades.",
      "Fecha lacunas entre as necessidades da operação e o perfil das pessoas por meio de treinamentos personalizados.",
      "Gera um ambiente de aprendizado contínuo, onde o desenvolvimento técnico e humano faz parte do sistema operacional da empresa.",
      "Conecta o crescimento pessoal à melhoria contínua organizacional, aumentando a sustentabilidade dos resultados.",
    ],
    working: false,
    subtitle: "Gerenciar recursos humanos",
  },
];
