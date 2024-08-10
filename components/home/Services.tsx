import { Fetch } from "@/app/lib";
import ServicesTab from "./Swiper/ServicesTab";

interface ServiceCategory {
    id: number;
    title: string;
    image: string;
}

async function getCommercialData() {
    const data = await Fetch({ endpoint: 'main/service_categories/commercial/' });
    return data;
}

async function getResidentialData() {
    const data = await Fetch({ endpoint: 'main/service_categories/residential/' });
    return data;
}

export default async function Services() {

    const commercialData: ServiceCategory[] = await getCommercialData();
    const residentialData: ServiceCategory[] = await getResidentialData();

    return (
        <div className="p-2 mx-auto">
            <h1 className="mt-5 text-3xl lg:text-4xl font-normal tracking-tight text-center">
                Explore Our Services
            </h1>
            <ServicesTab commercialData={commercialData} residentialData={residentialData} />
        </div>
    );
}
