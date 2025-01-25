import { Fetch } from "@/app/lib";
import { ProductImageViewer } from "@/app/components/main";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";
import { ShareButton } from "@/app/components/common";

interface ProjectCategory {
  id: number;
  type: string;
  title: string;
}

interface ProjectImage {
  id: number;
  image: string;
  short_description: string;
}

interface Project {
  id: number;
  title: string;
  slug: string;
  categories: ProjectCategory[];
  client: string;
  year: number;
  description: string;
  images: ProjectImage[];
}

export default async function Plants(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const data = await Fetch({ endpoint: `main/projects/${params.slug}` });
  const project: Project = data;

  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      {/* Breadcrumb */}
      <nav className="mb-8 flex items-center gap-2 text-sm">
        <Link href="/" className="flex items-center gap-1 hover:text-primary">
          <Home className="h-4 w-4" />
          Home
        </Link>
        <span>/</span>
        <Link href="/projects" className="hover:text-primary">
          Projects
        </Link>
        <span>/</span>
        <span className="truncate text-primary lg:text-current">
          {project.title}
        </span>
      </nav>

      {/* Back Button */}
      <Link
        href="/projects"
        className="btn btn-ghost btn-sm mb-6 inline-flex items-center gap-2"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Projects
      </Link>

      {/* Title Section */}
      <h1 className="mb-6 text-2xl font-bold text-primary lg:text-4xl">
        {project.title}
      </h1>

      {/* Main Content Stack */}
      <div className="space-y-8">
        {/* Image Gallery */}
        <div className="rounded-xl bg-base-200 p-2">
          {project.images.length > 0 ? (
            <ProductImageViewer images={project.images} />
          ) : (
            <div className="relative aspect-video overflow-hidden rounded-lg">
              <Image
                src="/static/viriditas.webp"
                fill
                alt="No Image Available"
                className="object-cover transition-transform hover:scale-105"
              />
            </div>
          )}
        </div>

        {/* Project Details */}
        <div className="space-y-6">
          {/* Metadata Cards */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="card bg-base-200">
              <div className="card-body p-4">
                <h3 className="card-title text-sm">Categories</h3>
                <div className="flex flex-wrap gap-2">
                  {project.categories.map((category) => (
                    <span key={category.id} className="badge badge-primary">
                      {category.type}-{category.title}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="card bg-base-200">
              <div className="card-body p-4">
                <h3 className="card-title text-sm">Project Info</h3>
                <div className="space-y-2 text-sm">
                  <p>
                    <strong>Client:</strong> {project.client}
                  </p>
                  <p>
                    <strong>Year:</strong> {project.year}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="card bg-base-200">
            <div className="card-body">
              <h2 className="card-title mb-4">Project Description</h2>
              <div
                className="prose max-w-none"
                dangerouslySetInnerHTML={{ __html: project.description }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 px-8 flex items-center justify-between">
        <p className="text-sm text-primary-content me-5">Share this project</p>
        <ShareButton title="Share this project" url={`${project.slug}`} />
      </div>
    </div>
  );
}
