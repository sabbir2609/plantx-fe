import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { JSX, useState } from "react";

interface SidebarItem {
  title: string;
  href: string;
  icon?: JSX.Element;
  children?: SidebarItem[];
}
const sidebarItems: SidebarItem[] = [
  {
    title: "Home",
    href: "/plantopia",
    // icon: <House />,
  },
  {
    title: "Products",
    href: "#",
    // icon: <Grape />,
    children: [
        {
            title: "All Products",
            href: "/products",
        },
        {
            title: "Seeds",
            href: "/products/seeds",
        },
      {
        title: "Plants",
        href: "/products/plants",
      },
      {
        title: "Pots",
        href: "/products/pots",
      },
    ],
  },
  {
    title: "Special Products",
    href: "#",
    // icon: <Grape />,
    children: [
        {
            title: "All Special Products",
            href: "/products",
        },
        {
            title: "Terrariums",
            href: "/products/terrariums",
        },
      {
        title: "Aquariums",
        href: "/products/aquariums",
      },
      {
        title: "Sacculents Frames",
        href: "/products/sacculents-frames",
      },
    ],
  },
  {
    title: "Viriditas",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
];
export default function SidebarContent() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [openItems, setOpenItems] = useState<string[]>([]);
  const closeSidebar = () => {
    setSidebarOpen(false);
  };
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const toggleMenuItem = (title: string) => {
    setOpenItems((prev) =>
      prev.includes(title)
        ? prev.filter((item) => item !== title)
        : [...prev, title],
    );
  };
  return (
    <div className="flex-1 overflow-y-auto p-4">
      {sidebarItems.map((item) =>
        item.children ? (
          <div key={item.title}>
            <button
              onClick={() => toggleMenuItem(item.title)}
              className="flex w-full items-center justify-between rounded-lg p-3 transition-all duration-200 hover:bg-base-content/10"
            >
              <div className="flex items-center gap-3">
                {item.icon}
                <span className="font-semibold">{item.title}</span>
              </div>
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${
                  openItems.includes(item.title) ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-200 ${
                openItems.includes(item.title)
                  ? "max-h-40 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              {item.children.map((child) => (
                <Link
                  key={child.title}
                  href={child.href}
                  onClick={closeSidebar}
                  className="block rounded-md p-2 pl-10 transition-colors hover:bg-base-content/10"
                >
                  {child.title}
                </Link>
              ))}
            </div>
          </div>
        ) : (
          <Link
            key={item.title}
            href={item.href}
            onClick={closeSidebar}
            className="flex items-center gap-3 rounded-lg p-3 transition-all duration-200 hover:bg-base-content/10"
          >
            {item.icon}
            <span className="font-semibold">{item.title}</span>
          </Link>
        ),
      )}
    </div>
  );
}
