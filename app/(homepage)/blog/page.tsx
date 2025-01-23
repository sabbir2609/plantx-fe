import { Fetch } from "@/app/lib";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Rss } from "lucide-react";

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
  isFeatured: boolean;
  categories: BlogCategory[];
}

export default async function Page() {
  const data = await Fetch({ endpoint: "blog/posts/" });
  const posts: BlogPost[] = data;

  const featuredPosts = posts.filter((post) => post.isFeatured);
  const regularPosts = posts.filter((post) => !post.isFeatured);

  return (
    <div className="container mx-auto px-4 py-12">
      <header className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold">Our Blog</h1>
        <p className="mx-auto max-w-2xl text-base-content/70">
          Discover insights about interior plantscaping and sustainable design
        </p>
      </header>

      {/* Featured Posts Grid */}
      <h2 className="mb-8 text-2xl font-bold">Featured Posts</h2>
      {featuredPosts.length > 0 ? (
        <div className="mb-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group relative flex flex-col overflow-hidden rounded-xl bg-base-200/50 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={post.image || "/static/viriditas.webp"}
                  alt={post.title}
                  fill
                  priority
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col gap-4 p-6">
                <div className="flex flex-wrap gap-2">
                  {post.categories.map((category) => (
                    <span
                      key={category.id}
                      className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary"
                    >
                      {category.name}
                    </span>
                  ))}
                </div>
                <h2 className="text-xl font-semibold group-hover:text-primary">
                  {post.title}
                </h2>
                <p
                  className="prose line-clamp-2 text-base-content/70"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="mb-10 flex flex-col items-center justify-center rounded-lg bg-base-300/60 p-4">
          <div className="mb-4 rounded-full bg-accent/10 p-4">
            <Rss className="h-8 w-8 text-red-500/50" />
          </div>
          <h3 className="mb-2 text-xl font-semibold">No Featured Posts Yet</h3>
          <p className="mb-4 text-center text-base-content/70">
            Check back soon for featured content or browse our recent posts
            below
          </p>
        </div>
      )}
      {/* Regular Posts Grid */}
      <h2 className="mb-8 text-2xl font-bold">Recent Posts</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {regularPosts.map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.slug}`}
            className="group relative flex flex-col overflow-hidden rounded-xl bg-base-200/50 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="relative aspect-[16/9] overflow-hidden">
              <Image
                src={post.image || "/static/viriditas.webp"}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col gap-4 p-6">
              <div className="flex flex-wrap gap-2">
                {post.categories.map((category) => (
                  <span
                    key={category.id}
                    className="rounded-full bg-primary/40 px-3 py-1 text-xs"
                  >
                    {category.name}
                  </span>
                ))}
              </div>
              <h2 className="text-xl font-semibold group-hover:text-primary">
                {post.title}
              </h2>
              <p
                className="prose line-clamp-2 text-base-content/70"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
