import { Fetch } from "@/app/lib";
import type { Metadata, ResolvingMetadata } from "next";
import { ProductImageViewer } from "@/components/main";

interface PlantFeature {
  id: number;
  name: string;
}

interface PlantPromotion {
  id: number;
  description: string;
  discount: number | null;
}

interface PlantImage {
  id: number;
  image: string;
  short_description: string;
}

interface PlantZone {
  id: number;
  zone: string;
  available: boolean;
  unit: string;
  unit_price: string;
}

interface PlantTag {
  id: number;
  tag: string;
}

interface Plant {
  id: number;
  name: string;
  sku: string;
  category: string;
  location_type: string;
  size: string;
  images: PlantImage[];
  description: string;
  care_instructions: string;
  promotion: number[];
  features: PlantFeature[];
  zones: PlantZone[];
  tags: PlantTag[];
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(props: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const params = await props.params;
  // read route params
  const slug = params.slug;

  // fetch data
  const product = await Fetch({ endpoint: `main/plants/${slug}` });

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: product.name,
    openGraph: {
      images: ["/static/viriditas.webp", ...previousImages],
    },
  };
}

export default async function Plants(props: Props) {
  const params = await props.params;
  const data = await Fetch({ endpoint: `main/plants/${params.slug}` });
  const plant: Plant = data;

  return (
    <div className="mx-auto flex flex-wrap gap-4 p-2 lg:gap-0">
      <div className="w-full lg:w-1/2">
        <ProductImageViewer images={plant.images} />
      </div>
      <div className="w-full space-y-2 lg:w-1/2 lg:ps-2">
        <div className="rounded-md bg-base-200 px-3 py-2 shadow-md">
          <div className="flex flex-row gap-2 py-2">
            {plant.features.map((feature) => (
              <p
                key={feature.id}
                className="inline-block rounded-sm bg-green-100 p-1 text-sm text-green-700"
              >
                {feature.name}
              </p>
            ))}
            <p className="inline-block rounded-sm bg-amber-200 p-1 text-sm text-green-700">
              {plant.location_type}
            </p>
            <p className="inline-block rounded-sm bg-lime-200 p-1 text-sm text-lime-700">
              {plant.size}
            </p>
          </div>
          <h1 className="text-2xl font-bold">{plant.name}</h1>
          <p className="text-xl">
            <span className="text-accent">Category:</span> {plant.category}
          </p>
          <p className="text-sm">
            <span className="text-accent">SKU:</span> {plant.sku}
          </p>
          {plant.promotion.length > 0 && (
            <div className="flex flex-row items-center gap-2 py-2">
              <span className="text-accent">Promotion:</span>
              {plant.promotion.map((promotion) => (
                <p
                  key={promotion}
                  className="badge bg-red-100 text-sm text-red-700"
                >
                  {promotion}
                </p>
              ))}
            </div>
          )}
          {plant.tags.length > 0 && (
            <div className="flex flex-row items-center gap-2 py-2">
              <span className="text-accent">Tags:</span>
              {plant.tags.map((tag) => (
                <p
                  key={tag.id}
                  className="badge bg-blue-100 text-sm text-blue-700"
                >
                  {tag.tag}
                </p>
              ))}
            </div>
          )}
        </div>
        <div className="join join-vertical w-full">
          <div className="collapse join-item collapse-arrow border border-base-300 bg-base-200">
            <input type="radio" name="my-accordion-4" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              Description
            </div>
            <div className="collapse-content overflow-x-hidden bg-base-100">
              <div
                className="prose max-h-[57vh]"
                dangerouslySetInnerHTML={{ __html: plant.description }}
              />
            </div>
          </div>
          <div className="collapse join-item collapse-arrow border border-base-300 bg-base-200">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              Care Instructions
            </div>
            <div className="collapse-content overflow-x-hidden bg-base-100">
              <div
                className="prose max-h-[57vh]"
                dangerouslySetInnerHTML={{ __html: plant.care_instructions }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
