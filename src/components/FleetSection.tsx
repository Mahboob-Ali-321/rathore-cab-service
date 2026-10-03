import React from 'react';
import { Users, Wind, Luggage, ArrowRight, ShieldCheck } from 'lucide-react';
import { fleetData, Language, uiTranslations, createWhatsAppBookingUrl } from '../data/config';

interface FleetSectionProps {
  currentLang: Language;
}

export const FleetSection: React.FC<FleetSectionProps> = ({ currentLang }) => {
  const t = uiTranslations.fleet;

  return (
    <section id="fleet" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      
      {/* Section Header */}
      <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-10">
        <span className="text-xs sm:text-sm font-extrabold text-[#805600] tracking-wider uppercase mb-1.5 flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-[#805600]" />
          <span>{t.sectionTag[currentLang]}</span>
        </span>
        <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#111C2D]">
          {t.title[currentLang]}
        </h2>
        <p className="text-xs sm:text-sm lg:text-base text-[#574142] mt-2">
          {t.subtitle[currentLang]}
        </p>
      </div>

      {/* 7-Vehicle Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {fleetData.map((car) => {
          const whatsappUrl = createWhatsAppBookingUrl({
            car: car.name[currentLang],
            customMessage: car.whatsappMessage
          });

          return (
            <div
              key={car.id}
              className="bg-white rounded-2xl overflow-hidden border border-[#DEBFBF]/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* Image & Badge */}
              <div className="relative h-48 sm:h-52 w-full bg-[#E7EEFF] overflow-hidden">
                <img
                  src={car.image}
                  alt={car.name[currentLang]}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                
                {car.badge && (
                  <span className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-bold shadow-md ${car.badgeColor || 'bg-[#6b011a] text-white'}`}>
                    {car.badge[currentLang]}
                  </span>
                )}

                <div className="absolute bottom-3 right-3 px-3 py-1 rounded-xl bg-white/95 backdrop-blur-sm text-[#6b011a] font-heading font-extrabold text-xs sm:text-sm shadow-md">
                  {car.ratePerKm[currentLang]}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-heading font-bold text-base sm:text-lg text-[#111C2D]">
                        {car.name[currentLang]}
                      </h3>
                      <span className="text-xs font-semibold text-[#805600] block mt-0.5">
                        {car.subtitle[currentLang]}
                      </span>
                    </div>
                  </div>

                  {/* Specs Row */}
                  <div className="grid grid-cols-3 gap-1.5 mt-3 pt-2 border-t border-[#DEBFBF]/30 text-center">
                    <div className="p-1.5 bg-[#F0F3FF] rounded-lg">
                      <Users className="w-3.5 h-3.5 mx-auto text-[#6b011a] mb-0.5" />
                      <span className="text-[11px] font-bold text-[#111C2D] block truncate">
                        {car.capacity}
                      </span>
                    </div>

                    <div className="p-1.5 bg-[#F0F3FF] rounded-lg">
                      <Wind className="w-3.5 h-3.5 mx-auto text-[#6b011a] mb-0.5" />
                      <span className="text-[11px] font-bold text-[#111C2D] block truncate">
                        {car.acType[currentLang]}
                      </span>
                    </div>

                    <div className="p-1.5 bg-[#F0F3FF] rounded-lg">
                      <Luggage className="w-3.5 h-3.5 mx-auto text-[#6b011a] mb-0.5" />
                      <span className="text-[11px] font-bold text-[#111C2D] block truncate">
                        {car.luggage[currentLang]}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-[#574142] mt-3 leading-relaxed">
                    {car.description[currentLang]}
                  </p>
                </div>

                {/* WhatsApp Action Button */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-11 rounded-xl bg-[#F0F3FF] hover:bg-[#6b011a] text-[#6b011a] hover:text-white border border-[#DEBFBF]/50 flex items-center justify-center gap-2 text-xs sm:text-sm font-bold transition-all duration-200 active:scale-95 cursor-pointer shadow-xs group-hover:border-[#6b011a]"
                >
                  {/* WhatsApp SVG Icon */}
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M20.52 3.48A11.93 11.93 0 0012.04 0C5.43 0 .07 5.37.07 11.97c0 2.11.55 4.16 1.6 5.97L0 24l6.23-1.63a11.94 11.94 0 005.81 1.5h.01c6.6 0 11.97-5.37 11.97-11.97 0-3.2-1.25-6.21-3.5-8.42zM12.05 21.88h-.01c-1.8 0-3.57-.48-5.11-1.4l-.37-.22-3.79.99 1.01-3.7-.24-.38a9.92 9.92 0 01-1.52-5.2c0-5.48 4.46-9.94 9.95-9.94 2.65 0 5.15 1.03 7.03 2.91 1.88 1.88 2.91 4.38 2.91 7.03 0 5.48-4.46 9.94-9.95 9.94zm5.45-7.44c-.3-.15-1.77-.87-2.04-.97-.28-.1-.48-.15-.68.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.68-1.64-.93-2.25-.24-.59-.49-.51-.68-.52l-.58-.01c-.2 0-.52.07-.8.37-.27.3-1.05 1.03-1.05 2.51s1.08 2.91 1.23 3.11c.15.2 2.12 3.24 5.14 4.54.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" />
                  </svg>
                  <span>{t.bookBtnPrefix[currentLang]} {car.name[currentLang].split(' ')[0]}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
};
