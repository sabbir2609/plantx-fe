import Image from 'next/image';

interface TeamMember {
    name: string;
    role: string;
    image: string;
}

const teamMembers: TeamMember[] = [
    {
        name: 'Marvin McKinney',
        role: 'Founder',
        image: 'https://pagedone.io/asset/uploads/1698649968.png',
    },
    {
        name: 'Kathryn Murphy',
        role: 'CTO',
        image: 'https://pagedone.io/asset/uploads/1698650000.png',
    },
    {
        name: 'Jerome Bell',
        role: 'CMO',
        image: 'https://pagedone.io/asset/uploads/1698659360.png',
    },
    {
        name: 'Wade Warren',
        role: 'CEO',
        image: 'https://pagedone.io/asset/uploads/1698650109.png',
    },
    {
        name: 'Leslie Alexander',
        role: 'Customer Support',
        image: 'https://pagedone.io/asset/uploads/1698650146.png',
    },
    {
        name: 'Guy Hawkins',
        role: 'HR',
        image: 'https://pagedone.io/asset/uploads/1698650184.png',
    },
    {
        name: 'Ronald Richards',
        role: 'CO-Founder',
        image: 'https://pagedone.io/asset/uploads/1698650213.png',
    },
    {
        name: 'Devon Lane',
        role: 'UI Designer',
        image: 'https://pagedone.io/asset/uploads/1698650242.png',
    },
    {
        name: 'Dianne Russell',
        role: 'Product Designer',
        image: 'https://pagedone.io/asset/uploads/1698650271.png',
    },
];

export default function Page() {
    return (
        <section className="pt-2">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-5">
                    <h2 className="font-manrope text-5xl text-center font-bold mb-2">Meet the brains</h2>
                    <p className="text-lg text-center tracking-tight">These people work on making our service best.</p>
                </div>
                <div className="flex flex-wrap justify-center gap-y-14 max-w-3xl mx-auto lg:max-w-full">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="group block text-center lg:w-1/5 sm:w-1/3 min-[450px]:w-1/2 w-full">
                            <div className="relative mb-5">
                                <Image
                                    src={member.image}
                                    alt={`${member.name} image`}
                                    width={200}
                                    height={200}
                                    className="w-28 h-28 rounded-2xl object-cover mx-auto transition-all duration-500 border-2 border-solid border-transparent group-hover:border-indigo-600"
                                />
                            </div>
                            <h4 className="text-xl font-semibold text-center mb-2 transition-all duration-500 group-hover:text-indigo-600">
                                {member.name}
                            </h4>
                            <span className="text-center block transition-all duration-500 group-hover:text-yellow-300">
                                {member.role}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}