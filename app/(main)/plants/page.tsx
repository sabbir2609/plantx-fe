import { Fetch } from '@/app/lib';
import Loading from '@/app/loading';
import { Pagination, PlantCard } from '@/components/main';
import Image from 'next/image';
import Link from 'next/link';

interface PlantCategory {
    id: number;
    name: string;
    description: string;
    image: string | null;
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
    features?: { id: number; name: string }[];
    tags?: Tag[];
    images: { id: number; image: string }[];
}

export default async function Pages(context: any) {
    const page = context.searchParams.page ? context.searchParams.page : 1;
    const data = await Fetch({ endpoint: `plants/?page=${page}` });
    const plants: Plant[] = data['results'];

    const totalPages = Math.ceil(data['count'] / 12);
    const baseURL = 'plants/';

    if (!plants.length) {
        return <Loading />;
    }

    return (
        <>
            <h1 className="text-3xl font-bold mb-6">Browse all Plants</h1>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-4 lg:p-2 mb-16">
                {plants.map((plant) => (
                    <PlantCard key={plant.id} plant={plant} />
                ))}
            </div>
            <div className="fixed bottom-4 right-4">
                <Pagination baseURL={baseURL} totalPages={totalPages} />
            </div>
        </>
    );
}
