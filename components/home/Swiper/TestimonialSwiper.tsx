"use client";

import { Pacifico } from "next/font/google";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import { Quote } from 'lucide-react';

import UserImage from '@/public/static/user.jpg';

const pacifico = Pacifico({
    subsets: ["latin"],
    weight: "400"
});

interface Testimonial {
    id: number,
    name: string,
    image: string,
    content: string
}

interface TestimonialProps {
    testimonials: Testimonial[]
}

export default function TestimonialSwiper(
    { testimonials }: TestimonialProps
) {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                navigation={false}
                modules={[Autoplay, Navigation, Pagination]}
                pagination={{
                    clickable: true,
                }}
                // autoplay={{ delay: 4000 }}
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
                className="rounded-sm mySwiper"

            >
                {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={index}>

                        <div
                            className="relative flex flex-col items-center justify-center pt-4 mt-4 rounded-lg h-max"
                        >
                            <div className="flex flex-row gap-2 mb-[-56px] items-center z-10">
                                <Quote className="text-black rotate-180 fill-black" size={40} />
                                <Image
                                    src={testimonial.image ? testimonial.image : UserImage}
                                    alt={testimonial.name}
                                    width={200}
                                    height={200}
                                    blurDataURL="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fuser.4ac3d049.jpg&w=8&q=70"
                                    placeholder="blur"
                                    className="object-cover border-2 border-green-400 rounded-full shadow-lg w-28 h-28"
                                />
                                <Quote className="text-black fill-black" size={40} />
                            </div>

                            <div className="px-6 pt-16 pb-10 text-center text-black bg-white rounded-xl ">
                                <h2 className="text-lg font-bold">
                                    {testimonial.name}
                                </h2>
                                <p className={`${pacifico.className} text-center tracking-tight lg:text-lg`}>
                                    {testimonial.content}
                                </p>
                            </div>
                        </div>

                    </SwiperSlide>
                ))}

            </Swiper>
        </>
    );
}