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

            <div className="bg-base-200 shadow-lg rounded-lg overflow-hidden mb-6">
                <div className="relative h-64">
                    <Image
                        src={category.image}
                        alt={category.name}
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
                <div className="p-4">
                    <h1 className="text-3xl font-semibold">{category.name}</h1>
                    <p className="mt-2">{category.description}</p>
                </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-6">

                {plants.map((plant) => (
                    <div key={plant.id} className="bg-base-200 shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 ease-in-out">
                        <Link href={`/plants/${plant.id}`}>
                            <div className="relative h-48">
                                {plant.images && plant.images.length > 0 ? (
                                    <Image
                                        src={plant.images[0].image}
                                        alt={plant.title}
                                        layout="fill"
                                        objectFit="cover"
                                    />
                                ) : (
                                    <Image
                                        src="/static/no-img.png"
                                        alt={plant.title}
                                        layout="fill"
                                        objectFit="cover"
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