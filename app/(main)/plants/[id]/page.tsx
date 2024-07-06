import Image from 'next/image';
import Loading from '@/app/loading';
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
    const data = await Fetch({ endpoint: `plants/${params.id}` });
    const plant: Plant = data;

    if (!plant) {
        return (
            <div>
                <Loading />
            </div>
        );
    }

    return (
        <div className='p-2'>
            <div className="mx-auto flex flex-wrap">
                <div className="w-full lg:w-1/2 mb-6 lg:mb-0">

                    {plant.images.length > 0 ? (
                        <SwiperSlideComponent images={plant.images} />
                    ) : (
                        <div className="">
                            <Image
                                src="/static/no-img.png"
                                height={800}
                                width={800}
                                className="object-cover rounded-lg"
                                alt="Placeholder" />
                        </div>
                    )}

                    <div className="rounded-lg px-4 mt-3 pb-2 lg:pb-2 shadow-md">
                        <div className="py-2 flex flex-row gap-2">
                            {plant.features.map(feature => (
                                <p key={feature.id} className="text-sm p-1 inline-block rounded-sm bg-green-100 text-green-700">
                                    {feature.name}
                                </p>
                            ))}
                            <p className="text-sm p-1 inline-block rounded-sm bg-amber-200 text-green-700">
                                {plant.indoor_or_outdoor}
                            </p>
                            <p className="text-sm p-1 inline-block rounded-sm bg-lime-200 text-lime-700">
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

                <div className="join join-vertical lg:w-1/2 w-full lg:ps-4">

                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion" />
                        <div className="collapse-title text-xl font-medium bg-base-200">
                            Description
                        </div>
                        <div className="collapse-content">
                            <div
                                className="prose max-h-[60vh]"
                                dangerouslySetInnerHTML={{ __html: plant.description }}></div>
                        </div>
                    </div>

                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion" />
                        <div className="collapse-title text-xl font-medium bg-base-200">
                            Care Instructions
                        </div>
                        <div className="collapse-content">
                            <div
                                className="prose max-h-[60vh]"
                                dangerouslySetInnerHTML={{ __html: plant.care_instructions }}></div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
