import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import WasteZeroPage from './pages/WasteZeroPage';
import AboutUsPage from './pages/AboutUsPage';
import FiveSPlusPage from './pages/FiveSPlusPage';
import FlowStablePage from './pages/FlowStablePage';
import LeanBridgePage from './pages/LeanBridgePage';
import KaizenActionPage from './pages/KaizenActionPage';
import LeanEnterpriseTransformationPage from './pages/LeanEnterpriseTransformationPage';
import StratBridgePage from './pages/StratBridgePage';
import ProjectFocusPage from './pages/ProjectFocusPage';

function App() {

  return (
    <Router>
      <div className="min-h-screen" style={{ backgroundColor: 'var(--color-bg)' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/wastezero" element={<WasteZeroPage />} />
          <Route path="/sobre-nosotros" element={<AboutUsPage />} />
          <Route path="/5splus" element={<FiveSPlusPage />} />
          <Route path="/flowstable" element={<FlowStablePage />} />
          <Route path="/leanbridge" element={<LeanBridgePage />} />
          <Route path="/kaizen-action" element={<KaizenActionPage />} />
          <Route path="/lean-enterprise-transformation" element={<LeanEnterpriseTransformationPage />} />
          <Route path="/stratbridge" element={<StratBridgePage />} />
          <Route path="/projectfocus" element={<ProjectFocusPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;