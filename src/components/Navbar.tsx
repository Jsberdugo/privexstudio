import { useState } from 'react';
import Logo from './ui/Logo';
import { CalendarIcon, CloseIcon, MenuIcon } from './ui/icons';
import { Link } from '../router';

/** Left side of the desktop menu. */
export const PRIMARY_LINKS = [
  { label: 'Manicures', to: '/manicures' },
  { label: 'Pedicures', to: '/pedicures' },
  { label: 'Add-Ons', to: '/add-ons' },
  { label: 'Bridal', to: '/bridal' },
  { label: 'About Us', to: '/about' },
];

/** Right side of the desktop menu, next to Manage Booking. */
export const SECONDARY_LINKS = [
  { label: 'Policies', to: '/policies' },
  { label: 'FAQ', to: '/faq' },
];

export const NAV_LINKS = [...PRIMARY_LINKS, ...SECONDARY_LINKS];

const linkClass = (active: boolean) =>
  `label text-[11px] whitespace-nowrap transition-colors hover:text-[#4A0D1A] ${
    active ? 'text-[#4A0D1A] underline underline-offset-8 decoration-[0.5px]' : 'text-[#473B35]'
  }`;

type NavbarProps = {
  path: string;
  onManageBooking: () => void;
};

export default function Navbar({ path, onManageBooking }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <nav className="sticky top-0 z-40 bg-[#FAFAFA]/95 backdrop-blur-md border-b border-[#E8DDD3] px-5 md:px-10">
      <div className="max-w-[1400px] mx-auto h-[72px] md:h-20 flex items-center justify-between gap-4">
        {/* Desktop links */}
        <div className="hidden xl:flex items-center gap-6 flex-1">
          {PRIMARY_LINKS.map((l) => (
            <Link key={l.to} to={l.to} className={linkClass(path === l.to)}>
              {l.label}
            </Link>
          ))}
        </div>

        {/* Mobile / tablet hamburger */}
        <div className="flex xl:hidden flex-1">
          <button
            onClick={() => setOpen(!open)}
            className="w-11 h-11 -ml-2.5 flex items-center justify-center text-[#4A0D1A] cursor-pointer"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
          >
            {open ? <CloseIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>

        <Link to="/" onClick={close} className="shrink-0" aria-label="Privéx home">
          <Logo className="h-7 md:h-9" />
        </Link>

        <div className="flex items-center gap-6 flex-1 justify-end">
          {SECONDARY_LINKS.map((l) => (
            <Link key={l.to} to={l.to} className={`hidden xl:inline ${linkClass(path === l.to)}`}>
              {l.label}
            </Link>
          ))}
          <button
            onClick={onManageBooking}
            className="hidden md:inline-flex items-center gap-2 label text-[11px] text-[#473B35] hover:text-[#4A0D1A] cursor-pointer whitespace-nowrap"
          >
            <CalendarIcon className="w-4 h-4 shrink-0" />
            Manage Booking
          </button>
          <Link
            to="/manicures"
            onClick={close}
            className="inline-flex items-center justify-center rounded-full border border-[#4A0D1A] text-[#4A0D1A] hover:bg-[#4A0D1A] hover:text-white transition-colors label text-[11px] px-4 md:px-6 h-10 whitespace-nowrap"
          >
            Book Now
          </Link>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="xl:hidden pb-6 pt-2 flex flex-col animate-fadeIn">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={close}
              className={`py-4 border-b border-[#E8DDD3] font-playfair uppercase tracking-[0.06em] text-xl ${path === l.to ? 'text-[#4A0D1A]' : 'text-[#2D2424]'}`}
            >
              {l.label}
            </Link>
          ))}
          <button
            onClick={() => {
              close();
              onManageBooking();
            }}
            className="mt-6 inline-flex items-center justify-center gap-2 label text-[#4A0D1A] border border-[#4A0D1A] rounded-full h-12 cursor-pointer"
          >
            <CalendarIcon className="w-4 h-4" />
            Manage Booking
          </button>
        </div>
      )}
    </nav>
  );
}
