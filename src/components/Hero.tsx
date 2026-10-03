import React from 'react';
import { Phone, Star, Clock, ShieldCheck, Award } from 'lucide-react';
import { businessData, Language, trustChips, uiTranslations, createWhatsAppBookingUrl } from '../data/config';

interface HeroProps {
  currentLang: Language;
}

export const Hero: React.FC<HeroProps> = ({ currentLang }) => {
  const t = uiTranslations.hero;
  const whatsappUrl = createWhatsAppBookingUrl({
    customMessage: 'Hello Rathore Cab Service & Travels, I would like to enquire about booking a cab from Indore.'
  });

  return (
    <div className="w-full pt-16 sm:pt-20">
      {/* Auspicious Invocation Header Bar */}
      <div className="w-full bg-[#6b011a] text-white py-1.5 px-3 text-center border-b border-[#8b1e2e]">
        <div className="flex items-center justify-center gap-1.5 text-xs sm:text-sm font-semibold tracking-wider text-[#ffddb0]">
          <span className="text-[#fdb73f]">॥</span>
          <span>{businessData.invocation[currentLang]}</span>
          <span className="text-[#fdb73f]">॥</span>
        </div>
      </div>

      {/* Main Hero Section */}
      <section className="relative w-full bg-gradient-to-b from-[#6b011a] via-[#750720] to-[#8b1e2e] text-white overflow-hidden pb-10 sm:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col space-y-4 sm:space-y-6 text-center lg:text-left">
              
              {/* Badge & Tagline */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-[#ffddb0] text-xs font-semibold border border-white/15">
                  <Award className="w-3.5 h-3.5 text-[#fdb73f]" />
                  <span>{t.badge[currentLang]}</span>
                </span>
                <span className="px-3 py-1 rounded-full bg-[#fdb73f] text-[#6e4900] text-xs font-extrabold shadow-sm">
                  {businessData.tagline[currentLang]}
                </span>
              </div>

              {/* Fluid Headline */}
              <h1 className="font-heading font-extrabold text-2xl xs:text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-[1.15] text-balance">
                {t.headline[currentLang]}
              </h1>

              {/* Sub-line */}
              <p className="text-sm sm:text-base lg:text-lg text-[#ffdada]/90 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                {t.subline[currentLang]}
              </p>

              {/* 4 Trust Chips in Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 pt-2">
                {trustChips.map((chip, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 sm:p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15 flex flex-col items-center lg:items-start text-center lg:text-left transition-all hover:bg-white/15"
                  >
                    <div className="flex items-center gap-1 text-[#fdb73f] mb-1">
                      {idx === 0 && <Star className="w-4 h-4 fill-[#fdb73f]" />}
                      {idx === 1 && <Clock className="w-4 h-4" />}
                      {idx === 2 && <ShieldCheck className="w-4 h-4" />}
                      {idx === 3 && <Award className="w-4 h-4" />}
                      <span className="text-xs sm:text-sm font-extrabold text-white">
                        {chip.value}
                      </span>
                    </div>
                    <span className="text-[11px] sm:text-xs text-[#ffdada]/80 leading-tight">
                      {chip.subtext[currentLang]}
                    </span>
                  </div>
                ))}
              </div>

              {/* Two CTA Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2 max-w-md mx-auto lg:mx-0 w-full">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:flex-1 h-12 sm:h-13 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center gap-2 font-bold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all active:scale-[0.98] cursor-pointer"
                >
                  {/* WhatsApp SVG Icon */}
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M20.52 3.48A11.93 11.93 0 0012.04 0C5.43 0 .07 5.37.07 11.97c0 2.11.55 4.16 1.6 5.97L0 24l6.23-1.63a11.94 11.94 0 005.81 1.5h.01c6.6 0 11.97-5.37 11.97-11.97 0-3.2-1.25-6.21-3.5-8.42zM12.05 21.88h-.01c-1.8 0-3.57-.48-5.11-1.4l-.37-.22-3.79.99 1.01-3.7-.24-.38a9.92 9.92 0 01-1.52-5.2c0-5.48 4.46-9.94 9.95-9.94 2.65 0 5.15 1.03 7.03 2.91 1.88 1.88 2.91 4.38 2.91 7.03 0 5.48-4.46 9.94-9.95 9.94zm5.45-7.44c-.3-.15-1.77-.87-2.04-.97-.28-.1-.48-.15-.68.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.68-1.64-.93-2.25-.24-.59-.49-.51-.68-.52l-.58-.01c-.2 0-.52.07-.8.37-.27.3-1.05 1.03-1.05 2.51s1.08 2.91 1.23 3.11c.15.2 2.12 3.24 5.14 4.54.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" />
                  </svg>
                  <span>{t.btnWhatsapp[currentLang]}</span>
                </a>

                <a
                  href={`tel:${businessData.phoneTel}`}
                  className="w-full sm:flex-1 h-12 sm:h-13 rounded-xl bg-[#fdb73f] hover:bg-[#e5a230] text-[#6e4900] flex items-center justify-center gap-2 font-bold text-sm sm:text-base shadow-md hover:shadow-lg transition-all active:scale-[0.98]"
                >
                  <Phone className="w-5 h-5" />
                  <span>{t.btnCall[currentLang]}</span>
                </a>
              </div>

              {/* Status Note */}
              <div className="flex items-center justify-center lg:justify-start gap-2 text-xs text-[#ffdada]/80 pt-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>{t.driverStandby[currentLang]}</span>
              </div>

            </div>

            {/* Right Visual Image Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 bg-[#263143]">
                {/* Night lineup fleet photo from prompt */}
                <div className="relative h-[280px] xs:h-[320px] sm:h-[380px] w-full">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDasN44J8RRTR79OF55xxRsHZ7YrEyhtYLqVEYPX9vyeJRo7QrEK0wgE65X1QCnhvu6P_okJxB_LVuAlsU_hKLrUoQeMZjlqTSYvBnwH6ln5-D9iiTwYWrUCqebgRjLC2poy8C8wWYHBj9ltFIlj73d2z_dsYFEw_75R71jalY5CNjlIUZz94-0js9NrkbTj1PtNa1lcVDgr0uF_QijnBEjBKhVC7-h4xHlxtaU_z0ox3BLEigqBN8Q5-6T4RsesV80"
                    alt="Rathore Cab Service ready fleet lined up at night"
                    className="w-full h-full object-cover object-center filter brightness-95"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#6b011a] via-[#6b011a]/40 to-transparent" />
                  
                  {/* Floating Top Badge */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-white/95 text-[#6b011a] font-bold text-xs shadow-md backdrop-blur-md flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 text-[#fdb73f] fill-[#fdb73f]" />
                      <span>5.0 (12+ Reviews)</span>
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-[#fdb73f] text-[#6e4900] font-extrabold text-xs shadow-sm">
                      24×7 Available
                    </span>
                  </div>

                  {/* Bottom Overlay Card */}
                  <div className="absolute bottom-3 left-3 right-3 p-3.5 rounded-xl bg-white/95 backdrop-blur-md text-[#111C2D] shadow-lg">
                    <div className="flex items-center justify-between">
                      <span className="font-heading font-bold text-sm sm:text-base text-[#6b011a]">
                        {currentLang === 'hi' ? 'इंदौर से पूरे भारत में यात्रा' : 'Serving Indore & All India'}
                      </span>
                      <span className="text-xs font-bold text-[#805600] bg-[#ffddb0]/60 px-2 py-0.5 rounded">
                        {currentLang === 'hi' ? 'निश्चिंत यात्रा' : 'Instant Dispatch'}
                      </span>
                    </div>
                    <p className="text-xs text-[#574142] mt-1 leading-snug">
                      {currentLang === 'hi' 
                        ? 'उज्जैन, ओंकारेश्वर, भोपाल, अयोध्या एवं ऑल-इंडिया टूर के लिए तैयार गाड़ियां।' 
                        : 'Swift Dzire, Ertiga, Innova Crysta, Fortuner & Tempo Traveller ready for dispatch.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
