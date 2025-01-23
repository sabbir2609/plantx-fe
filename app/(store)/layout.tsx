import { DrawerWrapper } from "../components/store";


export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <DrawerWrapper>{children}</DrawerWrapper>
    </>
  );
}
