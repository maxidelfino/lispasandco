import { ColorPalette } from '../types';

export const palettes: Record<number, ColorPalette> = {
  1: { // Precision Pro
    bg:      '#fafbfc',
    primary: '#0f172a',
    secondary:'#1e40af',
    accent:  '#059669',
    text:    '#334155',
    surface: '#ffffff',
    border:  '#e2e8f0'
  },
  2: { // Executive Purple
    bg:      '#f9fafb',
    primary: '#111827',
    secondary:'#4f46e5',
    accent:  '#8b5cf6',
    text:    '#374151',
    surface: '#ffffff',
    border:  '#d1d5db'
  },
  3: { // Energy Amber
    bg:      '#fffbeb',
    primary: '#92400e',
    secondary:'#d97706',
    accent:  '#f59e0b',
    text:    '#78350f',
    surface: '#ffffff',
    border:  '#fde68a'
  },
  4: { // Sustainability Green
    bg:      '#f0fdf4',
    primary: '#065f46',
    secondary:'#10b981',
    accent:  '#34d399',
    text:    '#054f31',
    surface: '#ffffff',
    border:  '#d1fae5'
  },
  5: { // Calm Lilac
    bg:      '#eef2ff',
    primary: '#4338ca',
    secondary:'#8b5cf6',
    accent:  '#c084fc',
    text:    '#312e81',
    surface: '#ffffff',
    border:  '#ddd6fe'
  },
  8: { // Warm Taupe
    bg:      '#fff8f0',
    primary: '#42291a',
    secondary:'#8c6a48',
    accent:  '#d4b29f',
    text:    '#5c3d2e',
    surface: '#ffffff',
    border:  '#eeddd2'
  },
  9: { // Fresh Teal
    bg:      '#eefaf9',
    primary: '#0f4c5c',
    secondary:'#2a6f97',
    accent:  '#4fb0c6',
    text:    '#1e3a5f',
    surface: '#ffffff',
    border:  '#d1e8ea'
  },
  10: { // Soft Rose
    bg:      '#fdfcfb',
    primary: '#502c3a',
    secondary:'#a5678d',
    accent:  '#d4a5a5',
    text:    '#4c2c3f',
    surface: '#ffffff',
    border:  '#f3e6e6'
  },
  14: { // Anthracite
    bg:      '#fafafa',
    primary: '#1f2937',
    secondary:'#475569',
    accent:  '#94a3b8',
    text:    '#323f4b',
    surface: '#ffffff',
    border:  '#e2e8f0'
  },
  16: { // Azure Sky
    bg:      '#f0f8ff',
    primary: '#0c4a6e',
    secondary:'#0284c7',
    accent:  '#22d3ee',
    text:    '#1e3a5f',
    surface: '#ffffff',
    border:  '#bae6fd'
  },
  17: { // Graphite
    bg:      '#fdfdfd',
    primary: '#2e2e2e',
    secondary:'#4a4a4a',
    accent:  '#a3a3a3',
    text:    '#171717',
    surface: '#ffffff',
    border:  '#d4d4d4'
  },
  20: { // Honey Glow
    bg:      '#fffaf0',
    primary: '#92400e',
    secondary:'#c2410c',
    accent:  '#f4a261',
    text:    '#78350f',
    surface: '#ffffff',
    border:  '#fde8cf'
  },
  24: { // Vintage
    bg:      '#fdfdfd',
    primary: '#42291a',
    secondary:'#7c5e2b',
    accent:  '#d4a373',
    text:    '#623c1f',
    surface: '#ffffff',
    border:  '#eaddd1'
  },
};

export const paletteNames: Record<number, string> = {
  1: 'Precision Pro',
  2: 'Executive Purple',
  3: 'Energy Amber',
  4: 'Sustainability Green',
  5: 'Calm Lilac',
  8: 'Warm Taupe',
  9: 'Fresh Teal',
  10:'Soft Rose',
  14:'Anthracite',
  16:'Azure Sky',
  17:'Graphite',
  20:'Honey Glow',
  24:'Vintage',
};
