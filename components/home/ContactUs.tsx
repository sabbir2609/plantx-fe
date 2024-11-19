import { Fetch } from "@/app/lib";
import { Mail, MapPin, PhoneCall } from "lucide-react";
import { ContactForm } from ".";

interface ContactInfo {
  address: string;
  email: string;
  phone: number;
}

export default async function ContactUs() {
  const data = await Fetch({ endpoint: "home/contact-info/" });
  const contactInfo: ContactInfo[] = data;

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
      </div>
      <div className="lg:mt-0">
        <ContactForm />
      </div>
    </div>
  );
}
