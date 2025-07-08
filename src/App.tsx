import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import WasteZeroPage from './pages/WasteZeroPage';
import AboutUsPage from './pages/AboutUsPage';
import FiveSPlusPage from './pages/FiveSPlusPage';

function App() {

  return (
    <Router>
      <div className="min-h-screen" style={{ backgroundColor: 'var(--color-bg)' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/wastezero" element={<WasteZeroPage />} />
          <Route path="/sobre-nosotros" element={<AboutUsPage />} />
          <Route path="/5splus" element={<FiveSPlusPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;