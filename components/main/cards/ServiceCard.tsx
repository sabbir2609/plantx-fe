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
        <div key={service.id} className="bg-base-200 shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl">
            <Link href={`/services/${service.slug}`}>
                <div className="relative">
                    <Image
                        src={service.image || '/static/viriditas.webp'}
                        alt={service.title}
                        height={227}
                        width={384}
                        className='h-56 object-cover transform transition-transform duration-300 hover:scale-105'
                    />
                </div>

                <div className="p-3">
                    <p className="text-xs mb-2">
                        {service.categories && service.categories.length > 0 ? `${service.categories[0].type} ${service.categories[0].title}` : 'None'}
                    </p>
                    <h2 className="text-lg font-normal tracking-tight leading-5">{service.title}</h2>
                </div>
            </Link>
        </div>
    );
}