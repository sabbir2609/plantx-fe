"use client";

import { useState, useEffect, useMemo } from 'react';

export default function Slogan() {
    const words = useMemo(() => ['Home', 'Indoor', 'Outdoor', 'Office', 'Hotel'], []);
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [blink, setBlink] = useState(true);

    useEffect(() => {
        if (subIndex === words[index].length + 1 && !isDeleting) {
            setTimeout(() => setIsDeleting(true), 1500);
        } else if (subIndex === 0 && isDeleting) {
            setIsDeleting(false);
            setIndex((prevIndex) => (prevIndex + 1) % words.length);
        }

        const timeout = setTimeout(() => {
            setSubIndex((prevSubIndex) =>
                isDeleting ? prevSubIndex - 1 : prevSubIndex + 1
            );
        }, isDeleting ? 80 : 120);

        return () => clearTimeout(timeout);
    }, [subIndex, isDeleting, words, index]);

    useEffect(() => {
        const blinkTimeout = setTimeout(() => setBlink((prev) => !prev), 400);
        return () => clearTimeout(blinkTimeout);
    }, [blink]);

    return (
        <div className="relative py-12 lg:py-20">
            <div className="absolute inset-0"></div>
            <div className="relative container mx-auto px-4">
                <div className="text-center">
                    <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold tracking-tight">
                        <span className="mr-3">We Design Your</span>
                        <span className="inline-block min-w-[7ch] text-left text-primary">
                            {`${words[index].substring(0, subIndex)}${blink ? '|' : ''}`}
                        </span>
                    </h2>
                </div>
            </div>
        </div>
    );
}