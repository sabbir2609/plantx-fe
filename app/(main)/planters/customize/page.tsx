import Image from "next/image";

export default function page() {
    return (
        <div className="hero">
            <div className="flex-col hero-content lg:flex-row">
                <Image
                    src={"https://sorsauth.sirv.com/plantx/art-and-soil-bangalore-zG5v7oOO8Xw-unsplash.jpg"}
                    alt="Coming Soon"
                    width={900}
                    height={700}
                    className="rounded-lg shadow-2xl lg:max-w-sm" />
                <div>
                    <h1 className="pb-1 text-5xl font-bold">
                        Send us your design!
                    </h1>
                    <p className="text-2xl font-light">
                        Send us your design on Whatsapp or Email and
                        we will make it for you!
                    </p>
                </div>
            </div>
        </div>
    );
}