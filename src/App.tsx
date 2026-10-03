/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { BookingForm } from './components/BookingForm';
import { FleetSection } from './components/FleetSection';
import { RoutesSection } from './components/RoutesSection';
import { FareChartSection } from './components/FareChartSection';
import { PilgrimageSection } from './components/PilgrimageSection';
import { WhyUsSection } from './components/WhyUsSection';
import { HowToBookSection } from './components/HowToBookSection';
import { ReviewsSection } from './components/ReviewsSection';
import { GallerySection } from './components/GallerySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { StickyActions } from './components/StickyActions';
import { Language } from './data/config';

export default function App() {
  // English is default on first load as specified
  const [currentLang, setCurrentLang] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('rathore_cab_lang');
      if (saved === 'hi' || saved === 'en') {
        return saved;
      }
    }
    return 'en';
  });

  const toggleLanguage = () => {
    setCurrentLang((prev) => {
      const next: Language = prev === 'en' ? 'hi' : 'en';
      if (typeof window !== 'undefined') {
        localStorage.setItem('rathore_cab_lang', next);
      }
      return next;
    });
  };

  useEffect(() => {
    // Set document lang attribute
    document.documentElement.lang = currentLang;
  }, [currentLang]);

  return (
    <div className="min-h-screen flex flex-col bg-[#F9F9FF] text-[#111C2D] antialiased selection:bg-[#ffdada] selection:text-[#6b011a]">
      {/* 1. Header (Navbar, Language Switcher, Book Now) */}
      <Header currentLang={currentLang} onToggleLang={toggleLanguage} />

      {/* Main Page Flow (Scrollable full website) */}
      <main className="flex-1 w-full pb-16 md:pb-0">
        {/* 2. Hero Section */}
        <Hero currentLang={currentLang} />

        {/* 3. Quick Booking Form */}
        <BookingForm currentLang={currentLang} />

        {/* 4. Our Fleet (7 Vehicle Types) */}
        <FleetSection currentLang={currentLang} />

        {/* 5. Popular Indore Routes */}
        <RoutesSection currentLang={currentLang} />

        {/* 6. Full Fare Chart Table */}
        <FareChartSection currentLang={currentLang} />

        {/* 7. Pilgrimage & Long-Distance Tours */}
        <PilgrimageSection currentLang={currentLang} />

        {/* 8. Why Choose Us */}
        <WhyUsSection currentLang={currentLang} />

        {/* 9. How to Book (3 Steps) */}
        <HowToBookSection currentLang={currentLang} />

        {/* 10. Real Customer Reviews */}
        <ReviewsSection currentLang={currentLang} />

        {/* 11. Real Fleet & Moments Gallery */}
        <GallerySection currentLang={currentLang} />

        {/* 12. Contact & Dispatch Location */}
        <ContactSection currentLang={currentLang} />
      </main>

      {/* 13. Footer */}
      <Footer currentLang={currentLang} />

      {/* 14. Sticky Actions (Mobile bottom bar & Desktop floating WhatsApp) */}
      <StickyActions currentLang={currentLang} />
    </div>
  );
}
