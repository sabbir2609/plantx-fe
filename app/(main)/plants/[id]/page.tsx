import Image from 'next/image';
import { SwiperSlideComponent } from '@/components/common';
import { Fetch } from '@/app/lib';

interface PlantCategory {
    id: number;
    name: string;
}

interface Tag {
    id: number;
    name: string;
}

interface PlantImage {
    id: number;
    image: string;
    short_description: string;
}

interface Plant {
    id: number;
    title: string;
    category: PlantCategory;
    indoor_or_outdoor: string;
    size: string;
    description: string;
    care_instructions: string;
    features: { id: number, name: string }[];
    tags: Tag[];
    created_at: string;
    images: PlantImage[];
}
export default async function Plants({ params }: { params: { id: number } }) {
    const data = await Fetch({ endpoint: `main/plants/${params.id}` });
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
                <div className="p-2 rounded-lg shadow-md">
                    <div className="flex flex-row gap-2 py-2">
                        {plant.features.map(feature => (
                            <p key={feature.id} className="inline-block p-1 text-sm text-green-700 bg-green-100 rounded-sm">
                                {feature.name}
                            </p>
                        ))}
                        <p className="inline-block p-1 text-sm text-green-700 rounded-sm bg-amber-200">
                            {plant.indoor_or_outdoor}
                        </p>
                        <p className="inline-block p-1 text-sm rounded-sm bg-lime-200 text-lime-700">
                            {plant.size}
                        </p>
                    </div>
                    <h1 className="text-2xl font-bold">{plant.title}</h1>
                    <p className="text-xl">{plant.category.name}</p>
                    <div className="">
                        <p className="text-sm"><span className="text-lg font-semibold"></span>{plant.tags.map(tag => tag.name).join(', ')}</p>
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
