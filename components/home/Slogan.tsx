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
        <div className="text-center text-4xl lg:text-6xl font-semibold p-4">
            <div className="md:inline block">We Design Your </div>
            <AnimatePresence mode='wait'>
                <motion.div
                    key={index}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-block"
                >
                    {words[index]}
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
