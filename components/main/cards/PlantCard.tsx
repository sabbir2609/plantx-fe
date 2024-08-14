import Link from 'next/link';
import Image from 'next/image';

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

export default function PlantCard(
    { plant }: { plant: Plant }
) {
    return (
        <div className="shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 lg:hover:scale-105 bg-base-200">
            <Link href={`/plants/${plant.slug}`}>
                <div className="relative">
                    <Image
                        src={plant.image ? plant.image : "/static/viriditas.png"}
                        alt={plant.name}
                        height={227}
                        width={384}
                        className="h-56 w-full object-cover transform transition-transform duration-300 hover:scale-105"
                    />

                    {plant.features && plant.features.length > 0 && (
                        <div className="absolute top-2 right-2 py-1 px-2 rounded-sm backdrop-blur-md bg-gray-800 bg-opacity-50 text-white">
                            {plant.features.map(feature => (
                                <span key={feature.id} className="text-xs font-medium mr-1">
                                    {feature.name}
                                </span>
                            ))}
                        </div>
                    )}

                </div>
                <div className="p-4">
                    <h2 className="text-lg font-semibold mb-2 leading-5 lg:leading-6">
                        {plant.name}
                    </h2>
                    <p className="text-sm">
                        <span className="text-accent">{plant.category}</span>
                    </p>
                    <p className="text-sm">
                        <span className="text-accent">{plant.location_type}</span>
                    </p>
                    <p className="text-sm">
                        <span className="text-accent">{plant.size}</span>
                    </p>
                    <p className="text-xs italic">
                        sku: <span className="text-accent lowercase">{plant.sku}</span>
                    </p>
                </div>
            </Link>
        </div>
    );
}
