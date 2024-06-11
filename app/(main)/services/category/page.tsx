import Image from 'next/image';
import Link from 'next/link';

interface Category {
    id: number;
    title: string;
    description: string;
    image: string;
}

export default async function Page() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/service_categories/`);
    if (!res.ok) {
        return <div>Error</div>;
    }
    if (res.status === 204) {
        return <div>No data</div>;
    }
    const categories: Category[] = await res.json();
    return (
        <div className="min-h-full bg-base-100">
            <h1 className="text-4xl font-bold text-center mb-8">Our Service Categories</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
                {categories.map((category, index) => (
                    <Link
                        key={category.id}
                        href={`/services/category/${category.id}`}
                        className="block shadow-md rounded-lg overflow-hidden relative h-32 hover:scale-105 transition-transform duration-300 ease-in-out"
                    >
                        {category.image && category.image.length > 0 ? (
                            <Image
                                src={category.image}
                                alt={category.title}
                                height={227}
                                width={384}
                                className='w-full h-48 object-cover absolute z-0'
                            />
                        ) : (
                            <Image
                                src="/static/no-img.png"
                                alt={category.title}
                                height={227}
                                width={384}
                                className='w-full h-48 object-cover absolute z-0'
                            />
                        )}

                        <div className="p-4 relative z-10 flex items-center justify-center h-full bg-black bg-opacity-50">
                            <h2 className="text-xl font-semibold text-white">{category.title}</h2>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}