import { Libre_Baskerville } from 'next/font/google';


const title_font = Libre_Baskerville({
    weight: '700',
    subsets: ['latin'],
    display: 'swap',
});

export default function About() {
    return (
        <div className="relative">
            <div
                className="absolute inset-0 bg-center bg-no-repeat bg-cover"
                style={{
                    backgroundImage: "url('/images/bg/bg_5.jpg')",
                    filter: "blur(4px)"
                }}
            >
            </div>
            <div className="relative">
                <div className="w-full p-10 bg-black bg-opacity-50">
                    <h1 className={`text-2xl lg:text-6xl font-bold text-white ${title_font.className}`}>
                        Elevate your space with <span className='font-serif italic'>Nature</span>
                    </h1>
                    <div className="w-20 h-2 my-4 bg-green-500"></div>
                    <p className={`text-lg lg:text-2xl font-normal font-serif text-white`}>
                        At Viriditas, we create sustainable, plant-based urban landscapes to enhance well-being and promote environmental care. We committed to combat climate change, improve air quality, and make cities greener, healthier, and more vibrant for everyone.
                    </p>
                </div>
            </div>
        </div>
    );
}