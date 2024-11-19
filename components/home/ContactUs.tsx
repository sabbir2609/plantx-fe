import { Mail, MapPin, PhoneCall } from "lucide-react";
import { ContactForm } from ".";
import { SocialIcon } from 'react-social-icons'

export default function ContactUs() {
  const contactInfo = [
    {
      "address": "Gp Ja, Mohakhali, Dhaka, Bangladesh",
      "email": "theviriditas@gmail.com",
      "phone": +8801918426908,
    }]

  const socialLinks = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/theviriditas",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/the_viriditas",
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/ViriditasInterior",
    },
    {
      name: "TikTok",
      url: "https://www.tiktok.com/theviriditas",
    }
  ];

  return (
    <div className="grid w-full grid-cols-1 gap-5 rounded-md p-4 md:grid-cols-2">
      <div className="flex select-text flex-col justify-center rounded-lg bg-opacity-75 p-8">
        <h2 className="mb-6 text-4xl font-extrabold text-center pb-2">Contact Us</h2>

        {contactInfo &&
          contactInfo.map((info, index) => (
            <div key={index} className="mb-4 space-y-4">
              <p className="flex items-center text-lg">
                <MapPin size={24} className="inline-block" />
                <span className="ml-3">{info.address}</span>
              </p>
              <p className="flex items-center text-lg">
                <Mail size={24} className="inline-block" />
                <a
                  href={`mailto:${info.email}`}
                  className="ml-3 underline hover:text-green-400"
                >
                  {info.email}
                </a>
              </p>
              <p className="flex items-center text-lg">
                <PhoneCall size={24} className="inline-block" />
                <a
                  href={`tel:${info.phone}`}
                  className="ml-3 underline hover:text-green-400"
                >
                  {info.phone}
                </a>
              </p>
            </div>
          ))}

        <h3 className="text-lg font-bold text-center pt-5">Follow us on:</h3>
        <div className="flex space-x-4 justify-center py-4">
          {socialLinks.map((social, index) => (
            <SocialIcon
              key={index}
              url={social.url}
              target="_blank"
              rel="noopener noreferrer"
              // fgColor="#fff"
              // bgColor="#333"
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
