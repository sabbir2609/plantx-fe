"use client";

import { ArrowUp, MessageSquareDot } from "lucide-react";

export default function Footer() {

    const handleBackToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleChatFabClick = () => {
        window.open('https://m.me/350812004777614/');
    };

    return (
        <footer className="footer sticky bottom-0 z-30 bg-base-200 text-base-content">
            <nav className="grid-flow-col gap-2 md:place-self-center md:justify-self-end pe-2">
                <button onClick={handleBackToTop} className="btn btn-circle btn-ghost">
                    <ArrowUp size={20} className="inline-block" />
                </button>
                <button onClick={handleChatFabClick} className="btn btn-circle btn-ghost">
                    <MessageSquareDot size={20} className="inline-block" />
                </button>
            </nav>
        </footer>
    );
};