import Link from "next/link";
import Image from "next/image";
import { Fetch } from "@/app/lib";

interface BlogCategory {
  id: number;
  name: string;
  short_description: string;
  slug: string;
  image: string;
}

export default async function Page() {
  const data = await Fetch({ endpoint: "blog/categories/" });
  const categories: BlogCategory[] = data;

  return (
    <div className="mx-auto p-4">
      <h1 className="p-10 text-center text-3xl font-semibold">
        Blog Categories
      </h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((category, index) => (
          <Link
            key={category.id}
            href={`/blog/category/${category.slug}`}
            className={`group relative flex flex-col items-center overflow-hidden rounded-lg shadow-md ${index === 0 ? "lg:col-span-1 lg:row-span-1" : index === 1 ? "lg:col-span-2 lg:row-span-1" : ""} ${index < 2 ? "h-[50vh]" : "h-[40vh]"}`}
          >
            <div className="relative h-full w-full">
              <Image
                src={category.image || "/static/viriditas.webp"}
                alt={category.name}
                layout="fill"
                objectFit="cover"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-black opacity-50 transition-opacity duration-300 group-hover:opacity-0"></div>
            <div
              className={`absolute ${index === 0 ? "left-4 top-4" : index === 1 ? "bottom-4 right-4" : "bottom-4 left-4"} z-10 p-4 text-white group-hover:text-black`}
            >
              <h3 className="text-lg font-semibold lg:text-3xl">
                {category.name}
              </h3>
              <p className="mt-2 tracking-tight">
                {category.short_description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
