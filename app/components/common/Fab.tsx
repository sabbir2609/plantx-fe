"use client";

import { MessageSquareDot } from "lucide-react";
import React, { useState, useEffect } from "react";

export default function Fab() {
  const [isVisible, setIsVisible] = useState(false);
  let timeoutId: NodeJS.Timeout;

  const handleChatFabClick = () => {
    window.open("https://m.me/350812004777614/");
  };

  const handleScroll = () => {
    setIsVisible(true);
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      setIsVisible(false);
    }, 3000);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={`fixed bottom-4 right-4 z-40 transition-all duration-300 ease-in-out ${isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"} `}
    >
      <button
        onClick={handleChatFabClick}
        className="group relative flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-primary to-accent px-4 py-3 font-medium text-white shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl active:scale-95"
        aria-label="Chat with us"
      >
        <span className="absolute inset-0 bg-primary/20 opacity-0 transition-opacity group-hover:opacity-100" />
        <MessageSquareDot className="h-5 w-5 animate-pulse" />
        <span className="pr-1">Chat with us</span>
      </button>
    </div>
  );
}
