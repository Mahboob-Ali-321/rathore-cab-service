import React from 'react';
import { ArrowRight, Sparkles, Map } from 'lucide-react';
import { pilgrimageTours, Language, uiTranslations, createWhatsAppBookingUrl } from '../data/config';

interface PilgrimageSectionProps {
  currentLang: Language;
}

export const PilgrimageSection: React.FC<PilgrimageSectionProps> = ({ currentLang }) => {
  const t = uiTranslations.pilgrimage;

  const customItineraryUrl = createWhatsAppBookingUrl({
    customMessage: 'Hello Rathore Cab & Travels, I want to plan a custom multi-day pilgrimage/outstation yatra from Indore.'
  });

  return (
    <section id="pilgrimage" className="w-full bg-[#F9F9FF] py-12 sm:py-16 border-t border-[#DEBFBF]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs sm:text-sm font-extrabold text-[#805600] tracking-wider uppercase mb-1.5 flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-[#805600]" />
            <span>{t.sectionTag[currentLang]}</span>
          </span>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#111C2D]">
            {t.title[currentLang]}
          </h2>
          <p className="text-xs sm:text-sm lg:text-base text-[#574142] mt-2">
            {t.subtitle[currentLang]}
          </p>
        </div>

        {/* Tour Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pilgrimageTours.map((tour) => {
            const whatsappUrl = createWhatsAppBookingUrl({
              drop: `${tour.title[currentLang]} Yatra`,
              customMessage: tour.whatsappMessage
            });

            return (
              <div
                key={tour.id}
                className="bg-white rounded-2xl p-5 sm:p-6 border-l-4 border-l-[#fdb73f] border-y border-r border-[#DEBFBF]/40 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-heading font-bold text-lg sm:text-xl text-[#6b011a]">
                      {tour.title[currentLang]}
                    </h3>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#fdb73f] text-[#6e4900] text-xs font-extrabold shrink-0">
                      {tour.badge[currentLang]}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#574142] mt-2 leading-relaxed">
                    {tour.subtitle[currentLang]}
                  </p>

                  {/* Rates Box */}
                  <div className="grid grid-cols-2 gap-2 mt-4 p-3 bg-[#F0F3FF] rounded-xl border border-[#DEBFBF]/30 text-center">
                    <div>
                      <span className="text-[11px] text-[#574142] font-semibold block">Swift Dzire</span>
                      <span className="font-heading font-extrabold text-base sm:text-lg text-[#6b011a] font-mono tabular-nums">
                        {tour.dzireRate}
                      </span>
                    </div>
                    <div className="border-l border-[#DEBFBF]/40">
                      <span className="text-[11px] text-[#574142] font-semibold block">Ertiga (7-Str)</span>
                      <span className="font-heading font-extrabold text-base sm:text-lg text-[#805600] font-mono tabular-nums">
                        {tour.ertigaRate}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-5">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full h-11 rounded-xl bg-[#6b011a] hover:bg-[#8b1e2e] text-white flex items-center justify-center gap-2 text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all active:scale-[0.98] cursor-pointer"
                  >
                    <span>{t.bookBtn[currentLang]}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* Custom Tour Itinerary Banner */}
        <div className="mt-8 p-5 sm:p-7 rounded-2xl bg-gradient-to-r from-[#6b011a] to-[#8b1e2e] text-white flex flex-col md:flex-row items-center justify-between gap-5 shadow-lg">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-xl bg-[#fdb73f] text-[#6e4900] flex items-center justify-center shrink-0 shadow-md">
              <Map className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-lg sm:text-xl text-white">
                {t.customCardTitle[currentLang]}
              </h4>
              <p className="text-xs sm:text-sm text-[#ffdada]/90 mt-1 max-w-xl">
                {t.customCardText[currentLang]}
              </p>
            </div>
          </div>

          <a
            href={customItineraryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto h-12 px-6 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center gap-2 text-sm font-bold shadow-md hover:shadow-xl transition-all whitespace-nowrap active:scale-[0.98] cursor-pointer"
          >
            {/* WhatsApp Icon */}
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M20.52 3.48A11.93 11.93 0 0012.04 0C5.43 0 .07 5.37.07 11.97c0 2.11.55 4.16 1.6 5.97L0 24l6.23-1.63a11.94 11.94 0 005.81 1.5h.01c6.6 0 11.97-5.37 11.97-11.97 0-3.2-1.25-6.21-3.5-8.42zM12.05 21.88h-.01c-1.8 0-3.57-.48-5.11-1.4l-.37-.22-3.79.99 1.01-3.7-.24-.38a9.92 9.92 0 01-1.52-5.2c0-5.48 4.46-9.94 9.95-9.94 2.65 0 5.15 1.03 7.03 2.91 1.88 1.88 2.91 4.38 2.91 7.03 0 5.48-4.46 9.94-9.95 9.94zm5.45-7.44c-.3-.15-1.77-.87-2.04-.97-.28-.1-.48-.15-.68.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.68-1.64-.93-2.25-.24-.59-.49-.51-.68-.52l-.58-.01c-.2 0-.52.07-.8.37-.27.3-1.05 1.03-1.05 2.51s1.08 2.91 1.23 3.11c.15.2 2.12 3.24 5.14 4.54.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" />
            </svg>
            <span>{t.customCardBtn[currentLang]}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
