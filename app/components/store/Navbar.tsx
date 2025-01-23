import { User, ShoppingCart, Menu } from "lucide-react";
import { ThemeChange } from "../common";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar bg-base-200 shadow-sm sticky top-0 z-50">
      <div className="flex-1 lg:hidden">
        <Link href="/" className="flex flex-col">
          <div className="text-xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Plantopia
            </span>
          </div>
          <span className="text-xs font-light tracking-wide opacity-75 transition-opacity hover:opacity-100">
            products by Viriditas
          </span>
        </Link>
      </div>
      <div className="flex-1 hidden lg:flex">
        <label className="input input-bordered flex items-center gap-2">
          <input type="text" className="grow" placeholder="Search" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
      </div>

      {/* Desktop Navigation */}
      <div className="flex-none">
        <ThemeChange className="hidden lg:flex" />
        {/* Cart Dropdown */}
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-circle btn-ghost">
            <div className="indicator">
              <ShoppingCart className="h-5 w-5" />
              <span className="badge indicator-item badge-sm">8</span>
            </div>
          </div>
          <div
            tabIndex={0}
            className="card dropdown-content card-compact z-[1] mt-3 w-52 bg-base-100 shadow"
          >
            <div className="card-body">
              <span className="text-lg font-bold">8 Items</span>
              <span className="text-info">Subtotal: $999</span>
              <div className="card-actions">
                <Link href="/cart" className="btn btn-primary btn-block">
                  View cart
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Dropdown */}
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-circle btn-ghost">
            <User className="h-5 w-5" />
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
          >
            <li>
              <Link href="/profile">Profile</Link>
            </li>
            <li>
              <Link href="/settings">Settings</Link>
            </li>
            <li>
              <Link href="/logout">Logout</Link>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        
        <label
          htmlFor="my-drawer"
          className="btn btn-square btn-ghost lg:hidden"
        >
          <Menu className="h-6 w-6" />
        </label>

      </div>
    </div>
  );
}
