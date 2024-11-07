import { Fetch } from "@/app/lib";
import Image from "next/image";

interface Event {
    title: string;
    slug: string;
    description: string;
    start_date: string;
    end_date: string;
    location: string;
    image: string;
    is_featured: boolean;
}

export default async function Plants(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    const data = await Fetch({ endpoint: `main/events/${params.slug}` });
    const event: Event = data;

    return (
        <div className="max-w-2xl p-4 mx-auto bg-base-200 rounded-lg shadow-lg">
            <h1 className="text-4xl font-extrabold text-primary mb-4 text-center">{event.title}</h1>
            <div className="w-full overflow-hidden rounded-lg">
                <Image
                    src={event.image || "/static/viriditas.webp"}
                    alt={event.title}
                    width={400}
                    height={400}
                    className="w-full h-[50vh] object-cover transition-transform duration-300 hover:scale-105"
                />
            </div>
            <div className="p-4">
                <p className="text-lg font-semibold text-base-content mb-2">
                    <span className="text-primary">Date:</span> {event.start_date} - {event.end_date}
                </p>
                <p className="text-lg font-semibold text-base-content mb-4">
                    <span className="text-primary">Location:</span> {event.location}
                </p>
                <p className="text-lg font-semibold text-base-content mb-2">Description:</p>
                <div className="prose max-w-none pt-4 p-4 bg-base-300 rounded-lg shadow-inner">
                    <div dangerouslySetInnerHTML={{ __html: event.description }} />
                </div>
            </div>
        </div>

    );
}
