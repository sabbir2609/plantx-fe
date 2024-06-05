import Loading from '@/app/loading';
import { Pagination } from '@/components/main';
import { FlaskConicalOff, PawPrint } from 'lucide-react';
import Image from 'next/image';

interface PlantImage {
    id: number;
    image: string;
}

interface Plant {
    id: number;
    name: string;
    category: string;
    tags: string[];
    price: string;
    images: PlantImage[];
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
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mb-16">

                {plants.map((plant) => (
                    <div key={plant.id} className="shadow-lg rounded-lg overflow-hidden bg-base-200">
                        <div className="relative h-48">
                            {plant.images && plant.images.length > 0 ? (
                                <Image
                                    height={500}
                                    width={500}
                                    src={plant.images[0].image}
                                    alt={plant.name}
                                    className='hover:scale-110 transition duration-300 ease-in-out object-center object-cover h-48 w-full' />
                            ) : (
                                <Image
                                    src="/static/no-img.png"
                                    alt={plant.name}
                                    height={500}
                                    width={500}
                                    className='hover:scale-110 transition duration-300 ease-in-out object-center object-cover h-48 w-full'
                                />
                            )}
                        </div>
                        <div className="p-4">
                            <h2 className="text-xl font-semibold">{plant.name}</h2>
                            <p className="text-sm">{plant.category}</p>
                            <p className="text-sm">{plant.tags.join(', ')}</p>
                            <div className="flex flex-row justify-between items-center">
                                <p className="mt-2 text-lg font-semibold">${plant.price}</p>
                                <div className='flex flex-row gap-1'>
                                    <PawPrint size={18} />
                                    <FlaskConicalOff size={18} />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="fixed bottom-4 right-4">
                <Pagination baseURL={baseURL} totalPages={totalPages} />
            </div>
        </>
    );
}