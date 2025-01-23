"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import { Quote } from 'lucide-react';

import UserImage from '@/public/static/user.jpg';

interface Testimonial {
    id: number,
    customer: string,
    slug: string,
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
                            className="relative flex flex-col items-center justify-center pt-4 rounded-lg h-max"
                        >
                            <div className="flex flex-row gap-2 mb-[-56px] items-center z-10">
                                <Quote className="rotate-180" size={40} />
                                <Image
                                    src={testimonial.image ? testimonial.image : UserImage}
                                    alt={testimonial.customer}
                                    width={200}
                                    height={200}
                                    blurDataURL="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fuser.4ac3d049.jpg&w=8&q=70"
                                    placeholder="blur"
                                    className="object-cover border-2 border-green-400 rounded-full shadow-lg w-28 h-28"
                                />
                                <Quote className="" size={40} />
                            </div>

                            <div className="px-6 pt-16 pb-10 text-center rounded-xl bg-base-200">
                                <p className="text-center tracking-tight lg:text-lg">
                                    {testimonial.content}
                                    <br />
                                    - <span className="italic font-bold">{testimonial.customer}</span>
                                </p>
                            </div>
                        </div>

                    </SwiperSlide>
                ))}

            </Swiper>
        </>
    );
}