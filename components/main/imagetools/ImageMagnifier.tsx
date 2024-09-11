"use client";

import Image from 'next/image';
import { MouseEvent, TouchEvent, useState } from 'react';

interface ImageMagnifierProps {
    src: string;
    className?: string;
    width: number;
    height: number;
    alt: string;
    magnifierHeight?: number;
    magnifierWidth?: number;
    zoomLevel?: number;
}

export default function ImageMagnifier({
    src,
    className = '',
    width,
    height,
    alt,
    magnifierHeight = 200,
    magnifierWidth = 200,
    zoomLevel = 2,
}: ImageMagnifierProps) {
    const [showMagnifier, setShowMagnifier] = useState(false);
    const [loading, setLoading] = useState(true);
    const [[imgWidth, imgHeight], setSize] = useState<[number, number]>([0, 0]);
    const [[x, y], setXY] = useState<[number, number]>([0, 0]);

    const mouseEnter = (e: MouseEvent<HTMLImageElement>) => {
        const el = e.currentTarget;
        const { width, height } = el.getBoundingClientRect();
        setSize([width, height]);
        setShowMagnifier(true);
    };

    const mouseLeave = () => {
        setShowMagnifier(false);
    };

    const mouseMove = (e: MouseEvent<HTMLImageElement>) => {
        const el = e.currentTarget;
        const { top, left } = el.getBoundingClientRect();
        const x = e.pageX - left - window.scrollX;
        const y = e.pageY - top - window.scrollY;
        setXY([x, y]);
    };

    const touchStart = (e: TouchEvent<HTMLImageElement>) => {
        const el = e.currentTarget;
        const { width, height } = el.getBoundingClientRect();
        setSize([width, height]);
        setShowMagnifier(true);
    };

    const touchEnd = () => {
        setShowMagnifier(false);
    };

    const touchMove = (e: TouchEvent<HTMLImageElement>) => {
        const el = e.currentTarget;
        const { top, left } = el.getBoundingClientRect();
        const x = e.touches[0].pageX - left - window.scrollX;
        const y = e.touches[0].pageY - top - window.scrollY;
        setXY([x, y]);
    };

    const handleImageLoad = () => {
        setLoading(false);
    };

    return (
        <div className="relative inline-block">
            <Image
                src={src}
                className={className}
                width={width}
                height={height}
                alt={alt}
                onMouseEnter={mouseEnter}
                onMouseLeave={mouseLeave}
                onMouseMove={mouseMove}
                onTouchStart={touchStart}
                onTouchEnd={touchEnd}
                onTouchMove={touchMove}
                onLoadingComplete={handleImageLoad}
            />
            {loading && (
                <div className="absolute inset-0 flex justify-center items-center bg-white bg-opacity-75">
                    <div className="loader">Loading...</div>
                </div>
            )}
            <div
                style={{
                    display: showMagnifier ? 'block' : 'none',
                    position: 'absolute',
                    pointerEvents: 'none',
                    height: `${magnifierHeight}px`,
                    width: `${magnifierWidth}px`,
                    opacity: '1',
                    border: '1px solid lightgrey',
                    backgroundColor: 'white',
                    borderRadius: '5px',
                    backgroundImage: `url('${src}')`,
                    backgroundRepeat: 'no-repeat',
                    top: `${y - magnifierHeight / 2}px`,
                    left: `${x - magnifierWidth / 2}px`,
                    backgroundSize: `${imgWidth * zoomLevel}px ${imgHeight * zoomLevel}px`,
                    backgroundPositionX: `${-x * zoomLevel + magnifierWidth / 2}px`,
                    backgroundPositionY: `${-y * zoomLevel + magnifierHeight / 2}px`,
                }}
            />
        </div>
    );
}