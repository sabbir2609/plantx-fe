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
    const data = await Fetch({ endpoint: `main/plants/${params.id}` });
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
            <div className="flex flex-wrap mx-auto">
                <div className="w-full mb-6 lg:w-1/2 lg:mb-0">

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

                    <div className="px-4 pb-2 mt-3 rounded-lg shadow-md lg:pb-2">

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

                <div className="w-full join join-vertical lg:w-1/2 lg:ps-4">

                    <div className="border collapse collapse-arrow join-item border-base-300">
                        <input type="radio" name="my-accordion" />
                        <div className="text-xl font-medium collapse-title bg-base-200">
                            Description
                        </div>
                        <div className="collapse-content">
                            <div
                                className="prose max-h-[60vh] overflow-x-hidden"
                                dangerouslySetInnerHTML={{ __html: plant.description }} />
                        </div>
                    </div>

                    <div className="border collapse collapse-arrow join-item border-base-300">
                        <input type="radio" name="my-accordion" />
                        <div className="text-xl font-medium collapse-title bg-base-200">
                            Care Instructions
                        </div>
                        <div className="collapse-content">
                            <div
                                className="prose max-h-[60vh]"
                                dangerouslySetInnerHTML={{ __html: plant.care_instructions }}>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
