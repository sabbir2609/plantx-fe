import Image from 'next/image';
import Link from 'next/link';

interface ProjectImages {
    id: number;
    image: string;
    short_description: string;
}

interface Projects {
    id: number;
    title: string;
    images: ProjectImages[];
    client: string;
    categories: string;
    year: number;
}

export default function ProjectCard(
    { project }: { project: Projects }
) {
    return (
        <div key={project.id} className="bg-base-200 shadow-lg rounded-lg overflow-hidden">
            <Link href={`/projects/${project.id}`}>
                <div className="relative">
                    <Image
                        src={project.images.length > 0 ? project.images[0].image : '/static/viriditas.png'}
                        alt={project.images.length > 0 ? project.images[0].short_description : 'Default Image'}
                        height={227}
                        width={384}
                        className='h-56 object-cover'
                    />
                </div>
                <div className="p-3">
                    <h2 className="text-lg font-normal tracking-tight">{project.title}</h2>
                    <p className="text-sm">
                        {project.client}
                    </p>
                    <p className="text-sm">
                        {project.year}
                    </p>
                    <p className="text-sm">
                        {project.categories}
                    </p>
                </div>

            </Link>
        </div>
    );
}