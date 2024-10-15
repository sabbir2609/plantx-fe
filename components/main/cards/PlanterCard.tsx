import { ChartBarStacked, Palette, Scale3D } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface PlanterFeature {
  id: number;
  name: string;
}

interface Planter {
  id: number;
  name: string;
  slug: string;
  sku: string;
  category: string;
  size: string;
  color: string;
  is_custom: boolean;
  image: string;
  features: PlanterFeature[];
}

export default function PlanterCard({ planter }: { planter: Planter }) {
  return (
    <Link
      key={planter.id}
      className="overflow-hidden rounded-lg bg-base-200 shadow-lg"
      href={`/planters/${planter.slug}`}>
      <div className="relative">
        <Image
          src={planter.image ? planter.image : "/static/viriditas.webp"}
          alt={planter.name}
          height={227}
          width={384}
          className="h-56 object-cover transition-transform duration-300 ease-in-out lg:hover:scale-105"
        />
        {planter.features && planter.features.length > 0 ? (
          <div className="absolute left-2 top-2 flex flex-col">
            {planter.features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-row rounded-sm bg-gray-800 bg-opacity-50 px-2 py-1 text-white backdrop-blur-md"
              >
                <p className="mr-1 text-xs font-medium">{feature.name}</p>
              </div>
            ))}
          </div>
        ) : null}
      </div>
      <div className="flex flex-col p-3">
        <h2
          className="font-normal tracking-tight lg:font-semibold"
          title={planter.name}
        >
          {planter.name}
        </h2>
        {planter.category && (
          <p className="flex items-center text-sm">
            {planter.category}
          </p>
        )}
      </div>
    </Link>
  );
}
