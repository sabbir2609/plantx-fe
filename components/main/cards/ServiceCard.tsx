import Image from 'next/image';
import Link from 'next/link';

interface Category {
    id: number;
    type: string;
    title: string;
}

interface Service {
    id: number;
    title: string;
    slug: string;
    image: string;
    categories: Category[];
}

export default function ServiceCard({ service }: { service: Service }) {
    return (
        <div key={service.id} className="bg-base-200 shadow-lg rounded-lg overflow-hidden">
            <Link href={`/services/${service.slug}`}>
                <div className="relative">
                    <Image
                        src={service.image || '/static/viriditas.webp'}
                        alt={service.title}
                        height={227}
                        width={384}
                        className='h-56 object-cover'
                    />
                </div>

                <div className="p-3">
                    <p className="text-xs mb-2">
                        {service.categories && service.categories.length > 1 ? `${service.categories[1].type} ${service.categories[1].title} ` : 'None'}
                    </p>
                    <h2 className="text-lg font-normal tracking-tight leading-5">{service.title}</h2>
                </div>

            </Link>
        </div>
    );
}