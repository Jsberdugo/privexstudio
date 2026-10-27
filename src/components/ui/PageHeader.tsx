import type { ReactNode } from 'react';

type PageHeaderProps = {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
};

/** Centered page title: thin label, large serif title, light intro. */
export default function PageHeader({ eyebrow, title, intro }: PageHeaderProps) {
  return (
    <header className="pt-14 pb-10 md:pt-20 md:pb-14 px-5 text-center max-w-3xl mx-auto">
      <span className="label text-[#726058] block mb-4">{eyebrow}</span>
      <h1 className="font-playfair text-[44px] md:text-6xl font-normal text-[#4A0D1A] leading-[1.05]">{title}</h1>
      {intro && <p className="mt-5 text-[17px] md:text-lg font-light leading-relaxed text-[#5D4E47]">{intro}</p>}
      <div className="mx-auto mt-10 w-16 h-px bg-[#C5B4A6]" />
    </header>
  );
}
