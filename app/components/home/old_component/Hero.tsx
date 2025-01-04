// import { Fetch } from '@/app/lib';
// import HeroSwiperLg from './Swiper/HeroSwiperLg';
// import PlaceholderImageLg from '@/public/static/banner/viriditas_lg.webp';
// import PlaceholderImageSm from '@/public/static/banner/viriditas_sm.webp';
// import Image from 'next/image';
// import HeroSwiperSm from './Swiper/HeroSwiperSm';

// interface Banner {
//     id: number;
//     image: string;
//     alt_text: string;
// }


// export default async function Hero() {

//     const data_lg = await Fetch({ endpoint: 'home/banners/large_screen/' });
//     const BannersLg: Banner[] = data_lg;

//     const data_sm = await Fetch({ endpoint: 'home/banners/small_screen/' });
//     const BannersSm: Banner[] = data_sm;

//     return (

//         <>
//             <section className="w-full hidden lg:block md:block">
//                 {BannersLg.length > 0 ? (
//                     <HeroSwiperLg Banners={BannersLg} />
//                 ) : (
//                     <div className="w-full shadow-md">
//                         <Image
//                             src={PlaceholderImageLg}
//                             alt="Viriditas Banner"
//                             height={1080}
//                             width={1920}
//                             blurDataURL="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fviriditas.5d50e32c.png&w=8&q=70"
//                             placeholder='blur'
//                             sizes="100vw"
//                             loading='lazy'
//                             className='object-contain' />
//                     </div>
//                 )}
//             </section>
//             <section className="w-full lg:hidden md:hidden">
//                 {BannersSm.length > 0 ? (
//                     <HeroSwiperSm Banners={BannersSm} />
//                 ) : (
//                     <Image
//                         src={PlaceholderImageSm}
//                         alt="Viriditas Banner"
//                         height={1200}
//                         width={800}
//                         blurDataURL='/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fviriditas_sm.c39f66bb.png&w=8&q=70'
//                         placeholder='blur'
//                         loading='lazy'
//                         sizes="100vw"
//                         className='object-cover h-[70vh]' />
//                 )}
//             </section>
//         </>

//     );
// };