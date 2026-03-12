import { getStatusMeta } from '../helpers/format';
import { TimelineStatus } from '../types/project';

const statuses: TimelineStatus[] = [
  'ejecucion',
  'proceso_seleccion',
  'actos_previos',
  'coordinaciones_iniciales',
  'vacio',
];

const Legend = () => (
  <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
    <h2 className="mb-3 text-sm font-semibold text-slate-700">Leyenda de estados</h2>
    <ul className="space-y-2">
      {statuses.map((status) => {
        const meta = getStatusMeta(status);
        return (
          <li key={status} className="flex items-center gap-2 text-xs text-slate-600">
            <span className={`inline-block h-4 w-4 rounded border border-slate-300 ${meta.bgClass}`} />
            {meta.label}
          </li>
        );
      })}
    </ul>
  </div>
);

export default Legend;
