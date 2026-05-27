interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function LazyImage({ src, alt, className = '' }: LazyImageProps) {
  return <img src={src} alt={alt} loading="lazy" decoding="async" className={`bg-slate-100 object-cover dark:bg-slate-900 ${className}`} />;
}
