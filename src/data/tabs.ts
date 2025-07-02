import { TabData } from '../types';

export const tabsData: TabData[] = [
  {
    id: 'panel1',
    label: '¿QUÉ ES Y QUÉ NO ES?',
    tooltip: 'Definición y alcance de WasteZero',
    content: {
      title: '¿Qué es WasteZero™?',
      whatIs: [
        'Programa end-to-end de mejora continua',
        'Disciplina operativa y estandarización',
        'Proyecto de alto impacto, acompañado siempre',
        'Metodología adaptada a cada cliente',
        'Generación de valor sostenible'
      ],
      whatIsNot: [
        'Taller teórico sin aplicación real',
        'Solución única para todos',
        'Atajos que comprometan resultados',
        'Reemplazo del equipo interno',
        'Consultoría sin seguimiento'
      ]
    }
  },
  {
    id: 'panel2',
    label: 'PROBLEMAS QUE RESUELVE',
    tooltip: 'Identificación de los 8 desperdicios',
    content: {
      title: 'Problemas que Resuelve',
      problems: [
        'Identificación y eliminación de los 8 desperdicios',
        'Falta de visibilidad en procesos críticos',
        'Desconexión entre áreas operativas',
        'Ausencia de disciplina operativa',
        'Variabilidad en procesos estándar',
        'Pérdida de tiempo y recursos',
        'Baja eficiencia operativa',
        'Falta de cultura de mejora continua'
      ]
    }
  },
  {
    id: 'panel3',
    label: 'RESULTADOS ESPERADOS',
    tooltip: 'Beneficios y KPIs esperados',
    content: {
      title: 'Resultados Esperados',
      benefits: [
        'Reducción 15-30% en desperdicios operativos',
        'Mejora 20-40% en eficiencia de procesos',
        'Aumento 10-25% en productividad',
        'Reducción 20-35% en tiempos de ciclo',
        'Mejora 15-30% en calidad de productos',
        'ROI positivo en 6-12 meses',
        'Cultura de mejora continua establecida',
        'Estandarización de procesos críticos'
      ]
    }
  },
  {
    id: 'panel4',
    label: 'METODOLOGÍA & TIEMPOS',
    tooltip: 'Duración y fases del proyecto',
    content: {
      title: 'Metodología & Tiempos',
      methodology: [
        'Fase 1: Diagnóstico y mapeo (2-4 semanas)',
        'Fase 2: Diseño de solución (1-2 semanas)',
        'Fase 3: Implementación piloto (4-8 semanas)',
        'Fase 4: Escalamiento (8-16 semanas)',
        'Fase 5: Consolidación (4-8 semanas)',
        'Seguimiento continuo (12 meses)'
      ]
    }
  },
  {
    id: 'panel5',
    label: 'OTROS PRODUCTOS',
    tooltip: 'Servicios complementarios',
    content: {
      title: 'Otros Productos',
      benefits: [
        'Lean Manufacturing Implementation',
        'Value Stream Mapping',
        '5S Workplace Organization',
        'Kaizen Events & Workshops',
        'TPM (Total Productive Maintenance)',
        'SMED (Single-Minute Exchange)',
        'Poka-Yoke Error Prevention',
        'Continuous Improvement Training'
      ]
    }
  },
  {
    id: 'panel6',
    label: '¿CUÁNDO IMPLEMENTAR?',
    tooltip: 'Punto óptimo de implementación',
    content: {
      title: '¿Cuándo Implementar?',
      timing: [
        'Cuando hay problemas operativos recurrentes',
        'Necesidad de reducir costos operativos',
        'Presión por mejorar calidad y eficiencia',
        'Expansión o nuevas líneas de producción',
        'Cambios en demanda del mercado',
        'Disponibilidad de equipo comprometido',
        'Apoyo de la alta dirección',
        'Momento de estabilidad organizacional'
      ]
    }
  }
];