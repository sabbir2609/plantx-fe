import Image from 'next/image';
import Link from 'next/link';

interface Category {
    id: number;
    title: string;
}

interface Service {
    id: number;
    title: string;
    description: string;
    image: string | null;
    budget_range: string;
    category: Category;
    type: string;
}

export default function PlanterCard({ service }: { service: Service }) {
    return (
        <div key={service.id} className="bg-base-200 shadow-lg rounded-lg overflow-hidden">
            <Link href={`/services/${service.id}`}>
                <div className="relative">
                    <Image
                        src={service.image && service.image.length > 0 ? service.image : "/static/no-img.png"}
                        alt={service.title}
                        height={227}
                        width={384}
                        className='h-56 object-cover'
                    />
                </div>
                <div className="p-3">
                    <p className="text-sm p-1 font-serif text-emerald-900 rounded-sm">{service.type}</p>
                    <h2 className="text-lg font-semibold">{service.title}</h2>
                    <p className="text-sm italic text-primary">{service.category.title}</p>
                </div>
            </Link>
        </div>
    );
}