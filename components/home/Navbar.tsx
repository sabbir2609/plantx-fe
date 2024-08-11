import { AlignLeft, Menu, Phone, Search, Instagram } from "lucide-react";
import { ThemeChange } from "@/components/common";
import Link from "next/link";
import { Fetch } from "@/app/lib";

interface Contact {
    phone: string;
    email: string;
    instagram: string;
}

export default async function Navbar() {
    const data = await Fetch({ endpoint: "home/contact-info" });
    const contact: Contact[] = data;

    return (
        <div className="navbar sticky min-h-0 h-14 top-0 bg-base-300 backdrop-filter backdrop-blur-lg bg-opacity-30 z-40">
            <div className="navbar-start">
                <label
                    htmlFor="my-drawer"
                    className="btn btn-square btn-ghost"
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
                    <Link href="/" className="btn btn-ghost text-xl">Viriditas</Link>
                </div>
            </div>
            <div className="navbar-end">
                <ThemeChange />
                {/* <button className="btn btn-ghost btn-circle">
                    <Search />
                </button> */}
                <button className="btn btn-ghost btn-circle">
                    <Link href={`${contact[0].instagram}`} target="_blank"
                        rel="noopener noreferrer">
                        <Instagram />
                    </Link>
                </button>

                <button className="btn btn-ghost btn-circle">
                    <div className="indicator">
                        <Link
                            href={`tel:${contact[0].phone}`}
                            target="_blank">
                            <Phone />
                        </Link>
                    </div>
                </button>
            </div>
        </div>
    )
}