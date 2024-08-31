import { Fetch } from '@/app/lib';
import Image from 'next/image';
import { MainImageSwiper } from '@/components/main';
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

export default async function Plants({ params }: { params: { slug: string } }) {

    const data = await Fetch({ endpoint: `main/services/${params.slug}` });
    const service: Service = data;

    return (
        <div className="mx-auto p-2">
            <h1 className="text-3xl font-bold mb-4">{service.title}</h1>

            <div className="rounded-sm mb-4">
                {service.images.length > 0 ? (
                    <MainImageSwiper images={service.images} />
                ) : (
                    <Image
                        src="/static/viriditas.webp"
                        width={600}
                        height={400}
                        alt='No Image Available'
                        className='object-cover'
                    />
                )}
            </div>
            <div className="p-4">
                <div className="mb-4 flex items-center">
                    <strong>Categories: </strong>
                    <div className="flex gap-1 items-center overflow-auto text-nowrap whitespace-nowrap ml-2">
                        {service.categories.map((category) => (
                            <Link
                                href={`/services/${category.type.toLowerCase()}/${category.slug}`}
                                key={category.id}
                                className="bg-primary rounded-sm p-1 cursor-pointer"
                            >
                                {category.type} {category.title}
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="mb-4 w-full">
                    <div className='prose overflow-x-hidden lg:max-w-none' dangerouslySetInnerHTML={{ __html: service.description }} />
                </div>

                <div className='flex gap-1 items-center'>
                    <strong>Tags: </strong>
                    <div className="flex gap-1 items-center overflow-auto text-nowrap whitespace-nowrap ml-2">
                        {service.tags.map((tag) => (
                            <div
                                key={tag.id}
                                className="bg-primary rounded-sm p-1 cursor-pointer"
                            >
                                {tag.tag}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}