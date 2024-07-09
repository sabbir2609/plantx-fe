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

                <button className={`btn btn-outline rounded-none rounded-tr-2xl rounded-bl-2xl ${activeTab === 'commercial' ? 'btn-primary' : 'btn-secondary'}`}
                    onClick={() => setActiveTab('commercial')}
                >
                    Commercial
                </button>
                <button className={`btn btn-outline rounded-none rounded-tr-2xl rounded-bl-2xl ${activeTab === 'residential' ? 'btn-primary' : 'btn-secondary'}`}
                    onClick={() => setActiveTab('residential')}
                >
                    Residential
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