import { About, ContactUs, Footer, Hero, Projects, Slogan, Services, GetInTouch, WhyUs, OurClients, Testimonial, Ideas, Events, Faq } from "@/components/home";
import AnimatedSection from "@/components/home/AnimatedSection";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Homepage',
  description: 'Homepage of Viriditas',
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
        <AnimatedSection delay={0.3}>
          <Events />
        </AnimatedSection>
        <AnimatedSection delay={0.4}>
          <Projects />
        </AnimatedSection>
        <AnimatedSection delay={0.3}>
          <GetInTouch />
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <Ideas />
        </AnimatedSection>
        <AnimatedSection delay={0.3}>
          <WhyUs />
        </AnimatedSection>
      </div>
      <AnimatedSection delay={0.3}>
        <OurClients />
      </AnimatedSection>
      <AnimatedSection delay={0.2}>
        <Testimonial />
      </AnimatedSection>
      <AnimatedSection delay={0.2}>
        <Faq />
      </AnimatedSection>
      <AnimatedSection delay={0.3}>
        <ContactUs />
      </AnimatedSection>
      <AnimatedSection delay={0.2}>
        <Footer />
      </AnimatedSection>
    </>
  );
}