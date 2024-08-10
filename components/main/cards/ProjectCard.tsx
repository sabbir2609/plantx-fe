import Image from 'next/image';
import Link from 'next/link';

interface Project {
    id: number;
    title: string;
    slug: string;
    client: string;
    year: number;
    image: string;
}

export default function ProjectCard(
    { project }: { project: Project }
) {
    return (
        <div key={project.id} className="bg-base-200 shadow-lg rounded-lg overflow-hidden">
            <Link href={`/projects/${project.slug}`}>
                <div className="relative">
                    <Image
                        src={project.image ? project.image : '/static/viriditas.png'}
                        alt={project.image ? project.title : 'Default Image'}
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
                </div>

            </Link>
        </div>
    );
}