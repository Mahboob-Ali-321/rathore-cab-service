export type Language = 'en' | 'hi';

export interface BusinessConfig {
  name: {
    en: string;
    hi: string;
  };
  shortName: {
    en: string;
    hi: string;
  };
  tagline: {
    en: string;
    hi: string;
  };
  invocation: {
    en: string;
    hi: string;
  };
  phoneDisplay: string;
  phoneRaw: string;
  phoneTel: string;
  whatsappNumber: string;
  address: {
    en: string;
    hi: string;
  };
  googleRating: number;
  reviewCount: number;
  mapsUrl: string;
  websiteCredit: {
    en: string;
    hi: string;
  };
  copyright: {
    en: string;
    hi: string;
  };
}

export interface FleetItem {
  id: string;
  name: {
    en: string;
    hi: string;
  };
  subtitle: {
    en: string;
    hi: string;
  };
  capacity: string;
  acType: {
    en: string;
    hi: string;
  };
  luggage: {
    en: string;
    hi: string;
  };
  ratePerKm: {
    en: string;
    hi: string;
  };
  badge?: {
    en: string;
    hi: string;
  };
  badgeColor?: string;
  description: {
    en: string;
    hi: string;
  };
  image: string;
  whatsappMessage: string;
}

export interface PopularRoute {
  id: string;
  from: {
    en: string;
    hi: string;
  };
  to: {
    en: string;
    hi: string;
  };
  subtext: {
    en: string;
    hi: string;
  };
  distance: string;
  category: {
    en: string;
    hi: string;
  };
  dzireRate: string;
  ertigaRate: string;
  whatsappMessage: string;
}

export interface FareChartItem {
  id: string;
  destination: {
    en: string;
    hi: string;
  };
  dzireRate: string;
  ertigaRate: string;
  distance: string;
  info: {
    en: string;
    hi: string;
  };
  category: 'pilgrimage' | 'city';
}

export interface PilgrimageTour {
  id: string;
  title: {
    en: string;
    hi: string;
  };
  subtitle: {
    en: string;
    hi: string;
  };
  badge: {
    en: string;
    hi: string;
  };
  dzireRate: string;
  ertigaRate: string;
  whatsappMessage: string;
}

export interface WhyChooseItem {
  id: string;
  title: {
    en: string;
    hi: string;
  };
  description: {
    en: string;
    hi: string;
  };
  icon: string;
}

export interface HowToBookStep {
  step: number;
  title: {
    en: string;
    hi: string;
  };
  description: {
    en: string;
    hi: string;
  };
  badge: {
    en: string;
    hi: string;
  };
}

export interface ReviewItem {
  id: string;
  name: string;
  role: {
    en: string;
    hi: string;
  };
  rating: number;
  comment: {
    en: string;
    hi: string;
  };
  initials: string;
}

export interface GalleryPhoto {
  id: string;
  title: {
    en: string;
    hi: string;
  };
  image: string;
}

// Single Source of Truth for Google Maps Location & Reviews URL
export const GOOGLE_MAPS_URL =
  'https://www.google.com/maps/place/Rathore+cab+service+in+indore/@22.6737188,75.7277514,12z/data=!4m10!1m2!2m1!1srathore+cab+service+indore+!3m6!1s0x3962fd4d4474ee77:0x2848d76ab7cd4a29!8m2!3d22.6737188!4d75.8801867!15sChpyYXRob3JlIGNhYiBzZXJ2aWNlIGluZG9yZVocIhpyYXRob3JlIGNhYiBzZXJ2aWNlIGluZG9yZZIBDHRheGlfc2VydmljZZoBRENpOURRVWxSUVVOdlpFTm9kSGxqUmpsdlQyczVkMDVxUWtWaWFtTXdUVmhyZW1ORVdscFNNVGxTVFVad1IxVnVZeEFC4AEA-gEECAAQNg!16s%2Fg%2F11ykysqt34?entry=ttu';

// Single Source of Truth for WhatsApp Destination Number
export const WHATSAPP_NUMBER = '919826611038';

// Global Business Information
export const businessData: BusinessConfig = {
  name: {
    en: 'Rathore Cab Service & Travels',
    hi: 'राठौड़ कैब सर्विस & ट्रैवल्स'
  },
  shortName: {
    en: 'Rathore Cab',
    hi: 'राठौड़ कैब'
  },
  tagline: {
    en: 'आपकी यात्रा, हमारी जिम्मेदारी',
    hi: 'आपकी यात्रा, हमारी जिम्मेदारी'
  },
  invocation: {
    en: '॥ Shree Ganeshay Namah ॥ Jai Shree Mahakal ॥ Indore, MP',
    hi: '॥ श्री गणेशाय नमः ॥ जय श्री महाकाल ॥ इंदौर, म.प्र.'
  },
  phoneDisplay: '086027 52672',
  phoneRaw: '8602752672',
  phoneTel: '+918602752672',
  whatsappNumber: WHATSAPP_NUMBER,
  address: {
    en: '1, Khandwa Naka, Bhavna Nagar, Indore, Madhya Pradesh 452020',
    hi: '1, खंडवा नाका, भावना नगर, इंदौर, मध्य प्रदेश 452020'
  },
  googleRating: 5.0,
  reviewCount: 12,
  mapsUrl: GOOGLE_MAPS_URL,
  websiteCredit: {
    en: 'Website by Mahboob Ali',
    hi: 'वेबसाइट: महबूब अली द्वारा'
  },
  copyright: {
    en: '© Rathore Cab Service & Travels, Indore. All Rights Reserved.',
    hi: '© राठौड़ कैब सर्विस & ट्रैवल्स, इंदौर। सर्वाधिकार सुरक्षित।'
  }
};

// Trust Chips for Hero Section
export const trustChips = [
  {
    icon: 'star',
    value: '5.0 Rating',
    subtext: {
      en: '12+ Google Reviews',
      hi: '12+ गूगल समीक्षाएं'
    }
  },
  {
    icon: 'schedule',
    value: '24/7 Available',
    subtext: {
      en: 'Instant Dispatch',
      hi: 'त्वरित पिकअप'
    }
  },
  {
    icon: 'payments',
    value: 'No Hidden Charges',
    subtext: {
      en: 'Clear & Fixed Billing',
      hi: 'पारदर्शी बिलिंग'
    }
  },
  {
    icon: 'temple_hindu',
    value: 'Pilgrimage Specialist',
    subtext: {
      en: 'Mahakal & Omkareshwar',
      hi: 'महाकाल व ओंकारेश्वर'
    }
  }
];

// Complete Fleet of 7 Vehicle Types
export const fleetData: FleetItem[] = [
  {
    id: 'swift-dzire',
    name: {
      en: 'Swift Dzire (Sedan)',
      hi: 'स्विफ्ट डिजायर (सेडान)'
    },
    subtitle: {
      en: 'Comfortable AC Sedan',
      hi: 'आरामदायक एसी सेडान'
    },
    capacity: '4+1 Seater',
    acType: {
      en: 'Chilled AC',
      hi: 'चिल्ड एसी'
    },
    luggage: {
      en: '2 Large Bags',
      hi: '2 बड़े बैग'
    },
    ratePerKm: {
      en: 'From ₹11/km',
      hi: '₹11/किमी से शुरू'
    },
    badge: {
      en: 'Most Popular',
      hi: 'सबसे लोकप्रिय'
    },
    badgeColor: 'bg-[#6b011a] text-white',
    description: {
      en: 'Ideal for couples, executive airport transfers, and quick pilgrimage runs to Ujjain & Omkareshwar.',
      hi: 'जोड़ों, एयरपोर्ट ट्रांसफर तथा उज्जैन एवं ओंकारेश्वर के त्वरित दर्शन के लिए सर्वोत्तम सेडान।'
    },
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAl1JG-pG5OmsFBcalRY18HPjaCNRthh0vm5RLV6DgYUs7Gg4awsfyrDxKfXpXb8tjh-cjkiaZk9sIrpZ9NCbmWsSaxTKniKttMROPP_2qvqnidd_I4Um8snWn2HZzkd_9DcpivpHk58DKnwr3gEG-BxqNvkQN22KlB9HW6naNjd8BWIQMiJ-aDAIyjS0ZbknkrP0bXz1tqS42b84BwEefdwi2gPF-qm9FWuwu-Gz-alDuMs13-p68',
    whatsappMessage: 'Hello Rathore Cab, I want to book Swift Dzire (Sedan) from Indore'
  },
  {
    id: 'ertiga',
    name: {
      en: 'Maruti Ertiga (7-Seater)',
      hi: 'मारुति अर्टिगा (7-सीटर)'
    },
    subtitle: {
      en: 'Spacious Family MUV',
      hi: 'विशाल पारिवारिक गाड़ी'
    },
    capacity: '6+1 Seater',
    acType: {
      en: 'Dual AC Vents',
      hi: 'डबल एसी वेंट्स'
    },
    luggage: {
      en: '3-4 Bags Boot',
      hi: '3-4 सूटकेस बूट'
    },
    ratePerKm: {
      en: 'From ₹13/km',
      hi: '₹13/किमी से शुरू'
    },
    badge: {
      en: 'Family Favorite',
      hi: 'परिवार की पहली पसंद'
    },
    badgeColor: 'bg-[#fdb73f] text-[#6e4900]',
    description: {
      en: 'Ample legroom for elders and children. Top choice for Mahakal Bhasma Aarti circuits and family tours.',
      hi: 'बुजुर्गों और बच्चों के लिए आरामदायक जगह। महाकाल भस्म आरती और परिवार संग यात्रा हेतु सर्वोत्तम।'
    },
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCdxV2nWZSHufDSCypBVUVq4-QCxoq-Y20SykHFconGprl8q2gAX4mJ9OwpebkbQsgqsfIrtKzs3wgPBMHRHQ1RuFmpIINX0bVs8VMmiDbrTGLngUstRSsj1wSGLzBQ-UobbhIbW5V4iN9wesZvrs8qqGw_be3n1aM4wZ4LWkvn3JSpdyS73VmrLqvOOd11_Jr6QEU3yVmf59YwioweBjnFGogmBLl-mjrWlad06k0TTvMMjsZHZ78Qf1kZU7Cy1a8d',
    whatsappMessage: 'Hello Rathore Cab, I want to book Maruti Ertiga (7-Seater) from Indore'
  },
  {
    id: 'fortuner',
    name: {
      en: 'SUV / Toyota Fortuner',
      hi: 'एसयूवी / टोयोटा फॉर्च्यूनर'
    },
    subtitle: {
      en: 'Premium VIP & Luxury',
      hi: 'प्रीमियम वीआईपी लग्जरी'
    },
    capacity: '6+1 Seater / 4x4',
    acType: {
      en: 'Climate Control',
      hi: 'क्लाइमेट कंट्रोल'
    },
    luggage: {
      en: '4 Bags Boot',
      hi: '4 बड़े बैग'
    },
    ratePerKm: {
      en: 'On Request',
      hi: 'पूछताछ पर'
    },
    badge: {
      en: 'VIP & Luxury',
      hi: 'वीआईपी दर्जा'
    },
    badgeColor: 'bg-[#1a3354] text-white',
    description: {
      en: 'Imposing road presence and utmost plush comfort for VIP guests, weddings, and long highway journeys.',
      hi: 'वीआईपी अतिथियों, शादी-समारोह एवं लंबी सुरक्षित राजमार्ग यात्रा के लिए गरिमामयी गाड़ी।'
    },
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB2DAkRLNQpnzXR9eqylUeGY8xM5ynVcSKc-uP2onBLlLoVIIB6IkttnKIo80hT7uYaY2x2LetrKuaTxEPqn84V69qrkZRmlaLRUz_L2zfErDWE0ZZRfjr-qvdqdI3FG_1u44dbVLCYVlK6ak-3xCjlERvIpxk851v-6A_vyW_GT_z88GNlxjeYe9afbkvoRFOYXhPnxyXg9vtk31XIYa-QNXQgmJLxwkTcYHTesEXB9L7i1gUfJfR9wNKIdrDQR4RC',
    whatsappMessage: 'Hello Rathore Cab, I want to enquire about Toyota Fortuner SUV from Indore'
  },
  {
    id: 'innova-crysta',
    name: {
      en: 'Toyota Innova Crysta',
      hi: 'टोयोटा इनोवा क्रिस्टा'
    },
    subtitle: {
      en: 'King of Highway Comfort',
      hi: 'राजमार्ग का आरामदायक राजा'
    },
    capacity: '6/7 Seater',
    acType: {
      en: 'Dual AC Vents',
      hi: 'डुअल क्लाइमेट एसी'
    },
    luggage: {
      en: '5 Bags Boot',
      hi: '5 बड़े बैग'
    },
    ratePerKm: {
      en: 'From ₹16/km',
      hi: '₹16/किमी से शुरू'
    },
    badge: {
      en: 'Long-Route King',
      hi: 'लंबी दूरी का राजा'
    },
    badgeColor: 'bg-[#6b011a] text-white',
    description: {
      en: 'Legendary long-distance touring comfort for Ayodhya, Mathura, Dwarka, and Pachmarhi tours.',
      hi: 'अयोध्या, मथुरा, द्वारका और पचमढ़ी जैसे लंबे तीर्थ दर्शन के लिए बेजोड़ आरामदायक कैप्टन सीटें।'
    },
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCz44BjV4xN8iRhUkohPZrWVRusHyCrmkpzSYMjX4UkLDalmhnH33-LNZw8_go_fhbpfUEE2w5hfwfE8tvLZG9XEfgEJ0pWYFIXNzcFgZX0rCph3Ram-YmQGJhTzbFH0enggrORrC0XlRyLMxtoxPldH88qYUgtT4htWGp33mJSwVpmXymR6xr44qCY1AYQS6moStaxGizfYxqNeIeCqp78LbSYHj7jMULlRaivKtEjOmwYW-GaW0U',
    whatsappMessage: 'Hello Rathore Cab, I want to book Toyota Innova Crysta from Indore'
  },
  {
    id: 'tavera',
    name: {
      en: 'Chevrolet Tavera (MUV)',
      hi: 'शेवरले टवेरा (MUV)'
    },
    subtitle: {
      en: 'Robust Group Carrier',
      hi: 'मजबूत एवं किफायती ग्रुप गाड़ी'
    },
    capacity: '7-9 Seater',
    acType: {
      en: 'Full Cabin AC',
      hi: 'फुल केबिन एसी'
    },
    luggage: {
      en: 'Rooftop Carrier',
      hi: 'छत पर बड़ा कैरियर'
    },
    ratePerKm: {
      en: 'From ₹14/km',
      hi: '₹14/किमी से शुरू'
    },
    badge: {
      en: 'Budget Group',
      hi: 'बजट ग्रुप'
    },
    badgeColor: 'bg-[#324a6c] text-white',
    description: {
      en: 'Sturdy, rugged performance on rural routes, temple ghats, and extended group outstation travel.',
      hi: 'कठिन ग्रामीण रास्तों, पहाड़ी घाटों और बड़े परिवारों के लिए मजबूत व किफायती वाहन।'
    },
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDasN44J8RRTR79OF55xxRsHZ7YrEyhtYLqVEYPX9vyeJRo7QrEK0wgE65X1QCnhvu6P_okJxB_LVuAlsU_hKLrUoQeMZjlqTSYvBnwH6ln5-D9iiTwYWrUCqebgRjLC2poy8C8wWYHBj9ltFIlj73d2z_dsYFEw_75R71jalY5CNjlIUZz94-0js9NrkbTj1PtNa1lcVDgr0uF_QijnBEjBKhVC7-h4xHlxtaU_z0ox3BLEigqBN8Q5-6T4RsesV80',
    whatsappMessage: 'Hello Rathore Cab, I want to book Chevrolet Tavera from Indore'
  },
  {
    id: 'urbania',
    name: {
      en: 'Force Urbania (Luxury Van)',
      hi: 'फोर्स अर्बनिया (लग्जरी वैन)'
    },
    subtitle: {
      en: 'European-Style Luxury Van',
      hi: 'यूरोपियन स्टाइल लग्जरी वैन'
    },
    capacity: '10-15 Seater',
    acType: {
      en: 'Individual AC Louvers',
      hi: 'प्रत्येक सीट पर एसी'
    },
    luggage: {
      en: 'Dedicated Boot',
      hi: 'विशाल लगेज स्पेस'
    },
    ratePerKm: {
      en: 'Custom Tour',
      hi: 'कस्टम टूर पैकेज'
    },
    badge: {
      en: 'Ultra Luxury',
      hi: 'अल्ट्रा लग्जरी'
    },
    badgeColor: 'bg-[#fdb73f] text-[#6e4900]',
    description: {
      en: 'State-of-the-art panoramic windows and whisper-quiet cabin for grand family pilgrimages.',
      hi: 'पैनोरमिक खिड़कियां, पुशबैक रीक्लाइनिंग सीटें व शांत केबिन — भव्य पारिवारिक यात्रा का अनुभव।'
    },
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBUqXliFZ8oBv5C06MahFySPa36Cl9ko5i_zB-_VZ41_pKSWXVoc4TGHHd1SBKrex3SWFeV-9rbaeBhHrglB9UwPM70kh0bVzhbau3r1zXh9Qy6R-35dOS1jWET_j2EW504IagP13y1wdykxZGxOzyJpcqzxYhr5p9DmT3E9gj817YyA7SxS5mj3gVbc1BFsH5D6NFxOT5ZFRWO7b6MjQ1iGD5WxtFisAiT2PYkqai7Ubj_YBf6Yk4',
    whatsappMessage: 'Hello Rathore Cab, I want to book Force Urbania Luxury Van from Indore'
  },
  {
    id: 'tempo-traveller',
    name: {
      en: 'Force Tempo Traveller',
      hi: 'फोर्स टेम्पो ट्रैवलर'
    },
    subtitle: {
      en: 'Group Pilgrimage & Outstation',
      hi: 'ग्रुप तीर्थ यात्रा एवं आउटस्टेशन'
    },
    capacity: '12-17 Seater',
    acType: {
      en: 'Powerful Roof AC',
      hi: 'रूफ माउंटेड पावरफुल एसी'
    },
    luggage: {
      en: 'Massive Carrier',
      hi: 'छत पर बड़ा लगेज कैरियर'
    },
    ratePerKm: {
      en: 'From ₹22/km',
      hi: '₹22/किमी से शुरू'
    },
    badge: {
      en: 'Group Yatra Pro',
      hi: 'ग्रुप यात्रा प्रो'
    },
    badgeColor: 'bg-[#1a3354] text-white',
    description: {
      en: 'Keep the whole bhajan mandali or extended family together with ample roof carrier space.',
      hi: 'पूरी भजन मंडली या बड़े परिवार के साथ एक ही वाहन में सहज दर्शन यात्रा।'
    },
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCFCFvNd5foB25EClPaEyEMnxQPwuPr8rDnmiIixQ6s1ndhsqexQy8-ugcP9ZUSjFTsGbBFaDVANQMgBO7ri5gJc_A3HOT63ys6KTZqMiHeLUs-eKMSWAoLJS7U4phcCn2enG_os64p3YCq0MlLO6Snzxxzw1-0JM6PXZHNxM8GlY8SwGH5jHgopDJ9cKGlasUDG4Z-NsattVMhcsg4KTVD1S-6XjRAfrP1RI2FFdPYDElWUzymcOg',
    whatsappMessage: 'Hello Rathore Cab, I want to book Force Tempo Traveller from Indore'
  }
];

// Popular Indore Routes (Quick-Pick Cards)
export const popularRoutes: PopularRoute[] = [
  {
    id: 'indore-omkareshwar',
    from: { en: 'Indore', hi: 'इंदौर' },
    to: { en: 'Omkareshwar', hi: 'ओंकारेश्वर' },
    subtext: {
      en: 'Mamleshwar Jyotirlinga, Narmada Snan & Parikrama',
      hi: 'ममलेश्वर ज्योतिर्लिंग, नर्मदा स्नान व परिक्रमा'
    },
    distance: '~80 km',
    category: { en: 'Jyotirlinga Darshan', hi: 'ज्योतिर्लिंग दर्शन' },
    dzireRate: '₹2,750',
    ertigaRate: '₹3,250',
    whatsappMessage: 'Hello Rathore Cab, I want to book Indore to Omkareshwar cab'
  },
  {
    id: 'indore-ujjain',
    from: { en: 'Indore', hi: 'इंदौर' },
    to: { en: 'Ujjain Mahakal', hi: 'उज्जैन महाकाल' },
    subtext: {
      en: 'Mahakaleshwar, Kaal Bhairav, Harsiddhi & Mangalnath',
      hi: 'महाकालेश्वर, काल भैरव, हरसिद्धि व मंगलनाथ'
    },
    distance: '~55 km',
    category: { en: 'Mahakal Corridor', hi: 'महाकाल कॉरिडोर' },
    dzireRate: '₹2,500',
    ertigaRate: '₹3,000',
    whatsappMessage: 'Hello Rathore Cab, I want to book Indore to Ujjain Mahakal cab'
  },
  {
    id: 'indore-bhopal',
    from: { en: 'Indore', hi: 'इंदौर' },
    to: { en: 'Bhopal', hi: 'भोपाल' },
    subtext: {
      en: 'Capital City, Airport Transfer & Lake View Tour',
      hi: 'राजधानी एक्सप्रेस, एयरपोर्ट ड्रॉप व वीआईपी यात्रा'
    },
    distance: '~190 km',
    category: { en: 'Capital Express', hi: 'कैपिटल एक्सप्रेस' },
    dzireRate: '₹5,000',
    ertigaRate: '₹5,500',
    whatsappMessage: 'Hello Rathore Cab, I want to book Indore to Bhopal cab'
  },
  {
    id: 'indore-nalkheda',
    from: { en: 'Indore', hi: 'इंदौर' },
    to: { en: 'Nalkheda', hi: 'नलखेड़ा' },
    subtext: {
      en: 'Maa Baglamukhi Shaktipeeth Havan & Special Anushthan',
      hi: 'मां बगलामुखी शक्तिपीठ हवन व विशेष अनुष्ठान'
    },
    distance: '~150 km',
    category: { en: 'Siddha Peeth', hi: 'सिद्ध पीठ' },
    dzireRate: '₹3,800',
    ertigaRate: '₹4,500',
    whatsappMessage: 'Hello Rathore Cab, I want to book Indore to Nalkheda Baglamukhi cab'
  },
  {
    id: 'indore-mandu',
    from: { en: 'Indore', hi: 'इंदौर' },
    to: { en: 'Mandu', hi: 'मांडू' },
    subtext: {
      en: 'Jahaz Mahal, Hindola Mahal & Rani Roopmati Pavilion',
      hi: 'जहाज महल, हिंडोला महल व रानी रूपमती महल'
    },
    distance: '~95 km',
    category: { en: 'Historic Fortress', hi: 'ऐतिहासिक किला' },
    dzireRate: '₹3,000',
    ertigaRate: '₹3,500',
    whatsappMessage: 'Hello Rathore Cab, I want to book Indore to Mandu day tour cab'
  },
  {
    id: 'indore-maheshwar',
    from: { en: 'Indore', hi: 'इंदौर' },
    to: { en: 'Maheshwar', hi: 'महेश्वर' },
    subtext: {
      en: 'Ahilya Fort, Narmada Ghat Evening Aarti & Handloom',
      hi: 'अहिल्या किला, नर्मदा घाट शाम की आरती व हथकरघा'
    },
    distance: '~90 km',
    category: { en: 'Ahilya Capital', hi: 'अहिल्या राजधानी' },
    dzireRate: '₹2,500',
    ertigaRate: '₹3,250',
    whatsappMessage: 'Hello Rathore Cab, I want to book Indore to Maheshwar cab'
  }
];

// Full Fare Chart Table (from Indore)
export const fullFareChart: FareChartItem[] = [
  {
    id: 'ujjain',
    destination: { en: 'Ujjain (उज्जैन)', hi: 'उज्जैन (समग्र दर्शन)' },
    dzireRate: '₹2,500',
    ertigaRate: '₹3,000',
    distance: '55 km',
    info: { en: 'Same Day Mahakal Tour', hi: 'एकदिवसीय महाकाल दर्शन' },
    category: 'pilgrimage'
  },
  {
    id: 'dewas',
    destination: { en: 'Dewas (देवास)', hi: 'देवास (टेकरी दर्शन)' },
    dzireRate: '₹2,200',
    ertigaRate: '₹2,700',
    distance: '38 km',
    info: { en: 'Chamunda & Tulja Mata', hi: 'चामुंडा व तुलजा माता' },
    category: 'pilgrimage'
  },
  {
    id: 'baglamukhi',
    destination: { en: 'Baglamukhi (बगलामुखी)', hi: 'बगलामुखी (नलखेड़ा)' },
    dzireRate: '₹3,800',
    ertigaRate: '₹4,500',
    distance: '145 km',
    info: { en: 'Maa Baglamukhi Pitambara', hi: 'मां बगलामुखी पीताम्बरा' },
    category: 'pilgrimage'
  },
  {
    id: 'sehore',
    destination: { en: 'Sehore (सीहोर)', hi: 'सीहोर (कुबरेश्वर धाम)' },
    dzireRate: '₹4,000',
    ertigaRate: '₹4,500',
    distance: '155 km',
    info: { en: 'Kubereshwar Dham', hi: 'कुबेरेश्वर धाम दर्शन' },
    category: 'city'
  },
  {
    id: 'bhopal',
    destination: { en: 'Bhopal (भोपाल)', hi: 'भोपाल (राजधानी)' },
    dzireRate: '₹5,000',
    ertigaRate: '₹5,500',
    distance: '195 km',
    info: { en: 'Capital City Express', hi: 'राजधानी शहर एवं एयरपोर्ट' },
    category: 'city'
  },
  {
    id: 'bhojpur',
    destination: { en: 'Bhojpur (भोजपुर)', hi: 'भोजपुर (शिव मंदिर)' },
    dzireRate: '₹7,000',
    ertigaRate: '₹9,000',
    distance: '225 km',
    info: { en: 'Lord Shiva Mammoth Temple', hi: 'विशाल शिवलिंग दर्शन' },
    category: 'pilgrimage'
  },
  {
    id: 'shujalpur',
    destination: { en: 'Shujalpur (शुजालपुर)', hi: 'शुजालपुर' },
    dzireRate: '₹3,500',
    ertigaRate: '₹4,200',
    distance: '130 km',
    info: { en: 'Direct Express Highway', hi: 'सीधा एक्सप्रेसवे मार्ग' },
    category: 'city'
  },
  {
    id: 'salkanpur',
    destination: { en: 'Salkanpur (सलकनपुर)', hi: 'सलकनपुर (विजयासन धाम)' },
    dzireRate: '₹4,700',
    ertigaRate: '₹5,500',
    distance: '210 km',
    info: { en: 'Vijayasen Dham Hill Temple', hi: 'पहाड़ी मंदिर विजयासन देवी' },
    category: 'pilgrimage'
  },
  {
    id: 'omkareshwar',
    destination: { en: 'Omkareshwar (ओंकारेश्वर)', hi: 'ओंकारेश्वर (ज्योतिर्लिंग)' },
    dzireRate: '₹2,750',
    ertigaRate: '₹3,250',
    distance: '80 km',
    info: { en: 'Jyotirlinga & Narmada Snan', hi: 'ज्योतिर्लिंग व नर्मदा स्नान' },
    category: 'pilgrimage'
  },
  {
    id: 'maheshwar',
    destination: { en: 'Maheshwar (महेश्वर)', hi: 'महेश्वर (अहिल्या नगरी)' },
    dzireRate: '₹2,500',
    ertigaRate: '₹3,250',
    distance: '95 km',
    info: { en: 'Ahilya Fort & Ghat', hi: 'अहिल्या किला व नर्मदा घाट' },
    category: 'pilgrimage'
  },
  {
    id: 'mandu',
    destination: { en: 'Mandu (मांडू)', hi: 'मांडू (ऐतिहासिक धरोहर)' },
    dzireRate: '₹3,000',
    ertigaRate: '₹3,500',
    distance: '98 km',
    info: { en: 'Jahaz Mahal Heritage Circuit', hi: 'जहाज महल एवं रूपमती महल' },
    category: 'city'
  },
  {
    id: 'khandwa',
    destination: { en: 'Khandwa (खंडवा)', hi: 'खंडवा (धूनीवाले दादाजी)' },
    dzireRate: '₹3,000',
    ertigaRate: '₹3,500',
    distance: '130 km',
    info: { en: 'Dada Dhuniwale Ashram', hi: 'दादाजी धूनीवाले आश्रम' },
    category: 'city'
  },
  {
    id: 'burhanpur',
    destination: { en: 'Burhanpur (बुरहानपुर)', hi: 'बुरहानपुर (शाही किला)' },
    dzireRate: '₹4,000',
    ertigaRate: '₹4,500',
    distance: '185 km',
    info: { en: 'Asirgarh Fort & Shahi Qila', hi: 'असीरगढ़ किला व शाही हमाम' },
    category: 'city'
  }
];

// Pilgrimage & Long-Distance Tours
export const pilgrimageTours: PilgrimageTour[] = [
  {
    id: 'ayodhya',
    title: {
      en: 'Ayodhya Dham Yatra',
      hi: 'अयोध्या धाम यात्रा'
    },
    subtitle: {
      en: 'Ram Mandir Darshan, Saryu Aarti & Hanumangarhi',
      hi: 'श्री राम मंदिर दर्शन, सरयू महाआरती व हनुमानगढ़ी'
    },
    badge: {
      en: 'Special Package',
      hi: 'विशेष पैकेज'
    },
    dzireRate: '₹30,000',
    ertigaRate: '₹35,000',
    whatsappMessage: 'Hello Rathore Cab, I want to book Ayodhya Dham Pilgrimage Tour from Indore'
  },
  {
    id: 'khatu-shyam',
    title: {
      en: 'Khatu Shyam Ji & Salasar',
      hi: 'खाटू श्याम जी एवं सालासर बालाजी'
    },
    subtitle: {
      en: 'Holy pilgrimage to हारे का सहारा खाटू श्याम जी & Salasar Balaji',
      hi: 'हारे का सहारा खाटू श्याम जी एवं सालासर बालाजी पावन दर्शन'
    },
    badge: {
      en: 'Rajasthan Circuit',
      hi: 'राजस्थान दर्शन'
    },
    dzireRate: '₹17,500',
    ertigaRate: '₹22,500',
    whatsappMessage: 'Hello Rathore Cab, I want to book Khatu Shyam Ji Tour from Indore'
  },
  {
    id: 'mathura-vrindavan',
    title: {
      en: 'Mathura Vrindavan',
      hi: 'मथुरा वृंदावन धाम'
    },
    subtitle: {
      en: 'Banke Bihari, Prem Mandir, Nidhivan & Govardhan Parikrama',
      hi: 'बांके बिहारी, प्रेम मंदिर, निधिवन व गोवर्धन परिक्रमा'
    },
    badge: {
      en: 'Braj Bhoomi',
      hi: 'ब्रज भूमि'
    },
    dzireRate: '₹20,000',
    ertigaRate: '₹25,500',
    whatsappMessage: 'Hello Rathore Cab, I want to book Mathura Vrindavan Tour from Indore'
  },
  {
    id: 'dwarka',
    title: {
      en: 'Dwarka Ji & Somnath',
      hi: 'द्वारका जी एवं सोमनाथ ज्योतिर्लिंग'
    },
    subtitle: {
      en: 'Dwarkadhish Mandir, Bet Dwarka & Somnath Jyotirlinga',
      hi: 'द्वारकाधीश मंदिर, बेट द्वारका एवं सोमनाथ प्रथम ज्योतिर्लिंग'
    },
    badge: {
      en: 'Char Dham Circuit',
      hi: 'चार धाम सर्किट'
    },
    dzireRate: '₹23,500',
    ertigaRate: '₹27,500',
    whatsappMessage: 'Hello Rathore Cab, I want to book Dwarka Ji & Somnath Tour from Indore'
  },
  {
    id: 'pachmarhi',
    title: {
      en: 'Pachmarhi Hill Station',
      hi: 'पचमढ़ी हिल स्टेशन'
    },
    subtitle: {
      en: 'Queen of Satpura, Bee Falls, Jata Shankar & Dhoopgarh',
      hi: 'सतपुड़ा की रानी, धूपगढ़ सनसेट, बी फॉल्स व जटाशंकर'
    },
    badge: {
      en: 'Hill Station Retreat',
      hi: 'हिल स्टेशन'
    },
    dzireRate: '₹9,000',
    ertigaRate: '₹11,000',
    whatsappMessage: 'Hello Rathore Cab, I want to book Pachmarhi Tour from Indore'
  },
  {
    id: 'sanwariya-seth',
    title: {
      en: 'Sanwariya Seth Mandir',
      hi: 'सांवरिया सेठ मंदिर (मंडफिया)'
    },
    subtitle: {
      en: 'Lord Krishna Miracle Temple, Chittorgarh & Neemuch',
      hi: 'चित्तौड़गढ़ स्थित प्रसिद्ध सांवरिया सेठ पावन दर्शन'
    },
    badge: {
      en: 'Chittorgarh Circuit',
      hi: 'चित्तौड़गढ़'
    },
    dzireRate: '₹8,500',
    ertigaRate: '₹10,500',
    whatsappMessage: 'Hello Rathore Cab, I want to book Sanwariya Seth Tour from Indore'
  },
  {
    id: 'ahmedabad',
    title: {
      en: 'Ahmedabad City & Temple Tour',
      hi: 'अहमदाबाद सिटी एवं दर्शन'
    },
    subtitle: {
      en: 'Akshardham, Sabarmati Ashram, Riverfront & City Express',
      hi: 'अक्षरधाम मंदिर, साबरमती आश्रम एवं रिवरफ्रंट एक्सप्रेस'
    },
    badge: {
      en: 'Gujarat Express',
      hi: 'गुजरात एक्सप्रेस'
    },
    dzireRate: '₹9,500',
    ertigaRate: '₹11,000',
    whatsappMessage: 'Hello Rathore Cab, I want to book Ahmedabad Tour from Indore'
  }
];

// Why Choose Us
export const whyChooseData: WhyChooseItem[] = [
  {
    id: '24x7',
    title: {
      en: '24x7 Service Available',
      hi: '24x7 सेवा उपलब्ध'
    },
    description: {
      en: 'Round-the-clock booking desk, late-night station pickup, and continuous highway roadside support anytime.',
      hi: 'रात के किसी भी समय रेलवे स्टेशन व एयरपोर्ट पिकअप और चौबीसों घंटे राजमार्ग सहायता।'
    },
    icon: 'support_agent'
  },
  {
    id: 'ontime',
    title: {
      en: 'On-Time Pickup Guarantee',
      hi: 'समय पर पिकअप की गारंटी'
    },
    description: {
      en: 'Doorstep pickup across Indore. Our assigned driver arrives 15 minutes before your scheduled departure.',
      hi: 'इंदौर में आपके द्वार पर 15 मिनट पूर्व वाहन उपस्थिति। कभी भी सुबह की ट्रेन या आरती मिस नहीं होगी।'
    },
    icon: 'alarm_on'
  },
  {
    id: 'drivers',
    title: {
      en: 'Experienced & Professional Drivers',
      hi: 'अनुभवी एवं विनम्र चालक'
    },
    description: {
      en: 'Courteous, police-verified highway specialists who know temple darshan routes, ghats, and safe family halts.',
      hi: 'सत्यापित, नशामुक्त व अनुभवी चालक जो मंदिर मार्गों, घाटों और पारिवारिक सुरक्षा का पूरा ध्यान रखते हैं।'
    },
    icon: 'verified_user'
  },
  {
    id: 'no-hidden',
    title: {
      en: 'No Hidden Charges',
      hi: 'कोई छुपा शुल्क नहीं'
    },
    description: {
      en: 'Transparent fixed billing. Toll and parking receipts provided directly without any inflated multipliers.',
      hi: 'पारदर्शी और तयशुदा किराया। टोल और पार्किंग की मूल रसीद के साथ निष्पक्ष और ईमानदार व्यवहार।'
    },
    icon: 'receipt_long'
  }
];

// How to Book Steps
export const howToBookSteps: HowToBookStep[] = [
  {
    step: 1,
    title: {
      en: 'WhatsApp or Call Us',
      hi: 'व्हाट्सएप या कॉल करें'
    },
    description: {
      en: 'Send your travel date, destination (Ujjain, Omkareshwar, Outstation), and preferred car to 086027 52672.',
      hi: 'अपनी यात्रा की तारीख, गंतव्य और मनपसंद गाड़ी 086027 52672 पर व्हाट्सएप या कॉल द्वारा बताएं।'
    },
    badge: {
      en: 'Instant Quote',
      hi: 'तुरंत कोटेशन'
    }
  },
  {
    step: 2,
    title: {
      en: 'Instant Confirmation',
      hi: 'तुरंत किराया व गाड़ी पुष्टि'
    },
    description: {
      en: 'Receive your confirmed transparent fixed quote, vehicle registration, and driver details within 2 minutes.',
      hi: '2 मिनट के भीतर पारदर्शी किराया, गाड़ी का विवरण व चालक का संपर्क नंबर प्राप्त करें।'
    },
    badge: {
      en: 'Zero Cancellation Fee',
      hi: 'शून्य कैंसिलेशन शुल्क'
    }
  },
  {
    step: 3,
    title: {
      en: 'Comfortable Journey',
      hi: 'सुखद एवं सुरक्षित यात्रा'
    },
    description: {
      en: 'Clean, sanitized AC cab arrives at your doorstep on time. Enjoy your trip and pay easily after journey.',
      hi: 'साफ-सुथरी एसी गाड़ी समय पर आपके घर पहुंचेगी। निश्चिंत यात्रा करें और समापन पर भुगतान करें।'
    },
    badge: {
      en: 'Pay After Trip',
      hi: 'यात्रा उपरांत भुगतान'
    }
  }
];

// Customer Reviews (Verbatim from User Prompt)
export const reviewsData: ReviewItem[] = [
  {
    id: 'review-1',
    name: 'Jitendra Chouhan',
    role: {
      en: 'Verified Indore Traveler',
      hi: 'सत्यापित यात्री (इंदौर)'
    },
    rating: 5,
    comment: {
      en: 'Good service 👍',
      hi: 'Good service 👍 (उत्तम सेवा)'
    },
    initials: 'JC'
  },
  {
    id: 'review-2',
    name: 'Gurpreet Singh',
    role: {
      en: 'Ujjain Mahakal Darshan',
      hi: 'उज्जैन महाकाल दर्शन'
    },
    rating: 5,
    comment: {
      en: 'Very nice service',
      hi: 'Very nice service (बहुत बढ़िया सेवा)'
    },
    initials: 'GS'
  },
  {
    id: 'review-3',
    name: 'Sachin Badjatya',
    role: {
      en: 'Outstation Trip to Bhopal',
      hi: 'भोपाल आउटस्टेशन यात्रा'
    },
    rating: 5,
    comment: {
      en: 'Nice and fast service in Indore, soo good 💯',
      hi: 'Nice and fast service in Indore, soo good 💯'
    },
    initials: 'SB'
  },
  {
    id: 'review-4',
    name: 'Durga Rathore',
    role: {
      en: 'Family Pilgrimage',
      hi: 'पारिवारिक तीर्थ यात्रा'
    },
    rating: 5,
    comment: {
      en: 'Rathore cab service very good option, excellent service',
      hi: 'Rathore cab service very good option, excellent service'
    },
    initials: 'DR'
  },
  {
    id: 'review-5',
    name: 'Santosh Jadhav',
    role: {
      en: 'Airport & Outstation Ride',
      hi: 'एयरपोर्ट व आउटस्टेशन यात्रा'
    },
    rating: 5,
    comment: {
      en: 'Best services, Rathore cab services',
      hi: 'Best services, Rathore cab services (सर्वश्रेष्ठ सेवा)'
    },
    initials: 'SJ'
  }
];

// Real Fleet Photos for Gallery
export const galleryPhotos: GalleryPhoto[] = [
  {
    id: 'photo-1',
    title: {
      en: 'Indore Fleet Night Standby',
      hi: 'इंदौर फ्लीट नाइट स्टैंडबाय'
    },
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDasN44J8RRTR79OF55xxRsHZ7YrEyhtYLqVEYPX9vyeJRo7QrEK0wgE65X1QCnhvu6P_okJxB_LVuAlsU_hKLrUoQeMZjlqTSYvBnwH6ln5-D9iiTwYWrUCqebgRjLC2poy8C8wWYHBj9ltFIlj73d2z_dsYFEw_75R71jalY5CNjlIUZz94-0js9NrkbTj1PtNa1lcVDgr0uF_QijnBEjBKhVC7-h4xHlxtaU_z0ox3BLEigqBN8Q5-6T4RsesV80'
  },
  {
    id: 'photo-2',
    title: {
      en: 'Temple Darshan Drop (Ertiga)',
      hi: 'मंदिर दर्शन ड्रॉप (अर्टिगा)'
    },
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCdxV2nWZSHufDSCypBVUVq4-QCxoq-Y20SykHFconGprl8q2gAX4mJ9OwpebkbQsgqsfIrtKzs3wgPBMHRHQ1RuFmpIINX0bVs8VMmiDbrTGLngUstRSsj1wSGLzBQ-UobbhIbW5V4iN9wesZvrs8qqGw_be3n1aM4wZ4LWkvn3JSpdyS73VmrLqvOOd11_Jr6QEU3yVmf59YwioweBjnFGogmBLl-mjrWlad06k0TTvMMjsZHZ78Qf1kZU7Cy1a8d'
  },
  {
    id: 'photo-3',
    title: {
      en: 'Chauffeur Driven Fortuner VIP',
      hi: 'वीआईपी टोयोटा फॉर्च्यूनर'
    },
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB2DAkRLNQpnzXR9eqylUeGY8xM5ynVcSKc-uP2onBLlLoVIIB6IkttnKIo80hT7uYaY2x2LetrKuaTxEPqn84V69qrkZRmlaLRUz_L2zfErDWE0ZZRfjr-qvdqdI3FG_1u44dbVLCYVlK6ak-3xCjlERvIpxk851v-6A_vyW_GT_z88GNlxjeYe9afbkvoRFOYXhPnxyXg9vtk31XIYa-QNXQgmJLxwkTcYHTesEXB9L7i1gUfJfR9wNKIdrDQR4RC'
  },
  {
    id: 'photo-4',
    title: {
      en: 'Swift Dzire AC Sedan',
      hi: 'स्विफ्ट डिजायर एसी सेडान'
    },
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAl1JG-pG5OmsFBcalRY18HPjaCNRthh0vm5RLV6DgYUs7Gg4awsfyrDxKfXpXb8tjh-cjkiaZk9sIrpZ9NCbmWsSaxTKniKttMROPP_2qvqnidd_I4Um8snWn2HZzkd_9DcpivpHk58DKnwr3gEG-BxqNvkQN22KlB9HW6naNjd8BWIQMiJ-aDAIyjS0ZbknkrP0bXz1tqS42b84BwEefdwi2gPF-qm9FWuwu-Gz-alDuMs13-p68'
  },
  {
    id: 'photo-5',
    title: {
      en: 'Force Urbania Luxury Van',
      hi: 'फोर्स अर्बनिया लग्जरी वैन'
    },
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBUqXliFZ8oBv5C06MahFySPa36Cl9ko5i_zB-_VZ41_pKSWXVoc4TGHHd1SBKrex3SWFeV-9rbaeBhHrglB9UwPM70kh0bVzhbau3r1zXh9Qy6R-35dOS1jWET_j2EW504IagP13y1wdykxZGxOzyJpcqzxYhr5p9DmT3E9gj817YyA7SxS5mj3gVbc1BFsH5D6NFxOT5ZFRWO7b6MjQ1iGD5WxtFisAiT2PYkqai7Ubj_YBf6Yk4'
  },
  {
    id: 'photo-6',
    title: {
      en: 'Tempo Traveller Group Yatra',
      hi: 'टेम्पो ट्रैवलर ग्रुप यात्रा'
    },
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCFCFvNd5foB25EClPaEyEMnxQPwuPr8rDnmiIixQ6s1ndhsqexQy8-ugcP9ZUSjFTsGbBFaDVANQMgBO7ri5gJc_A3HOT63ys6KTZqMiHeLUs-eKMSWAoLJS7U4phcCn2enG_os64p3YCq0MlLO6Snzxxzw1-0JM6PXZHNxM8GlY8SwGH5jHgopDJ9cKGlasUDG4Z-NsattVMhcsg4KTVD1S-6XjRAfrP1RI2FFdPYDElWUzymcOg'
  }
];

// Complete UI Translations Dictionary for English and Proper Hindi (Devanagari)
export const uiTranslations = {
  nav: {
    home: { en: 'Home', hi: 'होम' },
    fleet: { en: 'Fleet', hi: 'गाड़ियाँ' },
    routes: { en: 'Popular Routes', hi: 'लोकप्रिय रूट्स' },
    fareChart: { en: 'Fare Chart', hi: 'किराया चार्ट' },
    pilgrimage: { en: 'Pilgrimage Tours', hi: 'तीर्थ यात्रा' },
    whyUs: { en: 'Why Us', hi: 'हमें क्यों चुनें' },
    howToBook: { en: 'How to Book', hi: 'बुकिंग विधि' },
    reviews: { en: 'Reviews', hi: 'समीक्षाएं' },
    gallery: { en: 'Gallery', hi: 'गैलरी' },
    contact: { en: 'Contact', hi: 'संपर्क' },
    bookNow: { en: 'Book Now', hi: 'अभी बुक करें' }
  },
  hero: {
    badge: {
      en: 'Govt. Approved Indore Taxi',
      hi: 'अधिकृत इंदौर टैक्सी सेवा'
    },
    headline: {
      en: "Indore's Trusted Cab & Travel Service for Pilgrimage and Outstation Trips",
      hi: 'तीर्थ यात्रा और आउटस्टेशन ट्रिप्स के लिए इंदौर की भरोसेमंद कैब सर्विस'
    },
    subline: {
      en: 'Swift Dzire, Ertiga, Innova and more — safe, on-time, and budget-friendly travel from Indore to anywhere in India.',
      hi: 'स्विफ्ट डिजायर, अर्टिगा, इनोवा और अन्य — इंदौर से पूरे भारत में सुरक्षित, समय पर और किफायती यात्रा।'
    },
    btnWhatsapp: {
      en: 'Book on WhatsApp',
      hi: 'व्हाट्सएप पर बुक करें'
    },
    btnCall: {
      en: 'Call Now (086027 52672)',
      hi: 'कॉल करें (086027 52672)'
    },
    driverStandby: {
      en: 'Drivers on standby at Khandwa Naka, Station & Airport',
      hi: 'खंडवा नाका, रेलवे स्टेशन एवं एयरपोर्ट पर गाड़ियां उपलब्ध'
    }
  },
  bookingForm: {
    title: {
      en: 'Quick Booking Enquiry',
      hi: 'त्वरित बुकिंग पूछताछ'
    },
    subtitle: {
      en: 'Direct quote in 2 minutes on WhatsApp with guaranteed availability.',
      hi: '2 मिनट में व्हाट्सएप पर तुरंत किराया और गाड़ी की पुष्टि पाएं।'
    },
    fastResponse: {
      en: 'Fast response under 2 mins',
      hi: '2 मिनट में त्वरित उत्तर'
    },
    nameLabel: {
      en: 'Full Name',
      hi: 'पूरा नाम'
    },
    namePlaceholder: {
      en: 'e.g. Ramesh Sharma',
      hi: 'उदा. रमेश शर्मा'
    },
    phoneLabel: {
      en: 'Mobile Number',
      hi: 'मोबाइल नंबर'
    },
    phonePlaceholder: {
      en: '10-digit number (e.g. 9876543210)',
      hi: '10 अंकों का नंबर (उदा. 9876543210)'
    },
    pickupLabel: {
      en: 'Pickup Location',
      hi: 'पिकअप स्थान'
    },
    pickupDefault: {
      en: 'Indore',
      hi: 'इंदौर'
    },
    pickupPlaceholder: {
      en: 'Indore (Railway/Airport/Home)',
      hi: 'इंदौर (स्टेशन / एयरपोर्ट / घर)'
    },
    dropLabel: {
      en: 'Drop Destination',
      hi: 'ड्रॉप स्थान (गंतव्य)'
    },
    dropPlaceholder: {
      en: 'e.g. Ujjain / Omkareshwar / Bhopal',
      hi: 'उदा. उज्जैन / ओंकारेश्वर / भोपाल'
    },
    dateLabel: {
      en: 'Travel Date',
      hi: 'यात्रा की तारीख'
    },
    carLabel: {
      en: 'Car Type',
      hi: 'गाड़ी का प्रकार'
    },
    submitBtn: {
      en: 'Send Enquiry on WhatsApp',
      hi: 'व्हाट्सएप पर पूछताछ भेजें'
    },
    notice: {
      en: 'Exact fare and availability will be confirmed on WhatsApp. Toll and parking charged separately.',
      hi: 'सटीक किराया और उपलब्धता व्हाट्सएप पर पुष्ट की जाएगी। टोल एवं पार्किंग शुल्क अलग से देय होगा।'
    },
    popupFallback: {
      en: 'If WhatsApp did not open automatically, tap here to send message',
      hi: 'यदि व्हाट्सएप अपने आप नहीं खुला, तो संदेश भेजने के लिए यहाँ टैप करें'
    },
    errors: {
      nameRequired: {
        en: 'Please enter your full name.',
        hi: 'कृपया अपना पूरा नाम दर्ज करें।'
      },
      phoneInvalid: {
        en: 'Mobile number must be exactly 10 digits.',
        hi: 'मोबाइल नंबर ठीक 10 अंकों का होना आवश्यक है।'
      },
      dropRequired: {
        en: 'Please enter your drop location or destination.',
        hi: 'कृपया अपना ड्रॉप स्थान या गंतव्य दर्ज करें।'
      },
      dateInvalid: {
        en: 'Travel date cannot be in the past.',
        hi: 'यात्रा की तारीख पिछली नहीं हो सकती।'
      }
    }
  },
  fleet: {
    sectionTag: {
      en: 'Clean & Sanitized Vehicles',
      hi: 'साफ-सुथरी एवं सैनिटाइज्ड गाड़ियां'
    },
    title: {
      en: 'Our Well-Maintained Commercial Fleet',
      hi: 'हमारी आरामदायक एवं सुरक्षित गाड़ियां'
    },
    subtitle: {
      en: 'From budget city commutes to grand 7-seater pilgrimage trips and group travellers.',
      hi: 'बजट यात्राओं से लेकर परिवार के तीर्थ दर्शन और समूह टूर के लिए संपूर्ण बेड़ा।'
    },
    bookBtnPrefix: {
      en: 'Book',
      hi: 'बुक करें'
    }
  },
  routes: {
    sectionTag: {
      en: 'Quick Pick Trips',
      hi: 'लोकप्रिय यात्रा मार्ग'
    },
    title: {
      en: 'Popular Indore Routes',
      hi: 'इंदौर से लोकप्रिय रूट्स'
    },
    subtitle: {
      en: 'Fixed transparent pricing for same-day darshan & city drops from Indore.',
      hi: 'इंदौर से एकदिवसीय दर्शन और आउटस्टेशन के लिए स्पष्ट एवं निश्चित किराया।'
    },
    bookBtn: {
      en: 'Book This Route',
      hi: 'यह रूट बुक करें'
    }
  },
  fareChart: {
    sectionTag: {
      en: 'Transparent Pricing',
      hi: 'पारदर्शी किराया सूची'
    },
    title: {
      en: 'Full Fare Chart (From Indore)',
      hi: 'संपूर्ण किराया चार्ट (इंदौर से)'
    },
    subtitle: {
      en: 'Guaranteed transparent fares. No hidden charges or unexpected surges.',
      hi: 'बिना किसी छिपे शुल्क के प्रामाणिक और निश्चित किराया।'
    },
    filterAll: {
      en: 'All Destinations',
      hi: 'सभी गंतव्य'
    },
    filterPilgrimage: {
      en: 'Pilgrimage / Religious',
      hi: 'तीर्थ एवं धार्मिक'
    },
    filterCity: {
      en: 'City / Outstation',
      hi: 'शहर एवं आउटस्टेशन'
    },
    thDestination: {
      en: 'Destination',
      hi: 'गंतव्य'
    },
    thDzire: {
      en: 'Swift Dzire (Sedan)',
      hi: 'स्विफ्ट डिजायर (सेडान)'
    },
    thErtiga: {
      en: 'Ertiga (7-Seater)',
      hi: 'अर्टिगा (7-सीटर)'
    },
    thDistance: {
      en: 'Distance & Info',
      hi: 'दूरी एवं विवरण'
    },
    thAction: {
      en: 'Book Cab',
      hi: 'बुकिंग'
    },
    tollNotice: {
      en: 'Toll and parking charges are extra, to be paid by the passenger.',
      hi: 'टोल एवं पार्किंग शुल्क अलग से देय होगा, जिसका भुगतान यात्री द्वारा किया जाएगा।'
    }
  },
  pilgrimage: {
    sectionTag: {
      en: 'Sacred India Darshan',
      hi: 'पवित्र भारत तीर्थ दर्शन'
    },
    title: {
      en: 'Pilgrimage & Long-Distance Tours',
      hi: 'तीर्थ यात्रा एवं लंबी दूरी के टूर पैकेज'
    },
    subtitle: {
      en: 'Specialized packages for holy dhams, family retreats & multi-day outstation circuits.',
      hi: 'चार धाम, राम मंदिर, खाटू श्याम और पचमढ़ी के लिए पूर्ण समर्पित वाहन एवं सारथी।'
    },
    bookBtn: {
      en: 'Book Tour on WhatsApp',
      hi: 'व्हाट्सएप पर टूर बुक करें'
    },
    customCardTitle: {
      en: 'Need a Custom Pilgrimage Itinerary?',
      hi: 'क्या आपको कस्टमाइज्ड यात्रा प्लान चाहिए?'
    },
    customCardText: {
      en: 'We plan tailored multi-city circuits with temple timings, elder-friendly pacing, and clean hotel halts.',
      hi: 'मंदिर दर्शन समय, बुजुर्गों की सुविधा व विश्राम अनुसार आपके बजट में विशेष टूर प्लान।'
    },
    customCardBtn: {
      en: 'Custom Itinerary Help',
      hi: 'विशेष टूर व्हाट्सएप करें'
    }
  },
  whyUs: {
    sectionTag: {
      en: 'The Rathore Guarantee',
      hi: 'राठौड़ कैब की गारंटी'
    },
    title: {
      en: 'Why Choose Rathore Travels?',
      hi: 'राठौड़ ट्रैवल्स ही क्यों चुनें?'
    },
    subtitle: {
      en: 'Reliability, safety, and respect that every family deserves while traveling.',
      hi: 'यात्रा में हर परिवार को मिलने वाली सच्ची सुरक्षा, सम्मान और भरोसा।'
    }
  },
  howToBook: {
    sectionTag: {
      en: 'Seamless Process',
      hi: 'आसान बुकिंग प्रक्रिया'
    },
    title: {
      en: 'How to Book in 3 Steps',
      hi: 'बुकिंग के 3 सरल चरण'
    },
    subtitle: {
      en: 'Fast booking without tedious app signups or prepayment mandates.',
      hi: 'बिना किसी लंबे फॉर्म या ऐप डाउनलोड के सीधी और पारदर्शी बुकिंग।'
    }
  },
  reviews: {
    sectionTag: {
      en: 'Google Verified',
      hi: 'गूगल द्वारा सत्यापित'
    },
    title: {
      en: 'What Our Customers Say',
      hi: 'हमारे यात्रियों के अनुभव'
    },
    subtitle: {
      en: 'Authentic Google reviews from families, pilgrims, and frequent outstation travelers.',
      hi: 'गूगल पर ग्राहकों द्वारा दी गई वास्तविक समीक्षाएं एवं संतुष्टि।'
    },
    seeAllLink: {
      en: 'See all 12 reviews on Google Maps',
      hi: 'गूगल मैप्स पर सभी 12 समीक्षाएं देखें'
    }
  },
  gallery: {
    sectionTag: {
      en: 'Real Fleet Photos',
      hi: 'वास्तविक फोटो'
    },
    title: {
      en: 'Real Fleet & Journey Moments',
      hi: 'हमारी गाड़ियां एवं सफर के पल'
    },
    subtitle: {
      en: 'What you see is what you travel in. No surprises on arrival.',
      hi: 'जो आप देख रहे हैं, वही स्वच्छ और भरोसेमंद गाड़ी आपके द्वार पर आएगी।'
    }
  },
  contact: {
    sectionTag: {
      en: '24/7 Desk',
      hi: '24 घंटे सहायता'
    },
    title: {
      en: 'Contact & Office Location',
      hi: 'संपर्क एवं कार्यालय'
    },
    subtitle: {
      en: 'Visit our Khandwa Naka office or reach our dispatch desk on phone anytime.',
      hi: 'खंडवा नाका कार्यालय पर पधारें या कभी भी सीधे फोन पर संपर्क करें।'
    },
    addressTitle: {
      en: 'Head Office Address:',
      hi: 'कार्यालय का पता:'
    },
    phoneTitle: {
      en: '24x7 Direct Helpline:',
      hi: '24 घंटे सीधी हेल्पलाइन:'
    },
    callBtn: {
      en: 'Call Now (086027 52672)',
      hi: 'कॉल करें (086027 52672)'
    },
    whatsappBtn: {
      en: 'WhatsApp Chat',
      hi: 'व्हाट्सएप चैट'
    },
    directionsBtn: {
      en: 'Get Directions on Map',
      hi: 'गूगल मैप्स पर दिशा-निर्देश'
    }
  },
  sticky: {
    callNow: {
      en: 'Call Now',
      hi: 'कॉल करें'
    },
    whatsapp: {
      en: 'Book on WhatsApp',
      hi: 'व्हाट्सएप पर बुक'
    }
  }
};

// Helper function to build WhatsApp booking URL
export function createWhatsAppBookingUrl(data: {
  name?: string;
  phone?: string;
  pickup?: string;
  drop?: string;
  date?: string;
  car?: string;
  customMessage?: string;
}): string {
  if (data.customMessage) {
    return `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(data.customMessage)}`;
  }

  const name = data.name || 'Customer';
  const phone = data.phone || 'Not provided';
  const pickup = data.pickup || 'Indore';
  const drop = data.drop || 'Not specified';
  const date = data.date || 'Immediate / Upcoming';
  const car = data.car || 'Swift Dzire';

  const message = [
    `*New Cab Booking Enquiry - Rathore Cab Service & Travels*`,
    `• Name: ${name}`,
    `• Mobile: ${phone}`,
    `• Pickup: ${pickup}`,
    `• Drop Location: ${drop}`,
    `• Travel Date: ${date}`,
    `• Car Type: ${car}`,
    ``,
    `Please confirm cab availability and provide fare details.`
  ].join('\n');

  return `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(message)}`;
}
