import React from 'react';
import { Phone } from 'lucide-react';
import { businessData, Language, uiTranslations, createWhatsAppBookingUrl } from '../data/config';

interface StickyActionsProps {
  currentLang: Language;
}

export const StickyActions: React.FC<StickyActionsProps> = ({ currentLang }) => {
  const t = uiTranslations.sticky;
  const whatsappUrl = createWhatsAppBookingUrl({
    customMessage: 'Hello Rathore Cab Service, I want to book a cab from Indore.'
  });

  return (
    <>
      {/* Mobile Sticky Bottom Bar (Always visible while scrolling on mobile) */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-lg border-t border-[#DEBFBF]/50 shadow-[0_-4px_16px_rgba(0,0,0,0.1)] px-3 py-2.5 pb-[calc(0.625rem+env(safe-area-inset-bottom,0px))]">
        <div className="flex items-center gap-2 max-w-md mx-auto">
          {/* Call Now Button */}
          <a
            href={`tel:${businessData.phoneTel}`}
            className="flex-1 h-12 rounded-xl bg-[#6b011a] active:bg-[#8b1e2e] text-white flex items-center justify-center gap-2 font-bold text-sm shadow-md transition-all active:scale-95"
            aria-label="Call Rathore Cab Now"
          >
            <Phone className="w-4 h-4" />
            <span>{t.callNow[currentLang]}</span>
          </a>

          {/* Book on WhatsApp Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 h-12 rounded-xl bg-[#25D366] active:bg-[#20ba5a] text-white flex items-center justify-center gap-2 font-bold text-sm shadow-md transition-all active:scale-95"
            aria-label="Book on WhatsApp"
          >
            {/* WhatsApp SVG */}
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M20.52 3.48A11.93 11.93 0 0012.04 0C5.43 0 .07 5.37.07 11.97c0 2.11.55 4.16 1.6 5.97L0 24l6.23-1.63a11.94 11.94 0 005.81 1.5h.01c6.6 0 11.97-5.37 11.97-11.97 0-3.2-1.25-6.21-3.5-8.42zM12.05 21.88h-.01c-1.8 0-3.57-.48-5.11-1.4l-.37-.22-3.79.99 1.01-3.7-.24-.38a9.92 9.92 0 01-1.52-5.2c0-5.48 4.46-9.94 9.95-9.94 2.65 0 5.15 1.03 7.03 2.91 1.88 1.88 2.91 4.38 2.91 7.03 0 5.48-4.46 9.94-9.95 9.94zm5.45-7.44c-.3-.15-1.77-.87-2.04-.97-.28-.1-.48-.15-.68.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.68-1.64-.93-2.25-.24-.59-.49-.51-.68-.52l-.58-.01c-.2 0-.52.07-.8.37-.27.3-1.05 1.03-1.05 2.51s1.08 2.91 1.23 3.11c.15.2 2.12 3.24 5.14 4.54.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" />
            </svg>
            <span>WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Desktop Floating WhatsApp Button (Bottom Right with Subtle Periodic Pulse) */}
      <aside
        aria-label="Quick Actions"
        className="hidden md:flex fixed bottom-6 right-6 z-40 flex-col items-end pointer-events-auto"
      >
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 px-5 py-3.5 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full shadow-[0_4px_24px_rgba(37,211,102,0.45)] transition-all hover:scale-105 active:scale-95 cursor-pointer animate-bounce-subtle"
          aria-label="Book on WhatsApp"
        >
          {/* WhatsApp SVG */}
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M20.52 3.48A11.93 11.93 0 0012.04 0C5.43 0 .07 5.37.07 11.97c0 2.11.55 4.16 1.6 5.97L0 24l6.23-1.63a11.94 11.94 0 005.81 1.5h.01c6.6 0 11.97-5.37 11.97-11.97 0-3.2-1.25-6.21-3.5-8.42zM12.05 21.88h-.01c-1.8 0-3.57-.48-5.11-1.4l-.37-.22-3.79.99 1.01-3.7-.24-.38a9.92 9.92 0 01-1.52-5.2c0-5.48 4.46-9.94 9.95-9.94 2.65 0 5.15 1.03 7.03 2.91 1.88 1.88 2.91 4.38 2.91 7.03 0 5.48-4.46 9.94-9.95 9.94zm5.45-7.44c-.3-.15-1.77-.87-2.04-.97-.28-.1-.48-.15-.68.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.68-1.64-.93-2.25-.24-.59-.49-.51-.68-.52l-.58-.01c-.2 0-.52.07-.8.37-.27.3-1.05 1.03-1.05 2.51s1.08 2.91 1.23 3.11c.15.2 2.12 3.24 5.14 4.54.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" />
          </svg>
          <span className="font-heading font-bold text-sm tracking-wide">
            {t.whatsapp[currentLang]}
          </span>
        </a>
      </aside>
    </>
  );
};
