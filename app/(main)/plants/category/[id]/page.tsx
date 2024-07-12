import { Fetch } from "@/app/lib";
import Loading from "@/app/loading";
import { PlantCard } from "@/components/main";
import Image from "next/image";

interface PlantCategory {
    id: number;
    name: string;
    description: string;
    image: string;
}

interface Tag {
    id: number;
    name: string;
}

interface Plant {
    id: number;
    title: string;
    category: PlantCategory;
    indoor_or_outdoor: string;
    size: string;
    description: string;
    care_instructions: string;
    tags: Tag[];
    created_at: string;
    images: { id: number; image: string }[];
}

async function fetchCategory(id: number) {
    const data = await Fetch({ endpoint: `main/plant_categories/${id}` });
    return data;
}

async function fetchPlants(id: number) {
    const data = await Fetch({ endpoint: `main/plant_categories/${id}/plants` });
    return data.results;
}

export default async function Page({ params }: { params: { id: number } }) {
    const category: PlantCategory = await fetchCategory(params.id);
    const plants: Plant[] = await fetchPlants(params.id);

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
                        src="/static/viriditas.png"
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
                    <PlantCard plant={plant} key={plant.id} />
                ))}
            </div>
        </div>
    );
}