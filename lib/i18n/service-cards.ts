import type { NavLocale } from "@/lib/i18n/nav";

type Card = { title: string; summary: string };

const SERVICE_SLUGS = [
  "property-investment-consultancy",
  "golden-visa",
  "get-dubai-residence-visa",
  "mortgage-advisory",
  "buyer-guide",
  "seller-guide",
  "tenant-guide",
  "landlord-guide",
] as const;

export type ServiceSlug = (typeof SERVICE_SLUGS)[number];

const en: Record<ServiceSlug, Card> = {
  "property-investment-consultancy": {
    title: "Property & Investment Consultancy",
    summary:
      "Professional asset management and investment intelligence for buyers, sellers, landlords, and tenants in the UAE.",
  },
  "golden-visa": {
    title: "Golden Visa",
    summary:
      "Invest AED 2 million in UAE real estate and obtain a 10-year Golden Visa—long-term residency with sponsor-free renewal and family sponsorship.",
  },
  "get-dubai-residence-visa": {
    title: "Get Dubai Residence Visa",
    summary:
      "Buy Dubai property from AED 750,000 and qualify for a residence visa—DLD rules, Green and Golden visa context, and guidance from Davinci Properties.",
  },
  "mortgage-advisory": {
    title: "Mortgage Advisory",
    summary:
      "Personalised mortgage support in Dubai—off-plan and ready property finance, equity release, and step-by-step guidance through approval.",
  },
  "buyer-guide": {
    title: "Buyer Guide",
    summary:
      "Steps to buying a home in Dubai—trusted Davinci agents, freehold purchase rules, budgeting, RERA forms, and sale purchase agreement support.",
  },
  "seller-guide": {
    title: "Seller Guide",
    summary:
      "Prepare, price, and market your Dubai home with Davinci—proven selling method, best-price focus, local experts, and RERA-compliant agreements.",
  },
  "tenant-guide": {
    title: "Tenant Guide",
    summary:
      "Rent in Dubai with Davinci—RERA-listed homes, Ejari leases, security deposits, DEWA and telecom setup, and smooth move-in with your landlord.",
  },
  "landlord-guide": {
    title: "Landlord Guide",
    summary:
      "Lease in Dubai with Davinci—tenant selection, exclusive listings, RERA forms, portal marketing, viewings, and property management for landlords.",
  },
};

const ar: Record<ServiceSlug, Card> = {
  "property-investment-consultancy": {
    title: "الاستشارات العقارية والاستثمارية",
    summary:
      "إدارة أصول ومعلومات استثمارية لخدمة المشتري والبائع والمؤجر والمستأجر في الإمارات.",
  },
  "golden-visa": {
    title: "التأشيرة الذهبية",
    summary:
      "استثمر مليونَي درهم في عقارات الإمارات واحصل على إقامة ذهبية قد تصل إلى عشر سنوات—مع تجديد وفق الشروط وإمكانية ضم العائلة ضمن القواعد.",
  },
  "get-dubai-residence-visa": {
    title: "تأشيرة إقامة دبي",
    summary:
      "شراء عقار اعتبارًا من 750,000 درهم وفق ضوابط دائرة الأراضي—سياق التأشيرات الطويلة ودعم فريق دا فنشي لتسهيل المسار.",
  },
  "mortgage-advisory": {
    title: "الاستشارات في الرهن العقاري",
    summary:
      "دعم تمويل شخصي للعقار قيد الإنشاء أو الجاهز وإخلاء طرف وأسهم—مع مرافقة خطوات الموافقة.",
  },
  "buyer-guide": {
    title: "دليل المشتري",
    summary:
      "خطوات شراء المنزل في دبي—وسطاء دا فنشي، قواعد التملك الحر، الميزانية، نماذج RERA، واتفاقية البيع والشراء.",
  },
  "seller-guide": {
    title: "دليل البائع",
    summary:
      "تحضير عرضك وسعرًا منطقيًا وتسويقًا هادئًا وفق أفضل الممارسات ومطابقة RERA حيث ينطبق ذلك.",
  },
  "tenant-guide": {
    title: "دليل المستأجر",
    summary:
      "الإيجار في دبي مع دا فنشي—عقارات مدرجة لدى الهيئة، عقود إيجاري، تأمينات، وماء وكهرباء وخدمات وفق المتطلبات.",
  },
  "landlord-guide": {
    title: "دليل المؤجر",
    summary:
      "تأجير عقارك في دبي—اختيار المستأجر، إدراجات حصرية، نماذج RERA، تسويق ومعاينات، ومسارات الإدارة عند الرغبة.",
  },
};

const ru: Record<ServiceSlug, Card> = {
  "property-investment-consultancy": {
    title: "Консалтинг по недвижимости и инвестициям",
    summary:
      "Управление активами и аналитика для покупателей, продавцов, арендодателей и арендаторов в ОАЭ.",
  },
  "golden-visa": {
    title: "Золотая виза",
    summary:
      "Инвестиции от 2 млн AED в недвижимость ОАЭ и долгосрочное проживание до 10 лет — с понятными правилами для семьи при соблюдении нормативов.",
  },
  "get-dubai-residence-visa": {
    title: "Вид на жительство через недвижимость Дубая",
    summary:
      "Покупка от порога 750 000 AED при объявлениях DLD — контекст Green/Golden Visa и сопровождение Davinci Properties.",
  },
  "mortgage-advisory": {
    title: "Ипотечное консультирование",
    summary:
      "Индивидуальный трек для off-plan и готовых объектов, equity release и шагов до одобрения.",
  },
  "buyer-guide": {
    title: "Гид покупателя",
    summary:
      "Шаги покупки в Дубае — надёжные агенты Davinci, freehold, бюджет, формы RERA и поддержка SPA.",
  },
  "seller-guide": {
    title: "Гид продавца",
    summary:
      "Подготовка, ценообразование и маркетинг с фокусом на лучший результат и процессы RERA.",
  },
  "tenant-guide": {
    title: "Гид арендатора",
    summary:
      "Аренда в Дубае — объекты с требованиями RERA, контракты Ejari, залоги, DEWA и move-in порядки.",
  },
  "landlord-guide": {
    title: "Гид арендодателя",
    summary:
      "Сдача недвижимости — подбор арендатора, эксклюзивные листинги, RERA, маркетинг, показы и property management при необходимости.",
  },
};

const TABLE: Record<NavLocale, Record<ServiceSlug, Card>> = {
  en,
  ar,
  ru,
};

export function serviceCard(locale: NavLocale, slug: string): Card | undefined {
  if (!SERVICE_SLUGS.includes(slug as ServiceSlug)) return undefined;
  return TABLE[locale][slug as ServiceSlug];
}
