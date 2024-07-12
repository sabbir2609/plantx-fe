import { Fetch } from "@/app/lib";
import Loading from "@/app/loading";
import { ServiceCard } from "@/components/main";
import Image from "next/image";

interface MainCategory {
    id: number;
    title: string;
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
    image: string;
    categories: Category[];
    tags: string[];
}

async function fetchCategory(id: number) {
    const data = await Fetch({ endpoint: `main/service_categories/${id}` });
    return data;
}

async function fetchPlants(id: number) {
    const data = await Fetch({ endpoint: `main/service_categories/${id}/services` });
    return data.results;
}

export default async function Page({ params }: { params: { id: number } }) {
    const category: MainCategory = await fetchCategory(params.id);
    const services: Service[] = await fetchPlants(params.id);
    console.log(services);

    return (
        <div className="mx-auto">
            <div className="relative h-auto mb-4 overflow-hidden rounded-lg shadow-lg bg-base-200 lg:h-80">
                {category.image ? (
                    <Image
                        src={category.image}
                        height={1200}
                        width={1200}
                        alt={category.title}
                        className="object-cover"
                    />
                ) : (
                    <Image
                        src="/static/no-img.png"
                        height={1200}
                        width={1200}
                        alt={category.title}
                        className="object-cover"
                    />
                )}
                <div className="absolute bottom-0 left-0 content-center h-full p-4 text-white bg-black bg-opacity-50 md:w-1/2">
                    <h1 className="text-3xl font-semibold">{category.title}</h1>
                    <h2 className="text-xl">{category.type}</h2>
                    <p className="mt-2">{category.description}</p>
                </div>
            </div>
            <h2 className="text-2xl font-semibold">Services</h2>
            {services.length === 0 ? (
                <div className="p-4 text-center">
                    Oops! No service found in this category yet :(
                </div>
            ) : (
                <div className="grid grid-cols-2 gap-2 p-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-5">
                    {services.map((service) => (
                        <ServiceCard service={service} key={service.id} />
                    ))}
                </div>
            )}
        </div>
    );
}