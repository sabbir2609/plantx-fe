import { Fetch } from '@/app/lib';
import { Pagination, PlanterCard } from '@/components/main';

interface PlanterCategory {
    id: number;
    name: string;
    description: string;
    image: string;
}

interface Planter {
    id: number;
    model: string;
    category: PlanterCategory;
    short_description: string;
    size: string;
    color: string;
    images: { id: number; image: string }[];
}

export default async function Plants(context: any) {
    const page = context.searchParams.page ? context.searchParams.page : 1;
    const data = await Fetch({ endpoint: `main/planters/custom?page=${page}` });
    const planter: Planter[] = data['results'];

    const totalPages = Math.ceil(data['count'] / 12);
    const baseURL = 'planters/';

    return (
        <>
            <h1 className="text-3xl font-bold mb-6">
                Our Custom Planters
            </h1>

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-4 lg:p-2 mb-16">
                {planter.map((planter) => (
                    <PlanterCard planter={planter} key={planter.id} />
                ))}
            </div>

            <div className="fixed bottom-4 right-4">
                <Pagination baseURL={baseURL} totalPages={totalPages} />
            </div>
        </>
    );
}