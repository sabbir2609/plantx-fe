import { Fetch } from '@/app/lib';
import Image from 'next/image';
import Link from 'next/link';

interface Category {
    id: number;
    title: string;
    type: string;
    image: string;
}

async function getCommercialCategories() {
    const data = await Fetch({ endpoint: 'main/service_categories/commercial/' });
    return data;
}

export default async function Page() {

    const commercialCategories: Category[] = await getCommercialCategories();

    return (
        <div className="mx-auto p-2">

            <h2 className="mb-2 text-2xl font-semibold">
                Commercial Services
            </h2>
            <div className="grid grid-cols-2 gap-4 mb-4 md:grid-cols-2 lg:grid-cols-4">
                {commercialCategories.map((category) => (
                    <Link
                        key={category.id}
                        href={`/services/commercial/${category.id}`}
                        className="group relative block h-48 overflow-hidden rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
                    >
                        <Image
                            src={category.image || '/static/viriditas.png'}
                            alt={category.title}
                            layout="fill"
                            objectFit="cover"
                            className="transition duration-300 ease-in-out group-hover:opacity-75"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                            <h2 className="text-xl font-bold text-white text-center">{category.title}</h2>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}