import { ChartBarStacked, MapPinHouse, Palette, Scale3D } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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

export default function PlantCard({ plant }: { plant: Plant }) {
  return (
    <div className="transform overflow-hidden rounded-lg bg-base-200 shadow-lg transition-transform hover:scale-105 hover:shadow-2xl">
      <Link href={`/plants/${plant.slug}`}>
        <div className="relative">
          <Image
            src={plant.image ? plant.image : "/static/viriditas.webp"}
            alt={plant.name}
            height={227}
            width={384}
            className="h-56 w-full transform object-cover transition-transform duration-300 hover:scale-105"
          />
          {plant.features && plant.features.length > 0 && (
            <div className="absolute right-2 top-2 space-y-1">
              {plant.features.map((feature) => (
                <div
                  key={feature.id}
                  className="flex items-center rounded-lg bg-gray-800 bg-opacity-50 px-2 py-1 text-white backdrop-blur-md"
                >
                  <span className="text-xs">{feature.name}</span>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="p-4">
          <h2 className="font-normal tracking-tight lg:font-semibold">
            {plant.name}
          </h2>
          <p className="flex items-center text-sm">
            <ChartBarStacked size={16} className="mr-2" />
            {plant.category}
          </p>
          <p className="flex items-center text-sm">
            <MapPinHouse size={16} className="mr-2" />
            {plant.location_type}
          </p>
          <p className="flex items-center text-sm">
            <Scale3D size={16} className="mr-2" />
            {plant.size}
          </p>
          <p className="text-xs text-gray-500">
            <span className="font-medium">SKU:</span>{" "}
            <span className="lowercase">{plant.sku}</span>
          </p>
        </div>
      </Link>
    </div>
  );
}
