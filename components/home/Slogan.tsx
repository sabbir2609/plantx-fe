"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Slogan() {
    const [index, setIndex] = useState(0);
    const words = ['Home', 'Indoor', 'Outdoor', 'Office', 'Hotel'];

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 2000);
        return () => clearInterval(interval);
    }, [words.length]);

    return (
        <div className="p-4 lg:my-6 text-4xl font-semibold text-center lg:text-6xl">
            <div className="block md:inline">We Design Your </div>
            <AnimatePresence mode='wait'>
                <motion.div
                    key={index}
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -20, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-block"
                >
                    {words[index]}
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
