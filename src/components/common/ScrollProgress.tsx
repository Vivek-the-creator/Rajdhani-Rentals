import { useScrollProgress } from '../../hooks/useScrollProgress';

export function ScrollProgress() {
  const progress = useScrollProgress();
  return (
    <div className="fixed left-0 top-0 z-[70] h-1 w-full bg-transparent" aria-hidden="true">
      <div className="h-full bg-brand-yellow transition-[width] duration-150" style={{ width: `${progress}%` }} />
    </div>
  );
}
