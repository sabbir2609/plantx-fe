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
        <div className="p-4 lg:px-16 rounded-lg shadow-xl lg:my-4 lg:py-6">

            <h1 className="text-3xl font-semibold text-accent mb-4">
                {idea.title}
            </h1>

            <div className="flex items-center justify-center">
                <Image
                    src={idea.image ? idea.image : "/static/viriditas.png"}
                    height={1200}
                    width={1200}
                    alt={idea.title}
                    className="object-cover shadow-sm max-h-[50vh] w-full rounded-lg"
                />
            </div>

            <div className="prose max-w-none"
                dangerouslySetInnerHTML={{ __html: idea.description }}>
            </div>

        </div>
    );
}