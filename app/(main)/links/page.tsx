"use client";

import { TrackLink } from "@/app/components/utils";
import { TrackPage } from "@/app/lib";
import Image from "next/image";
import { useEffect } from "react";

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
    icon: "/social-icons/Facebook.svg",
  },
  {
    id: 2,
    name: "Instagram",
    url: "https://www.instagram.com/theviriditas",
    icon: "/social-icons/Instagram.svg",
  },
  {
    id: 3,
    name: "YouTube",
    url: "https://www.youtube.com/@ViriditasInterior",
    icon: "/social-icons/YouTube.svg",
  },
  {
    id: 4,
    name: "TikTok",
    url: "https://www.tiktok.com/@the_viriditas",
    icon: "/social-icons/TikTok.svg",
  },
  {
    id: 5,
    name: "LinkedIn",
    url: "https://www.linkedin.com/company/theviriditas",
    icon: "/social-icons/LinkedIn.svg",
  },
];

export default function LinkPage() {
  useEffect(() => {
    const trackVisit = async () => {
      try {
        await TrackPage(window.location.href);
      } catch (error) {
        console.error("Failed to track page visit:", error);
      }
    };

    trackVisit();
  }, []);

  return (
    <div className="card mx-auto max-w-md bg-base-100 p-4">
      <title>Social Links - Viriditas</title>
      <h1 className="card-title mb-6 justify-center text-3xl font-bold">
        Social Links
      </h1>
      <ul className="flex flex-col gap-2">
        {socialLinks.map((social, index) => (
          <li
            key={index}
            className="flex items-center gap-2 rounded-full bg-base-200 p-2 shadow-sm transition-all duration-300 hover:scale-105 hover:bg-primary hover:text-white"
          >
            <TrackLink href={social.url} className="flex flex-row items-center justify-between gap-2 no-underline">
              <Image
                src={social.icon}
                height={26}
                width={26}
                alt={social.name}
                className="h-8 w-8 outline rounded-full"
              />
              <span className="text-lg font-semibold">{social.name}</span>
            </TrackLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
