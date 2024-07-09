"use client";

import React, { useState } from 'react';
import ComServicesSwiper from './ComServicesSwiper';
import ResServicesSwiper from './ResServicesSwiper';

interface ServiceCategory {
    id: number;
    title: string;
    image: string;
}

interface InnovativeGardeningTabProps {
    commercialData: ServiceCategory[];
    residentialData: ServiceCategory[];
}

export default function InnovativeGardeningTab(
    { commercialData, residentialData }: InnovativeGardeningTabProps
) {
    const [activeTab, setActiveTab] = useState<'commercial' | 'residential'>('residential');

    return (
        <div className="flex flex-col items-center p-2 mt-2 lg:p-0 lg:flex-row ">
            <div className="flex flex-row justify-center gap-2 font-semibold lg:-rotate-90 lg:text-xl lg:w-10 lg:h-10 lg:m-4">

                <button
                    className={`px-4 py-2 relative border-2 border-black text-black hover:bg-black hover:text-white shadow-sm transition-all duration-300 rounded-tl-none rounded-tr-2xl rounded-bl-2xl rounded-br-none ${activeTab === 'commercial' ? 'bg-black text-white' : ''}`}
                    onClick={() => setActiveTab('commercial')}
                >
                    Commercial
                    <span className="absolute top-0 left-0 w-full h-0.5 bg-black transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                </button>

                <button
                    className={`px-4 py-2 relative border-2 border-black text-black hover:bg-black hover:text-white shadow-sm transition-all duration-300 rounded-tl-none rounded-tr-2xl rounded-bl-2xl rounded-br-none ${activeTab === 'residential' ? 'bg-black text-white' : ''}`}
                    onClick={() => setActiveTab('residential')}
                >
                    Residential
                    <span className="absolute top-0 left-0 w-full h-0.5 bg-black transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                </button>

            </div>

            <div className='w-full h-full mt-5 overflow-auto rounded-lg max-w-max lg:me-2'>
                {activeTab === 'commercial' && commercialData && (
                    <ComServicesSwiper services={commercialData} />
                )}
                {activeTab === 'residential' && residentialData && (
                    <ResServicesSwiper services={residentialData} />
                )}
            </div>
        </div>
    );
};