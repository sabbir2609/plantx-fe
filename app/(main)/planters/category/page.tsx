import Image from "next/image";
import Link from "next/link";

interface PlantersCategory {
    id: number;
    name: string;
    image: string;
}

export default async function PlantersCategoryPage() {
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_HOST}/planter_categories`,
        { cache: 'no-cache' }
    );

    if (!response.ok) {
        throw new Error("Failed to fetch Planters categories");
    }

    const PlantersCategories: PlantersCategory[] = await response.json();

    return (
        <div className="container mx-auto">

            <h1 className="text-3xl font-bold mb-6">Planters Categories</h1>

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-6">
                {PlantersCategories.map((category) => (
                    <Link
                        key={category.id}
                        href={`/planters/category/${category.id}`}
                        className="block shadow-md rounded-lg overflow-hidden relative h-32 hover:scale-105 transition-transform duration-300 ease-in-out"
                    >
                        <Image
                            height={200}
                            width={300}
                            src={category.image}
                            alt={category.name}
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