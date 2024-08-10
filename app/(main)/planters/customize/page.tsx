import { Fetch } from "@/app/lib";
import Image from "next/image";
import Link from "next/link";

interface Contact {
    phone: string;
    email: string;
}

export default async function page() {
    const data = await Fetch({ endpoint: "home/contact-info" });
    const contact: Contact[] = data;
    return (
        <div className="hero">
            <div className="flex-col hero-content lg:flex-row">
                <Image
                    src={"https://sorsauth.sirv.com/plantx/art-and-soil-bangalore-zG5v7oOO8Xw-unsplash.jpg"}
                    alt="Coming Soon"
                    width={900}
                    height={700}
                    className="rounded-lg shadow-2xl lg:max-w-sm" />
                <div>
                    <h1 className="pb-1 text-5xl font-bold">
                        Send us your design!
                    </h1>
                    <p className="text-2xl font-light">
                        Send us your design on Whatsapp or Email and
                        we will make it for you!
                    </p>
                    <div className="flex flex-row mt-4">
                        <Link
                            href={`https://wa.me/${contact[0].phone}`}
                            className="mr-4 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                            WhatsApp
                        </Link>
                        <Link
                            href={`mailto:${contact[0].email}`}
                            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                            Email
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}