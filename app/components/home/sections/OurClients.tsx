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
  const data = await Fetch({ endpoint: "home/our-clients/" });
  const clients: Client[] = data;

  if (clients.length === 0) return null;

  return (
    <section className="mx-auto rounded-md">
      <div className="mx-auto flex max-w-7xl flex-col justify-center gap-4 pb-12 align-middle sm:px-6 lg:flex-row lg:px-8">
        <div className="mb-4 place-content-center text-center lg:mb-0 lg:w-2/6 lg:text-right">
          <h2 className={`text-nowrap text-3xl font-bold`}>Our Clients</h2>
          <h4 className="text-lg">Trusted by the best</h4>
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
                className="mx-2 h-40 w-40 rounded-sm bg-base-200 object-contain p-4 shadow-md"
              />
            </Link>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
