"use client";

import { Libre_Baskerville } from 'next/font/google';
import { TypeAnimation } from 'react-type-animation';

const title_font = Libre_Baskerville({
    weight: '700',
    subsets: ['latin'],
    display: 'swap',
});

export default function Slogan() {
    return (
        <div
            className={`text-center text-4xl lg:text-6xl font-semibold p-4 text-black ${title_font.className}`}
        >
            <div className="md:inline block">We Design Your </div>
            <TypeAnimation
                sequence={[
                    'Home',
                    2000,
                    'Indoor',
                    2000,
                    'Outdoor',
                    2000,
                    'Office',
                    2000,
                    'Hotel',
                    2000,
                ]}
                speed={40}
                repeat={Infinity}
            />
        </div>
    );
}