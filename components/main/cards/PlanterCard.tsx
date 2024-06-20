import Image from 'next/image';
import Link from 'next/link';

interface PlanterCategory {
    name: string;
}

interface Planter {
    id: number;
    model: string;
    category: PlanterCategory;
    features: { id: number; name: string }[];
    size: string;
    color: string;
    images: { id: number; image: string }[];
}

export default function PlanterCard({ planter }: { planter: Planter }) {
    return (
        <div key={planter.id} className="bg-base-200 shadow-lg rounded-lg overflow-hidden lg:hover:scale-105 transition-transform duration-300 ease-in-out">
            <Link href={`/planters/${planter.id}`}>
                <div className="relative">
                    <Image
                        src={planter.images && planter.images.length > 0 ? planter.images[0].image : "/static/no-img.png"}
                        alt={planter.model}
                        height={227}
                        width={384}
                        className='h-56 object-cover'
                    />
                    {planter.features && planter.features.length > 1 && planter.features[1] ? (
                        <div className="absolute top-2 left-2 py-1 px-2 rounded-sm backdrop-blur-md bg-gray-800 bg-opacity-50 text-white">
                            <p className="text-xs font-medium mr-1">{planter.features[1].name}</p>
                        </div>
                    ) : null}
                </div>
                <div className="p-3">
                    <h2 className="text-lg font-semibold">{planter.model}</h2>
                    {planter.features && planter.features.length > 0 && (
                        <p className="text-sm italic">{planter.features[0].name}</p>
                    )}
                </div>
            </Link>
        </div>
    );
}