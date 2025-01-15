"use client";

import React, { JSX } from "react";
import {
  Home,
  ChevronRight,
  Search,
  HandPlatter,
  HelpCircle,
  Leaf,
  MessageSquareHeart,
  MessageSquareText,
  Rss,
  Sprout,
  CircleX,
  UsersRound,
  Youtube,
  Facebook,
  Instagram,
  Twitter,
  ChevronDownIcon,
  Menu,
  Linkedin,
  Link2,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import ThemeChange from "./ThemeChange";
import { AnnouncementBanner } from "../home";

interface LinkItem {
  id: number;
  name: string;
  link?: string;
  icon?: JSX.Element;
  defaultOpen?: boolean;
  isDeviderAtEnd?: boolean;
  hideOnlargeScreen?: boolean;
  sublinks?: { name: string; link: string }[];
}

interface SocialLink {
  name: string;
  link: string;
  icon: JSX.Element;
}

// Navigation links
const navLinks: LinkItem[] = [
  {
    id: 2,
    name: "Services",
    icon: <HandPlatter size={20} className="inline-block" />,
    defaultOpen: true,
    sublinks: [
      { name: "All Services", link: "/services" },
      { name: "Commercial", link: "/services/commercial" },
      { name: "Residential", link: "/services/residential" },
    ],
  },
  {
    id: 3,
    name: "Blog",
    icon: <Leaf size={20} className="inline-block" />,
    defaultOpen: false,
    sublinks: [
      { name: "All Posts", link: "/blog" },
      { name: "Categories", link: "/blog/category" },
    ],
    isDeviderAtEnd: true,
  },
  {
    id: 4,
    name: "About",
    link: "/about",
    icon: <UsersRound size={20} className="inline-block" />,
  },
  {
    id: 5,
    name: "Contact Us",
    link: "/contact",
    icon: <MessageSquareHeart size={20} className="inline-block" />,
  },
  {
    id: 6,
    name: "Links",
    link: "/links",
    hideOnlargeScreen: false,
    icon: <Link2 size={20} className="inline-block" />,
  },
];

// Social links
const socialLinks: SocialLink[] = [
    {
    name: "LinkedIn",
    link: "https://linkedin.com/company/theviriditas",
    icon: <Linkedin />,
  },
  {
    name: "Facebook",
    link: "https://facebook.com/theviriditas",
    icon: <Facebook />,
  },
  {
    name: "Instagram",
    link: "https://instagram.com/viriditas",
    icon: <Instagram />,
  },
];

export default function Navbar() {
  // Hooks
  const router = usePathname();
  // State
  const [open, setOpen] = useState(false);

  // Effect
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  // Functions
  const closeDrawer = () => setOpen(false);

  return (
    <nav
      className={`${router === "/" ? "fixed left-0 top-0 bg-base-300" : "bg-base-300"} fixed left-0 top-0 z-50 w-full py-1`}
    >
      <AnnouncementBanner />
      <div className="mx-auto flex items-center justify-between">
        <Link href="/" className="px-4 text-2xl font-bold tracking-wide">
          Viriditas
        </Link>

        <div className="z-50 hidden space-x-10 md:flex">
          <div className="hidden space-x-10 md:flex">
            {navLinks
              .filter((link) => !link.hideOnlargeScreen)
              .map((link) => (
                <div key={link.id} className="group relative">
                  {link.link ? (
                    <Link
                      href={link.link}
                      className="flex items-center space-x-4"
                    >
                      <span className="link-underline link-underline-black font-medium">
                        {link.name}
                      </span>
                    </Link>
                  ) : (
                    <div className="flex items-center space-x-4">
                      <span className="font-medium">{link.name}</span>
                    </div>
                  )}
                  {link.sublinks && (
                    <div className="absolute left-0 top-full hidden rounded-sm bg-base-300 px-6 group-hover:block">
                      {link.sublinks.map((sublink, index) => (
                        <Link
                          key={index}
                          href={sublink.link}
                          className="sublink-hover block text-nowrap p-2 hover:text-accent"
                        >
                          {sublink.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
          </div>
        </div>

        <div className="hidden items-center space-x-10 md:flex">
          {socialLinks.map((link, index) => (
            <Link
              key={index}
              href={link.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent"
            >
              {link.icon}
            </Link>
          ))}
        </div>

        <div className="flex items-center">
          <div className="flex items-center">
            {/* theme change */}
            <ThemeChange />

            {/* search  */}
            <Link
              href="/search"
              className="btn btn-circle btn-ghost hover:text-accent"
            >
              <Search />
            </Link>
          </div>

          <div className={`z-50 md:hidden ${open ? "z-50 text-white" : ""}`}>
            <button
              className={`btn btn-square btn-ghost me-1 ${open ? "open" : ""}`}
              onClick={() => setOpen(!open)}
            >
              {open ? <CircleX /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50"
          onClick={closeDrawer}
        ></div>
      )}

      <div
        className={`fixed left-0 top-0 h-full transform transition-transform duration-500 ease-in-out ${
          open ? "translate-x-0" : "-translate-x-full"
        } z-40 md:hidden`}
        style={{ width: "270px" }}
      >
        {/* side bar */}
        <div className="flex h-full flex-col justify-between bg-base-200">
          <div>
            <Link
              href="/"
              className="flex justify-around border-b border-base-200 bg-base-300 p-3 text-center text-2xl font-bold tracking-wide"
            >
              Viriditas
            </Link>

            {/* Side bar content */}
            <div className="join join-vertical w-full">
              {navLinks.map((link, index) =>
                link.sublinks ? (
                  // If the link has sublinks, use the collapse component
                  <div
                    key={link.id}
                    className="collapse join-item collapse-arrow"
                  >
                    <input
                      type="radio"
                      name="my-accordion-4"
                      defaultChecked={index === 0}
                    />
                    <div className="collapse-title flex items-center justify-between text-xl font-medium">
                      {link.link ? (
                        // Main link with sublinks
                        <Link
                          href={link.link}
                          className="flex items-center text-nowrap font-semibold"
                          onClick={closeDrawer}
                        >
                          {link.icon && (
                            <span className="mr-2 flex items-center">
                              {link.icon}
                            </span>
                          )}
                          {link.name}
                        </Link>
                      ) : (
                        // Main link without URL
                        <span className="flex items-center text-nowrap font-semibold">
                          {link.icon && (
                            <span className="mr-2 flex items-center">
                              {link.icon}
                            </span>
                          )}
                          {link.name}
                        </span>
                      )}
                    </div>
                    <div className="collapse-content">
                      {link.sublinks.map((sublink, subIndex) => (
                        // Sublinks
                        <Link
                          key={subIndex}
                          href={sublink.link}
                          className="block text-nowrap p-2 font-medium hover:bg-base-300"
                          onClick={closeDrawer}
                        >
                          {sublink.name}
                        </Link>
                      ))}
                    </div>
                    {link.isDeviderAtEnd && (
                      <div className="divider divider-primary px-4"></div>
                    )}
                  </div>
                ) : (
                  // If the link has no sublinks, render a simple link
                  <div
                    key={link.id}
                    className="join-item p-3 hover:bg-base-300"
                  >
                    {link.link ? (
                      // Main link without sublinks
                      <Link
                        href={link.link}
                        className="flex items-center text-nowrap font-semibold"
                        onClick={closeDrawer}
                      >
                        {link.icon && (
                          <span className="mr-2 flex items-center">
                            {link.icon}
                          </span>
                        )}
                        {link.name}
                      </Link>
                    ) : (
                      // Main link without URL
                      <span className="flex items-center text-nowrap font-semibold">
                        {link.icon && (
                          <span className="mr-2 flex items-center">
                            {link.icon}
                          </span>
                        )}
                        {link.name}
                      </span>
                    )}
                    {link.isDeviderAtEnd && (
                      <div className="divider divider-primary px-4"></div>
                    )}
                  </div>
                ),
              )}
            </div>
          </div>

          <div className="flex justify-around border-t border-base-200 bg-base-300 p-3">
            {socialLinks.map((link, index) => (
              <Link
                key={index}
                href={link.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                {link.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
