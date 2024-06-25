"use client";

import { Libre_Baskerville } from 'next/font/google';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const title_font = Libre_Baskerville({
    weight: '700',
    subsets: ['latin'],
    display: 'swap',
});

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
                        delay: 2000,
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
                            <h1
                                className={`text-2xl lg:text-6xl font-bold ${title_font.className}`}
                            > <span className='text-3xl'>Transform Your Home: </span><span className="text-2xl mb-4">Elegant Designs with <span className=" text-green-500">Greenery</span> stuff!</span> </h1>
                            <div className="w-20 h-2 bg-green-700 my-4"></div>
                            <p className={`text-lg lg:text-2xl font-semibold ${title_font.className}`}
                            >
                                At Viriditas, we create sustainable, plant-based urban landscapes to enhance well-being and promote environmental care. We committed to combat climate change, improve air quality, and make cities greener, healthier, and more vibrant for everyone.
                            </p>
                        </div>
                    </header>
                </div>
            </div>
        </div>
    );
};