"use client";

import { ReactNode, useState, useRef, useEffect, JSX } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  ChevronDown,
  User,
  ShoppingCart,
  House,
  Grape,
} from "lucide-react";
import { ThemeChange } from "../common";
import Navbar from "./Navbar";
import { Footer } from ".";

interface NavbarProps {
  children: ReactNode;
}

interface SidebarItem {
  title: string;
  href: string;
  icon?: JSX.Element;
  children?: SidebarItem[];
}

const sidebarItems: SidebarItem[] = [
  {
    title: "Home",
    href: "/",
    // icon: <House />,
  },
  {
    title: "Products",
    href: "/products",
    // icon: <Grape />,
    children: [
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
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export default function DrawerWrapper({ children }: NavbarProps) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [openItems, setOpenItems] = useState<string[]>([]);
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setSidebarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const toggleMenuItem = (title: string) => {
    setOpenItems((prev) =>
      prev.includes(title)
        ? prev.filter((item) => item !== title)
        : [...prev, title],
    );
  };

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isSidebarOpen]);

  return (
    <>
      {/* Drawer Layout */}
      <div className="drawer lg:drawer-open">
        <input
          id="my-drawer"
          type="checkbox"
          className="drawer-toggle"
          checked={isSidebarOpen}
          onChange={toggleSidebar}
        />

        <div className="drawer-content">
          {/* Navbar */}
          <Navbar />
          <main className="p-4">{children}</main>
          <Footer />
        </div>

        <div className="drawer-side z-50" ref={sidebarRef}>
          <label htmlFor="my-drawer" className="drawer-overlay"></label>

          {/* Sidebar */}
          <div className="flex h-full w-64 flex-col bg-base-300">
            {/* Sidebar Header */}
            <div className="flex items-center border-b border-base-content/10 p-0.5">
              <Link href="/" className="flex flex-col p-2">
                <div className="text-xl font-extrabold tracking-tight">
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Plantopia
                  </span>
                </div>
                <span className="text-xs font-light tracking-wide opacity-75 transition-opacity hover:opacity-100">
                  products by Viriditas
                </span>
              </Link>

              <label
                htmlFor="my-drawer"
                className="btn btn-circle btn-ghost ml-auto lg:hidden"
              >
                <X />
              </label>
            </div>

            {/* Sidebar Content */}
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

            {/* Footer */}
            <footer className="border-t border-base-content/10 p-4">
              <div className="flex items-center justify-between">
                <span className="text-xs leading-3 tracking-tight opacity-75 lg:tracking-normal">
                  &copy; {new Date().getFullYear()} Plantopia | All rights
                  reserved.
                </span>
                <div className="flex items-center space-x-2">
                  <ThemeChange className="rounded-full" />
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
}
