import { Flower2 } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-base-200 text-base-content py-10 px-3 lg:px-10">

            <div className="pb-5">
                <Flower2 size={50} />
                <p className="mt-2 font-bold">Inde Core.<br />Providing reliable service since 2024</p>
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
                        <Link href="#" className="link-hover">Jobs</Link>
                        <Link href="#" className="link-hover">Press kit</Link>
                    </div>
                </nav>

                <nav>
                    <h6 className="footer-title text-lg font-bold mb-2">Legal</h6>
                    <div className="flex flex-col space-y-2">
                        <Link href="#" className="link-hover">Terms of use</Link>
                        <Link href="#" className="link-hover">Privacy policy</Link>
                        <Link href="#" className="link-hover">Cookie policy</Link>
                    </div>
                </nav>

                <nav>
                    <h6 className="footer-title text-lg font-bold mb-2">Social</h6>
                    <div className="flex space-x-4">
                        <Link href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                            </svg>
                        </Link>
                        <Link href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 30 30">
                                <path d="M26.37,26l-8.795-12.822l0.015,0.012L25.52,4h-2.65l-6.46,7.48L11.28,4H4.33l8.211,11.971L12.54,15.97L3.88,26h2.65 l7.182-8.322L19.42,26H26.37z M10.23,6l12.34,18h-2.1L8.12,6H10.23z"></path>
                            </svg>
                        </Link>
                        <Link href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                            </svg>
                        </Link>
                    </div>
                </nav>
            </div>
            <div className="text-center lg:text-right mt-5">
                <p>© 2024 Inde Core. All rights reserved.</p>
            </div>
        </footer>
    );
}
