"use client";

import { useState, useEffect } from 'react';
import Loading from '@/app/loading';
import ServicesSwiper from './Swiper/ServicesSwiper';

interface Service {
    id: number;
    title: string;
    image: string;
}

async function getCommercialData() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/service_categories/commercial/`);
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    const data: Service[] = await res.json();
    return data;
}

async function getResidentialData() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/service_categories/residential/`);
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    const data: Service[] = await res.json();
    return data;
}

export default function InnovativeGardeningSection() {
    const [activeTab, setActiveTab] = useState('commercial');
    const [commercialData, setCommercialData] = useState<Service[] | null>(null);
    const [residentialData, setResidentialData] = useState<Service[] | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const commercial = await getCommercialData();
                const residential = await getResidentialData();
                setCommercialData(commercial);
                setResidentialData(residential);
                setLoading(false);
            } catch (error) {
                console.error(error);
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    if (loading) {
        return (
            <div className="p-2">
                <Loading />
            </div>
        )
    }

    return (
        <div>
            <div className="text-center">
                <p className="mt-3 text-3xl font-extrabold tracking-tight text-green-600">Innovative Gardening</p>
                <p className="mt-3 text-lg font-semibold text-gray-600">We provide a wide range of services for both commercial and residential properties.</p>
            </div>

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
                        <ServicesSwiper services={commercialData} />
                    )}
                    {activeTab === 'residential' && residentialData && (
                        <ServicesSwiper services={residentialData} />
                    )}
                </div>
            </div>

        </div>

    );
}
