import { Fetch } from "@/app/lib";
import Image from "next/image";
import Link from "next/link";
import { Calendar, User, ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import { ShareButton } from "@/app/components/common";

// interfaces
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

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await Fetch({ endpoint: `blog/posts/${params.slug}` });
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.image || "/static/viriditas.webp" }],
    },
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const data = await Fetch({ endpoint: `blog/posts/${params.slug}` });
  const post: BlogPost = data;

  return (
    <article className="mx-auto max-w-4xl">
      {/* Hero Section */}
      <div className="relative h-[40vh] w-full overflow-hidden rounded-b-md">
        <Image
          src={post.image || "/static/viriditas.webp"}
          alt={post.title}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-base-100/60 to-transparent" />
      </div>

      <div className="mx-auto max-w-2xl px-4 py-8">
        {/* Categories */}
        <div className="flex flex-wrap gap-2">
          {post.categories.map((category) => (
            <Link
              key={category.id}
              href={`/blog/category/${category.slug}`}
              className="rounded-full bg-accent/10 px-4 py-1 text-sm font-medium text-accent hover:bg-accent/20"
            >
              {category.name}
            </Link>
          ))}
        </div>

        {/* Title & Meta */}
        <h1 className="mt-6 text-2xl font-bold tracking-tight lg:text-3xl">
          {post.title}
        </h1>

        <div className="mt-6 flex items-center gap-6 text-base-content/70">
          <div className="flex items-center gap-2">
            <User size={18} />
            <span>{post.author_name}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar size={18} />
            <time>{new Date(post.created_at).toLocaleDateString()}</time>
          </div>
        </div>

        {/* Content */}
        <div
          className="prose prose-lg mt-10 max-w-none dark:prose-invert prose-headings:font-bold prose-a:text-primary prose-img:rounded-lg prose-img:shadow-lg"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Share Buttons */}
        <div className="mt-10 flex items-center gap-4 border-t pt-6 justify-between">
          <span className="font-semibold">Share this article</span>
          <ShareButton title={post.title} url={`${params.slug}`} />
        </div>
        
      </div>
    </article>
  );
}
