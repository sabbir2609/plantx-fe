import { Fetch } from "@/app/lib";
import Image from "next/image";
import Link from "next/link";

interface Ideas {
    id: number;
    title: string;
    description: string;
    image: string;
    tags: string[];
}

export default async function Page() {
    const data = await Fetch({ endpoint: "main/ideas" });
    const ideas: Ideas[] = data;

    return (
        <div className="container mx-auto px-4">
            <h1 className="text-3xl font-semibold mt-4 mb-4">Innovate</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {ideas.map((idea) => (
                    <Link
                        href={`/innovate/${idea.id}`}
                        key={idea.id} className="shadow-md rounded-lg overflow-hidden mb-6">
                        <div className="h-96 relative">
                            <Image
                                src={idea.image && idea.image.length > 0 ? idea.image : "/static/no-img.png"}
                                alt={idea.title}
                                height={400}
                                width={400}
                                className="object-cover h-96 w-full hover:scale-105 transition duration-300 rounded-b-lg"
                            />
                        </div>
                        <div className="p-4">
                            <h1 className="text-2xl font-semibold mb-2">{idea.title}</h1>
                            <div className="flex flex-wrap">
                                {idea.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="bg-green-100 text-green-800 text-sm font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}