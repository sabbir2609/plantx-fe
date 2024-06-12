import Image from 'next/image';
import Link from 'next/link';

interface Category {
    id: number;
    title: string;
}

interface Type {
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
    type: Type;
}

export default function PlanterCard({ service }: { service: Service }) {
    return (
        <div key={service.id} className="bg-base-200 shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 ease-in-out">
            <Link href={`/services/${service.id}`}>
                <div className="relative">
                    {service.image && service.image.length > 0 ? (
                        <Image
                            src={service.image}
                            alt={service.title}
                            height={227}
                            width={384}
                            className='h-56 object-cover'
                        />
                    ) : (
                        <Image
                            src="/static/no-img.png"
                            alt={service.title}
                            height={227}
                            width={384}
                            className='h-56 object-cover'
                        />
                    )}
                </div>
                <div className="p-3">
                    <h2 className="text-lg font-semibold">{service.title}</h2>
                    <p className="text-sm">{service.category.title}</p>
                    <p className="text-sm">{service.type.title}</p>
                </div>
            </Link>
        </div>
    );
}