import { Fetch } from "@/app/lib";
import { Pagination, ProjectCard } from "@/components/main";

interface Project {
    id: number;
    title: string;
    slug: string;
    client: string;
    year: number;
    image: string;
}

export default async function Projects(context: any) {
    const page = (await context.searchParams).page ? (await context.searchParams).page : 1;
    const data = await Fetch({ endpoint: `main/projects/?page=${page}` });
    const projects: Project[] = data.results;
    const totalPages = Math.ceil(data['count'] / 12);
    const baseURL = 'projects/';

    return (
        <>
            <h1 className="text-3xl font-bold mb-6">
                Browse all Projects
            </h1>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-4 lg:p-2 mb-16">
                {projects.map((service) => (
                    <ProjectCard key={service.id} project={service} />
                ))}
            </div>
            <div className="fixed bottom-14 right-4">
                <Pagination baseURL={baseURL} totalPages={totalPages} />
            </div>
        </>
    );
}