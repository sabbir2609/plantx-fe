import { Fab } from "@/app/components/common";
import { AnnouncementBanner } from "@/app/components/home";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="bg-base-100">
                <AnnouncementBanner />
                {children}
            <Fab />
        </div>
    );
}
