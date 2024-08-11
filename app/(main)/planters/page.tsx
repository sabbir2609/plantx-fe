import { Fetch } from '@/app/lib';
import { Pagination, PlanterCard } from '@/components/main';
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Planters',
    description: 'Browse all planters offered by Viriditas',
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
    const page = context.searchParams.page ? context.searchParams.page : 1;

    const data = await Fetch({ endpoint: `main/planters/?page=${page}` });

    const planters: Planter[] = data['results'];

    const totalPages = Math.ceil(data['count'] / 12);
    const baseURL = 'planters/';

    if (planters.length === 0) {
        return (
            <div className="text-center mt-16">
                <h1 className="text-3xl font-bold mb-6">No planters found</h1>
            </div>
        );
    }

    return (
        <div className="mx-auto px-2">
            <h1 className="text-3xl font-bold mb-6">
                Browse all Planters
            </h1>

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-4 lg:p-2 mb-16">
                {planters.map((planter) => (
                    <PlanterCard planter={planter} key={planter.id} />
                ))}
            </div>

            <div className="fixed bottom-4 right-4">
                <Pagination baseURL={baseURL} totalPages={totalPages} />
            </div>
        </div>
    );
}