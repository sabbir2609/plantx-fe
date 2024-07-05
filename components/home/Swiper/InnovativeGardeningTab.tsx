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
    const [activeTab, setActiveTab] = useState<'commercial' | 'residential'>('commercial');

    return (
        <div className="flex flex-col items-center p-2 mt-2 lg:p-0 lg:flex-row ">
            <div className="flex flex-row justify-center gap-2 font-semibold lg:-rotate-90 lg:text-xl lg:w-10 lg:h-10 lg:m-4">
                <button
                    className={`px-4 py-2 relative ${activeTab === 'commercial' ? 'text-white bg-green-600 hover:bg-green-700' : 'text-green-600 bg-white hover:bg-green-100'} rounded-sm shadow-sm transition-all duration-300`}
                    onClick={() => setActiveTab('commercial')}
                >
                    Commercial
                    <span className="absolute top-0 left-0 w-full h-0.5 bg-green-600 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                </button>
                <button
                    className={`px-4 py-2 relative ${activeTab === 'residential' ? 'text-white bg-green-600 hover:bg-green-700' : 'text-green-600 bg-white hover:bg-green-100'} rounded-sm shadow-sm transition-all duration-300`}
                    onClick={() => setActiveTab('residential')}
                >
                    Residential
                    <span className="absolute top-0 left-0 w-full h-0.5 bg-green-600 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
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