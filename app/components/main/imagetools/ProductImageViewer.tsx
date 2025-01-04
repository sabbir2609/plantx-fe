"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, CircleX } from "lucide-react";
import ImageMagnifier from "./ImageMagnifier";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

interface PlantImage {
  id: number;
  image: string;
  short_description: string;
}

export default function ProductImageViewer({
  images,
}: {
  images: PlantImage[];
}) {
  const [modalImageIndex, setModalImageIndex] = useState(0);

  const handleModalNext = () => {
    setModalImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleModalPrev = () => {
    setModalImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length,
    );
  };

  const openModal = (index: number) => {
    setModalImageIndex(index);
    (document.getElementById("modal") as HTMLDialogElement)?.showModal();
  };

  const closeModal = () => {
    (document.getElementById("modal") as HTMLDialogElement)?.close();
  };

  return (
    <>
      {/* Main Image Viewer */}
      <div className="mx-auto w-full lg:flex lg:h-[80vh] lg:space-x-4">
        <Swiper
          pagination={true}
          modules={[Pagination]}
          className="mySwiper rounded-lg"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <Image
                src={image.image}
                alt="Product"
                height={512}
                width={768}
                className="h-full w-full cursor-pointer select-none object-cover"
                onClick={() => openModal(index)} // Open modal on image click
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <dialog
        id="modal"
        className="modal fixed inset-0 flex h-full w-full items-center justify-center bg-black bg-opacity-90"
      >
        <div className="relative flex h-full w-full flex-col md:flex-row">
          {/* Close Button */}
          <button
            className="absolute right-6 top-6 z-50 text-3xl text-white md:right-32"
            onClick={closeModal}
          >
            <CircleX size={32} />
          </button>

          {/* Image and Navigation */}
          <div className="relative mb-4 flex h-full w-full items-center justify-center lg:mb-0">
            {/* Previous button */}
            {modalImageIndex > 0 && (
              <button
                onClick={handleModalPrev}
                className="absolute left-4 top-1/2 z-10 -translate-y-1/2 transform rounded-full bg-white p-2 text-black opacity-80 hover:bg-black hover:text-white hover:opacity-100 hover:outline"
              >
                <ChevronLeft size={20} />
              </button>
            )}

            {/* Image in Modal */}
            <div className="relative flex h-full w-full items-center justify-center">
              <ImageMagnifier
                src={images[modalImageIndex].image}
                alt={images[modalImageIndex].short_description}
                width={1920}
                height={1080}
                className="h-full w-full object-contain rounded-sm"
              />
            </div>

            {/* Next button */}
            {modalImageIndex < images.length - 1 && (
              <button
                onClick={handleModalNext}
                className="absolute right-4 top-1/2 z-10 -translate-y-1/2 transform rounded-full bg-white p-2 text-black opacity-80 hover:bg-black hover:text-white hover:opacity-100 hover:outline"
              >
                <ChevronRight size={20} />
              </button>
            )}
          </div>

          {/* Thumbnails in Modal */}
          <div className="absolute bottom-0 flex w-full space-x-2 overflow-x-auto bg-white bg-opacity-50 px-4 py-2 md:static md:ml-4 md:h-full md:w-auto md:flex-col md:space-x-0 md:space-y-2 md:overflow-y-auto md:bg-transparent">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setModalImageIndex(index)} // Change modal image from thumbnail click
                className={`rounded-lg border-2 p-1 ${modalImageIndex === index ? "border-indigo-500" : "border-transparent"} flex-shrink-0 focus:outline-none`}
              >
                <Image
                  src={image.image}
                  height={64}
                  width={64}
                  alt={image.short_description}
                  className="h-16 w-16 rounded-md object-cover md:h-24 md:w-24"
                />
              </button>
            ))}
          </div>
        </div>
      </dialog>
    </>
  );
}