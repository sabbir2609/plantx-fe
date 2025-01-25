import { Fetch } from "@/app/lib";
import { Pagination, ProjectCard } from "@/app/components/main";
import { Leaf, Search, Filter } from "lucide-react";
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
  const page = (await context.searchParams).page
    ? (await context.searchParams).page
    : 1;
  const data = await Fetch({ endpoint: `main/projects/?page=${page}` });
  const projects: Project[] = data.results;
  const totalPages = Math.ceil(data["count"] / 12);
  const baseURL = "projects/";

  if (projects.length === 0) {
    return (
      <div className="flex h-[70vh] flex-col items-center justify-center space-y-6 p-4">
        <div className="animate-float">
          <Leaf className="h-20 w-20 text-primary" strokeWidth={1.5} />
        </div>
        <div className="text-center">
          <h2 className="mb-3 text-3xl font-bold">No Projects Found</h2>
          <p className="mx-auto mb-6 max-w-md text-base-content/70">
            We haven&apos;t planted any projects here yet. Check back soon as we
            grow our portfolio.
          </p>
          <Link href="/" className="btn btn-primary">
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="mb-12 rounded-2xl bg-base-200 p-8">
        <h1 className="mb-4 text-4xl font-bold">Browse Projects</h1>
        <p className="mb-6 max-w-2xl text-base-content/70">
          Explore our collection of beautiful plant projects and get inspired
          for your next green space.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="mb-20">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center pb-16 pt-8">
        <Pagination baseURL={baseURL} totalPages={totalPages} />
      </div>
    </div>
  );
}
