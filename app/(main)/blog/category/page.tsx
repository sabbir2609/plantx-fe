import Link from "next/link";
import Image from "next/image";
import { Fetch } from "@/app/lib";

interface BlogCategory {
    id: number;
    name: string;
    short_description: string;
    slug: string;
    image: string;
}

export default async function Page() {
    const data = await Fetch({ endpoint: "blog/categories/" });
    const categories: BlogCategory[] = data;

    return (
        <div className="mx-auto p-2">
            <h1 className="text-3xl font-semibold text-center p-10">Blog Categories</h1>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {categories.map((category, index) => (
                    <Link
                        key={category.id}
                        href={`/blog/category/${category.slug}`}
                        className={`group relative flex flex-col items-center rounded-lg shadow-md overflow-hidden ${index === 0 ? 'lg:col-span-1 lg:row-span-1' : index === 1 ? 'lg:col-span-2 lg:row-span-1' : ''} ${index < 2 ? 'h-[50vh]' : 'h-[40vh]'}`}
                    >
                        <div className="relative w-full h-full">
                            <Image
                                src={category.image || '/static/viriditas.webp'}
                                alt={category.name}
                                layout="fill"
                                objectFit="cover"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-0 transition-opacity duration-300"></div>
                        <div className={`absolute ${index === 0 ? 'top-4 left-4' : index === 1 ? 'bottom-4 right-4' : 'bottom-4 left-4'} p-4 z-10 text-white group-hover:text-black`}>
                            <h3 className="text-lg lg:text-3xl font-semibold">{category.name}</h3>
                            <p className="mt-2 tracking-tight">{category.short_description}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}