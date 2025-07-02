import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import WasteZeroPage from './pages/WasteZeroPage';
import AboutUsPage from './pages/AboutUsPage';
import { usePalette } from './hooks/usePalette';

function App() {
  const { currentPalette, changePalette } = usePalette();

  return (
    <Router>
      <div className="min-h-screen" style={{ backgroundColor: 'var(--color-bg)' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/wastezero" element={<WasteZeroPage />} />
          <Route path="/sobre-nosotros" element={<AboutUsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;