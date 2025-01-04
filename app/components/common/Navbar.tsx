"use client";

import React from "react";
import { ChevronDownIcon, Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

interface LinkItem {
  id: number;
  name: string;
  link: string;
  defaultOpen?: boolean;
  sublinks?: { name: string; link: string }[];
}

// Navigation links
const links: LinkItem[] = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "About",
    link: "/about",
    defaultOpen: true,
    sublinks: [
      { name: "Our Story", link: "/about/story" },
      { name: "Team", link: "/about/team" },
    ],
  },
  {
    id: 3,
    name: "Services",
    link: "/services",
    sublinks: [
      { name: "Service 1", link: "/services/service-1" },
      { name: "Service 2", link: "/services/service-2" },
    ],
  },
  {
    id: 4,
    name: "Contact",
    link: "/contact",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(() => {
    const index = links.findIndex((link) => link.defaultOpen);
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
          {links.map((link) => (
            <div key={link.id} className="group relative">
              <Link href={link.link} className="flex items-center space-x-4">
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
            {links.map((link, index) => (
              <div key={link.id} className="mb-4">
                <div
                  className="flex cursor-pointer items-center justify-between"
                  onClick={() => toggleMenu(index)}
                >
                  <span className="font-semibold">{link.name}</span>
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
              </div>
            ))}
          </div>

          <div className="flex justify-around border-t border-base-200 bg-base-300 p-3">
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <Facebook />
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <Twitter />
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <Instagram />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
