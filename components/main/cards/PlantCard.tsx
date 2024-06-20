import Link from 'next/link';
import Image from 'next/image';

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
    features: { id: number, name: string }[];
    tags: Tag[];
    created_at: string;
    images: { id: number; image: string }[];
}

type PlantCardProps = {
    plant: Plant;
};

export default function PlantCard({ plant }: PlantCardProps) {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 lg:hover:scale-105">
            <Link href={`/plants/${plant.id}`}>
                <div className="relative">
                    <Image
                        src={plant.images && plant.images.length > 0 ? plant.images[0].image : "/static/no-img.png"}
                        alt={plant.title}
                        height={227}
                        width={384}
                        className="h-56 w-full object-cover"
                    />
                    <div className="absolute top-2 left-2 py-1 px-2 rounded-sm backdrop-blur-md bg-gray-800 bg-opacity-50 text-white">
                        {plant.features.map(feature => (
                            <span key={feature.id} className="text-xs font-medium mr-1">
                                {feature.name}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="p-4">
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">{plant.title}</h2>
                    <p className="text-sm text-gray-600 mb-1">{plant.category.name}</p>
                    <p className="text-sm text-gray-600">{plant.indoor_or_outdoor}</p>
                </div>
            </Link>
        </div>
    );
}
