import type { Metadata, Viewport } from "next";
import { Inter, Assistant, Jost } from "next/font/google";
import "./globals.css";

import NextTopLoader from 'nextjs-toploader';

import { SpeedInsights } from "@vercel/speed-insights/next";

const APP_NAME = "Viriditas";
const APP_DEFAULT_TITLE = "Elevate your space with Nature";
const APP_TITLE_TEMPLATE = "%s - Viriditas";
const APP_DESCRIPTION = "Elevate your space with Nature";

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
    url: "https://viriditas.vercel.app",
    siteName: APP_NAME,
    images: [
      {
        url: `https://viriditas.vercel.app/static/viriditas.png`,
        width: 800,
        height: 600,
      },
      {
        url: `https://viriditas.vercel.app/static/viriditas.png`,
        width: 1800,
        height: 1600,
        alt: "Viriditas",
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
  themeColor: "#ffffff",
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