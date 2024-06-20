"use client"

import { MessageSquareDot } from 'lucide-react';
import React from 'react';

export default function ChatPlugin() {
    const handleChatFabClick = () => {
        // Open the chat link
        window.open('https://m.me/350812004777614/');
    };

    return (
        <div className='fixed bottom-14 right-0 p-4'>
            <button onClick={handleChatFabClick} className='bg-blue-500 hover:bg-blue-700 text-white font-bold p-4 rounded-full shadow-lg'>
                {/* <img src="/static/messenger_logo.svg" alt="Chat Icon" className='h-10 w-10' /> */}
                <MessageSquareDot />
            </button>
        </div >
    );
}