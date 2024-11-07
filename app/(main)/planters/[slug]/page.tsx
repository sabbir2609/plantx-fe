import Image from 'next/image';
import { SwiperSlideComponent } from '@/components/common';
import { Fetch } from '@/app/lib';

interface PlanterImage {
    id: number;
    image: string;
    short_description: string;
}

interface PlanterFeature {
    id: number;
    name: string;
}

interface PlanterZone {
    id: number;
    zone: string;
    available: boolean;
    unit: string;
    unit_price: string;
}

interface PlanterTag {
    id: number;
    tag: string;
}

interface Planter {
    id: number;
    name: string;
    sku: string;
    category: string;
    size: string;
    color: string;
    is_custom: boolean;
    images: PlanterImage[];
    description: string;
    features: PlanterFeature[];
    zones: PlanterZone[];
    tags: PlanterTag[];
}


export default async function Plants(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    const data = await Fetch({ endpoint: `main/planters/${params.slug}` });
    const planter: Planter = data;

    return (<div className="flex flex-wrap mx-auto p-2 gap-4 lg:gap-0">
        <div className="w-full lg:w-1/2">
            {planter.images.length > 0 ? (
                <SwiperSlideComponent images={planter.images} />
            ) : (
                <div className="">
                    <Image
                        src="/static/viriditas.webp"
                        height={800}
                        width={800}
                        className="object-cover rounded-lg"
                        alt="Placeholder"
                    />
                </div>
            )}

            <div className="p-2 rounded-lg shadow-md tracking-tight">
                <div className="flex flex-row gap-2 py-2">
                    {planter.features.map((feature) => (
                        <span key={feature.id} className="text-xs px-2 py-1 bg-base-200 rounded-lg">
                            {feature.name}
                        </span>
                    ))}
                </div>
                <h1 className="text-xl">
                    <span className="font-semibold">Model: </span>
                    {planter.name}
                </h1>
                <p className="text-normal">
                    <span className="font-semibold">Category: </span>
                    {planter.category}
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
                    {planter.tags.map((tag) => (
                        <span key={tag.id} className="text-xs px-2 py-1 bg-base-200 rounded-lg">
                            {tag.tag}
                        </span>
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