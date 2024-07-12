import { Fetch } from '@/app/lib';
import HeroSwiper from './Swiper/HeroSwiper';
import PlaceholderImage from '@/public/static/viriditas.png';
import Image from 'next/image';

interface Banner {
    id: number;
    image: string;
    alt_text: string;
}

export default async function Hero() {
    const data = await Fetch({ endpoint: 'home/banners/' });
    const Banners: Banner[] = data;

    return (
        <section className="w-full">
            {Banners.length > 0 ? (
                <HeroSwiper Banners={Banners} />
            ) : (
                <div className="h-[60vh] lg:h-[80vh] w-full shadow-md">
                    <Image
                        src={PlaceholderImage}
                        alt="Viriditas Banner"
                        height={1080}
                        width={1920}
                        blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAW0lEQVR42h2Muw6AIBRDSSQKElcnd2d3F1ceF/gHFmYGPr9eGNqk7UnFYi20czDeQYeAjaVYkruxCcl2kseVCE+teFvD1zvuUiYkBrU6C8VBEcGkhCNn7DHOhx+2wCjEfbLavwAAAABJRU5ErkJggg=='
                        placeholder='blur'
                        sizes="100vw"
                        className='object-contain lg:h-[60vh] lg:object-cover'
                    />
                </div>
            )}
        </section>
    );
};