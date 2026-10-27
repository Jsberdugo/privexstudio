import { useState, type ReactNode } from 'react';

type AccordionProps = {
  title: ReactNode;
  children: ReactNode;
  defaultOpen?: boolean;
  /** Larger serif title for section-level accordions. */
  variant?: 'question' | 'section';
};

/** Expandable row separated by hairlines, used for FAQ, policies and service details. */
export default function Accordion({ title, children, defaultOpen = false, variant = 'question' }: AccordionProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-[#E8DDD3]">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="w-full text-left py-5 flex items-center justify-between gap-6 cursor-pointer group"
      >
        <span
          className={
            variant === 'section'
              ? 'font-playfair text-2xl md:text-[28px] font-normal text-[#4A0D1A] leading-tight'
              : 'text-[17px] md:text-lg font-normal text-[#2D2424] group-hover:text-[#4A0D1A] transition-colors'
          }
        >
          {title}
        </span>
        <span
          aria-hidden
          className={`relative w-4 h-4 shrink-0 text-[#4A0D1A] transition-transform duration-300 ${open ? 'rotate-45' : ''}`}
        >
          <span className="absolute left-0 top-1/2 w-4 h-px bg-current" />
          <span className="absolute top-0 left-1/2 h-4 w-px bg-current" />
        </span>
      </button>
      <div className={`grid transition-all duration-300 ease-out ${open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
        <div className="overflow-hidden">
          <div className="pb-6 pr-8 text-base md:text-[17px] leading-relaxed text-[#5D4E47]">{children}</div>
        </div>
      </div>
    </div>
  );
}
