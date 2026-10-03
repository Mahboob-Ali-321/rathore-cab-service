import React from 'react';
import { ArrowRight, Compass } from 'lucide-react';
import { popularRoutes, Language, uiTranslations, createWhatsAppBookingUrl } from '../data/config';

interface RoutesSectionProps {
  currentLang: Language;
}

export const RoutesSection: React.FC<RoutesSectionProps> = ({ currentLang }) => {
  const t = uiTranslations.routes;

  return (
    <section id="routes" className="w-full bg-[#F0F3FF] py-12 sm:py-16 border-y border-[#DEBFBF]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs sm:text-sm font-extrabold text-[#805600] tracking-wider uppercase mb-1.5 flex items-center gap-1.5">
            <Compass className="w-4 h-4 text-[#805600]" />
            <span>{t.sectionTag[currentLang]}</span>
          </span>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#111C2D]">
            {t.title[currentLang]}
          </h2>
          <p className="text-xs sm:text-sm lg:text-base text-[#574142] mt-2">
            {t.subtitle[currentLang]}
          </p>
        </div>

        {/* 6 Quick Route Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {popularRoutes.map((route) => {
            const whatsappUrl = createWhatsAppBookingUrl({
              drop: `${route.to[currentLang]} from Indore`,
              customMessage: route.whatsappMessage
            });

            return (
              <div
                key={route.id}
                className="bg-white rounded-2xl p-5 border border-[#DEBFBF]/40 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Category & Distance Tag */}
                  <div className="flex items-center justify-between pb-2">
                    <span className="text-xs font-bold text-[#805600] uppercase tracking-wider">
                      {route.category[currentLang]}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#ffdada] text-[#6b011a] text-xs font-extrabold">
                      {route.distance}
                    </span>
                  </div>

                  {/* Route Title */}
                  <h3 className="font-heading font-bold text-lg sm:text-xl text-[#111C2D] flex items-center gap-2">
                    <span>{route.from[currentLang]}</span>
                    <span className="text-[#8A7171] font-normal">➔</span>
                    <span className="text-[#6b011a]">{route.to[currentLang]}</span>
                  </h3>

                  <p className="text-xs text-[#574142] mt-1.5 leading-snug">
                    {route.subtext[currentLang]}
                  </p>

                  {/* Fares Box */}
                  <div className="grid grid-cols-2 gap-2 mt-4 p-3 bg-[#F0F3FF] rounded-xl border border-[#DEBFBF]/30 text-center">
                    <div className="flex flex-col">
                      <span className="text-[11px] text-[#574142] font-semibold">Swift Dzire</span>
                      <span className="font-heading font-extrabold text-base sm:text-lg text-[#6b011a]">
                        {route.dzireRate}
                      </span>
                    </div>
                    <div className="flex flex-col border-l border-[#DEBFBF]/40">
                      <span className="text-[11px] text-[#574142] font-semibold">Ertiga (7-Str)</span>
                      <span className="font-heading font-extrabold text-base sm:text-lg text-[#805600]">
                        {route.ertigaRate}
                      </span>
                    </div>
                  </div>
                </div>

                {/* WhatsApp Action Button */}
                <div className="pt-4">
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

      </div>
    </section>
  );
};
