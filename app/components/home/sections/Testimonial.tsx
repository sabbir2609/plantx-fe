import { Fetch } from '@/app/lib';
import TestimonialSwiper from "../Swiper/TestimonialSwiper";

export default async function Testimonial() {
    const data = await Fetch({ endpoint: 'main/testimonials/' });
    if (data.length === 0) return null;
    return (
        <section className="p-3 mx-auto mt-2 mb-4 pb-14">
            <header className="mt-4 text-center pb-8">
                <h2 className={`text-3xl font-bold`}>
                    Customer
                </h2>
                <h4 className="text-xl">Testimonials</h4>
            </header>

            <TestimonialSwiper testimonials={data} />

        </section>
    );
}