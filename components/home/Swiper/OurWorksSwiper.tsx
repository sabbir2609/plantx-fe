"use client";

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Navigation, Autoplay } from 'swiper/modules';
import Link from 'next/link';
import React from 'react';

interface Category {
    id: number;
    title: string;
    type: string;
}

interface Works {
    id: number;
    title: string;
    image: string;
    client: string;
    categories: Category[];
    year: number;
}

interface OurWorksSwiperProps {
    works: Works[];
}

export default function OurWorksSwiper({ works }: OurWorksSwiperProps) {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                autoplay={false}
                pagination={{
                    clickable: true,
                }}
                navigation={false}
                modules={[Navigation, Autoplay]}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                }}
                className="mySwiper"
            >

                {works.map((work, index) => (
                    <SwiperSlide key={index} className='p-2'>
                        <div className="rounded-lg shadow-sm backdrop-blur-sm bg-base-200">
                            <Image
                                src={work.image || '/static/viriditas.png'}
                                alt={work.title}
                                width={300}
                                height={200}
                                className="object-cover w-full transition duration-500 ease-in-out rounded-t-lg shadow-md h-60 hover:scale-105 hover:shadow-lg hover:rounded-lg"
                            />
                            <div className="p-4 tracking-tight">
                                <h3 className="text-lg font-semibold">{work.title}</h3>
                                {
                                    work.client && <p className="">Client: {work.client}</p>
                                }
                                <div className="mb-4">
                                    <strong>Categories: </strong>
                                    {work.categories.map((category, index, array) => (
                                        <React.Fragment key={category.id}>
                                            <Link
                                                href={`/services/${category.type.toLowerCase()}/${category.id}`}
                                                className="cursor-pointer text-blue-600"
                                            >
                                                {category.title}
                                            </Link>
                                            {index < array.length - 1 ? ', ' : ''}
                                        </React.Fragment>
                                    ))}
                                </div>
                                {
                                    work.client && <p className="">Client: {work.client}</p>
                                }
                                {
                                    work.year && <p className="">Year: {work.year}</p>
                                }
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}