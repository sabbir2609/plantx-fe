import { Fetch } from "@/app/lib";
import Image from "next/image";
import { ProductImageViewer } from "@/components/main";
import Link from "next/link";

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
  params: { slug: string };
}) {
  const data = await Fetch({ endpoint: `main/services/${params.slug}` });
  const service: Service = data;

  return (
    <div className="mx-auto p-2 max-w-2xl">
      <div className="mb-4 rounded-sm">
        {service.images.length > 0 ? (
          <ProductImageViewer images={service.images} />
        ) : (
          <Image
            src="/static/viriditas.webp"
            width={600}
            height={400}
            alt="No Image Available"
            className="rounded-md object-cover"
          />
        )}
      </div>
      <div className="p-2">
        <h1 className="mb-4 text-2xl font-bold leading-6 tracking-tight">
          {service.title}
        </h1>
        <div className="mb-4 flex items-center">
          <strong>Categories: </strong>
          <div className="ml-2 flex items-center gap-1 overflow-auto whitespace-nowrap text-nowrap rounded-l-full">
            {service.categories.map((category) => (
              <Link
                href={`/services/${category.type.toLowerCase()}/${category.slug}`}
                key={category.id}
                className="cursor-pointer rounded-lg bg-base-300 p-0.5"
              >
                {category.type} {category.title}
              </Link>
            ))}
          </div>
        </div>

        <div className="mb-4 w-full rounded-xl bg-base-200 p-6">
          <div
            className="prose prose-img:mx-auto prose-img:rounded-md"
            dangerouslySetInnerHTML={{ __html: service.description }}
          />
        </div>

        {service.tags.length > 0 && (
          <div className="flex items-center gap-1">
            <strong>Tags: </strong>
            <div className="ml-2 flex items-center gap-1 overflow-auto whitespace-nowrap text-nowrap">
              {service.tags.map((tag) => (
                <div
                  key={tag.id}
                  className="rounded-lg bg-base-300 p-0.5 text-sm"
                >
                  {tag.tag}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
