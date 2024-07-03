import Image from 'next/image';
import Link from 'next/link';

interface Category {
    id: number;
    title: string;
    type: string;
    description: string;
    image: string;
}


async function getCommercialCategories() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/service_categories/commercial/`,
        {
            cache: "no-cache",
        }
    );
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    return await res.json();
}

async function getResidentialCategories() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/service_categories/residential/`,
        {
            cache: "no-cache",
        }
    );
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    return await res.json();
}

export default async function Page() {

    const commercialCategories: Category[] = await getCommercialCategories();
    const residentialCategories: Category[] = await getResidentialCategories();

    return (
        <div className="min-h-full bg-base-100">

            <h1 className="mb-8 text-2xl font-bold">All Service Categories</h1>

            <h2 className="mb-2 text-2xl font-semibold">
                Commercial Services
            </h2>
            <div className="grid grid-cols-2 gap-2 mb-4 md:grid-cols-2 lg:grid-cols-4">
                {commercialCategories.map((category) => (
                    <Link
                        key={category.id}
                        href={`/services/category/${category.id}`}
                        className="relative block h-32 overflow-hidden rounded-lg shadow-md"
                    >
                        {category.image && category.image.length > 0 ? (
                            <Image
                                src={category.image}
                                alt={category.title}
                                height={227}
                                width={384}
                                className='absolute z-0 object-cover w-full h-48'
                            />
                        ) : (
                            <Image
                                src="/static/no-img.png"
                                alt={category.title}
                                height={227}
                                width={384}
                                className='absolute z-0 object-cover w-full h-48'
                            />
                        )}

                        <div className="relative z-10 flex items-center justify-center h-full p-4 bg-black bg-opacity-50">
                            <h2 className="text-xl font-semibold text-white">{category.title}</h2>
                        </div>
                    </Link>
                ))}
            </div>

            <h2 className="mb-2 text-2xl font-semibold">
                Residential Services
            </h2>
            <div className="grid grid-cols-2 gap-2 md:grid-cols-2 lg:grid-cols-4">

                {residentialCategories.map((category) => (
                    <Link
                        key={category.id}
                        href={`/services/category/${category.id}`}
                        className="relative block h-32 overflow-hidden rounded-lg shadow-md"
                    >
                        {category.image && category.image.length > 0 ? (
                            <Image
                                src={category.image}
                                alt={category.title}
                                height={227}
                                width={384}
                                className='absolute z-0 object-cover w-full h-48'
                            />
                        ) : (
                            <Image
                                src="/static/no-img.png"
                                alt={category.title}
                                height={227}
                                width={384}
                                className='absolute z-0 object-cover w-full h-48'
                            />
                        )}

                        <div className="relative z-10 flex items-center justify-center h-full p-4 bg-black bg-opacity-50">
                            <h2 className="text-xl font-semibold text-white">{category.title}</h2>
                        </div>
                    </Link>
                ))}
            </div>

        </div>
    );
}