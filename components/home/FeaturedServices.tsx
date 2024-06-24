import FeaturedServicesSwiper from './Swiper/FeaturedServicesSwiper';

interface Services {
    id: number;
    title: string;
    image: string;
}

export default async function FeaturedServices() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/services/featured/`,
        {
            cache: 'no-cache',
        }
    );
    if (!response.ok) {
        throw new Error('Failed to fetch data from the API');
    }
    const data = await response.json();
    const services: Services[] = data.slice(0, 10);

    return (
        <div className="w-full">

            <FeaturedServicesSwiper services={services} />

        </div>
    );
}
