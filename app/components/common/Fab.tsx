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

    return isVisible ? (
      <div className="fixed bottom-4 right-0 z-40 px-4">
        <button
          onClick={handleChatFabClick}
          className="rounded-full bg-blue-500 p-2 font-bold text-white shadow-lg hover:bg-blue-700"
          aria-label="Chat"
          title="Chat"
        >
          <MessageSquareDot size={24} className="inline-block" /> Chat with us
        </button>
      </div>
    ) : null;
}