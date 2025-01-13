"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";

interface SocialLink {
  id: number;
  name: string;
  url: string;
}

const socialLinks: SocialLink[] = [
  {
    id: 1,
    name: "Facebook",
    url: "https://www.facebook.com/theviriditas",
  },
  {
    id: 2,
    name: "Instagram",
    url: "https://www.instagram.com/theviriditas",
  },
  {
    id: 3,
    name: "YouTube",
    url: "https://www.youtube.com/@ViriditasInterior",
  },
  {
    id: 4,
    name: "TikTok",
    url: "https://www.tiktok.com/@the_viriditas",
  },
  {
    id: 5,
    name: "LinkedIn",
    url: "https://www.linkedin.com/company/theviriditas",
  },
];
export default function LinkPage() {
  const [pageHits, setPageHits] = useState(0);
  const [socialClicks, setSocialClicks] = useState<Record<string, number>>({
    facebook: 0,
    instagram: 0,
    youtube: 0,
    tiktok: 0,
    linkedin: 0,
  });

  const handleSocialClick = (name: string) => {
    setSocialClicks((prev) => ({
      ...prev,
      [name]: prev[name] + 1,
    }));
  };

  useEffect(() => {
    setPageHits((prev) => prev + 1);
  }, []);

  return (
    <div className="card mx-auto max-w-md bg-base-100 p-4 shadow-md">
      <h1 className="card-title mb-4">Social Links</h1>
      <div className="stats mb-4 shadow">
        <div className="stat">
          <div className="stat-title">Page hits</div>
          <div className="stat-value">{pageHits}</div>
        </div>
      </div>
      <ul className="flex flex-col gap-2">
        {socialLinks.map((social, index) => (
          <li
            key={index}
            className="flex items-center gap-2 bg-base-200 p-2 rounded-full shadow-sm"
          >
              <SocialIcon url={social.url} />
              <Link
                className="upper link link-accent no-underline"
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleSocialClick(social.name.toLowerCase())}
              >
                {social.name}
              </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
