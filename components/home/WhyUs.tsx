"use client";

import { motion } from "framer-motion";
import {
    Lightbulb,
    Settings,
    Leaf,
    DollarSign,
    CheckCircle,
    Heart,
} from "lucide-react";

export default function WhyChooseUs() {
    const whyUs = [
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
            description: "We Priorities Using Sustainable Materials & Methods.",
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
        <div className="relative py-16 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-[url('/images/bg/leaf-pattern.webp')] opacity-20 pointer-events-none"></div>

            {/* Content container */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center text-4xl font-bold mb-10"
                >
                    Why Choose Us
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {whyUs.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="p-6 rounded-lg shadow-lg transition-shadow duration-300 ease-in-out hover:shadow-xl backdrop-filter backdrop-blur-lg transform-gpu"
                        >
                            <div className="flex items-center mb-4">
                                <item.icon className="w-8 h-8 text-green-700 dark:text-green-300" />
                                <h3 className="ml-4 text-2xl font-semibold">{item.title}</h3>
                            </div>
                            <p className="font-normal text-lg leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
