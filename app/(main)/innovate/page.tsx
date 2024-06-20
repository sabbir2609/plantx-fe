import Image from "next/image";

interface Ideas {
    id: number;
    title: string;
    description: string;
    image: string;
    tags: string[];
}

export default async function Page() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/ideas`,
        {
            cache: "no-cache",
        }
    );

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    const ideas: Ideas[] = await res.json();

    return (
        <div className="container mx-auto px-4">
            <h1 className="text-3xl font-semibold mt-4 mb-4">Innovate</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-6">
                {ideas.map((idea) => (
                    <div key={idea.id} className="shadow-md rounded-lg overflow-hidden mb-6">
                        <div className="h-56 relative">
                            <Image
                                src={idea.image && idea.image.length > 0 ? idea.image : "/static/no-img.png"}
                                alt={idea.title}
                                layout="fill"
                                objectFit="cover"
                                className="h-56 w-full"
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
                    </div>
                ))}
            </div>
        </div>
    );
}