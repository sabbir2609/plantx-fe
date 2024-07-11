import Image from 'next/image';
import { SwiperSlideComponent } from '@/components/common';
import { Fetch } from '@/app/lib';

interface PlantImage {
    id: number;
    image: string;
    short_description: string;
}

interface PlanterCategory {
    id: number;
    name: string;
}

interface Planter {
    id: number;
    model: string;
    category: PlanterCategory;
    size: string;
    color: string;
    description: string;
    tags: [];
    images: PlantImage[];
}

export default async function Plants({ params }: { params: { id: number } }) {
    const data = await Fetch({ endpoint: `main/planters/${params.id}` });
    const planter: Planter = data;

    return (<div className="flex flex-wrap mx-auto p-2 gap-4 lg:gap-0">
        <div className="w-full lg:w-1/2">
            {planter.images.length > 0 ? (
                <SwiperSlideComponent images={planter.images} />
            ) : (
                <div className="">
                    <Image
                        src="/static/no-img.png"
                        height={800}
                        width={800}
                        className="object-cover rounded-lg"
                        alt="Placeholder"
                    />
                </div>
            )}
            <div className="p-2 rounded-lg shadow-md tracking-tight">
                <h1 className="text-xl">
                    <span className="font-semibold">Model: </span>
                    {planter.model}
                </h1>
                <p className="text-normal">
                    <span className="font-semibold">Category: </span>
                    {planter.category.name}
                </p>
                <p className="text-sm">
                    <span className="font-semibold">Size: </span>
                    {planter.size}
                </p>
                <p className="text-sm">
                    <span className="font-semibold">Color: </span>
                    {planter.color}
                </p>
                <div className="flex flex-row gap-2 py-2">
                    {planter.tags.map((tag, index) => (
                        <div key={index} className="py-1 px-2 rounded-sm backdrop-blur-md bg-gray-800 bg-opacity-50 text-white flex flex-row">
                            <p className="text-xs font-medium mr-1">{tag}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <div className="lg:ps-2 w-full lg:w-1/2 space-y-2">
            <div className="join join-vertical w-full">
                <div className="collapse collapse-arrow join-item border-base-300 bg-base-200 border">
                    <input type="radio" name="my-accordion-4" defaultChecked />
                    <div className="collapse-title text-xl font-medium">
                        Description
                    </div>
                    <div className="collapse-content overflow-x-hidden bg-base-100">
                        <div
                            className="prose max-h-[57vh]"
                            dangerouslySetInnerHTML={{ __html: planter.description }}
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}