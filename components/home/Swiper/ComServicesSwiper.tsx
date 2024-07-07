"use client";

import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation, Pagination, Scrollbar } from 'swiper/modules';


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
            spaceBetween={20}
            navigation={false}
            modules={[Autoplay, Navigation, Pagination, Scrollbar]}
            pagination={{
                clickable: true,
            }}
            scrollbar={{
                hide: false,
            }}
            autoplay={{ delay: 4000 }}
            breakpoints={{
                640: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                },
            }}
            className="mySwiper h-[50vh] w-full"
        >
            {services.map((item) => (
                <SwiperSlide key={item.id} className="relative group">
                    <Image
                        src={item.image || "/static/no-img.png"}
                        alt={item.title}
                        height={800}
                        width={800}
                        className='object-cover w-full h-full rounded-lg'
                    />

                    <div className="absolute inset-0 transition-opacity ease-in-out duration-700 rounded-lg bg-gradient-to-t from-gray-900 via-gray-900/40 hover:from-gray-900/60 group-hover:from-gray-900/60"></div>

                    <div className="absolute z-20 bottom-10 left-8">
                        <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                        <Link href={`/services/commercial/${item.id}`} className="text-lg font-semibold text-green-600 hover:text-green-700">
                            See more
                        </Link>
                    </div>

                </SwiperSlide>
            ))}
        </Swiper>
    );
};
