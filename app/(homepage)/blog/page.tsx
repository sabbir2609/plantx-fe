import { Fetch } from "@/app/lib";
import Link from "next/link";
import Image from "next/image";

interface BlogCategory {
    id: number;
    name: string;
    slug: string;
}

interface BlogPost {
    id: number;
    title: string;
    slug: string;
    image: string;
    content: string;
    categories: BlogCategory[];
}

export default async function Page() {
    const data = await Fetch({ endpoint: "blog/posts/" });
    const posts: BlogPost[] = data;

    return (
        <div className="mx-auto p-2 px-4 lg:px-8">
            <h1 className="text-3xl font-semibold text-center p-8">Blog Posts</h1>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {posts.map((post) => (
                    <Link
                        key={post.id}
                        href={`/blog/${post.slug}`}
                        className="relative flex flex-col rounded-lg shadow-lg overflow-hidden h-[50vh] transform transition-transform duration-300 hover:scale-105"
                    >
                        <div className="relative w-full h-full">
                            <Image
                                src={post.image || '/static/viriditas.webp'}
                                alt={post.title}
                                height={800}
                                width={800}
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-75"></div>
                        <div className="absolute bottom-4 left-4 p-4 z-10">
                            <h3 className="text-xl lg:text-xl font-semibold mix-blend-multiply">
                                {post.title}
                            </h3>
                            <div className="prose mt-2 text-sm lg:text-base line-clamp-3" dangerouslySetInnerHTML={{ __html: post.content }} />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}