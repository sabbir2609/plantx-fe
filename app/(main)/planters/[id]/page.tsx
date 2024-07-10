
import Image from 'next/image';
import Loading from '@/app/loading';
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

    return (

        <div className='p-2'>
            <h1 className="text-3xl font-bold mb-4">Planter Details</h1><div className="mx-auto flex flex-wrap">
                <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
                    {planter.images.length > 0 ? (
                        <SwiperSlideComponent images={planter.images} />
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
                    <div className="p-4 shadow-md rounded-lg">
                        <h1 className="text-2xl font-bold">{planter.model}</h1>
                        <p className="text-xl">{planter.category.name}</p>
                        <p className="text-xl">{planter.size}</p>
                        <p className="text-xl">{planter.color}</p>
                    </div>
                </div>

                <div className="w-full lg:w-1/2 lg:pl-4">
                    <div className="collapse collapse-arrow join-item border rounded-lg shadow-lg">
                        <input type="radio" name="my-accordion" />
                        <div className="collapse-title text-xl font-medium bg-base-200">
                            Description
                        </div>
                        <div className="collapse-content">
                            <div
                                className="prose max-w-none overflow-auto max-h-[60vh]"
                                dangerouslySetInnerHTML={{ __html: planter.description }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}