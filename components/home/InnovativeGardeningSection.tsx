import { Fetch } from "@/app/lib";
import InnovativeGardeningTab from "./Swiper/InnovativeGardeningTab";

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

export default async function InnovativeGardeningSection() {

    const commercialData: ServiceCategory[] = await getCommercialData();
    const residentialData: ServiceCategory[] = await getResidentialData();

    return (
        <div className="p-2 mx-auto">
            <h1 className="mt-3 text-3xl font-normal tracking-tight text-center lg:font-bold">
                Explore Our Services
            </h1>
            <InnovativeGardeningTab commercialData={commercialData} residentialData={residentialData} />
        </div>
    );
}
