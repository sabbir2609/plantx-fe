const faqData = [
    {
        question: "What is Viriditas?",
        answer: "Viriditas is a plant-based decor company dedicated to enhancing spaces with the beauty of nature while promoting sustainability. We offer a wide range of indoor plants, planters, and decor solutions designed to bring life to your home or workspace."
    },
    {
        question: "Do you provide installation services?",
        answer: "Yes, we offer professional installation services for large-scale decor projects. Our team will ensure that your plants are perfectly placed and thriving in their new environment. For more details, check out our Residential and Commercial services."
    },
    {
        question: "Do you offer customization for planters?",
        answer: "Yes, we offer customized planters to meet your specific needs. Whether you need a unique design, color, or size, our team is here to help. Please contact us through our Services page to discuss your requirements."
    },
    {
        question: "Can I collaborate with Viriditas for a project?",
        answer: "Absolutely! We love collaborating with like-minded individuals and businesses. Please reach out to us through our Contact page to discuss potential partnerships or collaborations."
    }
];

export default function Faq() {
    return (
        <div className="px-4 py-8 bg-base-200">
            <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions (FAQ)</h2>
            <div className="max-w-3xl mx-auto space-y-4">
                {faqData.map((faq, index) => (
                    <div key={index} className="collapse collapse-plus bg-base-100 rounded-lg">
                        <input type="checkbox" className="peer" />
                        <div className="collapse-title text-lg font-medium">
                            {faq.question}
                        </div>
                        <div className="collapse-content">
                            <p>{faq.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};