import { Dancing_Script, Pacifico } from "next/font/google";
import { Fetch } from '@/app/lib';
import TestimonialSwiper from "./Swiper/TestimonialSwiper";
import Image from "next/image";

const dancing_script = Dancing_Script({ subsets: ["latin"] });


export default async function Testimonial() {
    const data = await Fetch({ endpoint: 'main/testimonials/' });
    if (data.length === 0) return null;
    return (
        <section className="relative p-3 mx-auto mt-2 mb-4 bg-base-300">
            <Image
                src="/images/bg/bg_8.jpg"
                height={1080}
                width={1920}
                alt="Background image description"
                className="absolute inset-0 object-cover w-full h-full"
                style={{
                    backgroundSize: "cover",
                    backgroundPosition: "bottom center",
                    backgroundRepeat: "no-repeat",
                }}
            />
            <div className="relative z-10">
                <header className="mt-4 text-center text-white">
                    <h2 className={`text-3xl font-bold`}>
                        Customer
                    </h2>
                    <h1 className="text-2xl font-bold tracking-wide">Testimonials</h1>
                </header>

                <TestimonialSwiper testimonials={data} />

            </div>
        </section>
    );
}