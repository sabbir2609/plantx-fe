import { Fetch } from '@/app/lib';
import Image from 'next/image';
import { ServiceBlogImageSwiper } from '@/components/main';

interface ProjectImages {
    id: number;
    image: string;
    short_description: string;
}

interface Projects {
    id: number;
    title: string;
    description: string;
    images: ProjectImages[];
    client: string;
    categories: string;
    year: number;
    tags: string[];
}

export default async function Plants({ params }: { params: { id: number } }) {

    const data = await Fetch({ endpoint: `main/projects/${params.id}` });
    const project: Projects = data;

    return (
        <div className="mx-auto p-2">
            <h1 className="text-3xl font-bold mb-4">{project.title}</h1>

            <div className="rounded-sm mb-4">
                {project.images.length > 0 ? (
                    <ServiceBlogImageSwiper images={project.images} />
                ) : (
                    <Image
                        src="/static/viriditas.png"
                        width={600}
                        height={400}
                        alt='No Image Available'
                        className='object-cover w-full h-96'
                    />
                )}
            </div>

            <div className="p-4 gap-2">
                <div className="flex items-center gap-2">
                    <strong>Categories: </strong>
                    {project.categories}
                </div>

                <div className="flex items-center gap-2">
                    <strong>Client: </strong>
                    {project.client}
                </div>

                <div className="flex items-center gap-2">
                    <strong>Year: </strong>
                    {project.year}
                </div>

                <div className="w-full">
                    <div className='prose overflow-x-hidden lg:max-w-none' dangerouslySetInnerHTML={{ __html: project.description }} />
                </div>

                <div className='flex gap-1 items-center'>
                    <strong>Tags: </strong>
                    {project.tags.map((tag) => (
                        <div key={tag} className="bg-accent badge inline-block text-xs">
                            {tag}
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}