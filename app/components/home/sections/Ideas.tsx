import Link from "next/link";
import Image from "next/image";
import { Fetch } from "@/app/lib";
import AnimatedSection from "../wrapper/AnimatedSection";

interface Ideas {
  id: number;
  title: string;
  slug: string;
  image: string;
}

async function getIdeas() {
  const data = await Fetch({ endpoint: "main/ideas/featured/" });
  return data.slice(0, 4);
}

export default async function Ideas() {
  const ideas: Ideas[] = await getIdeas();
  return (
    <div className="mx-auto p-2 pb-8 lg:mt-14">
      <div className="text-normal mb-5 flex justify-between border-b">
        <div className="flex items-center border-b-2 pb-1 uppercase">
          <h1 className="text-2xl font-normal uppercase tracking-tight lg:text-4xl">
            Innovate Your Space
          </h1>
        </div>
        <Link
          className="place-content-end text-nowrap font-semibold hover:text-blue-600"
          href="/ideas"
        >
          View All
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-2 md:gap-5 lg:grid-cols-4">
        {ideas.map((idea) => (
          <AnimatedSection delay={0.2} key={idea.id}>
            <Link className="group relative" href={`/ideas/${idea.slug}`}>
              <Image
                src={idea.image || "/static/viriditas.webp"}
                alt="Idea Image"
                width={500}
                height={300}
                className="h-[40vh] w-full rounded-lg object-cover transition duration-500 ease-in-out group-hover:rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 top-0 rounded-lg bg-gray-900 opacity-40 transition duration-300 group-hover:bg-transparent"></div>
              <div className="absolute bottom-0 left-0 p-4">
                <h1 className="mb-2 inline-block text-lg font-semibold leading-5 text-white transition duration-500 ease-in-out group-hover:text-black">
                  {idea.title}
                </h1>
              </div>
            </Link>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}