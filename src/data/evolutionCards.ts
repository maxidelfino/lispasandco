import { Service } from "../types";
import {
  servicesData_aplicaciones,
  servicesData_estabilizar,
  servicesData_iniciar,
  servicesData_transformar,
} from "./services";

export type evolutionCardsType = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  quote: string;
  details: string[];
  servicesData: Service[];
  programs?: string[];
};

export const evolutionCards: evolutionCardsType[] = [
  {
    id: "iniciar",
    title: "Iniciar la mejora",
    subtitle: "Módulo: Iniciar la mejora",
    description:
      "Ineficiencias visibles – Repetición de problemas – Equipos desalineados",
    quote: "“El primer paso para dejar de perder valor sin darte cuenta.”",
    details: [
      "Acá comienza todo. En este camino se identifican desperdicios, se ordenan los espacios y se entrena a los equipos para que vean oportunidades donde antes solo había rutina.",
      "Ideal para empresas que quieren mejorar pero aún no saben por dónde empezar.",
    ],
    servicesData: servicesData_iniciar,
    programs: [
      "Reducir ineficiencias WASTE ZERO™",
      "Ordenar sectores 5S PLUS™",
      "Resolver problemas KAIZEN ACTION™",
      "Gestionar los cambios CHANGE BRIDGE™",
    ],
  },
  {
    id: "estabilizar",
    title: "Estabilizar y profesionalizar",
    subtitle: "Módulo: Estabilizar y profesionalizar",
    description:
      "No hay métricas definidas - Variables críticas fuera de control — Poca disciplina operativa",
    quote:
      "“Cuando las cosas ya no alcanzan con funcionar: ahora tienen que funcionar siempre bien.”",
    details: [
      "Una vez que eliminaste lo innecesario, llega el momento de poner foco en la estabilidad, el control de procesos y el empoderamiento del liderazgo operativo.",
      "Ideal para empresas que necesitan hacer un salto en sus volúmenes de producción pero no quieren invertir dinero en activos fijos.",
    ],
    servicesData: servicesData_estabilizar,
    programs: [
      "Estabilizar procesos FLOW STABLE™",
      "Gestionar datos DECISIONES ESTADISTICAS™",
      "Estandarizar la operación OPS STANDARD™",
      "Difundir la mejora continua LEAN BRIDGE™",
    ],
  },
  {
    id: "transformar",
    title: "Perfeccionar la operación",
    subtitle: "Módulo: Perfeccionar la operación",
    description:
      "Mantenimiento inadecuado – Automatismo deficiente – Pérdidas en controles analíticos",
    quote: "“La mejora se expande y convierte en el ADN del negocio.”",
    details: [
      "Implementación de herramientas avanzadas de automatización de líneas de producción, mantenimiento, seguridad industrial y prácticas de laboratorio.",
      "Ideal para empresas que quieren incorporar la gestión de activos como parte fundamental de su funcionamiento diario.",
      "También para empresas cuyo negocio es altamente dependiente de muestreos, calibración de equipos y análisis de laboratorio.",
    ],
    servicesData: servicesData_transformar,
    programs: [
      "Mantenimiento Industrial - ASSET BRIDGE™",
      "Incorporar operación automática de procesos AUTOPS™",
      "Gestionar la Seguridad industrial PROJECT FOCUS™",
      "Mejorar precision analítica LAB CI FOCUS™",
    ],
  },
  {
    id: "aplicaciones",
    title: "Gestionar la organización",
    subtitle: "Módulo: Gestionar la organización",
    description:
      "Áreas desconectadas – estrategias confusas – prioridades desconocidas",
    quote: "“De las mejoras puntuales a una cultura que transforma todo.”",
    details: [
      "El paso más ambicioso. Aquí se alinean la estrategia, los datos, los procesos y los equipos. La mejora continua ya no es un proyecto: es la forma en la que se gestiona la empresa.",
      "Ideal para empresas que buscan ampliar o escalar el negocio siguiendo una estrategia de crecimiento planificada.",
    ],
    servicesData: servicesData_aplicaciones,
    programs: [
      "OP S EXCELLENCE™",
      "PROJECT FOCUS™",
      "STRAT BRIDGE™",
      "PEOPLE FIRST™",
    ],
  },
];
