import type { Metadata } from "next";
import { Noto_Sans, Poppins, Tajawal } from "next/font/google";
import { CookieConsent } from "@/components/compliance/CookieConsent";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { RequestCallbackTab } from "@/components/layout/RequestCallbackTab";
import { SkipNavLink } from "@/components/layout/SkipNavLink";
import { SiteJsonLd } from "@/components/seo/SiteJsonLd";
import { LocaleProvider } from "@/components/providers/LocaleProvider";
import { seoKeywords, siteDescription, siteName, siteUrl } from "@/lib/site";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

/** Arabic UI text in the navbar/fallback glyphs */
const tajawal = Tajawal({
  variable: "--font-tajawal",
  subsets: ["arabic"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://davinci-properties.com"),
  title: {
    default: `${siteName} | Dubai Real Estate`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: [...seoKeywords],
  authors: [{ name: siteName }],
  openGraph: {
    type: "website",
    locale: "en_AE",
    siteName,
    url: siteUrl,
    title: `${siteName} | Dubai Real Estate`,
    description: siteDescription,
    images: [
      {
        url: "/home-hero.png",
        width: 1200,
        height: 630,
        alt: "Davinci Properties Dubai real estate",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | Dubai Real Estate`,
    description: siteDescription,
    images: ["/home-hero.png"],
  },
  other: {
    "geo.region": "AE-DU",
    "geo.placename": "Dubai",
    "geo.position": "25.1865;55.2675",
    ICBM: "25.1865, 55.2675",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${notoSans.variable} ${tajawal.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased bg-background text-foreground">
        <SiteJsonLd />
        <LocaleProvider>
          <SkipNavLink />
          <Navbar />
          <div className="flex flex-1 flex-col">{children}</div>
          <RequestCallbackTab />
          <CookieConsent />
          <Footer />
        </LocaleProvider>
      </body>
    </html>
  );
}
