interface TooltipProps {
  visible: boolean;
  content: {
    project: string;
    month: string;
    status: string;
    note: string;
  };
  x: number;
  y: number;
}

const Tooltip = ({ visible, content, x, y }: TooltipProps) => {
  if (!visible) return null;

  return (
    <div
      className="pointer-events-none fixed z-50 max-w-72 rounded-xl border border-slate-200 bg-white/95 p-3 text-xs shadow-soft backdrop-blur"
      style={{ left: x + 12, top: y + 12 }}
    >
      <p className="font-semibold text-slate-900">{content.project}</p>
      <p className="mt-1 text-slate-600">Mes: {content.month}</p>
      <p className="text-slate-600">Estado: {content.status}</p>
      <p className="mt-2 text-slate-500">{content.note || 'Sin observaciones'}</p>
    </div>
  );
};

export default Tooltip;
