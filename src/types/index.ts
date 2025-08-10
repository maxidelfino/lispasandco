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

export interface StratBridgeFeature {
  id: string;
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  title: string;
  subtitle?: string;
  children: JSX.Element;
  description?: string;
  subDescription?: string;
  details?: string[];
  footer?: string;
  graphic?: React.ReactNode;
}
