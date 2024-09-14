import getInTouchImg1 from "@/public/images/get-in-touch/1.png";
import getInTouchImg2 from "@/public/images/get-in-touch/2.png";
import getInTouchImg3 from "@/public/images/get-in-touch/3.png";
import getInTouchImg4 from "@/public/images/get-in-touch/4.png";
import getInTouchImg5 from "@/public/images/get-in-touch/5.png";
import getInTouchImg6 from "@/public/images/get-in-touch/6.png";
import Image from "next/image";
import AnimatedSection from "./Wrapper/AnimatedSection";

const sections = [
  {
    title: "1. Free Consultation:",
    description:
      "Schedule a complimentary consultation & our team will visit your space to discuss your vision for creating a greener environment.",
    imgSrc: getInTouchImg1,
    imgAlt: "Contact Us",
  },
  {
    title: "2. Meeting with Our Team:",
    description:
      "Our team will collaborate with you to understand your requirements, propose designs and plants, and tailor them to fit your budget.",
    imgSrc: getInTouchImg2,
    imgAlt: "Meeting with Our Team",
  },
  {
    title: "3. Approval to Proceed:",
    description:
      "After getting your final approval, we'll initiate the execution phase of the project.",
    imgSrc: getInTouchImg3,
    imgAlt: "Approval to Proceed",
  },
  {
    title: "4. Regular Updates & Feedback:",
    description:
      "Throughout the execution process, our multidisciplinary team will provide regular updates and seek your feedback to ensure the project aligns with your vision.",
    imgSrc: getInTouchImg4,
    imgAlt: "Regular Updates and Feedback",
  },
  {
    title: "5. Completion & Handover:",
    description:
      "Upon finishing the project, we'll walk through it with you to ensure everything meets your expectations. We'll also provide necessary documents, warranties, and maintenance instructions.",
    imgSrc: getInTouchImg5,
    imgAlt: "Completion and Handover",
  },
  {
    title: "6. Post-Project Services:",
    description:
      "We offer post-project support to address any issues or adjustments covered under warranty after completion.",
    imgSrc: getInTouchImg6,
    imgAlt: "Post-Project Services",
  },
];

export default function GetInTouch() {
  return (
    <div className="mx-auto max-w-7xl px-4">
      <h1 className="mb-6 text-center text-4xl font-bold uppercase transition-all duration-300 hover:scale-105 hover:text-green-500">
        Let&apos;s Get Started
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {sections.map((section, index) => (
          <AnimatedSection key={index} delay={index * 0.1}>
            <div className="group relative m-4 overflow-hidden rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <span className="absolute top-0 z-0 h-20 w-20 rounded-full bg-gradient-to-bl from-lime-400 via-green-600 to-teal-700 opacity-0 transition-all duration-500 group-hover:scale-[10] group-hover:opacity-100"></span>
              <div className="relative z-10">
                <Image
                  src={section.imgSrc}
                  alt={section.imgAlt}
                  width={400}
                  height={400}
                  className="h-52 w-full object-contain"
                />
                <div className="p-4 text-center">
                  <h2 className="mb-2 text-2xl font-semibold tracking-tighter">
                    {section.title}
                  </h2>
                  <p className="text-base leading-6">{section.description}</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}