import { AlignLeft, Menu, Phone, Search } from "lucide-react";
import { ThemeChange } from "@/components/common";
import Link from "next/link";

export default function Navbar() {
    return (
        <div className="navbar sticky top-0 z-10 bg-transparent backdrop-filter backdrop-blur-lg bg-opacity-30">
            <div className="navbar-start">
                <div className='hidden w-full max-w-sm lg:flex'>
                    <div className="form-control">
                        <div className="input-group flex items-center gap-2">
                            <input type="text" placeholder="Search…" className="input input-bordered" />
                            <button className="btn">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </button>
                        </div>
                    </div>
                </div>
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
                <div className="flex-1 lg:hidden">
                    <Link href="/" className="btn btn-ghost text-xl">Viriditas</Link>
                </div>
            </div>
            <div className="navbar-end">
                <ThemeChange />
                {/* <button className="btn btn-ghost btn-circle lg:hidden">
                    <Search />
                </button> */}
                <button className="btn btn-ghost btn-circle">
                    <div className="indicator">
                        <Phone />
                    </div>
                </button>
            </div>
        </div>
    )
}