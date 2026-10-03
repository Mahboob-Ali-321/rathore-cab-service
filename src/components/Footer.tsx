import React from 'react';
import { Phone, ShieldCheck, Heart } from 'lucide-react';
import { businessData, Language, uiTranslations } from '../data/config';

interface FooterProps {
  currentLang: Language;
}

export const Footer: React.FC<FooterProps> = ({ currentLang }) => {
  const t = uiTranslations.nav;

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#6b011a] text-white pt-12 sm:pt-16 pb-28 sm:pb-16 border-t border-[#8b1e2e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-white/15">
          
          {/* Col 1: Business Identity */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="font-heading font-extrabold text-xl text-white">
                {businessData.name[currentLang]}
              </span>
              <span className="w-2 h-2 rounded-full bg-[#fdb73f] shrink-0" />
            </div>
            <p className="text-sm font-semibold text-[#ffddb0]">
              {businessData.tagline[currentLang]}
            </p>
            <p className="text-xs text-[#ffdada]/80 leading-relaxed">
              Central India's trusted commercial taxi & pilgrimage touring service. Doorstep pickup, clean AC cabs, and verified drivers across Madhya Pradesh & All India.
            </p>
            <div className="flex items-center gap-1.5 text-xs text-[#ffdada]/90 pt-1">
              <ShieldCheck className="w-4 h-4 text-[#fdb73f]" />
              <span>Govt. Approved Taxi Permit • MP RTO</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-sm text-[#ffddb0] uppercase tracking-wider">
              {currentLang === 'hi' ? 'नेविगेशन' : 'Quick Navigation'}
            </h4>
            <div className="flex flex-col space-y-2 text-xs sm:text-sm text-[#ffdada]/90">
              <button
                onClick={() => scrollTo('#fleet')}
                className="text-left hover:text-white hover:underline transition-colors cursor-pointer"
              >
                {t.fleet[currentLang]}
              </button>
              <button
                onClick={() => scrollTo('#routes')}
                className="text-left hover:text-white hover:underline transition-colors cursor-pointer"
              >
                {t.routes[currentLang]}
              </button>
              <button
                onClick={() => scrollTo('#fare-chart')}
                className="text-left hover:text-white hover:underline transition-colors cursor-pointer"
              >
                {t.fareChart[currentLang]}
              </button>
              <button
                onClick={() => scrollTo('#pilgrimage')}
                className="text-left hover:text-white hover:underline transition-colors cursor-pointer"
              >
                {t.pilgrimage[currentLang]}
              </button>
              <button
                onClick={() => scrollTo('#why-us')}
                className="text-left hover:text-white hover:underline transition-colors cursor-pointer"
              >
                {t.whyUs[currentLang]}
              </button>
              <button
                onClick={() => scrollTo('#reviews')}
                className="text-left hover:text-white hover:underline transition-colors cursor-pointer"
              >
                {t.reviews[currentLang]}
              </button>
            </div>
          </div>

          {/* Col 3: Popular Sacred Darshans */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-sm text-[#ffddb0] uppercase tracking-wider">
              {currentLang === 'hi' ? 'लोकप्रिय तीर्थ सर्किट' : 'Popular Darshan Circuits'}
            </h4>
            <div className="flex flex-col space-y-2 text-xs sm:text-sm text-[#ffdada]/90">
              <span className="hover:text-white transition-colors cursor-pointer" onClick={() => scrollTo('#routes')}>
                Indore ➔ Ujjain Mahakal (₹2,500)
              </span>
              <span className="hover:text-white transition-colors cursor-pointer" onClick={() => scrollTo('#routes')}>
                Indore ➔ Omkareshwar Jyotirlinga (₹2,750)
              </span>
              <span className="hover:text-white transition-colors cursor-pointer" onClick={() => scrollTo('#routes')}>
                Indore ➔ Nalkheda Baglamukhi (₹3,800)
              </span>
              <span className="hover:text-white transition-colors cursor-pointer" onClick={() => scrollTo('#pilgrimage')}>
                Indore ➔ Ayodhya Dham Yatra (₹30,000)
              </span>
              <span className="hover:text-white transition-colors cursor-pointer" onClick={() => scrollTo('#pilgrimage')}>
                Indore ➔ Khatu Shyam Ji & Salasar (₹17,500)
              </span>
              <span className="hover:text-white transition-colors cursor-pointer" onClick={() => scrollTo('#pilgrimage')}>
                Indore ➔ Mathura Vrindavan (₹20,000)
              </span>
            </div>
          </div>

          {/* Col 4: Contact & Office */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-sm text-[#ffddb0] uppercase tracking-wider">
              {currentLang === 'hi' ? 'संपर्क व पता' : 'Office & 24/7 Desk'}
            </h4>
            <div className="space-y-2 text-xs sm:text-sm text-[#ffdada]/90">
              <p className="leading-snug">
                1, Khandwa Naka, Bhavna Nagar, Indore, Madhya Pradesh 452020
              </p>
              <div className="pt-1">
                <span className="text-[11px] text-[#ffddb0] block font-semibold">24x7 Helpline:</span>
                <a
                  href={`tel:${businessData.phoneTel}`}
                  className="font-heading font-extrabold text-lg text-white hover:text-[#ffddb0] transition-colors flex items-center gap-1.5"
                >
                  <Phone className="w-4 h-4 text-[#fdb73f]" />
                  <span>{businessData.phoneDisplay}</span>
                </a>
              </div>
              <p className="text-[11px] text-[#ffdada]/70">
                Doorstep pickup from Indore Airport, Railway Station & Homes.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Credits Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#ffdada]/70">
          <p className="text-center sm:text-left">
            {businessData.copyright[currentLang]}
          </p>
          <p className="text-center sm:text-right font-medium text-white flex items-center gap-1">
            <span>Website by <span className="font-bold text-[#ffddb0]">Mahboob Ali</span></span>
          </p>
        </div>

      </div>
    </footer>
  );
};
