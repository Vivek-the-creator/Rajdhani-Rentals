import { Mail, MapPin, Phone } from 'lucide-react';
import { InquiryForm } from '../components/sections/InquiryForm';
import { SectionHeader } from '../components/ui/SectionHeader';
import { contactInfo } from '../data/site';

export function ContactPage() {
  const items = [
    { icon: Phone, label: 'Phone', value: contactInfo.phone },
    { icon: Mail, label: 'Email', value: contactInfo.email },
    { icon: MapPin, label: 'Address', value: contactInfo.address },
  ];

  return (
    <section className="min-h-screen bg-slate-50 pt-32 dark:bg-slate-950">
      <div className="container-page pb-24">
        <SectionHeader eyebrow="Contact" title="Talk to our aerial access rental team." description="Send your project requirements and we will help with equipment selection, availability and rental planning." />
        <div className="mt-12 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-4">
            {items.map((item) => (
              <div key={item.label} className="rounded-lg border bg-white p-6 dark:bg-brand-dark">
                <item.icon className="h-7 w-7 text-brand-blue dark:text-brand-yellow" />
                <p className="mt-4 text-sm font-bold uppercase tracking-[0.16em] text-slate-500">{item.label}</p>
                <p className="mt-2 text-lg font-semibold">{item.value}</p>
              </div>
            ))}
            <div className="grid min-h-72 place-items-center rounded-lg border bg-white p-8 text-center dark:bg-brand-dark">
              <div>
                <p className="font-display text-2xl font-extrabold">Google Maps</p>
                <p className="mt-3 text-slate-600 dark:text-slate-300">Map embed placeholder for office and equipment yard location.</p>
              </div>
            </div>
          </div>
          <div className="rounded-lg border bg-white p-6 shadow-lift dark:bg-brand-dark lg:p-8">
            <h2 className="font-display text-2xl font-extrabold">Send an Inquiry</h2>
            <div className="mt-6">
              <InquiryForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
