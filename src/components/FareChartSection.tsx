import React, { useState, useMemo } from 'react';
import { FileText, Info, ArrowRight, Search } from 'lucide-react';
import { fullFareChart, Language, uiTranslations, createWhatsAppBookingUrl } from '../data/config';

interface FareChartSectionProps {
  currentLang: Language;
}

export const FareChartSection: React.FC<FareChartSectionProps> = ({ currentLang }) => {
  const t = uiTranslations.fareChart;
  const [activeFilter, setActiveFilter] = useState<'all' | 'pilgrimage' | 'city'>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredItems = useMemo(() => {
    return fullFareChart.filter((item) => {
      const matchesCategory = activeFilter === 'all' || item.category === activeFilter;
      const destText = `${item.destination.en} ${item.destination.hi}`.toLowerCase();
      const infoText = `${item.info.en} ${item.info.hi}`.toLowerCase();
      const matchesSearch = !searchTerm || destText.includes(searchTerm.toLowerCase()) || infoText.includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeFilter, searchTerm]);

  return (
    <section id="fare-chart" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      
      {/* Section Header */}
      <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-8">
        <span className="text-xs sm:text-sm font-extrabold text-[#805600] tracking-wider uppercase mb-1.5 flex items-center gap-1.5">
          <FileText className="w-4 h-4 text-[#805600]" />
          <span>{t.sectionTag[currentLang]}</span>
        </span>
        <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#111C2D]">
          {t.title[currentLang]}
        </h2>
        <p className="text-xs sm:text-sm lg:text-base text-[#574142] mt-2">
          {t.subtitle[currentLang]}
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-6">
        {/* Interactive Segmented Filter Controls */}
        <div className="flex items-center gap-1 p-1 bg-[#F0F3FF] rounded-xl border border-[#DEBFBF]/40 w-full sm:w-auto">
          <button
            onClick={() => setActiveFilter('all')}
            className={`flex-1 sm:flex-none px-3 sm:px-4 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all cursor-pointer ${
              activeFilter === 'all'
                ? 'bg-[#6b011a] text-white shadow-sm'
                : 'text-[#574142] hover:text-[#6b011a]'
            }`}
          >
            {t.filterAll[currentLang]}
          </button>
          <button
            onClick={() => setActiveFilter('pilgrimage')}
            className={`flex-1 sm:flex-none px-3 sm:px-4 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all cursor-pointer ${
              activeFilter === 'pilgrimage'
                ? 'bg-[#6b011a] text-white shadow-sm'
                : 'text-[#574142] hover:text-[#6b011a]'
            }`}
          >
            {t.filterPilgrimage[currentLang]}
          </button>
          <button
            onClick={() => setActiveFilter('city')}
            className={`flex-1 sm:flex-none px-3 sm:px-4 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all cursor-pointer ${
              activeFilter === 'city'
                ? 'bg-[#6b011a] text-white shadow-sm'
                : 'text-[#574142] hover:text-[#6b011a]'
            }`}
          >
            {t.filterCity[currentLang]}
          </button>
        </div>

        {/* Live Search */}
        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 text-[#8A7171] absolute left-3 top-3" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder={currentLang === 'hi' ? 'गंतव्य खोजें...' : 'Search destination...'}
            className="w-full h-10 pl-9 pr-3 rounded-xl bg-white border border-[#DEBFBF]/50 text-xs sm:text-sm text-[#111C2D] focus:outline-none focus:border-[#6b011a]"
          />
        </div>
      </div>

      {/* Table Container */}
      <div className="bg-white rounded-2xl border border-[#DEBFBF]/40 shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="bg-[#6b011a] text-white text-xs sm:text-sm font-bold">
                <th className="py-3.5 px-4 sm:px-6">{t.thDestination[currentLang]}</th>
                <th className="py-3.5 px-3 sm:px-4">{t.thDzire[currentLang]}</th>
                <th className="py-3.5 px-3 sm:px-4">{t.thErtiga[currentLang]}</th>
                <th className="py-3.5 px-3 sm:px-4">{t.thDistance[currentLang]}</th>
                <th className="py-3.5 px-4 sm:px-6 text-right">{t.thAction[currentLang]}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#DEBFBF]/30 text-xs sm:text-sm">
              {filteredItems.map((item, idx) => {
                const whatsappUrl = createWhatsAppBookingUrl({
                  drop: `${item.destination[currentLang]} from Indore`,
                  customMessage: `Hello Rathore Cab, I want to book cab from Indore to ${item.destination[currentLang]} (${item.dzireRate} / ${item.ertigaRate}).`
                });

                return (
                  <tr
                    key={item.id}
                    className={`hover:bg-[#F0F3FF]/70 transition-colors ${
                      idx % 2 === 0 ? 'bg-white' : 'bg-[#F9F9FF]'
                    }`}
                  >
                    <td className="py-3.5 px-4 sm:px-6 font-bold text-[#111C2D]">
                      <span>{item.destination[currentLang]}</span>
                    </td>
                    <td className="py-3.5 px-3 sm:px-4 font-extrabold text-[#6b011a] font-mono tabular-nums">
                      {item.dzireRate}
                    </td>
                    <td className="py-3.5 px-3 sm:px-4 font-extrabold text-[#805600] font-mono tabular-nums">
                      {item.ertigaRate}
                    </td>
                    <td className="py-3.5 px-3 sm:px-4 text-[#574142]">
                      <span className="font-semibold text-[#111C2D] mr-1.5">{item.distance}</span>
                      <span className="text-xs text-[#8A7171] hidden md:inline">({item.info[currentLang]})</span>
                    </td>
                    <td className="py-3.5 px-4 sm:px-6 text-right">
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#6b011a] hover:bg-[#8b1e2e] text-white text-xs font-bold shadow-xs transition-all active:scale-95"
                      >
                        <span>{t.thAction[currentLang]}</span>
                        <ArrowRight className="w-3 h-3" />
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Verbatim Mandatory Notice */}
        <div className="p-4 bg-[#F0F3FF] border-t border-[#DEBFBF]/40 flex items-center gap-2.5">
          <Info className="w-4 h-4 text-[#6b011a] shrink-0" />
          <p className="text-xs sm:text-sm font-bold text-[#111C2D]">
            {t.tollNotice[currentLang]}
          </p>
        </div>
      </div>

    </section>
  );
};
