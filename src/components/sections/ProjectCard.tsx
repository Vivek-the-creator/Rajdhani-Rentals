import { motion } from 'framer-motion';
import type { Project } from '../../types';
import { LazyImage } from '../ui/LazyImage';

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.995 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className="group overflow-hidden rounded-lg border bg-white shadow-sm transition-shadow duration-300 hover:shadow-industrial dark:bg-slate-950"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <LazyImage src={project.image} alt={project.name} className="h-full w-full transition duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-brand-blue/0 transition duration-500 group-hover:bg-brand-blue/15" />
      </div>
      <div className="p-6">
        <p className="text-sm font-bold uppercase tracking-[0.16em] text-brand-blue dark:text-brand-yellow">{project.industry}</p>
        <h3 className="mt-3 font-display text-xl font-extrabold text-brand-ink dark:text-white">{project.name}</h3>
        <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{project.description}</p>
      </div>
    </motion.article>
  );
}
