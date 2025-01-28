import { Fetch } from "@/app/lib";
import { ServiceCard } from "@/app/components/main";
import { Breadcrumb } from "@/app/components/common";
import Image from "next/image";
import { Clover } from "lucide-react";

interface MainCategory {
  id: number;
  title: string;
  slug: string;
  type: string;
  description: string;
  image: string;
}

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

async function fetchCategory(slug: string) {
  const data = await Fetch({ endpoint: `main/service_categories/${slug}` });
  return data;
}

async function fetchPlants(slug: string) {
  const data = await Fetch({
    endpoint: `main/service_categories/${slug}/services`,
  });
  return data.results;
}

export default async function Page(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const category: MainCategory = await fetchCategory(params.slug);
  const services: Service[] = await fetchPlants(params.slug);

  return (
    <div className="mx-auto min-h-screen">
      <div className="mx-auto max-w-screen-xl p-4">
        <Breadcrumb />

        {/* Hero Banner */}
        <div className="relative mb-8 mt-4 overflow-hidden rounded-lg shadow-lg">
          <div className="relative min-h-[400px] lg:min-h-[500px]">
            <Image
              src={category.image || "/static/viriditas.webp"}
              alt={category.title}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="from-black-300/95 via-black-300/80 absolute inset-0 bg-gradient-to-r to-transparent" />
          </div>

          <div className="absolute inset-0 flex flex-col justify-center p-2 lg:p-12">
            <div className="max-w-2xl space-y-2">
              <h2 className="text-sm font-medium uppercase text-white">
                Commercial Services
              </h2>

              <h1 className="text-3xl font-bold tracking-tight text-white lg:text-6xl">
                {category.title}
              </h1>

              <p className="leading-5 text-white/80">{category.description}</p>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Available Services</h2>
            <span className="badge badge-primary">
              {services.length} services
            </span>
          </div>

          {services.length === 0 ? (
            <div className="flex min-h-[400px] flex-col items-center justify-center rounded-xl bg-base-100 p-8">
              <Clover className="h-16 w-16 text-primary/20" />
              <h3 className="mt-4 text-xl font-semibold">
                No Services Available
              </h3>
              <p className="text-base-content/60">
                We haven&apos;t planted any services in this category yet.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {services.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
