import Photo from '../components/ui/Photo';
import Reviews from '../components/Reviews';
import { btnOutline, btnOutlineLight } from '../components/ui/buttons';
import { Link } from '../router';

const HIGHLIGHTS = [
  { big: 'No Fills', small: 'Every set is rebalanced from the base' },
  { big: '90% Removal', small: 'Gentle debulking at each return visit' },
  { big: '100% Waterless', small: 'Dry pedicures — no shared basins' },
];

const CATEGORIES = [
  { title: 'Manicures', to: '/manicures', src: '/images/gel-russian-manicure.png', position: '50% 10%', note: 'Russian dry technique · Builder Gel · Gel-X' },
  { title: 'Pedicures', to: '/pedicures', src: '/images/russian-pedicure.png', position: '50% 55%', note: '100% waterless · Dry technique' },
];

const GALLERY = [
  { src: '/images/privex-studio-hero.jpg', alt: 'White gel manicure holding a crystal coffee cup', position: '50% 40%' },
  { src: '/images/privex-russian-builder-gel.png', alt: 'Russian Builder Gel in soft pink', position: '50% 0%' },
  { src: '/images/una-natural.png', alt: 'Healthy natural nails after dry Russian prep', position: '50% 55%' },
  { src: '/images/addon-french.png', alt: 'Classic French manicure', position: '50% 50%' },
];

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero: centered, rounded frame */}
      <section className="px-4 md:px-10 pt-4 md:pt-8">
        <div className="relative max-w-7xl mx-auto h-[78svh] min-h-[520px] max-h-[820px] overflow-hidden rounded-[28px] md:rounded-[40px]">
          <Photo
            src="/images/hero-natural-nails.jpg"
            alt="Short, natural milky-white manicure resting on the cheek"
            className="absolute inset-0 h-full"
            position="50% 45%"
            positionDesktop="50% 38%"
            eager
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 px-6 pb-12 md:pb-16 text-center text-white">
            <h1 className="font-playfair text-[38px] leading-[1.08] sm:text-5xl md:text-6xl lg:text-7xl">The Art of Natural Nail Care</h1>
            <p className="mt-4 text-[17px] md:text-xl font-light text-white/90 max-w-2xl mx-auto">
              Exclusively focused on short, natural nails, refined precision, and the art of understated elegance.
            </p>
            <Link to="/manicures" className={`${btnOutlineLight} mt-8`}>
              Book Now
            </Link>
          </div>
        </div>
      </section>

      {/* Signature highlights */}
      <section className="border-b border-[#E8DDD3] px-5 md:px-10 mt-4 md:mt-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#E8DDD3]">
          {HIGHLIGHTS.map((h) => (
            <div key={h.big} className="py-10 md:py-14 text-center px-6">
              <div className="font-playfair uppercase tracking-[0.04em] text-3xl md:text-4xl text-[#4A0D1A]">{h.big}</div>
              <p className="mt-2 text-base font-light text-[#5D4E47]">{h.small}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Category tiles */}
      <section className="py-16 md:py-24 px-5 md:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
          {CATEGORIES.map((c) => (
            <Link key={c.to} to={c.to} className="group relative block overflow-hidden">
              <Photo src={c.src} alt={c.title} position={c.position} className="aspect-[4/5] md:aspect-[5/6] transition-transform duration-700 group-hover:scale-[1.03]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-8 text-white text-center">
                <h2 className="font-playfair text-4xl md:text-5xl">{c.title}</h2>
                <p className="mt-2 text-base font-light text-white/90">{c.note}</p>
                <span className="label inline-block mt-5 border-b border-white/70 pb-1">View services</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Philosophy teaser */}
      <section className="py-16 md:py-24 px-5 md:px-10 bg-white border-y border-[#E8DDD3]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <Photo src="/images/esterilizacion.png" alt="Sterilized tools on a silver tray" className="aspect-[4/3]" position="50% 50%" />
          <div>
            <span className="label text-[#726058] block mb-4">Uncompromising Philosophy</span>
            <h2 className="font-playfair text-4xl md:text-5xl text-[#4A0D1A] leading-[1.1]">Strict European dry technique</h2>
            <p className="mt-2 font-playfair italic text-2xl md:text-3xl text-[#726058]">&amp; hospital-grade sterilization</p>
            <p className="mt-6 text-[17px] md:text-lg font-light leading-relaxed text-[#5D4E47]">
              No acrylic powders, no dip systems, no soaking basins. Just <strong>unhurried, private care</strong> built around the health of
              your natural nail.
            </p>
            <Link to="/about" className={`${btnOutline} mt-8`}>
              About Us
            </Link>
          </div>
        </div>
      </section>

      {/* Bridal teaser */}
      <section className="py-16 md:py-24 px-5 md:px-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="md:order-2">
            <Photo src="/images/bridal-2.png" alt="Bride and groom hands with a soft nude bridal manicure" className="aspect-[4/5]" position="50% 50%" />
          </div>
          <div>
            <span className="label text-[#726058] block mb-4">Bridal &amp; Engagement</span>
            <h2 className="font-playfair text-4xl md:text-5xl text-[#4A0D1A] leading-[1.1]">Timeless elegance for your special moments</h2>
            <p className="mt-6 text-[17px] md:text-lg font-light leading-relaxed text-[#5D4E47]">
              Soft nude tones, delicate French tips and natural finishes for your engagement and wedding day.
            </p>
            <Link to="/bridal" className={`${btnOutline} mt-8`}>
              View the collection
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 md:py-24 px-5 md:px-10 border-t border-[#E8DDD3]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <span className="label text-[#726058] block mb-3">The Privéx finish</span>
            <h2 className="font-playfair text-4xl md:text-5xl text-[#4A0D1A]">Clean. Lasting. Natural.</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
            {GALLERY.map((g) => (
              <Photo key={g.src} src={g.src} alt={g.alt} position={g.position} className="aspect-[3/4]" />
            ))}
          </div>
        </div>
      </section>

      <Reviews />

      {/* Closing CTA */}
      <section className="py-16 md:py-20 px-5 text-center">
        <h2 className="font-playfair text-4xl md:text-5xl text-[#4A0D1A]">Reserve your appointment</h2>
        <p className="mt-4 text-[17px] font-light text-[#5D4E47]">
          By appointment only · <strong>Deposit required on select services</strong>
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/manicures" className={btnOutline}>
            Manicures
          </Link>
          <Link to="/pedicures" className={btnOutline}>
            Pedicures
          </Link>
        </div>
      </section>
    </main>
  );
}
