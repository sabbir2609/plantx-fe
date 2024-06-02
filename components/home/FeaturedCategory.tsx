"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, Autoplay } from 'swiper/modules';
import Image from 'next/image';




export default function FeaturedCategory() {

    const categories = [
        {
            title: "Indoor",
            image: "/images/plants/plant1.jpg",
        },
        {
            title: "Outdoor",
            image: "/images/plants/plant2.jpg",
        },
        {
            title: "Office",
            image: "/images/plants/plant3.jpg",
        },
        {
            title: "Home",
            image: "/images/plants/plant4.jpg",
        },
        {
            title: "Garden",
            image: "/images/plants/plant5.jpg",
        },
        {
            title: "Balcony",
            image: "/images/plants/plant6.jpg",
        },
        {
            title: "Terrace",
            image: "/images/plants/plant7.jpg",
        },
        {
            title: "Patio",
            image: "/images/plants/plant8.jpg",
        },
        {
            title: "Balcony",
            image: "/images/plants/plant9.jpg",
        },
        {
            title: "Terrace",
            image: "/images/plants/plant10.jpg",
        },
        {
            title: "Patio",
            image: "/images/plants/plant11.jpg",
        },
        {
            title: "Balcony",
            image: "/images/plants/plant12.jpg",
        },
        {
            title: "Terrace",
            image: "/images/plants/plant13.jpg",
        },
        {
            title: "Patio",
            image: "/images/plants/plant14.jpg",
        },
    ];

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
                {categories.map((category, index) => (
                    <SwiperSlide key={index}>
                        <div className="flex flex-col items-center justify-center p-2 mb-2  rounded-lg shadow-md">
                            <Image src={category.image} alt={category.title} className="w-full h-48 object-cover rounded-lg shadow-md transition duration-300 ease-in-out hover:scale-110" width={300} height={200} />
                            <h3 className="mt-2 text-lg font-semibold text-center">{category.title}</h3>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
