import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import SEOHead from "./components/SEOHead";
import StructuredData from "./components/StructuredData";
import HomePage from "./pages/HomePage";
import WasteZeroPage from "./pages/WasteZeroPage";
import AboutUsPage from "./pages/AboutUsPage";
import FiveSPlusPage from "./pages/FiveSPlusPage";
import FlowStablePage from "./pages/FlowStablePage";
import LeanBridgePage from "./pages/LeanBridgePage";
import KaizenActionPage from "./pages/KaizenActionPage";
import LeanEnterpriseTransformationPage from "./pages/LeanEnterpriseTransformationPage";
import StratBridgePage from "./pages/StratBridgePage";
import ProjectFocusPage from "./pages/ProjectFocusPage";
import ChangeBridgePage from "./pages/ChangeBridgePage";
import DecisionesEstadisticasPage from "./pages/DecisionesEstadisticasPage";
import OpsBridgePage from "./pages/OpsBridgePage";
import PeopleFirstPage from "./pages/PeopleFirstPage";
import AssetControlBridgePage from "./pages/AssetControlBridgePage";
import AutopsPage from "./pages/AutopsPage";
import SafeProcessPage from "./pages/SafeProcessPage";
import MeasureBridgePage from "./pages/MeasureBridgePage";
import ProcessDesignBridgePage from "./pages/ProcessDesignBridgePage";

import { useLanguage } from "./contexts/LanguageContext";
import { Language } from "./types";

// Mapas multilingües
const titleMap: Record<string, Record<Language, string>> = {
  "/": {
    es: "LYSPAS & CO - Consultoría Lean y Mejora Continua | Líderes en Argentina",
    en: "LYSPAS & CO - Lean Consulting & Continuous Improvement | Leaders in Argentina",
    pt: "LYSPAS & CO - Consultoria Lean e Melhoria Contínua | Líderes na Argentina",
  },
  "/wastezero": {
    es: "WasteZero™ - Eliminación de Desperdicios Lean | LYSPAS & CO",
    en: "WasteZero™ - Lean Waste Elimination | LYSPAS & CO",
    pt: "WasteZero™ - Eliminação de Desperdícios Lean | LYSPAS & CO",
  },
  "/sobre-nosotros": {
    es: "Sobre Nosotros - Expertos en Mejora Continua | LYSPAS & CO",
    en: "About Us - Continuous Improvement Experts | LYSPAS & CO",
    pt: "Sobre Nós - Especialistas em Melhoria Contínua | LYSPAS & CO",
  },
  "/5splus": {
    es: "5S Plus™ - Orden y Limpieza Industrial | LYSPAS & CO",
    en: "5S Plus™ - Industrial Order & Cleanliness | LYSPAS & CO",
    pt: "5S Plus™ - Ordem e Limpeza Industrial | LYSPAS & CO",
  },
  "/flowstable": {
    es: "FlowStable™ - Estabilización de Procesos | LYSPAS & CO",
    en: "FlowStable™ - Process Stabilization | LYSPAS & CO",
    pt: "FlowStable™ - Estabilização de Processos | LYSPAS & CO",
  },
  "/leanbridge": {
    es: "LeanBridge™ - Transformación Lean Integral | LYSPAS & CO",
    en: "LeanBridge™ - Integral Lean Transformation | LYSPAS & CO",
    pt: "LeanBridge™ - Transformação Lean Integral | LYSPAS & CO",
  },
  "/kaizen-action": {
    es: "Kaizen Action™ - Eventos de Mejora Continua | LYSPAS & CO",
    en: "Kaizen Action™ - Continuous Improvement Events | LYSPAS & CO",
    pt: "Kaizen Action™ - Eventos de Melhoria Contínua | LYSPAS & CO",
  },
  "/lean-enterprise-transformation": {
    es: "Lean Enterprise Transformation™ - Transformación Empresarial | LYSPAS & CO",
    en: "Lean Enterprise Transformation™ - Business Transformation | LYSPAS & CO",
    pt: "Lean Enterprise Transformation™ - Transformação Empresarial | LYSPAS & CO",
  },
  "/stratbridge": {
    es: "StratBridge™ - Planificación Estratégica Hoshin Kanri | LYSPAS & CO",
    en: "StratBridge™ - Hoshin Kanri Strategic Planning | LYSPAS & CO",
    pt: "StratBridge™ - Planejamento Estratégico Hoshin Kanri | LYSPAS & CO",
  },
  "/projectfocus": {
    es: "ProjectFocus™ - Selección Estratégica de Proyectos | LYSPAS & CO",
    en: "ProjectFocus™ - Strategic Project Selection | LYSPAS & CO",
    pt: "ProjectFocus™ - Seleção Estratégica de Projetos | LYSPAS & CO",
  },
  "/change-bridge": {
    es: "Change Bridge™ - Gestión del Cambio Organizacional | LYSPAS & CO",
    en: "Change Bridge™ - Organizational Change Management | LYSPAS & CO",
    pt: "Change Bridge™ - Gestão da Mudança Organizacional | LYSPAS & CO",
  },
  "/decisiones-estadisticas": {
    es: "Decisiones Gerenciales Basadas en Estadísticas™ - Six Sigma | LYSPAS & CO",
    en: "Managerial Decisions Based on Statistics™ - Six Sigma | LYSPAS & CO",
    pt: "Decisões Gerenciais Baseadas em Estatísticas™ - Six Sigma | LYSPAS & CO",
  },
  "/ops-bridge": {
    es: "OpsBridge™ - Sistemas World Class | LYSPAS & CO",
    en: "OpsBridge™ - World Class Systems | LYSPAS & CO",
    pt: "OpsBridge™ - Sistemas World Class | LYSPAS & CO",
  },
  "/people-first": {
    es: "People First™ - Desarrollo Organizacional | LYSPAS & CO",
    en: "People First™ - Organizational Development | LYSPAS & CO",
    pt: "People First™ - Desenvolvimento Organizacional | LYSPAS & CO",
  },
  "/asset-control-bridge": {
    es: "Asset Control Bridge™ - Mantenimiento Industrial | LYSPAS & CO",
    en: "Asset Control Bridge™ - Industrial Maintenance | LYSPAS & CO",
    pt: "Asset Control Bridge™ - Manutenção Industrial | LYSPAS & CO",
  },
  "/autops": {
    es: "AUTOPS™ - Automatización de Procesos | LYSPAS & CO",
    en: "AUTOPS™ - Process Automation | LYSPAS & CO",
    pt: "AUTOPS™ - Automação de Processos | LYSPAS & CO",
  },
  "/safe-process": {
    es: "Safe Process™ - Seguridad Industrial | LYSPAS & CO",
    en: "Safe Process™ - Industrial Safety | LYSPAS & CO",
    pt: "Safe Process™ - Segurança Industrial | LYSPAS & CO",
  },
  "/measure-bridge": {
    es: "Measure Bridge™ - Mejora en Laboratorios | LYSPAS & CO",
    en: "Measure Bridge™ - Laboratory Improvement | LYSPAS & CO",
    pt: "Measure Bridge™ - Melhoria em Laboratórios | LYSPAS & CO",
  },
  "/process-design-bridge": {
    es: "PROCESS DESIGN BRIDGE™ | LYSPAS & CO",
    en: "PROCESS DESIGN BRIDGE™ | LYSPAS & CO",
    pt: "PROCESS DESIGN BRIDGE™ | LYSPAS & CO",
  },
};

const descriptionMap: Record<string, Record<Language, string>> = {
  "/": {
    es: "LYSPAS & CO - Líderes en consultoría Lean y mejora continua en Argentina. Programas especializados WasteZero™, FlowStable™, 5S Plus™. Reducimos desperdicios, optimizamos procesos industriales. +13,000 seguidores. Resultados garantizados.",
    en: "LYSPAS & CO - Leaders in Lean consulting and continuous improvement in Argentina. Specialized programs WasteZero™, FlowStable™, 5S Plus™. We reduce waste, optimize industrial processes. 13,000+ followers. Guaranteed results.",
    pt: "LYSPAS & CO - Líderes em consultoria Lean e melhoria contínua na Argentina. Programas especializados WasteZero™, FlowStable™, 5S Plus™. Reduzimos desperdícios, otimizamos processos industriais. +13.000 seguidores. Resultados garantidos.",
  },
  "/wastezero": {
    es: "WasteZero™ - Programa Lean para identificar y eliminar los 8 desperdicios industriales. Metodología DMAIC, formación práctica, resultados en 6 meses. Consultoría especializada LYSPAS & CO.",
    en: "WasteZero™ - Lean program to identify and eliminate the 8 industrial wastes. DMAIC methodology, practical training, results in 6 months. Specialized consulting by LYSPAS & CO.",
    pt: "WasteZero™ - Programa Lean para identificar e eliminar os 8 desperdícios industriais. Metodologia DMAIC, treinamento prático, resultados em 6 meses. Consultoria especializada LYSPAS & CO.",
  },
  "/sobre-nosotros": {
    es: "Conoce LYSPAS & CO - Expertos en mejora continua con sede en Rosario, Argentina. Misión, visión, valores y compromiso con la transformación empresarial Lean. +13,000 seguidores en LinkedIn.",
    en: "Meet LYSPAS & CO - Experts in continuous improvement based in Rosario, Argentina. Mission, vision, values and commitment to Lean business transformation. 13,000+ LinkedIn followers.",
    pt: "Conheça a LYSPAS & CO - Especialistas em melhoria contínua com sede em Rosário, Argentina. Missão, visão, valores e compromisso com a transformação empresarial Lean. +13.000 seguidores no LinkedIn.",
  },
  "/5splus": {
    es: "5S Plus™ - Programa de orden, limpieza y estandarización de espacios de trabajo. Metodología japonesa adaptada, implementación en 5 meses. Cultura operativa sólida.",
    en: "5S Plus™ - Program for order, cleanliness and standardization of workspaces. Adapted Japanese methodology, implementation in 5 months. Solid operational culture.",
    pt: "5S Plus™ - Programa de ordem, limpeza e padronização de espaços de trabalho. Metodologia japonesa adaptada, implementação em 5 meses. Cultura operacional sólida.",
  },
  "/flowstable": {
    es: "FlowStable™ - Estabilización de procesos industriales sin inversión en activos. Secuencia de Mejora Diaria™, reducción de variabilidad, mayor productividad en 7 meses.",
    en: "FlowStable™ - Stabilization of industrial processes without asset investment. Daily Improvement Sequence™, reduced variability, higher productivity in 7 months.",
    pt: "FlowStable™ - Estabilização de processos industriais sem investimento em ativos. Sequência de Melhoria Diária™, redução de variabilidade, maior produtividade em 7 meses.",
  },
  "/leanbridge": {
    es: "LeanBridge™ - Transformación Lean integral. Puente entre operación diaria y estrategia empresarial. Empoderamiento de equipos, cultura de mejora continua en 8 meses.",
    en: "LeanBridge™ - Integral Lean transformation. Bridge between daily operation and business strategy. Team empowerment, continuous improvement culture in 8 months.",
    pt: "LeanBridge™ - Transformação Lean integral. Ponte entre operação diária e estratégia empresarial. Empoderamento de equipes, cultura de melhoria contínua em 8 meses.",
  },
  "/kaizen-action": {
    es: "Kaizen Action™ - Eventos de mejora continua con metodología DMAIC. Resolución de problemas complejos, colaboración interdisciplinaria, resultados medibles inmediatos.",
    en: "Kaizen Action™ - Continuous improvement events with DMAIC methodology. Complex problem solving, interdisciplinary collaboration, immediate measurable results.",
    pt: "Kaizen Action™ - Eventos de melhoria contínua com metodologia DMAIC. Resolução de problemas complexos, colaboração interdisciplinar, resultados mensuráveis imediatos.",
  },
  "/lean-enterprise-transformation": {
    es: "Lean Enterprise Transformation™ - Sistema integral de gestión basado en mejora continua. Transformación completa: cultura, procesos, liderazgo en 12 meses.",
    en: "Lean Enterprise Transformation™ - Comprehensive management system based on continuous improvement. Complete transformation: culture, processes, leadership in 12 months.",
    pt: "Lean Enterprise Transformation™ - Sistema de gestão integral baseado em melhoria contínua. Transformação completa: cultura, processos, liderança em 12 meses.",
  },
  "/stratbridge": {
    es: "StratBridge™ - Planificación estratégica Hoshin Kanri. Alineación de visión, objetivos y ejecución diaria. Matriz X-Matrix, KPIs estratégicos en 7 meses.",
    en: "StratBridge™ - Hoshin Kanri strategic planning. Alignment of vision, objectives and daily execution. X-Matrix, strategic KPIs in 7 months.",
    pt: "StratBridge™ - Planejamento estratégico Hoshin Kanri. Alinhamento de visão, objetivos e execução diária. Matriz X-Matrix, KPIs estratégicos em 7 meses.",
  },
  "/projectfocus": {
    es: "ProjectFocus™ - Selección estratégica de proyectos de inversión. Metodología colaborativa, priorización por valor, alineación estratégica. Extensión de StratBridge™.",
    en: "ProjectFocus™ - Strategic selection of investment projects. Collaborative methodology, value-based prioritization, strategic alignment. Extension of StratBridge™.",
    pt: "ProjectFocus™ - Seleção estratégica de projetos de investimento. Metodologia colaborativa, priorização por valor, alinhamento estratégico. Extensão do StratBridge™.",
  },
  "/change-bridge": {
    es: "Change Bridge™ - Gestión del cambio organizacional. Procesos estructurados, minimización de resistencias, adopción sostenible de transformaciones en 8-12 semanas.",
    en: "Change Bridge™ - Organizational change management. Structured processes, minimized resistance, sustainable adoption of transformations in 8-12 weeks.",
    pt: "Change Bridge™ - Gestão da mudança organizacional. Processos estruturados, minimização de resistências, adoção sustentável de transformações em 8-12 semanas.",
  },
  "/decisiones-estadisticas": {
    es: "Decisiones Gerenciales Basadas en Estadísticas™ - Formación en análisis estadístico aplicado. Herramientas Excel, Minitab. Certificación Green Belt estándar.",
    en: "Managerial Decisions Based on Statistics™ - Training in applied statistical analysis. Excel, Minitab tools. Standard Green Belt certification.",
    pt: "Decisões Gerenciais Baseadas em Estatísticas™ - Formação em análise estatística aplicada. Ferramentas Excel, Minitab. Certificação Green Belt padrão.",
  },
  "/ops-bridge": {
    es: "OpsBridge™ - Sistemas World Class de gestión operativa. Estandarización, control, eficiencia. Transformación integral en 14 meses hacia excelencia operacional.",
    en: "OpsBridge™ - World Class operational management systems. Standardization, control, efficiency. Integral transformation in 14 months towards operational excellence.",
    pt: "OpsBridge™ - Sistemas World Class de gestão operacional. Padronização, controle, eficiência. Transformação integral em 14 meses para excelência operacional.",
  },
  "/people-first": {
    es: "People First™ - Desarrollo organizacional centrado en personas. Coaching, feedback, planes de formación. Alineación de habilidades con objetivos empresariales.",
    en: "People First™ - People-centered organizational development. Coaching, feedback, training plans. Alignment of skills with business objectives.",
    pt: "People First™ - Desenvolvimento organizacional centrado em pessoas. Coaching, feedback, planos de formação. Alinhamento de habilidades com objetivos empresariais.",
  },
  "/asset-control-bridge": {
    es: "Asset Control Bridge™ - Mantenimiento industrial avanzado. Gestión de activos, disponibilidad de equipos, reducción de paradas no planificadas.",
    en: "Asset Control Bridge™ - Advanced industrial maintenance. Asset management, equipment availability, reduction of unplanned downtime.",
    pt: "Asset Control Bridge™ - Manutenção industrial avançada. Gestão de ativos, disponibilidade de equipamentos, redução de paradas não planejadas.",
  },
  "/autops": {
    es: "AUTOPS™ - Automatización de procesos industriales. Operación automática, control de variables, optimización de líneas de producción.",
    en: "AUTOPS™ - Industrial process automation. Automatic operation, variable control, production line optimization.",
    pt: "AUTOPS™ - Automação de processos industriais. Operação automática, controle de variáveis, otimização de linhas de produção.",
  },
  "/safe-process": {
    es: "Safe Process™ - Gestión de seguridad industrial. Prevención de riesgos, cultura de seguridad, cumplimiento normativo en procesos industriales.",
    en: "Safe Process™ - Industrial safety management. Risk prevention, safety culture, regulatory compliance in industrial processes.",
    pt: "Safe Process™ - Gestão de segurança industrial. Prevenção de riscos, cultura de segurança, conformidade regulatória em processos industriais.",
  },
  "/measure-bridge": {
    es: "Measure Bridge™ - Mejora continua en laboratorios. Precisión analítica, calibración de equipos, control de calidad en análisis de laboratorio.",
    en: "Measure Bridge™ - Continuous improvement in laboratories. Analytical precision, equipment calibration, quality control in laboratory analysis.",
    pt: "Measure Bridge™ - Melhoria contínua em laboratórios. Precisão analítica, calibração de equipamentos, controle de qualidade em análises laboratoriais.",
  },
  "/process-design-bridge": {
    es: "PROCESS DESIGN BRIDGE™ - Diseño y optimización de procesos industriales. Consultoría especializada en ingeniería de procesos y mejora continua.",
    en: "PROCESS DESIGN BRIDGE™ - Design and optimization of industrial processes. Specialized consulting in process engineering and continuous improvement.",
    pt: "PROCESS DESIGN BRIDGE™ - Design e otimização de processos industriais. Consultoria especializada em engenharia de processos e melhoria contínua.",
  },
};

const keywordsMap: Record<string, Record<Language, string>> = {
  "/": {
    es: "consultoría lean, mejora continua, LYSPAS, reducción desperdicios, optimización procesos, consultor lean Argentina, Rosario Santa Fe, eficiencia industrial, productividad, transformación lean",
    en: "lean consulting, continuous improvement, LYSPAS, waste reduction, process optimization, lean consultant Argentina, Rosario Santa Fe, industrial efficiency, productivity, lean transformation",
    pt: "consultoria lean, melhoria contínua, LYSPAS, redução de desperdícios, otimização de processos, consultor lean Argentina, Rosario Santa Fe, eficiência industrial, produtividade, transformação lean",
  },
  "/wastezero": {
    es: "WasteZero, eliminación desperdicios, 8 desperdicios lean, metodología DMAIC, consultoría lean, reducción costos operativos, eficiencia procesos, mejora continua",
    en: "WasteZero, waste elimination, 8 lean wastes, DMAIC methodology, lean consulting, operational cost reduction, process efficiency, continuous improvement",
    pt: "WasteZero, eliminação de desperdícios, 8 desperdícios lean, metodologia DMAIC, consultoria lean, redução de custos operacionais, eficiência de processos, melhoria contínua",
  },
  "/sobre-nosotros": {
    es: "LYSPAS & CO, empresa consultoría, mejora continua Argentina, Rosario Santa Fe, misión visión valores, expertos lean, transformación empresarial",
    en: "LYSPAS & CO, consulting company, continuous improvement Argentina, Rosario Santa Fe, mission vision values, lean experts, business transformation",
    pt: "LYSPAS & CO, empresa de consultoria, melhoria contínua Argentina, Rosario Santa Fe, missão visão valores, especialistas lean, transformação empresarial",
  },
  "/5splus": {
    es: "5S Plus, orden limpieza industrial, metodología japonesa, estandarización espacios trabajo, cultura operativa, organización industrial",
    en: "5S Plus, industrial order cleanliness, Japanese methodology, workspace standardization, operational culture, industrial organization",
    pt: "5S Plus, ordem limpeza industrial, metodologia japonesa, padronização de espaços de trabalho, cultura operacional, organização industrial",
  },
  "/flowstable": {
    es: "FlowStable, estabilización procesos, secuencia mejora diaria, reducción variabilidad, productividad industrial, control procesos",
    en: "FlowStable, process stabilization, daily improvement sequence, variability reduction, industrial productivity, process control",
    pt: "FlowStable, estabilização de processos, sequência de melhoria diária, redução de variabilidade, produtividade industrial, controle de processos",
  },
  "/leanbridge": {
    es: "LeanBridge, transformación lean, puente operativo estratégico, empoderamiento equipos, cultura mejora continua, excelencia operacional",
    en: "LeanBridge, lean transformation, operational strategic bridge, team empowerment, continuous improvement culture, operational excellence",
    pt: "LeanBridge, transformação lean, ponte operacional estratégica, empoderamento de equipes, cultura de melhoria contínua, excelência operacional",
  },
  "/kaizen-action": {
    es: "Kaizen Action, eventos kaizen, metodología DMAIC, resolución problemas, colaboración interdisciplinaria, mejora continua",
    en: "Kaizen Action, kaizen events, DMAIC methodology, problem solving, interdisciplinary collaboration, continuous improvement",
    pt: "Kaizen Action, eventos kaizen, metodologia DMAIC, resolução de problemas, colaboração interdisciplinar, melhoria contínua",
  },
  "/lean-enterprise-transformation": {
    es: "Lean Enterprise Transformation, transformación empresarial, sistema gestión integral, cultura lean, mejora continua organizacional",
    en: "Lean Enterprise Transformation, business transformation, integral management system, lean culture, organizational continuous improvement",
    pt: "Lean Enterprise Transformation, transformação empresarial, sistema de gestão integral, cultura lean, melhoria contínua organizacional",
  },
  "/stratbridge": {
    es: "StratBridge, planificación estratégica, Hoshin Kanri, alineación estratégica, matriz X-Matrix, KPIs estratégicos",
    en: "StratBridge, strategic planning, Hoshin Kanri, strategic alignment, X-Matrix, strategic KPIs",
    pt: "StratBridge, planejamento estratégico, Hoshin Kanri, alinhamento estratégico, matriz X-Matrix, KPIs estratégicos",
  },
  "/projectfocus": {
    es: "ProjectFocus, selección proyectos, priorización estratégica, gestión portafolio, decisiones inversión, alineación estratégica",
    en: "ProjectFocus, project selection, strategic prioritization, portfolio management, investment decisions, strategic alignment",
    pt: "ProjectFocus, seleção de projetos, priorização estratégica, gestão de portfólio, decisões de investimento, alinhamento estratégico",
  },
  "/change-bridge": {
    es: "Change Bridge, gestión cambio, transformación organizacional, resistencia cambio, adopción cambios, gestión transiciones",
    en: "Change Bridge, change management, organizational transformation, change resistance, change adoption, transition management",
    pt: "Change Bridge, gestão de mudança, transformação organizacional, resistência à mudança, adoção de mudanças, gestão de transições",
  },
  "/decisiones-estadisticas": {
    es: "decisiones estadísticas, análisis datos, Six Sigma, Green Belt, estadística aplicada, toma decisiones datos",
    en: "statistical decisions, data analysis, Six Sigma, Green Belt, applied statistics, data-driven decision making",
    pt: "decisões estatísticas, análise de dados, Six Sigma, Green Belt, estatística aplicada, tomada de decisão baseada em dados",
  },
  "/ops-bridge": {
    es: "OpsBridge, sistemas world class, estandarización procesos, excelencia operacional, gestión operativa avanzada",
    en: "OpsBridge, world class systems, process standardization, operational excellence, advanced operational management",
    pt: "OpsBridge, sistemas world class, padronização de processos, excelência operacional, gestão operacional avançada",
  },
  "/people-first": {
    es: "People First, desarrollo organizacional, coaching empresarial, gestión talento, formación equipos, desarrollo competencias",
    en: "People First, organizational development, business coaching, talent management, team training, competency development",
    pt: "People First, desenvolvimento organizacional, coaching empresarial, gestão de talentos, treinamento de equipes, desenvolvimento de competências",
  },
  "/process-design-bridge": {
    es: "Process Design Bridge, diseño de procesos, optimización industrial, ingeniería de procesos, consultoría, mejora continua",
    en: "Process Design Bridge, process design, industrial optimization, process engineering, consulting, continuous improvement",
    pt: "Process Design Bridge, design de processos, otimização industrial, engenharia de processos, consultoria, melhoria contínua",
  },
};

function TitleUpdater() {
  const { pathname } = useLocation();
  const { currentLanguage } = useLanguage();
  React.useEffect(() => {
    const title =
      titleMap[pathname]?.[currentLanguage] ??
      titleMap["/"]?.[currentLanguage] ??
      "LYSPAS & CO.";
    document.title = title;
  }, [pathname, currentLanguage]);
  return null;
}

function SEOUpdater() {
  const { pathname } = useLocation();
  const { currentLanguage } = useLanguage();

  const title =
    titleMap[pathname]?.[currentLanguage] ??
    titleMap["/"]?.[currentLanguage] ??
    "LYSPAS & CO.";
  const description =
    descriptionMap[pathname]?.[currentLanguage] ??
    descriptionMap["/"]?.[currentLanguage] ??
    "LYSPAS & CO - Consultoría Lean y mejora continua";
  const keywords =
    keywordsMap[pathname]?.[currentLanguage] ??
    keywordsMap["/"]?.[currentLanguage] ??
    "consultoría lean, mejora continua, LYSPAS";

  return (
    <SEOHead title={title} description={description} keywords={keywords} />
  );
}

function App() {
  return (
    <Router>
      {/* title updater runs on every route change */}
      <TitleUpdater />
      <SEOUpdater />
      <StructuredData />
      <div
        className="min-h-screen"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/wastezero" element={<WasteZeroPage />} />
          <Route path="/sobre-nosotros" element={<AboutUsPage />} />
          <Route path="/5splus" element={<FiveSPlusPage />} />
          <Route path="/flowstable" element={<FlowStablePage />} />
          <Route path="/leanbridge" element={<LeanBridgePage />} />
          <Route path="/kaizen-action" element={<KaizenActionPage />} />
          <Route
            path="/lean-enterprise-transformation"
            element={<LeanEnterpriseTransformationPage />}
          />
          <Route path="/stratbridge" element={<StratBridgePage />} />
          <Route path="/projectfocus" element={<ProjectFocusPage />} />
          <Route path="/change-bridge" element={<ChangeBridgePage />} />
          <Route
            path="/decisiones-estadisticas"
            element={<DecisionesEstadisticasPage />}
          />
          <Route path="/ops-bridge" element={<OpsBridgePage />} />
          <Route path="/people-first" element={<PeopleFirstPage />} />
          <Route
            path="/asset-control-bridge"
            element={<AssetControlBridgePage />}
          />
          <Route path="/autops" element={<AutopsPage />} />
          <Route path="/safe-process" element={<SafeProcessPage />} />
          <Route path="/measure-bridge" element={<MeasureBridgePage />} />
          <Route
            path="/process-design-bridge"
            element={<ProcessDesignBridgePage />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
