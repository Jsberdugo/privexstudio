import { SERVICES, type ServiceItem } from '../data';
import PageHeader from '../components/ui/PageHeader';
import Photo from '../components/ui/Photo';
import Accordion from '../components/ui/Accordion';
import { btnOutline } from '../components/ui/buttons';
import { Link } from '../router';
import IncludedList from '../components/ui/IncludedList';

const COPY = {
  manicure: {
    eyebrow: 'Russian Dry Technique',
    title: 'Manicures',
    intro: 'Precise, waterless cuticle work for a cleaner regrowth line and a finish that lasts.',
  },
  pedicure: {
    eyebrow: '100% Waterless',
    title: 'Pedicures',
    intro: 'Dry-technique foot care with no shared basins — hygienic, detailed and deeply relaxing.',
  },
};

function DepositNote({ service }: { service: ServiceItem }) {
  return service.depositRequired ? (
    <span className="label text-[11px] text-[#4A0D1A]">$25 deposit required</span>
  ) : (
    <span className="label text-[11px] text-[#726058]">No deposit required</span>
  );
}

function ServiceRow({ service, reverse }: { service: ServiceItem; reverse: boolean }) {
  return (
    <article className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center py-12 md:py-16 border-b border-[#E8DDD3] last:border-b-0">
      <div className={reverse ? 'md:order-2' : ''}>
        <Photo
          src={service.image ?? '/images/hero-natural-nails.jpg'}
          alt={service.title}
          position={service.imagePosition}
          className="aspect-[4/5]"
        />
      </div>
      <div>
        <h2 className="font-playfair text-4xl md:text-5xl font-normal text-[#4A0D1A] leading-[1.05]">{service.title}</h2>
        <p className="mt-4 text-lg font-normal text-[#2D2424]">
          {service.priceFormatted} <span className="text-[#C5B4A6] mx-2">|</span> {service.durationFormatted}
        </p>
        <div className="mt-2">
          <DepositNote service={service} />
        </div>
        <p className="mt-6 text-[17px] md:text-lg font-light leading-relaxed text-[#5D4E47]">{service.shortDescription}</p>
        {service.guaranteeDays && (
          <p className="mt-4 text-[17px] font-light text-[#5D4E47]">
            Includes our <strong>{service.guaranteeDays}-Day Guarantee.</strong>
          </p>
        )}

        <div className="mt-6 border-t border-[#E8DDD3]">
          <Accordion title={service.included ? "What's included" : 'Service details'}>
            <p>{service.fullDescription}</p>
            {service.included && <IncludedList items={service.included} />}
            {service.extraNote && <p className="mt-4 text-[#726058]">{service.extraNote}</p>}
            {!service.included && service.techniqueNote && <p className="mt-3 text-[#726058]">{service.techniqueNote}</p>}
          </Accordion>
        </div>

        <Link to={`/services/${service.id}`} className={`${btnOutline} mt-8 w-full sm:w-auto`}>
          Book this service
        </Link>
      </div>
    </article>
  );
}

export default function ServicesPage({ category }: { category: 'manicure' | 'pedicure' }) {
  const copy = COPY[category];
  const services = SERVICES.filter((s) => s.category === category);

  return (
    <main className="flex-1 pb-16">
      <PageHeader eyebrow={copy.eyebrow} title={copy.title} intro={copy.intro} />
      <div className="max-w-6xl mx-auto px-5 md:px-10">
        {services.map((s, i) => (
          <ServiceRow key={s.id} service={s} reverse={i % 2 === 1} />
        ))}
      </div>
    </main>
  );
}
