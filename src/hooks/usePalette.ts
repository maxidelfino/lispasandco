import { useState, useEffect } from 'react';
import { ColorPalette } from '../types';
import { palettes } from '../data/palettes';

export const usePalette = () => {
  const [currentPalette, setCurrentPalette] = useState<number>(1); // Sustainability Green

  const changePalette = (paletteId: number) => {
    setCurrentPalette(paletteId);
    const palette = palettes[paletteId];
    
    // Apply CSS custom properties
    const root = document.documentElement;
    Object.entries(palette).forEach(([key, value]) => {
      root.style.setProperty(`--color-${key}`, value);
    });
  };

  useEffect(() => {
    changePalette(1); // Initialize with Sustainability Green
  }, []);

  return {
    currentPalette,
    changePalette,
    palette: palettes[currentPalette]
  };
};