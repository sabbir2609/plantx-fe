"use client";

import { useState } from "react";
import Link from "next/link";

interface TrackLinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}

export default function TrackLink({
  href,
  className,
  children,
}: TrackLinkProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    try {
      const payload = {
        link: href,
        referrer: document?.referrer || null,
        user_agent: navigator?.userAgent,
        timestamp: new Date().toISOString(),
      };

      console.log(payload);

      const endpoint = process.env.NEXT_PUBLIC_HOST
        ? `${process.env.NEXT_PUBLIC_HOST}/track/tracklinks/`
        : "http://localhost:8000/api/track/tracklinks/";

      await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
    } catch (error) {
      console.error("Error tracking link click:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={`transition-opacity duration-200 ${isLoading ? "opacity-70" : ""} ${className || "hover:text-primary-focus text-primary underline"}`}
    >
      {children}
    </Link>
  );
}
