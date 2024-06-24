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


export default async function TopPicks() {
    const ideas: Ideas[] = await getIdeas();
    return (
        <div className="flex flex-col p-2 mt-2 bg-green-100">
            <div className="text-center font-extrabold">
                <span className="text-4xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                    Top Picks
                </span>
            </div>

            <div className="flex flex-row justify-between">
                <h3 className="text-2xl font-semibold mb-2">
                    Ideas
                </h3>
                <Link
                    href="/innovate"
                    className="text-nowrap font-bold hover:text-green-500 transition-colors duration-300"
                >
                    View All
                </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {ideas.map((idea) => (
                    <Link href={`/innovate/${idea.id}`} key={idea.id} className="rounded-md shadow-md bg-green-50">
                        {idea.image ? (
                            <Image src={idea.image} alt={idea.title} className="w-full h-48 object-cover rounded-t-md" width={300} height={200} />
                        ) : (
                            <Image
                                src="/static/no-img.png"
                                alt={idea.title}
                                width={300}
                                height={200}
                                className="w-full h-48 object-cover rounded-t-md"
                            />
                        )}

                        <p className="text-center font-semibold p-2 truncate" title={idea.title}>
                            {idea.title}
                        </p>
                    </Link>
                ))}
            </div>
        </div>
    );
};
