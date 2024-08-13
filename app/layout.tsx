import type { Metadata, Viewport } from "next";
import { Inter, Assistant, Jost } from "next/font/google";
import "./globals.css";

import NextTopLoader from 'nextjs-toploader';

import { SpeedInsights } from "@vercel/speed-insights/next";

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
  keywords: ["Nature", "Plants", "Decor"],
  manifest: "/manifest.json",
  metadataBase: new URL('https://theviriditas.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
    },
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
    // startUpImage: [],
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
};

export const viewport: Viewport = {
  themeColor: "#",
};

const jost = Jost({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${jost.className}`}>
        <NextTopLoader />
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}