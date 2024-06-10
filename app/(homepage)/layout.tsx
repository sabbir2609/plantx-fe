import type { Metadata } from "next";
import { Sidebar } from "@/components/common";
import { Navbar } from "@/components/home";

export const metadata: Metadata = {
    title: "Viriditas",
    description: "We design your home, indoor, outdoor, office, and hotel.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
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
    );
}
