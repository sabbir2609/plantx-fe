import {
    CheckCircle,
    DollarSign,
    Heart,
    Leaf,
    Lightbulb,
    Settings,
} from "lucide-react";
import AnimatedSection from "../wrapper/AnimatedSection";

export default function WhyChooseUs() {
  const WhyChooseUs = [
    {
      title: "Free Consultation",
      description: "Get a Free Consultation for Your Space from Our Experts.",
      icon: Heart,
    },
    {
      title: "Custom Solutions",
      description: "We Tailor Designs to Fit Your Unique Style & Needs.",
      icon: Settings,
    },
    {
      title: "Innovative Design",
      description: "Modern, Creative Designs for Beautiful Green Spaces.",
      icon: Lightbulb,
    },
    {
      title: "Eco-Friendly Practices",
      description: "We Prioritize Using Sustainable Materials & Methods.",
      icon: Leaf,
    },
    {
      title: "Affordable Pricing",
      description: "Quality Services Within Your Budget.",
      icon: DollarSign,
    },
    {
      title: "Follow-up & Maintenance",
      description:
        "Post Installation Support & Care to Ensure Client Satisfaction & Service Longevity.",
      icon: CheckCircle,
    },
  ];

  return (
    <section className="mx-auto mb-8 select-none p-4 lg:p-8">
      <h1 className="mb-8 text-center text-4xl font-bold">Why Choose Us</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {WhyChooseUs.map((item, index) => (
          <AnimatedSection key={index} delay={index * 0.1}>
            <div className="group flex h-full flex-col rounded-lg bg-base-200 p-6 shadow-md transition-all duration-300 hover:shadow-lg">
              <div className="mb-4 flex items-center">
                <div className="rounded-full bg-primary/10 p-2">
                  <item.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="ml-4 text-xl font-semibold">{item.title}</h3>
              </div>
              <p className="mt-2 text-base-content/70">{item.description}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
