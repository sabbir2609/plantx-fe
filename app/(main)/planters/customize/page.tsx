import Image from "next/image";

export default function page() {
    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row">
                <Image
                    src={"https://sorsauth.sirv.com/plantx/art-and-soil-bangalore-zG5v7oOO8Xw-unsplash.jpg"}
                    alt="Coming Soon"
                    width={900}
                    height={700}
                    className="rounded-lg shadow-2xl lg:max-w-sm" />
                <div>
                    <h1 className="text-5xl font-bold">
                        Coming Soon !
                    </h1>
                    <p className="text-2xl font-light">
                        Soon you will be able to customize your planter.
                    </p>
                </div>
            </div>
        </div>
    );
}