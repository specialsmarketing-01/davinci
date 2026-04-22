import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { CookieConsent } from "@/components/compliance/CookieConsent";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { RequestCallbackTab } from "@/components/layout/RequestCallbackTab";
import { OrganizationJsonLd } from "@/components/seo/OrganizationJsonLd";
import { seoKeywords, siteDescription, siteName } from "@/lib/site";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
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
    <html lang="en" className={`${poppins.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased bg-background text-foreground">
        <OrganizationJsonLd />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-foreground focus:px-4 focus:py-2 focus:text-background"
        >
          Skip to main content
        </a>
        <Navbar />
        <div className="flex flex-1 flex-col">{children}</div>
        <RequestCallbackTab />
        <CookieConsent />
        <Footer />
      </body>
    </html>
  );
}
