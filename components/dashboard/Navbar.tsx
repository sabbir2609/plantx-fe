import { ThemeChange } from "@/components/common";
import { Instagram, Phone } from "lucide-react";
import Link from "next/link";

export default async function Navbar() {
  return (
    <div className="navbar sticky top-0 z-40 h-14 min-h-0 bg-base-300 bg-opacity-30 backdrop-blur-lg backdrop-filter">
      <div className="navbar-start">
        <label htmlFor="my-drawer" className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-5 w-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
        <div className="flex-1">
          <Link href="/" className="btn btn-ghost text-xl">
            Viriditas
          </Link>
        </div>
      </div>
      <div className="navbar-end">
        <ThemeChange />
        {/* <button className="btn btn-ghost btn-circle">
                    <Search />
                </button> */}
        <Link
          className="btn btn-circle btn-ghost"
          area-label="Instagram"
          title="Instagram"
          href="https://www.instagram.com/the_viriditas/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram />
        </Link>
        <Link
          className="btn btn-circle btn-ghost"
          area-label="Phone"
          title="Phone"
          href="tel:+8801918426908"
          target="_blank"
        >
          <Phone />
        </Link>
      </div>
    </div>
  );
}