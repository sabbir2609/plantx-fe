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
    image: string;
    categories: Category[];
    tags: string[];
}

export default function ServiceCard({ service }: { service: Service }) {
    return (
        <div key={service.id} className="bg-base-200 shadow-lg rounded-lg overflow-hidden">
            <Link href={`/services/${service.id}`}>
                <div className="relative">
                    <Image
                        src={service.image || '/static/viriditas.png'}
                        alt={service.title}
                        height={227}
                        width={384}
                        className='h-56 object-cover'
                    />
                </div>

                <div className="p-3">
                    <p className="text-xs rounded-sm">
                        {service.categories && service.categories.length > 1 ? service.categories[1].type : 'None'}
                    </p>
                    <h2 className="text-lg font-normal tracking-tight">{service.title}</h2>
                    <p className="text-sm">
                        {service.categories && service.categories.length > 0 ? service.categories[0].title : 'None'}
                    </p>
                </div>

            </Link>
        </div>
    );
}