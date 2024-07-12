export default function About() {
    return (
        <div className="relative">
            <div
                className="absolute inset-0 bg-no-repeat bg-cover"
                style={{
                    backgroundImage: "url('/images/bg/bg_10.jpg')",
                    backgroundPosition: 'right',
                    filter: 'blur(2px)',
                }}
            >
            </div>
            <div className="relative">
                <div className="w-full p-8 bg-opacity-50">
                    <h1 className={`text-3xl lg:text-5xl text-white italic`}>
                        "Elevate your space with Nature"
                    </h1>
                    <div className="w-20 h-2 my-4 bg-green-800"></div>
                    <p className={`text-lg lg:text-2xl font-normal text-white`}>
                        At Viriditas, we create sustainable, plant-based urban landscapes to enhance well-being and promote environmental care. We committed to combat climate change, improve air quality, and make cities greener, healthier, and more vibrant for everyone.
                    </p>
                </div>
            </div>
        </div>
    );
}