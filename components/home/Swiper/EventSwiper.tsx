"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Navigation, Autoplay } from "swiper/modules";

import Link from "next/link";

interface Event {
    id: number;
    title: string;
    slug: string;
    start_date: string;
    end_date: string;
    location: string;
    image: string;
}


interface EventSwiperProps {
    events: Event[];
}


export default function EventSwiper(
    { events }: EventSwiperProps
) {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={false}
                modules={[Navigation, Autoplay]}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    1024: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                }}
                className="mySwiper"
            >
                {events.map((event) => (
                    <SwiperSlide key={event.id} className="p-2">
                        <Link
                            href={`/events/${event.slug}`}
                            className="flex flex-col md:flex-row justify-center items-center bg-base-300 rounded-md shadow-sm">
                            <div className="relative w-full md:w-1/2 h-48 shadow-md">
                                <Image
                                    src={event.image || '/static/viriditas.webp'}
                                    alt={event.title}
                                    width={300}
                                    height={300}
                                    className="object-cover w-full h-full transition duration-500 ease-in-out hover:scale-105 hover:shadow-lg rounded-t-md"
                                />
                            </div>
                            <div className="flex flex-col p-4 md:text-left w-full md:w-1/2">
                                <h1 className="text-lg font-bold mb-2">{event.title}</h1>
                                <p className="text-sm mb-4">{event.location}</p>
                            </div>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}