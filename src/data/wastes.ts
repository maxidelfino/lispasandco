import { WasteType } from '../types';

export const wastes: WasteType[] = [
  {
    id: 'talent',
    icon: 'Users',
    title: 'Talento no utilizado',
    description: 'No aprovechar know-how interno',
    angle: 0
  },
  {
    id: 'inventory',
    icon: 'Package',
    title: 'Inventario',
    description: 'Stock excesivo inmoviliza capital',
    angle: 45
  },
  {
    id: 'movement',
    icon: 'ArrowLeftRight',
    title: 'Movimientos',
    description: 'Recorridos innecesarios del personal',
    angle: 90
  },
  {
    id: 'waiting',
    icon: 'Timer',
    title: 'Espera',
    description: 'Tiempos muertos en procesos',
    angle: 135
  },
  {
    id: 'transportation',
    icon: 'Truck',
    title: 'Transportación',
    description: 'Traslados sin valor añadido',
    angle: 180
  },
  {
    id: 'defects',
    icon: 'XCircle',
    title: 'Defectos',
    description: 'Retrabajos y reprocesos',
    angle: 225
  },
  {
    id: 'overproduction',
    icon: 'Settings',
    title: 'Sobreproducción',
    description: 'Fabricar antes de la demanda',
    angle: 270
  },
  {
    id: 'overprocessing',
    icon: 'Factory',
    title: 'Sobre-procesamiento',
    description: 'Actividades sin impacto',
    angle: 315
  }
];