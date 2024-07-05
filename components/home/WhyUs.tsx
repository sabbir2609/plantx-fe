import Image from 'next/image';

export default function WhyUs() {

    return (
        <div className="p-2 mx-auto">
            <Image
                src="/images/why-choose-us/why-us.png"
                alt="Why Choose Us?"
                width={960}
                height={1200}
                className='mx-auto object-contain w-full lg:h-[100vh]'
            />
        </div>
    );
}