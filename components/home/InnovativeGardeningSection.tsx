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
        return <Loading />;
    }

    return (
        <div className="p-2">

            <div className="text-center">
                <p className="mt-3 text-3xl font-extrabold tracking-tight text-green-600">Innovative Gardening</p>
            </div>

            <div className="flex flex-col lg:flex-row mt-5">

                <div className="flex flex-row gap-2 justify-center lg:-rotate-90 lg:text-xl font-semibold lg:w-10 lg:m-2 lg:border-r">
                    <button
                        className={`px-4 py-2 ${activeTab === 'commercial' ? 'text-white bg-green-600' : 'text-green-600 bg-white'} rounded-sm shadow-sm`}
                        onClick={() => setActiveTab('commercial')}
                    >
                        Commercial
                    </button>
                    <button
                        className={`px-4 py-2 ${activeTab === 'residential' ? 'text-white bg-green-600' : 'text-green-600 bg-white'} rounded-sm shadow-sm`}
                        onClick={() => setActiveTab('residential')}
                    >
                        Residential
                    </button>
                </div>

                <div className="mt-4 lg:mt-0 lg:w-11/12">
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
