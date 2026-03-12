export type SortKey = 'entity' | 'budget_base' | 'budget_projected';

interface FiltersBarProps {
  query: string;
  onQueryChange: (value: string) => void;
  sortBy: SortKey;
  onSortByChange: (value: SortKey) => void;
}

const FiltersBar = ({ query, onQueryChange, sortBy, onSortByChange }: FiltersBarProps) => (
  <div className="flex flex-col gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm md:flex-row md:items-center md:justify-between">
    <div className="flex flex-1 flex-col gap-1">
      <label htmlFor="entity-filter" className="text-xs font-medium text-slate-500">
        Buscar entidad
      </label>
      <input
        id="entity-filter"
        value={query}
        onChange={(event) => onQueryChange(event.target.value)}
        placeholder="Ej. Talara"
        className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 outline-none transition focus:border-slate-400"
      />
    </div>
    <div className="flex flex-col gap-1 md:w-64">
      <label htmlFor="order-filter" className="text-xs font-medium text-slate-500">
        Ordenar por
      </label>
      <select
        id="order-filter"
        value={sortBy}
        onChange={(event) => onSortByChange(event.target.value as SortKey)}
        className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 outline-none transition focus:border-slate-400"
      >
        <option value="entity">Entidad (A-Z)</option>
        <option value="budget_base">PPTO. Base (mayor a menor)</option>
        <option value="budget_projected">PPTO. Proy. (mayor a menor)</option>
      </select>
    </div>
  </div>
);

export default FiltersBar;
