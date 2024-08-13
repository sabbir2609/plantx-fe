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
            className="mySwiper rounded-md aspect-[4/5]"
        >
            {images.map(image => (
                <SwiperSlide key={image.id}>
                    <Image
                        height={1350}
                        width={1080}
                        src={image.image}
                        alt={image.short_description}
                        className="object-cover rounded-md"
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}