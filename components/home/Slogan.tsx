"use client";

import { TypeAnimation } from 'react-type-animation';

export default function Slogan() {
    return (
        <div className="bg-base-100 text-center text-lg font-semibold">
            <TypeAnimation
                sequence={[
                    // Same substring at the start will only be typed out once, initially
                    'We Design Your Home',
                    2000, // Pause for 1 second
                    'We Design Your Indoor',
                    2000, // Pause for 1 second
                    'We Design Your Outdoor',
                    2000,
                    'We Design Your Office',
                    2000,
                    'We Design Your Hotel',
                    3000,
                ]}
                speed={30}
                repeat={Infinity}
            />
        </div>
    );
}