import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

import NextTopLoader from 'nextjs-toploader';

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';
import { Fab, FooterWrapper, Navbar } from "./components/common";
import { AnnouncementBanner } from "./components/home";

const APP_NAME = "Viriditas";
const APP_DEFAULT_TITLE = "Viriditas - Elevate your space with Nature";
const APP_TITLE_TEMPLATE = "Viriditas - %s";
const APP_DESCRIPTION = "Viriditas - Elevate your space with nature. Discover our plant-based decor solutions designed to reduce carbon emissions and bring the beauty of nature into your home. Transform your environment sustainably with our carefully curated collection of eco-friendly decor.";

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  generator: "Next.js",
  keywords: ["Nature", "Plants", "Decor", "Eco-friendly", "Sustainable", "Home", "Garden", "Interior Design", "Plant-based", "Carbon Emissions", "Viriditas"],
  metadataBase: new URL('https://theviriditas.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
    },
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
    url: "https://theviriditas.com/",
    siteName: APP_NAME,
    images: [
      {
        url: `https://theviriditas.com/static/og-image.jpg`,
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: "website",
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: "index, follow"
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#00845a",
};


const glacialIndifference = localFont({
  src: "/lib/fonts/GlacialIndifference-Regular.otf",
  display: "swap",
})

const poppins = Poppins({
  display: "swap",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: '--font-poppins',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${glacialIndifference.className} ${poppins.variable} min-h-screen flex flex-col`}>
        <GoogleTagManager
          gtmId={`${process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID}`}
        />
        <NextTopLoader />
        <AnnouncementBanner />
        <Navbar />
        <main className="flex-grow bg-base-100 mt-[56px]">
          {children}
          <Fab />
        </main>
        <FooterWrapper />
        <SpeedInsights />
        <Analytics />
        <GoogleAnalytics
          gaId={`${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
        />
      </body>
    </html>
  );
}