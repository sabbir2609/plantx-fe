"use client";

import {
    ChevronRight, Cylinder, HandPlatter, HelpCircle, Leaf,
    MessageSquareHeart, MessageSquareText,
    Rss,
    Sprout, UsersRound
} from "lucide-react";
import Link from "next/link";
import { usePathname } from 'next/navigation';

// Define types for MenuItem and MenuGroup
interface MenuItem {
    title: string;
    link: string;
}

interface MenuDivider {
    divider: true;
}

type MenuEntry = MenuItem | MenuDivider;

interface MenuGroup {
    title: string;
    icon: JSX.Element;
    items: Record<string, MenuEntry>;
    open?: boolean;
}

// Main component
export default function Sidebar() {
    const router = usePathname();

    // Define menu items
    const menuItems: Record<string, MenuGroup> = {
        "Services": {
            title: "Services",
            icon: <HandPlatter size={20} className="inline-block" />,
            items: {
                "all": { title: "All Services", link: "/services" },
                "commercial": { title: "Commercial", link: "/services/commercial" },
                "residential": { title: "Residential", link: "/services/residential" },
                "divider1": { divider: true },
            },
            open: true
        },
        // "Plants": {
        //     title: "Plants",
        //     icon: <Sprout size={20} className="inline-block" />,
        //     items: {
        //         "categories": { title: "Plant Categories", link: "/plants/category" },
        //         "all": { title: "All Plants", link: "/plants" },
        //         "indoor": { title: "Indoor", link: "/plants/indoor" },
        //         "outdoor": { title: "Outdoor", link: "/plants/outdoor" }
        //     },
        //     open: false
        // },
        "Planters": {
            title: "Planters",
            icon: <Cylinder size={20} className="inline-block" />,
            items: {
                "Category": { title: "Planter Categories", link: "/planters/category" },
                "Planters": { title: "All Planters", link: "/planters" },
                "Our Custom Planters": { title: "Our Custom Planters", link: "/planters/custom" },
                "Upload Your Design": { title: "Send us your design", link: "/planters/customize" },
                "divider2": { divider: true },
            },
            open: false
        },
        "Blog": {
            title: "Blog",
            icon: <Leaf size={20} className="inline-block" />,
            items: {
                "all": { title: "All Posts", link: "/blog" },
                "categories": { title: "Categories", link: "/blog/category" },
                "divider3": { divider: true },
            },
            open: false
        },
    };

    const footerItems = [
        { title: "Our Team", icon: <UsersRound size={20} className="inline-block" />, link: "/team" },
        { title: "About Us", icon: <Leaf size={20} className="inline-block" />, link: "/about" },
        { title: "Contact Us", icon: <MessageSquareText size={20} className="inline-block" />, link: "/contact" },
    ];

    // Render menu item
    const renderMenuItem = (id: string, item: MenuEntry) => {
        if ('divider' in item) {
            return <div key={id} className="h-2 divider"></div>;
        }

        const { title, link } = item as MenuItem;
        const isActive = router === link;

        return (
            <li key={id}>
                <Link href={link} className={`font-medium bg-base-100 hover:bg-blue-300 hover:text-black ${isActive ? 'bg-blue-500 text-white' : ''}`}>
                    <ChevronRight size={20} /> {title}
                </Link>
            </li>
        );
    };

    // Render menu group
    const renderMenuGroup = (title: string, icon: JSX.Element, items: Record<string, MenuEntry>, open = false) => (
        <li key={title}>
            <details open={open}>
                <summary className="font-semibold">
                    {icon}
                    {title}
                </summary>
                <ul className="menu gap-1 [&_li>*]:rounded-sm">
                    {Object.entries(items).map(([id, item]) => renderMenuItem(id, item))}
                </ul>
            </details>
        </li>
    );

    return (
        <div className="bg-base-100 drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content min-h-max">

            </div>
            <aside className="flex flex-col min-h-screen w-72 bg-base-200">
                <div className="flex-grow">
                    <div className='sticky top-0 z-20 hidden gap-2 px-4 py-2 shadow-sm h-14 lg:block bg-base-300'>
                        <Link href="/" className='flex items-center justify-center px-2 mt-1 text-2xl font-semibold'>
                            Viriditas
                        </Link>
                    </div>

                    <div className="sticky top-0 z-20 items-center py-2 h-14 lg:hidden bg-base-300 shadow-sm">
                        <form role="search" className="m-2 h-14 lg:hidden">
                            <div className="form-control">
                                <input type="search" name="q" className="input input-sm input-bordered" placeholder="Search..." />
                            </div>
                        </form>
                    </div>

                    {/* Menu section */}
                    <div className="gap-2 menu">
                        <ul>
                            {/* Non-Collapsible Menu items */}
                            {Object.entries(menuItems).map(([title, { icon, items, open }]) => renderMenuGroup(title, icon, items, open))}
                        </ul>
                        <div className="h-2 divider"></div>
                        <ul>
                            {/* Footer Menu items */}
                            {footerItems.map(({ title, icon, link }) => {
                                const isActive = router === link;
                                return (
                                    <li key={title}>
                                        <Link
                                            href={link}
                                            className={`m-0.5 bg-base-100 font-medium hover:bg-blue-300 hover:text-black ${isActive ? "bg-blue-500 text-white" : ""}`}>
                                            {icon}
                                            {title}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>

                <div className="sticky bottom-0 flex flex-row items-center justify-between h-12 p-1 bg-base-300">
                    <Link href="/feedback" className="rounded-sm btn btn-ghost">
                        <MessageSquareHeart size={20} className="inline-block" />
                    </Link>
                    <Link href="/support" className="rounded-sm btn btn-ghost">
                        <HelpCircle size={20} />
                    </Link>
                    <Link href="/subscribe" className="rounded-sm btn btn-ghost">
                        <Rss size={20} className="inline-block" />
                    </Link>
                </div>
            </aside>
            );
}
