'use client';

import { CircleX } from 'lucide-react';
import { useState, useEffect } from 'react';

interface Announcement {
    id: number;
    title: string;
    body: string;
    is_active: boolean;
    created_at: string;
}

const AnnouncementBanner: React.FC = () => {
    const [announcement, setAnnouncement] = useState<Announcement | null>(null);
    const [dismissed, setDismissed] = useState<boolean>(false);
    useEffect(() => {
        const fetchAnnouncement = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/home/announcements/`);
                const data: Announcement[] = await response.json();

                const activeAnnouncement = data.find(item => item.is_active);

                if (activeAnnouncement) {
                    setAnnouncement(activeAnnouncement);
                }
            } catch (error) {
                console.error('Failed to fetch announcements:', error);
            }
        };
        fetchAnnouncement();
    }, []);

    const handleDismiss = () => {
        setDismissed(true);
    };

    if (!announcement || dismissed) {
        return null;
    }

    return (
        <div className="bg-blue-500 text-white p-4 flex justify-between items-center">
            <div>
                <strong>{announcement.title}</strong>: {announcement.body}
            </div>
            <button
                className="btn btn-sm btn-ghost btn-circle"
                onClick={handleDismiss}
            >
                <CircleX />
            </button>
        </div>
    );
};

export default AnnouncementBanner;
