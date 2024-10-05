import { Fetch } from "@/app/lib";
import Image from "next/image";
import Link from "next/link";

interface BlogCategory {
    id: number;
    name: string;
    slug: string;
    image?: string;
}

interface BlogPost {
    id: number;
    author_name: string;
    title: string;
    image: string | null;
    content: string;
    categories: BlogCategory[];
    created_at: string;
}

export default async function Page({ params }: { params: { slug: string } }) {
    const data = await Fetch({ endpoint: `blog/posts/${params.slug}` });
    const post: BlogPost = data;
    return (
        <div className="max-w-2xl mx-auto p-4">
            <Image
                src={post.image || '/static/viriditas.webp'}
                alt={post.title}
                height={1000}
                width={1000}
                className="w-full h-56 object-cover rounded-lg shadow-md"
            />
            <div className="p-4 rounded-lg mt-4">
                <h1 className="text-3xl font-bold mt-2">{post.title}</h1>
                <p className="text-sm mt-1 font-semibold">By {post.author_name}</p>
                <p className="text-sm">Published on {new Date(post.created_at).toLocaleDateString()}</p>
                <div className="flex overflow-x-auto gap-2 mt-2">
                    <span className="font-semibold flex-shrink-0">Category:</span>
                    <div className="flex gap-2">
                        {post.categories.map((category) => (
                            <Link
                                href={`/blog/category/${category.slug}`}
                                key={category.id} className="bg-base-200 text-sm font-medium px-2 py-1 rounded flex-shrink-0">
                                {category.name}
                            </Link>
                        ))}
                    </div>
                </div>
                <p className="mt-4 leading-relaxed">{post.content}</p>
            </div>
        </div>
    );
}