import { ContactUs, FeaturedCategory, Footer, Hero, OurWorks, Slogan, TopPicks } from "@/components/home";
import { CircleChevronRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="bg-base-200 p-2 rounded-lg mx-1">
        <Slogan />
      </div>
      <div className="flex flex-col">
        <div className="flex flex-row justify-between items-center ms-2">
          <h4 className="text-2xl font-semibold text-left">
            Featured Categories
          </h4>
          <Link href="/categories" className="btn btn-square btn-ghost">
            <CircleChevronRight />
          </Link>
        </div>
        <FeaturedCategory />
      </div>

      <TopPicks />

      <OurWorks />

      <ContactUs />

      <Footer />

    </>
  );
}
