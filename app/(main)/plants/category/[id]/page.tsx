import Loading from "@/app/loading";
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


async function fetchCategory(id: number) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/plant_categories/${id}`, { cache: 'no-cache' });
    return res.json();

}

async function fetchPlants(id: number) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/plant_categories/${id}/plants`, { cache: 'no-cache' });
    const data = await res.json();
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

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-5">

                {plants.map((plant) => (
                    <div key={plant.id} className="bg-base-200 shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 ease-in-out">
                        <Link href={`/plants/${plant.id}`}>
                            <div className="relative">
                                {plant.images && plant.images.length > 0 ? (
                                    <Image
                                        src={plant.images[0].image}
                                        height={500}
                                        width={500}
                                        alt={plant.title}
                                        className="object-cover"
                                    />
                                ) : (
                                    <Image
                                        src="/static/no-img.png"
                                        height={500}
                                        width={500}
                                        alt={plant.title}
                                        className="object-cover"
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

        </div>
    );
}