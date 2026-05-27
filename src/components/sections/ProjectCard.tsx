import type { Project } from '../../types';
import { LazyImage } from '../ui/LazyImage';

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group overflow-hidden rounded-lg border bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-industrial dark:bg-slate-950">
      <div className="aspect-[16/10] overflow-hidden">
        <LazyImage src={project.image} alt={project.name} className="h-full w-full transition duration-700 group-hover:scale-105" />
      </div>
      <div className="p-6">
        <p className="text-sm font-bold uppercase tracking-[0.16em] text-brand-blue dark:text-brand-yellow">{project.industry}</p>
        <h3 className="mt-3 font-display text-xl font-extrabold text-brand-ink dark:text-white">{project.name}</h3>
        <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{project.description}</p>
      </div>
    </article>
  );
}
