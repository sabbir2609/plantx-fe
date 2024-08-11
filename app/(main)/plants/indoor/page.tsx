import { Fetch } from "@/app/lib";
import { Pagination, PlantCard } from "@/components/main"
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Indoor Plants",
    description: "Browse all indoor plants offered by Viriditas",
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

export default async function Page(context: any) {
    const page = context.searchParams.page ? context.searchParams.page : 1;

    const data = await Fetch({ endpoint: `main/plants/indoor/?page=${page}` });
    const plants: Plant[] = data['results'];

    const totalPages = Math.ceil(data['count'] / 12);
    const baseURL = 'plants/';

    if (plants.length === 0) {
        return (
            <div className="text-center mt-16">
                <h1 className="text-3xl font-bold mb-6">No plants found</h1>
            </div>
        );
    }

    return (
        <>
            <h1 className="text-3xl font-bold mb-6">
                Indoor Plants
            </h1>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-4 lg:p-2 mb-16">
                {plants.map((plant) => (
                    <PlantCard plant={plant} key={plant.id} />
                ))}
            </div>
            <div className="fixed bottom-14 right-4">
                <Pagination baseURL={baseURL} totalPages={totalPages} />
            </div>
        </>
    );
}