export interface ColorPalette {
  bg: string;
  primary: string;
  secondary: string;
  accent: string;
  text: string;
  surface: string;
  border: string;
}

export interface WasteType {
  id: string;
  icon: string;
  title: string;
  description: string;
  angle: number;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  longDescription?: string[];
  icon?: string;
  color?: string;
  route?: string;
  isActive: boolean;
  comingSoon?: boolean;
  benefits: string[];
  working?: boolean;
  subtitle?: string;
}
