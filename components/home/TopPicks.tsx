import Link from 'next/link';
import Image from 'next/image';
import { CircleChevronRight } from 'lucide-react';

interface Plants {
    id: number;
    title: string;
    images: {
        id: number;
        image: string;
        short_description: string;
    }[];
}

interface Planters {
    id: number;
    model: string;
    images: {
        id: number;
        image: string;
        short_description: string;
    }[];
}

async function getPlants() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/plants/featured/`,
        {
            cache: 'no-cache',
        }
    );
    const data = await res.json();
    return data.slice(0, 4);
}

async function getPlanters() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/planters/featured/`,
        {
            cache: 'no-cache',
        }
    );
    const data = await res.json();
    return data.slice(0, 4);
}


export default async function TopPicks() {
    const plants: Plants[] = await getPlants();
    const planters: Planters[] = await getPlanters();

    return (
        <div className="flex flex-col p-2 mt-2">
            <h2 className="text-5xl font-bold mb-4 justify-center">Top Picks</h2>
            <div className="flex flex-row justify-between">
                <h3 className="text-2xl font-semibold mb-2">Featured Plants</h3>
                <Link href="/plants" className="btn btn-square btn-ghost">
                    <CircleChevronRight />
                </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-2">
                {plants.map((plant) => (
                    <Link href={`/plants/${plant.id}`} key={plant.id} className="flex flex-col items-center justify-center p-2 mb-2  rounded-md shadow-md">
                        {
                            plant.images.length > 0 ? (
                                <Image src={plant.images[0].image} alt={plant.title} className="w-full h-48 object-cover rounded-md" width={300} height={200} />
                            ) : (
                                <Image
                                    src="/static/no-img.png"
                                    alt={plant.title}
                                    width={300}
                                    height={200}
                                    className="w-full h-48 object-cover rounded-md"
                                />
                            )
                        }
                        <p className="text-center text-lg font-bold">
                            {plant.title}
                        </p>
                    </Link>
                ))}
            </div>
            <div className="flex flex-row justify-between">
                <h3 className="text-2xl font-semibold mb-2">Featured Planters</h3>
                <Link href="/planters" className="btn btn-square btn-ghost">
                    <CircleChevronRight />
                </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {planters.map((planter) => (
                    <Link href={`/planters/${planter.id}`} key={planter.id} className="flex flex-col items-center justify-center p-2 mb-2 rounded-md shadow-md">
                        {
                            planter.images.length > 0 ? (
                                <Image src={planter.images[0].image} alt={planter.model} className="w-full h-48 object-cover rounded-md" width={300} height={200} />
                            ) : (
                                <Image
                                    src="/static/no-img.png"
                                    alt={planter.model}
                                    width={300}
                                    height={200}
                                    className="w-full h-48 object-cover rounded-md"
                                />
                            )
                        }
                        <p className="text-center text-lg font-semibold">
                            {planter.model}
                        </p>
                    </Link>
                ))}
            </div>
        </div>
    );
};
