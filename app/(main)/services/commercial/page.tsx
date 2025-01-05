import { Fetch } from "@/app/lib";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Commercial Services",
  description: "Commercial services offered by Viriditas",
};

interface Category {
  id: number;
  title: string;
  slug: string;
  type: string;
  image: string;
}

async function getCommercialCategories() {
  const data = await Fetch({ endpoint: "main/service_categories/commercial/" });
  return data;
}

export default async function Page() {
  const commercialCategories: Category[] = await getCommercialCategories();

  return (
    <div className="mx-auto max-w-screen-xl p-4">
      <h2 className="mb-4 text-2xl font-semibold">
        Commercial Service Categories
      </h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {commercialCategories.map((category) => (
          <Link
            key={category.id}
            href={`/services/commercial/${category.slug}`}
            className="group relative block h-48 overflow-hidden rounded-lg bg-base-200 shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"
          >
            <Image
              src={category.image || "/static/viriditas.webp"}
              alt={category.title}
              height={200}
              width={200}
              className="h-full w-full object-cover transition-opacity duration-300 ease-in-out group-hover:opacity-75"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 transition-colors duration-300 group-hover:bg-opacity-50">
              <h2 className="m-2 text-center text-xl font-bold text-white">
                {category.title}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
