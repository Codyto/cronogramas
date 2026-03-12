import { Project } from '../types/project';

interface ProjectDetailsPanelProps {
  project: Project;
}

const ProjectDetailsPanel = ({ project }: ProjectDetailsPanelProps) => (
  <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
    <div className="grid gap-3 md:grid-cols-3">
      <div>
        <p className="text-xs uppercase tracking-wide text-slate-500">Responsable</p>
        <p className="mt-1 font-medium text-slate-800">{project.details.responsable}</p>
      </div>
      <div>
        <p className="text-xs uppercase tracking-wide text-slate-500">Estado general</p>
        <p className="mt-1 font-medium text-slate-800">{project.details.estado_general}</p>
      </div>
      <div>
        <p className="text-xs uppercase tracking-wide text-slate-500">Observación</p>
        <p className="mt-1 font-medium text-slate-800">{project.details.observacion_general}</p>
      </div>
    </div>
  </div>
);

export default ProjectDetailsPanel;
