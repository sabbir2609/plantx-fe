"use client";

import { useEffect } from "react";

export default function SearchPage() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cse.google.com/cse.js?cx=b49da84e33b57481a";
    script.async = true;
    document.body.appendChild(script);

    // Add custom CSS for dark mode
    const style = document.createElement("style");
    style.innerHTML = `
      @media (prefers-color-scheme: dark) {
        .gssb_a { background-color: #1a202c; color: #cbd5e0; }
      }
    `;
    document.head.appendChild(style);
  }, []);

  return (
    <div className="flex flex-col min-h-screen p-4">
      <h1 className="mb-6 text-4xl font-bold text-center">Search</h1>
      <div className="w-full max-w-2xl">
        <div className="gcse-search"></div>
      </div>
    </div>
  );
}