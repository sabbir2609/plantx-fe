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
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
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

const inter = Inter({ subsets: ["latin"] });

const assistant = Assistant(
  {
    subsets: ["latin"],
  },
);

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