import { ArrowRight, PhoneCall } from 'lucide-react';
import { Button } from '../ui/Button';
import { Reveal } from '../ui/Reveal';

export function CTASection() {
  return (
    <section className="bg-brand-blue py-16 text-white dark:bg-slate-950">
      <Reveal className="container-page flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-yellow">Project-ready fleet</p>
          <h2 className="mt-4 font-display text-3xl font-extrabold sm:text-5xl">Need Equipment For Your Next Project?</h2>
          <p className="mt-5 text-lg leading-8 text-blue-50">
            Share your site requirements and our team will help match the right aerial access equipment for the job.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button to="/quote" variant="secondary" icon={ArrowRight}>Request Quote</Button>
          <Button to="/contact" variant="dark" icon={PhoneCall}>Contact Team</Button>
        </div>
      </Reveal>
    </section>
  );
}
