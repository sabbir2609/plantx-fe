import { Fetch } from '@/app/lib';
import { Pagination, PlantCard } from '@/components/main';

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


export default async function Pages(context: any) {
    const page = context.searchParams.page ? context.searchParams.page : 1;
    const data = await Fetch({ endpoint: `main/plants/?page=${page}` });
    const plants: Plant[] = data['results'];

    const totalPages = Math.ceil(data['count'] / 12);
    const baseURL = 'plants/';

    return (
        <>
            <h1 className="text-3xl font-bold mb-6">Browse all Plants</h1>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-4 lg:p-2 mb-16">
                {plants.map((plant) => (
                    <PlantCard key={plant.id} plant={plant} />
                ))}
            </div>
            <div className="fixed bottom-14 right-4">
                <Pagination baseURL={baseURL} totalPages={totalPages} />
            </div>
        </>
    );
}
