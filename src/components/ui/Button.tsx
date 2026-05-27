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
  'focus-ring inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-bold transition duration-300 ease-premium disabled:cursor-not-allowed disabled:opacity-60';

export function Button({ children, to, variant = 'primary', icon: Icon, className = '', ...props }: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;
  const content = (
    <>
      {Icon ? <Icon aria-hidden="true" className="h-4 w-4" /> : null}
      {children}
    </>
  );

  if (to) {
    return (
      <Link className={classes} to={to}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {content}
    </button>
  );
}
