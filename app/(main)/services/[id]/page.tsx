import Loading from '@/app/loading';
import Image from 'next/image';

interface Category {
    id: number;
    title: string;
}

interface Type {
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
    type: Type;
}

const richTextStyles: Record<string, string> = {
    h1: 'text-2xl font-bold mb-4',
    h2: 'text-xl font-semibold mb-3',
    p: 'mb-2',
    ul: 'list-disc pl-5 mb-2',
    ol: 'list-decimal pl-5 mb-2',
    blockquote: 'border-l-4 border-gray-300 pl-4 italic text-gray-600 mb-4',
    a: 'text-blue-500 underline',
    pre: 'bg-gray-200 p-2 rounded mb-2',
    code: 'bg-gray-200 p-1 rounded',
};

export default async function Plants({ params }: { params: { id: number } }) {

    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/services/${params.id}/`, {
        cache: "no-cache",
    });

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    const service: Service = await res.json();

    if (!service) {
        return (
            <div>
                <Loading />
            </div>
        );
    }


    return (
        <div className="lg:px-16 border rounded-lg my-4 py-6">

            <div className="flex items-center justify-center">
                {service.image ? (
                    <Image
                        src={service.image}
                        alt={service.title}
                        width={400}
                        height={300}
                        objectFit="cover"
                    />
                ) : (
                    <Image
                        src="/static/no-img.png"
                        alt="No Image"
                        width={400}
                        height={300}
                        className="object-cover" />
                )}
            </div>

            <div className="p-2">
                <h2 className="text-2xl font-bold  mb-2">{service.title}</h2>

                <div className="flex flex-row gap-4">
                    <span className="inline-block bg-amber-300 text-blue-700 font-semibold p-2 rounded-sm">
                        {service.category.title}
                    </span>

                    <span className="inline-block bg-purple-100 text-purple-700 font-semibold p-2 rounded-sm">
                        {service.type.title}
                    </span>

                    <span className="inline-block bg-green-100 text-green-700 font-semibold p-2 rounded-sm">
                        {service.budget_range}
                    </span>
                </div>

                <hr className="my-4" />

                <div className="prose"
                    style={richTextStyles}
                    dangerouslySetInnerHTML={{ __html: service.description }}>
                </div>

            </div>
        </div>
    );
}