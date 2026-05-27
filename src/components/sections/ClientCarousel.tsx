import { images } from '../../data/images';

export function ClientCarousel() {
  const logos = [...images.clients, ...images.clients];

  return (
    <div className="overflow-hidden border-y bg-slate-50 py-8 dark:bg-slate-950">
      <div className="flex w-max animate-[marquee_28s_linear_infinite] gap-8">
        {logos.map((logo, index) => (
          <div key={`${logo}-${index}`} className="grid h-20 w-48 place-items-center rounded-md border bg-white p-4 shadow-sm dark:bg-white">
            <img src={logo} alt="Client logo" loading="lazy" className="max-h-12 w-auto" />
          </div>
        ))}
      </div>
    </div>
  );
}
