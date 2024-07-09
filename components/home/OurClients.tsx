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
        <section className="py-7 bg-[#F1EFED] mt-2">

            <div className="flex flex-col justify-center gap-4 px-4 mx-auto align-middle lg:flex-row max-w-7xl sm:px-6 lg:px-8">

                <div className="mb-4 text-center text-black lg:mb-0 lg:text-right place-content-center">
                    <h2 className={`${dancing_script.className} text-4xl font-bold text-nowrap`}>
                        Our Clients
                    </h2>
                    <h4 className="text-2xl font-light">
                        Trusted by the best
                    </h4>
                </div>

                <div className="grid items-center justify-center grid-cols-2 gap-4 px-4 lg:grid-cols-3 lg:gap-6">
                    {data.map((client, index) => (
                        <Link key={index} href={client.url}
                            className="flex items-center justify-center transition-transform duration-300 ease-in-out transform hover:scale-105"
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