import { ADDONS, EXTRA_ADDONS, type AddOn } from '../data';
import PageHeader from '../components/ui/PageHeader';
import Photo from '../components/ui/Photo';

function PriceTitle({ addOn }: { addOn: AddOn }) {
  return (
    <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
      <h2 className="font-playfair text-3xl md:text-4xl text-[#4A0D1A] leading-tight">{addOn.name}</h2>
      <span className="flex items-baseline gap-5">
        <span className="text-lg text-[#2D2424] whitespace-nowrap">{addOn.price}</span>
        {addOn.squareUrl && (
          <a
            href={addOn.squareUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="label text-[11px] text-[#4A0D1A] border-b border-[#4A0D1A]/50 pb-0.5 hover:border-[#4A0D1A]"
          >
            Book →
          </a>
        )}
      </span>
    </div>
  );
}

function FeaturedAddOn({ addOn }: { addOn: AddOn }) {
  const images = addOn.images ?? [];
  const isGallery = images.length > 1;

  return (
    <article className="py-12 md:py-16 border-b border-[#E8DDD3]">
      {isGallery ? (
        <>
          <PriceTitle addOn={addOn} />
          <p className="mt-4 max-w-2xl text-[17px] md:text-lg font-light leading-relaxed text-[#5D4E47]">{addOn.description}</p>
          {addOn.note && <p className="mt-3 label text-[11px] text-[#4A0D1A]">{addOn.note}</p>}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-5 gap-3">
            {images.map((src, i) => (
              <Photo key={src} src={src} alt={`${addOn.name} example ${i + 1}`} className="aspect-[3/4]" />
            ))}
          </div>
        </>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-8 md:gap-14 items-center">
          {images[0] ? (
            <Photo src={images[0]} alt={addOn.name} className="aspect-[4/5]" />
          ) : (
            <div className="aspect-[4/5] bg-[#E8DDD3] flex items-center justify-center">
              <span className="label text-[11px] text-[#8B786E]">Photo coming soon</span>
            </div>
          )}
          <div>
            <PriceTitle addOn={addOn} />
            <p className="mt-4 text-[17px] md:text-lg font-light leading-relaxed text-[#5D4E47]">{addOn.description}</p>
            {addOn.note && <p className="mt-3 label text-[11px] text-[#4A0D1A]">{addOn.note}</p>}
          </div>
        </div>
      )}
    </article>
  );
}

export default function AddOnsPage() {
  return (
    <main className="flex-1 pb-20">
      <PageHeader eyebrow="Finishing touches" title="Add-Ons" intro="Personalize any service. All prices are in addition to the main service." />

      <div className="max-w-6xl mx-auto px-5 md:px-10">
        {ADDONS.map((a) => (
          <FeaturedAddOn key={a.name} addOn={a} />
        ))}

        <section className="py-12 md:py-16">
          <h2 className="font-playfair text-3xl md:text-4xl text-[#4A0D1A] mb-6">More Add-Ons</h2>
          <div className="border-t border-[#E8DDD3]">
            {EXTRA_ADDONS.map((a) => (
              <div key={a.name} className="py-6 border-b border-[#E8DDD3] grid grid-cols-1 md:grid-cols-[1fr_auto] gap-x-8 gap-y-2">
                <div>
                  <h3 className="text-lg font-normal text-[#2D2424]">{a.name}</h3>
                  <p className="mt-1 text-base font-light leading-relaxed text-[#5D4E47]">{a.description}</p>
                </div>
                <div className="flex md:flex-col items-center md:items-end gap-4 md:gap-3">
                  <span className="text-lg text-[#2D2424] whitespace-nowrap">{a.price}</span>
                  {a.squareUrl && (
                    <a
                      href={a.squareUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="label text-[11px] text-[#4A0D1A] border-b border-[#4A0D1A]/50 pb-0.5 hover:border-[#4A0D1A]"
                    >
                      Book →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white border border-[#E8DDD3] p-6 md:p-8">
          <h2 className="label text-[#4A0D1A] mb-4">Booking information</h2>
          <ul className="space-y-3 text-base md:text-[17px] font-light leading-relaxed text-[#5D4E47]">
            <li>
              <strong>All add-ons must be selected when booking</strong> to ensure sufficient appointment time. Additional charges may apply depending
              on the complexity of the service.
            </li>
            <li>All prices are additional to the main service.</li>
            <li>
              <strong>Intricate Nail Art is only available when booking with Ari.</strong>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
