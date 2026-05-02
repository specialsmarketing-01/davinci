export type NavLocale = "en" | "ar" | "ru";

export const NAV_LOCALE_STORAGE_KEY = "davinci-nav-locale";

const propertyMenuHrefKeys = [
  "/our-properties/",
  "/our-properties/sell/",
  "/rent/",
  "/our-properties/international-properties/",
  "/our-properties/list-your-property/",
] as const;

type PropertyMenuHref = (typeof propertyMenuHrefKeys)[number];

const serviceMenuHrefKeys = [
  "/services/property-investment-consultancy/",
  "/services/golden-visa/",
  "/services/get-dubai-residence-visa/",
  "/services/mortgage-advisory/",
  "/services/buyer-guide/",
  "/services/seller-guide/",
  "/services/tenant-guide/",
  "/services/landlord-guide/",
] as const;

type ServiceMenuHref = (typeof serviceMenuHrefKeys)[number];

/** Top-level navbar labels plus menu item captions keyed by canonical href */
export type NavTranslations = {
  home: string;
  ourProperties: string;
  services: string;
  about: string;
  contact: string;
  toggleMenu: string;
  skipToMain: string;
  primaryNav: string;
  languageSwitcher: string;
  properties: Record<PropertyMenuHref, string>;
  serviceItems: Record<ServiceMenuHref, string>;
};

export const navTranslations: Record<NavLocale, NavTranslations> = {
  en: {
    home: "Home",
    ourProperties: "Our Properties",
    services: "Services",
    about: "About",
    contact: "Contact",
    toggleMenu: "Toggle menu",
    skipToMain: "Skip to main content",
    primaryNav: "Primary",
    languageSwitcher: "Language",
    properties: {
      "/our-properties/": "Buy",
      "/our-properties/sell/": "Sell",
      "/rent/": "Rent",
      "/our-properties/international-properties/": "International Properties",
      "/our-properties/list-your-property/": "List Your Property",
    },
    serviceItems: {
      "/services/property-investment-consultancy/": "Property & Investment Consultancy",
      "/services/golden-visa/": "Golden Visa",
      "/services/get-dubai-residence-visa/": "Get Dubai Residence Visa",
      "/services/mortgage-advisory/": "Mortgage Advisory",
      "/services/buyer-guide/": "Buyer Guide",
      "/services/seller-guide/": "Seller Guide",
      "/services/tenant-guide/": "Tenant Guide",
      "/services/landlord-guide/": "Landlord Guide",
    },
  },
  ar: {
    home: "الرئيسية",
    ourProperties: "عقاراتنا",
    services: "الخدمات",
    about: "من نحن",
    contact: "اتصل بنا",
    toggleMenu: "إظهار القائمة",
    skipToMain: "التخطي إلى المحتوى الرئيسي",
    primaryNav: "التنقل الرئيسي",
    languageSwitcher: "اللغة",
    properties: {
      "/our-properties/": "شراء",
      "/our-properties/sell/": "بيع",
      "/rent/": "إيجار",
      "/our-properties/international-properties/": "العقارات الدولية",
      "/our-properties/list-your-property/": "إدراج عقارك",
    },
    serviceItems: {
      "/services/property-investment-consultancy/":
        "الاستشارات العقارية والاستثمارية",
      "/services/golden-visa/": "التأشيرة الذهبية",
      "/services/get-dubai-residence-visa/": "تأشيرة إقامة دبي",
      "/services/mortgage-advisory/": "الاستشارات في الرهن العقاري",
      "/services/buyer-guide/": "دليل المشتري",
      "/services/seller-guide/": "دليل البائع",
      "/services/tenant-guide/": "دليل المستأجر",
      "/services/landlord-guide/": "دليل المؤجر",
    },
  },
  ru: {
    home: "Главная",
    ourProperties: "Наша недвижимость",
    services: "Услуги",
    about: "О нас",
    contact: "Контакты",
    toggleMenu: "Открыть меню",
    skipToMain: "Перейти к основному содержанию",
    primaryNav: "Основная навигация",
    languageSwitcher: "Язык",
    properties: {
      "/our-properties/": "Купить",
      "/our-properties/sell/": "Продать",
      "/rent/": "Аренда",
      "/our-properties/international-properties/":
        "Международная недвижимость",
      "/our-properties/list-your-property/": "Разместить объект",
    },
    serviceItems: {
      "/services/property-investment-consultancy/":
        "Консалтинг по недвижимости и инвестициям",
      "/services/golden-visa/": "Золотая виза",
      "/services/get-dubai-residence-visa/": "Вид на жительство в Дубае",
      "/services/mortgage-advisory/": "Ипотечное консультирование",
      "/services/buyer-guide/": "Гид покупателя",
      "/services/seller-guide/": "Гид продавца",
      "/services/tenant-guide/": "Гид арендатора",
      "/services/landlord-guide/": "Гид арендодателя",
    },
  },
};

export function isNavLocale(value: string | null | undefined): value is NavLocale {
  return value === "en" || value === "ar" || value === "ru";
}
