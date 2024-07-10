import { Fetch } from '@/app/lib';
import Image from 'next/image';

interface Category {
    id: number;
    title: string;
}

interface Service {
    id: number;
    title: string;
    description: string;
    image: string | null;
    budget_range: string;
    category: Category;
    type: string;
}

export default async function Plants({ params }: { params: { id: number } }) {

    const data = await Fetch({ endpoint: `main/services/${params.id}` });
    const service: Service = data;

    return (
        <div className="p-4 lg:px-16 rounded-lg shadow-xl lg:my-4 lg:py-6">

            <h1 className="text-3xl font-semibold text-accent mb-4">
                {service.title}
            </h1>

            <div className="flex items-center justify-center">
                {service.image ? (
                    <Image
                        src={service.image}
                        height={1200}
                        width={1200}
                        alt={service.title}
                        className="object-cover shadow-sm max-h-[50vh] w-full rounded-lg"
                    />
                ) : (
                    <Image
                        src="/static/no-img.png"
                        alt="No Image"
                        height={1200}
                        width={1200}
                        className="object-cover shadow-sm max-h-[50vh] w-full rounded-lg"
                    />
                )}
            </div>

            <div className="p-2">

                <div className="flex flex-col lg:flex-row lg:gap-2">
                    <span className="font-semibold p-1 rounded-sm text-nowrap text-accent">
                        {service.category.title}
                    </span>

                    <span className={`font-semibold p-1 rounded-sm text-accent`}>
                        {service.type}
                    </span>

                    <span className="font-semibold p-1 rounded-sm text-nowrap text-accent">
                        {service.budget_range}
                    </span>
                </div>

                <hr className="my-4" />
            </div>

            <div className="prose max-w-none"
                dangerouslySetInnerHTML={{ __html: service.description }}>
            </div>


        </div>
    );
}