import type { Metadata } from "next";
import { Noto_Sans, Poppins, Tajawal } from "next/font/google";
import { CookieConsent } from "@/components/compliance/CookieConsent";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { RequestCallbackTab } from "@/components/layout/RequestCallbackTab";
import { SkipNavLink } from "@/components/layout/SkipNavLink";
import { OrganizationJsonLd } from "@/components/seo/OrganizationJsonLd";
import { LocaleProvider } from "@/components/providers/LocaleProvider";
import { seoKeywords, siteDescription, siteName } from "@/lib/site";
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
    title: `${siteName} | Dubai Real Estate`,
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | Dubai Real Estate`,
    description: siteDescription,
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
        <OrganizationJsonLd />
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
