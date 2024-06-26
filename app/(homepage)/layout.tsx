import { Navbar } from "@/components/home";
import { Sidebar } from "@/components/main";
import type { Metadata } from "next";

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
                <Navbar />
                {children}
            </div>
            <div className="drawer-side z-40" style={{ scrollBehavior: "smooth", scrollPaddingTop: "5rem" }}>
                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                <Sidebar />
            </div>
        </div>
    );
}
