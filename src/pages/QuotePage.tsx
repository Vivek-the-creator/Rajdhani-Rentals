import { ArrowRight, ShieldCheck, Truck, Wrench } from 'lucide-react';
import { InquiryForm } from '../components/sections/InquiryForm';
import { LazyImage } from '../components/ui/LazyImage';
import { images } from '../data/images';

export function QuotePage() {
  const benefits = [
    { icon: ShieldCheck, title: 'Safety-led selection' },
    { icon: Truck, title: 'Rental logistics support' },
    { icon: Wrench, title: 'Maintained equipment fleet' },
  ];

  return (
    <section className="min-h-screen bg-brand-dark pt-28 text-white">
      <div className="container-page grid gap-12 pb-24 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="sticky top-28">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-yellow">Get quote</p>
          <h1 className="mt-5 font-display text-4xl font-extrabold sm:text-6xl">Request equipment for your next project.</h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Tell us your working height, project location and rental window. Our team will respond with availability and the right machine options.
          </p>
          <div className="mt-8 grid gap-3">
            {benefits.map((item) => (
              <div key={item.title} className="flex items-center gap-3 rounded-md bg-white/8 p-4">
                <item.icon className="h-5 w-5 text-brand-yellow" />
                <span className="font-semibold">{item.title}</span>
              </div>
            ))}
          </div>
          <LazyImage src={images.operator} alt="Equipment operator at industrial site" className="mt-8 aspect-[16/10] w-full rounded-lg opacity-90" />
        </div>

        <div className="rounded-lg bg-white p-6 text-brand-ink shadow-2xl dark:bg-slate-950 dark:text-white lg:p-8">
          <div className="mb-6 flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-md bg-brand-yellow text-brand-ink">
              <ArrowRight className="h-5 w-5" />
            </span>
            <div>
              <h2 className="font-display text-2xl font-extrabold">Quote Request Form</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">Our team will review your requirement and respond with suitable options.</p>
            </div>
          </div>
          <InquiryForm includeStartDate />
        </div>
      </div>
    </section>
  );
}
