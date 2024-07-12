import Image from 'next/image';

export default function AboutUs() {
    return (
        <div className="p-4 mx-auto lg:max-w-7xl lg:px-8">
            <div className="text-center">
                <h2 className="text-base font-semibold tracking-wide uppercase">About Us</h2>
                <p className="mt-2 text-3xl font-normal leading-8 tracking-tight">
                    Transform Your Home: Elegant Designs with Greenery
                </p>
                <p className="max-w-2xl mt-4 text-lg font-normal lg:mx-auto">
                    At Viriditas, we create sustainable, plant-based urban landscapes to enhance well-being and promote environmental care. We are committed to combating climate change, improving air quality, and making cities greener, healthier, and more vibrant for everyone.
                </p>
            </div>

            <div className="mt-10">
                <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
                    <div>
                        <h3 className="text-2xl font-normal leading-8 sm:text-3xl">
                            Our Vision
                        </h3>
                        <p className="mt-4 text-lg">
                            Our vision is to transform urban spaces into lush, green havens that not only look beautiful but also contribute to the health and well-being of their inhabitants. By integrating plants into the urban fabric, we aim to create environments that inspire, refresh, and sustain life.
                        </p>
                        <p className="mt-4 text-lg">
                            We believe in the power of nature to heal and rejuvenate, and our mission is to bring that power into the heart of cities around the world. Through innovative design and sustainable practices, we strive to make green spaces accessible and enjoyable for everyone.
                        </p>
                    </div>
                    <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
                        <Image
                            className="object-cover object-center rounded-lg shadow-lg"
                            src="/images/about/greenery.jpg"
                            alt="Greenery"
                            width={1200}
                            height={800}
                        />
                    </div>
                </div>
            </div>

            <div className="mt-10">
                <h3 className="text-2xl font-normal leading-8 sm:text-3xl">
                    Our Commitment
                </h3>
                <p className="mt-4 text-lg">
                    We are dedicated to:
                </p>
                <ul className="mt-4 text-lg list-disc list-inside">
                    <li>Combating climate change by reducing urban heat islands and sequestering carbon dioxide.</li>
                    <li>Improving air quality through the natural filtration capabilities of plants.</li>
                    <li>Creating green, healthy, and vibrant urban environments that enhance the quality of life for all residents.</li>
                    <li>Promoting environmental awareness and sustainable living practices.</li>
                </ul>
            </div>

            <div className="mt-10">
                <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
                    <div>
                        <Image
                            className="object-cover object-center rounded-lg shadow-lg"
                            src="/images/about/urban-landscape.jpg"
                            alt="Urban Landscape"
                            width={1200}
                            height={800}
                        />
                    </div>
                    <div className="mt-10 lg:mt-0">
                        <h3 className="text-2xl font-normal leading-8 sm:text-3xl">
                            Join Us in Our Mission
                        </h3>
                        <p className="mt-4 text-lg">
                            At Viriditas, we believe that everyone has a role to play in creating a more sustainable and livable future. Whether you are looking to transform your home, office, or community space, we are here to help you bring your vision to life with elegant, plant-based designs.
                        </p>
                        <p className="mt-4 text-lg">
                            Join us in our mission to make the world a greener, healthier place for all. Together, we can create urban landscapes that not only look beautiful but also support the health and well-being of people and the planet.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
