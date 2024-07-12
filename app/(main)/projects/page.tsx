import { Fetch } from "@/app/lib";
import { Pagination, ProjectCard } from "@/components/main";

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

export default async function Projects(context: any) {
    const page = context.searchParams.page ? context.searchParams.page : 1;
    const data = await Fetch({ endpoint: `main/projects/?page=${page}` });
    const projects: Projects[] = data['results'];
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