import { Dancing_Script, Pacifico } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
const dancing_script = Dancing_Script({ subsets: ["latin"] });



export default function OurClients() {
    const data = [
        {
            id: 1,
            name: "Oishii",
            logo: "/images/clients/oishii.png",
            url: "https://oishii.com/"
        },
        {
            id: 2,
            name: "BAEsystems",
            logo: "/images/clients/baesystems.svg",
            url: "https://www.baesystems.com/"
        },
        {
            id: 3,
            name: "Invenergy",
            logo: "/images/clients/invenergy.png",
            url: "https://invenergy.com/"
        },
        {
            id: 4,
            name: "GridX",
            logo: "/images/clients/gridx.svg",
            url: "https://www.gridx.ai/"
        },
        {
            id: 5,
            name: "Tortuga AgTech",
            logo: "/images/clients/tortuga.png",
            url: "https://www.tortugaagtech.com/"

        },
        {
            id: 6,
            name: "R-Zero",
            logo: "/images/clients/rzero.png",
            url: "https://rzero.com/"
        }

    ]
    return (
        <section className="py-7 bg-gray-300 mt-2">
            <div className="flex flex-col lg:flex-row justify-center align-middle mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 gap-4">

                <div className="mb-4 lg:mb-0 lg:text-right text-center place-content-center">
                    <h2 className={`${dancing_script.className} text-4xl font-bold text-nowrap`}>
                        Our Clients
                    </h2>
                    <h4 className="text-2xl font-light">
                        Trusted by the best
                    </h4>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-3 justify-center  items-center  gap-4 lg:gap-6 px-4">

                    {data.map((client, index) => (

                        <Link key={index} href={client.url}
                            className="flex items-center justify-center hover:scale-105 transform transition-transform duration-300 ease-in-out"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image
                                src={client.logo}
                                alt={client.name}
                                width={200}
                                height={200}
                                className="object-contain"
                            />
                        </Link>
                    ))}

                </div>

            </div>
        </section>

    );
}