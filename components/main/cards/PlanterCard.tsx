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
        <Link href={`/planters/${planter.id}`} className="card card-compact bg-base-200 shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out">
            <figure>
                {planter.images && planter.images.length > 0 ? (
                    <Image
                        src={planter.images[0].image}
                        alt={planter.model}
                        height={227}
                        width={384}
                        className='object-cover'
                    />
                ) : (
                    <Image
                        src="/static/no-img.png"
                        alt={planter.model}
                        height={227}
                        width={384}
                        className='object-cover'
                    />
                )}
            </figure>
            <div className="card-body">
                <h2 className="card-title">{planter.model}</h2>
                <p>{planter.category.name}</p>
                <p>{planter.size}</p>
                <p>{planter.color}</p>
            </div>
        </Link>
    );
}