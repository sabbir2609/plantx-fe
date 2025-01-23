import { Fetch } from "@/app/lib";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Planters Categories',
    description: 'Browse all planters categories offered by Viriditas',
}


interface PlantersCategory {
    id: number;
    name: string;
    slug: string;
    image: string;
}

export default async function PlantersCategoryPage() {
    const data = await Fetch({ endpoint: "main/planter_categories" });
    const PlantersCategories: PlantersCategory[] = data;

    if (PlantersCategories.length === 0) {
        return (
            <div className="text-center mt-16">
                <h1 className="text-3xl font-bold mb-6">No planters categories found</h1>
            </div>
        );
    }

    return (
        <div className="p-2 mx-auto">

            <h1 className="text-3xl font-bold mb-6">Planters Categories</h1>

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-6">
                {PlantersCategories.map((category) => (
                    <Link
                        key={category.id}
                        href={`/planters/category/${category.slug}`}
                        className="block shadow-md rounded-lg overflow-hidden relative h-32 hover:scale-105 transition-transform duration-300 ease-in-out"
                    >
                        <Image
                            src={category.image ? category.image : "/static/viriditas.webp"}
                            alt={category.name}
                            height={200}
                            width={200}
                            className="w-full h-48 object-cover absolute z-0"
                        />
                        <div className="p-4 relative z-10 flex items-center justify-center h-full bg-black bg-opacity-50">
                            <h2 className="text-xl font-semibold text-white">{category.name}</h2>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}