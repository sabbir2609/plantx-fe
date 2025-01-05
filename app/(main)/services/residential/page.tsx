import { Fetch } from "@/app/lib";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Residential Services",
  description: "Residential services offered by Viriditas",
};

interface Category {
  id: number;
  title: string;
  slug: string;
  type: string;
  description: string;
  image: string;
}

async function getResidentialCategories() {
  const data = await Fetch({
    endpoint: "main/service_categories/residential/",
  });
  return data;
}

export default async function Page() {
  const residentialCategories: Category[] = await getResidentialCategories();

  return (
    <div className="mx-auto min-h-full max-w-screen-xl bg-base-100 p-4">
      <h2 className="mb-4 text-2xl font-semibold">
        Residential Service Categories
      </h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
        {residentialCategories.map((category) => (
          <Link
            key={category.id}
            href={`/services/residential/${category.slug}`}
            className="group relative block h-48 overflow-hidden rounded-lg bg-base-200 shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"
          >
            <Image
              src={category.image || "/static/viriditas.webp"}
              alt={category.title}
              height={200}
              width={200}
              className="h-full w-full object-cover transition-opacity duration-300 ease-in-out group-hover:opacity-75"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
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
