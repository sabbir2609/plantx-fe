import Link from 'next/link';
import Image from 'next/image';
import { Fetch } from '@/app/lib';

interface Ideas {
    id: number;
    title: string;
    image: string;
    tags: string[];
}
async function getIdeas() {
    const data = await Fetch({ endpoint: 'main/ideas/featured/' });
    return data;
}


export default async function InnovateYourSpace() {
    const ideas: Ideas[] = await getIdeas();
    return (
        <div className="p-2 mx-auto mt-8 lg:mt-14">
            <div className="flex justify-between mb-5 border-b text-normal">
                <div className="flex items-center pb-1 uppercase border-b-2">
                    <h1 className="text-3xl lg:text-4xl font-normal tracking-tight uppercase">
                        Innovate Your Space
                    </h1>
                </div>
                <Link className="font-semibold hover:text-blue-600 place-content-end text-nowrap" href="/innovate">
                    View All
                </Link>
            </div>
            <div className="grid grid-cols-2 gap-2 md:gap-5 lg:grid-cols-4">
                {ideas.map((idea) => (
                    <div key={idea.id} className="relative">
                        <Image
                            src={idea.image || "/static/viriditas.png"}
                            alt="Idea Image"
                            width={500}
                            height={300}
                            className="w-full h-[40vh] object-cover rounded-lg transition duration-500 ease-in-out hover:scale-105 hover:shadow-lg hover:rounded-lg"
                        />
                        <div
                            className="absolute top-0 bottom-0 left-0 right-0 transition duration-300 bg-gray-900 rounded-lg opacity-40 hover:bg-transparent">
                        </div>
                        <div
                            className="absolute top-0 right-0 px-4 py-2 mt-3 mr-3 text-xs text-black transition duration-500 ease-in-out bg-slate-300 hover:bg-white hover:text-indigo-600 rounded-badge">
                            {idea.tags[0]}
                        </div>
                        <div className="absolute bottom-0 left-0 p-4">
                            <div className="flex flex-col items-start mb-2">
                                <div className="inline-block mb-2 text-lg font-semibold leading-5 tracking-tight text-white transition duration-500 ease-in-out">
                                    {idea.title}
                                </div>
                                <Link href={`/innovate/${idea.id}`} className="text-sm font-semibold text-green-600 hover:text-green-700">
                                    See more
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
};
