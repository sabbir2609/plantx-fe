import { ContactUs, FeaturedServices, Footer, Hero, OurWorks, Slogan, TopPicks, VerticalGardeningSection } from "@/components/home";
import { CircleChevronRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="p-2 mx-1 shadow-sm">
        <Slogan />
      </div>
      <VerticalGardeningSection />
      <div className="flex flex-col py-2">
        <div className="flex flex-row justify-between items-center ms-2">
          <h4 className="text-2xl font-semibold text-left">
            Featured Services
          </h4>
          <Link href="/services" className="text-nowrap font-semibold me-2 hover:text-green-200">
            View All
          </Link>
        </div>
        <FeaturedServices />
      </div>

      <TopPicks />

      <OurWorks />

      <ContactUs />

      <Footer />

    </>
  );
}
