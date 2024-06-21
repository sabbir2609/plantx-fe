import Loading from '@/app/loading';
import { Pagination, PlanterCard } from '@/components/main';

interface PlanterCategory {
    name: string;
}

interface Planter {
    id: number;
    model: string;
    category: PlanterCategory;
    short_description: string;
    features?: { id: number; name: string }[];
    size: string;
    color: string;
    images: { id: number; image: string }[];
}

export default async function Plants(context: any) {
    const page = context.searchParams.page ? context.searchParams.page : 1;
    const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/planters/?page=${page}`, {
        cache: "no-cache",
    });

    if (!response.ok) {
        throw new Error("Failed to fetch data");
    }

    const data = await response.json();
    const planters: Planter[] = data['results'];

    const totalPages = Math.ceil(data['count'] / 12);
    const baseURL = 'planters/';

    if (!planters.length) {
        return <div>
            <Loading />
        </div>;
    }

    return (
        <>
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
        </>
    );
}