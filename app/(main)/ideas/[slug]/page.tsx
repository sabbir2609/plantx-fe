import { Fetch } from '@/app/lib';
import Image from 'next/image';

interface Idea {
    id: number;
    title: string;
    description: string;
    image: string;
}

export default async function Plants({ params }: { params: { slug: string } }) {
    const data = await Fetch({ endpoint: `main/ideas/${params.slug}` });
    const idea: Idea = data;

    return (
        <div className="p-2 mx-auto">
            <h1 className="px-2 text-xl font-semibold mb-4 text-accent leading-6">
                {idea.title}
            </h1>
            <div className="flex items-center justify-center">
                <Image
                    src={idea.image ? idea.image : "/static/viriditas.webp"}
                    height={1200}
                    width={1200}
                    alt={idea.title}
                    className="object-cover shadow-sm max-h-[50vh] w-full rounded-lg"
                />
            </div>
            <div className="prose max-w-none pt-6 p-4 bg-base-100"
                dangerouslySetInnerHTML={{ __html: idea.description }}>
            </div>
        </div>
    );
}