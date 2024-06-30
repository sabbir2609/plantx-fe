import { About, ContactUs, Footer, Hero, OurWorks, Slogan, TopPicks, InnovativeGardeningSection } from "@/components/home";

export default function Home() {
  return (
    <>
      <Hero />
      <Slogan />
      <About />

      <InnovativeGardeningSection />

      <TopPicks />
      <OurWorks />
      <ContactUs />
      <Footer />

    </>
  );
}
