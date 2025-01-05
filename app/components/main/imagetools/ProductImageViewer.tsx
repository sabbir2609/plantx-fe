"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, CircleX } from "lucide-react";
import ImageMagnifier from "./ImageMagnifier";

interface ProductImage {
  id: number;
  image: string;
  short_description: string;
}

interface ProductImageViewerProps {
  images: ProductImage[];
  className?: string; // to allow custom height or other styles
}

export default function ProductImageViewer({
  images,
  className,
}: ProductImageViewerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalImageIndex, setModalImageIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const openModal = (index: number) => {
    setModalImageIndex(index);
    (document.getElementById("modal") as HTMLDialogElement)?.showModal();
  };

  const closeModal = () => {
    (document.getElementById("modal") as HTMLDialogElement)?.close();
  };

  const handleModalNext = () => {
    setModalImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleModalPrev = () => {
    setModalImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <>
      {/* Main Viewer */}
      <div
        className={`mx-auto w-full rounded-lg shadow hover:shadow-lg transition-shadow relative overflow-hidden ${className}`}
      >
        {/* Click to Zoom Instruction */}
        <span className="absolute bottom-4 right-4 z-10 rounded-full bg-black/50 px-3 py-1 text-xs text-white">
          Click to Zoom
        </span>

        <div className="relative h-full w-full">
          {/* Main Image */}
          <Image
            src={images[currentIndex].image}
            alt={images[currentIndex].short_description}
            height={512}
            width={768}
            className="h-full w-full rounded-lg object-cover cursor-pointer transition-opacity duration-300 ease-in-out hover:opacity-90"
            onClick={() => openModal(currentIndex)}
          />

          {/* Navigation Buttons */}
          {images.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 transform rounded-full bg-white p-2 text-black opacity-80 transition-colors hover:bg-black hover:text-white hover:opacity-100"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 transform rounded-full bg-white p-2 text-black opacity-80 transition-colors hover:bg-black hover:text-white hover:opacity-100"
              >
                <ChevronRight size={20} />
              </button>
            </>
          )}
        </div>
      </div>

      {/* Modal */}
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

          {/* Modal Image Navigation */}
          <div className="relative mb-4 flex h-full w-full items-center justify-center lg:mb-0">
            {/* Previous */}
            {modalImageIndex > 0 && (
              <button
                onClick={handleModalPrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 transform rounded-full bg-white p-2 text-black opacity-80 transition-colors hover:bg-black hover:text-white hover:opacity-100"
              >
                <ChevronLeft size={20} />
              </button>
            )}

            {/* Magnified Image */}
            <div className="relative flex h-full w-full items-center justify-center">
              <ImageMagnifier
                src={images[modalImageIndex].image}
                alt={images[modalImageIndex].short_description}
                width={1920}
                height={1080}
                className="h-full w-full rounded-sm object-contain"
              />
            </div>

            {/* Next */}
            {modalImageIndex < images.length - 1 && (
              <button
                onClick={handleModalNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 transform rounded-full bg-white p-2 text-black opacity-80 transition-colors hover:bg-black hover:text-white hover:opacity-100"
              >
                <ChevronRight size={20} />
              </button>
            )}
          </div>

          {/* Thumbnails */}
          <div className="absolute bottom-0 flex w-full space-x-2 overflow-x-auto bg-white bg-opacity-50 px-4 py-2 md:static md:ml-4 md:h-full md:w-auto md:flex-col md:space-x-0 md:space-y-2 md:overflow-y-auto md:bg-transparent">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setModalImageIndex(idx)}
                className={`flex-shrink-0 rounded-lg border-2 p-1 focus:outline-none transition-colors hover:border-primary ${
                  modalImageIndex === idx
                    ? "border-indigo-500"
                    : "border-transparent"
                }`}
              >
                <Image
                  src={img.image}
                  height={64}
                  width={64}
                  alt={img.short_description}
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