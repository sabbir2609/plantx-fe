"use client";

import { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';

export default function Slogan() {
    const [textColor, setTextColor] = useState('green');
    return (
        <div
            className="text-center text-5xl lg:text-7xl font-semibold m-4"
            style={{ color: textColor }}
        >
            <div className="md:inline block">We Design Your </div>
            <TypeAnimation
                sequence={[
                    'Home',
                    5000,
                    () => setTextColor('#32de84'),
                    'Indoor',
                    5000,
                    () => setTextColor('#17B169'),
                    'Outdoor',
                    5000,
                    () => setTextColor('#90EE90'),
                    'Office',
                    5000,
                    () => setTextColor('#018749'),
                    'Hotel',
                    5000,
                    () => setTextColor('#228B22'),
                ]}
                speed={40}
                repeat={Infinity}
            />
        </div>
    );
}