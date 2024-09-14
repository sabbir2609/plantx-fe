"use client";

import React from "react";

import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination, Scrollbar } from "swiper/modules";

interface Service {
  id: number;
  title: string;
  slug: string;
  image?: string;
}

interface ServiceSwiperProps {
  services: Service[];
}

export default function ServicesSwiper({ services }: ServiceSwiperProps) {
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
      className="mySwiper h-1/2 rounded-lg"
    >
      {services.map((item) => (
        <SwiperSlide key={item.id} className="relative">
          <Link href={`/services/residential/${item.slug}`}>
            <Image
              src={item.image || "/static/viriditas.webp"}
              alt={item.title}
              height={800}
              width={800}
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 transition duration-300 hover:opacity-0"></div>
            
            <div className="absolute bottom-10 left-8 z-20">
              <h1 className="text-2xl font-bold text-white">{item.title}</h1>
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
