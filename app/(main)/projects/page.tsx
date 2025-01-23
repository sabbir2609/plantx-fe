import { Fetch } from "@/app/lib";
import { Pagination, ProjectCard } from "@/app/components/main";
import { Leaf } from "lucide-react";
import Link from "next/link";

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

    if (projects.length === 0) {
        return (
            <div className="flex h-[70vh] flex-col items-center justify-center text-center">
                <div className="animate-float mb-4">
                    <Leaf className="h-16 w-16 text-green-500" />
                </div>
                <h2 className="mb-2 text-2xl font-bold text-green-800">No Projects Found</h2>
                <p className="mb-6 max-w-md">
                    We haven&apos;t planted any projects here yet. Check back soon as we grow our portfolio.
                </p>
                <Link 
                    href="/"
                    className="inline-flex items-center rounded-lg bg-green-600 px-4 py-2 text-white transition-colors hover:bg-green-700"
                >
                    Return Home
                </Link>
            </div>
        );
    }

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