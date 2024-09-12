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
      <AnimatedSection delay={0.4}>
        <About />
      </AnimatedSection>
      <div className="lg:px-8">
        <AnimatedSection delay={0.6}>
          <Services />
        </AnimatedSection>
        <AnimatedSection delay={0.8}>
          <Events />
        </AnimatedSection>
        <AnimatedSection delay={0.6}>
          <Projects />
        </AnimatedSection>
        <AnimatedSection delay={0.4}>
          <GetInTouch />
        </AnimatedSection>
        <AnimatedSection delay={0.8}>
          <Ideas />
        </AnimatedSection>
        <AnimatedSection delay={0.4}>
          <WhyUs />
        </AnimatedSection>
      </div>
      <AnimatedSection delay={0.9}>
        <OurClients />
      </AnimatedSection>
      <AnimatedSection delay={0.6}>
        <Testimonial />
      </AnimatedSection>
      <AnimatedSection delay={0.5}>
        <Faq />
      </AnimatedSection>
      <AnimatedSection delay={0.5}>
        <ContactUs />
      </AnimatedSection>
      <AnimatedSection delay={1}>
        <Footer />
      </AnimatedSection>
    </>
  );
}