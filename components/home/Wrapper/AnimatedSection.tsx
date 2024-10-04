"use client";

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { useInView } from 'react-intersection-observer';

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

interface AnimatedSectionProps {
    children: ReactNode;
    delay?: number;
    direction?: 'up';
}

export default function AnimatedSection({ children, delay = 0, direction = 'up' }: AnimatedSectionProps) {
    const { ref, inView } = useInView({
        triggerOnce: true, // Trigger animation only once
        threshold: 0.1, // Trigger when 10% of the element is in view
    });

    const variants = fadeInUp;

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={variants}
            transition={{ duration: 0.5, delay }}
            className="z-10"
        >
            {children}
        </motion.div>
    );
}