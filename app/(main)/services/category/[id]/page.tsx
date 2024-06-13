import Loading from "@/app/loading";
import { ServiceCard } from "@/components/main";
import Image from "next/image";

interface Category {
    id: number;
    title: string;
    description: string;
    image: string;
}

interface Type {
    id: number;
    title: string;
}

interface Service {
    id: number;
    title: string;
    description: string;
    image: string | null;
    budget_range: string;
    category: Category;
    type: Type;
}

async function fetchCategory(id: number) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/service_categories/${id}`, { cache: 'no-cache' });
    return res.json();

}

async function fetchPlants(id: number) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/service_categories/${id}/service`, { cache: 'no-cache' });
    const data = await res.json();
    return data.results;
}

export default async function Page({ params }: { params: { id: number } }) {
    const category: Category = await fetchCategory(params.id);
    const services: Service[] = await fetchPlants(params.id);

    if (!category || !services) {
        return <Loading />;
    }

    return (
        <div className="mx-auto">
            <div className="bg-base-200 h-auto lg:h-80 shadow-lg rounded-lg overflow-hidden mb-4 relative">
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
                <div className="p-4 absolute bottom-0 left-0 h-full md:w-1/2 content-center bg-opacity-50 bg-black text-white">
                    <h1 className="text-3xl font-semibold">{category.title}</h1>
                    <p className="mt-2">{category.description}</p>
                </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-5 p-2">
                {services.map((service) => (
                    <ServiceCard service={service} key={service.id} />
                ))}
            </div>
        </div>
    );
}