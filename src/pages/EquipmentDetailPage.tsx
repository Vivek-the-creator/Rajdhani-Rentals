import { CheckCircle2 } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { InquiryForm } from '../components/sections/InquiryForm';
import { EquipmentCard } from '../components/sections/EquipmentCard';
import { LazyImage } from '../components/ui/LazyImage';
import { equipment } from '../data/equipment';

export function EquipmentDetailPage() {
  const { id } = useParams();
  const item = equipment.find((entry) => entry.id === id) ?? equipment[0];
  const related = equipment.filter((entry) => entry.id !== item.id).slice(0, 3);

  return (
    <section className="bg-white pt-32 dark:bg-brand-dark">
      <div className="container-page pb-24">
        <Link to="/equipment" className="text-sm font-bold text-brand-blue dark:text-brand-yellow">Back to equipment</Link>
        <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_380px] lg:items-start">
          <div>
            <div className="grid gap-4 md:grid-cols-[1fr_160px]">
              <LazyImage src={item.image} alt={item.name} className="aspect-[16/10] w-full rounded-lg shadow-industrial" />
              <div className="grid grid-cols-3 gap-3 md:grid-cols-1">
                {item.gallery.map((image) => (
                  <LazyImage key={image} src={image} alt={`${item.name} gallery`} className="aspect-square w-full rounded-md" />
                ))}
              </div>
            </div>

            <div className="mt-10">
              <p className="eyebrow">{item.category}</p>
              <h1 className="mt-4 font-display text-4xl font-extrabold sm:text-6xl">{item.name}</h1>
              <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">{item.description}</p>
            </div>

            <div className="mt-10 overflow-hidden rounded-lg border">
              <table className="w-full text-left text-sm">
                <tbody className="divide-y dark:divide-slate-800">
                  {Object.entries(item.specs).map(([key, value]) => (
                    <tr key={key} className="bg-white dark:bg-slate-950">
                      <th className="w-1/3 px-5 py-4 font-bold capitalize text-slate-700 dark:text-slate-200">{key.replace(/([A-Z])/g, ' $1')}</th>
                      <td className="px-5 py-4 text-slate-600 dark:text-slate-300">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <InfoGrid title="Features" items={item.features} />
            <InfoGrid title="Applications" items={item.applications} />
            <InfoGrid title="Safety Notes" items={item.safetyNotes} />

            <h2 className="mt-14 font-display text-3xl font-extrabold">Related Equipment</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {related.map((entry) => <EquipmentCard key={entry.id} item={entry} />)}
            </div>
          </div>

          <aside className="sticky top-28 rounded-lg border bg-slate-50 p-6 shadow-lift dark:bg-slate-950">
            <h2 className="font-display text-2xl font-extrabold">Inquiry Form</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">Share your project details and our team will confirm availability.</p>
            <div className="mt-6">
              <InquiryForm compact />
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function InfoGrid({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="mt-10">
      <h2 className="font-display text-2xl font-extrabold">{title}</h2>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <div key={item} className="flex gap-3 rounded-md bg-slate-50 p-4 dark:bg-slate-950">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-blue dark:text-brand-yellow" />
            <span className="text-slate-700 dark:text-slate-200">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
