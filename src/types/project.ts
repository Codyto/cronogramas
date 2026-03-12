export type TimelineStatus =
  | 'ejecucion'
  | 'proceso_seleccion'
  | 'actos_previos'
  | 'coordinaciones_iniciales'
  | 'vacio';

export interface TimelineMonthEntry {
  status: TimelineStatus;
  note: string;
}

export interface ProjectDetails {
  responsable: string;
  estado_general: string;
  observacion_general: string;
}

export interface Project {
  id: number;
  entity: string;
  budget_base: number;
  budget_projected: number;
  approved_note: boolean;
  milestones: string[];
  details: ProjectDetails;
  timeline: Record<string, TimelineMonthEntry>;
}

export interface DashboardData {
  months: string[];
  projects: Project[];
}
