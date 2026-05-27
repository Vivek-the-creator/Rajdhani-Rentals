import { ShieldCheck } from 'lucide-react';
import { CTASection } from '../components/sections/CTASection';
import { StatCounter } from '../components/sections/StatCounter';
import { LazyImage } from '../components/ui/LazyImage';
import { Reveal } from '../components/ui/Reveal';
import { SectionHeader } from '../components/ui/SectionHeader';
import { images } from '../data/images';
import { leadership, quickFacts, stats, timeline } from '../data/site';

export function AboutPage() {
  return (
    <>
      <section className="bg-slate-50 pt-32 dark:bg-slate-950">
        <div className="container-page grid gap-12 pb-20 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <Reveal>
            <p className="eyebrow">About Rajdhani Rentals LLP</p>
            <h1 className="mt-5 font-display text-4xl font-extrabold sm:text-6xl">A safer, sharper way to rent aerial access equipment.</h1>
            <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
              We support construction, infrastructure and industrial teams with reliable machines, practical site guidance and responsive rental coordination.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <LazyImage src={images.about} alt="Industrial engineers reviewing equipment plan" className="aspect-[4/3] w-full rounded-lg shadow-industrial" />
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-white dark:bg-brand-dark">
        <div className="container-page grid gap-12 lg:grid-cols-3">
          {['Mission', 'Vision', 'Safety Commitment'].map((title, index) => (
            <Reveal key={title} delay={index * 0.06} className="rounded-lg border p-8 dark:bg-slate-950">
              <ShieldCheck className="h-10 w-10 text-brand-blue dark:text-brand-yellow" />
              <h2 className="mt-6 font-display text-2xl font-extrabold">{title}</h2>
              <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
                {title === 'Mission'
                  ? 'To make safe work-at-height equipment accessible, dependable and professionally managed for project teams across India.'
                  : title === 'Vision'
                    ? 'To be the most trusted aerial access rental partner for complex construction and industrial environments.'
                    : 'To put machine condition, operator awareness and site readiness at the center of every rental engagement.'}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-pad bg-slate-50 dark:bg-slate-950">
        <div className="container-page grid gap-12 lg:grid-cols-[0.9fr_1fr] lg:items-start">
          <SectionHeader eyebrow="Company story" title="Engineered around reliability, not just availability." description="Rajdhani Rentals was built for customers who need more than a machine drop-off. Our team helps select the right height, reach, power source and site setup for safer execution." />
          <div className="grid gap-5">
            {timeline.map((item) => (
              <Reveal key={item.year} className="flex gap-5 rounded-lg border bg-white p-6 dark:bg-brand-dark">
                <div className="font-display text-2xl font-extrabold text-brand-blue dark:text-brand-yellow">{item.year}</div>
                <div className="pt-1 font-semibold">{item.title}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-blue py-14 text-white">
        <div className="container-page grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => <StatCounter key={stat.label} {...stat} />)}
        </div>
      </section>

      <section className="section-pad bg-white dark:bg-brand-dark">
        <div className="container-page">
          <SectionHeader eyebrow="Leadership" title="Experienced teams for equipment, operations and site safety." />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {leadership.map((person) => (
              <Reveal key={person.name} className="rounded-lg border bg-slate-50 p-6 dark:bg-slate-950">
                <LazyImage src={person.image} alt={person.name} className="aspect-square w-full rounded-md" />
                <h3 className="mt-5 font-display text-xl font-extrabold">{person.name}</h3>
                <p className="text-brand-blue dark:text-brand-yellow">{person.role}</p>
              </Reveal>
            ))}
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {quickFacts.map((fact) => (
              <div key={fact.label} className="flex items-center gap-3 rounded-md bg-slate-100 p-4 font-semibold dark:bg-slate-900">
                <fact.icon className="h-5 w-5 text-brand-blue dark:text-brand-yellow" />
                {fact.label}
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
