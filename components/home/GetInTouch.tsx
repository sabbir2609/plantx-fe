import Image from "next/image";


export default function GetInTouch() {
    const sections = [
        {
            title: "1. Free Consultation:",
            description: "Schedule a complimentary consultation & our team will visit your space to discuss your vision for creating a greener environment.",
            imgSrc: "/images/contact/0.jpg",
            imgAlt: "Contact Us",
        },
        {
            title: "2. Meeting with Our Team:",
            description: "Our team will collaborate with you to understand your requirements, propose designs and plants, and tailor them to fit your budget.",
            imgSrc: "/images/contact/1.jpg",
            imgAlt: "Meeting with Our Team",
        },
        {
            title: "3. Approval to Proceed:",
            description: "After getting your final approval, we'll initiate the execution phase of the project.",
            imgSrc: "/images/contact/2.jpg",
            imgAlt: "Approval to Proceed",
        },
        {
            title: "4. Regular Updates & Feedback:",
            description: "Throughout the execution process, our multidisciplinary team will provide regular updates and seek your feedback to ensure the project aligns with your vision.",
            imgSrc: "/images/contact/3.jpg",
            imgAlt: "Regular Updates and Feedback",
        },
        {
            title: "5. Completion & Handover:",
            description: "Upon finishing the project, we'll walk through it with you to ensure everything meets your expectations. We'll also provide necessary documents, warranties, and maintenance instructions.",
            imgSrc: "/images/contact/4.jpg",
            imgAlt: "Completion and Handover",
        },
        {
            title: "6. Post-Project Services:",
            description: "We offer post-project support to address any issues or adjustments covered under warranty after completion.",
            imgSrc: "/images/contact/5.jpg",
            imgAlt: "Post-Project Services",
        },
    ];

    return (
        <div className="p-3 mx-auto">
            <h1 className="text-3xl font-bold text-center select-none">Let&apos;s Get Started</h1>

            <div className="flex flex-col items-center justify-center">
                <div className="grid items-center justify-center grid-cols-1 gap-2 mt-4 lg:grid-cols-3 md:grid-cols-2 lg:gap-2">
                    {sections.map((section, index) => (
                        <div key={index} className="flex flex-col items-center justify-center rounded-lg">
                            <Image
                                src={section.imgSrc}
                                alt={section.imgAlt}
                                width={800}
                                height={533}
                                className="rounded-lg h-44 w-60"
                            />
                            <div className="py-3 text-center">
                                <h2 className="text-2xl font-bold tracking-tighter select-none lg:text-2xl">{section.title}</h2>
                                <p className="text-sm font-light leading-tight tracking-tight select-none lg:text-lg">{section.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}