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

const titleMap: Record<string, string> = {
  "/": "LYSPAS & CO - Consultoría Lean y Mejora Continua | Líderes en Argentina",
  "/wastezero": "WasteZero™ - Eliminación de Desperdicios Lean | LYSPAS & CO",
  "/sobre-nosotros": "Sobre Nosotros - Expertos en Mejora Continua | LYSPAS & CO",
  "/5splus": "5S Plus™ - Orden y Limpieza Industrial | LYSPAS & CO",
  "/flowstable": "FlowStable™ - Estabilización de Procesos | LYSPAS & CO",
  "/leanbridge": "LeanBridge™ - Transformación Lean Integral | LYSPAS & CO",
  "/kaizen-action": "Kaizen Action™ - Eventos de Mejora Continua | LYSPAS & CO",
  "/lean-enterprise-transformation":
    "Lean Enterprise Transformation™ - Transformación Empresarial | LYSPAS & CO",
  "/stratbridge": "StratBridge™ - Planificación Estratégica Hoshin Kanri | LYSPAS & CO",
  "/projectfocus": "ProjectFocus™ - Selección Estratégica de Proyectos | LYSPAS & CO",
  "/change-bridge": "Change Bridge™ - Gestión del Cambio Organizacional | LYSPAS & CO",
  "/decisiones-estadisticas":
    "Decisiones Gerenciales Basadas en Estadísticas™ - Six Sigma | LYSPAS & CO",
  "/ops-bridge": "OpsBridge™ - Sistemas World Class | LYSPAS & CO",
  "/people-first": "People First™ - Desarrollo Organizacional | LYSPAS & CO",
  "/asset-control-bridge": "Asset Control Bridge™ - Mantenimiento Industrial | LYSPAS & CO",
  "/autops": "AUTOPS™ - Automatización de Procesos | LYSPAS & CO",
  "/safe-process": "Safe Process™ - Seguridad Industrial | LYSPAS & CO",
  "/lab-ci-focus": "Lab Ci Focus™ - Mejora en Laboratorios | LYSPAS & CO",
};

const descriptionMap: Record<string, string> = {
  "/": "LYSPAS & CO - Líderes en consultoría Lean y mejora continua en Argentina. Programas especializados WasteZero™, FlowStable™, 5S Plus™. Reducimos desperdicios, optimizamos procesos industriales. +13,000 seguidores. Resultados garantizados.",
  "/wastezero": "WasteZero™ - Programa Lean para identificar y eliminar los 8 desperdicios industriales. Metodología DMAIC, formación práctica, resultados en 6 meses. Consultoría especializada LYSPAS & CO.",
  "/sobre-nosotros": "Conoce LYSPAS & CO - Expertos en mejora continua con sede en Rosario, Argentina. Misión, visión, valores y compromiso con la transformación empresarial Lean. +13,000 seguidores en LinkedIn.",
  "/5splus": "5S Plus™ - Programa de orden, limpieza y estandarización de espacios de trabajo. Metodología japonesa adaptada, implementación en 5 meses. Cultura operativa sólida.",
  "/flowstable": "FlowStable™ - Estabilización de procesos industriales sin inversión en activos. Secuencia de Mejora Diaria™, reducción de variabilidad, mayor productividad en 7 meses.",
  "/leanbridge": "LeanBridge™ - Transformación Lean integral. Puente entre operación diaria y estrategia empresarial. Empoderamiento de equipos, cultura de mejora continua en 8 meses.",
  "/kaizen-action": "Kaizen Action™ - Eventos de mejora continua con metodología DMAIC. Resolución de problemas complejos, colaboración interdisciplinaria, resultados medibles inmediatos.",
  "/lean-enterprise-transformation": "Lean Enterprise Transformation™ - Sistema integral de gestión basado en mejora continua. Transformación completa: cultura, procesos, liderazgo en 12 meses.",
  "/stratbridge": "StratBridge™ - Planificación estratégica Hoshin Kanri. Alineación de visión, objetivos y ejecución diaria. Matriz X-Matrix, KPIs estratégicos en 7 meses.",
  "/projectfocus": "ProjectFocus™ - Selección estratégica de proyectos de inversión. Metodología colaborativa, priorización por valor, alineación estratégica. Extensión de StratBridge™.",
  "/change-bridge": "Change Bridge™ - Gestión del cambio organizacional. Procesos estructurados, minimización de resistencias, adopción sostenible de transformaciones en 8-12 semanas.",
  "/decisiones-estadisticas": "Decisiones Gerenciales Basadas en Estadísticas™ - Formación en análisis estadístico aplicado. Herramientas Excel, Minitab. Certificación Green Belt estándar.",
  "/ops-bridge": "OpsBridge™ - Sistemas World Class de gestión operativa. Estandarización, control, eficiencia. Transformación integral en 14 meses hacia excelencia operacional.",
  "/people-first": "People First™ - Desarrollo organizacional centrado en personas. Coaching, feedback, planes de formación. Alineación de habilidades con objetivos empresariales.",
  "/asset-control-bridge": "Asset Control Bridge™ - Mantenimiento industrial avanzado. Gestión de activos, disponibilidad de equipos, reducción de paradas no planificadas.",
  "/autops": "AUTOPS™ - Automatización de procesos industriales. Operación automática, control de variables, optimización de líneas de producción.",
  "/safe-process": "Safe Process™ - Gestión de seguridad industrial. Prevención de riesgos, cultura de seguridad, cumplimiento normativo en procesos industriales.",
  "/lab-ci-focus": "Lab Ci Focus™ - Mejora continua en laboratorios. Precisión analítica, calibración de equipos, control de calidad en análisis de laboratorio.",
};

const keywordsMap: Record<string, string> = {
  "/": "consultoría lean, mejora continua, LYSPAS, reducción desperdicios, optimización procesos, consultor lean Argentina, Rosario Santa Fe, eficiencia industrial, productividad, transformación lean",
  "/wastezero": "WasteZero, eliminación desperdicios, 8 desperdicios lean, metodología DMAIC, consultoría lean, reducción costos operativos, eficiencia procesos, mejora continua",
  "/sobre-nosotros": "LYSPAS & CO, empresa consultoría, mejora continua Argentina, Rosario Santa Fe, misión visión valores, expertos lean, transformación empresarial",
  "/5splus": "5S Plus, orden limpieza industrial, metodología japonesa, estandarización espacios trabajo, cultura operativa, organización industrial",
  "/flowstable": "FlowStable, estabilización procesos, secuencia mejora diaria, reducción variabilidad, productividad industrial, control procesos",
  "/leanbridge": "LeanBridge, transformación lean, puente operativo estratégico, empoderamiento equipos, cultura mejora continua, excelencia operacional",
  "/kaizen-action": "Kaizen Action, eventos kaizen, metodología DMAIC, resolución problemas, colaboración interdisciplinaria, mejora continua",
  "/lean-enterprise-transformation": "Lean Enterprise Transformation, transformación empresarial, sistema gestión integral, cultura lean, mejora continua organizacional",
  "/stratbridge": "StratBridge, planificación estratégica, Hoshin Kanri, alineación estratégica, matriz X-Matrix, KPIs estratégicos",
  "/projectfocus": "ProjectFocus, selección proyectos, priorización estratégica, gestión portafolio, decisiones inversión, alineación estratégica",
  "/change-bridge": "Change Bridge, gestión cambio, transformación organizacional, resistencia cambio, adopción cambios, gestión transiciones",
  "/decisiones-estadisticas": "decisiones estadísticas, análisis datos, Six Sigma, Green Belt, estadística aplicada, toma decisiones datos",
  "/ops-bridge": "OpsBridge, sistemas world class, estandarización procesos, excelencia operacional, gestión operativa avanzada",
  "/people-first": "People First, desarrollo organizacional, coaching empresarial, gestión talento, formación equipos, desarrollo competencias",
};

function TitleUpdater() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    const title = titleMap[pathname] ?? "LYSPAS & CO.";
    document.title = title;
  }, [pathname]);
  return null;
}

function SEOUpdater() {
  const { pathname } = useLocation();
  
  const title = titleMap[pathname] ?? "LYSPAS & CO.";
  const description = descriptionMap[pathname] ?? "LYSPAS & CO - Consultoría Lean y mejora continua";
  const keywords = keywordsMap[pathname] ?? "consultoría lean, mejora continua, LYSPAS";
  
  return (
    <SEOHead 
      title={title}
      description={description}
      keywords={keywords}
    />
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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
