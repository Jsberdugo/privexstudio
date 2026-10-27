import PageHeader from '../components/ui/PageHeader';
import Photo from '../components/ui/Photo';
import { btnOutline } from '../components/ui/buttons';
import { Link } from '../router';

const LOOKS = [1, 2, 3, 4, 5, 6].map((n) => ({
  src: `/images/bridal-${n}.png`,
  alt: `Bridal and engagement manicure inspiration ${n}`,
}));

export default function BridalPage() {
  return (
    <main className="flex-1 pb-20">
      <PageHeader
        eyebrow="Bridal & Engagement Nails"
        title="Timeless Elegance for Your Special Moments"
        intro="Explore our curated collection of elegant bridal and engagement manicures, featuring soft nude tones, delicate French tips, and timeless, natural finishes."
      />

      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
          {LOOKS.map((l) => (
            <Photo key={l.src} src={l.src} alt={l.alt} className="aspect-[4/5]" />
          ))}
        </div>

        <div className="mt-16 max-w-2xl mx-auto text-center border border-[#E8DDD3] bg-white px-6 py-10 md:px-12">
          <span className="label text-[#726058] block mb-4">To achieve these looks, please book</span>
          <h2 className="font-playfair text-3xl md:text-4xl text-[#4A0D1A]">Privéx Russian Builder Gel</h2>
          <p className="mt-4 text-[17px] font-light text-[#5D4E47]">
            Additional charges may apply for <strong>French tips or nail art.</strong>
          </p>
          <Link to="/services/A" className={`${btnOutline} mt-8`}>
            Book Russian Builder Gel
          </Link>
        </div>
      </div>
    </main>
  );
}
