import Image from "next/image";

export default function Page() {
    return (
        <main className="mx-auto">

            <section>
                <div className="hero min-h-full bg-base-200">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <Image
                            height={500}
                            width={500}
                            src="/images/innovate/innovate1.jpg"
                            className="h-64 lg:h-full w-full lg:max-w-sm rounded-sm shadow-2xl object-cover"
                            alt={"innovate your space"} />
                        <div>
                            <h1 className="text-5xl lg:text-7xl font-bold">Viriditas: Innovate
                                Your Space</h1>
                            <p className="py-6">Elevate your home with nature's restorative power. Discover the transformative impact of biophilic design.</p>
                            <div className="flex flex-row gap-4">
                                <button className="btn btn-primary rounded-sm">Explore Collection</button>
                                <button className="btn btn-secondary rounded-sm">Book Service</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="min-h-full lg:mx-10">
                <h1 className="text-4xl font-bold py-10 text-center">
                    Elevate Your Home with Nature's Essence
                </h1>
                <div className="flex flex-col lg:flex-row justify-between lg:p-4">

                    <div className="div p-10">
                        <h1 className="text-3xl mb-3">Bring the Outdoors In</h1>
                        <p className="text-lg">Curate a harmonious blend of
                            natural elements and modern
                            decor for a serene, rejuvenating
                            ambiance.</p>
                    </div>

                    <div className="div p-10">
                        <h1 className="text-3xl mb-3">Cultivate Wellbeing</h1>
                        <p className="text-lg">Immerse yourself in the restorative powers of biophilic design to enhance your mental and physical health</p>
                    </div>

                    <div className="div p-10">
                        <h1 className="text-3xl mb-3">Sustainable Solutions</h1>
                        <p className="text-lg">Discover eco-friendly decor that reduces your environmental impact without compromising style.</p>
                    </div>
                </div>
            </section>

            <section className="min-h-full lg:p-10 bg-base-200">
                <div className="flex flex-col lg:flex-row justify-between lg:p-4">
                    <Image
                        height={500}
                        width={500}
                        src="/images/innovate/innovate2.jpg"
                        className="h-64 lg:h-full w-full lg:max-w-sm rounded-sm shadow-2xl object-cover"
                        alt={"innovate your space"}
                    />

                    <div className="p-4 lg:px-20 content-center">
                        <h1 className="text-4xl font-bold py-10">
                            Curated Plant Collections
                        </h1>

                        <div className="flex flex-col gap-10">

                            <div className="flex flex-col lg:flex-row gap-10 lg:gap-4">

                                <div className="flex flex-row gap-4">
                                    <button className="btn btn-square btn-disabled P-4">1</button>
                                    <div>
                                        <h1 className="text-2xl">Low-Maintenance</h1>
                                        <p>Thrive with easy-care plant options
                                            that add vibrant greenery to any
                                            space.</p>
                                    </div>
                                </div>

                                <div className="flex flex-row gap-4">
                                    <button className="btn btn-square btn-disabled P-4">2</button>
                                    <div>
                                        <h1 className="text-2xl">Air-Purifying</h1>
                                        <p>Breathe easy with plant selections
                                            that naturally filter and oxygenate the
                                            air.</p>
                                    </div>
                                </div>

                            </div>

                            <div className="flex flex-row gap-4">
                                <button className="btn btn-square btn-disabled P-4">3</button>
                                <div>
                                    <h1 className="text-2xl">Mood-Boosting</h1>
                                    <p>Surround yourself with plants proven to enhance focus, creativity, and overall
                                        wellbeing</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
}