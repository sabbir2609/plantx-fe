"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

interface Banner {
    id: number;
    image: string;
    alt_text: string;
}

interface Props {
    Banners: Banner[];
}

export default function HeroSwiper(
    { Banners }: Props
) {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={false}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper h-[60vh] lg:h-[80vh] w-full shadow-md"
            >
                {Banners.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <Image
                            src={slide.image}
                            alt={slide.alt_text}
                            width={1920}
                            height={1080}
                            sizes="100vw"
                            className='object-cover w-full h-full'
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}