import Image from 'next/image';
import { SwiperSlideComponent } from '@/components/common';
import { Fetch } from '@/app/lib';
import type { Metadata, ResolvingMetadata } from 'next'

interface PlantFeature {
    id: number;
    name: string;
}

interface PlantPromotion {
    id: number;
    description: string;
    discount: number | null;
}

interface PlantImage {
    id: number;
    image: string;
    short_description: string;
}

interface PlantZone {
    id: number;
    zone: string;
    available: boolean;
    unit: string;
    unit_price: string;
}

interface PlantTag {
    id: number;
    tag: string;
}

interface Plant {
    id: number;
    name: string;
    sku: string;
    category: string;
    location_type: string;
    size: string;
    images: PlantImage[];
    description: string;
    care_instructions: string;
    promotion: number[];
    features: PlantFeature[];
    zone: PlantZone[];
    tags: PlantTag[];
}


type Props = {
    params: { slug: string }
}

export async function generateMetadata(
    { params }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    // read route params
    const slug = params.slug

    // fetch data
    const product = await Fetch({ endpoint: `main/plants/${slug}` })

    // optionally access and extend (rather than replace) parent metadata
    const previousImages = (await parent).openGraph?.images || []

    return {
        title: product.name,
        openGraph: {
            images: ["/static/viriditas.png", ...previousImages],
        },
    }
}


export default async function Plants(
    { params }: Props
) {
    const data = await Fetch({ endpoint: `main/plants/${params.slug}` });
    const plant: Plant = data;

    return (
        <div className="flex flex-wrap mx-auto p-2 gap-4 lg:gap-0">
            <div className="w-full lg:w-1/2">
                {plant.images.length > 0 ? (
                    <SwiperSlideComponent images={plant.images} />
                ) : (
                    <div className="">
                        <Image
                            src="/static/viriditas.png"
                            height={800}
                            width={800}
                            className="object-cover rounded-lg"
                            alt="Placeholder"
                        />
                    </div>
                )}
            </div>

            <div className="lg:ps-2 w-full lg:w-1/2 space-y-2">
                <div className="px-3 py-2 rounded-md shadow-md bg-base-200">
                    <div className="flex flex-row gap-2 py-2">
                        {plant.features.map(feature => (
                            <p key={feature.id} className="inline-block p-1 text-sm text-green-700 bg-green-100 rounded-sm">
                                {feature.name}
                            </p>
                        ))}
                        <p className="inline-block p-1 text-sm text-green-700 rounded-sm bg-amber-200">
                            {plant.location_type}
                        </p>
                        <p className="inline-block p-1 text-sm rounded-sm bg-lime-200 text-lime-700">
                            {plant.size}
                        </p>
                    </div>
                    <h1 className="text-2xl font-bold">
                        {plant.name}
                    </h1>
                    <p className="text-xl">
                        <span className="text-accent">Category:</span> {plant.category}
                    </p>
                    <p className="text-sm">
                        <span className="text-accent">SKU:</span> {plant.sku}
                    </p>
                    <div className="flex flex-row gap-2 py-2 items-center">
                        <span className="text-accent">Tags:</span>
                        {plant.tags.map(tag => (
                            <p key={tag.id} className="text-sm text-blue-700 bg-blue-100 badge">
                                {tag.tag}
                            </p>
                        ))}
                    </div>
                </div>
                <div className="join join-vertical w-full">
                    <div className="collapse collapse-arrow join-item border-base-300 bg-base-200 border">
                        <input type="radio" name="my-accordion-4" defaultChecked />
                        <div className="collapse-title text-xl font-medium">
                            Description
                        </div>
                        <div className="collapse-content overflow-x-hidden bg-base-100">
                            <div
                                className="prose max-h-[57vh]"
                                dangerouslySetInnerHTML={{ __html: plant.description }}
                            />
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border-base-300 bg-base-200 border">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">
                            Care Instructions
                        </div>
                        <div className="collapse-content overflow-x-hidden bg-base-100">
                            <div
                                className="prose max-h-[57vh]"
                                dangerouslySetInnerHTML={{ __html: plant.care_instructions }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
