"use client";

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Navigation, Autoplay } from 'swiper/modules';

const works = [
    {
        title: "The Cube",
        client: "Hang Trinh",
        categories: ["Engineering", "Residential"],
        year: "2016",
        image: "/images/our_works/our_works_1.jpg",
    },
    {
        title: "Tourism Malaysia",
        client: "John Doe",
        categories: ["Tourism", "Commercial"],
        year: "2018",
        image: "/images/our_works/our_works_2.jpg",
    },
    {
        title: "Truman",
        client: "Jane Smith",
        categories: ["Architecture", "Modern"],
        year: "2020",
        image: "/images/our_works/our_works_3.jpg",
    },
    {
        title: "The Cube",
        client: "Hang Trinh",
        categories: ["Engineering", "Residential"],
        year: "2016",
        image: "/images/our_works/our_works_4.jpg",
    },
    {
        title: "Tourism Malaysia",
        client: "John Doe",
        categories: ["Tourism", "Commercial"],
        year: "2018",
        image: "/images/our_works/our_works_5.jpg",
    },

];

export default function OurWorks() {
    return (
        <section className="py-16 px-2">
            <div
                className="container mx-auto p-4 rounded-lg"
                style={
                    {
                        backgroundImage: "url('/images/bg/bg_2.jpg')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }
                }
            >
                <div className="text-center font-extrabold">
                    <p className="text-3xl mb-5 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">A Selection of Signature Projects</p>
                </div>

                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    autoplay={{ delay: 3000 }}
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
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                    }}
                    className="mySwiper"
                >

                    {works.map((work, index) => (
                        <SwiperSlide key={index}>
                            <div className="shadow-lg rounded-lg overflow-hidden backdrop-blur-lg transition duration-300 ease-in-out hover:scale-110">
                                <Image
                                    src={work.image}
                                    alt={work.title}
                                    width={300}
                                    height={200}
                                    className="w-full h-56 object-cover rounded-lg shadow-md"
                                />
                                <div className="p-4">
                                    <h3 className="text-white text-xl font-semibold">{work.title}</h3>
                                    <p className="text-white">Client: {work.client}</p>
                                    <p className="text-white">Categories: {work.categories.join(", ")}</p>
                                    <p className="text-white">Year: {work.year}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}

                </Swiper>
            </div>
        </section>
    );
};
