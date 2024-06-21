"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, Autoplay } from 'swiper/modules';
import Image from 'next/image';

interface Services {
    id: number;
    title: string;
    image: string;
}

export default async function FeaturedServices() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/services/featured/`,
        {
            cache: 'no-cache',
        }
    );
    if (!response.ok) {
        throw new Error('Failed to fetch data from the API');
    }
    const data = await response.json();
    const services: Services[] = data.slice(0, 10);

    return (
        <div className="w-full">
            <Swiper
                slidesPerView={2}
                spaceBetween={10}
                navigation={false}
                modules={[Autoplay, Navigation]}
                autoplay={{ delay: 3000 }}
                breakpoints={
                    {
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
                    }
                }
                className="mySwiper"
            >

                {services.map((service) => (

                    <SwiperSlide key={service.id}>
                        <div className="flex flex-col items-center justify-center p-2 mb-2  rounded-lg shadow-md">
                            {
                                service.image ? (
                                    <Image src={service.image} alt={service.title} className="w-full h-48 object-cover rounded-lg shadow-md transition duration-300 ease-in-out hover:scale-110" width={300} height={200} />
                                ) : (
                                    <Image
                                        src="/static/no-img.png"
                                        alt={service.title}
                                        width={300}
                                        height={200}
                                        className="w-full h-48 object-cover rounded-lg shadow-md transition duration-300 ease-in-out hover:scale-110"
                                    />
                                )
                            }
                            <h3 className="mt-2 text-lg font-semibold text-center">{service.title}</h3>
                        </div>
                    </SwiperSlide>
                ))}

            </Swiper>
        </div>
    );
}
