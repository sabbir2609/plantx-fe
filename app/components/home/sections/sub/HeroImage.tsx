"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Leaf } from "lucide-react";

interface HeroProps {
  title: string;
  description: string;
}

const bannerImages = {
  lg: [
    "/images/hero/lg/banner_lg (1).webp",
    "/images/hero/lg/banner_lg (2).webp",
    "/images/hero/lg/banner_lg (3).webp",
    "/images/hero/lg/banner_lg (4).webp",
    "/images/hero/lg/banner_lg (5).webp",
    "/images/hero/lg/banner_lg (6).webp",
    "/images/hero/lg/banner_lg (7).webp",
  ],
  sm: [
    "/images/hero/sm/banner_sm (1).jpg",
    "/images/hero/sm/banner_sm (2).jpg",
    "/images/hero/sm/banner_sm (3).jpg",
    "/images/hero/sm/banner_sm (4).jpg",
    "/images/hero/sm/banner_sm (5).jpg",
    "/images/hero/sm/banner_sm (6).jpg",
    "/images/hero/sm/banner_sm (7).jpg",
    "/images/hero/sm/banner_sm (8).jpg",
  ],
};

export default function HeroImage({ title, description }: HeroProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % bannerImages.lg.length,
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const renderImages = (images: string[], isLarge: boolean) => {
    const visibilityClass = isLarge ? "lg:block hidden" : "lg:hidden";

    return images.map((image, index) => (
      <Image
        key={index}
        src={image}
        alt={`Banner ${index + 1}`}
        height={1080}
        width={1920}
        priority={index === 0}
        quality={100}
        sizes="100vw"
        className={`absolute left-0 top-0 h-full w-full object-cover brightness-75 transition-opacity duration-1000 ease-in-out ${visibilityClass} ${currentImageIndex === index ? "opacity-100" : "opacity-0"}`}
      />
    ));
  };

  return (
    <section className="relative h-screen w-full">
      {renderImages(bannerImages.lg, true)}
      {renderImages(bannerImages.sm, false)}

      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent">
        <div className="container mx-auto flex h-full items-center">
          <div className="max-w-2xl space-y-6 p-8">
            <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="text-lg text-white/90 md:text-xl">{description}</p>
            <Link
              href="#service-section"
              className="group btn btn-primary relative inline-flex items-center justify-center overflow-hidden"
            >
              <span className="absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center transition-all duration-500 group-hover:translate-x-0">
                <Leaf className="h-5 w-5" />
              </span>
              <span className="relative transition-all duration-500 group-hover:translate-x-4 group-hover:opacity-0">
                Get started
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
