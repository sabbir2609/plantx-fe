import Loading from "@/app/loading";
import { Pagination } from "@/components/main"
import Image from "next/image";
import Link from "next/link";

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

export default async function Page(context: any) {
    const page = context.searchParams.page ? context.searchParams.page : 1;
    const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/plants/outdoor/?page=${page}`, {
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
                Outdoor Plants
            </h1>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-4 lg:p-2 mb-16">

                {plants.map((plant) => (
                    <div key={plant.id} className="bg-base-200 shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 ease-in-out">
                        <Link href={`/plants/${plant.id}`}>
                            <div className="relative">
                                {plant.images && plant.images.length > 0 ? (
                                    <Image
                                        src={plant.images[0].image}
                                        alt={plant.title}
                                        height={227}
                                        width={384}
                                        className='h-56 object-cover rounded-t-xl'
                                    />
                                ) : (
                                    <Image
                                        src="/static/no-img.png"
                                        alt={plant.title}
                                        height={227}
                                        width={384}
                                        className='h-56 object-cover rounded-t-xl'
                                    />
                                )}
                            </div>
                            <div className="p-4">
                                <h2 className="text-lg font-semibold">{plant.title}</h2>
                                <p className="text-sm">{plant.category.name}</p>
                                <p className="text-xs">{plant.tags.map(tag => tag.name).join(', ')}</p>
                            </div>
                        </Link>
                    </div>
                ))}

            </div>
            <div className="fixed bottom-4 right-4">
                <Pagination baseURL={baseURL} totalPages={totalPages} />
            </div>
        </>
    );
}