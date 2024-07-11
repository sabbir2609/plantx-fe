"use client";

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

interface Image {
    id: number;
    image: string;
    short_description: string;
}
interface ServiceBlogImageSwiperProps {
    images: Image[];
}
export default function ServiceBlogImageSwiper({ images }: ServiceBlogImageSwiperProps) {
    return (
        <>
            <Swiper
                pagination={true}
                modules={[Pagination]}
                className="mySwiper rounded-lg"
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <Image
                            src={image.image}
                            alt={image.short_description}
                            width={600}
                            height={400}
                            className='object-cover h-[40vh] w-full'
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
