import Link from 'next/link';
import ProjectSwiper from '../Swiper/ProjectsSwiper';
import { Fetch } from '@/app/lib';

interface Project {
    id: number;
    title: string;
    slug: string;
    client: string;
    year: number;
    image: string;
}

export default async function Projects() {
    const data = await Fetch({ endpoint: 'main/projects/' });
    const projects: Project[] = data.results;

    return (
        <section className="px-2 py-6 lg:px-4">
            <h1 className="text-center lg:text-left text-3xl lg:text-4xl font-bold text-nowrap tracking-tight pb-12">
                Our Projects
            </h1>
            <ProjectSwiper projects={projects} />
            <div className='flex justify-end items-center m-2'>
                <div className='w-full h-[2px] bg-base-200 mx-2 rounded-full'></div>
                <Link href='/projects' className='text-nowrap hover:text-blue-700 text-xl'>
                    View all Projects &rarr;
                </Link>
            </div>
        </section>
    );
};
