import Image from 'next/image';

export default function WhyUs() {

    return (
        <div className="p-2 mx-auto">
            <Image
                src="/images/why-choose-us/why-us-sm.png"
                alt="Why Choose Us?"
                width={960}
                height={1200}
                className='lg:hidden mx-auto object-contain w-full md:h-[90vh]'
            />
            <Image
                src="/images/why-choose-us/why-us-lg.png"
                alt="Why Choose Us?"
                width={960}
                height={1200}
                className='hidden lg:block mx-auto object-contain w-full lg:h-[80vh]'
            />
        </div>
    );
}