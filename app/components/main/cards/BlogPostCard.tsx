import { Calendar, User } from "lucide-react";
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

export default function BlogPostCard({ post }: { post: BlogPostProps }) {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-base-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <Link href={`/blog/${post.slug}`}>
        <div className="relative aspect-[16/9] overflow-hidden">
          <Image
            src={post.image || "/static/viriditas.webp"}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-base-200/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>

        <div className="p-6">
          {/* Categories */}
          {post.categories && (
            <div className="mb-3 flex flex-wrap gap-2">
              {post.categories.map((category) => (
                <span
                  key={category.id}
                  className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent"
                >
                  {category.name}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <h2 className="mb-3 text-xl font-semibold tracking-tight transition-colors group-hover:text-accent">
            {post.title}
          </h2>

          {/* Meta Info */}
          <div className="flex items-center gap-4 text-sm text-base-content/70">
            <div className="flex items-center gap-1">
              <User size={14} />
              <span>{post.author_name}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar size={14} />
              <time>{new Date(post.created_at).toLocaleDateString()}</time>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
