import { Fetch } from "@/app/lib";
import Loading from "@/app/loading";
import { Pagination, ServiceCard } from "@/components/main";

interface Category {
    id: number;
    title: string;
}

interface Service {
    id: number;
    title: string;
    description: string;
    image: string | null;
    budget_range: string;
    category: Category;
    type: string;
}

export default async function services(context: any) {
    const page = context.searchParams.page ? context.searchParams.page : 1;
    const data = await Fetch({ endpoint: `main/services/?page=${page}` });
    const services: Service[] = data['results'];

    const totalPages = Math.ceil(data['count'] / 12);
    const baseURL = 'services/';

    if (!services.length) {
        return <div>
            <Loading />
        </div>;
    }

    return (
        <>
            <h1 className="text-3xl font-bold mb-6">
                Browse all services
            </h1>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-4 lg:p-2 mb-16">
                {services.map((service) => (
                    <ServiceCard service={service} key={service.id} />
                ))}
            </div>
            <div className="fixed bottom-14 right-4">
                <Pagination baseURL={baseURL} totalPages={totalPages} />
            </div>
        </>
    );
}