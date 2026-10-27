import { REVIEWS } from '../data';

/** Masonry of client reviews, transcribed from Google so they stay crisp and readable. */
export default function Reviews() {
  return (
    <section className="py-16 md:py-24 px-5 md:px-10 bg-white border-y border-[#E8DDD3]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="label text-[#726058] block mb-3">Kind words</span>
          <h2 className="font-playfair text-4xl md:text-5xl text-[#4A0D1A]">Customer Reviews</h2>
          <p className="mt-3 text-[#4A0D1A] tracking-[0.3em]" aria-label="5 out of 5 stars">
            ★★★★★
          </p>
        </div>
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
          {REVIEWS.map((r) => (
            <figure key={r.name} className="break-inside-avoid mb-6 border border-[#E8DDD3] bg-[#FAFAFA] p-6">
              <div className="text-[#4A0D1A] text-sm tracking-[0.2em]" aria-hidden>
                ★★★★★
              </div>
              <blockquote className="mt-3 text-base font-light leading-relaxed text-[#3E3430]">“{r.text}”</blockquote>
              <figcaption className="mt-4 label text-[11px] text-[#726058]">{r.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
