import Link from 'next/link';
import Image from 'next/image';

interface Ideas {
    id: number;
    title: string;
    image: string;
}
async function getIdeas() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/ideas/featured/`,
        {
            cache: 'no-cache',
        }
    );
    const data = await res.json();
    return data.slice(0, 4);
}


export default async function InnovateYourSpace() {
    const ideas: Ideas[] = await getIdeas();
    return (

        <div className="flex flex-col p-2 mt-2">
            <Link href="/innovate" className="text-3xl font-extrabold text-center mb-3 hover:text-green-600 underline">
                Innovate your Space!
            </Link>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-4">
                {ideas.map((idea) => (
                    <Link href={`/innovate/${idea.id}`} key={idea.id} className="rounded-md shadow-md">
                        <Image
                            src={idea.image || "/static/no-img.png"}
                            alt={idea.title}
                            height={800}
                            width={800}
                            className='object-cover w-full h-[40vh] hover:scale-105 transform transition-transform duration-300 ease-in-out rounded-md'
                        />
                        <p className="p-2 font-semibold truncate" title={idea.title}>
                            {idea.title}
                        </p>
                    </Link>
                ))}
            </div>
        </div>

    );
};
