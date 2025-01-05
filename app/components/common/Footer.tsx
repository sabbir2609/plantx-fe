import Link from "next/link";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
    const contactInfo = [
      {
        address: "H-36, R-2, Block-B, Aftabnagar, Dhaka, Bangladesh",
        email: "hello@thviriditas.com",
        phone: "(+880)1918-426908",
      },
    ];
    const SocialLinks = [
      {
        name: "Facebook",
        url: "https://facebook.com/theviriditas",
        icon: <Facebook size={20} />,
      },
      {
        name: "Instagram",
        url: "https://instagram.com/theviriditas",
        icon: <Instagram size={20} />,
      },
      {
        name: "Youtube",
        url: "https://youtube.com/@ViriditasInterior",
        icon: <Youtube size={20} />,
      },
      {
        name: "Linkedin",
        url: "https://linkedin.com/company/theviriditas",
        icon: <Linkedin size={20} />,
      },
    ];
  return (
    <footer className="bg-base-300 text-base-content mt-4">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Company Info */}
          <div>
            <h3 className="font-bold">Viriditas</h3>
            <p className="mt-2 text-sm">
              Creating sustainable and beautiful interior landscapes since 2024.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold">Quick Links</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <Link href="/about" className="text-sm hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm hover:text-primary">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm hover:text-primary">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold">Contact</h3>
            <ul className="mt-2 space-y-2 text-sm">
              {contactInfo.map((info, index) => (
                <li key={index} className="flex flex-col">
                  <p>{info.address}</p>
                  <Link href={`mailto:${info.email}`} className="text-accent">{info.email}</Link>
                  <Link href={`tel:${info.phone}`} className="text-accent">{info.phone}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-bold">Follow Us</h3>
            <div className="mt-2 flex space-x-4">
              {SocialLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-primary"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t border-base-content/10 pt-8">
          <div className="flex flex-col items-center justify-between space-y-4 text-sm md:flex-row md:space-y-0">
            <p>
              &copy; {new Date().getFullYear()} Viriditas. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <Link href="/privacy-policy" className="hover:text-primary">
                Privacy Policy
              </Link>
              <Link href="/terms-conditions" className="hover:text-primary">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}