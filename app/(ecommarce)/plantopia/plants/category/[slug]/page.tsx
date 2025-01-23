import { Fetch } from "@/app/lib";
import { PlantCard } from "@/app/components/main";
import Image from "next/image";

interface PlantCategory {
    id: number;
    name: string;
    slug: string;
    description: string;
    image: string;
}

interface PlantFeature {
    id: number;
    name: string;
}

interface PlantPromotion {
    id: number;
    description: string;
    discount: number | null;
}

interface Plant {
    id: number;
    name: string;
    slug: string;
    sku: string;
    image: string;
    category: string;
    features: PlantFeature[];
    promotion: PlantPromotion[];
    location_type: string;
    size: string;
}


async function fetchCategory(slug: string) {
    const data = await Fetch({ endpoint: `main/plant_categories/${slug}` });
    return data;
}

async function fetchPlants(slug: string) {
    const data = await Fetch({ endpoint: `main/plant_categories/${slug}/plants` });
    return data.results;
}

export default async function Page(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    const category: PlantCategory = await fetchCategory(params.slug);
    const plants: Plant[] = await fetchPlants(params.slug);

    return (
        <div className="mx-auto">
            <div className="bg-base-200 h-auto lg:h-80 shadow-lg rounded-lg overflow-hidden mb-4 relative">
                <Image
                    src={category.image || '/static/viriditas.webp'}
                    height={1000}
                    width={1000}
                    alt={category.name}
                    className="object-cover h-full w-full min-h-60"
                />
                <div className="p-4 absolute bottom-0 left-0 h-full md:w-1/2 content-center bg-opacity-50 bg-black text-white">
                    <h1 className="text-2xl lg:text-3xl font-semibold">{category.name}</h1>
                    <p className="mt-2 tracking-tight lg:tracking-normal leading-6">{category.description}</p>
                </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-5 p-2">
                {plants.map((plant) => (
                    <PlantCard plant={plant} key={plant.id} />
                ))}
            </div>
        </div>
    );
}