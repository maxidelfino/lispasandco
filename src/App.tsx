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
import usePageView from "./hooks/usePageView";

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
    es: "PROCESS DESIGN BRIDGE™ - Diseño de Procesos | LYSPAS & CO",
    en: "PROCESS DESIGN BRIDGE™ - Process Design | LYSPAS & CO",
    pt: "PROCESS DESIGN BRIDGE™ - Design de Processos | LYSPAS & CO",
  },
};

const descriptionMap: Record<string, Record<Language, string>> = {
  "/": {
    es: "LYSPAS & CO - Líderes en consultoría Lean y mejora continua en Argentina. Programas especializados WasteZero™, FlowStable™, 5S Plus™ para reducir desperdicios y optimizar procesos industriales. ¡Contáctanos y transforma tu empresa!",
    en: "LYSPAS & CO - Leaders in Lean consulting and continuous improvement in Argentina. Specialized programs WasteZero™, FlowStable™, 5S Plus™. We reduce waste, optimize industrial processes. 13,000+ followers. Guaranteed results.",
    pt: "LYSPAS & CO - Líderes em consultoria Lean e melhoria contínua na Argentina. Programas especializados WasteZero™, FlowStable™, 5S Plus™. Reduzimos desperdícios, otimizamos processos industriais. +13.000 seguidores. Resultados garantidos.",
  },
  "/wastezero": {
    es: "WasteZero™ - Programa Lean para identificar y eliminar los 8 desperdicios industriales. Con la metodología DMAIC, obtendrás resultados medibles en solo 6 meses. ¡Aprende más!",
    en: "WasteZero™ - Lean program to identify and eliminate the 8 industrial wastes. DMAIC methodology, practical training, results in 6 months. Specialized consulting by LYSPAS & CO.",
    pt: "WasteZero™ - Programa Lean para identificar e eliminar os 8 desperdícios industriais. Metodologia DMAIC, treinamento prático, resultados em 6 meses. Consultoria especializada LYSPAS & CO.",
  },
  "/sobre-nosotros": {
    es: "Conoce a LYSPAS & CO: expertos en mejora continua con sede en Rosario, Argentina. Descubre nuestra misión, visión y por qué somos los socios ideales para tu transformación empresarial Lean. ¡Síguenos en LinkedIn!",
    en: "Meet LYSPAS & CO - Experts in continuous improvement based in Rosario, Argentina. Mission, vision, values and commitment to Lean business transformation. 13,000+ LinkedIn followers.",
    pt: "Conheça a LYSPAS & CO - Especialistas em melhoria contínua com sede em Rosário, Argentina. Missão, visão, valores e compromisso com a transformação empresarial Lean. +13.000 seguidores no LinkedIn.",
  },
  "/5splus": {
    es: "5S Plus™ - Transforma tu espacio de trabajo con este programa de orden, limpieza y estandarización basado en la metodología japonesa 5S. ¡Implementa una cultura operativa sólida y duradera!",
    en: "5S Plus™ - Program for order, cleanliness and standardization of workspaces. Adapted Japanese methodology, implementation in 5 months. Solid operational culture.",
    pt: "5S Plus™ - Programa de ordem, limpeza e padronização de espaços de trabalho. Metodologia japonesa adaptada, implementação em 5 meses. Cultura operacional sólida.",
  },
  "/flowstable": {
    es: "FlowStable™ - Estabiliza tus procesos industriales sin grandes inversiones. Con nuestra Secuencia de Mejora Diaria™, reducirás la variabilidad y aumentarás tu productividad en 7 meses. ¡Descubre cómo!",
    en: "FlowStable™ - Stabilization of industrial processes without asset investment. Daily Improvement Sequence™, reduced variability, higher productivity in 7 months.",
    pt: "FlowStable™ - Estabilização de processos industriais sem investimento em ativos. Sequência de Melhoria Diária™, redução de variabilidade, maior produtividade em 7 meses.",
  },
  "/leanbridge": {
    es: "LeanBridge™ - El programa de transformación Lean que une la operación diaria con la estrategia empresarial. Empodera a tus equipos y crea una cultura de mejora continua en tu organización en 8 meses.",
    en: "LeanBridge™ - Integral Lean transformation. Bridge between daily operation and business strategy. Team empowerment, continuous improvement culture in 8 months.",
    pt: "LeanBridge™ - Transformação Lean integral. Ponte entre operação diária e estratégia empresarial. Empoderamento de equipes, cultura de melhoria contínua em 8 meses.",
  },
  "/kaizen-action": {
    es: "Kaizen Action™ - Eventos de mejora continua para resolver problemas complejos con nuestra metodología DMAIC. Impulsa la colaboración interdisciplinaria y obtén resultados medibles de inmediato. ¡Contáctanos!",
    en: "Kaizen Action™ - Continuous improvement events with DMAIC methodology. Complex problem solving, interdisciplinary collaboration, immediate measurable results.",
    pt: "Kaizen Action™ - Eventos de melhoria contínua com metodologia DMAIC. Resolução de problemas complexos, colaboração interdisciplinar, resultados mensuráveis imediatos.",
  },
  "/lean-enterprise-transformation": {
    es: "Lean Enterprise Transformation™ - Nuestro sistema integral de gestión basado en mejora continua. Transforma tu cultura, procesos y liderazgo en solo 12 meses hacia la excelencia. ¡Conoce el camino!",
    en: "Lean Enterprise Transformation™ - Comprehensive management system based on continuous improvement. Complete transformation: culture, processes, leadership in 12 months.",
    pt: "Lean Enterprise Transformation™ - Sistema de gestão integral baseado em melhoria contínua. Transformação completa: cultura, processos, liderança em 12 meses.",
  },
  "/stratbridge": {
    es: "StratBridge™ - Planificación estratégica con la metodología Hoshin Kanri. Alinea tu visión con los objetivos y la ejecución diaria. Usa nuestra X-Matrix para definir KPIs estratégicos en 7 meses. ¡Empieza hoy!",
    en: "StratBridge™ - Hoshin Kanri strategic planning. Alignment of vision, objectives and daily execution. X-Matrix, strategic KPIs in 7 months.",
    pt: "StratBridge™ - Planejamento Estratégico Hoshin Kanri. Alinhamento de visão, objetivos e execução diária. Matriz X-Matrix, KPIs estratégicos em 7 meses.",
  },
  "/projectfocus": {
    es: "ProjectFocus™ - Selección estratégica de proyectos de inversión. Usa nuestra metodología colaborativa para priorizar por valor y alinear tus iniciativas con la estrategia empresarial. ¡Mejora tu toma de decisiones!",
    en: "ProjectFocus™ - Strategic selection of investment projects. Collaborative methodology, value-based prioritization, strategic alignment. Extension of StratBridge™.",
    pt: "ProjectFocus™ - Seleção estratégica de projetos de investimento. Metodologia colaborativa, priorização por valor, alinhamento estratégico. Extensão do StratBridge™.",
  },
  "/change-bridge": {
    es: "Change Bridge™ - Gestión del cambio organizacional con procesos estructurados. Minimiza la resistencia y asegura la adopción sostenible de las transformaciones en 8-12 semanas. ¡Asegura el éxito!",
    en: "Change Bridge™ - Organizational change management. Structured processes, minimized resistance, sustainable adoption of transformations in 8-12 weeks.",
    pt: "Change Bridge™ - Gestão da mudança organizacional. Processos estruturados, minimização de resistências, adoção sustentável de transformações em 8-12 semanas.",
  },
  "/decisiones-estadisticas": {
    es: "Decisiones Gerenciales Basadas en Estadísticas™ - Capacitación en análisis estadístico aplicado con herramientas como Excel y Minitab. Obtén tu certificación Green Belt y toma decisiones con datos.",
    en: "Managerial Decisions Based on Statistics™ - Training in applied statistical analysis. Excel, Minitab tools. Standard Green Belt certification.",
    pt: "Decisões Gerenciais Baseadas em Estatísticas™ - Formação em análise estatística aplicada. Ferramentas Excel, Minitab. Certificação Green Belt padrão.",
  },
  "/ops-bridge": {
    es: "OpsBridge™ - Implementa sistemas World Class para la gestión operativa. Estandariza, controla y aumenta la eficiencia. Inicia una transformación integral en 14 meses hacia la excelencia operacional. ¡Contáctanos!",
    en: "OpsBridge™ - World Class operational management systems. Standardization, control, efficiency. Integral transformation in 14 months towards operational excellence.",
    pt: "OpsBridge™ - Sistemas World Class de gestão operacional. Padronização, controle, eficiência. Transformação integral em 14 meses para excelência operacional.",
  },
  "/people-first": {
    es: "People First™ - Desarrollo organizacional centrado en las personas. Creamos planes de coaching, feedback y formación para alinear las habilidades de tu equipo con los objetivos empresariales. ¡Invierte en tu talento!",
    en: "People First™ - People-centered organizational development. Coaching, feedback, training plans. Alignment of skills with business objectives.",
    pt: "People First™ - Desenvolvimento organizacional centrado em pessoas. Coaching, feedback, planos de formação. Alinhamento de habilidades com objetivos empresariais.",
  },
  "/asset-control-bridge": {
    es: "Asset Control Bridge™ - Mantenimiento industrial avanzado para maximizar la disponibilidad de tus equipos. Reduce paradas no planificadas y optimiza la gestión de tus activos. ¡Mejora tu OEE!",
    en: "Asset Control Bridge™ - Advanced industrial maintenance. Asset management, equipment availability, reduction of unplanned downtime.",
    pt: "Asset Control Bridge™ - Manutenção industrial avançada. Gestão de ativos, disponibilidade de equipamentos, redução de paradas não planejadas.",
  },
  "/autops": {
    es: "AUTOPS™ - Automatización de procesos industriales. Implementa operaciones automáticas, controla variables y optimiza tus líneas de producción para mayor eficiencia y calidad.",
    en: "AUTOPS™ - Industrial process automation. Automatic operation, variable control, production line optimization.",
    pt: "AUTOPS™ - Automação de processos industriais. Operação automática, controle de variáveis, otimização de linhas de produção.",
  },
  "/safe-process": {
    es: "Safe Process™ - Gestión de seguridad industrial y prevención de riesgos. Fomenta una cultura de seguridad y asegura el cumplimiento normativo en todos tus procesos industriales. ¡Prioriza la seguridad!",
    en: "Safe Process™ - Industrial safety management. Risk prevention, safety culture, regulatory compliance in industrial processes.",
    pt: "Safe Process™ - Gestão de segurança industrial. Prevenção de riscos, cultura de segurança, conformidade regulatória em processos industriais.",
  },
  "/measure-bridge": {
    es: "Measure Bridge™ - Mejora continua para laboratorios. Asegura la precisión analítica, la calibración de equipos y el control de calidad en tus análisis de laboratorio. ¡Consigue resultados confiables!",
    en: "Measure Bridge™ - Continuous improvement in laboratories. Analytical precision, equipment calibration, quality control in laboratory analysis.",
    pt: "Measure Bridge™ - Melhoria contínua em laboratórios. Precisão analítica, calibração de equipamentos, controle de qualidade em análises laboratoriais.",
  },
  "/process-design-bridge": {
    es: "PROCESS DESIGN BRIDGE™ - Diseño y optimización de procesos industriales. Somos consultores especializados en ingeniería de procesos y mejora continua. ¡Diseña procesos eficientes desde cero!",
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
    es: "Lean Enterprise Transformation, sistema gestión, mejora continua, transformación cultural, procesos empresariales, liderazgo",
    en: "Lean Enterprise Transformation, management system, continuous improvement, cultural transformation, business processes, leadership",
    pt: "Lean Enterprise Transformation, sistema de gestão, melhoria contínua, transformação cultural, processos empresariais, liderança",
  },
  "/stratbridge": {
    es: "StratBridge, planificación estratégica, Hoshin Kanri, alineación estratégica, X-Matrix, KPIs, objetivos empresariales",
    en: "StratBridge, strategic planning, Hoshin Kanri, strategic alignment, X-Matrix, KPIs, business objectives",
    pt: "StratBridge, planejamento estratégico, Hoshin Kanri, alinhamento estratégico, X-Matrix, KPIs, objetivos empresariais",
  },
  "/projectfocus": {
    es: "ProjectFocus, selección proyectos, priorización valor, alineación estratégica, gestión portafolio, proyectos inversión",
    en: "ProjectFocus, project selection, value prioritization, strategic alignment, portfolio management, investment projects",
    pt: "ProjectFocus, seleção de projetos, priorização de valor, alinhamento estratégico, gestão de portfólio, projetos de investimento",
  },
  "/change-bridge": {
    es: "Change Bridge, gestión cambio, cambio organizacional, minimización resistencia, transformación sostenible, adopción cambio",
    en: "Change Bridge, change management, organizational change, resistance minimization, sustainable transformation, change adoption",
    pt: "Change Bridge, gestão da mudança, mudança organizacional, minimização de resistência, transformação sustentável, adoção da mudança",
  },
  "/decisiones-estadisticas": {
    es: "Decisiones Gerenciales Basadas en Estadísticas, Six Sigma, análisis estadístico, Green Belt, Minitab, Excel, toma de decisiones",
    en: "Managerial Decisions Based on Statistics, Six Sigma, statistical analysis, Green Belt, Minitab, Excel, decision making",
    pt: "Decisões Gerenciais Baseadas em Estatísticas, Six Sigma, análise estatística, Green Belt, Minitab, Excel, tomada de decisão",
  },
  "/ops-bridge": {
    es: "OpsBridge, sistemas World Class, gestión operativa, estandarización, control, excelencia operacional, eficiencia",
    en: "OpsBridge, World Class systems, operational management, standardization, control, operational excellence, efficiency",
    pt: "OpsBridge, sistemas World Class, gestão operacional, padronização, controle, excelência operacional, eficiência",
  },
  "/people-first": {
    es: "People First, desarrollo organizacional, coaching, feedback, planes formación, talento, desarrollo personas, objetivos empresariales",
    en: "People First, organizational development, coaching, feedback, training plans, talent, people development, business objectives",
    pt: "People First, desenvolvimento organizacional, coaching, feedback, planos de formação, talento, desenvolvimento de pessoas, objetivos empresariais",
  },
  "/asset-control-bridge": {
    es: "Asset Control Bridge, mantenimiento industrial, gestión activos, disponibilidad equipos, reducción paradas, OEE",
    en: "Asset Control Bridge, industrial maintenance, asset management, equipment availability, downtime reduction, OEE",
    pt: "Asset Control Bridge, manutenção industrial, gestão de ativos, disponibilidade de equipamentos, redução de paradas, OEE",
  },
  "/autops": {
    es: "AUTOPS, automatización procesos, operaciones automáticas, control variables, optimización producción, eficiencia",
    en: "AUTOPS, process automation, automatic operations, variable control, production optimization, efficiency",
    pt: "AUTOPS, automação de processos, operações automáticas, controle de variáveis, otimização de produção, eficiência",
  },
  "/safe-process": {
    es: "Safe Process, seguridad industrial, prevención riesgos, cultura seguridad, cumplimiento normativo, gestión seguridad",
    en: "Safe Process, industrial safety, risk prevention, safety culture, regulatory compliance, safety management",
    pt: "Safe Process, segurança industrial, prevenção de riscos, cultura de segurança, conformidade regulatória, gestão de segurança",
  },
  "/measure-bridge": {
    es: "Measure Bridge, mejora laboratorios, precisión analítica, calibración equipos, control calidad, análisis laboratorio",
    en: "Measure Bridge, laboratory improvement, analytical precision, equipment calibration, quality control, laboratory analysis",
    pt: "Measure Bridge, melhoria de laboratórios, precisão analítica, calibração de equipamentos, controle de qualidade, análise laboratorial",
  },
  "/process-design-bridge": {
    es: "PROCESS DESIGN BRIDGE, diseño procesos, optimización, ingeniería procesos, mejora continua, procesos industriales, eficiencia",
    en: "PROCESS DESIGN BRIDGE, process design, optimization, process engineering, continuous improvement, industrial processes, efficiency",
    pt: "PROCESS DESIGN BRIDGE, design de processos, otimização, engenharia de processos, melhoria contínua, processos industriais, eficiência",
  },
};

const PageWrapper = () => {
  const location = useLocation();
  const { currentLanguage } = useLanguage();
  const path = location.pathname;
  usePageView();

  const title =
    titleMap[path]?.[currentLanguage] || titleMap[path]?.es || "LYSPAS & CO.";
  const description =
    descriptionMap[path]?.[currentLanguage] ||
    descriptionMap[path]?.es ||
    "Consultoría en mejora continua para empresas. Líderes en consultoría Lean y transformación empresarial.";
  const keywords =
    keywordsMap[path]?.[currentLanguage] ||
    keywordsMap[path]?.es ||
    "consultoría lean, mejora continua, consultoría empresarial, transformación lean";

  return (
    <>
      <SEOHead title={title} description={description} keywords={keywords} />
      <StructuredData />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sobre-nosotros" element={<AboutUsPage />} />
        <Route path="/wastezero" element={<WasteZeroPage />} />
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
    </>
  );
};

const App = () => {
  return (
    <Router>
      <PageWrapper />
    </Router>
  );
};

export default App;
