import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { ClientCarousel } from '../components/sections/ClientCarousel';
import { CTASection } from '../components/sections/CTASection';
import { EquipmentCard } from '../components/sections/EquipmentCard';
import { ProjectCard } from '../components/sections/ProjectCard';
import { StatCounter } from '../components/sections/StatCounter';
import { Button } from '../components/ui/Button';
import { LazyImage } from '../components/ui/LazyImage';
import { Reveal } from '../components/ui/Reveal';
import { SectionHeader } from '../components/ui/SectionHeader';
import { equipment } from '../data/equipment';
import { images } from '../data/images';
import { projects } from '../data/projects';
import { industries, stats, testimonials, whyChooseUs } from '../data/site';

export function HomePage() {
  return (
    <>
      <section className="relative flex min-h-screen items-center overflow-hidden pt-20 text-white">
        <LazyImage src={images.hero} alt="Aerial lift at industrial construction site" className="absolute inset-0 h-full w-full" />
        <div className="absolute inset-0 bg-brand-dark/72" />
        <div className="container-page relative z-10 py-24">
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-5xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-yellow">Aerial access equipment rental</p>
            <h1 className="mt-6 font-display text-4xl font-extrabold leading-tight sm:text-6xl lg:text-7xl">
              India's Trusted Aerial Access Equipment Rental Partner
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200 sm:text-xl">
              Reliable Boom Lifts, Cherry Pickers, Skylifts and Scissor Lifts Available Across India.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button to="/quote" variant="secondary" icon={ArrowRight}>Get Quote</Button>
              <Button to="/equipment" variant="dark">Explore Equipment</Button>
            </div>
          </motion.div>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => <StatCounter key={stat.label} {...stat} />)}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white dark:bg-brand-dark">
        <div className="container-page">
          <SectionHeader eyebrow="Why choose us" title="Built for safe work at height, planned like critical infrastructure." />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.05} className="rounded-lg border bg-slate-50 p-7 transition hover:-translate-y-1 hover:shadow-lift dark:bg-slate-950">
                <item.icon className="h-9 w-9 text-brand-blue dark:text-brand-yellow" />
                <h3 className="mt-5 font-display text-xl font-extrabold">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{item.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-slate-50 dark:bg-slate-950">
        <div className="container-page">
          <SectionHeader eyebrow="Equipment categories" title="Access platforms for construction, plants and infrastructure." />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {equipment.map((item, index) => (
              <Reveal key={item.id} delay={index * 0.05}><EquipmentCard item={item} /></Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white dark:bg-brand-dark">
        <div className="container-page">
          <SectionHeader eyebrow="Industries" title="Professional access support wherever uptime and safety matter." align="center" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((item) => (
              <Reveal key={item.title} className="flex gap-5 rounded-lg border p-6 dark:bg-slate-950">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-md bg-brand-blue/10 text-brand-blue dark:bg-brand-yellow/15 dark:text-brand-yellow">
                  <item.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-extrabold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-slate-50 dark:bg-slate-950">
        <div className="container-page">
          <SectionHeader eyebrow="Featured projects" title="Rental execution for demanding industrial environments." />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {projects.map((project, index) => (
              <Reveal key={project.id} delay={index * 0.06}><ProjectCard project={project} /></Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-12 dark:bg-brand-dark">
        <SectionHeader eyebrow="Clients" title="Trusted by project teams that value dependable access." align="center" />
        <div className="mt-10"><ClientCarousel /></div>
      </section>

      <section className="section-pad bg-slate-50 dark:bg-slate-950">
        <div className="container-page">
          <SectionHeader eyebrow="Testimonials" title="Clear communication, reliable equipment and disciplined service." />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {testimonials.map((item) => (
              <Reveal key={item.name} className="rounded-lg border bg-white p-7 shadow-sm dark:bg-brand-dark">
                <CheckCircle2 className="h-8 w-8 text-brand-yellow" />
                <p className="mt-5 leading-8 text-slate-700 dark:text-slate-200">"{item.feedback}"</p>
                <div className="mt-6 flex items-center gap-4">
                  <LazyImage src={item.image} alt={item.name} className="h-14 w-14 rounded-full" />
                  <div>
                    <p className="font-bold">{item.name}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{item.company}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
