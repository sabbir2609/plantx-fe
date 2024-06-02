import { AlignLeft, Menu, Phone, Search } from "lucide-react";
import { ThemeChange } from "@/components/common";
import Link from "next/link";

export default function Navbar() {
    return (
        <div className="navbar sticky top-0 z-10 bg-transparent backdrop-filter backdrop-blur-lg bg-opacity-30">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <Menu />
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <details open>
                                <summary>Plants</summary>
                                <ul>
                                    <li>
                                        <a>Indoor</a>
                                    </li>
                                    <li>
                                        <a>Outdoor</a>
                                    </li>
                                </ul>
                            </details>
                        </li>
                        <li>
                            <a>Planters</a>
                        </li>
                        <li>
                            <a>Innovation</a>
                        </li>
                        <li>
                            <a>Design Studio</a>
                        </li>
                        <li>
                            <a>Contact Us</a>
                        </li>
                    </ul>
                </div>
                <div className="flex-1">
                    <Link href="/" className="btn btn-ghost text-xl">InDecor</Link>
                </div>
            </div>
            <div className="navbar-end">
                <ThemeChange />
                <button className="btn btn-ghost btn-circle">
                    <Search />
                </button>
                <button className="btn btn-ghost btn-circle">
                    <div className="indicator">
                        <Phone />
                    </div>
                </button>
            </div>
        </div>
    )
}