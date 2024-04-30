import Lottie from 'lottie-react';

import { Cursor, useTypewriter } from 'react-simple-typewriter';

import plan2 from './plan2.json'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



const Banner = () => {
    const [text]= useTypewriter({
        words:['Destination', 'Place', 'Tour spot'],
        loop:{},
        typeSpeed:100,
        deleteSpeed:50,
    });
    return (
        <div className="w-[350px] md:w-[400px] lg:w-[1200px] mx-auto mt-20 ">
            <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay:2500,
                disableOnInteraction:false,
            }}
            modules={[Autoplay]}
            >
            <SwiperSlide>
        <div className='flex  justify-start items-center    lg:w-[1200x] mx-auto rounded-xl p-10 h-[800px] lg:h-[400px]  bg-[url("/image/Angkor.avif")] bg-center bg-[length:1200px_600px] bg-no-repeat'>
            <div className=''>
                <h1 className='text-white mb-2 font-extrabold text-4xl'>Explore The Word</h1>
                <h1 className='text-white mb-2 font-bold text-3xl overflow-hidden'>Choose The Best 
                <span> {text}</span>
                <span className='text-red-500'><Cursor/></span>
                </h1>
                <button className="btn bg-black text-white rounded-full border-none">Contact us now <Lottie className='w-8' animationData={plan2}/></button>
            </div>
        </div>
        </SwiperSlide>
            <SwiperSlide>
        <div className='flex  justify-start items-center    lg:w-[1200x] mx-auto rounded-xl p-10 h-[800px] lg:h-[400px]  bg-[url("/image/sundarban.avif")] bg-center bg-[length:1200px_600px] bg-no-repeat'>
            <div className=''>
                <h1 className='text-white mb-2 font-extrabold text-4xl'>Explore The Word</h1>
                <h1 className='text-white mb-2 font-bold text-3xl overflow-hidden'>Choose The Best 
                <span> {text}</span>
                <span className='text-red-500'><Cursor/></span>
                </h1>
                <button className="btn bg-black text-white rounded-full border-none">Contact us now <Lottie className='w-8' animationData={plan2}/></button>
            </div>
        </div>
        </SwiperSlide>
            <SwiperSlide>
        <div className='flex  justify-start items-center    lg:w-[1200px] mx-auto rounded-xl p-10 h-[800px] lg:h-[400px]  bg-[url("/image/kualalampur.avif")] 	bg-center bg-[length:1200px_600px]  bg-no-repeat'>
            <div className=''>
                <h1 className='text-white mb-2 font-extrabold text-4xl'>Explore The Word</h1>
                <h1 className='text-white mb-2 font-bold text-3xl overflow-hidden'>Choose The Best 
                <span> {text}</span>
                <span className='text-red-500'><Cursor/></span>
                </h1>
                <button className="btn bg-black text-white rounded-full border-none">Contact us now <Lottie className='w-8' animationData={plan2}/></button>
            </div>
        </div>
        </SwiperSlide>
        </Swiper>
        
       
        </div>
    );
};

export default Banner;