import { Language } from "../../types";
import type { Podcast } from "../../types/podcast";

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

/** Helper to create a full trilingual Record when only ES is available so far. */
const trilingual = (es: string, en: string, pt: string): Record<Language, string> => ({
  [Language.SPANISH]: es,
  [Language.ENGLISH]: en,
  [Language.PORTUGUESE]: pt,
});

/** Helper for audio sources. `null` = not available in that language. */
const audioOnlyES = (src: string): Record<Language, string | null> => ({
  [Language.SPANISH]: src,
  [Language.ENGLISH]: null,
  [Language.PORTUGUESE]: null,
});

export const podcasts: Podcast[] = [
  // ── Case Studies ──
  {
    slug: "buscar-sinergias-entre-areas-usando-kaizen",
    episodeNumber: 10,
    title: trilingual(
      "Buscar sinergias entre áreas usando KAIZEN",
      "Finding synergies between areas using KAIZEN",
      "Encontrando sinergias entre áreas usando KAIZEN"
    ),
    description: trilingual("", "", ""),
    category: "caseStudies",
    audio: audioOnlyES(Buscar_sinergias_entre_areas_usando_KAIZEN),
  },
  {
    slug: "creando-valor-con-las-mediciones",
    episodeNumber: 11,
    title: trilingual(
      "Creando valor con las mediciones",
      "Creating value with measurements",
      "Criando valor com as medições"
    ),
    description: trilingual("", "", ""),
    category: "caseStudies",
    audio: audioOnlyES(Creando_valor_con_las_mediciones),
  },
  {
    slug: "el-secreto-del-balance-de-masa",
    episodeNumber: 12,
    title: trilingual(
      "El Secreto del Balance de Masa en Base Seca para Destapar Millones en la Agroindustria",
      "The Secret of Dry Basis Mass Balance to Unlock Millions in Agribusiness",
      "O Segredo do Balanço de Massa em Base Seca para Desbloquear Milhões na Agroindústria"
    ),
    description: trilingual("", "", ""),
    category: "caseStudies",
    audio: audioOnlyES(El_Secreto_del_Balance_de_Masa),
  },
  {
    slug: "produccion-estable",
    episodeNumber: 13,
    title: trilingual(
      "Producción Estable",
      "Stable Production",
      "Produção Estável"
    ),
    description: trilingual(
      "La Curva Secreta que Supera el 'Más Rápido'",
      "The Secret Curve that Beats 'Faster'",
      "A Curva Secreta que Supera o 'Mais Rápido'"
    ),
    category: "caseStudies",
    audio: audioOnlyES(Produccion_Estable),
  },
  {
    slug: "rentabilidad-agroindustrial",
    episodeNumber: 14,
    title: trilingual(
      "Rentabilidad Agroindustrial y más allá",
      "Agribusiness Profitability and Beyond",
      "Rentabilidade Agroindustrial e Além"
    ),
    description: trilingual("", "", ""),
    category: "caseStudies",
    audio: audioOnlyES(Rentabilidad_Agroindustrial),
  },

  // ── Programs ──
  {
    slug: "fives-plus",
    episodeNumber: 1,
    title: trilingual("5S Plus", "5S Plus", "5S Plus"),
    description: trilingual(
      "Orden y Disciplina para Transformar",
      "Order and Discipline to Transform",
      "Ordem e Disciplina para Transformar"
    ),
    category: "programs",
    audio: audioOnlyES(FiveS_Plus),
  },
  {
    slug: "asset-bridge",
    episodeNumber: 2,
    title: trilingual("Asset Bridge", "Asset Bridge", "Asset Bridge"),
    description: trilingual(
      "La Gestión de Activos Industriales",
      "Industrial Asset Management",
      "A Gestão de Ativos Industriais"
    ),
    category: "programs",
    audio: audioOnlyES(Asset_Bridge),
  },
  {
    slug: "flowstable",
    episodeNumber: 3,
    title: trilingual("FlowStable™", "FlowStable™", "FlowStable™"),
    description: trilingual(
      "Estabilidad y Predictibilidad para la Mejora Continua",
      "Stability and Predictability for Continuous Improvement",
      "Estabilidade e Previsibilidade para Melhoria Contínua"
    ),
    category: "programs",
    audio: audioOnlyES(FlowStable),
  },
  {
    slug: "gestion-del-cambio",
    episodeNumber: 4,
    title: trilingual(
      "Gestión del Cambio™",
      "Change Management™",
      "Gestão da Mudança™"
    ),
    description: trilingual("", "", ""),
    category: "programs",
    audio: audioOnlyES(Gestion_del_Cambio),
  },
  {
    slug: "kaizen-action",
    episodeNumber: 5,
    title: trilingual("KAIZEN ACTION™", "KAIZEN ACTION™", "KAIZEN ACTION™"),
    description: trilingual(
      "Desbloqueando Problemas Complejos y Multiplicando Valor con Colaboración Transversal",
      "Unlocking Complex Problems and Multiplying Value with Cross-Functional Collaboration",
      "Desbloqueando Problemas Complexos e Multiplicando Valor com Colaboração Transversal"
    ),
    category: "programs",
    audio: audioOnlyES(KAIZEN_ACTION),
  },
  {
    slug: "leanbridge",
    episodeNumber: 6,
    title: trilingual("LeanBridge™", "LeanBridge™", "LeanBridge™"),
    description: trilingual(
      "El Puente a la Excelencia Operacional y la Cultura Lean",
      "The Bridge to Operational Excellence and Lean Culture",
      "A Ponte para a Excelência Operacional e a Cultura Lean"
    ),
    category: "programs",
    audio: audioOnlyES(LeanBridge),
  },
  {
    slug: "wastezero",
    episodeNumber: 7,
    title: trilingual("WasteZero™", "WasteZero™", "WasteZero™"),
    description: trilingual(
      "Los 8 Desperdicios",
      "The 8 Wastes",
      "Os 8 Desperdícios"
    ),
    category: "programs",
    audio: audioOnlyES(WasteZero),
  },
  {
    slug: "projectfocus",
    episodeNumber: 8,
    title: trilingual("ProjectFocus™", "ProjectFocus™", "ProjectFocus™"),
    description: trilingual(
      "De la Estrategia a Proyectos que Impulsan tu Negocio",
      "From Strategy to Projects that Drive Your Business",
      "Da Estratégia a Projetos que Impulsionam seu Negócio"
    ),
    category: "programs",
    audio: audioOnlyES(ProjectFocus),
  },
  {
    slug: "stratbridge",
    episodeNumber: 9,
    title: trilingual(
      "StratBridge y Hoshin Kanri",
      "StratBridge and Hoshin Kanri",
      "StratBridge e Hoshin Kanri"
    ),
    description: trilingual(
      "De la Visión a la Acción con KPIs Reales",
      "From Vision to Action with Real KPIs",
      "Da Visão à Ação com KPIs Reais"
    ),
    category: "programs",
    audio: audioOnlyES(StratBridge),
  },
];