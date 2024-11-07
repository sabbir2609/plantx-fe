import { Fetch } from "@/app/lib";
import ServicesTab from "./Swiper/ServicesTab";

interface ServiceCategory {
    id: number;
    title: string;
    slug: string;
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
        <div className="p-2 mx-auto" id="service-section">
            <ServicesTab commercialData={commercialData} residentialData={residentialData} />
        </div>
    );
}
