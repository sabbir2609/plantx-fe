import Image from "next/image";


export default function GetInTouch() {
    const sections = [
        {
            title: "1. Contact us for Free Consultation:",
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
            title: "4. Regular Updates and Feedback:",
            description: "Throughout the execution process, our multidisciplinary team will provide regular updates and seek your feedback to ensure the project aligns with your vision.",
            imgSrc: "/images/contact/3.jpg",
            imgAlt: "Regular Updates and Feedback",
        },
        {
            title: "5. Completion and Handover:",
            description: "Upon finishing the project, we&apos;ll walk through it with you to ensure everything meets your expectations. We'll also provide necessary documents, warranties, and maintenance instructions.",
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
        <div className="container px-5 py-10 mx-auto">
            <h1 className="text-4xl font-bold text-center text-gray-800 sm:text-5xl md:text-6xl">Let&apos;s Get Started</h1>
            <div className="grid grid-cols-1 gap-10 mt-10 md:grid-cols-2 lg:grid-cols-3">
                {sections.map((section, index) => (
                    <div key={index} className="flex flex-col items-center p-6 space-y-5 transition duration-500 transform bg-white rounded-lg shadow-lg hover:scale-105">
                        <Image
                            src={section.imgSrc}
                            alt={section.imgAlt}
                            width={800}
                            height={533}
                            className="rounded-lg"
                        />
                        <h2 className="text-2xl font-semibold text-gray-800">{section.title}</h2>
                        <p className="text-lg text-center text-gray-600">{section.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}