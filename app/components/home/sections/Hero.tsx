import HeroImageLg from '@/public/images/hero/hero_img_lg.jpg';
import HeroImageSm from '@/public/images/hero/hero_img_sm_1.jpg';
import Image from 'next/image';
import Link from 'next/link';

export default async function Hero() {
    const title = "Elevate your space with nature";
    const description = "Transform your environment with our sustainable plant-based solutions";

    return (
        <>
            {/* Desktop/Tablet Hero */}
            <section className="relative w-full hidden md:block h-screen">
                <Image
                    src={HeroImageLg}
                    alt="Viriditas Banner"
                    height={1080}
                    width={1920}
                    priority
                    quality={100}
                    placeholder="blur"
                    sizes="100vw"
                    className="object-cover w-full h-full brightness-75"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent">
                    <div className="container mx-auto h-full flex items-center">
                        <div className="max-w-2xl space-y-6 p-8">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                                {title}
                            </h1>
                            <p className="text-lg md:text-xl text-white/90">
                                {description}
                            </p>
                            <Link 
                                href="#service-section" 
                                className="btn btn-primary btn-lg"
                            >
                                Get Started
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mobile Hero */}
            <section className="relative w-full md:hidden h-[70vh]">
                <Image
                    src={HeroImageSm}
                    alt="Viriditas Banner"
                    height={1200}
                    width={800}
                    priority
                    quality={100}
                    placeholder="blur"
                    sizes="100vw"
                    className="object-cover w-full h-full brightness-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
                    <div className="absolute bottom-0 p-6 space-y-4">
                        <h1 className="text-3xl font-bold text-white">
                            {title}
                        </h1>
                        <p className="text-base text-white/90">
                            {description}
                        </p>
                        <Link 
                            href="#service-section" 
                            className="btn btn-primary"
                        >
                            Get Started
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}