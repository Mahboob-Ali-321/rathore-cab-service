import React from 'react';
import { CheckCircle2, MessageSquare } from 'lucide-react';
import { howToBookSteps, Language, uiTranslations, businessData } from '../data/config';

interface HowToBookSectionProps {
  currentLang: Language;
}

export const HowToBookSection: React.FC<HowToBookSectionProps> = ({ currentLang }) => {
  const t = uiTranslations.howToBook;

  return (
    <section id="how-to-book" className="w-full bg-[#F0F3FF] py-12 sm:py-16 border-y border-[#DEBFBF]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs sm:text-sm font-extrabold text-[#805600] tracking-wider uppercase mb-1.5 flex items-center gap-1.5">
            <MessageSquare className="w-4 h-4 text-[#805600]" />
            <span>{t.sectionTag[currentLang]}</span>
          </span>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#111C2D]">
            {t.title[currentLang]}
          </h2>
          <p className="text-xs sm:text-sm lg:text-base text-[#574142] mt-2">
            {t.subtitle[currentLang]}
          </p>
        </div>

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {howToBookSteps.map((item) => (
            <div
              key={item.step}
              className="bg-white rounded-2xl p-6 border border-[#DEBFBF]/40 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className={`w-10 h-10 rounded-xl font-heading font-extrabold text-base flex items-center justify-center text-white ${
                    item.step === 1 ? 'bg-[#6b011a]' : item.step === 2 ? 'bg-[#805600]' : 'bg-[#25D366]'
                  }`}>
                    {item.step}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#F0F3FF] text-[#6b011a] text-xs font-bold border border-[#DEBFBF]/40">
                    {item.badge[currentLang]}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-lg text-[#111C2D]">
                  {item.title[currentLang]}
                </h3>

                <p className="text-xs sm:text-sm text-[#574142] mt-2 leading-relaxed">
                  {item.description[currentLang]}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#DEBFBF]/30 flex items-center gap-1.5 text-xs text-[#805600] font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>{item.step === 1 ? businessData.phoneDisplay : item.step === 2 ? 'Under 2 Mins' : 'Cash or UPI'}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
