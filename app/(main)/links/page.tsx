"use client";

import { TrackLink } from "@/app/components/utils";
import Loading from "@/app/loading";
import Image from "next/image";
import { useEffect, useState } from "react";

interface SocialLink {
  id: number;
  name: string;
  url: string;
  icon: string;
}

// Social Links
const socialLinks: SocialLink[] = [
  {
    id: 1,
    name: "Facebook",
    url: "https://www.facebook.com/theviriditas",
    icon: "/social-icons/fb.svg",
  },
  {
    id: 2,
    name: "Instagram",
    url: "https://www.instagram.com/theviriditas",
    icon: "/social-icons/ig.svg",
  },
  {
    id: 3,
    name: "YouTube",
    url: "https://www.youtube.com/@ViriditasInterior",
    icon: "/social-icons/yt.svg",
  },
  {
    id: 4,
    name: "TikTok",
    url: "https://www.tiktok.com/@the_viriditas",
    icon: "/social-icons/tk.svg",
  },
  {
    id: 5,
    name: "LinkedIn",
    url: "https://www.linkedin.com/company/theviriditas",
    icon: "/social-icons/in.svg",
  },
];

export default function LinkPage() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const title = "Social Links - Viriditas";
    document.title = title;

    //mount
    setIsLoading(true);

    //payload
    const payload = {
      link: "https://theviriditas.com/links",
      referrer: document?.referrer || null,
      user_agent: navigator?.userAgent,
      timestamp: new Date().toISOString(),
    };

    try {
      fetch(`${process.env.NEXT_PUBLIC_HOST}/track/tracklinks/`, {
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
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="card mx-auto max-w-md bg-base-100 p-4">
          <h1 className="card-title mb-6 justify-center text-3xl font-bold">
            Social Links
          </h1>
          <ul className="flex flex-col gap-2">
            {socialLinks.map((social, index) => (
              <li
                key={index}
                className="flex items-center gap-2 rounded-full bg-base-200 p-2 shadow-sm transition-all duration-300 hover:scale-105 hover:bg-primary hover:text-white"
              >
                <TrackLink
                  href={social.url}
                  className="flex flex-row items-center justify-between gap-2 no-underline"
                >
                  <Image
                    src={social.icon}
                    height={26}
                    width={26}
                    alt={social.name}
                    className="h-8 w-8 rounded-full"
                  />
                  <span className="text-lg font-semibold">{social.name}</span>
                </TrackLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
