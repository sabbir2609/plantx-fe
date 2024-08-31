import Image from 'next/image';
import { Luckiest_Guy } from "next/font/google";

const Heading_Font = Luckiest_Guy({
    weight: '400',
});

export default function About() {
    return (
        <div className="bg-[url('/images/bg/bg_10.avif')] bg-cover bg-right bg-no-repeat lg:p-12 shadow-md">
            <div className="w-full px-6 py-4 bg-opacity-50 flex flex-col items-center justify-center">
                <h1 className={`${Heading_Font.className} text-3xl lg:text-5xl text-white text-center my-4`}>
                    &quot;Elevate your space with Nature&quot;
                </h1>
                <p className={`text-lg lg:text-2xl font-normal text-white text-center leading-6`}>
                    At Viriditas, we create sustainable, plant-based urban landscapes to enhance well-being and promote environmental care. We committed to combat climate change, improve air quality, and make cities greener, healthier, and more vibrant for everyone.
                </p>
            </div>
        </div>
    );
}