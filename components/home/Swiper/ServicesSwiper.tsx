"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';

interface Service {
    id: number;
    title: string;
    image?: string;
}

interface ServiceSwiperProps {
    services: Service[];
}

export default function ServicesSwiper(
    { services }: ServiceSwiperProps
) {
    return (
        <Swiper
            slidesPerView={1}
            spaceBetween={10}
            navigation={false}
            modules={[Autoplay, Navigation]}
            autoplay={{ delay: 2000 }}
            breakpoints={{
                640: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                },
            }}
            className="mySwiper rounded-sm"
        >
            {services.map((item) => (
                <SwiperSlide key={item.id}>


                    <div className="relative group">
                        {item.image ? (
                            <Image
                                src={item.image}
                                alt={item.title}
                                className="w-full h-[65vh] object-cover rounded-sm"
                                width={1000}
                                height={700}
                            />
                        ) : (
                            <Image
                                src="/static/no-img.png"
                                alt={item.title}
                                width={1000}
                                height={700}
                                className="w-full h-[65vh] object-cover rounded-sm"
                            />
                        )}

                        <div className="absolute inset-0 lg:bg-gray-700 opacity-70 rounded-md hover:opacity-0 transition duration-500 group-hover:opacity-0"></div>

                        <div className="absolute bottom-12 left-8">
                            <h3 className="text-3xl lg:text-5xl text-white font-medium font-serif">
                                {item.title}
                            </h3>
                            <div className='h-1 w-auto bg-orange-500 mt-2 mb-4'></div>
                            <Link
                                href={`/services/category/${item.id}`}
                                className='text-white underline uppercase text-lg hover:bg-orange-500 font-light'
                            >
                                See Services
                            </Link>
                        </div>

                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};
