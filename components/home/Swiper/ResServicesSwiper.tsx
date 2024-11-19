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
      autoplay={{ delay: 4000, reverseDirection: true }}
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
        <SwiperSlide key={item.id}>
          <Link href={`/services/residential/${item.slug}`} className='rounded-lg relative'>
            <Image
              src={item.image || "/static/viriditas.webp"}
              alt={item.title}
              height={800}
              width={800}
              className="h-96 object-cover rounded-lg"
            />
            <div className="absolute bottom-10 left-8 z-20">
              <h1 className="text-3xl text-white">{item.title}</h1>
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
