import Image from "next/image";

import getInTouchImg1 from "@/public/images/get-in-touch/1.svg";
import getInTouchImg2 from "@/public/images/get-in-touch/2.svg";
import getInTouchImg3 from "@/public/images/get-in-touch/3.svg";
import getInTouchImg4 from "@/public/images/get-in-touch/4.svg";
import getInTouchImg5 from "@/public/images/get-in-touch/5.svg";
import getInTouchImg6 from "@/public/images/get-in-touch/6.svg";


export default async function GetInTouch() {

    const sections = [
        {
            title: "1. Free Consultation:",
            description: "Schedule a complimentary consultation & our team will visit your space to discuss your vision for creating a greener environment.",
            imgSrc: getInTouchImg1,
            imgAlt: "Contact Us",
        },
        {
            title: "2. Meeting with Our Team:",
            description: "Our team will collaborate with you to understand your requirements, propose designs and plants, and tailor them to fit your budget.",
            imgSrc: getInTouchImg2,
            imgAlt: "Meeting with Our Team",
        },
        {
            title: "3. Approval to Proceed:",
            description: "After getting your final approval, we'll initiate the execution phase of the project.",
            imgSrc: getInTouchImg3,
            imgAlt: "Approval to Proceed",
        },
        {
            title: "4. Regular Updates & Feedback:",
            description: "Throughout the execution process, our multidisciplinary team will provide regular updates and seek your feedback to ensure the project aligns with your vision.",
            imgSrc: getInTouchImg4,
            imgAlt: "Regular Updates and Feedback",
        },
        {
            title: "5. Completion & Handover:",
            description: "Upon finishing the project, we'll walk through it with you to ensure everything meets your expectations. We'll also provide necessary documents, warranties, and maintenance instructions.",
            imgSrc: getInTouchImg5,
            imgAlt: "Completion and Handover",
        },
        {
            title: "6. Post-Project Services:",
            description: "We offer post-project support to address any issues or adjustments covered under warranty after completion.",
            imgSrc: getInTouchImg6,
            imgAlt: "Post-Project Services",
        },
    ];

    return (
        <div className="px-10 mx-auto">
            <h1 className="mt-3 text-3xl lg:text-4xl font-normal tracking-tight text-center uppercase">Let&apos;s Get Started</h1>
            <div
                className="grid grid-cols-1 gap-2 mt-4 lg:grid-cols-3 md:grid-cols-2 lg:gap-2"
            >
                {sections.map(async (section, index) => (
                    <div key={index} className="flex flex-col items-center rounded-lg">
                        <Image
                            src={section.imgSrc}
                            alt={section.imgAlt}
                            width={400}
                            height={400}
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