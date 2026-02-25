import React from "react";
import { useLocation } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import { Language } from "../types";

// ── Organization (shared provider reference) ─────────────────────────────────
const organizationDataByLang: Record<Language, object> = {
  [Language.SPANISH]: {
    "@type": "Organization",
    name: "LYSPAS & CO",
    alternateName: "LYSPAS AND CO",
    url: "https://lyspasandco.com",
    logo: "https://lyspasandco.com/assets/lyspascoicon-black.png",
    description: "Consultoría especializada en Lean Manufacturing y mejora continua",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Rosario",
      addressRegion: "Santa Fe",
      addressCountry: "AR",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+54-9-3416-40-8758",
      contactType: "customer service",
      email: "gonzalo_luvani@lyspasandco.com",
    },
    sameAs: [
      "https://www.linkedin.com/company/lyspasandco/",
      "https://wa.me/+5493416408758",
    ],
  },
  [Language.ENGLISH]: {
    "@type": "Organization",
    name: "LYSPAS & CO",
    alternateName: "LYSPAS AND CO",
    url: "https://lyspasandco.com",
    logo: "https://lyspasandco.com/assets/lyspascoicon-black.png",
    description: "Consulting specialized in Lean Manufacturing and continuous improvement",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Rosario",
      addressRegion: "Santa Fe",
      addressCountry: "AR",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+54-9-3416-40-8758",
      contactType: "customer service",
      email: "gonzalo_luvani@lyspasandco.com",
    },
    sameAs: [
      "https://www.linkedin.com/company/lyspasandco/",
      "https://wa.me/+5493416408758",
    ],
  },
  [Language.PORTUGUESE]: {
    "@type": "Organization",
    name: "LYSPAS & CO",
    alternateName: "LYSPAS AND CO",
    url: "https://lyspasandco.com",
    logo: "https://lyspasandco.com/assets/lyspascoicon-black.png",
    description: "Consultoria especializada em Lean Manufacturing e melhoria contínua",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Rosario",
      addressRegion: "Santa Fe",
      addressCountry: "AR",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+54-9-3416-40-8758",
      contactType: "customer service",
      email: "gonzalo_luvani@lyspasandco.com",
    },
    sameAs: [
      "https://www.linkedin.com/company/lyspasandco/",
      "https://wa.me/+5493416408758",
    ],
  },
};

// ── Page-specific Service schemas ─────────────────────────────────────────────
type ServiceSchema = Record<Language, object>;

const serviceSchemas: Record<string, ServiceSchema> = {
  "/wastezero": {
    [Language.SPANISH]: {
      "@type": "Service",
      name: "WasteZero™",
      description: "Programa Lean para identificar y eliminar los 8 desperdicios industriales. Metodología DMAIC con resultados visibles en 6 meses.",
      serviceType: "Consultoría Lean Manufacturing",
      areaServed: { "@type": "Country", name: "Argentina" },
      url: "https://lyspasandco.com/wastezero",
    },
    [Language.ENGLISH]: {
      "@type": "Service",
      name: "WasteZero™",
      description: "Lean program to identify and eliminate the 8 industrial wastes. DMAIC methodology with visible results in 6 months.",
      serviceType: "Lean Manufacturing Consulting",
      areaServed: { "@type": "Country", name: "Argentina" },
      url: "https://lyspasandco.com/wastezero",
    },
    [Language.PORTUGUESE]: {
      "@type": "Service",
      name: "WasteZero™",
      description: "Programa Lean para identificar e eliminar os 8 desperdícios industriais. Metodologia DMAIC com resultados visíveis em 6 meses.",
      serviceType: "Consultoria Lean Manufacturing",
      areaServed: { "@type": "Country", name: "Argentina" },
      url: "https://lyspasandco.com/wastezero",
    },
  },
  "/flowstable": {
    [Language.SPANISH]: {
      "@type": "Service",
      name: "FlowStable™",
      description: "Estabilización de procesos industriales sin inversión en activos fijos. Secuencia de Mejora Diaria™ para aumentar productividad en 7 meses.",
      serviceType: "Optimización de Procesos Industriales",
      areaServed: { "@type": "Country", name: "Argentina" },
      url: "https://lyspasandco.com/flowstable",
    },
    [Language.ENGLISH]: {
      "@type": "Service",
      name: "FlowStable™",
      description: "Industrial process stabilization without fixed asset investment. Daily Improvement Sequence™ to increase productivity in 7 months.",
      serviceType: "Industrial Process Optimization",
      areaServed: { "@type": "Country", name: "Argentina" },
      url: "https://lyspasandco.com/flowstable",
    },
    [Language.PORTUGUESE]: {
      "@type": "Service",
      name: "FlowStable™",
      description: "Estabilização de processos industriais sem investimento em ativos fixos. Sequência de Melhoria Diária™ para aumentar a produtividade em 7 meses.",
      serviceType: "Otimização de Processos Industriais",
      areaServed: { "@type": "Country", name: "Argentina" },
      url: "https://lyspasandco.com/flowstable",
    },
  },
  "/5splus": {
    [Language.SPANISH]: {
      "@type": "Service",
      name: "5S Plus™",
      description: "Programa de orden, limpieza y estandarización de espacios de trabajo basado en la metodología japonesa 5S. Implementación en 5 meses.",
      serviceType: "Organización Industrial",
      areaServed: { "@type": "Country", name: "Argentina" },
      url: "https://lyspasandco.com/5splus",
    },
    [Language.ENGLISH]: {
      "@type": "Service",
      name: "5S Plus™",
      description: "Workspace order, cleanliness and standardization program based on the Japanese 5S methodology. Implementation in 5 months.",
      serviceType: "Industrial Organization",
      areaServed: { "@type": "Country", name: "Argentina" },
      url: "https://lyspasandco.com/5splus",
    },
    [Language.PORTUGUESE]: {
      "@type": "Service",
      name: "5S Plus™",
      description: "Programa de ordem, limpeza e padronização de espaços de trabalho baseado na metodologia japonesa 5S. Implementação em 5 meses.",
      serviceType: "Organização Industrial",
      areaServed: { "@type": "Country", name: "Argentina" },
      url: "https://lyspasandco.com/5splus",
    },
  },
  "/leanbridge": {
    [Language.SPANISH]: {
      "@type": "Service",
      name: "LeanBridge™",
      description: "Transformación Lean integral que une la operación diaria con la estrategia empresarial. Empoderamiento de equipos y cultura de mejora continua en 8 meses.",
      serviceType: "Transformación Lean Empresarial",
      areaServed: { "@type": "Country", name: "Argentina" },
      url: "https://lyspasandco.com/leanbridge",
    },
    [Language.ENGLISH]: {
      "@type": "Service",
      name: "LeanBridge™",
      description: "Integral Lean transformation bridging daily operations and business strategy. Team empowerment and continuous improvement culture in 8 months.",
      serviceType: "Lean Business Transformation",
      areaServed: { "@type": "Country", name: "Argentina" },
      url: "https://lyspasandco.com/leanbridge",
    },
    [Language.PORTUGUESE]: {
      "@type": "Service",
      name: "LeanBridge™",
      description: "Transformação Lean integral que une a operação diária com a estratégia empresarial. Empoderamento de equipes e cultura de melhoria contínua em 8 meses.",
      serviceType: "Transformação Lean Empresarial",
      areaServed: { "@type": "Country", name: "Argentina" },
      url: "https://lyspasandco.com/leanbridge",
    },
  },
  "/kaizen-action": {
    [Language.SPANISH]: {
      "@type": "Service",
      name: "Kaizen Action™",
      description: "Eventos de mejora continua con metodología DMAIC para resolver problemas complejos mediante colaboración interdisciplinaria con resultados medibles inmediatos.",
      serviceType: "Eventos Kaizen y Mejora Continua",
      areaServed: { "@type": "Country", name: "Argentina" },
      url: "https://lyspasandco.com/kaizen-action",
    },
    [Language.ENGLISH]: {
      "@type": "Service",
      name: "Kaizen Action™",
      description: "Continuous improvement events with DMAIC methodology to solve complex problems through interdisciplinary collaboration with immediate measurable results.",
      serviceType: "Kaizen Events and Continuous Improvement",
      areaServed: { "@type": "Country", name: "Argentina" },
      url: "https://lyspasandco.com/kaizen-action",
    },
    [Language.PORTUGUESE]: {
      "@type": "Service",
      name: "Kaizen Action™",
      description: "Eventos de melhoria contínua com metodologia DMAIC para resolver problemas complexos por meio de colaboração interdisciplinar com resultados mensuráveis imediatos.",
      serviceType: "Eventos Kaizen e Melhoria Contínua",
      areaServed: { "@type": "Country", name: "Argentina" },
      url: "https://lyspasandco.com/kaizen-action",
    },
  },
  "/lean-enterprise-transformation": {
    [Language.SPANISH]: {
      "@type": "Service",
      name: "Lean Enterprise Transformation™",
      description: "Sistema integral de gestión basado en mejora continua. Transformación completa de cultura, procesos y liderazgo en 12 meses hacia la excelencia operacional.",
      serviceType: "Transformación Empresarial Lean",
      areaServed: { "@type": "Country", name: "Argentina" },
      url: "https://lyspasandco.com/lean-enterprise-transformation",
    },
    [Language.ENGLISH]: {
      "@type": "Service",
      name: "Lean Enterprise Transformation™",
      description: "Comprehensive management system based on continuous improvement. Complete transformation of culture, processes and leadership in 12 months towards operational excellence.",
      serviceType: "Lean Business Transformation",
      areaServed: { "@type": "Country", name: "Argentina" },
      url: "https://lyspasandco.com/lean-enterprise-transformation",
    },
    [Language.PORTUGUESE]: {
      "@type": "Service",
      name: "Lean Enterprise Transformation™",
      description: "Sistema de gestão integral baseado em melhoria contínua. Transformação completa de cultura, processos e liderança em 12 meses rumo à excelência operacional.",
      serviceType: "Transformação Empresarial Lean",
      areaServed: { "@type": "Country", name: "Argentina" },
      url: "https://lyspasandco.com/lean-enterprise-transformation",
    },
  },
  "/stratbridge": {
    [Language.SPANISH]: {
      "@type": "Service",
      name: "StratBridge™",
      description: "Planificación estratégica con metodología Hoshin Kanri. Alineación de visión, objetivos y ejecución diaria mediante X-Matrix y KPIs estratégicos en 7 meses.",
      serviceType: "Planificación Estratégica Empresarial",
      areaServed: { "@type": "Country", name: "Argentina" },
      url: "https://lyspasandco.com/stratbridge",
    },
    [Language.ENGLISH]: {
      "@type": "Service",
      name: "StratBridge™",
      description: "Strategic planning with Hoshin Kanri methodology. Alignment of vision, objectives and daily execution through X-Matrix and strategic KPIs in 7 months.",
      serviceType: "Business Strategic Planning",
      areaServed: { "@type": "Country", name: "Argentina" },
      url: "https://lyspasandco.com/stratbridge",
    },
    [Language.PORTUGUESE]: {
      "@type": "Service",
      name: "StratBridge™",
      description: "Planejamento estratégico com metodologia Hoshin Kanri. Alinhamento de visão, objetivos e execução diária por meio de X-Matrix e KPIs estratégicos em 7 meses.",
      serviceType: "Planejamento Estratégico Empresarial",
      areaServed: { "@type": "Country", name: "Argentina" },
      url: "https://lyspasandco.com/stratbridge",
    },
  },
  "/projectfocus": {
    [Language.SPANISH]: {
      "@type": "Service",
      name: "ProjectFocus™",
      description: "Selección estratégica de proyectos de inversión. Metodología colaborativa para priorizar por valor y alinear iniciativas con la estrategia empresarial.",
      serviceType: "Gestión Estratégica de Proyectos",
      areaServed: { "@type": "Country", name: "Argentina" },
      url: "https://lyspasandco.com/projectfocus",
    },
    [Language.ENGLISH]: {
      "@type": "Service",
      name: "ProjectFocus™",
      description: "Strategic selection of investment projects. Collaborative methodology to prioritize by value and align initiatives with business strategy.",
      serviceType: "Strategic Project Management",
      areaServed: { "@type": "Country", name: "Argentina" },
      url: "https://lyspasandco.com/projectfocus",
    },
    [Language.PORTUGUESE]: {
      "@type": "Service",
      name: "ProjectFocus™",
      description: "Seleção estratégica de projetos de investimento. Metodologia colaborativa para priorizar por valor e alinhar iniciativas com a estratégia empresarial.",
      serviceType: "Gestão Estratégica de Projetos",
      areaServed: { "@type": "Country", name: "Argentina" },
      url: "https://lyspasandco.com/projectfocus",
    },
  },
  "/change-bridge": {
    [Language.SPANISH]: {
      "@type": "Service",
      name: "Change Bridge™",
      description: "Gestión del cambio organizacional con procesos estructurados. Minimiza la resistencia y asegura la adopción sostenible de transformaciones en 8-12 semanas.",
      serviceType: "Gestión del Cambio Organizacional",
      areaServed: { "@type": "Country", name: "Argentina" },
      url: "https://lyspasandco.com/change-bridge",
    },
    [Language.ENGLISH]: {
      "@type": "Service",
      name: "Change Bridge™",
      description: "Organizational change management with structured processes. Minimizes resistance and ensures sustainable adoption of transformations in 8-12 weeks.",
      serviceType: "Organizational Change Management",
      areaServed: { "@type": "Country", name: "Argentina" },
      url: "https://lyspasandco.com/change-bridge",
    },
    [Language.PORTUGUESE]: {
      "@type": "Service",
      name: "Change Bridge™",
      description: "Gestão da mudança organizacional com processos estruturados. Minimiza resistências e garante adoção sustentável de transformações em 8-12 semanas.",
      serviceType: "Gestão da Mudança Organizacional",
      areaServed: { "@type": "Country", name: "Argentina" },
      url: "https://lyspasandco.com/change-bridge",
    },
  },
  "/decisiones-estadisticas": {
    [Language.SPANISH]: {
      "@type": "Service",
      name: "Decisiones Gerenciales Basadas en Estadísticas™",
      description: "Capacitación en análisis estadístico aplicado con Excel y Minitab. Certificación Green Belt para tomar decisiones gerenciales basadas en datos.",
      serviceType: "Capacitación en Análisis Estadístico y Six Sigma",
      areaServed: { "@type": "Country", name: "Argentina" },
      url: "https://lyspasandco.com/decisiones-estadisticas",
    },
    [Language.ENGLISH]: {
      "@type": "Service",
      name: "Managerial Decisions Based on Statistics™",
      description: "Training in applied statistical analysis with Excel and Minitab. Green Belt certification for data-driven managerial decision-making.",
      serviceType: "Statistical Analysis and Six Sigma Training",
      areaServed: { "@type": "Country", name: "Argentina" },
      url: "https://lyspasandco.com/decisiones-estadisticas",
    },
    [Language.PORTUGUESE]: {
      "@type": "Service",
      name: "Decisões Gerenciais Baseadas em Estatísticas™",
      description: "Formação em análise estatística aplicada com Excel e Minitab. Certificação Green Belt para tomada de decisões gerenciais baseadas em dados.",
      serviceType: "Formação em Análise Estatística e Six Sigma",
      areaServed: { "@type": "Country", name: "Argentina" },
      url: "https://lyspasandco.com/decisiones-estadisticas",
    },
  },
  "/ops-bridge": {
    [Language.SPANISH]: {
      "@type": "Service",
      name: "OpsBridge™",
      description: "Implementación de sistemas World Class para gestión operativa. Estandarización, control y transformación hacia excelencia operacional en 14 meses.",
      serviceType: "Sistemas de Gestión Operativa World Class",
      areaServed: { "@type": "Country", name: "Argentina" },
      url: "https://lyspasandco.com/ops-bridge",
    },
    [Language.ENGLISH]: {
      "@type": "Service",
      name: "OpsBridge™",
      description: "World Class operational management systems. Standardization, control and transformation towards operational excellence in 14 months.",
      serviceType: "World Class Operational Management Systems",
      areaServed: { "@type": "Country", name: "Argentina" },
      url: "https://lyspasandco.com/ops-bridge",
    },
    [Language.PORTUGUESE]: {
      "@type": "Service",
      name: "OpsBridge™",
      description: "Sistemas World Class de gestão operacional. Padronização, controle e transformação rumo à excelência operacional em 14 meses.",
      serviceType: "Sistemas de Gestão Operacional World Class",
      areaServed: { "@type": "Country", name: "Argentina" },
      url: "https://lyspasandco.com/ops-bridge",
    },
  },
  "/people-first": {
    [Language.SPANISH]: {
      "@type": "Service",
      name: "People First™",
      description: "Desarrollo organizacional centrado en las personas. Coaching, feedback y planes de formación para alinear habilidades con objetivos empresariales.",
      serviceType: "Desarrollo Organizacional y Gestión de Talento",
      areaServed: { "@type": "Country", name: "Argentina" },
      url: "https://lyspasandco.com/people-first",
    },
    [Language.ENGLISH]: {
      "@type": "Service",
      name: "People First™",
      description: "People-centered organizational development. Coaching, feedback and training plans to align skills with business objectives.",
      serviceType: "Organizational Development and Talent Management",
      areaServed: { "@type": "Country", name: "Argentina" },
      url: "https://lyspasandco.com/people-first",
    },
    [Language.PORTUGUESE]: {
      "@type": "Service",
      name: "People First™",
      description: "Desenvolvimento organizacional centrado em pessoas. Coaching, feedback e planos de formação para alinhar habilidades com objetivos empresariais.",
      serviceType: "Desenvolvimento Organizacional e Gestão de Talentos",
      areaServed: { "@type": "Country", name: "Argentina" },
      url: "https://lyspasandco.com/people-first",
    },
  },
  "/asset-control-bridge": {
    [Language.SPANISH]: {
      "@type": "Service",
      name: "Asset Control Bridge™",
      description: "Mantenimiento industrial avanzado para maximizar disponibilidad de equipos. Gestión de activos y reducción de paradas no planificadas para mejorar el OEE.",
      serviceType: "Mantenimiento Industrial y Gestión de Activos",
      areaServed: { "@type": "Country", name: "Argentina" },
      url: "https://lyspasandco.com/asset-control-bridge",
    },
    [Language.ENGLISH]: {
      "@type": "Service",
      name: "Asset Control Bridge™",
      description: "Advanced industrial maintenance to maximize equipment availability. Asset management and reduction of unplanned downtime to improve OEE.",
      serviceType: "Industrial Maintenance and Asset Management",
      areaServed: { "@type": "Country", name: "Argentina" },
      url: "https://lyspasandco.com/asset-control-bridge",
    },
    [Language.PORTUGUESE]: {
      "@type": "Service",
      name: "Asset Control Bridge™",
      description: "Manutenção industrial avançada para maximizar a disponibilidade de equipamentos. Gestão de ativos e redução de paradas não planejadas para melhorar o OEE.",
      serviceType: "Manutenção Industrial e Gestão de Ativos",
      areaServed: { "@type": "Country", name: "Argentina" },
      url: "https://lyspasandco.com/asset-control-bridge",
    },
  },
  "/autops": {
    [Language.SPANISH]: {
      "@type": "Service",
      name: "AUTOPS™",
      description: "Automatización de procesos industriales con instrumentación de última generación y software de control avanzado para operaciones estables y sostenibles.",
      serviceType: "Automatización de Procesos Industriales",
      areaServed: { "@type": "Country", name: "Argentina" },
      url: "https://lyspasandco.com/autops",
    },
    [Language.ENGLISH]: {
      "@type": "Service",
      name: "AUTOPS™",
      description: "Industrial process automation with state-of-the-art instrumentation and advanced control software for stable and sustainable operations.",
      serviceType: "Industrial Process Automation",
      areaServed: { "@type": "Country", name: "Argentina" },
      url: "https://lyspasandco.com/autops",
    },
    [Language.PORTUGUESE]: {
      "@type": "Service",
      name: "AUTOPS™",
      description: "Automação de processos industriais com instrumentação de última geração e software de controle avançado para operações estáveis e sustentáveis.",
      serviceType: "Automação de Processos Industriais",
      areaServed: { "@type": "Country", name: "Argentina" },
      url: "https://lyspasandco.com/autops",
    },
  },
  "/safe-process": {
    [Language.SPANISH]: {
      "@type": "Service",
      name: "Safe Process™",
      description: "Gestión de seguridad industrial y prevención de riesgos. Fomenta una cultura de seguridad y asegura el cumplimiento normativo en procesos industriales.",
      serviceType: "Seguridad Industrial y Prevención de Riesgos",
      areaServed: { "@type": "Country", name: "Argentina" },
      url: "https://lyspasandco.com/safe-process",
    },
    [Language.ENGLISH]: {
      "@type": "Service",
      name: "Safe Process™",
      description: "Industrial safety management and risk prevention. Builds a safety culture and ensures regulatory compliance across industrial processes.",
      serviceType: "Industrial Safety and Risk Prevention",
      areaServed: { "@type": "Country", name: "Argentina" },
      url: "https://lyspasandco.com/safe-process",
    },
    [Language.PORTUGUESE]: {
      "@type": "Service",
      name: "Safe Process™",
      description: "Gestão de segurança industrial e prevenção de riscos. Promove uma cultura de segurança e garante conformidade regulatória em processos industriais.",
      serviceType: "Segurança Industrial e Prevenção de Riscos",
      areaServed: { "@type": "Country", name: "Argentina" },
      url: "https://lyspasandco.com/safe-process",
    },
  },
  "/measure-bridge": {
    [Language.SPANISH]: {
      "@type": "Service",
      name: "Measure Bridge™",
      description: "Mejora continua para laboratorios. Precisión analítica, calibración de equipos y control de calidad para resultados confiables en análisis de laboratorio.",
      serviceType: "Mejora Continua en Laboratorios y Control de Calidad",
      areaServed: { "@type": "Country", name: "Argentina" },
      url: "https://lyspasandco.com/measure-bridge",
    },
    [Language.ENGLISH]: {
      "@type": "Service",
      name: "Measure Bridge™",
      description: "Continuous improvement for laboratories. Analytical precision, equipment calibration and quality control for reliable laboratory analysis results.",
      serviceType: "Laboratory Continuous Improvement and Quality Control",
      areaServed: { "@type": "Country", name: "Argentina" },
      url: "https://lyspasandco.com/measure-bridge",
    },
    [Language.PORTUGUESE]: {
      "@type": "Service",
      name: "Measure Bridge™",
      description: "Melhoria contínua para laboratórios. Precisão analítica, calibração de equipamentos e controle de qualidade para resultados confiáveis em análises laboratoriais.",
      serviceType: "Melhoria Contínua em Laboratórios e Controle de Qualidade",
      areaServed: { "@type": "Country", name: "Argentina" },
      url: "https://lyspasandco.com/measure-bridge",
    },
  },
  "/process-design-bridge": {
    [Language.SPANISH]: {
      "@type": "Service",
      name: "Process Design Bridge™",
      description: "Diseño y optimización de procesos industriales. Consultoría especializada en ingeniería de procesos y mejora continua para mayor eficiencia operativa.",
      serviceType: "Diseño y Optimización de Procesos Industriales",
      areaServed: { "@type": "Country", name: "Argentina" },
      url: "https://lyspasandco.com/process-design-bridge",
    },
    [Language.ENGLISH]: {
      "@type": "Service",
      name: "Process Design Bridge™",
      description: "Industrial process design and optimization. Specialized consulting in process engineering and continuous improvement for greater operational efficiency.",
      serviceType: "Industrial Process Design and Optimization",
      areaServed: { "@type": "Country", name: "Argentina" },
      url: "https://lyspasandco.com/process-design-bridge",
    },
    [Language.PORTUGUESE]: {
      "@type": "Service",
      name: "Process Design Bridge™",
      description: "Design e otimização de processos industriais. Consultoria especializada em engenharia de processos e melhoria contínua para maior eficiência operacional.",
      serviceType: "Design e Otimização de Processos Industriais",
      areaServed: { "@type": "Country", name: "Argentina" },
      url: "https://lyspasandco.com/process-design-bridge",
    },
  },
};

// ── Homepage WebSite schema ───────────────────────────────────────────────────
const websiteSchema: Record<Language, object> = {
  [Language.SPANISH]: {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "LYSPAS & CO",
    url: "https://lyspasandco.com",
    description: "Consultoría Lean y mejora continua para empresas en Argentina y Latinoamérica",
    inLanguage: "es",
  },
  [Language.ENGLISH]: {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "LYSPAS & CO",
    url: "https://lyspasandco.com",
    description: "Lean Consulting and Continuous Improvement for companies in Argentina and Latin America",
    inLanguage: "en",
  },
  [Language.PORTUGUESE]: {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "LYSPAS & CO",
    url: "https://lyspasandco.com",
    description: "Consultoria Lean e melhoria contínua para empresas na Argentina e América Latina",
    inLanguage: "pt",
  },
};

const StructuredData: React.FC = () => {
  const location = useLocation();
  const { currentLanguage } = useLanguage();

  React.useEffect(() => {
    const path = location.pathname;
    const org = organizationDataByLang[currentLanguage];
    const serviceByLang = serviceSchemas[path];

    let data: object;

    if (path === "/") {
      // Homepage: WebSite + Organization graph
      data = {
        "@context": "https://schema.org",
        "@graph": [
          websiteSchema[currentLanguage],
          { "@context": "https://schema.org", ...org },
        ],
      };
    } else if (serviceByLang) {
      // Service page: Service schema with provider injected
      const serviceData = serviceByLang[currentLanguage] as Record<string, unknown>;
      data = {
        "@context": "https://schema.org",
        ...serviceData,
        provider: { "@context": "https://schema.org", ...org },
      };
    } else {
      // Fallback (About Us, etc.)
      data = { "@context": "https://schema.org", ...org };
    }

    // Remove previous script and inject new one
    const existing = document.getElementById("structured-data");
    if (existing) existing.remove();

    const script = document.createElement("script");
    script.id = "structured-data";
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);

    return () => {
      const s = document.getElementById("structured-data");
      if (s) s.remove();
    };
  }, [location.pathname, currentLanguage]);

  return null;
};

export default StructuredData;
