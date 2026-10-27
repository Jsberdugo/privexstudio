import { useEffect, type ReactNode } from 'react';

type ModalProps = {
  icon: ReactNode;
  label: string;
  onClose: () => void;
  children: ReactNode;
};

/** Bottom sheet on mobile, centered dialog from `sm` up. */
export default function Modal({ icon, label, onClose, children }: ModalProps) {
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-xs flex items-end sm:items-center justify-center sm:p-4"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
        className="bg-[#FFFFFF] border border-[#E8DDD3] rounded-t-3xl sm:rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto p-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] sm:p-8 space-y-5 shadow-2xl animate-fadeIn"
      >
        <div className="sm:hidden mx-auto -mt-1 mb-1 w-10 h-1 rounded-full bg-[#E8DDD3]" />
        <div className="flex items-center justify-between border-b border-[#E8DDD3] pb-3">
          <div className="flex items-center gap-2 min-w-0">
            {icon}
            <span className="font-semibold text-[11px] sm:text-xs uppercase tracking-wider text-[#4A0D1A] truncate">{label}</span>
          </div>
          <button
            onClick={onClose}
            className="text-[#726058] hover:text-[#2D2424] cursor-pointer text-sm font-bold w-9 h-9 -mr-2 flex items-center justify-center shrink-0"
            aria-label="Close dialog"
          >
            ✕
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
