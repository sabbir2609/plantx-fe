"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Home } from "lucide-react";

export default function Breadcrumb() {
  const pathname = usePathname();

  const generateBreadcrumbs = () => {
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
    <div className="breadcrumbs text-sm">
      <ul>
        {breadcrumbs.map((breadcrumb) => (
          <li key={breadcrumb.href}>
            {breadcrumb.isCurrent ? (
              <span className="font-medium text-primary">
                {breadcrumb.href === "/" ? (
                  <Home className="h-4 w-4" />
                ) : (
                  breadcrumb.label
                )}
              </span>
            ) : (
              <Link href={breadcrumb.href} className="hover:text-primary">
                {breadcrumb.href === "/" ? (
                  <Home className="h-4 w-4" />
                ) : (
                  breadcrumb.label
                )}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
