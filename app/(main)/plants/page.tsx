import Loading from '@/app/loading';
import { Pagination, PlantCard } from '@/components/main';
import { FlaskConicalOff, PawPrint } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

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
    features: { id: number; name: string }[];
    tags: Tag[];
    created_at: string;
    images: { id: number; image: string }[];
}

export default async function Plants(context: any) {
    const page = context.searchParams.page ? context.searchParams.page : 1;
    const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/plants/?page=${page}`, {
        cache: "no-cache",
    });

    if (!response.ok) {
        throw new Error("Failed to fetch data");
    }

    const data = await response.json();
    const plants: Plant[] = data['results'];

    const totalPages = Math.ceil(data['count'] / 12);
    const baseURL = 'plants/';

    if (!plants.length) {
        return <div>
            <Loading />
        </div>;
    }

    return (
        <>
            <h1 className="text-3xl font-bold mb-6">
                Browse all Plants
            </h1>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-4 lg:p-2 mb-16">
                {plants.map((plant) => (
                    <PlantCard plant={plant} key={plant.id} />
                ))}
            </div>
            <div className="fixed bottom-4 right-4">
                <Pagination baseURL={baseURL} totalPages={totalPages} />
            </div>
        </>
    );
}