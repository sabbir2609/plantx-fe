import Image from 'next/image';
import Link from 'next/link';

interface Event {
    id: number;
    title: string;
    slug: string;
    start_date: string;
    end_date: string;
    location: string;
    image: string;
}

export default function EventCard({ title, slug, start_date, end_date, location, image }: Event) {
    return (
        <div className="rounded-lg shadow-lg overflow-hidden bg-base-200">
            <Link href={`/events/${slug}`} className="block">
                <div className="relative h-48">
                    <Image
                        src={image || "/static/viriditas.webp"}
                        alt={title}
                        height={800}
                        width={418}
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="p-4">
                    <h2 className="text-2xl font-semibold mb-2">{title}</h2>
                    <p className="text-sm">{location}</p>
                </div>
            </Link>
        </div>
    );
};
