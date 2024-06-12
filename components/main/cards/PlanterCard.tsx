import Image from 'next/image';
import Link from 'next/link';

interface PlanterCategory {
    id: number;
    name: string;
    description: string;
    image: string;
}

interface Planter {
    id: number;
    model: string;
    category: PlanterCategory;
    size: string;
    color: string;
    images: { id: number; image: string }[];
}

export default function PlanterCard({ planter }: { planter: Planter }) {
    return (
        <div key={planter.id} className="bg-base-200 shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 ease-in-out">
            <Link href={`/planters/${planter.id}`}>
                <div className="relative">
                    {planter.images && planter.images.length > 0 ? (
                        <Image
                            src={planter.images[0].image}
                            alt={planter.model}
                            height={227}
                            width={384}
                            className='h-56 object-cover'
                        />
                    ) : (
                        <Image
                            src="/static/no-img.png"
                            alt={planter.model}
                            height={227}
                            width={384}
                            className='h-56 object-cover'
                        />
                    )}
                </div>
                <div className="p-3">
                    <h2 className="text-lg font-semibold">{planter.model}</h2>
                    <p className="text-sm">{planter.category.name}</p>
                    <p className="text-sm">{planter.size}</p>
                    <p className="text-sm">{planter.color}</p>
                </div>
            </Link>
        </div>
    );
}