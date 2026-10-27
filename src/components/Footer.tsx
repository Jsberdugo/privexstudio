import Logo from './ui/Logo';
import { InstagramIcon, TikTokIcon } from './ui/icons';
import { Link } from '../router';
import { NAV_LINKS } from './Navbar';

const socialClass =
  'w-11 h-11 rounded-full border border-[#E8DDD3] text-[#4A0D1A] flex items-center justify-center hover:border-[#4A0D1A] transition-colors';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#E8DDD3] pt-14 pb-10 px-5 md:px-10 text-[15px] md:text-base text-[#473B35]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="space-y-5">
          <Logo className="h-11 -ml-1" />
          <p className="font-light leading-relaxed text-[#5D4E47]">Russian manicure &amp; dry pedicure in Birmingham, Alabama.</p>
          <div className="flex items-center gap-2">
            <a href="https://instagram.com/privexstudio" target="_blank" rel="noopener noreferrer" aria-label="Instagram @privexstudio" className={socialClass}>
              <InstagramIcon />
            </a>
            <a href="https://www.tiktok.com/@privexstudio" target="_blank" rel="noopener noreferrer" aria-label="TikTok @privexstudio" className={socialClass}>
              <TikTokIcon />
            </a>
          </div>
        </div>

        <div>
          <h3 className="label text-[#4A0D1A] mb-4">Visit</h3>
          <p className="font-light leading-relaxed">
            300 Lorna Square, Suite 312
            <br />
            Hoover, AL 35216
          </p>
          <p className="mt-2 font-light text-[#726058]">Free parking outside the suite.</p>
        </div>

        <div>
          <h3 className="label text-[#4A0D1A] mb-4">Contact</h3>
          <a href="sms:+18632578841" className="font-normal text-[#2D2424] hover:text-[#4A0D1A]">
            (863) 257-8841
          </a>
          <p className="mt-2 font-light">
            <strong>Text messages only</strong>
          </p>
        </div>

        <div>
          <h3 className="label text-[#4A0D1A] mb-4">Hours</h3>
          <p className="font-light leading-relaxed">
            <strong>Mon – Sat</strong> · 9:00 AM – 6:00 PM
            <br />
            <strong>Sunday</strong> · Closed
          </p>
          <p className="mt-2 font-light text-[#726058]">By appointment only.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-[#F2ECE4] flex flex-col-reverse md:flex-row items-center justify-between gap-5 text-sm font-light text-[#726058]">
        <p>© {new Date().getFullYear()} Privéx Studio LLC</p>
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {NAV_LINKS.map((l) => (
            <Link key={l.to} to={l.to} className="label text-[11px] hover:text-[#4A0D1A]">
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
