"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination, Scrollbar } from "swiper/modules";

// ...interfaces...
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
      className="mySwiper rounded-lg"
    >
      {services.map((item) => (
        <SwiperSlide key={item.id}>
          <Link
            href={`/services/commercial/${item.slug}`}
            className="group relative block h-96 overflow-hidden rounded-lg"
          >
            <Image
              src={item.image || "/static/viriditas.webp"}
              alt={item.title}
              height={800}
              width={800}
              className="h-full w-full rounded-lg object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90" />

            <div className="absolute inset-0 flex flex-col items-center justify-end p-8 text-center">
              <h1 className="mb-2 text-2xl font-bold text-white drop-shadow-lg transition-transform duration-300 group-hover:-translate-y-2">
                {item.title}
              </h1>

              <div className="transform opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <button className="btn btn-sm rounded-md hover:btn-outline gap-2">
                  View Service 
                  <ArrowRight size={16} />
                </button>
              </div>
              
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
