import { Facebook, Flower2, Instagram, Youtube } from "lucide-react";
import Link from "next/link";


export default async function Footer() {
    return (
      <footer className="mt-2 rounded-t-xl bg-base-200 px-3 pb-2 pt-10 text-base-content lg:px-10">
        <div className="pb-5">
          <Flower2 size={50} />
          <p className="mt-2 font-bold">
            Viriditas.
            <br />
            Providing reliable service since 2024
          </p>
        </div>

        <div className="mx-auto grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-3">
          <nav>
            <h3 className="footer-title mb-2 text-lg font-bold">Company</h3>
            <div className="flex flex-col space-y-2">
              <Link href="/about" className="link-hover">
                About us
              </Link>
              <Link href="/contact" className="link-hover">
                Contact
              </Link>
            </div>
          </nav>

          <nav>
            <h3 className="footer-title mb-2 text-lg font-bold">Legal</h3>
            <div className="flex flex-col space-y-2">
              <Link href="/terms-conditions" className="link-hover">
                Terms of use
              </Link>
              <Link href="/privacy-policy" className="link-hover">
                Privacy policy
              </Link>
            </div>
          </nav>
          <nav>
            {/* <h6 className="footer-title text-lg font-bold mb-2">Social</h6> */}
            <div className="flex space-x-4">
              <Link
                area-label="Instagram"
                title="Instagram"
                href="https://www.instagram.com/the_viriditas"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={24} />
              </Link>
              <Link
                area-label="Facebook"
                title="Facebook"
                href="https://fb.me/theviriditas"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook size={24} />
              </Link>
              <Link
                area-label="Youtube"
                title="Youtube"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Youtube size={24} />
              </Link>
            </div>
          </nav>
        </div>
        <div className="mt-2 text-center lg:text-right">
          <p>© 2024 Viriditas. All rights reserved.</p>
        </div>
      </footer>
    );
}
