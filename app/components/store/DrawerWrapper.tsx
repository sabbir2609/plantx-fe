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
import SidebarContent from "./SIdebarContent";

interface NavbarProps {
  children: ReactNode;
}



export default function DrawerWrapper({ children }: NavbarProps) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
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
            <SidebarContent />
            

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
