import { Fetch } from "@/app/lib";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Innovate',
    description: 'Innovate with Viriditas',
}

interface Ideas {
    id: number;
    title: string;
    slug: string;
    description: string;
    image: string;
}

export default async function Page() {
    const data = await Fetch({ endpoint: "main/ideas" });
    const ideas: Ideas[] = data;

    return (
        <div className="mx-auto px-2">
            <h1 className="text-3xl font-semibold mt-4 mb-4">Innovate</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {ideas.map((idea) => (
                    <Link
                        href={`/ideas/${idea.slug}`}
                        key={idea.id} className="shadow-md rounded-lg overflow-hidden mb-6 bg-base-200">
                        <div className="h-96 relative">
                            <Image
                                src={idea.image ? idea.image : "/static/viriditas.webp"}
                                alt={idea.title}
                                height={400}
                                width={400}
                                className="object-cover h-96 w-full hover:scale-105 transition duration-300 rounded-b-lg"
                            />
                        </div>
                        <div className="p-4">
                            <h1 className="text-xl font-semibold mb-2">{idea.title}</h1>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}