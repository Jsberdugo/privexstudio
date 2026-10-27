import { useEffect, useState } from 'react';
import type { ServiceItem } from '../../data';
import BookingCard, { type ProductRemoval } from './BookingCard';
import ServiceInfo from './ServiceInfo';
import SquareRedirectModal from '../modals/SquareRedirectModal';
import { Link } from '../../router';

type Props = {
  service: ServiceItem;
  onManageBooking: () => void;
};

export default function ServiceDetail({ service, onManageBooking }: Props) {
  const [productRemoval, setProductRemoval] = useState<ProductRemoval>('bare');
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  const toggleAddOn = (name: string) => setSelectedAddOns((cur) => (cur.includes(name) ? cur.filter((n) => n !== name) : [...cur, name]));
  const [agreeCancellation, setAgreeCancellation] = useState(false);
  const [agreeAgeHealth, setAgreeAgeHealth] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);
  const [showRedirect, setShowRedirect] = useState(false);

  useEffect(() => {
    setValidationError(null);
    setShowRedirect(false);
    setSelectedAddOns([]);
  }, [service.id]);

  useEffect(() => {
    if (agreeCancellation && agreeAgeHealth) setValidationError(null);
  }, [agreeCancellation, agreeAgeHealth]);

  const handleProceed = () => {
    if (!agreeCancellation || !agreeAgeHealth) {
      setValidationError('Please accept both studio policies before continuing to Square.');
      // On mobile the sticky bar triggers this; bring the checklist into view.
      document.getElementById('booking-card')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }
    setValidationError(null);
    setShowRedirect(true);
  };

  const backTo = service.category === 'manicure' ? '/manicures' : '/pedicures';

  return (
    <main className="flex-1 pt-6 pb-32 md:pt-10 lg:pb-20 px-5 md:px-10">
      <div className="max-w-7xl mx-auto">
        <Link to={backTo} className="label text-[11px] text-[#4A0D1A] inline-flex items-center gap-2 mb-8 min-h-[44px]">
          ← All {service.category === 'manicure' ? 'manicures' : 'pedicures'}
        </Link>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start">
          <div className="w-full lg:w-[56%]">
            <ServiceInfo service={service} />
          </div>
          <div className="w-full lg:w-[44%] lg:sticky lg:top-28">
            <BookingCard
              service={service}
              productRemoval={productRemoval}
              onProductRemovalChange={setProductRemoval}
              selectedAddOns={service.addonsAllowed ? selectedAddOns : []}
              onToggleAddOn={toggleAddOn}
              agreeCancellation={agreeCancellation}
              onAgreeCancellationChange={setAgreeCancellation}
              agreeAgeHealth={agreeAgeHealth}
              onAgreeAgeHealthChange={setAgreeAgeHealth}
              validationError={validationError}
              onProceed={handleProceed}
              onManageBooking={onManageBooking}
            />
          </div>
        </div>
      </div>

      {/* Mobile sticky booking bar */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#E8DDD3] px-5 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] flex items-center justify-between gap-3">
        <div className="min-w-0">
          <div className="font-playfair text-lg font-normal text-[#4A0D1A] truncate">{service.title}</div>
          <div className="text-sm font-light text-[#726058]">
            {service.priceFormatted}
            {service.depositRequired ? ' · $25 deposit' : ''}
          </div>
        </div>
        <button
          onClick={handleProceed}
          className="shrink-0 rounded-full border border-[#4A0D1A] text-[#4A0D1A] label text-[11px] px-5 h-11 cursor-pointer active:bg-[#4A0D1A] active:text-white"
        >
          Continue
        </button>
      </div>

      {showRedirect && <SquareRedirectModal service={service} productRemoval={productRemoval} addOns={service.addonsAllowed ? selectedAddOns : []} onClose={() => setShowRedirect(false)} />}
    </main>
  );
}
