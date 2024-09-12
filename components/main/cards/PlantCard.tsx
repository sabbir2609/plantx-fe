import Image from 'next/image';
import Link from 'next/link';

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
        <div className="shadow-lg bg-base-200 rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl">
            <Link href={`/plants/${plant.slug}`}>
                <div className="relative">
                    <Image
                        src={plant.image ? plant.image : "/static/viriditas.webp"}
                        alt={plant.name}
                        height={227}
                        width={384}
                        className="h-56 w-full object-cover transform transition-transform duration-300 hover:scale-105"
                    />

                    {plant.features && plant.features.length > 0 && (
                        <div className="absolute top-2 right-2 space-y-1">
                            {plant.features.map((feature) => (
                                <div key={feature.id} className="flex items-center px-2 py-1 rounded-lg backdrop-blur-md bg-gray-800 bg-opacity-50 text-white">
                                    <span className="text-xs">
                                        {feature.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                <div className="p-4">
                    <h2 className="text-lg font-semibold mb-2 leading-5 lg:leading-6">
                        {plant.name}
                    </h2>
                    <p className="text-sm mb-1">
                        <span className="font-medium">Category:</span> {plant.category}
                    </p>
                    <p className="text-sm mb-1">
                        <span className="font-medium">Location:</span> {plant.location_type}
                    </p>
                    <p className="text-sm mb-1">
                        <span className="font-medium">Size:</span> {plant.size}
                    </p>
                    <p className="text-xs italic text-gray-500">
                        <span className="font-medium">SKU:</span> <span className="lowercase">{plant.sku}</span>
                    </p>
                </div>
            </Link>
        </div>
    );
}
