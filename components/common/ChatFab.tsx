"use client"

import { MessageSquareDot } from 'lucide-react';
import React from 'react';
import Image from 'next/image';

export default function ChatPlugin() {
    const handleChatFabClick = () => {
        window.open('https://m.me/350812004777614/');
    };

    return (
        <div className='fixed bottom-4 right-0 px-4 z-40'>
            <button onClick={handleChatFabClick} className='bg-base-100 hover:bg-base-200 font-bold p-2 rounded-full shadow-lg'>
                <Image
                    height={24}
                    width={24}
                    src="/static/messenger_logo.svg"
                    alt="Chat Icon"
                    className='h-10 w-10' />
                {/* <MessageSquareDot size={24} className="inline-block" /> */}
            </button>
        </div >
    );
}