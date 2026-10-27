import type { CSSProperties } from 'react';

type PhotoProps = {
  src: string;
  alt: string;
  className?: string;
  position?: string;
  /** Optional object-position from the `md` breakpoint up. */
  positionDesktop?: string;
  eager?: boolean;
};

export default function Photo({ src, alt, className = '', position = 'center', positionDesktop, eager }: PhotoProps) {
  const style = { '--pos': position, '--pos-md': positionDesktop ?? position } as CSSProperties;
  return (
    <div className={`w-full overflow-hidden bg-[#E8DDD3] ${className}`}>
      <img
        src={src}
        alt={alt}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        className="w-full h-full object-cover object-(--pos) md:object-(--pos-md)"
        style={style}
      />
    </div>
  );
}
