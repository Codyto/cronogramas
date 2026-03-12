import { TimelineStatus } from '../types/project';

const statusMap: Record<
  TimelineStatus,
  { label: string; bgClass: string; ringClass: string }
> = {
  ejecucion: {
    label: 'Ejecución',
    bgClass: 'bg-emerald-200/80',
    ringClass: 'ring-emerald-300/70',
  },
  proceso_seleccion: {
    label: 'Proceso de selección',
    bgClass: 'bg-amber-200/80',
    ringClass: 'ring-amber-300/70',
  },
  actos_previos: {
    label: 'Actos previos',
    bgClass: 'bg-slate-200/90',
    ringClass: 'ring-slate-300/60',
  },
  coordinaciones_iniciales: {
    label: 'Coordinaciones iniciales',
    bgClass: 'bg-slate-400/90',
    ringClass: 'ring-slate-500/60',
  },
  vacio: {
    label: 'Sin actividad',
    bgClass: 'bg-transparent',
    ringClass: 'ring-slate-200/60',
  },
};

const monthLabels = ['ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN', 'JUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DIC'];

export const formatCurrency = (value: number): string =>
  new Intl.NumberFormat('es-PE', {
    style: 'currency',
    currency: 'PEN',
    maximumFractionDigits: 2,
  }).format(value);

export const getStatusMeta = (status: TimelineStatus) => statusMap[status];

export const formatMonthLabel = (isoMonth: string): { year: string; month: string } => {
  const [year, month] = isoMonth.split('-');
  const monthIndex = Number(month) - 1;

  return {
    year,
    month: monthLabels[monthIndex] ?? month,
  };
};
