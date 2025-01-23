import Link from "next/link";

export default function Faq() {
  const faqData = [
    {
      question: "What is Viriditas?",
      answer:
        "Viriditas is a plant-based interior design company focused on transforming spaces with natural greenery and promoting sustainability. We offer a variety of solutions, including vertical gardens, water gardens, terrariums, and decor to create vibrant, eco-friendly environments for homes and workplaces.",
    },
    {
      question: "Do you provide installation services?",
      answer:
        "Yes, we offer professional installation services for all decor projects. Our team ensures everything is expertly installed and thriving. Explore our Residential and Commercial services for more details.",
    },
    {
      question: "Do you offer customization for planters?",
      answer:
        "Yes, we offer fully customized services to meet your specific needs. Whether you need a unique design, color, or size, our team will work closely with you to bring your vision to life. Please contact us through our Services page to discuss your requirements.",
    },
    {
      question: "Can I collaborate with Viriditas for a project?",
      answer: (
        <>
          Certainly! We are always excited to partner with individuals and
          businesses that share our vision and values. Please connect with us
          via our{" "}
          <Link href="/contact/" className="text-blue-600">
            Contact page
          </Link>{" "}
          to explore potential collaboration opportunities.
        </>
      ),
    },
  ];

  return (
    <div className="mx-auto relative p-4">
      <h2 className="mb-8 text-center">
        <span className="text-3xl font-bold">FAQ</span>
      </h2>

      <div className="mx-auto max-w-3xl space-y-4">
        {faqData.map((faq, index) => (
          <div key={index} className="collapse collapse-arrow bg-base-200">
            <input type="checkbox" />
            <div className="collapse-title text-lg font-medium">
              {faq.question}
            </div>
            <div className="collapse-content bg-base-300">
              <p className="text-base-content/80 py-1">
              {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
