import Link from 'next/link';


export default function TopPicks() {
    const topPicksData = [
        {
            id: 1,
            title: "Plant 1",
            image: "/images/plants/plant1.jpg",
            link: "#"
        },
        {
            id: 2,
            title: "Plant 2",
            image: "/images/plants/plant2.jpg",
            link: "#"
        },
        {
            id: 3,
            title: "Plant 3",
            image: "/images/plants/plant3.jpg",
            link: "#"
        },
        {
            id: 4,
            title: "Plant 4",
            image: "/images/plants/plant4.jpg",
            link: "#"
        },
        {
            id: 5,
            title: "Plant 5",
            image: "/images/plants/plant5.jpg",
            link: "#"
        },
        {
            id: 6,
            title: "Plant 6",
            image: "/images/plants/plant6.jpg",
            link: "#"
        },
        {
            id: 7,
            title: "Plant 7",
            image: "/images/plants/plant7.jpg",
            link: "#"
        },
        {
            id: 8,
            title: "Plant 8",
            image: "/images/plants/plant8.jpg",
            link: "#"
        },
        {
            id: 9,
            title: "Plant 9",
            image: "/images/plants/plant9.jpg",
            link: "#"
        },
        {
            id: 10,
            title: "Plant 10",
            image: "/images/plants/plant10.jpg",
            link: "#"
        },
        {
            id: 11,
            title: "Plant 11",
            image: "/images/plants/plant11.jpg",
            link: "#"
        },
        {
            id: 12,
            title: "Plant 12",
            image: "/images/plants/plant12.jpg",
            link: "#"
        }
    ];

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Top Picks</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {topPicksData.map((item) => (
                    <div key={item.id} className="rounded-lg shadow-md overflow-hidden">
                        <Link href={item.link}>
                            <img src={item.image} alt={item.title} className="w-full h-40 object-cover transition duration-300 ease-in-out hover:scale-110" />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold">{item.title}</h3>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};
