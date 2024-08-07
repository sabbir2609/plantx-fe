"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';

interface ImageProps {
    id: number;
    image: string;
    short_description: string;
}

interface CarouselProps {
    images: ImageProps[];
}

export default function Carousel({ images }: CarouselProps) {
    return (
        <Swiper
            pagination={{
                dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="mySwiper lg:h-[60vh] w-full rounded-lg"
        >
            {images.map(image => (
                <SwiperSlide key={image.id}>
                    <Image
                        height={1000}
                        width={1000}
                        src={image.image}
                        alt={image.short_description}
                        className="object-cover rounded-lg h-96 lg:h-[60vh]"
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}