"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import { Quote } from 'lucide-react';

import { Dancing_Script, Pacifico } from "next/font/google";


const dancing_script = Dancing_Script({ subsets: ["latin"] });
const pacifico = Pacifico({
    subsets: ["latin"],
    weight: "400"
});

export default function Testimonial() {

    const testimonials = [
        {
            name: "Sarah Smith",
            image: "/images/testimonial/testimonial (1).jpg",
            testimonial: "This service was exceptional! The team was professional and exceeded my expectations. I would highly recommend them to anyone."
        },
        {
            name: "Jane Smith",
            image: "/images/testimonial/testimonial (2).jpg",
            testimonial: "Amazing experience! The staff was friendly and the service was top-notch. I'm very satisfied with the results."
        },
        {
            name: "Hady Imran Khan",
            image: "/images/testimonial/testimonial (3).jpg",
            testimonial: "A wonderful experience from start to finish. The quality of work was outstanding and the customer service was excellent."
        },
        {
            name: "Sabila Noor",
            image: "/images/testimonial/testimonial (4).jpg",
            testimonial: "I couldn't be happier with the service provided. The team was professional, efficient, and delivered great results."
        },
        {
            name: "Jayed Khan",
            image: "/images/testimonial/testimonial (5).jpg",
            testimonial: "Excellent service! The team was very knowledgeable and the quality of work was impressive. Highly recommend!"
        }
    ];


    return (
        <section className="p-3 mx-auto mb-4 bg-base-300 mt-2"
            style={
                {
                    backgroundImage: "url('/images/bg/bg_4.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }
            }
        >
            <header className="mb-4 text-center text-white">
                <h2 className={`${dancing_script.className} text-4xl font-bold`}>
                    Customer
                </h2>
                <h1 className="text-3xl font-bold tracking-wide">Testimonials</h1>
            </header>

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
                className="mySwiper rounded-sm"

            >
                {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={index}>

                        <div
                            className="flex flex-col items-center justify-center mt-4 pt-4 rounded-lg relative h-max"
                        >
                            <div className="flex flex-row gap-2 mb-[-56px] items-center z-10">
                                <Quote className="rotate-180 fill-white text-white" size={40} />
                                <Image
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    width={200}
                                    height={200}
                                    className="w-28 h-28 rounded-full object-cover border-2 border-green-400 shadow-lg"
                                />
                                <Quote className="fill-white text-white" size={40} />
                            </div>

                            <div className="rounded-xl text-center bg-green-200 px-6 pt-16 pb-10">
                                <h2 className="text-lg font-bold">
                                    {testimonial.name}
                                </h2>
                                <p className={`${pacifico.className} text-center tracking-tight lg:text-lg`}>
                                    {testimonial.testimonial}
                                </p>
                            </div>
                        </div>

                    </SwiperSlide>
                ))}

            </Swiper>

        </section>
    );
}