import { About, ContactUs, Footer, Hero, Projects, Slogan, Services, GetInTouch, WhyUs, OurClients, Testimonial, Ideas } from "@/components/home";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Homepage',
  description: 'Homepage of Viriditas',
}

export default function Home() {
  return (
    <>
      <Hero />
      <Slogan />
      <About />
      {/* <div className="lg:px-8">
        <Services />
        <Projects />
        <GetInTouch />
        <Ideas />
        <WhyUs />
      </div>
      <OurClients />
      <Testimonial />
      <ContactUs />
      <Footer /> */}

    </>
  );
}
