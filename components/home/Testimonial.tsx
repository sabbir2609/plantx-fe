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
        <section className="p-3 mx-auto mt-2 mb-4 bg-base-300"
            style={
                {
                    backgroundImage: "url('/images/bg/bg_8.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "bottom center",
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
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    width={200}
                                    height={200}
                                    className="object-cover border-2 border-green-400 rounded-full shadow-lg w-28 h-28"
                                />
                                <Quote className="text-black fill-black" size={40} />
                            </div>

                            <div className="px-6 pt-16 pb-10 text-center text-black bg-white rounded-xl ">
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