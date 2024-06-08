import { ChevronRight, Cylinder, HandPlatter, HelpCircle, Leaf, Lightbulb, MessageSquareHeart, MessageSquareText, PaintRoller, Rss, Search, Sprout } from "lucide-react";
import Link from "next/link";
import React from "react";

interface MenuItemProps {
    id: string;
    title: string;
    link: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ id, title, link }) => (
    <li key={id}>
        <Link href={link} className="font-medium bg-base-200">
            <ChevronRight size={20} /> {title}
        </Link>
    </li>
);

interface MenuGroupProps {
    title: string;
    icon: JSX.Element;
    items: Record<string, { title: string; link: string; }>;
}

export default function Sidebar() {



    const menuItemsOne = {

        "Plants": {
            "icon": <Sprout size={20} className="inline-block" />,
            "all": {
                "title": "All Plants",
                "link": "/plants"
            },
            "indoor": {
                "title": "Indoor",
                "link": "/plants/indoor"
            },
            "outdoor": {
                "title": "Outdoor",
                "link": "/plants/outdoor"
            }
        },

        "Planters": {
            "icon": <Cylinder size={20} className="inline-block" />,
            "All Planters": {
                "title": "All Planters",
                "link": "/planters"
            },
            "Planters Category": {
                "title": "Planters Category",
                "link": "/planters/category"
            },
            "Our Custom Planters": {
                "title": "Our Custom Planters",
                "link": "/planters/custom"
            },
            "Get a Custom Planter": {
                "title": "Get a Custom Planter",
                "link": "/planters/customize"
            }

        },
        "Designs": {
            "icon": <PaintRoller size={20} className="inline-block" />,
            "All Designs": {
                "title": "All Designs",
                "link": "/designs"
            },
            "Designs Category": {
                "title": "Designs Category",
                "link": "/designs/category"
            },
            "Our Custom Designs": {
                "title": "Our Custom Designs",
                "link": "/designs/custom"
            },
            "Get a Custom Design": {
                "title": "Get a Custom Design",
                "link": "/designs/customize"
            }
        },

    };

    const menuItemsTwo = [
        {
            title: "Innovate Your Space",
            icon: <Lightbulb size={20} className="inline-block" />,
            link: "#"
        },
        {
            title: "Get Your Service",
            icon: <HandPlatter size={20} className="inline-block" />,
            link: "/dashboard/reservations"
        },

        {
            title: "Contact Us",
            icon: <MessageSquareText size={20} className="inline-block" />,
            link: "/contact"
        }
    ]

    return (
        <aside className="min-h-screen w-72 flex flex-col bg-base-300">
            <div className="flex-grow">
                <SidebarHeader />

                {/* Menu section */}
                <ul className="menu gap-2">

                    <li>
                        <Link href="/plants/category" className="font-semibold">
                            <Leaf size={20} className="inline-block" /> Explore Plant Category
                        </Link>
                    </li>

                    {/* Menu items one */}
                    {Object.entries(menuItemsOne).map(([title, { icon, ...items }]) => (
                        <MenuGroup key={title} title={title} icon={icon} items={items} />
                    ))}

                    <div className="divider"></div>

                    {/* Main menu items */}
                    {menuItemsTwo.map(({ title, icon, link }) => (
                        <li key={title}>
                            <Link href={link} className="font-semibold">
                                {icon}
                                {title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            <SidebarFooter />
        </aside>
    );
}

const SidebarHeader = () => {
    return (
        <>
            {/* Logo section */}
            <div className='sticky top-0 z-20 gap-2 px-4 py-2 lg:flex shadow-sm bg-base-200 hidden'>
                <Link href="/" className='btn btn-ghost px-2'>
                    <p className='text-justify font-extrabold text-2xl'>Viriditas</p>
                </Link>
            </div>

            {/* Search section */}
            <div className="sticky top-0 z-20 lg:hidden items-center py-2 bg-base-200 shadow-sm">
                <form role="search" className="relative m-2 lg:hidden">
                    <div className="form-control">
                        <input type="search" name="q" className="input input-bordered" placeholder="Search..." />
                    </div>
                    <button className="btn rounded-l-none absolute right-0 top-0">
                        <Search size={20} />
                    </button>
                </form>
            </div>
        </>
    )
}


const SidebarFooter = () => {
    return (
        <div className="p-1 sticky bottom-0 bg-base-200">
            <div className="grid grid-cols-3 gap-2">
                <Link href="/feedback" className="btn btn-ghost rounded-sm">
                    <MessageSquareHeart size={20} className="inline-block" />
                </Link>
                <Link href="/support" className="btn btn-ghost rounded-sm">
                    <HelpCircle size={20} />
                </Link>
                <Link href="/subscribe" className="btn btn-ghost rounded-sm">
                    <Rss size={20} className="inline-block" />
                </Link>
            </div>
        </div>
    );
}

const MenuGroup: React.FC<MenuGroupProps> = ({ title, icon, items }) => (
    <li key={title}>
        <details>
            <summary className="font-semibold">
                {icon}
                {title}
            </summary>
            <ul className="menu gap-1 [&_li>*]:rounded-sm">
                {Object.entries(items).map(([id, item]) => (
                    <MenuItem key={id} id={id} {...item} />
                ))}
            </ul>
        </details>
    </li>
);