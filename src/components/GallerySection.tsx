import React from 'react';
import { Camera } from 'lucide-react';
import { galleryPhotos, Language, uiTranslations } from '../data/config';

interface GallerySectionProps {
  currentLang: Language;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ currentLang }) => {
  const t = uiTranslations.gallery;

  return (
    <section id="gallery" className="w-full bg-[#F0F3FF] py-12 sm:py-16 border-t border-[#DEBFBF]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs sm:text-sm font-extrabold text-[#805600] tracking-wider uppercase mb-1.5 flex items-center gap-1.5">
            <Camera className="w-4 h-4 text-[#805600]" />
            <span>{t.sectionTag[currentLang]}</span>
          </span>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#111C2D]">
            {t.title[currentLang]}
          </h2>
          <p className="text-xs sm:text-sm lg:text-base text-[#574142] mt-2">
            {t.subtitle[currentLang]}
          </p>
        </div>

        {/* 6-Photo Responsive Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6">
          {galleryPhotos.map((photo) => (
            <div
              key={photo.id}
              className="relative h-44 sm:h-56 md:h-64 rounded-2xl overflow-hidden shadow-sm group border border-[#DEBFBF]/40 bg-[#E7EEFF]"
            >
              <img
                src={photo.image}
                alt={photo.title[currentLang]}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent flex items-end p-3 sm:p-4" />
              <span className="absolute bottom-3 left-3 right-3 text-white text-xs sm:text-sm font-bold drop-shadow truncate">
                {photo.title[currentLang]}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
