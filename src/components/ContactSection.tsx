import React from 'react';
import { MapPin, Phone, Navigation, Clock, ShieldCheck } from 'lucide-react';
import { businessData, GOOGLE_MAPS_URL, Language, uiTranslations, createWhatsAppBookingUrl } from '../data/config';

interface ContactSectionProps {
  currentLang: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ currentLang }) => {
  const t = uiTranslations.contact;

  const whatsappUrl = createWhatsAppBookingUrl({
    customMessage: 'Hello Rathore Cab Service, I want to inquire about a taxi booking from Indore.'
  });

  return (
    <section id="contact" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      
      {/* Section Header */}
      <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-10">
        <span className="text-xs sm:text-sm font-extrabold text-[#805600] tracking-wider uppercase mb-1.5 flex items-center gap-1.5">
          <Clock className="w-4 h-4 text-[#805600]" />
          <span>{t.sectionTag[currentLang]}</span>
        </span>
        <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#111C2D]">
          {t.title[currentLang]}
        </h2>
        <p className="text-xs sm:text-sm lg:text-base text-[#574142] mt-2">
          {t.subtitle[currentLang]}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Info Column */}
        <div className="lg:col-span-6 flex flex-col space-y-5">
          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#DEBFBF]/40 shadow-sm space-y-6">
            
            {/* Business Entity */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#ffdada] text-[#6b011a] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-heading font-extrabold text-lg sm:text-xl text-[#111C2D]">
                  {businessData.name[currentLang]}
                </h3>
                <span className="text-xs sm:text-sm font-bold text-[#805600]">
                  {businessData.tagline[currentLang]}
                </span>
                <p className="text-xs text-[#574142] mt-1">
                  Govt. Approved Indore Taxi Operator • Central India Outstation & Pilgrimage Hub
                </p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4 pt-4 border-t border-[#DEBFBF]/30">
              <div className="w-12 h-12 rounded-xl bg-[#F0F3FF] text-[#6b011a] flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#805600] uppercase block">
                  {t.addressTitle[currentLang]}
                </span>
                <p className="text-sm sm:text-base font-semibold text-[#111C2D] mt-0.5">
                  {businessData.address[currentLang]}
                </p>
                <span className="text-xs text-[#574142] block mt-0.5">
                  Near Khandwa Naka Square & Bhavna Nagar
                </span>
              </div>
            </div>

            {/* Phone & Helpline */}
            <div className="flex items-start gap-4 pt-4 border-t border-[#DEBFBF]/30">
              <div className="w-12 h-12 rounded-xl bg-[#ffddb0] text-[#805600] flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#805600] uppercase block">
                  {t.phoneTitle[currentLang]}
                </span>
                <a
                  href={`tel:${businessData.phoneTel}`}
                  className="font-heading font-extrabold text-xl sm:text-2xl text-[#6b011a] hover:text-[#8b1e2e] transition-colors block mt-0.5"
                >
                  {businessData.phoneDisplay}
                </a>
                <span className="text-xs text-[#574142]">
                  Available 24 Hours • Instant Outstation & Station Dispatch
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <a
                href={`tel:${businessData.phoneTel}`}
                className="h-12 rounded-xl bg-[#6b011a] hover:bg-[#8b1e2e] text-white flex items-center justify-center gap-2 font-bold text-sm shadow-md transition-all active:scale-[0.98] cursor-pointer"
              >
                <Phone className="w-4 h-4" />
                <span>{t.callBtn[currentLang]}</span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center gap-2 font-bold text-sm shadow-md transition-all active:scale-[0.98] cursor-pointer"
              >
                {/* WhatsApp SVG */}
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M20.52 3.48A11.93 11.93 0 0012.04 0C5.43 0 .07 5.37.07 11.97c0 2.11.55 4.16 1.6 5.97L0 24l6.23-1.63a11.94 11.94 0 005.81 1.5h.01c6.6 0 11.97-5.37 11.97-11.97 0-3.2-1.25-6.21-3.5-8.42zM12.05 21.88h-.01c-1.8 0-3.57-.48-5.11-1.4l-.37-.22-3.79.99 1.01-3.7-.24-.38a9.92 9.92 0 01-1.52-5.2c0-5.48 4.46-9.94 9.95-9.94 2.65 0 5.15 1.03 7.03 2.91 1.88 1.88 2.91 4.38 2.91 7.03 0 5.48-4.46 9.94-9.95 9.94zm5.45-7.44c-.3-.15-1.77-.87-2.04-.97-.28-.1-.48-.15-.68.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.68-1.64-.93-2.25-.24-.59-.49-.51-.68-.52l-.58-.01c-.2 0-.52.07-.8.37-.27.3-1.05 1.03-1.05 2.51s1.08 2.91 1.23 3.11c.15.2 2.12 3.24 5.14 4.54.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" />
                </svg>
                <span>{t.whatsappBtn[currentLang]}</span>
              </a>
            </div>

          </div>
        </div>

        {/* Right Map Card */}
        <div className="lg:col-span-6">
          <div className="bg-white rounded-2xl p-2 sm:p-3 border border-[#DEBFBF]/40 shadow-xl overflow-hidden">
            <div className="relative h-72 sm:h-96 w-full rounded-xl overflow-hidden bg-[#263143]">
              {/* Map visual background */}
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAlYGxsXKBreVkAPVaWP0tfYiBjksXGSTnG4WPNyFgLkWNq4a6Ac4HBDN0gYXVVrdw4gcg2K95TxDqvsmA-XAiFJVIgf8FoEnfDnoGaMqIJWCAhhdn0REtqSmFOXauq6FAzyvfrSGVYOCHDLuWWEQE02LfwNFCnjBK-ymz1js7KgIdmvKGQ0rfVbERkoh68hvRt4pxL5KxKQxrfOyUm-RAA6ufGe6p9gF8_tAa1NL8_kiVCsj3yko"
                alt="Rathore Cab Service Location Map Indore"
                className="w-full h-full object-cover object-center filter brightness-95"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              
              {/* Overlay location pin card */}
              <div className="absolute bottom-3 left-3 right-3 p-3.5 sm:p-4 rounded-xl bg-white/95 backdrop-blur-md shadow-lg flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-[#111C2D]">
                <div>
                  <div className="flex items-center gap-1.5 text-[#6b011a] font-bold text-xs">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                    <span>Khandwa Naka Dispatch Center</span>
                  </div>
                  <h4 className="font-heading font-extrabold text-sm sm:text-base text-[#111C2D] mt-0.5">
                    1, Khandwa Naka, Bhavna Nagar, Indore
                  </h4>
                </div>

                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 px-4 rounded-lg bg-[#6b011a] hover:bg-[#8b1e2e] text-white flex items-center justify-center gap-1.5 text-xs sm:text-sm font-bold shadow-md transition-all whitespace-nowrap shrink-0 active:scale-95 cursor-pointer"
                >
                  <Navigation className="w-4 h-4" />
                  <span>{t.directionsBtn[currentLang]}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
};
