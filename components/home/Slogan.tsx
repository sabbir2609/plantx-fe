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
            setTimeout(() => setIsDeleting(true), 1000);
        } else if (subIndex === 0 && isDeleting) {
            setIsDeleting(false);
            setIndex((prevIndex) => (prevIndex + 1) % words.length);
        }

        const timeout = setTimeout(() => {
            setSubIndex((prevSubIndex) =>
                isDeleting ? prevSubIndex - 1 : prevSubIndex + 1
            );
        }, isDeleting ? 100 : 150);

        return () => clearTimeout(timeout);
    }, [subIndex, isDeleting, words, index]);

    useEffect(() => {
        const blinkTimeout = setTimeout(() => setBlink((prev) => !prev), 500);
        return () => clearTimeout(blinkTimeout);
    }, [blink]);

    return (
        <div className="p-4 lg:my-6 text-4xl font-semibold text-center lg:text-6xl flex justify-center">
            <div>
                <span>Redesign Your</span>
                <span className="inline-block w-[7ch]">
                    {`${words[index].substring(0, subIndex)}${blink ? '|' : ' '}`}
                </span>
            </div>
        </div>
    );
}