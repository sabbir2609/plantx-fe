import { Facebook, Flower2, Instagram, Youtube } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-base-200 text-base-content py-10 px-3 lg:px-10 mt-2">

            <div className="pb-5">
                <Flower2 size={50} />
                <p className="mt-2 font-bold">Viriditas.<br />Providing reliable service since 2024</p>
            </div>

            <div className="mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">

                <nav>
                    <h6 className="footer-title text-lg font-bold mb-2">Services</h6>
                    <div className="flex flex-col space-y-2">
                        <Link href="#" className="link-hover">Branding</Link>
                        <Link href="#" className="link-hover">Design</Link>
                        <Link href="#" className="link-hover">Marketing</Link>
                        <Link href="#" className="link-hover">Advertisement</Link>
                    </div>
                </nav>

                <nav>
                    <h6 className="footer-title text-lg font-bold mb-2">Company</h6>
                    <div className="flex flex-col space-y-2">
                        <Link href="#" className="link-hover">About us</Link>
                        <Link href="#" className="link-hover">Contact</Link>
                    </div>
                </nav>

                <nav>
                    <h6 className="footer-title text-lg font-bold mb-2">Legal</h6>
                    <div className="flex flex-col space-y-2">
                        <Link href="/terms-conditions" className="link-hover">Terms of use</Link>
                        <Link href="/privacy-policy" className="link-hover">Privacy policy</Link>
                        <Link href="#" className="link-hover">Cookie policy</Link>
                    </div>
                </nav>

                <nav>
                    <h6 className="footer-title text-lg font-bold mb-2">Social</h6>
                    <div className="flex space-x-4">
                        <Link href="#">
                            <Instagram size={24} />
                        </Link>
                        <Link href="https://www.facebook.com/theviriditas">
                            <Facebook size={24} />
                        </Link>
                        <Link href="#">
                            <Youtube size={24} />
                        </Link>
                    </div>
                </nav>
            </div>
            <div className="text-center lg:text-right mt-5">
                <p>© 2024 Viriditas. All rights reserved.</p>
            </div>
        </footer>
    );
}
