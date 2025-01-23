import { Fetch } from '@/app/lib';
import { Pagination, PlanterCard } from '@/app/components/main';
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Customized Planters',
    description: 'Browse all custom planters offered by Viriditas',
}

interface PlanterFeature {
    id: number;
    name: string;
}

interface Planter {
    id: number;
    name: string;
    slug: string;
    sku: string;
    category: string;
    size: string;
    color: string;
    is_custom: boolean;
    image: string;
    features: PlanterFeature[];
}


export default async function Plants(context: any) {
    const page = (await context.searchParams).page ? (await context.searchParams).page : 1;
    const data = await Fetch({ endpoint: `main/planters/custom?page=${page}` });
    const planter: Planter[] = data['results'];

    const totalPages = Math.ceil(data['count'] / 12);
    const baseURL = 'planters/';

    if (planter.length === 0) {
        return (
            <div className="text-center mt-16">
                <h1 className="text-3xl font-bold mb-6">No planters found</h1>
            </div>
        );
    }

    return (
        <div className="mx-auto px-2">
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
        </div>
    );
}