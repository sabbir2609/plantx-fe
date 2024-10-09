import Image from "next/image"
import { Fetch } from "@/app/lib"
import Link from "next/link"
import { BlogPostCard } from "@/components/main"

interface BlogCategory {
    id: number
    name: string
    slug: string
    image?: string
    short_description: string
}

interface BlogPost {
    id: number
    author_name: string
    title: string
    slug: string
    image: string | null
    content: string
    categories: BlogCategory[]
    created_at: string
}


export default async function Page({ params }: { params: { slug: string } }) {
    const category: BlogCategory = await Fetch({ endpoint: `blog/categories/${params.slug}` })
    const posts: BlogPost[] = await Fetch({ endpoint: `blog/categories/${params.slug}/posts` })

    return (
        <div className="mx-auto">
            <div className="bg-base-200 h-auto lg:h-80 shadow-lg overflow-hidden mb-4 relative">
                <Image
                    src={category.image || '/static/viriditas.webp'}
                    height={1000}
                    width={1000}
                    alt={category.name}
                    className="object-cover h-full w-full min-h-60"
                />
                <div className="p-4 absolute bottom-0 left-0 h-full md:w-1/2 content-center bg-opacity-50 bg-black text-white">
                    <h1 className="text-2xl lg:text-3xl font-semibold">{category.name}</h1>
                    <p className="mt-2 tracking-tight lg:tracking-normal leading-6">{category.short_description}</p>
                </div>
            </div>
            {posts.length == 0 && <div className="text-center p-4">No posts found.</div>}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-5 p-6 lg:p-8">
                {posts.map((post) => (
                    <BlogPostCard key={post.id} post={post} />
                ))}
            </div>
        </div>
    )
}