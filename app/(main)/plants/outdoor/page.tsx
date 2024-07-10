import { Fetch } from "@/app/lib";
import { Pagination, PlantCard } from "@/components/main"

interface PlantCategory {
    id: number;
    name: string;
    description: string;
    image: string;
}

interface Tag {
    id: number;
    name: string;
}

interface Plant {
    id: number;
    title: string;
    category: PlantCategory;
    indoor_or_outdoor: string;
    size: string;
    description: string;
    care_instructions: string;
    tags: Tag[];
    created_at: string;
    images: { id: number; image: string }[];
}

export default async function Page(context: any) {
    const page = context.searchParams.page ? context.searchParams.page : 1;
    const data = await Fetch({ endpoint: `main/plants/outdoor/?page=${page}` });
    const plants: Plant[] = data['results'];

    const totalPages = Math.ceil(data['count'] / 12);
    const baseURL = 'plants/';

    return (
        <>
            <h1 className="text-3xl font-bold mb-6">
                Outdoor Plants
            </h1>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-4 lg:p-2 mb-16">

                {plants.map((plant) => (
                    <PlantCard plant={plant} key={plant.id} />
                ))}

            </div>
            <div className="fixed bottom-4 right-4">
                <Pagination baseURL={baseURL} totalPages={totalPages} />
            </div>
        </>
    );
}