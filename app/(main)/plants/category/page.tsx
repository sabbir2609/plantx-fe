import Image from "next/image";
import Link from "next/link";

export default function PlantsCategoryPage() {

    const PlantCategories = [
        {
            "id": 1,
            "name": "Tropical Plants",
            "description": "Lush, green plants that thrive in warm, humid environments.",
            "image": "/images/plants/plant1.jpg"
        },
        {
            "id": 2,
            "name": "Succulents",
            "description": "Low-maintenance plants that store water in their thick leaves.",
            "image": "/images/plants/plant2.jpg"
        },
        {
            "id": 3,
            "name": "Cacti",
            "description": "Spiny plants that require minimal watering and thrive in dry conditions.",
            "image": "/images/plants/plant3.jpg"
        },
        {
            "id": 4,
            "name": "Flowering Plants",
            "description": "Beautiful plants known for their colorful blooms.",
            "image": "/images/plants/plant4.jpg"
        },
        {
            "id": 5,
            "name": "Ferns",
            "description": "Feathery plants that grow well in shaded, moist environments.",
            "image": "/images/plants/plant5.jpg"
        },
        {
            "id": 6,
            "name": "Herbs",
            "description": "Aromatic plants commonly used in cooking and medicine.",
            "image": "/images/plants/plant6.jpg"
        },
        {
            "id": 7,
            "name": "Ornamental Grasses",
            "description": "Decorative grasses that add texture and movement to gardens.",
            "image": "/images/plants/plant7.jpg"
        },
        {
            "id": 8,
            "name": "Aquatic Plants",
            "description": "Plants that grow in or near water and thrive in wet conditions.",
            "image": "/images/plants/plant8.jpg"
        },
        {
            "id": 9,
            "name": "Climbers and Creepers",
            "description": "Plants that climb or spread along surfaces, perfect for vertical gardens.",
            "image": "/images/plants/plant9.jpg"
        },
        {
            "id": 10,
            "name": "Air Plants",
            "description": "Unique plants that don't require soil and absorb moisture from the air.",
            "image": "/images/plants/plant9.jpg"
        }
    ]

    return (
        <div className="container mx-auto py-12">
            <h1 className="text-3xl font-bold mb-6">Plant Categories</h1>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

                {PlantCategories.map((category) => (
                    <Link
                        key={category.id}
                        href={`/plants/category/${category.name.toLowerCase().replace(/ /g, "-")}`}
                        className="block shadow-md rounded-lg overflow-hidden relative h-32"
                    >
                        <Image
                            height={200}
                            width={300}
                            src={category.image}
                            alt={category.name}
                            className="w-full h-48 object-cover absolute z-0 hover:scale-105 transition-transform duration-300 ease-in-out"
                        />
                        <div className="p-4 relative z-10 text-white">
                            <h2 className="text-xl font-semibold">{category.name}</h2>
                        </div>
                    </Link>
                ))}

            </div>
        </div>
    );
}