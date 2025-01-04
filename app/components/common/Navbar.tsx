"use client";

import React, { JSX } from "react";
import {
  Home,
  ChevronRight,
  Cylinder,
  HandPlatter,
  HelpCircle,
  Leaf,
  MessageSquareHeart,
  MessageSquareText,
  Rss,
  Sprout,
  UsersRound,
  Youtube,
  Facebook,
  Instagram,
  Twitter,
  ChevronDownIcon,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

interface LinkItem {
  id: number;
  name: string;
  link: string;
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
    link: "/services",
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
    link: "/blog",
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
    name: "Help",
    link: "/help",
    hideOnlargeScreen: true,
    icon: <HelpCircle size={20} className="inline-block" />,
  },
];

// Social links
const socialLinks: SocialLink[] = [
  {
    name: "Youtube",
    link: "https://www.youtube.com/@ViriditasInterior",
    icon: <Youtube />,
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
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(() => {
    const index = navLinks.findIndex((link) => link.defaultOpen);
    return index === -1 ? null : index;
  });

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  const closeDrawer = () => setOpen(false);

  function toggleMenu(index: number): void {
    setActiveIndex(activeIndex === index ? null : index);
  }

  return (
    <nav className="absolute left-0 top-0 z-40 w-full px-4 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-wide text-white">
          Viriditas
        </Link>

        <div className="hidden space-x-10 text-white md:flex">
          <div className="hidden space-x-10 text-white md:flex">
            {navLinks
              .filter((link) => !link.hideOnlargeScreen)
              .map((link) => (
                <div key={link.id} className="group relative">
                  <Link
                    href={link.link}
                    className="flex items-center space-x-4"
                  >
                    <span className="link-underline link-underline-black font-medium">
                      {link.name}
                    </span>
                  </Link>

                  {link.sublinks && (
                    <div className="absolute left-0 top-full hidden rounded-sm bg-base-300 px-6 group-hover:block">
                      {link.sublinks.map((sublink, index) => (
                        <Link
                          key={index}
                          href={sublink.link}
                          className="sublink-hover block text-nowrap p-2 hover:text-primary"
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

        <div className={`z-40 md:hidden ${open ? "z-40 text-white" : ""}`}>
          <button
            className={`menu-button focus:outline-none ${open ? "open" : ""}`}
            onClick={() => setOpen(!open)}
          >
            <div className="line line1 text-white"></div>
            <div className="line line2 text-white"></div>
            <div className="line line3 text-white"></div>
          </button>
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50"
          onClick={closeDrawer}
        ></div>
      )}

      <div
        className={`fixed left-0 top-0 h-full transform transition-transform duration-500 ease-in-out ${
          open ? "translate-x-0" : "-translate-x-full"
        } z-40 md:hidden`}
        style={{ width: "270px" }}
      >
        <div className="flex h-full flex-col bg-base-200">
          <div className="border-b border-base-200 bg-base-300 p-3 text-center text-2xl font-bold tracking-wide">
            Viriditas
          </div>

          {/* colapsibe manu  */}
          <div className="h-full overflow-y-auto p-6">
            {navLinks.map((link, index) => (
              <div key={link.id} className="mb-4">
                <div
                  className="flex cursor-pointer items-center justify-between"
                  onClick={() => toggleMenu(index)}
                >
                  <span className="flex items-center text-nowrap font-semibold">
                    {link.icon && (
                      <span className="mr-2 flex items-center">
                        {link.icon}
                      </span>
                    )}
                    {link.name}
                  </span>
                  {link.sublinks && (
                    <span
                      className={`transition-transform duration-500 ease-in-out ${
                        activeIndex === index ? "rotate-180" : ""
                      }`}
                    >
                      <ChevronDownIcon className="h-5 w-5" />
                    </span>
                  )}
                </div>

                {link.sublinks && (
                  <div
                    className={`ml-4 mt-2 overflow-hidden transition-all duration-500 ease-in-out ${
                      activeIndex === index
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    {link.sublinks.map((sublink, subIndex) => (
                      <Link
                        key={subIndex}
                        href={sublink.link}
                        className="block text-nowrap p-2 font-medium hover:text-primary"
                      >
                        {sublink.name}
                      </Link>
                    ))}
                  </div>
                )}

                {link.isDeviderAtEnd && (
                  <div className="divider divider-primary"></div>
                )}
              </div>
            ))}
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
