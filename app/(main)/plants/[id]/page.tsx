"use client";

import Image from 'next/image';

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

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


export default async function Plants({ params }: { params: { id: number } }) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/plants/${params.id}`, { cache: 'no-cache' });
    const plant: Plant = await res.json();

    return (
        <div className="mx-auto flex flex-wrap">

            <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
                {plant.images.length > 0 ? (
                    <Swiper
                        pagination={{
                            dynamicBullets: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper lg:h-[550px] rounded-lg shadow-lg"
                    >
                        {plant.images.map(image => (
                            <SwiperSlide key={image.id}>
                                <Image
                                    src={image.image}
                                    height={800}
                                    width={800}
                                    objectPosition='center'
                                    objectFit="fill"
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
                            objectFit="fill"
                            className="object-cover w-full h-64 lg:h-auto shadow-lg rounded-lg"
                            alt="Placeholder" />
                    </div>
                )}
            </div>

            <div className="w-full lg:w-1/2 lg:pl-4">
                <div className="shadow-lg rounded-lg overflow-hidden">
                    <div className="p-4">
                        <h1 className="text-2xl font-bold">{plant.title}</h1>
                        <p className="text-xl">{plant.category.name}</p>
                        <p className="mt-2 text-lg text-gray-800">{plant.description}</p>
                        <div className="mt-4">
                            <h2 className="text-lg font-semibold text-gray-800">Care Instructions</h2>
                            <p className="text-sm">{plant.care_instructions}</p>
                        </div>
                        <div className="mt-4">
                            <h2 className="text-lg font-semibold text-gray-800">Tags</h2>
                            <p className="text-sm">{plant.tags.map(tag => tag.name).join(', ')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}