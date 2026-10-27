import type { ReactNode } from 'react';
import { BOOKABLE_ADDONS, priceValue, type ServiceItem } from '../../data';
import { LockIcon } from '../ui/icons';

export type ProductRemoval = 'bare' | 'acrylic';

type Props = {
  service: ServiceItem;
  productRemoval: ProductRemoval;
  onProductRemovalChange: (v: ProductRemoval) => void;
  selectedAddOns: string[];
  onToggleAddOn: (name: string) => void;
  agreeCancellation: boolean;
  onAgreeCancellationChange: (v: boolean) => void;
  agreeAgeHealth: boolean;
  onAgreeAgeHealthChange: (v: boolean) => void;
  validationError: string | null;
  onProceed: () => void;
  onManageBooking: () => void;
};

function Choice({ type, checked, onChange, children }: { type: 'radio' | 'checkbox'; checked: boolean; onChange: (v: boolean) => void; children: ReactNode }) {
  return (
    <label
      className={`flex items-start gap-3 p-4 border transition-colors cursor-pointer ${
        checked ? 'border-[#4A0D1A] bg-[#FAFAFA]' : 'border-[#E8DDD3] hover:border-[#4A0D1A]/60'
      }`}
    >
      <input
        type={type}
        name={type === 'radio' ? 'productRemoval' : undefined}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="mt-1 accent-[#4A0D1A] shrink-0 w-4 h-4"
      />
      <span className="text-[15px] font-light leading-relaxed text-[#3E3430]">{children}</span>
    </label>
  );
}

export default function BookingCard(props: Props) {
  const { service, productRemoval, onProductRemovalChange, validationError } = props;
  const chosen = BOOKABLE_ADDONS.filter((a) => props.selectedAddOns.includes(a.name));
  const addOnTotal = chosen.reduce((sum, a) => sum + (priceValue(a.price) ?? 0), 0);
  const isStarting =
    service.isStartingPrice ||
    service.priceFormatted.toLowerCase().includes('starting') ||
    productRemoval === 'acrylic' ||
    chosen.some((a) => a.price.toLowerCase().includes('starting') || priceValue(a.price) === null);
  const total = service.basePrice + addOnTotal;

  return (
    <div id="booking-card" className="bg-white border border-[#E8DDD3] p-6 sm:p-8 flex flex-col gap-6">
      <div className="border-b border-[#E8DDD3] pb-5">
        <h2 className="font-playfair text-3xl font-normal text-[#4A0D1A] leading-tight">Reserve your appointment</h2>
        <p className="mt-1 text-[15px] font-light text-[#726058]">Confirm the details, then continue to Square.</p>
      </div>

      <div className="bg-[#FAFAFA] border border-[#E8DDD3] p-5 space-y-3 text-[15px]">
        <div className="font-normal text-[#2D2424]">
          {service.title} · {service.durationFormatted}
        </div>
        <div className="flex justify-between gap-3 font-light">
          <span>Service price</span>
          <span className="text-[#2D2424]">{isStarting ? `From $${service.basePrice}` : `$${service.basePrice}`}</span>
        </div>
        {chosen.map((a) => (
          <div key={a.name} className="flex justify-between gap-3 font-light">
            <span>+ {a.name}</span>
            <span className="text-[#2D2424] whitespace-nowrap">{a.price}</span>
          </div>
        ))}
        {productRemoval === 'acrylic' && (
          <div className="flex justify-between gap-3 font-light">
            <span>+ Soak Off</span>
            <span className="text-[#2D2424] whitespace-nowrap">From $15</span>
          </div>
        )}
        {(chosen.length > 0 || productRemoval === 'acrylic') && (
          <div className="pt-3 border-t border-[#E8DDD3] flex justify-between gap-3">
            <span className="font-normal">Estimated total</span>
            <strong className="text-[#2D2424]">{isStarting ? `From $${total}` : `$${total}`}</strong>
          </div>
        )}
        <div className="pt-3 border-t border-[#E8DDD3] flex justify-between gap-3">
          <span className="font-light">Deposit</span>
          {service.depositRequired ? <strong className="text-[#4A0D1A]">$25 required</strong> : <span className="font-light">Not required</span>}
        </div>
        {service.depositRequired && (
          <p className="text-sm font-light text-[#726058] leading-relaxed">Paid securely through Square and applied to your final total.</p>
        )}
      </div>

      <fieldset className="space-y-2">
        <legend className="label text-[11px] text-[#2D2424] mb-3">Current product on your nails</legend>
        <Choice type="radio" checked={productRemoval === 'bare'} onChange={() => onProductRemovalChange('bare')}>
          <strong>Bare nails or Privéx Builder Gel</strong>
          <br />
          Removal included — $0
        </Choice>
        <Choice type="radio" checked={productRemoval === 'acrylic'} onChange={() => onProductRemovalChange('acrylic')}>
          <strong>Foreign acrylic, dip or SNS</strong>
          <br />
          Select the <strong>Soak Off</strong> add-on in Square — <strong>from $15</strong>
        </Choice>
      </fieldset>

      {service.addonsAllowed && (
        <fieldset className="space-y-2">
          <legend className="label text-[11px] text-[#2D2424] mb-1">Add-ons (optional)</legend>
          <p className="text-sm font-light text-[#726058] mb-3">We&apos;ll remind you to select them in Square — they aren&apos;t added automatically.</p>
          {BOOKABLE_ADDONS.map((a) => (
            <Choice key={a.name} type="checkbox" checked={props.selectedAddOns.includes(a.name)} onChange={() => props.onToggleAddOn(a.name)}>
              <span className="flex justify-between gap-3">
                <span>{a.name}</span>
                <strong className="whitespace-nowrap font-normal">{a.price}</strong>
              </span>
            </Choice>
          ))}
        </fieldset>
      )}

      <fieldset className="space-y-2">
        <legend className="label text-[11px] text-[#2D2424] mb-3">Policy acknowledgement</legend>
        <Choice type="checkbox" checked={props.agreeCancellation} onChange={props.onAgreeCancellationChange}>
          I agree to the <strong>cancellation policy</strong>: 48+ hours&apos; notice to refund or transfer a deposit, deposits forfeited under
          48 hours or for no-shows, and <strong>same-day cancellations charged 100% of the service price</strong>. 10-minute grace period.
        </Choice>
        <Choice type="checkbox" checked={props.agreeAgeHealth} onChange={props.onAgreeAgeHealthChange}>
          I am <strong>16+ years old</strong>, have no open wounds or dermatitis, and will <strong>not bring children or guests</strong>.
        </Choice>
      </fieldset>

      {validationError && (
        <div role="alert" className="p-4 border border-[#4A0D1A]/40 bg-[#FFF5F5] text-[15px] text-[#4A0D1A]">
          {validationError}
        </div>
      )}

      <div className="space-y-3">
        <button
          onClick={props.onProceed}
          className="w-full min-h-[54px] rounded-full border border-[#4A0D1A] text-[#4A0D1A] hover:bg-[#4A0D1A] hover:text-white transition-colors label cursor-pointer px-4"
        >
          Continue to Square{service.depositRequired ? ' · $25 deposit' : ''}
        </button>
        <p className="flex items-center justify-center gap-2 text-sm font-light text-[#726058]">
          <LockIcon />
          Secured by Square Appointments
        </p>
      </div>

      <div className="border-t border-[#E8DDD3] pt-5 text-center">
        <p className="text-[15px] font-light text-[#726058]">Already booked?</p>
        <button onClick={props.onManageBooking} className="mt-1 text-[15px] text-[#4A0D1A] underline underline-offset-4 cursor-pointer">
          Manage or reschedule your booking
        </button>
      </div>
    </div>
  );
}
