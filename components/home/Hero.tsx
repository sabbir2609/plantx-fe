"use client";

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Hero() {
    const slides = [
        '/images/hero/slide (1).jpg',
        '/images/hero/slide (2).jpg',
        '/images/hero/slide (3).jpg',
        '/images/hero/slide (4).jpg',
    ];

    return (

        <div className="w-full">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={false}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper h-[60vh] lg:h-[80vh] w-full shadow-md"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <Image width={1000} height={1000} src={slide} alt={`Slide ${index + 1}`} className="object-cover w-full h-full" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};