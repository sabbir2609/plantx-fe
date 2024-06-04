import { Airplay, Bath, Building2, CalendarCheck2, ChevronRight, CircleCheckBig, Cylinder, Fence, HandPlatter, HelpCircle, LayoutDashboard, Lightbulb, LogOut, NotebookPen, Search, Settings2, ShoppingBag, Sprout, UserRoundCog, UsersRound, Warehouse, } from "lucide-react";
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
            "indoor": {
                "title": "Indoor",
                "link": "plants/indoor"
            },
            "outdoor": {
                "title": "Outdoor",
                "link": "#"
            }
        },

        "Planters": {
            "icon": <Cylinder size={20} className="inline-block" />,
            "ceramic": {
                "title": "Ceramic",
                "link": "#"
            },
            "concrete": {
                "title": "Concrete",
                "link": "#"
            },
            "geobags": {
                "title": "Geobags",
                "link": "#"
            },
            "plastic": {
                "title": "Plastic",
                "link": "#"
            },

        },

    };

    const menuItems = [
        {
            title: "Innovate Your Space",
            icon: <Lightbulb size={20} className="inline-block" />,
            link: "#"
        },
        {
            title: "Get Your Service",
            icon: <HandPlatter size={20} className="inline-block" />,
            link: "/dashboard/reservations"
        }
    ]
    return (
        <aside className="min-h-screen w-72 flex flex-col bg-base-300">
            <div className="flex-grow">
                <SidebarHeader />

                {/* Menu section */}
                <ul className="menu gap-2">

                    {/* Menu items one */}
                    {Object.entries(menuItemsOne).map(([title, { icon, ...items }]) => (
                        <MenuGroup key={title} title={title} icon={icon} items={items} />
                    ))}

                    {/* Main menu items */}
                    {menuItems.map(({ title, icon, link }) => (
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
            <div className='sticky top-0 z-20 gap-2 px-4 py-2 lg:flex shadow-sm bg-base-200'>
                <Link href="/" className='btn btn-ghost px-2'>
                    <p className='text-justify font-extrabold text-2xl'>InDecor</p>
                </Link>
            </div>
        </>
    )
}


const SidebarFooter = () => {
    return (
        <div className="p-1 sticky bottom-0 bg-base-200">
            <div className="grid grid-cols-3 gap-2">
                <Link href="/settings" className="btn btn-ghost rounded-sm">
                    <Settings2 size={20} />
                </Link>
                <Link href="/support" className="btn btn-ghost rounded-sm">
                    <HelpCircle size={20} />
                </Link>
                <Link href="/logout" className="btn btn-ghost rounded-sm">
                    <LogOut size={20} />
                </Link>
            </div>
        </div>
    );
}

const MenuGroup: React.FC<MenuGroupProps> = ({ title, icon, items }) => (
    <li key={title}>
        <details open>
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