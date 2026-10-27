import Modal from './Modal';
import { CalendarIcon } from '../ui/icons';
import { SQUARE_BOOKING_URL } from '../../data';

export default function ManageBookingModal({ onClose }: { onClose: () => void }) {
  return (
    <Modal icon={<CalendarIcon className="w-4 h-4 text-[#4A0D1A] shrink-0" />} label="Manage Booking" onClose={onClose}>
      <div className="space-y-4">
        <h4 className="font-playfair text-3xl font-normal text-[#4A0D1A]">Manage your booking</h4>
        <p className="text-[15px] font-light text-[#5D4E47] leading-relaxed">
          Use the link in your Square confirmation email or text to reschedule or cancel, or open our booking page to sign in and view your appointments.
        </p>

        <div className="bg-[#FAFAFA] border border-[#E8DDD3] p-4 text-[15px] font-light leading-relaxed text-[#5D4E47] space-y-2">
          <p>
            With <strong>48+ hours&apos; notice</strong>, your deposit can be refunded or transferred.
          </p>
          <p>
            Under 48 hours or no-show: <strong>deposit forfeited</strong>. Same day: <strong>100% of the service price.</strong>
          </p>
        </div>
      </div>

      <div className="space-y-2 pt-2">
        <a
          href={SQUARE_BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClose}
          className="w-full h-[52px] rounded-full border border-[#4A0D1A] text-[#4A0D1A] hover:bg-[#4A0D1A] hover:text-white transition-colors label flex items-center justify-center gap-2"
        >
          Open booking page →
        </a>
        <button onClick={onClose} className="w-full py-3 text-[15px] font-light text-[#726058] hover:text-[#4A0D1A] cursor-pointer">
          Close
        </button>
      </div>
    </Modal>
  );
}
