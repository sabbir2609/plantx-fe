import { Fetch } from "@/app/lib";
import InnovativeGardeningTab from "./Swiper/InnovativeGardeningTab";

interface ServiceCategory {
    id: number;
    title: string;
    image: string;
}

async function getCommercialData() {
    const data = await Fetch({ endpoint: 'service_categories/commercial/' });
    return data;
}

async function getResidentialData() {
    const data = await Fetch({ endpoint: 'service_categories/residential/' });
    return data;
}

export default async function InnovativeGardeningSection() {

    const commercialData: ServiceCategory[] = await getCommercialData();
    const residentialData: ServiceCategory[] = await getResidentialData();

    return (
        <div>
            <div className="text-center">
                <p className="mt-3 text-3xl font-extrabold tracking-tight text-green-600">Innovative Gardening</p>
                <p className="mt-3 text-lg font-semibold text-gray-600">Get wide range of services for both commercial and residential.</p>
            </div>

            <InnovativeGardeningTab commercialData={commercialData} residentialData={residentialData} />


        </div>

    );
}
