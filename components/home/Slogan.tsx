"use client";


import { TypeAnimation } from 'react-type-animation';

export default function Slogan() {
    return (
        <div
            className="text-center text-4xl lg:text-6xl font-semibold m-4"
        >
            <div className="md:inline block">We Design Your </div>
            <TypeAnimation
                sequence={[
                    'Home',
                    5000,
                    'Indoor',
                    5000,
                    'Outdoor',
                    5000,
                    'Office',
                    5000,
                    'Hotel',
                    5000,
                ]}
                speed={40}
                repeat={Infinity}
            />
        </div>
    );
}