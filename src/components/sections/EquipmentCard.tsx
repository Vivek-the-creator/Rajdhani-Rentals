import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Equipment } from '../../types';
import { LazyImage } from '../ui/LazyImage';

export function EquipmentCard({ item }: { item: Equipment }) {
  return (
    <article className="group overflow-hidden rounded-lg border bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-industrial dark:bg-slate-950">
      <div className="aspect-[4/3] overflow-hidden">
        <LazyImage src={item.image} alt={item.name} className="h-full w-full transition duration-700 group-hover:scale-105" />
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
    </article>
  );
}
