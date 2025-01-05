import { Fetch } from "@/app/lib";
import Image from "next/image";
import { ProductImageViewer } from "@/app/components/main";
import Link from "next/link";
import { ArrowLeft, Share2, Tag } from "lucide-react";
import { ShareButton } from "@/app/components/common";

//Inerfaces
interface Category {
  id: number;
  title: string;
  slug: string;
  type: string;
}

interface Image {
  id: number;
  image: string;
  short_description: string;
}

interface Tags {
  id: number;
  tag: string;
}

interface Service {
  id: number;
  title: string;
  description: string;
  images: Image[];
  categories: Category[];
  tags: Tags[];
}

export default async function Service({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = await Fetch({ endpoint: `main/services/${slug}` });
  const service: Service = data;

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="mb-8 flex items-center space-x-2 text-sm">
        <Link href="/services" className="hover:text-primary">
          <ArrowLeft className="mr-2 inline-block h-4 w-4" />
          Back to Services
        </Link>
      </nav>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Image Gallery */}
        <div className="block rounded-xl">
          {service.images.length > 0 ? (
              <ProductImageViewer
                images={service.images}
                className="h-96"
              />
          ) : (
            <div className="relative h-full w-full overflow-hidden rounded-lg">
              <Image
                src="/static/viriditas.webp"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                alt="No Image Available"
                className="object-cover"
                priority
              />
            </div>
          )}
        </div>

        {/* Content */}
        <div className="space-y-6">
          <div>
            <h1 className="mb-4 text-4xl font-bold tracking-tight">
              {service.title}
            </h1>

            {/* Categories */}
            <div className="flex flex-wrap items-center gap-2">
              {service.categories.map((category) => (
                <Link
                  href={`/services/${category.type.toLowerCase()}/${category.slug}`}
                  key={category.id}
                  className="rounded-full bg-base-300 px-4 py-2 text-sm transition-colors hover:bg-primary hover:text-white"
                >
                  {category.type} {category.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="prose max-w-none rounded-xl bg-base-200 p-6">
            <div
              className="prose-img:mx-auto prose-img:rounded-lg"
              dangerouslySetInnerHTML={{ __html: service.description }}
            />
          </div>

          {/* Tags */}
          {service.tags.length > 0 && (
            <div className="space-y-2">
              <h3 className="flex items-center text-lg font-semibold">
                <Tag className="mr-2 h-5 w-5" /> Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag.id}
                    className="rounded-full bg-base-300 px-3 py-1 text-sm"
                  >
                    {tag.tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Share Button */}
          <ShareButton
            title={service.title}
            url={`${process.env.NEXT_PUBLIC_BASE_URL}/services/${slug}`}
          />
        </div>
      </div>
    </div>
  );
}
