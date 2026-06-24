"use client";

import { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext<any>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<"ar" | "en">("en");

  useEffect(() => {
    const savedLang = localStorage.getItem("site_lang") as "ar" | "en";

    if (savedLang) {
      setLang(savedLang);
    }
  }, []);

  useEffect(() => {
    document.documentElement.dir = lang === "en" ?"ltr": "rtl" ;

    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLanguage = () => {
    const nextLang = lang === "en" ?"ar": "en" ;

    setLang(nextLang);

    localStorage.setItem("site_lang", nextLang);
  };

  const translations = {
    ar: {
      // navbar
      home: "الرئيسية",
      categories: "التصنيفات",
      services: "الخدمات",
      video: "فيديو",
      brands: "العلامات التجارية",
      aboutUs: "من نحن",
      contactUs: "اتصل بنا",
      signIn: "تسجيل الدخول",
      searchPlaceholder: "ابحث عن دواء...",
      trustedPharmacy: "صيدليتك الموثوقة عبر الإنترنت",
      option1: "خيار 1",
      option2: "خيار 2",
      option3: "خيار 3",

      // hero banner
      yourTrusted: "صيدليتك",
      onlinePharmacy: "الموثوقة عبر الإنترنت",

      heroDescription:
        "أدوية آمنة، توصيل سريع، وإرشاد مهني في مكان واحد. نحن صيدلية إلكترونية معتمدة ملتزمة بجعل الرعاية الصحية بسيطة وآمنة وميسورة التكلفة.",

      shopMedicines: "تسوق الأدوية",
      uploadPrescription: "رفع الوصفة الطبية",

      supplements: "المكملات",
      medicines: "الأدوية",
      vitamins: "الفيتامينات",
      diabetes: "السكري",
      babyCare: "العناية بالأطفال",
      skinCare: "العناية بالبشرة",
      hairCare: "العناية بالشعر",
      dentalCare: "العناية بالأسنان",
      medicalDevices: "الأجهزة الطبية",
      beautyProducts: "منتجات التجميل",
      oralCare: "العناية بالفم",

      // banner home
      searchMedicines: "ابحث عن الأدوية",
      viewResults: "شاهد النتائج",
      chooseProducts: "اختر ما تحتاجه",
      sendYourOrder: "أرسل طلبك",

      // categories section
      shopBy: "تسوق حسب",
      category: "التصنيف",
      viewAll: "عرض الكل",

      // products section
      featured: "المنتجات",
      featuredProducts: "المميزة",

      // products names
      panadolExtra: "بانادول اكسترا",
      vitaminC: "فيتامين سي 1000 مجم",
      babyShampoo: "شامبو أطفال",
      faceWash: "غسول الوجه",
      omega3: "أوميجا 3",

      // footer
      footerDesc:
        "صيدليتك الإلكترونية الموثوقة للأدوية الآمنة، التوصيل السريع، والإرشاد المهني.",

      shop: "تسوق",
      allCategories: "جميع التصنيفات",
      personalCare: "العناية الشخصية",

      helpSupport: "المساعدة والدعم",
      faqs: "الأسئلة الشائعة",
      shippingDelivery: "الشحن والتوصيل",
      returnsRefunds: "سياسة الاسترجاع",
      trackOrder: "تتبع طلبك",
      prescriptionGuide: "دليل الوصفات الطبية",

      aboutPharmaCare: "عن فارما كير",
      ourMission: "مهمتنا",
      careers: "الوظائف",
      blog: "المدونة",
      privacyPolicy: "سياسة الخصوصية",
      termsConditions: "الشروط والأحكام",

      stayUpdated: "ابق على اطلاع",

      newsletterDesc: "اشترك للحصول على عروض حصرية وتحديثات.",

      emailPlaceholder: "أدخل بريدك الإلكتروني",

      genuineProducts: "منتجات أصلية 100%",
      fastDelivery: "توصيل سريع وآمن",
      expertSupport: "دعم فني متخصص",
      securePayments: "دفع آمن",

      copyright: "© 2026 فارما كير. جميع الحقوق محفوظة.",

      tagline: "صحتك، أولويتنا.",
      popular: "الأكثر مبيعًا",

      addToCart: "أضف إلى السلة",
      offer1Badge: "عرض خاص",
      offer1Title: "خصم 50%",
      offer1Subtitle: "الفيتامينات والمكملات الغذائية",
      offer1Description:
        "احصل على أفضل منتجات الرعاية الصحية بأسعار مخفضة لفترة محدودة.",

      offer2Badge: "خصم مميز",
      offer2Title: "اشتري 1 واحصل على 1",
      offer2Subtitle: "مجموعة العناية بالبشرة",
      offer2Description:
        "استمتع بعروض مذهلة على منتجات العناية بالبشرة واحصل على بشرة صحية ونضرة.",

      offer3Badge: "عروض نهاية الأسبوع",
      offer3Title: "وفر حتى 40%",
      offer3Subtitle: "منتجات العناية بالشعر",
      offer3Description:
        "منتجات عناية بالشعر بجودة عالية وخصومات حصرية لفترة محدودة.",

      save: "وفر",
      offer: "عرض",
      shopOffer: "تسوق العرض",
      viewDetails: "عرض التفاصيل",
      trustedCustomers: "موثوق من أكثر من 10,000 عميل",
    },

    en: {
      // navbar
      home: "Home",
      categories: "Categories",
      services: "Services",
      video: "Video",
      brands: "Brands",
      aboutUs: "About Us",
      contactUs: "Contact Us",
      signIn: "Sign In",
      searchPlaceholder: "Search medicine...",
      trustedPharmacy: "Trusted Online Pharmacy",
      option1: "Option 1",
      option2: "Option 2",
      option3: "Option 3",

      // hero banner
      yourTrusted: "Your Trusted",
      onlinePharmacy: "Online Pharmacy",

      heroDescription:
        "Safe medicines, fast delivery, and professional guidance all in one place. We are a certified online pharmacy committed to making healthcare simple, secure, and affordable.",

      shopMedicines: "Shop Medicines",
      uploadPrescription: "Upload Prescription",

      supplements: "Supplements",
      medicines: "Medicines",
      vitamins: "Vitamins",
      diabetes: "Diabetes",
      babyCare: "Baby Care",
      skinCare: "Skin Care",
      hairCare: "Hair Care",
      dentalCare: "Dental Care",
      medicalDevices: "Medical Devices",
      beautyProducts: "Beauty Products",
      oralCare: "Oral Care",

      // banner home
      searchMedicines: "Search Medicines",
      viewResults: "View Results",
      chooseProducts: "Choose Products",
      sendYourOrder: "Send Your Order",

      // categories section
      shopBy: "Shop By",
      category: "Category",
      viewAll: "View All",

      // products section
      featured: "Featured",
      featuredProducts: "Products",

      // products names
      panadolExtra: "Panadol Extra",
      vitaminC: "Vitamin C 1000mg",
      babyShampoo: "Baby Shampoo",
      faceWash: "Face Wash",
      omega3: "Omega 3",

      // footer
      footerDesc:
        "Your trusted online pharmacy for safe medicines, fast delivery, and professional guidance.",

      shop: "Shop",
      allCategories: "All Categories",
      personalCare: "Personal Care",

      helpSupport: "Help & Support",
      faqs: "FAQs",
      shippingDelivery: "Shipping & Delivery",
      returnsRefunds: "Returns & Refunds",
      trackOrder: "Track Your Order",
      prescriptionGuide: "Prescription Guide",

      aboutPharmaCare: "About PharmaCare",
      ourMission: "Our Mission",
      careers: "Careers",
      blog: "Blog",
      privacyPolicy: "Privacy Policy",
      termsConditions: "Terms & Conditions",

      stayUpdated: "Stay Updated",

      newsletterDesc: "Subscribe to get exclusive offers and updates.",

      emailPlaceholder: "Enter your email",

      genuineProducts: "100% Genuine Products",
      fastDelivery: "Fast & Safe Delivery",
      expertSupport: "Expert Support",
      securePayments: "Secure Payments",

      copyright: "© 2026 PharmaCare. All rights reserved.",

      tagline: "Your health, our priority.",
      popular: "Popular",

      addToCart: "Add To Cart",
      offer1Badge: "Limited Offer",
      offer1Title: "50% OFF",
      offer1Subtitle: "Vitamins & Supplements",
      offer1Description:
        "Get the best healthcare products at exclusive discounted prices for a limited time.",

      offer2Badge: "Special Discount",
      offer2Title: "Buy 1 Get 1",
      offer2Subtitle: "Skin Care Collection",
      offer2Description:
        "Enjoy amazing skincare offers and keep your skin healthy and refreshed.",

      offer3Badge: "Weekend Deals",
      offer3Title: "Save 40%",
      offer3Subtitle: "Hair Care Essentials",
      offer3Description:
        "Premium hair care products with exclusive discounts available this week only.",

      save: "SAVE",
      offer: "Offer",
      shopOffer: "Shop Offer",
      viewDetails: "View Details",
      trustedCustomers: "Trusted by 10,000+ customers",
    },
  };

  return (
    <LanguageContext.Provider
      value={{
        lang,
        toggleLanguage,
        t: translations[lang],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
