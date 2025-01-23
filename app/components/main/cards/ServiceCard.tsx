import Image from "next/image";
import Link from "next/link";
import { Star, Tag } from "lucide-react";

interface Category {
  id: number;
  type: string;
  title: string;
}

interface Service {
  id: number;
  title: string;
  slug: string;
  image: string;
  categories: Category[];
}

export default function ServiceCard({
  service,
  isLoading,
}: {
  service: Service;
  isLoading?: boolean;
}) {
  if (isLoading) {
    return (
      <div className="animate-pulse overflow-hidden rounded-lg bg-base-200">
        <div className="h-56 bg-base-300" />
        <div className="space-y-3 p-4">
          <div className="h-2 w-1/4 rounded bg-base-300" />
          <div className="h-4 w-3/4 rounded bg-base-300" />
        </div>
      </div>
    );
  }

  return (
    <div
      key={service.id}
      className="group overflow-hidden rounded-lg bg-base-200 shadow-md transition-all duration-300 hover:shadow-xl"
    >
      <Link
        href={`/services/${service.slug}`}
        className="block focus:outline-none focus:ring-2 focus:ring-primary"
      >
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={service.image || "/static/viriditas.webp"}
            alt={service.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="transform object-cover transition-transform duration-500 group-hover:scale-110"
            priority={false}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity group-hover:opacity-100" />
        </div>

        <div className="space-y-2 p-4">
          {service.categories && service.categories.length > 0 && (
            <div className="flex items-center gap-2">
              <Tag size={14} className="text-primary" />
              <span className="text-sm text-base-content/70">
                {`${service.categories[0].type} ${service.categories[0].title}`}
              </span>
            </div>
          )}

          <h2 className="line-clamp-2 text-lg font-medium leading-snug text-base-content">
            {service.title}
          </h2>

          <div className="flex items-center gap-2 pt-2">
            <div className="flex items-center">
              <Star size={16} className="fill-current text-warning" />
              <span className="ml-1 text-sm">4.5</span>
            </div>
            <span className="text-xs text-base-content/60">(123 reviews)</span>
          </div>
          
        </div>
      </Link>
    </div>
  );
}
