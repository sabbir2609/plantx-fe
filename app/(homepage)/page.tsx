import { About, ContactUs, Footer, Hero, OurWorks, Slogan, InnovativeGardeningSection, GetInTouch, WhyUs, OurClients, Testimonial, InnovateYourSpace } from "@/components/home";

export default function Home() {
  return (
    <>
      <Hero />
      <Slogan />
      <About />
      <div className="lg:px-8">
        <InnovativeGardeningSection />
        <OurWorks />
        <GetInTouch />
        <InnovateYourSpace />
        <WhyUs />
      </div>
      <OurClients />
      <Testimonial />
      <ContactUs />
      <Footer />
    </>
  );
}
