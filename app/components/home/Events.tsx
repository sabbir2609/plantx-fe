import { Fetch } from "@/app/lib";
import { EventCard } from "@/app/components/main";
import Link from "next/link";
import EventSwiper from "./Swiper/EventSwiper";

interface Event {
    id: number;
    title: string;
    slug: string;
    start_date: string;
    end_date: string;
    location: string;
    image: string;
}

export default async function Events() {
    const data = await Fetch({ "endpoint": "main/events" });
    const events: Event[] = data.results.slice(0, 3);
    return (
        <section className="px-2 pt-10 lg:px-4">
            <div className="flex justify-between mb-5 border-b text-normal">
                <div className="flex items-center pb-1 pr-2 uppercase border-b-2">
                    <h1 className="text-3xl lg:text-4xl font-normal tracking-tight">
                        Recent Events
                    </h1>
                </div>
                <Link className="font-semibold hover:text-blue-600 place-content-end" href="/events">
                    View All
                </Link>
            </div>
            <EventSwiper events={events} />
        </section>
    );
}