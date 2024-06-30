"use client";

import { TypeAnimation } from 'react-type-animation';

export default function Slogan() {
    return (
        <div
            className={`text-center text-4xl lg:text-6xl font-semibold p-4`}
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