import { Fetch } from "@/app/lib";
import { ServiceCard } from "@/app/components/main";
import Image from "next/image";

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
  const data = await Fetch({ endpoint: `main/service_categories/${slug}/services` });
  return data.results;
}

export default async function Page(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const category: MainCategory = await fetchCategory(params.slug);
  const services: Service[] = await fetchPlants(params.slug);

  return (
    <div className="mx-auto max-w-screen-xl p-4">
      {/* Category Banner */}
      <div className="relative mb-6 overflow-hidden rounded-lg bg-base-200 shadow-lg lg:h-80">
        <Image
          src={category.image || "/static/viriditas.webp"}
          alt={category.title}
          width={800}
          height={800}
          className="h-full w-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
          priority
        />
        <div className="absolute bottom-0 left-0 flex h-full w-full flex-col justify-end bg-black/50 p-4 text-white md:w-1/2">
          <h1 className="mb-1 text-4xl font-bold">{category.title}</h1>
          <h2 className="text-xl capitalize">{category.type}</h2>
          <p className="mt-2 text-sm">{category.description}</p>
        </div>
      </div>

      {/* Services */}
      <h2 className="mb-4 text-2xl font-semibold">Services</h2>
      {services.length === 0 ? (
        <div className="rounded-lg bg-base-200 p-6 text-center text-gray-500 shadow-md">
          Oops! No services found in this category.
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-5">
          {services.map((service) => (
            <ServiceCard service={service} key={service.id} />
          ))}
        </div>
      )}
    </div>
  );
}