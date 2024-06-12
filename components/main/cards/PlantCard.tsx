import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface PlantCategory {
    id: number;
    name: string;
    description: string;
    image: string;
}

interface Tag {
    id: number;
    name: string;
}

interface Plant {
    id: number;
    title: string;
    category: PlantCategory;
    indoor_or_outdoor: string;
    size: string;
    description: string;
    care_instructions: string;
    tags: Tag[];
    created_at: string;
    images: { id: number; image: string }[];
}

type PlantCardProps = {
    plant: Plant;
};

export default function PlantCard({ plant }: PlantCardProps) {

    return (
        <div key={plant.id} className="bg-base-200 shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 ease-in-out">
            <Link href={`/plants/${plant.id}`}>
                <div className="relative">
                    {plant.images && plant.images.length > 0 ? (
                        <Image
                            src={plant.images[0].image}
                            alt={plant.title}
                            height={227}
                            width={384}
                            className='h-56 object-cover'
                        />
                    ) : (
                        <Image
                            src="/static/no-img.png"
                            alt={plant.title}
                            height={227}
                            width={384}
                            className='h-56 object-cover'
                        />
                    )}
                    <div className="absolute top-0 left-0 py-1 px-2 rounded-br-md backdrop-blur-md bg-base-200 bg-opacity-50">
                        {plant.tags.map(tag => (
                            <p key={tag.id} className="text-sm flex flex-col lg:gap-2 lg:flex-row">
                                {tag.name}
                            </p>
                        ))}
                    </div>
                </div>
                <div className="p-3">
                    <h2 className="text-lg font-semibold">{plant.title}</h2>
                    <p className="text-sm">{plant.category.name}</p>
                    <p className="text-sm">{plant.indoor_or_outdoor}</p>
                </div>
            </Link>
        </div>
    );
}