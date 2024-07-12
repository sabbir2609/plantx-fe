import Link from 'next/link';
import OurWorksSwiper from './Swiper/OurWorksSwiper';
import { Fetch } from '@/app/lib';

interface Works {
    id: number;
    title: string;
    image: string;
    client: string;
    categories: string;
    year: number;
}

export default async function OurWorks() {
    const data = await Fetch({ endpoint: 'main/projects/' });
    const works: Works[] = data;

    return (
        <section className="px-2 py-10 lg:px-4">
            <div className="flex justify-between mb-5 border-b text-normal">
                <div className="flex items-center pb-1 pr-2 uppercase border-b-2">
                    <h1 className="text-3xl lg:text-4xl font-normal tracking-tight">
                        Our Projects
                    </h1>
                </div>
                <Link className="font-semibold hover:text-blue-600 place-content-end" href="#">
                    View All
                </Link>
            </div>
            <OurWorksSwiper works={works} />
        </section>
    );
};
