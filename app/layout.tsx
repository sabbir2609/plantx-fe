import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/common";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Inde Core",
  description: "We design your home, indoor, outdoor, office, and hotel.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-base-100 drawer">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />

          <div className="drawer-content">
            {children}
          </div>

          <div className="drawer-side z-40" style={{ scrollBehavior: "smooth", scrollPaddingTop: "5rem" }}>
            <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
            <Sidebar />
          </div>

        </div>
      </body>
    </html>
  );
}
