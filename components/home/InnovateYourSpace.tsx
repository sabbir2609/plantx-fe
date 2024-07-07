import Link from 'next/link';
import Image from 'next/image';
import { Fetch } from '@/app/lib';

interface Ideas {
    id: number;
    title: string;
    image: string;
}
async function getIdeas() {
    const data = await Fetch({ endpoint: 'ideas/featured/' });
    return data.slice(0, 4);
}


export default async function InnovateYourSpace() {
    const ideas: Ideas[] = await getIdeas();
    return (

        <div className="flex flex-col p-4 mt-2">

            <Link href="/innovate" className="text-2xl lg:text-3xl font-extrabold text-center mb-3 hover:text-green-600 py-4 uppercase">
                Innovate your Space!
            </Link>

            <div className="grid grid-cols-2 gap-2 lg:gap-4 md:grid-cols-2 lg:grid-cols-4">

                {ideas.map((idea) => (

                    <Link href={`/innovate/${idea.id}`} key={idea.id} className="rounded-md shadow-md">
                        <Image
                            src={idea.image || "/static/no-img.png"}
                            alt={idea.title}
                            height={800}
                            width={800}
                            className='object-cover w-full h-[30vh] md:h-[50vh] lg:h-[60vh] hover:scale-105 transform transition-transform duration-300 ease-in-out rounded-md'
                        />
                    </Link>

                ))}

            </div>
        </div>

    );
};
