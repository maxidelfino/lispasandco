import { Service } from "../types";
import {
  servicesData_aplicaciones,
  servicesData_aplicaciones_en,
  servicesData_aplicaciones_pt,
  servicesData_estabilizar,
  servicesData_estabilizar_en,
  servicesData_estabilizar_pt,
  servicesData_iniciar,
  servicesData_iniciar_en,
  servicesData_iniciar_pt,
  servicesData_transformar,
  servicesData_transformar_en,
  servicesData_transformar_pt,
} from "./services";

export type evolutionCardsType = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  quote: string;
  details: string[];
  servicesData: Service[];
  programs?: {
    name: string;
    featured: boolean;
  }[];
};

export const evolutionCards: {
  es: evolutionCardsType[];
  en: evolutionCardsType[];
  pt: evolutionCardsType[];
} = {
  es: [
    {
      id: "iniciar",
      title: "Iniciar la mejora",
      subtitle: "Módulo: Iniciar la mejora",
      description:
        "¿Tu empresa tiene ineficiencias visibles, problemas que se repiten o equipos desalineados?",
      quote: "“El primer paso para dejar de perder valor sin darte cuenta.”",
      details: [
        "En este módulo identificamos desperdicios ocultos, ordenamos espacios de trabajo y entrenamos equipos para detectar oportunidades de mejora en la operación diaria.",
        "Ideal para empresas que saben que pueden mejorar pero necesitan una metodología clara y probada para comenzar su transformación.",
      ],
      servicesData: servicesData_iniciar,
      programs: [
        { name: "Reducir ineficiencias WASTE ZERO™", featured: true },
        { name: "Ordenar sectores 5S PLUS™", featured: false },
        { name: "Resolver problemas KAIZEN ACTION™", featured: true },
        { name: "Gestionar los cambios CHANGE BRIDGE™", featured: false },
        { name: "Ingeniería de procesos PROCESS DESIGN BRIDGE™", featured: true },
      ],
    },
    {
      id: "estabilizar",
      title: "Estabilizar y profesionalizar",
      subtitle: "Módulo: Estabilizar y profesionalizar",
      description:
        "¿Tu operación carece de métricas claras, tiene variables críticas fuera de control o poca disciplina operativa?",
      quote:
        "“Cuando las cosas ya no alcanzan con funcionar: ahora tienen que funcionar siempre bien.”",

      details: [
        "Después de eliminar desperdicios, enfocamos en estabilidad de procesos, control estadístico y empoderamiento del liderazgo operativo para resultados predecibles.",
        "Ideal para empresas que necesitan aumentar volúmenes de producción sin invertir en nuevos activos fijos, optimizando lo que ya tienen.",
      ],
      servicesData: servicesData_estabilizar,
      programs: [
        { name: "Estabilizar procesos FLOW STABLE™", featured: true },
        { name: "Gestionar datos DECISIONES ESTADISTICAS™", featured: false },
        { name: "Estandarizar la operación OPS STANDARD™", featured: false },
        { name: "Difundir la mejora continua LEAN BRIDGE™", featured: true },
      ],
    },
    {
      id: "transformar",
      title: "Perfeccionar la operación",
      subtitle: "Módulo: Perfeccionar la operación",
      description:
        "¿Tu empresa sufre de pérdidas en controles de calidad, mantenimiento o automatización deficiente?",
      quote: "“La mejora se expande y convierte en el ADN del negocio.”",
      details: [
        "Implementamos herramientas avanzadas: mantenimiento predictivo, automatización inteligente, seguridad industrial y control analítico de precisión.",
        "Ideal para empresas que buscan excelencia operacional y quieren que la gestión de activos sea parte integral de su ventaja competitiva.",
        "Especialmente valioso para operaciones dependientes de análisis de laboratorio, calibración de equipos y control de calidad crítico.",
      ],
      servicesData: servicesData_transformar,
      programs: [
        { name: "Mantenimiento Industrial - ASSET BRIDGE™", featured: true },
        {
          name: "Incorporar operación automática de procesos AUTOPS™",
          featured: false,
        },
        {
          name: "Gestionar la Seguridad industrial SAFE PROCESS™",
          featured: false,
        },
        { name: "Mejorar precision analítica MEASURE BRIDGE™", featured: true },
      ],
    },
    {
      id: "aplicaciones",
      title: "Gestionar la organización",
      subtitle: "Módulo: Gestionar la organización",
      description:
        "¿Tu organización tiene áreas desconectadas, estrategias confusas o prioridades poco claras?",
      quote: "“De las mejoras puntuales a una cultura que transforma todo.”",
      details: [
        "El nivel más avanzado: alineamos estrategia, datos, procesos y equipos en un sistema integral. La mejora continua se convierte en tu forma de gestionar el negocio.",
        "Ideal para empresas listas para escalar, expandirse o consolidar su posición de liderazgo con una estrategia de crecimiento sostenible y planificada.",
      ],
      servicesData: servicesData_aplicaciones,
      programs: [
        {
          name: "Optimizar sistema integral de gestion - OPS EXCELLENCE™",
          featured: false,
        },
        { name: "Seleccionar proyectos - PROJECT FOCUS™", featured: true },
        { name: "Alinear la estrategia - STRAT BRIDGE™", featured: false },
        { name: "Gestionar recursos humanos - PEOPLE FIRST™", featured: false },
      ],
    },
  ],
  en: [
    {
      id: "iniciar",
      title: "Start Improvement",
      subtitle: "Module: Start Improvement",
      description:
        "Visible inefficiencies – Recurring problems – Misaligned teams",
      quote: "“The first step to stop losing value without realizing it.”",
      details: [
        "This is where it all begins. In this path, wastes are identified, spaces are organized, and teams are trained to see opportunities where there was only routine before.",
        "Ideal for companies that want to improve but don't know where to start.",
      ],
      servicesData: servicesData_iniciar_en,
      programs: [
        { name: "Reduce inefficiencies WASTE ZERO™", featured: true },
        { name: "Organize areas 5S PLUS™", featured: false },
        { name: "Solve problems KAIZEN ACTION™", featured: true },
        { name: "Manage change CHANGE BRIDGE™", featured: false },
        { name: "Process Engineering PROCESS DESIGN BRIDGE™", featured: true },
      ],
    },
    {
      id: "estabilizar",
      title: "Stabilize and Professionalize",
      subtitle: "Module: Stabilize and Professionalize",
      description:
        "No defined metrics – Critical variables out of control – Low operational discipline",
      quote:
        "“When things are no longer enough just to work: now they must always work well.”",
      details: [
        "Once you've eliminated the unnecessary, it's time to focus on stability, process control, and empowering operational leadership.",
        "Ideal for companies that need to make a leap in production volumes but don't want to invest in fixed assets.",
      ],
      servicesData: servicesData_estabilizar_en,
      programs: [
        { name: "Stabilize processes FLOW STABLE™", featured: true },
        { name: "Manage data MANAGERIAL DECISIONS™", featured: false },
        { name: "Standardize operation OPS STANDARD™", featured: false },
        { name: "Spread continuous improvement LEAN BRIDGE™", featured: true },
      ],
    },
    {
      id: "transformar",
      title: "Perfect the Operation",
      subtitle: "Module: Perfect the Operation",
      description:
        "Inadequate maintenance – Poor automation – Losses in analytical controls",
      quote: "“Improvement expands and becomes the DNA of the business.”",
      details: [
        "Implementation of advanced tools for production line automation, maintenance, industrial safety, and laboratory practices.",
        "Ideal for companies that want to incorporate asset management as a fundamental part of their daily operations.",
        "Also for companies whose business is highly dependent on sampling, equipment calibration, and laboratory analysis.",
      ],
      servicesData: servicesData_transformar_en,
      programs: [
        { name: "Industrial Maintenance - ASSET BRIDGE™", featured: true },
        {
          name: "Incorporate automatic process operation AUTOPS™",
          featured: false,
        },
        { name: "Manage industrial safety SAFE PROCESS™", featured: false },
        {
          name: "Improve analytical precision MEASURE BRIDGE™",
          featured: true,
        },
      ],
    },
    {
      id: "aplicaciones",
      title: "Manage the Organization",
      subtitle: "Module: Manage the Organization",
      description:
        "Disconnected areas – Confusing strategies – Unknown priorities",
      quote:
        "“From isolated improvements to a culture that transforms everything.”",
      details: [
        "The most ambitious step. Here, strategy, data, processes, and teams are aligned. Continuous improvement is no longer a project: it's the way the company is managed.",
        "Ideal for companies looking to expand or scale the business following a planned growth strategy.",
      ],
      servicesData: servicesData_aplicaciones_en,
      programs: [
        {
          name: "Optimize management system - OPS EXCELLENCE™",
          featured: false,
        },
        { name: "Select projects - PROJECT FOCUS™", featured: true },
        { name: "Align strategy - STRAT BRIDGE™", featured: false },
        { name: "Manage human resources - PEOPLE FIRST™", featured: false },
      ],
    },
  ],
  pt: [
    {
      id: "iniciar",
      title: "Iniciar a melhoria",
      subtitle: "Módulo: Iniciar a melhoria",
      description:
        "Ineficiências visíveis – Repetição de problemas – Equipes desalinhadas",
      quote: "“O primeiro passo para parar de perder valor sem perceber.”",
      details: [
        "Aqui tudo começa. Neste caminho, identificam-se desperdícios, organizam-se os espaços e treinam-se as equipes para enxergar oportunidades onde antes só havia rotina.",
        "Ideal para empresas que querem melhorar, mas ainda não sabem por onde começar.",
      ],
      servicesData: servicesData_iniciar_pt,
      programs: [
        { name: "Reduzir ineficiências WASTE ZERO™", featured: true },
        { name: "Organizar setores 5S PLUS™", featured: false },
        { name: "Resolver problemas KAIZEN ACTION™", featured: true },
        { name: "Gerenciar mudanças CHANGE BRIDGE™", featured: false },
        { name: "Engenharia de processos PROCESS DESIGN BRIDGE™", featured: true },
      ],
    },
    {
      id: "estabilizar",
      title: "Estabilizar e profissionalizar",
      subtitle: "Módulo: Estabilizar e profissionalizar",
      description:
        "Não há métricas definidas – Variáveis críticas fora de controle – Baixa disciplina operacional",
      quote:
        "“Quando as coisas já não bastam funcionar: agora precisam funcionar sempre bem.”",
      details: [
        "Depois de eliminar o desnecessário, é hora de focar na estabilidade, no controle de processos e no empoderamento da liderança operacional.",
        "Ideal para empresas que precisam dar um salto nos volumes de produção, mas não querem investir em ativos fixos.",
      ],
      servicesData: servicesData_estabilizar_pt,
      programs: [
        { name: "Estabilizar processos FLOW STABLE™", featured: true },
        { name: "Gerenciar dados DECISÕES ESTATÍSTICAS™", featured: false },
        { name: "Padronizar a operação OPS STANDARD™", featured: false },
        {
          name: "Disseminar a melhoria contínua LEAN BRIDGE™",
          featured: false,
        },
      ],
    },
    {
      id: "transformar",
      title: "Aperfeiçoar a operação",
      subtitle: "Módulo: Aperfeiçoar a operação",
      description:
        "Manutenção inadequada – Automação deficiente – Perdas em controles analíticos",
      quote: "“A melhoria se expande e se torna o DNA do negócio.”",
      details: [
        "Implementação de ferramentas avançadas de automação de linhas de produção, manutenção, segurança industrial e práticas laboratoriais.",
        "Ideal para empresas que querem incorporar a gestão de ativos como parte fundamental do funcionamento diário.",
        "Também para empresas cujo negócio depende fortemente de amostragens, calibração de equipamentos e análises laboratoriais.",
      ],
      servicesData: servicesData_transformar_pt,
      programs: [
        { name: "Manutenção Industrial - ASSET BRIDGE™", featured: true },
        {
          name: "Incorporar operação automática de processos AUTOPS™",
          featured: false,
        },
        {
          name: "Gerenciar Segurança Industrial SAFE PROCESS™",
          featured: false,
        },
        {
          name: "Melhorar precisão analítica MEASURE BRIDGE™",
          featured: true,
        },
      ],
    },
    {
      id: "aplicaciones",
      title: "Gerenciar a organização",
      subtitle: "Módulo: Gerenciar a organização",
      description:
        "Áreas desconectadas – estratégias confusas – prioridades desconhecidas",
      quote: "“De melhorias pontuais a uma cultura que transforma tudo.”",
      details: [
        "O passo mais ambicioso. Aqui se alinham estratégia, dados, processos e equipes. A melhoria contínua já não é um projeto: é a forma como a empresa é gerida.",
        "Ideal para empresas que buscam ampliar ou escalar o negócio seguindo uma estratégia de crescimento planejada.",
      ],
      servicesData: servicesData_aplicaciones_pt,
      programs: [
        {
          name: "Otimizar sistema de gestão - OPS EXCELLENCE™",
          featured: false,
        },
        { name: "Selecionar projetos - PROJECT FOCUS™", featured: true },
        { name: "Alinhar a estratégia - STRAT BRIDGE™", featured: false },
        { name: "Gerenciar recursos humanos - PEOPLE FIRST™", featured: false },
      ],
    },
  ],
};
