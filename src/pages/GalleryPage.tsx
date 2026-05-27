import { X } from 'lucide-react';
import { useMemo, useState } from 'react';
import { LazyImage } from '../components/ui/LazyImage';
import { SectionHeader } from '../components/ui/SectionHeader';
import { images } from '../data/images';

const categories = ['All', 'Boom Lifts', 'Scissor Lifts', 'Projects', 'Industrial'];

export function GalleryPage() {
  const [category, setCategory] = useState('All');
  const [active, setActive] = useState<string | null>(null);

  const gallery = useMemo(
    () =>
      images.gallery.map((image, index) => ({
        image,
        category: categories[(index % (categories.length - 1)) + 1],
      })),
    [],
  );

  const filtered = category === 'All' ? gallery : gallery.filter((item) => item.category === category);

  return (
    <section className="min-h-screen bg-white pt-32 dark:bg-brand-dark">
      <div className="container-page pb-24">
        <SectionHeader eyebrow="Gallery" title="Equipment, worksites and industrial access environments." />
        <div className="mt-10 flex flex-wrap gap-3">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setCategory(item)}
              className={`focus-ring rounded-md px-4 py-2 text-sm font-bold transition ${
                category === item ? 'bg-brand-blue text-white dark:bg-brand-yellow dark:text-brand-ink' : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-900 dark:text-slate-200'
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {filtered.map((item, index) => (
            <button key={item.image} type="button" onClick={() => setActive(item.image)} className="focus-ring group mb-5 block w-full overflow-hidden rounded-lg text-left">
              <LazyImage src={item.image} alt={`${item.category} gallery image`} className={`w-full transition duration-700 group-hover:scale-105 ${index % 3 === 0 ? 'aspect-[4/5]' : 'aspect-[4/3]'}`} />
            </button>
          ))}
        </div>
      </div>

      {active ? (
        <div className="fixed inset-0 z-[90] grid place-items-center bg-brand-dark/85 p-4" role="dialog" aria-modal="true">
          <button type="button" onClick={() => setActive(null)} className="focus-ring absolute right-5 top-5 rounded-md bg-white p-2 text-brand-ink" aria-label="Close image preview">
            <X className="h-6 w-6" />
          </button>
          <LazyImage src={active} alt="Gallery preview" className="max-h-[86vh] w-auto max-w-full rounded-lg shadow-2xl" />
        </div>
      ) : null}
    </section>
  );
}
