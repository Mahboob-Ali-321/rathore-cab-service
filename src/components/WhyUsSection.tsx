import React from 'react';
import { PhoneCall, Clock, ShieldCheck, DollarSign, Award } from 'lucide-react';
import { whyChooseData, Language, uiTranslations } from '../data/config';

interface WhyUsSectionProps {
  currentLang: Language;
}

export const WhyUsSection: React.FC<WhyUsSectionProps> = ({ currentLang }) => {
  const t = uiTranslations.whyUs;

  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <PhoneCall className="w-6 h-6 text-[#6b011a]" />;
      case 1:
        return <Clock className="w-6 h-6 text-[#805600]" />;
      case 2:
        return <ShieldCheck className="w-6 h-6 text-[#1a3354]" />;
      case 3:
      default:
        return <DollarSign className="w-6 h-6 text-[#6b011a]" />;
    }
  };

  const getBg = (idx: number) => {
    switch (idx) {
      case 0:
        return 'bg-[#ffdada]';
      case 1:
        return 'bg-[#ffddb0]';
      case 2:
        return 'bg-[#d4e3ff]';
      case 3:
      default:
        return 'bg-[#ffdada]';
    }
  };

  return (
    <section id="why-us" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      
      {/* Section Header */}
      <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-10">
        <span className="text-xs sm:text-sm font-extrabold text-[#805600] tracking-wider uppercase mb-1.5 flex items-center gap-1.5">
          <Award className="w-4 h-4 text-[#805600]" />
          <span>{t.sectionTag[currentLang]}</span>
        </span>
        <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#111C2D]">
          {t.title[currentLang]}
        </h2>
        <p className="text-xs sm:text-sm lg:text-base text-[#574142] mt-2">
          {t.subtitle[currentLang]}
        </p>
      </div>

      {/* 4 Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
        {whyChooseData.map((item, idx) => (
          <div
            key={item.id}
            className="p-5 sm:p-6 rounded-2xl bg-white border border-[#DEBFBF]/40 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
          >
            <div>
              <div className={`w-12 h-12 rounded-xl ${getBg(idx)} flex items-center justify-center mb-4`}>
                {getIcon(idx)}
              </div>
              <h3 className="font-heading font-bold text-base sm:text-lg text-[#111C2D]">
                {item.title[currentLang]}
              </h3>
              <p className="text-xs sm:text-sm text-[#574142] mt-2 leading-relaxed">
                {item.description[currentLang]}
              </p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};
