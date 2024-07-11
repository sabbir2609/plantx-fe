import { Fetch } from '@/app/lib';
import Image from 'next/image';
import Link from 'next/link';

interface Category {
    id: number;
    title: string;
    type: string;
    description: string;
    image: string;
}

async function getResidentialCategories() {
    const data = await Fetch({ endpoint: 'main/service_categories/residential/' });
    return data;
}

export default async function Page() {

    const residentialCategories: Category[] = await getResidentialCategories();

    return (
        <div className="min-h-full bg-base-100">

            <h2 className="mb-2 text-2xl font-semibold">
                Residential Services
            </h2>
            <div className="grid grid-cols-2 gap-2 md:grid-cols-2 lg:grid-cols-4">

                {residentialCategories.map((category) => (
                    <Link
                        key={category.id}
                        href={`/services/residential/${category.id}`}
                        className="group relative block h-48 overflow-hidden rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
                    >
                        <Image
                            src={category.image || '/static/no-img.png'}
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