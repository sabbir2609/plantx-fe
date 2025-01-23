import { Mail, MapPin, PhoneCall } from "lucide-react";
import { ContactForm } from "..";
import { SocialIcon } from 'react-social-icons';
import Link from "next/link";

export default function ContactUs() {
  const contactInfo = [
    {
      address: "H-36, R-2, Block-B, Aftabnagar, Dhaka, Bangladesh",
      email: "hello@thviriditas.com",
      phone: "(+880)1918-426908",
    },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/theviriditas",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/theviriditas",
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/@ViriditasInterior",
    },
    {
      name: "TikTok",
      url: "https://www.tiktok.com/@the_viriditas",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/theviriditas",
    },
  ];

  return (
    <div className="grid w-full grid-cols-1 gap-5 rounded-md p-4 md:grid-cols-2">
      <div className="flex select-text flex-col justify-center rounded-lg bg-base-200 p-6 shadow-md">
        <h2 className="mb-6 text-center text-4xl font-extrabold">Contact Us</h2>

        <div className="mb-4 flex items-center space-x-2">
          {/* <MapPin size={20} /> */}
          <p className="text-lg text-wrap">{contactInfo[0].address}</p>
        </div>
        <div className="mb-4 flex items-center space-x-2">
          <Mail size={20} />
          <Link
            className="text-lg text-primary"
            href={`mailto:${contactInfo[0].email}`}
          >
            {contactInfo[0].email}
          </Link>
        </div>
        <div className="mb-4 flex items-center space-x-2">
          <PhoneCall size={20} />
          <Link
            className="text-lg text-primary"
            href={`tel:${contactInfo[0].phone}`}
          >
            {contactInfo[0].phone}
          </Link>
        </div>

        <h3 className="text-center text-lg font-bold">Follow us on:</h3>
        <div className="flex justify-center space-x-4 py-4">
          {socialLinks.map((social, index) => (
            <SocialIcon
              key={index}
              url={social.url}
              target="_blank"
              rel="noopener noreferrer"
              fgColor="#fff"
              bgColor="#333"
              className="transform transition-transform hover:scale-110"
              style={{ height: 40, width: 40 }}
            />
          ))}
        </div>
      </div>
      <div className="lg:mt-0">
        <ContactForm />
      </div>
    </div>
  );
}