"use client";

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Navigation, Autoplay } from 'swiper/modules';
import Link from 'next/link';
import React from 'react';

interface Project {
    id: number;
    title: string;
    slug: string;
    client: string;
    year: number;
    image: string;
}


interface ProjectsSwiperProps {
    projects: Project[];
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
                        <Link href={`/projects/${project.slug}`} className='cursor-pointer'>
                            <div className="rounded-lg shadow-sm backdrop-blur-sm bg-base-200">
                                <Image
                                    src={project.image ? project.image : '/static/viriditas.webp'}
                                    alt={project.title}
                                    width={1000}
                                    height={1000}
                                    className="object-cover w-full h-52 transition duration-500 ease-in-out rounded-t-lg shadow-md hover:scale-105 hover:shadow-lg hover:rounded-lg"
                                />
                                <div className="flex flex-col p-4">
                                    <h1 className="text-lg font-semibold">{project.title}</h1>
                                    {
                                        project.year && <p className="">Year: {project.year}</p>
                                    }
                                    {
                                        project.client && <p className="">Client: {project.client}</p>
                                    }
                                </div>
                            </div>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}