"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import Image from 'next/image';

interface Service {
    id: number;
    title: string;
    image?: string;
}

interface ServiceSwiperProps {
    services: Service[];
}

export default function FeaturedServicesSwiper(
    { services }: ServiceSwiperProps
) {
    return (
        <Swiper
            slidesPerView={2}
            spaceBetween={10}
            navigation={true}
            modules={[Autoplay, Navigation]}
            autoplay={{ delay: 3000 }}
            breakpoints={{
                640: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                },
                768: {
                    slidesPerView: 4,
                    spaceBetween: 10,
                },
                1024: {
                    slidesPerView: 5,
                    spaceBetween: 10,
                },
            }}
            className="mySwiper"
        >
            {services.map((service) => (
                <SwiperSlide key={service.id}>
                    <div className="flex flex-col items-center justify-center p-2 mb-2 rounded-lg shadow-md">
                        {service.image ? (
                            <Image
                                src={service.image}
                                alt={service.title}
                                className="w-full h-48 object-cover rounded-lg shadow-md transition duration-300 ease-in-out hover:scale-110"
                                width={300}
                                height={200}
                            />
                        ) : (
                            <Image
                                src="/static/no-img.png"
                                alt={service.title}
                                width={300}
                                height={200}
                                className="w-full h-48 object-cover rounded-lg shadow-md transition duration-300 ease-in-out hover:scale-110"
                            />
                        )}
                        <h3 className="mt-2 text-lg font-semibold text-center">{service.title}</h3>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};
