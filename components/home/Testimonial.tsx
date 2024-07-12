import { Dancing_Script, Pacifico } from "next/font/google";
import { Fetch } from '@/app/lib';
import TestimonialSwiper from "./Swiper/TestimonialSwiper";

const dancing_script = Dancing_Script({ subsets: ["latin"] });


export default async function Testimonial() {
    const data = await Fetch({ endpoint: 'main/testimonials/' });

    return (
        <section className="p-3 mx-auto mt-2 mb-4 bg-base-300"
            style={
                {
                    backgroundImage: "url('/images/bg/bg_8.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "bottom center",
                    backgroundRepeat: "no-repeat",
                }
            }
        >
            <header className="mb-4 text-center text-white">
                <h2 className={`${dancing_script.className} text-4xl font-bold`}>
                    Customer
                </h2>
                <h1 className="text-3xl font-bold tracking-wide">Testimonials</h1>
            </header>

            <TestimonialSwiper testimonials={data} />


        </section>
    );
}