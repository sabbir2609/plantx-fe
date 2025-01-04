export default function MainLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <div className="bg-base-100">
                <div className="flex-grow p-2">
                    {children}
                </div>
        </div>
    );
}