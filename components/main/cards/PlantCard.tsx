import Link from 'next/link';
import Image from 'next/image';

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

export default function PlantCard(
    { plant }: { plant: Plant }
) {
    return (
        <div className="shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 lg:hover:scale-105">
            <Link href={`/plants/${plant.id}`}>
                <div className="relative">
                    <Image
                        src={plant.images.length > 0 ? plant.images[0].image : "/static/viriditas.png"}
                        alt={plant.title}
                        height={227}
                        width={384}
                        className="h-56 w-full object-cover"
                    />
                    <div className="absolute top-2 left-2 py-1 px-2 rounded-sm backdrop-blur-md bg-gray-800 bg-opacity-50 text-white">
                        {plant.features?.map(feature => (
                            <span key={feature.id} className="text-xs font-medium mr-1">
                                {feature.name}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="p-4">
                    <h2 className="text-xl font-semibold mb-2">{plant.title}</h2>
                    <p className="text-sm mb-1">{plant.category.name}</p>
                    <p className="text-sm">{plant.indoor_or_outdoor}</p>
                </div>
            </Link>
        </div>
    );
}
