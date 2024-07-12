"use client";

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Navigation, Autoplay } from 'swiper/modules';
import Link from 'next/link';
import React from 'react';

interface ProjectImages {
    id: number;
    image: string;
    short_description: string;
}

interface Projects {
    id: number;
    title: string;
    images: ProjectImages[];
    client: string;
    categories: string;
    year: number;
}

interface ProjectsSwiperProps {
    projects: Projects[];
}

export default function ProjectSwiper({ projects }: ProjectsSwiperProps) {
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
                {projects.map((project) => (
                    <SwiperSlide key={project.id} className='p-2'>
                        <div className="rounded-lg shadow-sm backdrop-blur-sm bg-base-200">
                            <Image
                                src={project.images.length > 0 ? project.images[0].image : '/static/viriditas.png'}
                                alt={project.images.length > 0 ? project.images[0].short_description : 'Default Image'}
                                width={1000}
                                height={1000}
                                className="object-cover w-full h-52 transition duration-500 ease-in-out rounded-t-lg shadow-md hover:scale-105 hover:shadow-lg hover:rounded-lg"
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold">{project.title}</h3>
                                <p>
                                    <strong>Categories: </strong><span>{project.categories}</span>
                                </p>
                                {
                                    project.year && <p className="">Year: {project.year}</p>
                                }
                                {
                                    project.client && <p className="">Client: {project.client}</p>
                                }
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}