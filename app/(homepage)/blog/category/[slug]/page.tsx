import Image from "next/image"
import { Fetch } from "@/app/lib"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { BlogPostCard } from "@/app/components/main"

// ...existing interfaces...
interface BlogCategory {
  id: number;
  name: string;
  slug: string;
  image?: string;
  short_description: string;
}

interface BlogPost {
  id: number;
  author_name: string;
  title: string;
  slug: string;
  image: string | null;
  content: string;
  categories: BlogCategory[];
  created_at: string;
}

export default async function Page(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    const category: BlogCategory = await Fetch({ endpoint: `blog/categories/${params.slug}` })
    const posts: BlogPost[] = await Fetch({ endpoint: `blog/categories/${params.slug}/posts` })

    return (
        <div className="mx-auto">
            {/* Hero Section */}
            <div className="relative h-[50vh] overflow-hidden">
                <Image
                    src={category.image || '/static/viriditas.webp'}
                    height={1080}
                    width={1920}
                    alt={category.name}
                    className="object-cover h-full w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent">
                    <div className="container mx-auto h-full flex items-center">
                        <div className="max-w-2xl space-y-4 p-8 text-white">
                            <h1 className="text-3xl lg:text-5xl font-bold">{category.name}</h1>
                            <p className="text-lg text-white/90 leading-relaxed">
                                {category.short_description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Posts Grid */}
            <div className="container mx-auto py-12">
                {posts.length === 0 ? (
                    <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
                        <p className="text-xl text-base-content/70">No posts found in this category.</p>
                        <Link href="/blog" className="btn btn-primary">
                            Browse All Posts
                        </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
                        {posts.map((post) => (
                            <BlogPostCard key={post.id} post={post} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}