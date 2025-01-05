"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react"; // Add this import
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination, Scrollbar } from "swiper/modules";

// ...interface definitions...
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
        dynamicBullets: true,
      }}
      scrollbar={{
        hide: true,
      }}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
      className="mySwiper h-1/2 rounded-lg"
    >
      {services.map((item) => (
        <SwiperSlide key={item.id}>
          <Link
            href={`/services/residential/${item.slug}`}
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

            <div className="absolute inset-0 flex flex-col items-center justify-end p-6 text-center">
              <h1 className="mb-2 text-2xl font-bold text-white drop-shadow-lg transition-transform duration-300 group-hover:-translate-y-2">
                {item.title}
              </h1>

              <div className="transform opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm text-white backdrop-blur-sm">
                  Learn More <ArrowRight size={16} />
                </span>
              </div>
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
