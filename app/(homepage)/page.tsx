import { ContactUs, FeaturedServices, Footer, Hero, OurWorks, Slogan, TopPicks } from "@/components/home";
import { CircleChevronRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="bg-base-200 p-2 rounded-lg mx-1 shadow-sm">
        <Slogan />
      </div>
      <div className="flex flex-col py-2">
        <div className="flex flex-row justify-between items-center ms-2">
          <h4 className="text-2xl font-semibold text-left">
            Featured Services
          </h4>
          <Link href="/services" className="btn btn-square btn-ghost me-2">
            <CircleChevronRight />
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
