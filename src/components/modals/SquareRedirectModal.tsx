import Modal from './Modal';
import { SQUARE_BOOKING_URL, type ServiceItem } from '../../data';
import type { ProductRemoval } from '../service/BookingCard';

type Props = {
  service: ServiceItem;
  productRemoval: ProductRemoval;
  addOns: string[];
  onClose: () => void;
};

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between gap-0.5 sm:gap-4">
      <span className="font-light text-[#726058] shrink-0">{label}</span>
      <span className="sm:text-right text-[#2D2424]">{children}</span>
    </div>
  );
}

export default function SquareRedirectModal({ service, productRemoval, addOns, onClose }: Props) {
  const toSelect = [...(productRemoval === 'acrylic' ? ['Soak Off'] : []), ...addOns];

  return (
    <Modal icon={<div className="w-2 h-2 rounded-full bg-[#4A0D1A] shrink-0" />} label="Square Appointments" onClose={onClose}>
      <div className="space-y-4">
        <h4 className="font-playfair text-3xl font-normal text-[#4A0D1A]">Continue to Square</h4>
        <p className="text-[15px] font-light text-[#5D4E47] leading-relaxed">
          You&apos;ll finish booking on the secure Privéx Studio Square schedule for <strong>Birmingham, AL</strong>.
        </p>

        <div className="bg-[#FAFAFA] border border-[#E8DDD3] p-4 text-[15px] space-y-3">
          <Row label="Service">{service.title}</Row>
          <Row label="Current product">{productRemoval === 'acrylic' ? 'Foreign acrylic/SNS (removal from $15)' : 'Bare nails / Privéx Builder Gel'}</Row>
          <Row label="Deposit">{service.depositRequired ? <strong className="text-[#4A0D1A]">$25 via Square</strong> : 'Not required'}</Row>
        </div>

        {toSelect.length > 0 && (
          <div className="border border-[#4A0D1A]/40 bg-[#FFF8F8] p-4 text-[15px]">
            <p className="label text-[11px] text-[#4A0D1A] mb-2">Important — select these in Square</p>
            <p className="font-light text-[#5D4E47] leading-relaxed mb-3">
              Add-ons are <strong>not added automatically</strong>. In Square, after choosing your service, use <strong>Add</strong> to include each of these in the same appointment:
            </p>
            <ul className="space-y-1.5">
              {toSelect.map((name) => (
                <li key={name} className="flex items-center gap-2 text-[#2D2424]">
                  <span className="text-[#4A0D1A]">✓</span>
                  {name}
                </li>
              ))}
            </ul>
            <p className="mt-3 text-sm font-light text-[#726058]">This reserves enough time for your appointment.</p>
          </div>
        )}
      </div>

      <div className="space-y-2 pt-2">
        <a
          href={service.squareUrl ?? SQUARE_BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClose}
          className="w-full h-[52px] rounded-full border border-[#4A0D1A] text-[#4A0D1A] hover:bg-[#4A0D1A] hover:text-white transition-colors label flex items-center justify-center gap-2"
        >
          Open Square →
        </a>
        <button onClick={onClose} className="w-full py-3 text-[15px] font-light text-[#726058] hover:text-[#4A0D1A] cursor-pointer">
          Back to details
        </button>
      </div>
    </Modal>
  );
}
