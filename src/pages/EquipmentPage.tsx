import { Search } from 'lucide-react';
import { useMemo, useState } from 'react';
import { EquipmentCard } from '../components/sections/EquipmentCard';
import { SectionHeader } from '../components/ui/SectionHeader';
import { equipment, equipmentCategories } from '../data/equipment';
import { normalizedIncludes } from '../utils/filter';

export function EquipmentPage() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const [availability, setAvailability] = useState('All');

  const filtered = useMemo(
    () =>
      equipment.filter((item) => {
        const matchesQuery = normalizedIncludes(item.name, query) || normalizedIncludes(item.description, query);
        const matchesCategory = category === 'All' || item.category === category;
        const matchesAvailability = availability === 'All' || item.availability === availability;
        return matchesQuery && matchesCategory && matchesAvailability;
      }),
    [availability, category, query],
  );

  return (
    <section className="min-h-screen bg-slate-50 pt-32 dark:bg-slate-950">
      <div className="container-page pb-24">
        <SectionHeader eyebrow="Equipment catalog" title="Searchable aerial access fleet for project-critical work." description="Filter by equipment category and availability, then open detailed specifications and rental inquiry options." />

        <div className="mt-10 grid gap-4 rounded-lg border bg-white p-4 shadow-sm dark:bg-brand-dark lg:grid-cols-[1fr_220px_220px]">
          <label className="relative block">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              className="focus-ring w-full rounded-md border bg-white py-3 pl-12 pr-4 dark:bg-slate-950"
              placeholder="Search equipment"
            />
          </label>
          <select value={category} onChange={(event) => setCategory(event.target.value)} className="focus-ring rounded-md border bg-white px-4 py-3 dark:bg-slate-950">
            <option>All</option>
            {equipmentCategories.map((item) => <option key={item}>{item}</option>)}
          </select>
          <select value={availability} onChange={(event) => setAvailability(event.target.value)} className="focus-ring rounded-md border bg-white px-4 py-3 dark:bg-slate-950">
            <option>All</option>
            <option>Available</option>
            <option>Limited</option>
            <option>On Request</option>
          </select>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => <EquipmentCard key={item.id} item={item} />)}
        </div>
      </div>
    </section>
  );
}
