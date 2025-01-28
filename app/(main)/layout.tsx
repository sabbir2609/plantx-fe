import { Breadcrumb, FooterWrapper, Navbar } from "../components/common";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
      <FooterWrapper />
    </>
  );
}
