import { Search } from 'lucide-react';
import { useMemo, useState } from 'react';
import { ProjectCard } from '../components/sections/ProjectCard';
import { SectionHeader } from '../components/ui/SectionHeader';
import { projectCategories, projects } from '../data/projects';
import { normalizedIncludes } from '../utils/filter';

export function ProjectsPage() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');

  const filtered = useMemo(
    () =>
      projects.filter((project) => {
        const matchesQuery = normalizedIncludes(project.name, query) || normalizedIncludes(project.description, query);
        const matchesCategory = category === 'All' || project.category === category;
        return matchesQuery && matchesCategory;
      }),
    [category, query],
  );

  return (
    <section className="min-h-screen bg-slate-50 pt-32 dark:bg-slate-950">
      <div className="container-page pb-24">
        <SectionHeader eyebrow="Projects" title="Aerial access rental work across infrastructure, logistics and industry." />
        <div className="mt-10 grid gap-4 rounded-lg border bg-white p-4 dark:bg-brand-dark md:grid-cols-[1fr_220px]">
          <label className="relative block">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
            <input value={query} onChange={(event) => setQuery(event.target.value)} className="focus-ring w-full rounded-md border bg-white py-3 pl-12 pr-4 dark:bg-slate-950" placeholder="Search projects" />
          </label>
          <select value={category} onChange={(event) => setCategory(event.target.value)} className="focus-ring rounded-md border bg-white px-4 py-3 dark:bg-slate-950">
            <option>All</option>
            {projectCategories.map((item) => <option key={item}>{item}</option>)}
          </select>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {filtered.map((project) => <ProjectCard key={project.id} project={project} />)}
        </div>
      </div>
    </section>
  );
}
