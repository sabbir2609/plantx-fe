import Image from 'next/image';
import Link from 'next/link';

interface PlanterCategory {
    name: string;
}

interface Planter {
    id: number;
    model: string;
    category: PlanterCategory;
    features?: { id: number; name: string }[];
    short_description: string;
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
                    {planter.features && planter.features.length > 0 ? (
                        <div className="absolute top-2 left-2 flex flex-col">
                            {planter.features.map((feature, index) => (
                                <div key={index} className="py-1 px-2 rounded-sm backdrop-blur-md bg-gray-800 bg-opacity-50 text-white flex flex-row">
                                    <p className="text-xs font-medium mr-1">{feature.name}</p>
                                </div>
                            ))}
                        </div>
                    ) : null}
                </div>
                <div className="flex flex-col p-3">
                    <h2 className='tracking-tight font-normal lg:font-semibold' title={planter.model}>
                        {planter.model}
                    </h2>
                    <p className="text-xs">{planter.short_description}</p>
                </div>
            </Link>
        </div>
    );
}