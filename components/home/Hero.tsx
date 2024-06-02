"use client";

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Hero() {
    const slides = [
        '/images/hero/slide1.jpg',
        '/images/hero/slide2.jpg',
        '/images/hero/slide3.jpg',
        '/images/hero/slide4.jpg',
        '/images/hero/slide5.jpg',
    ];

    return (
        <div className="relative h-[70vh]">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={false}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper h-full"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <Image width={1024} height={1024} src={slide} alt={`Slide ${index + 1}`} className="object-cover w-full h-full" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};