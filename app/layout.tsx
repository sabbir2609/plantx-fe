import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ChatFab } from "@/components/common";

import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Viriditas",
  description: "Viriditas - Your one-stop shop for all things plants and planters",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} font-serif`}>
        {children}
        <ChatFab />
        <SpeedInsights />
      </body>
    </html>
  );
}