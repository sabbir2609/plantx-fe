import { Fetch } from "@/app/lib";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Breadcrumb } from "@/app/components/common";
import { Leaf } from "lucide-react";

export const metadata: Metadata = {
  title: "Commercial Services",
  description: "Commercial services offered by Viriditas",
};

interface Category {
  id: number;
  title: string;
  description: string;
  slug: string;
  type: string;
  image: string;
}

async function getCommercialCategories() {
  const data = await Fetch({ endpoint: "main/service_categories/commercial/" });
  return data;
}

export default async function Page() {
  const residentialCategories: Category[] = await getCommercialCategories();

  return (
    <div className="min-h-screen mx-auto">
      <div className="mx-auto max-w-screen-xl p-4 py-8">
        <Breadcrumb />

        {/* Hero Section */}
        <div className="mb-12 mt-8">
          <h1 className="mb-4 text-3xl font-bold tracking-tight">
            Commercial Services
          </h1>
          <p className="max-w-2xl text-base-content/70">
            Transform your living space with our professional plant services. We offer a wide range of services to help you create a beautiful and healthy environment for your office or commercial space.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {residentialCategories.map((category) => (
            <Link
              key={category.id}
              href={`/services/residential/${category.slug}`}
              className="group relative block overflow-hidden rounded-xl bg-base-100/50 ring-1 ring-base-content/5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:ring-primary/10"
            >
              <figure className="relative aspect-[4/3]">
                <Image
                  src={category.image || "/static/viriditas.webp"}
                  alt={category.title}
                  height={1080}
                  width={1920}
                  priority
                  className="object-cover h-full w-full transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
              </figure>

              <div className="absolute bottom-0 w-full space-y-1 p-4 pb-5">
                <h2 className="flex items-center gap-2 text-lg font-semibold text-white">
                  {category.title}
                  <Leaf className="h-4 w-4 opacity-75 transition-transform duration-300 group-hover:rotate-45 group-hover:text-primary" />
                </h2>
                <p className="line-clamp-2 text-sm text-white/80">
                  {category.description ||
                    `Explore our ${category.title.toLowerCase()} services`}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {residentialCategories.length === 0 && (
          <div className="flex min-h-[400px] flex-col items-center justify-center rounded-lg bg-base-100 p-8">
            <Leaf className="h-16 w-16 text-primary/20" />
            <h3 className="mt-4 text-xl font-semibold">
              No Services Available
            </h3>
            <p className="text-base-content/60">
              Please check back later for our residential services
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
