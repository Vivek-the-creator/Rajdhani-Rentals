import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import type { ButtonHTMLAttributes, ReactNode } from 'react';
import type { LucideIcon } from 'lucide-react';

type Variant = 'primary' | 'secondary' | 'ghost' | 'dark';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  to?: string;
  variant?: Variant;
  icon?: LucideIcon;
}

const variants: Record<Variant, string> = {
  primary: 'bg-brand-blue text-white shadow-lift hover:bg-[#0b3f6e]',
  secondary: 'bg-brand-yellow text-brand-ink shadow-lift hover:bg-[#f2b400]',
  ghost: 'bg-transparent text-brand-blue hover:bg-brand-blue/10 dark:text-brand-yellow dark:hover:bg-white/10',
  dark: 'bg-brand-dark text-white hover:bg-slate-800 dark:bg-white dark:text-brand-dark dark:hover:bg-slate-200',
};

const base =
  'focus-ring relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-md px-5 py-3 text-sm font-bold transition duration-300 ease-premium disabled:cursor-not-allowed disabled:opacity-60';

export function Button({ children, to, variant = 'primary', icon: Icon, className = '', ...props }: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;
  const content = (
    <>
      <span className="absolute inset-y-0 -left-12 w-10 rotate-12 bg-white/35 opacity-0 blur-sm transition-all duration-700 group-hover:left-[115%] group-hover:opacity-100" />
      {Icon ? <Icon aria-hidden="true" className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" /> : null}
      <span className="relative z-10">{children}</span>
    </>
  );

  if (to) {
    return (
      <motion.span whileHover={{ y: -3 }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.2 }} className="group inline-flex">
        <Link className={classes} to={to}>
          {content}
        </Link>
      </motion.span>
    );
  }

  return (
    <motion.span whileHover={{ y: -3 }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.2 }} className="group inline-flex">
      <button className={classes} {...props}>
        {content}
      </button>
    </motion.span>
  );
}
