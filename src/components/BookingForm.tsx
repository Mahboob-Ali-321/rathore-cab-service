import React, { useState } from 'react';
import { User, Phone, MapPin, Calendar, Car, Send, AlertCircle, CheckCircle2, ExternalLink } from 'lucide-react';
import { businessData, Language, uiTranslations, createWhatsAppBookingUrl } from '../data/config';

interface BookingFormProps {
  currentLang: Language;
}

export const BookingForm: React.FC<BookingFormProps> = ({ currentLang }) => {
  const t = uiTranslations.bookingForm;

  // Form state
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [pickup, setPickup] = useState('Indore');
  const [drop, setDrop] = useState('');
  
  // Default travel date: tomorrow
  const getTomorrowDate = () => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split('T')[0];
  };
  const [date, setDate] = useState(getTomorrowDate());
  const [carType, setCarType] = useState('Swift Dzire (Sedan 4+1)');

  // Validation & Error state
  const [errors, setErrors] = useState<{
    name?: string;
    phone?: string;
    drop?: string;
    date?: string;
  }>({});
  const [submittedUrl, setSubmittedUrl] = useState<string | null>(null);

  // Validate form fields
  const validate = () => {
    const newErrors: {
      name?: string;
      phone?: string;
      drop?: string;
      date?: string;
    } = {};

    if (!name.trim()) {
      newErrors.name = t.errors.nameRequired[currentLang];
    }

    // Phone validation: exactly 10 digits
    const cleanedPhone = phone.replace(/\D/g, '');
    if (cleanedPhone.length !== 10) {
      newErrors.phone = t.errors.phoneInvalid[currentLang];
    }

    if (!drop.trim()) {
      newErrors.drop = t.errors.dropRequired[currentLang];
    }

    // Date validation: not in the past
    if (!date) {
      newErrors.date = t.errors.dateInvalid[currentLang];
    } else {
      const selectedDate = new Date(date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectedDate < today) {
        newErrors.date = t.errors.dateInvalid[currentLang];
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();

    if (!validate()) {
      return;
    }

    const cleanedPhone = phone.replace(/\D/g, '');
    const url = createWhatsAppBookingUrl({
      name: name.trim(),
      phone: cleanedPhone,
      pickup: pickup.trim() || 'Indore',
      drop: drop.trim(),
      date,
      car: carType
    });

    setSubmittedUrl(url);

    // Open in new tab with noopener,noreferrer
    try {
      const newWin = window.open(url, '_blank', 'noopener,noreferrer');
      // If blocked or null, the fallback link will remain visible
    } catch (err) {
      console.warn('Popup blocked, fallback link provided.', err);
    }
  };

  return (
    <section id="book" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-10 relative z-20">
      <div className="bg-white rounded-2xl p-5 sm:p-8 shadow-xl border-t-4 border-[#fdb73f] border-x border-b border-[#DEBFBF]/40">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-5 border-b border-[#DEBFBF]/30">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-6 bg-[#6b011a] rounded-full" />
              <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-[#111C2D]">
                {t.title[currentLang]}
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#574142] mt-1">
              {t.subtitle[currentLang]}
            </p>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#F0F3FF] border border-[#DEBFBF]/40 rounded-full text-[#6b011a] text-xs font-bold w-fit">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>{t.fastResponse[currentLang]}</span>
          </div>
        </div>

        {/* Input Controls Grid (No HTML <form> tag to prevent sandbox issues) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 pt-5">
          
          {/* 1. Full Name */}
          <div className="flex flex-col space-y-1">
            <label className="text-xs sm:text-sm font-bold text-[#111C2D] flex items-center justify-between">
              <span>{t.nameLabel[currentLang]} <span className="text-[#ba1a1a]">*</span></span>
              <span className="text-[11px] text-[#574142] font-normal">(नाम)</span>
            </label>
            <div className={`relative h-12 rounded-xl bg-[#F0F3FF] border ${errors.name ? 'border-[#ba1a1a]' : 'border-[#DEBFBF]/50'} flex items-center px-3 focus-within:border-[#6b011a] focus-within:bg-white transition-all`}>
              <User className="w-4 h-4 text-[#8A7171] shrink-0 mr-2" />
              <input
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  if (errors.name) setErrors({ ...errors, name: undefined });
                }}
                placeholder={t.namePlaceholder[currentLang]}
                className="w-full bg-transparent text-sm text-[#111C2D] placeholder:text-[#8A7171] focus:outline-none"
              />
            </div>
            {errors.name && (
              <span className="text-xs text-[#ba1a1a] flex items-center gap-1 mt-0.5">
                <AlertCircle className="w-3 h-3 shrink-0" />
                <span>{errors.name}</span>
              </span>
            )}
          </div>

          {/* 2. Mobile Number */}
          <div className="flex flex-col space-y-1">
            <label className="text-xs sm:text-sm font-bold text-[#111C2D] flex items-center justify-between">
              <span>{t.phoneLabel[currentLang]} <span className="text-[#ba1a1a]">*</span></span>
              <span className="text-[11px] text-[#574142] font-normal">(10 Digits)</span>
            </label>
            <div className={`relative h-12 rounded-xl bg-[#F0F3FF] border ${errors.phone ? 'border-[#ba1a1a]' : 'border-[#DEBFBF]/50'} flex items-center px-3 focus-within:border-[#6b011a] focus-within:bg-white transition-all`}>
              <Phone className="w-4 h-4 text-[#8A7171] shrink-0 mr-1.5" />
              <span className="text-xs sm:text-sm font-bold text-[#111C2D] mr-1.5">+91</span>
              <input
                type="tel"
                maxLength={10}
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                  if (errors.phone) setErrors({ ...errors, phone: undefined });
                }}
                placeholder={t.phonePlaceholder[currentLang]}
                className="w-full bg-transparent text-sm text-[#111C2D] placeholder:text-[#8A7171] focus:outline-none"
              />
            </div>
            {errors.phone && (
              <span className="text-xs text-[#ba1a1a] flex items-center gap-1 mt-0.5">
                <AlertCircle className="w-3 h-3 shrink-0" />
                <span>{errors.phone}</span>
              </span>
            )}
          </div>

          {/* 3. Pickup Location */}
          <div className="flex flex-col space-y-1">
            <label className="text-xs sm:text-sm font-bold text-[#111C2D] flex items-center justify-between">
              <span>{t.pickupLabel[currentLang]}</span>
              <span className="text-[11px] text-[#574142] font-normal">(पिकअप स्थान)</span>
            </label>
            <div className="relative h-12 rounded-xl bg-[#F0F3FF] border border-[#DEBFBF]/50 flex items-center px-3 focus-within:border-[#6b011a] focus-within:bg-white transition-all">
              <MapPin className="w-4 h-4 text-[#6b011a] shrink-0 mr-2" />
              <input
                type="text"
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
                placeholder={t.pickupPlaceholder[currentLang]}
                className="w-full bg-transparent text-sm text-[#111C2D] font-medium placeholder:text-[#8A7171] focus:outline-none"
              />
            </div>
          </div>

          {/* 4. Drop Destination */}
          <div className="flex flex-col space-y-1">
            <label className="text-xs sm:text-sm font-bold text-[#111C2D] flex items-center justify-between">
              <span>{t.dropLabel[currentLang]} <span className="text-[#ba1a1a]">*</span></span>
              <span className="text-[11px] text-[#574142] font-normal">(गंतव्य)</span>
            </label>
            <div className={`relative h-12 rounded-xl bg-[#F0F3FF] border ${errors.drop ? 'border-[#ba1a1a]' : 'border-[#DEBFBF]/50'} flex items-center px-3 focus-within:border-[#6b011a] focus-within:bg-white transition-all`}>
              <MapPin className="w-4 h-4 text-[#805600] shrink-0 mr-2" />
              <input
                type="text"
                value={drop}
                onChange={(e) => {
                  setDrop(e.target.value);
                  if (errors.drop) setErrors({ ...errors, drop: undefined });
                }}
                placeholder={t.dropPlaceholder[currentLang]}
                className="w-full bg-transparent text-sm text-[#111C2D] placeholder:text-[#8A7171] focus:outline-none"
              />
            </div>
            {errors.drop && (
              <span className="text-xs text-[#ba1a1a] flex items-center gap-1 mt-0.5">
                <AlertCircle className="w-3 h-3 shrink-0" />
                <span>{errors.drop}</span>
              </span>
            )}
          </div>

          {/* 5. Travel Date */}
          <div className="flex flex-col space-y-1">
            <label className="text-xs sm:text-sm font-bold text-[#111C2D] flex items-center justify-between">
              <span>{t.dateLabel[currentLang]} <span className="text-[#ba1a1a]">*</span></span>
              <span className="text-[11px] text-[#574142] font-normal">(यात्रा तिथि)</span>
            </label>
            <div className={`relative h-12 rounded-xl bg-[#F0F3FF] border ${errors.date ? 'border-[#ba1a1a]' : 'border-[#DEBFBF]/50'} flex items-center px-3 focus-within:border-[#6b011a] focus-within:bg-white transition-all`}>
              <Calendar className="w-4 h-4 text-[#8A7171] shrink-0 mr-2" />
              <input
                type="date"
                value={date}
                min={new Date().toISOString().split('T')[0]}
                onChange={(e) => {
                  setDate(e.target.value);
                  if (errors.date) setErrors({ ...errors, date: undefined });
                }}
                className="w-full bg-transparent text-sm text-[#111C2D] focus:outline-none cursor-pointer"
              />
            </div>
            {errors.date && (
              <span className="text-xs text-[#ba1a1a] flex items-center gap-1 mt-0.5">
                <AlertCircle className="w-3 h-3 shrink-0" />
                <span>{errors.date}</span>
              </span>
            )}
          </div>

          {/* 6. Car Type */}
          <div className="flex flex-col space-y-1">
            <label className="text-xs sm:text-sm font-bold text-[#111C2D] flex items-center justify-between">
              <span>{t.carLabel[currentLang]}</span>
              <span className="text-[11px] text-[#574142] font-normal">(वाहन का प्रकार)</span>
            </label>
            <div className="relative h-12 rounded-xl bg-[#F0F3FF] border border-[#DEBFBF]/50 flex items-center px-3 focus-within:border-[#6b011a] focus-within:bg-white transition-all">
              <Car className="w-4 h-4 text-[#8A7171] shrink-0 mr-2" />
              <select
                value={carType}
                onChange={(e) => setCarType(e.target.value)}
                className="w-full bg-transparent text-sm text-[#111C2D] focus:outline-none cursor-pointer"
              >
                <option value="Swift Dzire (Sedan 4+1)">Swift Dzire (Sedan 4+1)</option>
                <option value="Maruti Ertiga (7-Seater 6+1)">Maruti Ertiga (7-Seater 6+1)</option>
                <option value="Toyota Innova Crysta">Toyota Innova Crysta (6/7 Seater)</option>
                <option value="SUV / Fortuner (VIP)">Toyota Fortuner (VIP SUV)</option>
                <option value="Chevrolet Tavera">Chevrolet Tavera (MUV)</option>
                <option value="Force Urbania (Luxury Van)">Force Urbania (10-15 Seater)</option>
                <option value="Force Tempo Traveller (12-17)">Force Tempo Traveller (12-17 Seater)</option>
                <option value="Other / Multiple Cabs">Other / Multiple Cabs</option>
              </select>
            </div>
          </div>

        </div>

        {/* Submit Button & Disclaimers */}
        <div className="pt-6 flex flex-col items-center gap-3">
          <button
            type="button"
            onClick={handleSubmit}
            className="w-full sm:w-auto min-w-[280px] h-13 px-8 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center gap-2.5 font-bold text-base shadow-lg hover:shadow-xl transition-all active:scale-[0.98] cursor-pointer"
          >
            {/* WhatsApp Icon */}
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M20.52 3.48A11.93 11.93 0 0012.04 0C5.43 0 .07 5.37.07 11.97c0 2.11.55 4.16 1.6 5.97L0 24l6.23-1.63a11.94 11.94 0 005.81 1.5h.01c6.6 0 11.97-5.37 11.97-11.97 0-3.2-1.25-6.21-3.5-8.42zM12.05 21.88h-.01c-1.8 0-3.57-.48-5.11-1.4l-.37-.22-3.79.99 1.01-3.7-.24-.38a9.92 9.92 0 01-1.52-5.2c0-5.48 4.46-9.94 9.95-9.94 2.65 0 5.15 1.03 7.03 2.91 1.88 1.88 2.91 4.38 2.91 7.03 0 5.48-4.46 9.94-9.95 9.94zm5.45-7.44c-.3-.15-1.77-.87-2.04-.97-.28-.1-.48-.15-.68.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.68-1.64-.93-2.25-.24-.59-.49-.51-.68-.52l-.58-.01c-.2 0-.52.07-.8.37-.27.3-1.05 1.03-1.05 2.51s1.08 2.91 1.23 3.11c.15.2 2.12 3.24 5.14 4.54.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" />
            </svg>
            <span>{t.submitBtn[currentLang]}</span>
          </button>

          {/* Popup Blocker Fallback Link */}
          {submittedUrl && (
            <div className="p-3 bg-[#E7EEFF] rounded-xl text-center w-full max-w-md animate-in fade-in">
              <a
                href={submittedUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs sm:text-sm font-bold text-[#6b011a] hover:underline flex items-center justify-center gap-1.5"
              >
                <span>{t.popupFallback[currentLang]}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          )}

          <p className="text-xs text-[#574142] text-center max-w-xl">
            {t.notice[currentLang]}
          </p>
        </div>

      </div>
    </section>
  );
};
