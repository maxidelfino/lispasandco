import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
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
  "/": "LYSPAS & CO.",
  "/wastezero": "WasteZero™ – LYSPAS & CO.",
  "/sobre-nosotros": "Sobre Nosotros – LYSPAS & CO.",
  "/5splus": "5S Plus™ – LYSPAS & CO.",
  "/flowstable": "FlowStable™ – LYSPAS & CO.",
  "/leanbridge": "LeanBridge™ – LYSPAS & CO.",
  "/kaizen-action": "Kaizen Action™ – LYSPAS & CO.",
  "/lean-enterprise-transformation":
    "Lean Enterprise Transformation™ – LYSPAS & CO.",
  "/stratbridge": "StratBridge™ – LYSPAS & CO.",
  "/projectfocus": "ProjectFocus™ – LYSPAS & CO.",
  "/change-bridge": "Change Bridge™ – LYSPAS & CO.",
  "/decisiones-estadisticas":
    "Decisiones Gerenciales Basadas en Estadísticas™ – LYSPAS & CO.",
  "/ops-bridge": "OpsBridge™ – LYSPAS & CO.",
  "/people-first": "People First™ – LYSPAS & CO.",

  "/asset-control-bridge": "Asset Control Bridge™ – LYSPAS & CO.",
  "/autops": "AUTOPS™ – LYSPAS & CO.",
  "/safe-process": "Safe Process™ – LYSPAS & CO.",
  "/measure-bridge": "Measure Bridge™ – LYSPAS & CO.",
};

function TitleUpdater() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    const title = titleMap[pathname] ?? "LYSPAS & CO.";
    document.title = title;
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      {/* title updater runs on every route change */}
      <TitleUpdater />
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
