"use client";

import Image from 'next/image';

import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import Loading from '@/app/loading';

interface PlantCategory {
    id: number;
    name: string;
}

interface Tag {
    id: number;
    name: string;
}

interface PlantImage {
    id: number;
    image: string;
    short_description: string;
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
    images: PlantImage[];
}

const richTextStyles: Record<string, string> = {
    h1: 'text-2xl font-bold mb-4',
    h2: 'text-xl font-semibold mb-3',
    p: 'mb-2',
    ul: 'list-disc pl-5 mb-2',
    ol: 'list-decimal pl-5 mb-2',
    blockquote: 'border-l-4 border-gray-300 pl-4 italic text-gray-600 mb-4',
    a: 'text-blue-500 underline',
    pre: 'bg-gray-200 p-2 rounded mb-2',
    code: 'bg-gray-200 p-1 rounded',
};

export default function Plants({ params }: { params: { id: number } }) {

    const [plant, setPlant] = useState<Plant>({
        id: 0,
        title: '',
        category: { id: 0, name: '' },
        indoor_or_outdoor: '',
        size: '',
        description: '',
        care_instructions: '',
        tags: [],
        created_at: '',
        images: []
    });

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_HOST}/plants/${params.id}`)
            .then(response => response.json())
            .then(data => setPlant(data));
    }, [params.id]);

    console.log(plant.description);

    if (plant.id === 0) {
        return <Loading />;
    }

    return (

        <div className='p-2'>
            <h1 className="text-3xl font-bold mb-4">Plant Details</h1><div className="mx-auto flex flex-wrap">
                <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
                    {plant.images.length > 0 ? (
                        <Swiper
                            pagination={{
                                dynamicBullets: true,
                            }}
                            modules={[Pagination]}
                            className="mySwiper lg:h-[500px] rounded-lg shadow-lg"
                        >
                            {plant.images.map(image => (
                                <SwiperSlide key={image.id}>
                                    <Image
                                        src={image.image}
                                        height={800}
                                        width={800}
                                        className='object-cover'
                                        alt={image.short_description} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    ) : (
                        <div className="relative h-64 lg:h-auto">
                            <Image
                                src="/static/no-img.png"
                                height={800}
                                width={800}
                                alt="Placeholder" />
                        </div>
                    )}
                </div>

                <div className="w-full lg:w-1/2 lg:pl-4">
                    <div className="shadow-lg rounded-lg overflow-hidden">
                        <div className="p-4">
                            <h1 className="text-2xl font-bold">{plant.title}</h1>
                            <p className="text-xl">{plant.category.name}</p>

                            <div className="join join-vertical w-full">
                                <div className="collapse collapse-arrow join-item border border-base-300 rounded-sm">
                                    <input type="radio" name="my-accordion" />
                                    <div className="collapse-title text-xl font-medium">
                                        Description
                                    </div>
                                    <div className="collapse-content">
                                        <div
                                            className="prose"
                                            style={richTextStyles}
                                            dangerouslySetInnerHTML={{ __html: plant.description }}></div>
                                    </div>
                                </div>
                                <div className="collapse collapse-arrow join-item border border-base-300">
                                    <input type="radio" name="my-accordion" />
                                    <div className="collapse-title text-xl font-medium">
                                        Care Instructions
                                    </div>
                                    <div className="collapse-content">
                                        <div
                                            className="prose"
                                            style={richTextStyles}
                                            dangerouslySetInnerHTML={{ __html: plant.care_instructions }}></div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4">
                                <h2 className="text-lg font-semibold">Tags</h2>
                                <p className="text-sm">{plant.tags.map(tag => tag.name).join(', ')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}