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
        <div className="flex flex-col p-2 mt-2">
            <div className="text-4xl font-extrabold text-center">
                Innovate your Space!
            </div>

            <div className="text-right">
                <Link
                    href="/innovate"
                    className="font-bold transition-colors duration-300 text-nowrap hover:text-blue-500"
                >
                    View All
                </Link>
            </div>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-4">
                {ideas.map((idea) => (
                    <Link href={`/innovate/${idea.id}`} key={idea.id} className="rounded-md shadow-md">
                        {idea.image ? (
                            <Image src={idea.image} alt={idea.title} className="object-cover w-full h-48 rounded-t-md" width={300} height={200} />
                        ) : (
                            <Image
                                src="/static/no-img.png"
                                alt={idea.title}
                                width={300}
                                height={200}
                                className="object-cover w-full h-48 rounded-t-md"
                            />
                        )}

                        <p className="p-2 font-semibold truncate" title={idea.title}>
                            {idea.title}
                        </p>
                    </Link>
                ))}
            </div>
        </div>
    );
};
