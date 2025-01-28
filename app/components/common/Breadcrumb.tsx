"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface Breadcrumb {
  label: string;
  href: string;
  isCurrent: boolean;
}

export default function Breadcrumb() {
  const pathname = usePathname();

  const generateBreadcrumbs = (): Breadcrumb[] => {
    const asPathWithoutQuery = pathname.split("?")[0];
    const asPathNestedRoutes = asPathWithoutQuery
      .split("/")
      .filter((v) => v.length > 0);

    const crumbList = asPathNestedRoutes.map((subpath, idx) => {
      const href = "/" + asPathNestedRoutes.slice(0, idx + 1).join("/");
      return {
        href,
        label:
          subpath.charAt(0).toUpperCase() + subpath.slice(1).replace(/-/g, " "),
        isCurrent: idx === asPathNestedRoutes.length - 1,
      };
    });

    return [
      { href: "/", label: "Home", isCurrent: pathname === "/" },
      ...crumbList,
    ];
  };

  const breadcrumbs = generateBreadcrumbs();

  if (breadcrumbs.length === 1) return null;

  return (
    <nav aria-label="breadcrumb" className="w-full">
      <ol className="flex items-center gap-2 text-sm">
        {breadcrumbs.map((breadcrumb, index) => (
          <li
            key={breadcrumb.href}
            className={`flex items-center ${
              breadcrumb.isCurrent ? "text-primary" : "text-base-content/60"
            }`}
          >
            {index === 0 ? (
              <Link
                href={breadcrumb.href}
                className="flex items-center hover:text-primary"
              >
                <Home className="h-4 w-4" />
              </Link>
            ) : (
              <>
                <ChevronRight className="h-4 w-4" />
                <Link
                  href={breadcrumb.href}
                  className={`ml-2 truncate hover:text-primary ${
                    breadcrumb.isCurrent ? "font-medium" : ""
                  }`}
                >
                  {breadcrumb.label}
                </Link>
              </>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
