"use client";

import { useState, useEffect } from 'react';

export default function Slogan() {
    const [index, setIndex] = useState(0);
    const words = ['Home', 'Indoor', 'Outdoor', 'Office', 'Hotel'];
    const [fade, setFade] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(true);
            setTimeout(() => {
                setIndex((prevIndex) => (prevIndex + 1) % words.length);
                setFade(false);
            }, 500); // Matches the duration of the fade animation
        }, 3000);
        return () => clearInterval(interval);
    }, [words.length]);

    return (
        <div className="p-4 lg:my-6 text-4xl font-semibold text-center lg:text-6xl">
            <div className="block md:inline">We Design Your </div>
            <div
                className={`inline-block transition-opacity duration-500 ${fade ? 'opacity-0' : 'opacity-100'
                    }`}
            >
                {words[index]}
            </div>
        </div>
    );
}
