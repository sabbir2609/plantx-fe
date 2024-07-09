"use client";

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Navigation, Autoplay } from 'swiper/modules';
import Link from 'next/link';

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
        <section className="px-2 py-10 lg:px-4">

            <div className="flex justify-between mb-5 border-b text-normal">
                <div className="flex items-center pb-1 pr-2 uppercase border-b-2">
                    <h1 className="inline-block font-semibold">
                        Our Projects
                    </h1>
                </div>
                <Link className="font-semibold hover:text-blue-600" href="#">
                    View All
                </Link>
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
                        spaceBetween: 10,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                }}
                className="mySwiper"
            >

                {works.map((work, index) => (
                    <SwiperSlide key={index} className='p-2'>
                        <div className="rounded-lg shadow-lg backdrop-blur-lg bg-base-200">
                            <Image
                                src={work.image}
                                alt={work.title}
                                width={300}
                                height={200}
                                className="object-cover w-full transition duration-500 ease-in-out rounded-t-lg shadow-md h-60 hover:scale-105 hover:shadow-lg hover:rounded-lg"
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
            {/* <div className="flex items-center justify-center h-full">
                <span className="font-thin text-center">
                    Slide to see more
                </span>
            </div> */}
        </section>
    );
};
