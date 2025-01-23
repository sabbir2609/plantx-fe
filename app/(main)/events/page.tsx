import { Fetch } from "@/app/lib";
import { EventCard } from "@/app/components/main";

interface Event {
    id: number;
    title: string;
    slug: string;
    start_date: string;
    end_date: string;
    location: string;
    image: string;
}

export default async function page() {
    const data = await Fetch({ "endpoint": "main/events" });
    const events: Event[] = data.results;
    return (
        <div className="p-2 mx-auto">
            <h1 className="p-2 text-3xl font-bold mb-2">Events</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {events.map((event) => (
                    <EventCard key={event.id} {...event} />
                ))}
            </div>
        </div>
    );
}