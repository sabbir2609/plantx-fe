"use client";

import { MessageSquareDot } from 'lucide-react';
import React, { useState, useEffect } from 'react';

export default function Fab() {
    const [isVisible, setIsVisible] = useState(false);
    let timeoutId: NodeJS.Timeout;

    const handleChatFabClick = () => {
        window.open('https://m.me/350812004777614/');
    };

    const handleScroll = () => {
        setIsVisible(true);
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            setIsVisible(false);
        }, 3000);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(timeoutId);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className={`fixed bottom-4 right-0 px-4 z-40 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <button onClick={handleChatFabClick} className='bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded-full shadow-lg' aria-label="Chat" title="Chat">
                <MessageSquareDot size={24} className="inline-block" /> Chat with us
            </button>
        </div>
    );
}