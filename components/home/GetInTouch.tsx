import getLocalBase64 from "@/app/lib/getLocalBase64";
import Image from "next/image";




export default async function GetInTouch() {
    const sections = [
        {
            title: "1. Free Consultation:",
            description: "Schedule a complimentary consultation & our team will visit your space to discuss your vision for creating a greener environment.",
            imgSrc: "/images/contact/1.svg",
            // blurDataURL: await getLocalBase64("/images/contact/1.svg"),
            imgAlt: "Contact Us",
        },
        {
            title: "2. Meeting with Our Team:",
            description: "Our team will collaborate with you to understand your requirements, propose designs and plants, and tailor them to fit your budget.",
            imgSrc: "/images/contact/2.svg",
            // blurDataURL: await getLocalBase64("/images/contact/2.svg"),
            imgAlt: "Meeting with Our Team",
        },
        {
            title: "3. Approval to Proceed:",
            description: "After getting your final approval, we'll initiate the execution phase of the project.",
            imgSrc: "/images/contact/3.svg",
            // blurDataURL: await getLocalBase64("/images/contact/3.svg"),
            imgAlt: "Approval to Proceed",
        },
        {
            title: "4. Regular Updates & Feedback:",
            description: "Throughout the execution process, our multidisciplinary team will provide regular updates and seek your feedback to ensure the project aligns with your vision.",
            imgSrc: "/images/contact/4.svg",
            // blurDataURL: await getLocalBase64("/images/contact/4.svg"),
            imgAlt: "Regular Updates and Feedback",
        },
        {
            title: "5. Completion & Handover:",
            description: "Upon finishing the project, we'll walk through it with you to ensure everything meets your expectations. We'll also provide necessary documents, warranties, and maintenance instructions.",
            imgSrc: "/images/contact/5.svg",
            // blurDataURL: await getLocalBase64("/images/contact/5.svg"),
            imgAlt: "Completion and Handover",
        },
        {
            title: "6. Post-Project Services:",
            description: "We offer post-project support to address any issues or adjustments covered under warranty after completion.",
            imgSrc: "/images/contact/6.svg",
            // blurDataURL: await getLocalBase64("/images/contact/6.svg"),
            imgAlt: "Post-Project Services",
        },
    ];

    return (
        <div className="px-10 mx-auto">
            <h1 className="text-3xl font-bold text-center">Let&apos;s Get Started</h1>
            <div
                className="grid grid-cols-1 gap-2 mt-4 lg:grid-cols-3 md:grid-cols-2 lg:gap-2"
            >
                {sections.map(async (section, index) => (
                    <div key={index} className="flex flex-col items-center rounded-lg">
                        <Image
                            src={section.imgSrc}
                            alt={section.imgAlt}
                            // placeholder="blur"
                            // blurDataURL={section.blurDataURL}
                            width={800}
                            height={800}
                            className="h-52"
                        />
                        <div className="p-1 pt-2 text-center">
                            <h2 className="text-xl font-bold lg:text-2xl">{section.title}</h2>
                            <p className="text-sm font-light leading-tight tracking-tight">{section.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}