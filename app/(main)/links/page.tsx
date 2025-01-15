import { TrackLink } from "@/app/components/utils";
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
  
  return (
    <div className="card mx-auto max-w-md bg-base-100 p-4 shadow-md">
      <h1 className="card-title mb-4">Social Links</h1>
      <ul className="flex flex-col gap-2">
        {socialLinks.map((social, index) => (
          <li
            key={index}
            className="flex items-center gap-2 rounded-full bg-base-200 p-2 shadow-sm"
          >
            <SocialIcon url={social.url} />

            <TrackLink href={social.url}>
              {social.name}
            </TrackLink>
            
          </li>
        ))}
      </ul>
    </div>
  );
}
