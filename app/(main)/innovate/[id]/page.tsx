import Loading from '@/app/loading';
import Image from 'next/image';

interface Idea {
    id: number;
    title: string;
    description: string;
    image: string | null;
    tags: string[];
}

export default async function Plants({ params }: { params: { id: number } }) {

    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/ideas/${params.id}/`, {
        cache: "no-cache",
    });

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    const idea: Idea = await res.json();

    if (!idea) {
        return (
            <div>
                <Loading />
            </div>
        );
    }

    return (
        <div className="p-4 lg:px-16 rounded-lg shadow-xl lg:my-4 lg:py-6">

            <h1 className="text-3xl font-semibold text-accent mb-4">
                {idea.title}
            </h1>

            <div className="flex items-center justify-center">
                {idea.image ? (
                    <Image
                        src={idea.image}
                        height={1200}
                        width={1200}
                        alt={idea.title}
                        className="object-cover shadow-sm max-h-[50vh] w-full rounded-lg"
                    />
                ) : (
                    <Image
                        src="/static/no-img.png"
                        alt="No Image"
                        height={1200}
                        width={1200}
                        className="object-cover shadow-sm max-h-[50vh] w-full rounded-lg"
                    />
                )}
            </div>

            <div className="p-2">
                {idea.tags.map((tag) => (
                    <span
                        key={tag}
                        className={`bg-accent inline-block text-white text-sm font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded`}
                    >
                        {tag}
                    </span>
                ))}
                <hr className="my-4" />
            </div>

            <div className="prose max-w-none"
                dangerouslySetInnerHTML={{ __html: idea.description }}>
            </div>


        </div>
    );
}