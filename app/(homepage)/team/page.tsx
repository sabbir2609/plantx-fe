import Image from 'next/image';

import { Anton } from "next/font/google";
import { Fetch } from '@/app/lib';


const anton_font = Anton({
    subsets: ["latin"],
    weight: "400"
});

interface TeamMember {
    name: string;
    position: string;
    image: string;
}

export default async function Page() {
    const data = await Fetch({ endpoint: 'main/team' });
    const teamMembers: TeamMember[] = data;
    return (
        <section className="py-2">
            <div className="mx-auto max-w-7xl px-2 lg:px-8">

                <div className="mb-5 mt-4">
                    <h2 className={`${anton_font.className} text-4xl text-center font-bold mb-2`}>Meet the brains</h2>
                    <p className="text-base text-center tracking-tighter">These people work on making our service best.</p>
                </div>

                <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="text-center bg-base-200 p-4">
                            <div className="relative mb-5">
                                <Image
                                    src={member.image}
                                    alt={`${member.name} image`}
                                    width={500}
                                    height={500}
                                    className=""
                                />
                            </div>
                            <h4 className="text-lg lg:text-xl font-semibold text-center mb-1">
                                {member.name}
                            </h4>
                            <span className="text-center block">
                                {member.position}
                            </span>

                        </div>

                    ))}
                </div>

            </div>
        </section>
    );
}