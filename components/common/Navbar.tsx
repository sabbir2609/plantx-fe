import { AlignLeft, Instagram, Menu, Phone, Search } from "lucide-react";
import { ThemeChange } from "@/components/common";
import Link from "next/link";

export default function Navbar() {
    return (
        <div className="navbar sticky min-h-0 h-14 top-0 z-10 bg-base-200 backdrop-filter backdrop-blur-lg bg-opacity-30">
            <div className="navbar-start">
                <label
                    htmlFor="my-drawer"
                    className="btn btn-square btn-ghost lg:hidden"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="inline-block w-5 h-5 stroke-current"
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
                    <Link href="/" className="btn btn-ghost text-xl lg:hidden">Viriditas</Link>
                </div>
            </div>
            <div className="navbar-end">
                <ThemeChange />
                {/* <button className="btn btn-ghost btn-circle">
                    <Search />
                </button> */}
                <button className="btn btn-ghost btn-circle">
                    <Link href="https://www.instagram.com/viriditas_2024/" target="_blank"
                        rel="noopener noreferrer">
                        <Instagram />
                    </Link>
                </button>
                <button className="btn btn-ghost btn-circle">
                    <div className="indicator">
                        <a href="tel:+2348123456789">
                            <Phone />
                        </a>
                    </div>
                </button>
            </div>
        </div>
    )
}