import { Fetch } from "@/app/lib";
import Link from "next/link";
import ProjectSwiper from "../swiper/ProjectsSwiper";

interface Project {
  id: number;
  title: string;
  slug: string;
  client: string;
  year: number;
  image: string;
}

export default async function Projects() {
  const data = await Fetch({ endpoint: "main/projects/" });
  const projects: Project[] = data.results;

  // return null if no projects
  if (!projects.length) return null;

  return (
    <section className="px-2 py-6 lg:px-4">
      <h1 className="mb-8 text-nowrap text-center text-3xl font-bold tracking-tight lg:text-left lg:text-4xl">
        Our Projects
      </h1>
      <ProjectSwiper projects={projects} />
      <div className="flex items-center justify-end">
        <div className="mx-2 h-[2px] w-full rounded-full bg-base-200"></div>
        <Link
          href="/projects"
          className="text-nowrap text-xl hover:text-blue-700"
        >
          View all Projects &rarr;
        </Link>
      </div>
    </section>
  );
}
