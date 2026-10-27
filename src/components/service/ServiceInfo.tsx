import type { ServiceItem } from '../../data';
import Photo from '../ui/Photo';
import Accordion from '../ui/Accordion';
import IncludedList from '../ui/IncludedList';

const THUMBS = {
  manicure: [
    { src: '/images/privex-studio-preparacion.jpg', alt: 'Cuticle preparation with sterilized tools', position: '45% 50%' },
    { src: '/images/una-natural.png', alt: 'Healthy natural nails after dry Russian prep', position: '50% 60%' },
    { src: '/images/privex-studio-hero.jpg', alt: 'Finished white gel manicure holding a coffee cup', position: '50% 40%' },
  ],
  pedicure: [
    { src: '/images/classic-pedicure-2.png', alt: 'Natural dry pedicure finish', position: '50% 50%' },
    { src: '/images/classic-pedicure-3.png', alt: 'Clean, shaped toenails after a dry pedicure', position: '50% 50%' },
    { src: '/images/esterilizacion.png', alt: 'Sterilized pedicure tools on a silver tray', position: '50% 50%' },
  ],
};

export default function ServiceInfo({ service }: { service: ServiceItem }) {
  return (
    <div className="space-y-8">
      <div>
        <span className="label text-[11px] text-[#726058] block mb-3">{service.category === 'manicure' ? 'Manicure' : 'Pedicure'}</span>
        <h1 className="font-playfair text-[40px] md:text-5xl font-normal text-[#4A0D1A] leading-[1.05]">{service.title}</h1>
        <p className="mt-3 text-lg text-[#2D2424]">
          {service.priceFormatted} <span className="text-[#C5B4A6] mx-2">|</span> {service.durationFormatted}
        </p>
      </div>

      <div className="space-y-3">
        <Photo
          src={service.image ?? '/images/hero-natural-nails.jpg'}
          alt={service.title}
          position={service.imagePosition}
          className="aspect-[4/5] max-h-[620px]"
          eager
        />
        <div className="grid grid-cols-3 gap-3">
          {THUMBS[service.category].map((t) => (
            <Photo key={t.src} src={t.src} alt={t.alt} position={t.position} className="aspect-square" />
          ))}
        </div>
      </div>

      <p className="text-[17px] md:text-lg font-light leading-relaxed text-[#5D4E47]">{service.shortDescription}</p>

      <div className="border-t border-[#E8DDD3]">
        <Accordion title={service.included ? "What's included" : 'Service breakdown'} defaultOpen={!!service.included}>
          <p>{service.fullDescription}</p>
          {service.included && <IncludedList items={service.included} />}
          {service.extraNote && <p className="mt-4 text-[#726058]">{service.extraNote}</p>}
        </Accordion>
        {service.techniqueNote && (
          <Accordion title="Technique note">
            <p>{service.techniqueNote}</p>
            <p className="mt-3">
              <strong>No standard fills:</strong> we gently remove up to 90% of previous Builder Gel at every return visit.
            </p>
          </Accordion>
        )}
        <Accordion title="Hygiene & guarantee">
          <p>
            <strong>Sanitation protocol:</strong> tools are autoclaved and the medical-grade pouch is opened right in front of you.
          </p>
          {service.guaranteeDays && (
            <p className="mt-3">
              <strong>{service.guaranteeDays}-Day Guarantee:</strong> complimentary repair if lifting or chipping occurs within{' '}
              {service.guaranteeDays} days.
            </p>
          )}
        </Accordion>
      </div>
    </div>
  );
}
