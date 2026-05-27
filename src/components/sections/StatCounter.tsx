import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useCounter } from '../../hooks/useCounter';

interface StatCounterProps {
  value: number;
  suffix: string;
  label: string;
}

export function StatCounter({ value, suffix, label }: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const active = useInView(ref, { once: true, margin: '-80px' });
  const current = useCounter(value, active);

  return (
    <div ref={ref} className="border-l border-white/20 pl-5">
      <p className="font-display text-4xl font-extrabold text-white">
        {current}
        {suffix}
      </p>
      <p className="mt-1 text-sm font-semibold uppercase tracking-[0.16em] text-slate-300">{label}</p>
    </div>
  );
}
