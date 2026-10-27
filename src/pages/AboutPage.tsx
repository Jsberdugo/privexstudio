import PageHeader from '../components/ui/PageHeader';
import Photo from '../components/ui/Photo';
import { btnOutline } from '../components/ui/buttons';
import { Link } from '../router';

const STORY = [
  'I’m **Arianne Márquez**, a licensed nail technician and founder of Privéx Studio, a proud Venezuelan, wife, and mother of two.',
  'My story began in Venezuela, where I graduated with a **degree in dentistry**. Eleven years ago, the situation in my home country led us to move to the United States and start over. My family and the support of my wonderful husband have been essential throughout this journey.',
  'I entered the nail industry because I needed to work. What I didn’t expect was how much I would grow to love it, or how familiar it would feel to use my hands in a different way. The instruments, materials, precision, and emphasis on **cleanliness and sterilization** reminded me of my background in dentistry.',
  'Above all, I rediscovered a feeling I already knew, **the joy of seeing someone smile at the end of their appointment.**',
  'Over time, what began as a necessity became a new passion. That journey led to Privéx Studio, a space that reflects my dedication, attention to detail, and the care I bring to every person who places their trust in me.',
  'I thank God for the people He placed in my path, including former employers, coworkers, and those who gave me opportunities and generously shared their knowledge.',
  'To my clients, thank you for your trust and for growing with me. Each of you is part of what Privéx Studio is today. **Thank you for being here.**',
];

const PHILOSOPHY = [
  { title: '100% Dry Pedicures', body: 'No shared water basins — removing bacteria and cross-contamination entirely.' },
  { title: 'Hospital-Grade', body: 'Diamond bits autoclaved in medical pouches; single-use buffers for every client.' },
  { title: 'Zero Toxic Acrylics', body: 'No MMA acrylics, dip powders or acetone soaks. Hypoallergenic Builder Gel only.' },
];

/** Renders **bold** markers inside a story paragraph. */
function Para({ text }: { text: string }) {
  return (
    <p>
      {text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
        part.startsWith('**') ? (
          <strong key={i} className="font-medium text-[#2D2424]">
            {part.slice(2, -2)}
          </strong>
        ) : (
          part
        ),
      )}
    </p>
  );
}

export default function AboutPage() {
  return (
    <main className="flex-1 pb-20">
      <PageHeader eyebrow="Our Story" title="About" />

      {/* Team photo */}
      <section className="px-4 md:px-10">
        <Photo
          src="/images/ari-meiby-equipo.jpg"
          alt="Ari Márquez and Meiby Bermudez at Privéx Studio"
          className="max-w-6xl mx-auto aspect-[4/5] md:aspect-[16/9] rounded-[28px] md:rounded-[40px]"
          position="50% 20%"
          positionDesktop="50% 12%"
          eager
        />
      </section>

      {/* Founder story */}
      <section className="mt-16 md:mt-24 max-w-6xl mx-auto px-5 md:px-10 grid grid-cols-1 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-10 md:gap-16 items-start">
        <figure className="md:sticky md:top-28">
          <Photo src="/images/ari-marquez-fundadora.jpg" alt="Arianne Márquez, founder of Privéx Studio" className="aspect-[4/5]" position="50% 25%" />
          <figcaption className="mt-4 label text-[11px] text-[#726058] text-center">Arianne Márquez · Founder</figcaption>
        </figure>
        <div>
          <span className="label text-[#726058] block mb-4">My Story</span>
          <h2 className="font-playfair text-4xl md:text-5xl text-[#4A0D1A] leading-[1.1]">Arianne Márquez</h2>
          <div className="mt-8 space-y-5 text-[17px] md:text-lg font-light leading-relaxed text-[#5D4E47]">
            {STORY.map((p) => (
              <Para key={p} text={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="mt-20 md:mt-28 py-16 md:py-24 px-5 md:px-10 bg-white border-y border-[#E8DDD3]">
        <div className="max-w-5xl mx-auto text-center">
          <span className="label text-[#726058] block mb-4">Uncompromising Philosophy</span>
          <h2 className="font-playfair text-4xl md:text-5xl text-[#4A0D1A] leading-[1.1]">Strict European Dry Technique</h2>
          <p className="mt-2 font-playfair italic text-2xl md:text-3xl text-[#726058]">&amp; Hospital-Grade Sterilization</p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0 md:divide-x divide-[#E8DDD3]">
            {PHILOSOPHY.map((p) => (
              <div key={p.title} className="md:px-8">
                <h3 className="font-playfair text-2xl text-[#4A0D1A]">{p.title}</h3>
                <p className="mt-2 text-base font-light leading-relaxed text-[#5D4E47]">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="mt-20 md:mt-28 max-w-5xl mx-auto px-5 md:px-10">
        <div className="text-center mb-12">
          <span className="label text-[#726058] block mb-4">Our Team</span>
          <h2 className="font-playfair text-4xl md:text-5xl text-[#4A0D1A]">Meet the Team</h2>
        </div>
        <div className="max-w-sm mx-auto text-center">
          <Photo src="/images/meiby-bermudez.jpg" alt="Meiby Bermudez, manicurist" className="aspect-[4/5]" position="50% 45%" />
          <h3 className="mt-6 font-playfair uppercase tracking-[0.04em] text-2xl text-[#4A0D1A]">Meiby Bermudez</h3>
          <p className="mt-1 label text-[11px] text-[#726058]">Manicurist</p>
          <p className="mt-3 text-base font-light text-[#5D4E47]">Russian Manicure &amp; Dry Pedicure Specialist</p>
        </div>
      </section>

      <div className="mt-20 text-center px-5">
        <Link to="/manicures" className={btnOutline}>
          Book Now
        </Link>
      </div>
    </main>
  );
}
