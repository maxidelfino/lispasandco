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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
