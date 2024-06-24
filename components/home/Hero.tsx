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
        <div className="flex flex-wrap pb-3 pt-2">

            <div className="w-full lg:w-3/5 px-2">
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={false}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper h-[60vh] lg:h-[80vh] w-full rounded-lg shadow-lg"
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <Image width={600} height={600} src={slide} alt={`Slide ${index + 1}`} className="object-cover w-full h-full" />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className="w-full lg:w-2/5 lg:mb-10">
                <div className="container mx-auto h-full">
                    <header className="container px-4 lg:flex mt-10 items-center h-full lg:mt-0">
                        <div className="w-full">
                            <h1 className="text-4xl lg:text-6xl font-bold">Transform Your Home: Elegant Designs with Plants</h1>
                            <div className="w-20 h-2 bg-green-700 my-4"></div>
                            <p className="text-xl">
                                At Viriditas, our vision is to revolutionize urban landscapes through sustainable and innovative plant-based solutions. We aim to create green spaces that enhance well-being and foster environmental stewardship. Committed to excellence, we strive to make cities greener, healthier, and more vibrant for everyone.
                            </p>
                        </div>
                    </header>
                </div>
            </div>
        </div>
    );
};