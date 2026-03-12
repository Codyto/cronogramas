import { MouseEvent, useState } from 'react';
import { Project } from '../types/project';
import ProjectRow from './ProjectRow';
import TimelineHeader from './TimelineHeader';
import Tooltip from './Tooltip';

interface ProjectTableProps {
  months: string[];
  projects: Project[];
}

const ProjectTable = ({ months, projects }: ProjectTableProps) => {
  const [expandedIds, setExpandedIds] = useState<number[]>([]);
  const [tooltip, setTooltip] = useState({
    visible: false,
    x: 0,
    y: 0,
    content: { project: '', month: '', status: '', note: '' },
  });

  const handleToggleExpand = (projectId: number) => {
    setExpandedIds((prev) =>
      prev.includes(projectId) ? prev.filter((id) => id !== projectId) : [...prev, projectId],
    );
  };

  const handleHover = (
    event: MouseEvent<HTMLDivElement>,
    content: { project: string; month: string; status: string; note: string },
  ) => {
    setTooltip({
      visible: true,
      x: event.clientX,
      y: event.clientY,
      content,
    });
  };

  const handleLeave = () => {
    setTooltip((prev) => ({ ...prev, visible: false }));
  };

  return (
    <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft">
      <div className="overflow-x-auto">
        <div className="sticky top-0 z-10 min-w-[1320px] border-b border-slate-200 bg-slate-50/95 px-2 py-3 backdrop-blur">
          <div className="grid grid-cols-[300px_170px_170px_1fr] text-xs font-semibold uppercase tracking-wide text-slate-500">
            <div className="px-2">Entidad</div>
            <div className="px-3 text-right">PPTO. Base</div>
            <div className="px-3 text-right">PPTO. Proy.</div>
            <div className="px-2">Cronograma mensual</div>
          </div>
          <div className="grid grid-cols-[300px_170px_170px_1fr] pt-2">
            <div />
            <div />
            <div />
            <div className="overflow-x-auto px-2">
              <TimelineHeader months={months} />
            </div>
          </div>
        </div>

        <div>
          {projects.map((project) => (
            <ProjectRow
              key={project.id}
              project={project}
              months={months}
              isExpanded={expandedIds.includes(project.id)}
              onToggleExpand={handleToggleExpand}
              onCellHover={handleHover}
              onCellLeave={handleLeave}
            />
          ))}
        </div>
      </div>
      <Tooltip visible={tooltip.visible} x={tooltip.x} y={tooltip.y} content={tooltip.content} />
    </div>
  );
};

export default ProjectTable;
