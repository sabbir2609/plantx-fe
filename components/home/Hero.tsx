import HeroImageLg from '@/public/images/hero/hero_img_lg.jpg';
import HeroImageSm from '@/public/images/hero/hero_img_sm.jpg';
import Image from 'next/image';
import Link from 'next/link';

export default async function Hero() {
    const title = "Elevate your space with nature";
    return (
        <>
            <section className="relative w-full hidden md:block lg:block h-[90vh]">
                <Image
                    src={HeroImageLg}
                    alt="Viriditas Banner"
                    height={1080}
                    width={1920}
                    sizes="100vw"
                    loading="lazy"
                    className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-start">
                    <div className="ml-8 text-left">
                        <h1 className="text-5xl font-bold text-white">{title}</h1>
                        <Link href="#service-section" className="btn btn-primary mt-4">Explore Our Services</Link>
                    </div>
                </div>
            </section>
            <section className="relative w-full md:hidden lg:hidden h-[80vh]">
                <Image
                    src={HeroImageSm}
                    alt="Viriditas Banner"
                    height={1200}
                    width={800}
                    loading="lazy"
                    sizes="100vw"
                    className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 flex items-end justify-start pb-12">
                    <div className="ml-4 text-left">
                        <h1 className="text-3xl font-bold text-white">{title}</h1>
                        <Link href="#service-section" className="btn btn-primary mt-4">Explore Our Services</Link>
                    </div>
                </div>
            </section>
        </>
    );
}