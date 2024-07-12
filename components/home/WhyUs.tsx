import Image from 'next/image';

import WhyUSsm from '@/public/images/why-choose-us/why-us-sm.png';
import WhyUSlg from '@/public/images/why-choose-us/why-us-lg.png';

export default async function WhyUs() {
    return (
        <div className="p-2 mx-auto">
            <Image
                src={WhyUSsm}
                alt="Why Choose Us?"
                width={960}
                height={1200}
                blurDataURL='/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwhy-us-sm.82387f93.png&w=6&q=70'
                placeholder='blur'
                className='lg:hidden mx-auto object-contain w-full md:h-[90vh]'
            />
            <Image
                src={WhyUSlg}
                alt="Why Choose Us?"
                width={960}
                height={1200}
                blurDataURL='/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwhy-us-lg.8bb1e41e.png&w=8&q=70'
                placeholder='blur'
                className='hidden lg:block mx-auto object-contain w-full lg:h-[80vh]'
            />
        </div>
    );
}