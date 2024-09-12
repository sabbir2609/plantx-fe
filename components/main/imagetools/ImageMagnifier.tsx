"use client";

import NextImage from 'next/image';
import { MouseEvent, TouchEvent, useState, useRef, useEffect } from 'react';

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
    const [bgLoading, setBgLoading] = useState(true);
    const [[imgWidth, imgHeight], setSize] = useState<[number, number]>([0, 0]);
    const [[x, y], setXY] = useState<[number, number]>([0, 0]);
    const hideTimeout = useRef<NodeJS.Timeout | null>(null);

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
        if (hideTimeout.current) {
            clearTimeout(hideTimeout.current);
        }
        const el = e.currentTarget;
        const { width, height } = el.getBoundingClientRect();
        setSize([width, height]);
        setShowMagnifier(true);
    };

    const touchEnd = () => {
        hideTimeout.current = setTimeout(() => {
            setShowMagnifier(false);
        }, 2000); // Hide magnifier after 2 seconds
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

    const handleBgImageLoad = () => {
        setBgLoading(false);
    };

    const getMagnifierPosition = () => {
        const offsetX = Math.max(0, Math.min(x - magnifierWidth / 2, imgWidth - magnifierWidth));
        const offsetY = Math.max(0, Math.min(y - magnifierHeight / 2, imgHeight - magnifierHeight));
        return { top: offsetY, left: offsetX };
    };

    const { top, left } = getMagnifierPosition();

    useEffect(() => {
        if (showMagnifier) {
            const img = new window.Image();
            img.src = src;
            img.onload = handleBgImageLoad;
        }
    }, [showMagnifier, src]);

    return (
        <div className="relative inline-block">
            <NextImage
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
                <div className="absolute inset-0 flex justify-center items-center bg-zinc-800 bg-opacity-75">
                    <span className="loading loading-dots loading-lg"></span>
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
                    borderRadius: '50%', // Make the magnifier circular
                    backgroundImage: bgLoading ? 'none' : `url('${src}')`,
                    backgroundRepeat: 'no-repeat',
                    top: `${top}px`,
                    left: `${left}px`,
                    backgroundSize: `${imgWidth * zoomLevel}px ${imgHeight * zoomLevel}px`,
                    backgroundPositionX: `${-x * zoomLevel + magnifierWidth / 2}px`,
                    backgroundPositionY: `${-y * zoomLevel + magnifierHeight / 2}px`,
                }}
            >
                {bgLoading && (
                    <div className="absolute inset-0 flex justify-center items-center bg-purple-500 bg-opacity-75 rounded-full">
                        <span className="loading loading-ring loading-lg"></span>
                    </div>
                )}
            </div>
        </div>
    );
}