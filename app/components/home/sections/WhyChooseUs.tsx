import {
    CheckCircle,
    DollarSign,
    Heart,
    Leaf,
    Lightbulb,
    Settings,
} from "lucide-react";
import AnimatedSection from "../Wrapper/AnimatedSection";

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
        <div className="mx-auto p-4 lg:p-8">
            <h1 className="mb-6 pb-8 text-center text-3xl font-bold">
              Why Choose Us
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-8">
                {WhyChooseUs.map((item, index) => (
                    <AnimatedSection key={index} delay={index * 0.1}>
                        <div className="flex flex-col p-6 rounded-md shadow-md h-full bg-base-200">
                            <div className="flex items-center">
                                <item.icon className="w-8 h-8 text-green-700 dark:text-green-300" />
                                <h3 className="ml-4 text-lg lg:text-2xl">{item.title}</h3>
                            </div>
                        </div>
                    </AnimatedSection>
                ))}
            </div>
        </div>
    );
}