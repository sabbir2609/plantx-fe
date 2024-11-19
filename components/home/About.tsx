import Image from 'next/image';
import { Luckiest_Guy } from "next/font/google";

const Heading_Font = Luckiest_Guy({
    subsets: ['latin'],
    weight: '400',
});

export default function About() {
    return (
        <p className="p-2 py-12 text-lg lg:text-2xl text-center bg-base-300 leading-6">
            At <span className='text-xl font-bold'>Viriditas,</span> we specialize in green design for interiors and landscapes, bringing nature into homes, workplaces, and public spaces. With eco-friendly practices and innovative approaches, we create beautiful, sustainable spaces that enrich communities and the environment.
        </p>
    );
}