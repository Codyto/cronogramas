# Dashboard de cronogramas ejecutivos

Aplicación web en React + TypeScript + Tailwind para visualizar y gestionar cronogramas de múltiples proyectos con una vista tipo Gantt ejecutivo basada en datos JSON locales.

## Ejecutar localmente

1. Instala dependencias:
   ```bash
   npm install
   ```
2. Inicia en modo desarrollo:
   ```bash
   npm run dev
   ```
3. Compila para producción:
   ```bash
   npm run build
   ```

## Actualizar la información

Todo el contenido se alimenta desde `src/data/projects.json`:

- `months`: define la escala mensual horizontal (`YYYY-MM`).
- `projects`: lista de proyectos.
  - `entity`, `budget_base`, `budget_projected`: datos visibles en columnas.
  - `timeline["YYYY-MM"]`: estado y observación por mes.
  - `milestones`: meses que mostrarán marcador `✕`.
  - `details`: datos mostrados al expandir cada fila.

Guarda el JSON y el dashboard se actualiza automáticamente.

## Estructura principal

```text
src/
  components/
    Dashboard.tsx
    FiltersBar.tsx
    Legend.tsx
    ProjectDetailsPanel.tsx
    ProjectRow.tsx
    ProjectTable.tsx
    TimelineHeader.tsx
    Tooltip.tsx
  data/
    projects.json
  helpers/
    format.ts
  types/
    project.ts
  index.css
  main.tsx
```
