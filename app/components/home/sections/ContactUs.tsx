import { Mail, MapPin, PhoneCall } from "lucide-react";
import { ContactForm } from "..";
import { SocialIcon } from 'react-social-icons';

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
    <div className="grid w-full grid-cols-1 gap-5 p-4 md:grid-cols-2 rounded-md">
      <div className="flex select-text flex-col justify-center rounded-lg bg-base-200 p-6 shadow-md">
        <h2 className="mb-6 text-4xl font-extrabold text-center">Contact Us</h2>

        <div className="flex items-center space-x-2 mb-4">
          <MapPin size={20} />
          <p className="text-lg">{contactInfo[0].address}</p>
        </div>
        <div className="flex items-center space-x-2 mb-4">
          <Mail size={20} />
          <p className="text-lg">{contactInfo[0].email}</p>
        </div>
        <div className="flex items-center space-x-2 mb-4">
          <PhoneCall size={20} />
          <p className="text-lg">{contactInfo[0].phone}</p>
        </div>

        <h3 className="text-lg font-bold text-center">Follow us on:</h3>
        <div className="flex justify-center space-x-4 py-4">
          {socialLinks.map((social, index) => (
            <SocialIcon
              key={index}
              url={social.url}
              target="_blank"
              rel="noopener noreferrer"
              fgColor="#fff"
              bgColor="#333"
              className="transition-transform transform hover:scale-110"
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