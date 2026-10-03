import React, { useState } from 'react';
import { Phone, Menu, X, Globe, ArrowRight } from 'lucide-react';
import { businessData, Language, uiTranslations } from '../data/config';

interface HeaderProps {
  currentLang: Language;
  onToggleLang: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentLang, onToggleLang }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = uiTranslations;

  const navLinks = [
    { label: t.nav.fleet[currentLang], href: '#fleet' },
    { label: t.nav.routes[currentLang], href: '#routes' },
    { label: t.nav.pilgrimage[currentLang], href: '#pilgrimage' },
    { label: t.nav.fareChart[currentLang], href: '#fare-chart' },
    { label: t.nav.whyUs[currentLang], href: '#why-us' },
    { label: t.nav.reviews[currentLang], href: '#reviews' },
    { label: t.nav.contact[currentLang], href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 bg-[#F9F9FF]/95 backdrop-blur-md border-b border-[#DEBFBF]/40 shadow-[0_2px_12px_rgba(107,1,26,0.06)]">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 h-16 sm:h-20 flex items-center justify-between gap-2">
          
          {/* Brand Logo & Name */}
          <div className="flex items-center gap-2 min-w-0">
            {/* Hamburger Button on Mobile */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 -ml-1 text-[#6b011a] hover:bg-[#E7EEFF] rounded-lg transition-colors shrink-0"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>

            <a href="#" className="flex flex-col min-w-0 group select-none">
              <div className="flex items-center gap-1.5 truncate">
                <span className="font-heading font-extrabold text-base sm:text-xl text-[#6b011a] tracking-tight truncate">
                  {currentLang === 'hi' ? 'राठौड़ कैब' : 'Rathore Cab'}
                </span>
                <span className="hidden xs:inline-block w-1.5 h-1.5 rounded-full bg-[#fdb73f] shrink-0" />
                <span className="hidden sm:inline font-heading font-bold text-sm sm:text-base text-[#805600] truncate">
                  {currentLang === 'hi' ? 'सर्विस & ट्रैवल्स' : 'Travels & Taxi'}
                </span>
              </div>
              <span className="text-[11px] sm:text-xs text-[#574142] truncate font-medium">
                {currentLang === 'hi' ? 'इंदौर • ऑल इंडिया टूर' : 'Indore • All India Tour'}
              </span>
            </a>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 px-2 py-1.5 bg-[#F0F3FF] rounded-xl border border-[#DEBFBF]/30">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-2.5 xl:px-3 py-1 text-xs xl:text-sm font-semibold text-[#574142] hover:text-[#6b011a] hover:bg-white rounded-lg transition-all whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Cluster */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            {/* Language Switcher */}
            <button
              onClick={onToggleLang}
              className="h-9 px-2.5 sm:px-3 rounded-full bg-[#E7EEFF] hover:bg-[#DEE8FF] border border-[#DEBFBF]/40 text-[#111C2D] flex items-center gap-1.5 text-xs sm:text-sm font-bold transition-all cursor-pointer shadow-sm active:scale-95 shrink-0"
              aria-label="Toggle language between English and Hindi"
              title={currentLang === 'en' ? 'हिंदी में देखें' : 'View in English'}
            >
              <Globe className="w-3.5 h-3.5 text-[#6b011a]" />
              <span className={currentLang === 'en' ? 'text-[#6b011a] font-extrabold' : 'text-[#574142]'}>EN</span>
              <span className="text-[#8A7171] text-xs">|</span>
              <span className={currentLang === 'hi' ? 'text-[#6b011a] font-extrabold' : 'text-[#574142]'}>हिं</span>
            </button>

            {/* Direct Phone Call Button (Desktop) */}
            <a
              href={`tel:${businessData.phoneTel}`}
              className="hidden md:inline-flex items-center gap-1.5 h-9 sm:h-10 px-3 rounded-lg bg-[#F0F3FF] hover:bg-[#E7EEFF] text-[#6b011a] border border-[#DEBFBF]/40 text-xs sm:text-sm font-bold transition-colors shrink-0"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{businessData.phoneDisplay}</span>
            </a>

            {/* Book Now Button */}
            <a
              href="#book"
              onClick={(e) => handleNavClick(e, '#book')}
              className="h-9 sm:h-10 px-3 sm:px-4 rounded-lg bg-[#6b011a] hover:bg-[#8b1e2e] text-white flex items-center justify-center gap-1 text-xs sm:text-sm font-bold shadow-[0_2px_8px_rgba(107,1,26,0.25)] transition-all shrink-0 active:scale-95"
            >
              <span>{t.nav.bookNow[currentLang]}</span>
              <ArrowRight className="w-3.5 h-3.5 hidden sm:inline" />
            </a>
          </div>

        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-[#263143]/60 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Content */}
          <div className="fixed inset-y-0 left-0 w-4/5 max-w-xs bg-white shadow-2xl flex flex-col z-10 animate-in slide-in-from-left duration-200">
            <div className="p-4 border-b border-[#DEBFBF]/40 bg-[#F0F3FF] flex items-center justify-between">
              <div>
                <span className="font-heading font-extrabold text-lg text-[#6b011a] block">
                  {businessData.name[currentLang]}
                </span>
                <span className="text-xs text-[#574142]">
                  {businessData.tagline[currentLang]}
                </span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 rounded-lg text-[#111C2D] hover:bg-white"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 flex-1 overflow-y-auto space-y-1">
              {navLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="flex items-center justify-between px-3 py-3 rounded-lg text-sm font-semibold text-[#111C2D] hover:bg-[#F0F3FF] hover:text-[#6b011a] transition-colors"
                >
                  <span>{link.label}</span>
                  <ArrowRight className="w-4 h-4 text-[#8A7171]" />
                </a>
              ))}
            </div>

            <div className="p-4 border-t border-[#DEBFBF]/40 bg-[#F9F9FF] space-y-2">
              <a
                href={`tel:${businessData.phoneTel}`}
                className="w-full h-11 rounded-lg bg-[#6b011a] text-white flex items-center justify-center gap-2 font-bold text-sm shadow-md"
              >
                <Phone className="w-4 h-4" />
                <span>Call {businessData.phoneDisplay}</span>
              </a>
              <p className="text-[11px] text-center text-[#574142]">
                1, Khandwa Naka, Indore • 24/7 Active
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
