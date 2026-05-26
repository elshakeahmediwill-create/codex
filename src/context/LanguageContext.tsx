"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

const LanguageContext = createContext<any>(null);

export function LanguageProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [lang, setLang] = useState<"ar" | "en">("ar");

  useEffect(() => {
    const savedLang = localStorage.getItem(
      "site_lang"
    ) as "ar" | "en";

    if (savedLang) {
      setLang(savedLang);
    }
  }, []);

  useEffect(() => {
    document.documentElement.dir =
      lang === "ar" ? "rtl" : "ltr";

    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLanguage = () => {
    const nextLang = lang === "ar" ? "en" : "ar";

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

      newsletterDesc:
        "اشترك للحصول على عروض حصرية وتحديثات.",

      emailPlaceholder: "أدخل بريدك الإلكتروني",

      genuineProducts: "منتجات أصلية 100%",
      fastDelivery: "توصيل سريع وآمن",
      expertSupport: "دعم فني متخصص",
      securePayments: "دفع آمن",

      copyright:
        "© 2026 فارما كير. جميع الحقوق محفوظة.",

      tagline: "صحتك، أولويتنا.",
      popular: "الأكثر مبيعًا",

addToCart: "أضف إلى السلة",
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

      newsletterDesc:
        "Subscribe to get exclusive offers and updates.",

      emailPlaceholder: "Enter your email",

      genuineProducts: "100% Genuine Products",
      fastDelivery: "Fast & Safe Delivery",
      expertSupport: "Expert Support",
      securePayments: "Secure Payments",

      copyright:
        "© 2026 PharmaCare. All rights reserved.",

      tagline: "Your health, our priority.",
      popular: "Popular",

addToCart: "Add To Cart",
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

export const useLanguage = () =>
  useContext(LanguageContext);