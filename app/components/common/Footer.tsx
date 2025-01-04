import Link from "next/link";
import { Facebook, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-base-300 text-base-content">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Company Info */}
          <div>
            <h3 className="font-bold">Viriditas</h3>
            <p className="mt-2 text-sm">
              Creating sustainable and beautiful interior landscapes since 2020
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
              <li>Email: hello@viriditas.com</li>
              <li>Phone: (123) 456-7890</li>
              <li>Address: 123 Green Street</li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-bold">Follow Us</h3>
            <div className="mt-2 flex space-x-4">
              <Link
                href="https://facebook.com/theviriditas"
                className="hover:text-primary"
              >
                <Facebook size={20} />
              </Link>
              <Link
                href="https://instagram.com/theviriditas"
                className="hover:text-primary"
              >
                <Instagram size={20} />
              </Link>
              <Link
                href="https://youtube.com/@ViriditasInterior"
                className="hover:text-primary"
              >
                <Youtube size={20} />
              </Link>
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