import { MouseEvent } from 'react';
import { formatCurrency, formatMonthLabel, getStatusMeta } from '../helpers/format';
import { Project } from '../types/project';
import ProjectDetailsPanel from './ProjectDetailsPanel';

interface ProjectRowProps {
  project: Project;
  months: string[];
  isExpanded: boolean;
  onToggleExpand: (projectId: number) => void;
  onCellHover: (
    event: MouseEvent<HTMLDivElement>,
    payload: { project: string; month: string; status: string; note: string },
  ) => void;
  onCellLeave: () => void;
}

const ProjectRow = ({
  project,
  months,
  isExpanded,
  onToggleExpand,
  onCellHover,
  onCellLeave,
}: ProjectRowProps) => (
  <>
    <div className="grid min-w-[1320px] grid-cols-[300px_170px_170px_1fr] border-t border-slate-200 bg-white px-2 py-3 text-sm text-slate-700 transition hover:bg-slate-50/60">
      <div className="flex items-center gap-3 px-2">
        <button
          type="button"
          onClick={() => onToggleExpand(project.id)}
          className="rounded-md border border-slate-200 px-2 py-1 text-xs font-medium text-slate-500 transition hover:border-slate-300 hover:text-slate-700"
          aria-label={isExpanded ? 'Contraer detalles del proyecto' : 'Expandir detalles del proyecto'}
        >
          {isExpanded ? '−' : '+'}
        </button>
        <div>
          <p className="font-semibold text-slate-900">{project.entity}</p>
          {project.approved_note && (
            <p className="text-xs text-emerald-700">Nota técnica aprobada</p>
          )}
        </div>
      </div>
      <div className="flex items-center justify-end px-3 font-medium tabular-nums text-slate-800">
        {formatCurrency(project.budget_base)}
      </div>
      <div className="flex items-center justify-end px-3 font-medium tabular-nums text-slate-800">
        {formatCurrency(project.budget_projected)}
      </div>
      <div className="overflow-x-auto px-2">
        <div className="grid min-w-[760px]" style={{ gridTemplateColumns: `repeat(${months.length}, minmax(58px, 1fr))` }}>
          {months.map((month) => {
            const monthData = project.timeline[month] ?? { status: 'vacio' as const, note: '' };
            const meta = getStatusMeta(monthData.status);
            const monthLabel = formatMonthLabel(month);
            const hasMilestone = project.milestones.includes(month);

            return (
              <div
                key={`${project.id}-${month}`}
                className={`relative mx-[1px] my-[2px] h-10 rounded-md border border-slate-200/80 ring-1 transition duration-150 hover:scale-[1.02] ${meta.bgClass} ${meta.ringClass}`}
                onMouseMove={(event) =>
                  onCellHover(event, {
                    project: project.entity,
                    month: `${monthLabel.month} ${monthLabel.year}`,
                    status: meta.label,
                    note: monthData.note,
                  })
                }
                onMouseLeave={onCellLeave}
              >
                {hasMilestone && (
                  <span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-slate-700">✕</span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
    {isExpanded && (
      <div className="min-w-[1320px] border-t border-slate-100 bg-white px-4 pb-4 pt-2">
        <ProjectDetailsPanel project={project} />
      </div>
    )}
  </>
);

export default ProjectRow;
