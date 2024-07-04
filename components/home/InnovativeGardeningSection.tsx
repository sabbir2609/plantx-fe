import InnovativeGardeningTab from "./Swiper/InnovativeGardeningTab";

interface ServiceCategory {
    id: number;
    title: string;
    image: string;
}

async function getCommercialData() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/service_categories/commercial/`);
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    const data = await res.json();
    return data;
}

async function getResidentialData() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/service_categories/residential/`);
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    const data = await res.json();
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
