import { Fetch } from "@/app/lib";
// import { Dancing_Script } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
// const dancing_script = Dancing_Script({ subsets: ["latin"] });
import Marquee from "react-fast-marquee";

interface Client {
    name: string;
    logo: string;
    url: string;
}

export default async function OurClients() {
    const data = await Fetch({ endpoint: 'home/our-clients/' });
    const clients: Client[] = data;

    if (clients.length === 0) return null;

    return (
        <section className="py-7 mt-2 rounded-md">

            <div className="flex flex-col justify-center gap-4 mx-auto align-middle lg:flex-row max-w-7xl sm:px-6 lg:px-8 pb-12">

                <div className="mb-4 text-center lg:mb-0 lg:text-right lg:w-2/6 place-content-center pb-8">
                    <h2 className={`text-3xl font-bold text-nowrap`}>
                        Our Clients
                    </h2>
                    <h4 className="text-lg">
                        Trusted by the best
                    </h4>
                </div>

                <Marquee
                    gradient={false}
                    speed={40}
                    pauseOnHover={true}
                    className="lg:rounded-md"
                >
                    {clients.map((client, index) => (
                        <Link
                            key={index}
                            href={client.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image
                                src={client.logo}
                                alt={client.name}
                                width={200}
                                height={200}
                                className="object-contain w-40 h-40 p-4 mx-2 bg-base-200 rounded-sm shadow-md"
                            />
                        </Link>
                    ))}
                </Marquee>
            </div>
        </section>
    );
}