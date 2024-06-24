import Image from "next/image";

export default function VerticalGardeningSection() {
    return (

        <div className="bg-green-50 py-12">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-base font-semibold text-green-600 tracking-wide uppercase">Innovative Gardening</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Vertical Gardening</p>
                    <p className="mt-4 max-w-3xl text-xl text-gray-500 lg:mx-auto">Transform your space with the beauty and efficiency of vertical gardening.</p>
                </div>

                <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">

                    <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">

                        <Image
                            height={224}
                            width={400}
                            className="w-full h-56 object-cover"
                            src="/images/vertical/vertical_garden_1.jpg"
                            alt="Vertical Garden 1"
                        />

                        <div className="p-6">
                            <h3 className="text-lg font-semibold text-gray-900">Living Wall</h3>
                            <p className="mt-3 text-base text-gray-500">Enhance your walls with lush greenery that purifies the air and beautifies your space.</p>
                        </div>
                    </div>

                    <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">

                        <Image
                            height={224}
                            width={400}
                            className="w-full h-56 object-cover"
                            src="/images/vertical/vertical_garden_2.jpg"
                            alt="Vertical Garden 2"
                        />

                        <div className="p-6">
                            <h3 className="text-lg font-semibold text-gray-900">Outdoor Vertical Garden</h3>
                            <p className="mt-3 text-base text-gray-500">Perfect for small outdoor areas, bringing nature into your urban living space.</p>
                        </div>
                    </div>

                    <div className="shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">

                        <Image
                            height={224}
                            width={400}
                            className="w-full h-56 object-cover"
                            src="/images/vertical/vertical_garden_3.jpg"
                            alt="Vertical Garden 3"
                        />

                        <div className="p-6">
                            <h3 className="text-lg font-semibold text-gray-900">Indoor Vertical Garden</h3>
                            <p className="mt-3 text-base text-gray-500">Create a stunning focal point inside your home with a variety of plants.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}