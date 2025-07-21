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
    subtitle: "Iniciar la mejora",
    description: "Problemas visibles, Foco en el equipo",
    quote: "“El primer paso para dejar de perder valor sin darte cuenta.”",
    details: [
      "Acá comienza todo. En este camino se identifican desperdicios, se ordenan los espacios y se entrena a los equipos para que vean oportunidades donde antes solo había rutina.",
      "Ideal para empresas que quieren mejorar pero aún no saben por dónde empezar.",
    ],
    servicesData: servicesData_iniciar,
    programs: servicesData_iniciar.map((service) => service.name),
  },
  {
    id: "estabilizar",
    title: "Estabilizar y profesionalizar",
    subtitle: "Estabilizar y profesionalizar",
    description: "Procesos, Métricas, Liderazgo",
    quote:
      "“Cuando las cosas ya no alcanzan con funcionar: ahora tienen que funcionar siempre bien.”",
    details: [
      "Una vez que eliminaste lo innecesario, llega el momento de poner foco en la estabilidad, el control de procesos y el empoderamiento del liderazgo operativo.",
      "Este camino convierte la mejora en una práctica sistemática y medible.",
    ],
    servicesData: servicesData_estabilizar,
    programs: servicesData_estabilizar.map((service) => service.name),
  },
  {
    id: "transformar",
    title: "Transformar la organización",
    subtitle: "Transformar la organización",
    description: "Alinear estrategia con ejecución",
    quote: "“De las mejoras puntuales a una cultura que transforma todo.”",
    details: [
      "El paso más ambicioso. Aquí se alinean la estrategia, los datos, los procesos y los equipos. La mejora continua ya no es un proyecto: es la forma en la que se gestiona la empresa.",
      "Ideal para quienes buscan escalar, integrar o reinventar su modelo de trabajo.",
    ],
    servicesData: servicesData_transformar,
    programs: servicesData_transformar.map((service) => service.name),
  },
  {
    id: "aplicaciones",
    title: "Aplicaciones en la industria",
    subtitle: "Aplicación avanzada",
    description: "Transformación de procesos industriales",
    quote: '"Donde la mejora se convierte en parte del ADN industrial."',
    details: [
      "Implementación de herramientas avanzadas de gestión en líneas de producción y procesos industriales.",
      "Aplicación de modelos de mejora continua adaptados a contextos reales como manufactura, logística o servicios técnicos.",
      "Casos de éxito y resultados concretos: reducción de tiempos muertos, aumento de eficiencia, y mejora de indicadores clave.",
    ],
    servicesData: servicesData_aplicaciones,
    programs: servicesData_aplicaciones.map((service) => service.name),
  },
];