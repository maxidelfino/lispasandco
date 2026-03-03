export type Podcast = {
  title: string;
  description?: string;
  audioSpanish: string;
  audioEnglish: string;
  audioPortuguese: string;
  category: string;
};

// Case Studies - ES
import Buscar_sinergias_entre_areas_usando_KAIZEN from "./ES/caseStudies/Buscar_sinergias_entre_areas_usando_KAIZEN.m4a";
import Creando_valor_con_las_mediciones from "./ES/caseStudies/Creando_valor_con_las_mediciones.m4a";
import El_Secreto_del_Balance_de_Masa from "./ES/caseStudies/El_Secreto_del_Balance_de_Masa_en_Base_Seca_para_Destapar_Millones_en_la_Agroindustria.m4a";
import Produccion_Estable from "./ES/caseStudies/Producción_Estable__La_Curva_Secreta_que_Supera_el__Más_Rápido_.m4a";
import Rentabilidad_Agroindustrial from "./ES/caseStudies/Rentabilidad_Agroindustrial_y_más_allá.m4a";

// Programs - ES
import FiveS_Plus from "./ES/programs/FiveS_Plus__Orden_y_Disciplina_para_Transformar.m4a";
import Asset_Bridge from "./ES/programs/Asset_Bridge__la_Gestión_de_Activos_Industriales.m4a";
import FlowStable from "./ES/programs/FlowStable™_de_LISPAS_AND_CO__Estabilidad_y_Predictibilidad_para_la_Mejora_Continua.m4a";
import Gestion_del_Cambio from "./ES/programs/Gestión_del_Cambio™.m4a";
import KAIZEN_ACTION from "./ES/programs/KAIZEN_ACTION™__Desbloqueando_Problemas_Complejos_y_Multiplicando_Valor_con_Colaboración_Transversal.m4a";
import LeanBridge from "./ES/programs/LeanBridge™__El_Puente_a_la_Excelencia_Operacional_y_la_Cultura_Lean.m4a";
import WasteZero from "./ES/programs/Programa_WasteZero™_y_los_8_Desperdicios.m4a";
import ProjectFocus from "./ES/programs/ProjectFocus™__De_la_Estrategia_a_Proyectos_que_Impulsan_tu_Negocio.m4a";
import StratBridge from "./ES/programs/StratBridge_y_Hoshin_Kanri__De_la_Visión_a_la_Acción_con_KPIs_Reales.m4a";

export const podcasts: Podcast[] = [
  // Case Studies
  {
    title: "Buscar sinergias entre áreas usando KAIZEN",
    audioSpanish: Buscar_sinergias_entre_areas_usando_KAIZEN,
    audioEnglish: Buscar_sinergias_entre_areas_usando_KAIZEN,
    audioPortuguese: Buscar_sinergias_entre_areas_usando_KAIZEN,
    category: "caseStudies",
  },
  {
    title: "Creando valor con las mediciones",
    audioSpanish: Creando_valor_con_las_mediciones,
    audioEnglish: Creando_valor_con_las_mediciones,
    audioPortuguese: Creando_valor_con_las_mediciones,
    category: "caseStudies",
  },
  {
    title: "El Secreto del Balance de Masa en Base Seca para Destapar Millones en la Agroindustria",
    audioSpanish: El_Secreto_del_Balance_de_Masa,
    audioEnglish: El_Secreto_del_Balance_de_Masa,
    audioPortuguese: El_Secreto_del_Balance_de_Masa,
    category: "caseStudies",
  },
  {
    title: "Producción Estable",
    description: "La Curva Secreta que Supera el 'Más Rápido'",
    audioSpanish: Produccion_Estable,
    audioEnglish: Produccion_Estable,
    audioPortuguese: Produccion_Estable,
    category: "caseStudies",
  },
  {
    title: "Rentabilidad Agroindustrial y más allá",
    audioSpanish: Rentabilidad_Agroindustrial,
    audioEnglish: Rentabilidad_Agroindustrial,
    audioPortuguese: Rentabilidad_Agroindustrial,
    category: "caseStudies",
  },
  // Programs
  {
    title: "5S Plus",
    description: "Orden y Disciplina para Transformar",
    audioSpanish: FiveS_Plus,
    audioEnglish: FiveS_Plus,
    audioPortuguese: FiveS_Plus,
    category: "programs",
  },
  {
    title: "Asset Bridge",
    description: "La Gestión de Activos Industriales",
    audioSpanish: Asset_Bridge,
    audioEnglish: Asset_Bridge,
    audioPortuguese: Asset_Bridge,
    category: "programs",
  },
  {
    title: "FlowStable™",
    description: "Estabilidad y Predictibilidad para la Mejora Continua",
    audioSpanish: FlowStable,
    audioEnglish: FlowStable,
    audioPortuguese: FlowStable,
    category: "programs",
  },
  {
    title: "Gestión del Cambio™",
    audioSpanish: Gestion_del_Cambio,
    audioEnglish: Gestion_del_Cambio,
    audioPortuguese: Gestion_del_Cambio,
    category: "programs",
  },
  {
    title: "KAIZEN ACTION™",
    description:
      "Desbloqueando Problemas Complejos y Multiplicando Valor con Colaboración Transversal",
    audioSpanish: KAIZEN_ACTION,
    audioEnglish: KAIZEN_ACTION,
    audioPortuguese: KAIZEN_ACTION,
    category: "programs",
  },
  {
    title: "LeanBridge™",
    description: "El Puente a la Excelencia Operacional y la Cultura Lean",
    audioSpanish: LeanBridge,
    audioEnglish: LeanBridge,
    audioPortuguese: LeanBridge,
    category: "programs",
  },
  {
    title: "WasteZero™",
    description: "Los 8 Desperdicios",
    audioSpanish: WasteZero,
    audioEnglish: WasteZero,
    audioPortuguese: WasteZero,
    category: "programs",
  },
  {
    title: "ProjectFocus™",
    description: "De la Estrategia a Proyectos que Impulsan tu Negocio",
    audioSpanish: ProjectFocus,
    audioEnglish: ProjectFocus,
    audioPortuguese: ProjectFocus,
    category: "programs",
  },
  {
    title: "StratBridge y Hoshin Kanri",
    description: "De la Visión a la Acción con KPIs Reales",
    audioSpanish: StratBridge,
    audioEnglish: StratBridge,
    audioPortuguese: StratBridge,
    category: "programs",
  },
];
