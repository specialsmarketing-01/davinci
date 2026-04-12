import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { OrganizationJsonLd } from "@/components/seo/OrganizationJsonLd";
import { seoKeywords, siteDescription, siteName } from "@/lib/site";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
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
    <html lang="en" className={`${dmSans.variable} ${playfair.variable} h-full`}>
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
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
