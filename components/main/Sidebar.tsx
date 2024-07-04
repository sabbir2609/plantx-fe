import { Flower, Album, ChevronRight, Cylinder, HandPlatter, HelpCircle, Leaf, Lightbulb, MessageSquareHeart, MessageSquareText, PaintRoller, Rss, Search, Sprout, UsersRound } from "lucide-react";
import Link from "next/link";
import { title } from "process";

interface MenuItemProps {
    id: string;
    title: string;
    link: string;
}

interface MenuGroupProps {
    title: string;
    icon: JSX.Element;
    items: Record<string, { title: string; link: string; }>;
    open?: boolean;
}


const MenuItem: React.FC<MenuItemProps> = ({ id, title, link }) => (
    <li key={id}>
        <Link href={link} className="font-medium bg-base-200">
            <ChevronRight size={20} /> {title}
        </Link>
    </li>
);

const MenuGroup: React.FC<MenuGroupProps> = ({ title, icon, items, open }) => (
    <li key={title}>
        <details open={open}>
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

export default function Sidebar() {
    const menuItemsOne = {
        "Services": {
            "icon": <HandPlatter size={20} className="inline-block" />,
            "all": {
                "title": "All Services",
                "link": "/services"
            },
            "commercial": {
                "title": "Commercial",
                "link": "/services/commercial"
            },
            "residential": {
                "title": "Residential",
                "link": "/services/residential"
            },
        }
    };

    const menuItemsTwo = {
        "Plants": {
            "icon": <Sprout size={20} className="inline-block" />,
            "all": {
                "title": "All Plants",
                "link": "/plants"
            },
            "categories": {
                "title": "Plant Categories",
                "link": "/plants/category"
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
            "Category": {
                "title": "Planters Category",
                "link": "/planters/category"
            },
            "Planters": {
                "title": "All Planters",
                "link": "/planters"
            },
            "Our Custom Planters": {
                "title": "Our Custom Planters",
                "link": "/planters/custom"
            },
            "Upload Your Design": {
                "title": "Upload Your Design",
                "link": "/planters/customize"
            }
        }
    };

    const menuItemsThree = [
        {
            title: "Innovate",
            icon: <Lightbulb size={20} className="inline-block" />,
            link: "/innovate"
        },
        {
            title: "Our Team",
            icon: <UsersRound size={20} className="inline-block" />,
            link: "/team"
        },
        {
            title: "Contact Us",
            icon: <MessageSquareText size={20} className="inline-block" />,
            link: "/contact"
        },
        {
            title: "About Us",
            icon: <Leaf size={20} className="inline-block" />,
            link: "/about"
        }
    ];

    return (
        <aside className="min-h-screen w-72 flex flex-col bg-base-300">
            <div className="flex-grow">
                <SidebarHeader />

                {/* Menu section */}
                <ul className="menu gap-2">

                    {/* Non Collapsible Menu items */}
                    {Object.entries(menuItemsOne).map(([title, { icon, ...items }]) => (
                        <MenuGroup key={title} title={title} icon={icon} items={items} open={true} />
                    ))}

                    {/* Collapsible Menu items */}
                    {Object.entries(menuItemsTwo).map(([title, { icon, ...items }]) => (
                        <MenuGroup key={title} title={title} icon={icon} items={items} />
                    ))}

                    <div className="divider h-2"></div>

                    {/* Footer Menu items */}
                    {menuItemsThree.map(({ title, icon, link }) => (
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
            <div className='sticky top-0 z-20 gap-2 h-14 px-4 py-2 lg:block shadow-sm bg-base-200 hidden'>
                <Link href="/" className='flex items-center justify-center px-2 text-2xl font-semibold mt-1'>
                    Viriditas
                </Link>
            </div>

            {/* Search section */}
            <div className="sticky h-14 top-0 z-20 lg:hidden items-center py-2 bg-base-200 shadow-">
                <form role="search" className="h-14 m-2 lg:hidden">
                    <div className="form-control">
                        <input type="search" name="q" className="input input-sm input-bordered" placeholder="Search..." />
                    </div>
                </form>
            </div>
        </>
    )
}

const SidebarFooter = () => {
    return (
        <div className="flex flex-row justify-between p-1 sticky bottom-0 bg-base-200 h-12 items-center ">
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
    );
}
