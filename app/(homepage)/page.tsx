import {
  About,
  ContactUs,
  HomeFooter,
  Hero,
  Projects,
  Slogan,
  Services,
  GetInTouch,
  WhyChooseUs,
  OurClients,
  Testimonial,
  Ideas,
  Events,
  Faq,
} from "@/app/components/home";
import AnimatedSection from "@/app/components/home/Wrapper/AnimatedSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Homepage",
  description: "Homepage of Viriditas",
};

export default function Home() {
  return (
    <>
      <Hero />
      <Slogan />
      <AnimatedSection delay={0.1}>
        <About />
      </AnimatedSection>
      <div className="lg:px-8">
        <AnimatedSection delay={0.4}>
          <Services />
        </AnimatedSection>

        {/* <AnimatedSection delay={0.3}>
          <Events />
        </AnimatedSection> */}

        <AnimatedSection delay={0.4}>
          <Projects />
        </AnimatedSection>
        {/* <GetInTouch /> */}
        {/* <Ideas />  */}
      </div>
      <WhyChooseUs />
      <AnimatedSection delay={0.2}>
        <Testimonial />
      </AnimatedSection>
      <AnimatedSection delay={0.2}>
        <div className="container mx-auto mb-10">
          <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-center">
            <div className="w-full lg:w-1/2">
              <AnimatedSection delay={0.2}>
                <OurClients />
              </AnimatedSection>
            </div>
            <div className="w-full lg:w-1/2">
              <AnimatedSection delay={0.2}>
                <Faq />
              </AnimatedSection>
            </div>
          </div>
        </div>
      </AnimatedSection>
      <AnimatedSection delay={0.3}>
        <ContactUs />
      </AnimatedSection>
      <HomeFooter />
    </>
  );
}
