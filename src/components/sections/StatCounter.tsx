import { motion, useInView } from 'framer-motion';
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
    <motion.div
      ref={ref}
      whileHover={{ y: -4, backgroundColor: 'rgba(255,255,255,0.08)' }}
      transition={{ duration: 0.25 }}
      className="rounded-md border-l border-white/20 px-5 py-3"
    >
      <p className="font-display text-4xl font-extrabold text-white">
        {current}
        {suffix}
      </p>
      <p className="mt-1 text-sm font-semibold uppercase tracking-[0.16em] text-slate-300">{label}</p>
    </motion.div>
  );
}
