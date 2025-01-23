import { CheckCircle, DollarSign, Heart, Leaf, Lightbulb, Settings } from "lucide-react";
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
            description: "Post Installation Support & Care to Ensure Client Satisfaction & Service Longevity.",
            icon: CheckCircle,
        },
    ];

    return (
        <div className="mx-auto p-4 mb-8 lg:p-8 select-none">
            <h1 className="mb-8 text-center text-4xl font-bold">
                Why Choose Us
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {WhyChooseUs.map((item, index) => (
                    <AnimatedSection key={index} delay={index * 0.1}>
                        <div className="group flex flex-col p-6 rounded-lg shadow-md bg-base-200 hover:shadow-lg transition-all duration-300 h-full">
                            <div className="flex items-center mb-4">
                                <div className="p-2 rounded-full bg-primary/10">
                                    <item.icon className="w-8 h-8 text-accent" />
                                </div>
                                <h3 className="ml-4 text-xl font-semibold">{item.title}</h3>
                            </div>
                            <p className="text-base-content/70 mt-2">
                                {item.description}
                            </p>
                        </div>
                    </AnimatedSection>
                ))}
            </div>
        </div>
    );
}