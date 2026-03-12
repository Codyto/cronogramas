import { useMemo, useState } from 'react';
import data from '../data/projects.json';
import { DashboardData, Project } from '../types/project';
import FiltersBar, { SortKey } from './FiltersBar';
import Legend from './Legend';
import ProjectTable from './ProjectTable';

const typedData = data as DashboardData;

const Dashboard = () => {
  const [query, setQuery] = useState('');
  const [sortBy, setSortBy] = useState<SortKey>('entity');

  const filteredProjects = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    const queried = typedData.projects.filter((project) =>
      project.entity.toLowerCase().includes(normalizedQuery),
    );

    const sorter: Record<SortKey, (a: Project, b: Project) => number> = {
      entity: (a, b) => a.entity.localeCompare(b.entity, 'es'),
      budget_base: (a, b) => b.budget_base - a.budget_base,
      budget_projected: (a, b) => b.budget_projected - a.budget_projected,
    };

    return [...queried].sort(sorter[sortBy]);
  }, [query, sortBy]);

  return (
    <main className="mx-auto min-h-screen max-w-[1500px] space-y-6 px-4 py-8 md:px-6">
      <header className="space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
          Dashboard de cronogramas de desarrollo
        </h1>
        <p className="max-w-4xl text-sm text-slate-600 md:text-base">
          Vista ejecutiva para monitorear el avance mensual por entidad, presupuestos base y
          proyectados, hitos y observaciones clave.
        </p>
      </header>

      <section className="grid gap-4 lg:grid-cols-[1fr_260px]">
        <FiltersBar query={query} onQueryChange={setQuery} sortBy={sortBy} onSortByChange={setSortBy} />
        <Legend />
      </section>

      <ProjectTable months={typedData.months} projects={filteredProjects} />
    </main>
  );
};

export default Dashboard;
