import Image from 'next/image';
import { Luckiest_Guy } from "next/font/google";

const Heading_Font = Luckiest_Guy({
    subsets: ['latin'],
    weight: '400',
});

export default function About() {
    return (
        <div className="bg-[url('/images/bg/bg_11.jpg')] bg-cover bg-right bg-no-repeat lg:p-12 shadow-sm">
            <div className="w-full px-6 py-4 bg-opacity-50 flex flex-col items-center justify-center">
                <p className={`text-lg lg:text-2xl font-normal text-white text-center leading-6`}>
                    At <span className='text-xl font-bold'>Viriditas,</span> we specialize in green design for interiors and landscapes, bringing nature into homes, workplaces, and public spaces. With eco-friendly practices and innovative approaches, we create beautiful, sustainable spaces that enrich communities and the environment.
                </p>
            </div>
        </div>
    );
}