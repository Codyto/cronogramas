import { formatMonthLabel } from '../helpers/format';

interface TimelineHeaderProps {
  months: string[];
}

const TimelineHeader = ({ months }: TimelineHeaderProps) => (
  <div className="grid min-w-[760px]" style={{ gridTemplateColumns: `repeat(${months.length}, minmax(58px, 1fr))` }}>
    {months.map((monthKey) => {
      const { year, month } = formatMonthLabel(monthKey);
      return (
        <div key={monthKey} className="border-l border-slate-200 px-1 py-2 text-center">
          <p className="text-[10px] font-medium tracking-wide text-slate-400">{year}</p>
          <p className="text-xs font-semibold text-slate-600">{month}</p>
        </div>
      );
    })}
  </div>
);

export default TimelineHeader;
