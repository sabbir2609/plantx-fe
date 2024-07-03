import { Navbar } from "@/components/common";
import { Footer, Sidebar } from "@/components/main";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Viriditas",
    description: "Viriditas - Your one-stop shop for all things plants and planters",
};

export default function DashboardLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <div className="bg-base-100 drawer lg:drawer-open">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <div className="bg-base-200 text-base-content sticky top-0 z-30 flex h-14 w-full justify-center bg-opacity-90 backdrop-blur transition-shadow duration-100 [transform:translate3d(0,0,0)] shadow-sm">
                    <Navbar />
                </div>
                <div className="p-2">
                    {children}
                </div>
                <Footer />
            </div>
            <div className="drawer-side z-40" style={{ scrollBehavior: "smooth", scrollPaddingTop: "5rem" }}>
                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                <Sidebar />
            </div>
        </div>

    );
}