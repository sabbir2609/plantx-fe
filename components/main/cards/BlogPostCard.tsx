import Image from "next/image";
import Link from "next/link";

interface BlogPostProps {
    id: number;
    author_name: string;
    title: string;
    slug: string;
    image: string | null;
    content: string;
    categories?: {
        id: number;
        name: string;
        slug: string;
        image?: string;
    }[];
    created_at: string;
}


export default function BlogPostCard(
    { post }: { post: BlogPostProps }
) {
    return (
        <div className="bg-base-200 shadow-lg rounded-lg overflow-hidden">
            <Link href={`/blog/${post.slug}`}>
                <div className="relative">
                    <Image
                        src={post.image || '/static/viriditas.webp'}
                        alt={post.title}
                        height={227}
                        width={384}
                        className='h-56 object-cover'
                    />
                </div>
                <div className="p-3">
                    <h2 className="text-lg font-normal tracking-tight">{post.title}</h2>
                    <p className="text-sm">
                        {post.author_name}
                    </p>
                    <p className="text-sm">
                        {new Date(post.created_at).toLocaleDateString()}
                    </p>
                </div>
            </Link>
        </div>
    );
}