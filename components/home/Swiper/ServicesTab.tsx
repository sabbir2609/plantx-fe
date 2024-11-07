"use client";

import React, { useState } from 'react';
import ComServicesSwiper from './ComServicesSwiper';
import ResServicesSwiper from './ResServicesSwiper';
import Link from 'next/link';

interface ServiceCategory {
    id: number;
    title: string;
    slug: string;
    image: string;
}

interface ServicesTabProps {
    commercialData: ServiceCategory[];
    residentialData: ServiceCategory[];
}

export default function ServicesTab(
    { commercialData, residentialData }: ServicesTabProps
) {
    const [activeTab, setActiveTab] = useState<'commercial' | 'residential'>('residential');

    return (
        <>
            <div className='flex flex-col lg:flex-row items-center lg:items-baseline p-2 lg:justify-between'>
                <h1 className="mt-5 text-3xl lg:text-4xl font-normal tracking-tight text-center mb-4">
                    Explore Our Services
                </h1>

                <div className="flex flex-row justify-center gap-2 font-semibold">
                    <button className={`btn border-2 rounded-none rounded-tr-2xl rounded-bl-2xl ${activeTab === 'commercial' ? 'btn-primary' : 'btn-secondary btn-outline'}`}
                        onClick={() => setActiveTab('commercial')}
                    >
                        Commercial
                    </button>
                    <button className={`btn border-2 rounded-none rounded-tr-2xl rounded-bl-2xl ${activeTab === 'residential' ? 'btn-primary' : 'btn-secondary btn-outline'}`}
                        onClick={() => setActiveTab('residential')}
                    >
                        Residential
                    </button>
                </div>

            </div>

            <div className='w-full h-full pt-5 rounded-lg'>
                {activeTab === 'commercial' && commercialData && (
                    <ComServicesSwiper services={commercialData} />
                )}
                {activeTab === 'residential' && residentialData && (
                    <ResServicesSwiper services={residentialData} />
                )}
            </div>
            <div className='flex justify-end items-center m-2'>
                <div className='w-full h-[2px] bg-base-200 mx-2 rounded-full'></div>
                <Link href='/services' className='text-nowrap hover:text-blue-700 text-xl'>
                    View all Services &rarr;
                </Link>
            </div>
        </>
    );
};