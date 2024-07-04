import { Fetch } from "@/app/lib";
import Loading from "@/app/loading";
import { PlantCard, PlanterCard } from "@/components/main";
import Image from "next/image";

interface PlanterCategory {
    id: number;
    name: string;
    description: string;
    image: string;
}

interface Planter {
    id: number;
    model: string;
    category: PlanterCategory;
    size: string;
    color: string;
    short_description: string;
    images: { id: number; image: string }[];
}

async function fetchCategory(id: number) {
    const data = await Fetch({ endpoint: `planter_categories/${id}` });
    return data;
}

async function fetchPlants(id: number) {
    const data = await Fetch({ endpoint: `planters/?category=${id}` });
    return data.results;
}

export default async function Page({ params }: { params: { id: number } }) {
    const category: PlanterCategory = await fetchCategory(params.id);
    const plants: Planter[] = await fetchPlants(params.id);

    if (!category || !plants) {
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
                        alt={category.name}
                        className="object-cover"
                    />
                ) : (
                    <Image
                        src="/static/no-img.png"
                        height={1200}
                        width={1200}
                        alt={category.name}
                        className="object-cover"
                    />
                )}
                <div className="p-4 absolute bottom-0 left-0 h-full md:w-1/2 content-center bg-opacity-50 bg-black text-white">
                    <h1 className="text-3xl font-semibold">{category.name}</h1>
                    <p className="mt-2">{category.description}</p>
                </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-5 p-2">
                {plants.map((plant) => (
                    <PlanterCard planter={plant} key={plant.id} />
                ))}
            </div>
        </div>
    );
}