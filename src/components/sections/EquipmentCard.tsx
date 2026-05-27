import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Equipment } from '../../types';
import { LazyImage } from '../ui/LazyImage';

export function EquipmentCard({ item }: { item: Equipment }) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.995 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className="group overflow-hidden rounded-lg border bg-white shadow-sm transition-shadow duration-300 hover:shadow-industrial dark:bg-slate-950"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <LazyImage src={item.image} alt={item.name} className="h-full w-full transition duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/45 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
        <div className="absolute inset-y-0 -left-1/2 w-1/3 skew-x-[-18deg] bg-white/20 opacity-0 blur-sm transition duration-700 group-hover:left-[120%] group-hover:opacity-100" />
      </div>
      <div className="p-6">
        <div className="mb-4 flex items-center justify-between gap-3">
          <h3 className="font-display text-xl font-extrabold text-brand-ink dark:text-white">{item.name}</h3>
          <span className="rounded-full bg-brand-blue/10 px-3 py-1 text-xs font-bold text-brand-blue dark:bg-brand-yellow/15 dark:text-brand-yellow">
            {item.availability}
          </span>
        </div>
        <p className="leading-7 text-slate-600 dark:text-slate-300">{item.description}</p>
        <Link
          to={`/equipment/${item.id}`}
          className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-brand-blue transition hover:gap-3 dark:text-brand-yellow"
        >
          Learn More <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </motion.article>
  );
}
