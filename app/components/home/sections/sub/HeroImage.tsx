"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface HeroProps {
  title: string;
  description: string;
}

// Import all banner images
const bannerImages = [
  "/images/hero/banner_lg (1).webp",
  "/images/hero/banner_lg (2).webp",
  "/images/hero/banner_lg (3).webp",
  "/images/hero/banner_lg (4).webp",
  "/images/hero/banner_lg (5).webp",
];

export default function HeroImageLg({ title, description }: HeroProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === bannerImages.length - 1 ? 0 : prevIndex + 1,
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full ">
      {bannerImages.map((image, index) => (
        <Image
          key={index}
          src={image}
          alt={`Banner ${index + 1}`}
          height={1080}
          width={1920}
          priority={index === 0}
          quality={100}
          sizes="100vw"
          className={`absolute left-0 top-0 h-full w-full object-cover brightness-75 transition-opacity duration-1000 ease-in-out ${currentImageIndex === index ? "opacity-100" : "opacity-0"} `}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent">
        <div className="container mx-auto flex h-full items-center">
          <div className="max-w-2xl space-y-6 p-8">
            <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="text-lg text-white/90 md:text-xl">{description}</p>
            <Link href="#service-section" className="btn btn-primary btn-lg">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
