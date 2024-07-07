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
        <section className="px-2 py-10">
                <div className="font-extrabold text-center">
                    <p className="mb-5 text-3xl">A Selection of Signature Projects</p>
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
                            <div className="shadow-lg backdrop-blur-lg bg-base-200 rounded-lg">
                                <Image
                                    src={work.image}
                                    alt={work.title}
                                    width={300}
                                    height={200}
                                    className="object-cover w-full rounded-lg shadow-md h-60"
                                />
                                <div className="p-4">
                                    <h3 className="text-xl font-semibold">{work.title}</h3>
                                    <p className="">Client: {work.client}</p>
                                    <p className="">Categories: {work.categories.join(", ")}</p>
                                    <p className="">Year: {work.year}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}

                </Swiper>
        </section>
    );
};
