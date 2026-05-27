import { AnimatePresence, motion } from 'framer-motion';
import { Menu, Moon, Phone, Sun, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme';
import { navLinks } from '../../data/site';
import { Button } from '../ui/Button';

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 20);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `rounded-md px-3 py-2 text-sm font-semibold transition hover:text-brand-blue dark:hover:text-brand-yellow ${
      isActive ? 'text-brand-blue dark:text-brand-yellow' : 'text-slate-700 dark:text-slate-200'
    }`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[60] border-b transition duration-300 ${
        scrolled ? 'border-slate-200/80 bg-white/92 shadow-sm backdrop-blur-xl dark:border-slate-800/80 dark:bg-brand-dark/92' : 'border-transparent bg-white/80 backdrop-blur-md dark:bg-brand-dark/75'
      }`}
    >
      <nav className="container-page flex h-20 items-center justify-between" aria-label="Main navigation">
        <NavLink to="/" className="focus-ring flex items-center gap-3 rounded-md" onClick={() => setOpen(false)}>
          <span className="grid h-11 w-11 place-items-center rounded-md bg-brand-blue font-display text-lg font-extrabold text-white">
            RR
          </span>
          <span>
            <span className="block font-display text-lg font-extrabold leading-5 text-brand-ink dark:text-white">Rajdhani</span>
            <span className="block text-xs font-bold uppercase tracking-[0.22em] text-brand-blue dark:text-brand-yellow">
              Rentals LLP
            </span>
          </span>
        </NavLink>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <NavLink key={link.path} to={link.path} className={linkClass}>
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            type="button"
            onClick={toggleTheme}
            className="focus-ring rounded-md border border-slate-200 p-3 text-slate-700 transition hover:border-brand-blue hover:text-brand-blue dark:border-slate-700 dark:text-slate-200 dark:hover:border-brand-yellow dark:hover:text-brand-yellow"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <Button to="/quote" variant="secondary" icon={Phone}>
            Get Quote
          </Button>
        </div>

        <button
          type="button"
          className="focus-ring rounded-md p-2 text-brand-ink dark:text-white lg:hidden"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="h-7 w-7" />
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <>
            <motion.button
              type="button"
              className="fixed inset-0 z-[70] bg-brand-dark/60 lg:hidden"
              aria-label="Close menu overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.div
              className="fixed right-0 top-0 z-[80] h-dvh w-full max-w-sm bg-white p-6 shadow-2xl dark:bg-brand-dark lg:hidden"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-xl font-extrabold">Rajdhani Rentals</span>
                <button type="button" className="focus-ring rounded-md p-2" onClick={() => setOpen(false)} aria-label="Close menu">
                  <X className="h-6 w-6" />
                </button>
              </div>
              <div className="mt-8 grid gap-2">
                {navLinks.map((link) => (
                  <NavLink key={link.path} to={link.path} className={linkClass} onClick={() => setOpen(false)}>
                    {link.label}
                  </NavLink>
                ))}
              </div>
              <div className="mt-8 grid gap-3">
                <button
                  type="button"
                  onClick={toggleTheme}
                  className="focus-ring flex items-center justify-center gap-2 rounded-md border border-slate-200 px-4 py-3 font-semibold dark:border-slate-700"
                >
                  {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                  Theme
                </button>
                <Button to="/quote" variant="secondary" icon={Phone} onClick={() => setOpen(false)}>
                  Get Quote
                </Button>
              </div>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
