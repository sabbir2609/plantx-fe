'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import ImageMagnifier from './ImageMagnifier';


interface PlantImage {
    id: number;
    image: string;
    short_description: string;
}

export default function ProductImageViewer({ images }: { images: PlantImage[] }) {
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const [modalImageIndex, setModalImageIndex] = useState(0);
    const [startX, setStartX] = useState(0);
    const [translateX, setTranslateX] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const containerRef = useRef<HTMLDivElement>(null);
    const modalImageRef = useRef<HTMLImageElement>(null);

    const handleNext = () => {
        setSelectedImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrev = () => {
        setSelectedImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const handleModalNext = () => {
        setModalImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handleModalPrev = () => {
        setModalImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const handleTouchStart = (e: React.TouchEvent) => {
        setStartX(e.touches[0].clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        const currentX = e.touches[0].clientX;
        const diffX = currentX - startX;
        setTranslateX(diffX);
    };

    const handleTouchEnd = () => {
        if (translateX > 50) {
            handlePrev();
        } else if (translateX < -50) {
            handleNext();
        }
        setTranslateX(0);
    };

    const openModal = (index: number) => {
        setModalImageIndex(index);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
        e.preventDefault();

        const container = modalImageRef.current;
        if (!container) return;

        const rect = container.getBoundingClientRect();
        const offsetX = e.clientX - rect.left;
        const offsetY = e.clientY - rect.top;
        const originX = (offsetX / rect.width) * 100;
        const originY = (offsetY / rect.height) * 100;
    };

    // Prevent page vertical scroll when modal is open but allow horizontal scroll
    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflowY = 'hidden'; // Disable vertical scrolling
        } else {
            document.body.style.overflowY = ''; // Enable vertical scrolling
        }
        return () => {
            document.body.style.overflowY = ''; // Reset when modal closes or component unmounts
        };
    }, [isModalOpen]);


    return (
        <>
            {/* Main Image Viewer */}
            <div className="w-full mx-auto lg:h-[80vh] lg:flex lg:space-x-4">
                {/* Main Image */}
                <div className="relative w-full h-96 lg:h-auto overflow-hidden rounded-lg bg-gray-900">
                    {selectedImageIndex > 0 && (
                        <button
                            onClick={handlePrev}
                            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black text-white opacity-80 p-2 rounded-full hover:bg-black hover:opacity-100 focus:outline-none z-10"
                        >
                            <ChevronLeft size={18} />
                        </button>
                    )}

                    <div
                        className="relative w-full h-full"
                        ref={containerRef}
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                    >
                        <div
                            className="absolute inset-0 flex transition-transform duration-500"
                            style={{ transform: `translateX(calc(-${selectedImageIndex * 100}% + ${translateX}px))` }}
                        >
                            {images.map((image, index) => (
                                <div key={index} className="w-full flex-shrink-0">
                                    <Image
                                        src={image.image}
                                        alt="Product"
                                        height={512}
                                        width={768}
                                        className="object-cover w-full h-full cursor-pointer"
                                        onClick={() => openModal(index)}  // Open modal on image click
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {selectedImageIndex < images.length - 1 && (
                        <button
                            onClick={handleNext}
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black text-white opacity-80 p-2 rounded-full hover:bg-black hover:opacity-100 focus:outline-none z-10"
                        >
                            <ChevronRight size={18} />
                        </button>
                    )}

                    {/* Dot Navigation */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 bg-black opacity-70 rounded-full p-2">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setSelectedImageIndex(index)}
                                className={`w-2 h-2 rounded-full ${selectedImageIndex === index ? 'bg-indigo-500' : 'bg-gray-300'} focus:outline-none`}
                            />
                        ))}
                    </div>
                </div>

                {/* Thumbnails */}
                <div className="w-full mt-4 lg:mt-0 lg:w-1/4 lg:h-auto lg:overflow-y-auto lg:space-y-4">
                    <div className="grid grid-flow-col lg:grid-flow-row auto-cols-max lg:auto-rows-max justify-start space-x-4 lg:space-x-0 lg:space-y-4 overflow-x-auto lg:overflow-x-hidden">
                        {images.map((image, index) => (
                            <button
                                key={index}
                                onClick={() => setSelectedImageIndex(index)}  // Change main image from thumbnail click
                                className={`border-2 rounded-lg ${selectedImageIndex === index ? 'border-indigo-500 border-3' : 'border-transparent'} focus:outline-none`}
                            >
                                <Image
                                    src={image.image}
                                    height={96}
                                    width={96}
                                    alt={image.short_description}
                                    className="w-20 h-20 object-cover rounded-md"
                                />
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Modal for Image Magnification */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex justify-center items-center lg:justify-center lg:items-center shadow-2xl">

                    {/* Close Button */}
                    <button className="absolute top-6 right-6 text-white text-3xl z-50" onClick={closeModal}>
                        <X size={32} />
                    </button>

                    <div
                        className="relative w-auto h-auto max-w-4xl overflow-hidden mb-4 lg:mb-0 touch-none flex justify-center items-center"
                        onWheel={handleWheel}
                        ref={modalImageRef}
                    >

                        {/* Previous button */}
                        {modalImageIndex > 0 && (
                            <button
                                onClick={handleModalPrev}
                                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black text-white opacity-80 p-2 rounded-full hover:bg-black hover:opacity-100 focus:outline-none z-10"
                            >
                                <ChevronLeft size={20} />
                            </button>
                        )}

                        {/* Image in Modal */}
                        <div className="relative w-full h-full flex justify-center items-center">

                            <ImageMagnifier
                                src={images[modalImageIndex].image}
                                alt={images[modalImageIndex].short_description}
                                width={1024}
                                height={768}
                                className="object-contain transition-transform duration-300 cursor-zoom-in touch-auto"
                                zoomLevel={2}
                            />

                        </div>

                        {/* Next button */}
                        {modalImageIndex < images.length - 1 && (
                            <button
                                onClick={handleModalNext}
                                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black text-white opacity-80 p-2 rounded-full hover:bg-black hover:opacity-100 focus:outline-none z-10"
                            >
                                <ChevronRight size={20} />
                            </button>
                        )}

                    </div>

                    {/* Thumbnails in Modal */}
                    <div className="absolute bottom-0 w-full lg:static lg:w-auto lg:h-full flex lg:flex-col justify-center space-x-2 lg:space-x-0 lg:space-y-2 overflow-x-auto lg:overflow-y-auto px-4 py-2 lg:py-0 bg-black bg-opacity-80 lg:bg-transparent">
                        {images.map((image, index) => (
                            <button
                                key={index}
                                onClick={() => setModalImageIndex(index)}  // Change modal image from thumbnail click
                                className={`border-2 p-1 rounded-lg ${modalImageIndex === index ? 'border-indigo-500' : 'border-transparent'} focus:outline-none flex-shrink-0`}
                            >
                                <Image
                                    src={image.image}
                                    height={64}
                                    width={64}
                                    alt={image.short_description}
                                    className="object-cover rounded-md w-20 h-20"
                                />
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}