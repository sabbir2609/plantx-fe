import { Fetch } from '@/app/lib';
import Image from 'next/image';
import { MainImageSwiper, ProductImageViewer } from '@/components/main';
import Link from 'next/link';

interface Category {
    id: number;
    title: string;
    slug: string;
    type: string;
}

interface Image {
    id: number;
    image: string;
    short_description: string;
}

interface Tags {
    id: number;
    tag: string;
}

interface Service {
    id: number;
    title: string;
    description: string;
    images: Image[];
    categories: Category[];
    tags: Tags[];
}

export default async function Service({ params }: { params: { slug: string } }) {

    const data = await Fetch({ endpoint: `main/services/${params.slug}` });
    const service: Service = data;

    return (
        <div className="mx-auto p-2">
            <div className="rounded-sm mb-4">
                {service.images.length > 0 ? (
                    <ProductImageViewer images={service.images} />
                ) : (
                    <Image
                        src="/static/viriditas.webp"
                        width={600}
                        height={400}
                        alt='No Image Available'
                        className='object-cover rounded-md'
                    />
                )}
            </div>
            <div className="p-2">
                <h1 className="text-xl font-bold mb-4 tracking-tight leading-6">{service.title}</h1>
                <div className="mb-4 flex items-center">
                    <strong>Categories: </strong>
                    <div className="flex gap-1 items-center overflow-auto rounded-l-full text-nowrap whitespace-nowrap ml-2">
                        {service.categories.map((category) => (
                            <Link
                                href={`/services/${category.type.toLowerCase()}/${category.slug}`}
                                key={category.id}
                                className="bg-accent rounded-full p-1 cursor-pointer"
                            >
                                {category.type} {category.title}
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="mb-4 w-full">
                    <div className='prose overflow-x-hidden lg:max-w-none' dangerouslySetInnerHTML={{ __html: service.description }} />
                </div>

                {service.tags.length > 0 && (
                    <div className='flex gap-1 items-center'>
                        <strong>Tags: </strong>
                        <div className="flex gap-1 items-center overflow-auto text-nowrap whitespace-nowrap ml-2">
                            {service.tags.map((tag) => (
                                <div
                                    key={tag.id}
                                    className="bg-accent rounded-badge p-1 text-sm"
                                >
                                    {tag.tag}
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}