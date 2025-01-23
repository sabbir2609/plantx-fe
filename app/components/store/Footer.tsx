import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-green-50 text-gray-700">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-green-800">Plantopia</h3>
            <p className="text-sm">
              Your one-stop destination for all things plants. Bringing nature
              closer to your home.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-green-800">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/shop"
                  className="transition-colors hover:text-green-600"
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="transition-colors hover:text-green-600"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="transition-colors hover:text-green-600"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="transition-colors hover:text-green-600"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-green-800">Contact Us</h4>
            <ul className="space-y-2 text-sm">
              <li>Email: info@plantopia.com</li>
              <li>Phone: (555) 123-4567</li>
              <li>Address: 123 Green Street, Garden City</li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-green-800">Follow Us</h4>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-gray-600 transition-colors hover:text-green-600"
              >
                <Facebook size={20} />
              </Link>
              <Link
                href="#"
                className="text-gray-600 transition-colors hover:text-green-600"
              >
                <Twitter size={20} />
              </Link>
              <Link
                href="#"
                className="text-gray-600 transition-colors hover:text-green-600"
              >
                <Instagram size={20} />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t border-gray-200 pt-8 text-center text-sm">
          <p>© {new Date().getFullYear()} Plantopia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
