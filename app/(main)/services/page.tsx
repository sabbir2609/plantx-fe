import { Fetch } from "@/app/lib";
import { Pagination, ServiceCard } from "@/app/components/main";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description: "Services offered by Viriditas",
};

interface Category {
  id: number;
  type: string;
  title: string;
}

interface Service {
  id: number;
  title: string;
  slug: string;
  image: string;
  categories: Category[];
  tags: string[];
}

export default async function services(context: any) {
  const page = (await context.searchParams).page
    ? (await context.searchParams).page
    : 1;
  const data = await Fetch({ endpoint: `main/services/?page=${page}` });
  const services: Service[] = data["results"];
  const totalPages = Math.ceil(data["count"] / 12);
  const baseURL = "services/";

  if (services.length === 0) {
    return (
      <div className="hero min-h-[50vh]">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-4xl font-bold text-base-content/80">
              No services found
            </h1>
            <p className="py-6 text-base-content/60">
              Please try again later or check back soon for new services.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 md:px-6">
      <div className="flex flex-col gap-8">
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-bold tracking-tight text-base-content/90">
            Browse all services
          </h1>
          <span className="badge badge-primary">{data["count"]} Services</span>
        </div>

        <div className="grid animate-[fade-in_0.5s_ease-in-out] grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard service={service} key={service.id} />
          ))}
        </div>

        <div className="sticky bottom-14 flex justify-center sm:justify-end">
          <div className="rounded-lg bg-base-200 p-2 shadow-lg">
            <Pagination baseURL={baseURL} totalPages={totalPages} />
          </div>
        </div>
      </div>
    </div>
  );
}
